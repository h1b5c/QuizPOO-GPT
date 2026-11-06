#!/usr/bin/env python3
"""Build data/questoes.json from POO_questoes_ENADE.md (64 entries).

Sources: PV (enunciado/alternativas), GB (letter), PR (discursive pattern), page image PNG.
Run: python3 scripts/build_questoes.py
Outputs: data/questoes.json + public/img/<id>.png (page render at 150dpi)
"""
import pathlib, re, json, sys
import pymupdf

ROOT = pathlib.Path(__file__).resolve().parent.parent
MD = ROOT / "ENADE_Computacao_Todas_Areas" / "POO_questoes_ENADE.md"
BASE = ROOT / "ENADE_Computacao_Todas_Areas"
OUT_JSON = ROOT / "data" / "questoes.json"
IMG_DIR = ROOT / "public" / "img"
IMG_DIR.mkdir(parents=True, exist_ok=True)

# --- parse POO md: each bullet has pdf path + page + label ---
text = MD.read_text()
entries = []
pat = re.compile(r"- \*\*Questão (Discursiva )?(\d+)\*\* — p\. ([\d–-]+) .*?PDF: `([^`]+)`, p\. (\d+), \*\*Questão", re.S)
for m in pat.finditer(text):
    disc = bool(m.group(1))
    num = int(m.group(2))
    pdf_rel = m.group(4)
    pagina = int(m.group(5))
    entries.append({"disc": disc, "num": num, "pdf_rel": pdf_rel, "pagina": pagina})

print(f"parsed {len(entries)} entries")
if len(entries) != 64:
    print(f"WARN expected 64 got {len(entries)}", file=sys.stderr)

def clean(s: str) -> str:
    s = s.replace("\r", " ")
    # drop page headers/footers noise
    for pat_drop in [r"EXAME NACIONAL DE DESEMPENHO DOS ESTUDANTES", r"ÁREA LIVRE", r"FORMACAO GERAL", r"FORMAÇÃO GERAL", r"COMPONENTE ESPECÍFICO", r"COMPONENTE ESPECIFICO", r"RASCUNHO.*", r"\*[A-Z0-9]+\*"]:
        s = re.sub(pat_drop, " ", s, flags=re.I)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def parse_alt(s: str):
    # find A..E markers at line starts or spaced
    # Returns (enunciado, [{letra,texto}])
    # Look for pattern like " A " / " B " with long context; use regex for \b([A-E])\s+
    # Strategy: find first occurrence of each letter in order
    idxs = []
    for letra in "ABCDE":
        m = re.search(rf"(?:^|\s){letra}\s+", s)
        if m:
            idxs.append((letra, m.start()))
    # Only accept if found in order and at least enunciado before A is >80 chars
    if len(idxs) >= 4 and idxs[0][1] > 80:
        # sort by pos
        idxs = sorted(idxs, key=lambda x: x[1])
        # must be A,B,C,D,E order
        letters = [x[0] for x in idxs]
        if letters == list("ABCDE")[:len(letters)] or letters == list("ABCDE"):
            enunciado = s[:idxs[0][1]].strip()
            alts = []
            for i, (letra, pos) in enumerate(idxs):
                end = idxs[i+1][1] if i+1 < len(idxs) else len(s)
                txt = s[pos+len(letra):end].strip(" .)")
                # skip letter spacing: remove leading punctuation
                txt = re.sub(r"^[\s\.\)]+", "", txt).strip()
                if txt:
                    alts.append({"letra": letra, "texto": txt[:1200]})
            if len(alts) >= 4:
                return enunciado, alts
    return s, []

def gb_search(gb_path: pathlib.Path, num: int, disc: bool):
    try:
        doc = pymupdf.open(str(gb_path))
        txt = "\n".join(p.get_text() for p in doc)
    except Exception:
        return None, False
    # normalize: find lines with number and answer
    # patterns: "12 - B", "QUESTÃO 12 B", "12 B", "12 ANULADA", "12 Discursiva", "***"
    # Search for num as standalone
    for m in re.finditer(rf"(?:QUEST[ÃA]O\s+|QUESTAO\s+|ITEM\s+)?{num}\s*[-–—\.]?\s+([A-E]\b|ANULADA|ANULADAS?|Discursiva|\*\*\*|X)", txt, flags=re.I):
        ans = m.group(1).strip().upper()
        if ans.startswith("A") and len(ans)==1 or ans in ("B","C","D","E"):
            return ans, False
        if "ANUL" in ans:
            return None, True
        if "DISC" in ans or ans == "***":
            return None, False  # discursive marker
    # fallback: token sequence pairs number letter lines
    toks = re.findall(r"\b([0-9]{1,2})\b\s+([A-E])\b", txt)
    for n, l in toks:
        if int(n) == num:
            return l, False
    return None, False

def find_gb_pr(pv_path: pathlib.Path):
    d = pv_path.parent
    cands = list(d.glob("*.pdf"))
    y = pv_path.name[:4]
    # Prefer year-matched GB/PR (legado folder has 2005/2008/2011 together)
    gb_year = [c for c in cands if c.name.startswith(y) and ("GB" in c.name or "GABARITO" in c.name or "gab" in c.name.lower())]
    pr_year = [c for c in cands if c.name.startswith(y) and ("PR" in c.name or "PADRA" in c.name or "padrao" in c.name.lower())]
    gb = gb_year[0] if gb_year else next((c for c in cands if "GB" in c.name or "GABARITO" in c.name or "gab" in c.name.lower()), None)
    pr = pr_year[0] if pr_year else next((c for c in cands if "PR" in c.name or "PADRA" in c.name or "padrao" in c.name.lower()), None)
    return gb, pr

def pr_extract(pr_path: pathlib.Path, num: int):
    try:
        doc = pymupdf.open(str(pr_path))
        txt = "\n".join(p.get_text() for p in doc)
    except Exception:
        return None
    # find DISCURSIVA N heading
    m = re.search(rf"DISCURSIVA\s+0*{num}\b", txt, flags=re.I)
    if not m:
        m = re.search(rf"QUESTAO\s+DISCURSIVA\s+0*{num}\b", txt, flags=re.I)
    if not m:
        return None
    snippet = txt[m.end():m.end()+4000]
    # cut at next DISCURSIVA / QUESTÃO heading or end
    cut = re.search(r"(DISCURSIVA\s+\d+|QUEST[ÃA]O\s+\d+|QUESTION[ÃA]RIO)", snippet, flags=re.I)
    if cut:
        snippet = snippet[:cut.start()]
    snippet = clean(snippet)
    return snippet[:2500] if len(snippet) > 80 else None

def load_block(pub_pdf: pathlib.Path, pagina_1based: int, num: int, disc: bool):
    # Use mupdf direct: find marker on that page and extract until next marker / next page
    try:
        doc = pymupdf.open(str(pub_pdf))
    except Exception:
        return ""
    pages_text = []
    for i, page in enumerate(doc, start=1):
        pages_text.append((i, page.get_text()))
    # markers
    pat = re.compile(r"QUEST[ÃA]O\s+(?:DISCURSIVA\s+)?0*(\d+)\b", flags=re.I)
    markers = []  # (page, pos_in_page_text, num)
    for pg, txt in pages_text:
        for m in pat.finditer(txt):
            markers.append((pg, m.start(), int(m.group(1)), bool(re.search(r"DISCURSIVA", m.group(0), re.I))))
    # find target marker: matching num and page == pagina, prefer disc match
    # markers are sequential; find index where page==pagina and num==num
    target_idx = None
    for idx, (pg, pos, n, isd) in enumerate(markers):
        if pg == pagina_1based and n == num:
            # prefer disc match
            if isd == disc or target_idx is None:
                target_idx = idx
    if target_idx is None:
        # closest: first marker with num on any page >= pagina
        for idx, (pg, pos, n, isd) in enumerate(markers):
            if n == num and pg >= pagina_1based:
                target_idx = idx
                break
    if target_idx is None:
        # fallback: extract whole page text
        for pg, txt in pages_text:
            if pg == pagina_1based:
                return txt
        return ""
    pg, pos, _, _ = markers[target_idx]
    txt = dict(pages_text)[pg]
    start = pos
    # end = next marker start (same page or next pages text)
    end_txt = txt
    if target_idx + 1 < len(markers):
        npg, npos, _, _ = markers[target_idx+1]
        if npg == pg:
            end_txt = txt[start:npos]
        else:
            # append following pages until next marker
            parts = [txt[start:]]
            for pg2, txt2 in pages_text:
                if pg2 > pg and pg2 < npg:
                    parts.append(txt2)
                elif pg2 == npg:
                    parts.append(txt2[:npos])
                    break
            end_txt = "\n".join(parts)
    else:
        end_txt = txt[start:]
    return end_txt

items = []
seed_order = list(range(len(entries)))
# deterministic shuffle with seed 20261105 (mulberry-like)
def shuffled(n, seed=20261105):
    import random
    rng = random.Random(seed)
    idx = list(range(n))
    rng.shuffle(idx)
    return idx

order = shuffled(len(entries))

# Build items in shuffled order, but keep original fields
mupdf_cache = {}
for out_pos, src_idx in enumerate(order):
    e = entries[src_idx]
    pv_path = BASE / e["pdf_rel"]
    # page image
    img_rel = None
    try:
        doc = pymupdf.open(str(pv_path))
        pages = len(doc)
        pg_idx = min(max(e["pagina"] - 1, 0), pages - 1)
        pix = doc[pg_idx].get_pixmap(dpi=150)
        qid = f"{pv_path.parent.name}-{e['num']}{'-D' if e['disc'] else ''}"
        img_name = re.sub(r"[^A-Za-z0-9\-]+", "_", qid) + ".png"
        pix.save(str(IMG_DIR / img_name))
        img_rel = f"/img/{img_name}"
    except Exception as ex:
        print(f"img fail {e}: {ex}", file=sys.stderr)
    block = load_block(pv_path, e["pagina"], e["num"], e["disc"])
    block_clean = clean(block)
    # remove leading marker
    block_clean = re.sub(r"^QUEST[ÃA]O\s+(?:DISCURSIVA\s+)?0*\d+\s*", "", block_clean, flags=re.I).strip()
    enunciado = block_clean
    alternativas = []
    if not e["disc"]:
        enunciado, alternativas = parse_alt(block_clean)
    gb_path, pr_path = find_gb_pr(pv_path)
    gabarito, anulada = (None, False)
    if not e["disc"] and gb_path and gb_path.exists():
        gabarito, anulada = gb_search(gb_path, e["num"], e["disc"])
    padrao = None
    if e["disc"] and pr_path and pr_path.exists():
        padrao = pr_extract(pr_path, e["num"])
    qid = f"{pv_path.parent.name}-{e['num']}{'-D' if e['disc'] else ''}"
    items.append({
        "id": qid,
        "ano": int(re.search(r"(20\d\d)", e["pdf_rel"]).group(1)),
        "prova": pv_path.parent.name,
        "pdf": e["pdf_rel"],
        "numero": e["num"],
        "discursiva": bool(e["disc"]),
        "pagina": e["pagina"],
        "enunciado": (enunciado or block_clean)[:4000],
        "alternativas": alternativas,
        "gabarito": gabarito,
        "anulada": bool(anulada),
        "padrao": padrao,
        "imagem": img_rel,
    })

OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
OUT_JSON.write_text(json.dumps(items, ensure_ascii=False, indent=2))
print(f"wrote {OUT_JSON} ({len(items)} items)")
# report missing gabaritos
missing = [i["id"] for i in items if not i["discursiva"] and not i["gabarito"] and not i["anulada"]]
print(f"missing gabarito (obj): {len(missing)} {missing[:20]}")
missing_alt = [i["id"] for i in items if not i["discursiva"] and len(i["alternativas"]) < 4]
print(f"missing alt <4: {len(missing_alt)} {missing_alt[:20]}")
missing_pr = [i["id"] for i in items if i["discursiva"] and not i["padrao"]]
print(f"missing padrao (disc): {len(missing_pr)} {missing_pr}")
