"use client";
import { useEffect, useState } from "react";
import questoes from "../data/questoes.json";

type Questao = {
  id: string; ano: number; prova: string; pdf: string; numero: number;
  discursiva: boolean; pagina: number; enunciado: string;
  alternativas: { letra: string; texto: string }[]; gabarito: string | null;
  anulada: boolean; padrao: string | null; imagem: string | null;
};

const QS = questoes as Questao[];
const OBJ = QS.filter((q) => !q.discursiva && !q.anulada);
const STORAGE_KEY = "quizpoo-v1";
type Resp = { sel: string | null; confirmed: boolean; text: string; showGab: boolean };
const empty: Resp = { sel: null, confirmed: false, text: "", showGab: false };

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState<Record<string, Resp>>({});
  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) { const p = JSON.parse(raw); setResp(p.resp || {}); setIdx(p.idx || 0); setFinished(!!p.finished); } } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => { if (!loaded) return; try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ resp, idx, finished })); } catch {} }, [resp, idx, finished, loaded]);
  const q = QS[idx];
  const r: Resp = resp[q.id] || empty;
  const setR = (patch: Partial<Resp>) => setResp((s) => ({ ...s, [q.id]: { ...(s[q.id] || empty), ...patch } }));
  const acertos = OBJ.filter((o) => resp[o.id]?.confirmed && resp[o.id]?.sel === o.gabarito).length;
  const respondidas = OBJ.filter((o) => resp[o.id]?.confirmed).length;
  const nota = OBJ.length ? (10 * acertos) / OBJ.length : 0;
  const altOpts = q.discursiva ? [] : (q.alternativas.length >= 2 ? q.alternativas : ["A","B","C","D","E"].map((l) => ({ letra: l, texto: "" })));
  const confirm = () => { if (!r.sel) return; setR({ confirmed: true }); };
  const next = () => { if (idx + 1 < QS.length) setIdx(idx + 1); else setFinished(true); };
  const prev = () => setIdx(Math.max(0, idx - 1));
  const restart = () => { setResp({}); setIdx(0); setFinished(false); try { localStorage.removeItem(STORAGE_KEY); } catch {} };
  if (!loaded) return <p style={{ padding: 16 }}>Carregando…</p>;
  if (finished) {
    return (
      <main style={{ maxWidth: 860, margin: "0 auto", padding: 16 }}>
        <h1>Resumo</h1>
        <p>Nota: <strong>{nota.toFixed(1)}</strong> (0–10)</p>
        <p><em>Nota referente somente às questões objetivas ({OBJ.length} válidas — anuladas e discursivas fora). As discursivas não entram na conta.</em></p>
        <p>Acertos: {acertos} · Erradas: {respondidas - acertos} · Não respondidas: {OBJ.length - respondidas}</p>
        <p><button onClick={restart}>Reiniciar quiz</button></p>
        <h2>Objetivas</h2>
        <ul>{OBJ.map((o) => { const s = resp[o.id]; const ok = s?.confirmed && s.sel === o.gabarito; return (
          <li key={o.id}>{o.ano} · {o.prova} Q{o.numero} (p.{o.pagina}) — {!s?.confirmed ? "não respondida" : ok ? "✔ acerto" : "✘ erro"} — Gabarito: {o.gabarito || "—"}{" "}<button onClick={() => { setIdx(QS.findIndex((x) => x.id === o.id)); setFinished(false); }}>ver</button></li>); })}</ul>
        <h2>Discursivas</h2>
        <ul>{QS.filter((x) => x.discursiva).map((d) => (<li key={d.id}>{d.ano} · {d.prova} Q{d.numero} (p.{d.pagina}){" "}<button onClick={() => { setIdx(QS.findIndex((x) => x.id === d.id)); setFinished(false); }}>ver</button></li>))}</ul>
      </main>
    );
  }
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <strong>Quiz POO — ENADE</strong><span>Questão {idx + 1} de {QS.length}</span><button onClick={restart}>Reiniciar</button>
      </header>
      <progress value={idx + 1} max={QS.length} style={{ width: "100%" }} />
      <p><span aria-live="polite">{q.discursiva ? `Discursiva · ${q.ano} · ${q.prova} Q${q.numero} (p.${q.pagina})` : `Objetiva · ${q.ano} · ${q.prova} Q${q.numero} (p.${q.pagina})`}</span></p>
      <section><p style={{ whiteSpace: "pre-wrap" }}>{q.enunciado}</p>
        {q.imagem && (<figure><img src={q.imagem} alt={`Página ${q.pagina} da prova ${q.prova}`} style={{ maxWidth: "100%", border: "1px solid #ddd" }} /></figure>)}
      </section>
      {!q.discursiva && !q.anulada && (
        <section aria-label="Alternativas">
          {q.alternativas.length < 2 && <p><em>Alternativas nesta questão estão na figura/página acima — selecione pela letra.</em></p>}
          {altOpts.map((a) => { const isGab = a.letra === q.gabarito; const isSel = a.letra === r.sel; let bg = "#fff"; let color = "#000"; if (r.confirmed && isGab) { bg = "#2e7d32"; color = "#fff"; } else if (r.confirmed && isSel && !isGab) { bg = "#b71c1c"; color = "#fff"; } else if (isSel) { bg = "#e3f2fd"; }
            return (<label key={a.letra} style={{ display: "block", padding: 10, margin: "6px 0", border: "1px solid #ccc", borderRadius: 8, background: bg, color, cursor: r.confirmed ? "default" : "pointer" }}>
              <input type="radio" name="alt" value={a.letra} checked={isSel} disabled={r.confirmed} onChange={() => setR({ sel: a.letra })} />{" "}<strong>{a.letra})</strong> {a.texto}</label>); })}
          {!r.confirmed && <button onClick={confirm} disabled={!r.sel} style={{ padding: "8px 16px" }}>Confirmar</button>}
          {r.confirmed && <p aria-live="polite">{r.sel === q.gabarito ? "Correta!" : `Errada. Sua resposta: ${r.sel} · Gabarito: ${q.gabarito}`}</p>}
        </section>
      )}
      {!q.discursiva && q.anulada && (<p><em>Questão anulada no gabarito definitivo — não entra na nota. Leia a figura e navegue para a próxima.</em></p>)}
      {q.discursiva && (
        <section aria-label="Discursiva">
          <label htmlFor="disc">Sua resposta (não é corrigida automaticamente):</label>
          <textarea id="disc" rows={8} style={{ width: "100%", marginTop: 8 }} value={r.text} onChange={(e) => setR({ text: e.target.value })} />
          <p><button onClick={() => setR({ showGab: true })}>Ver gabarito</button></p>
          {r.showGab && (<div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}><h3>Padrão de resposta (PR)</h3><p style={{ whiteSpace: "pre-wrap" }}>{q.padrao || "Padrão não extraído — consulte o PR/PDF original e a imagem da página."}</p></div>)}
        </section>
      )}
      <nav style={{ display: "flex", gap: 8, marginTop: 16 }}><button onClick={prev} disabled={idx === 0}>Anterior</button><button onClick={next}>{idx + 1 === QS.length ? "Ver resumo" : "Próxima"}</button></nav>
      <p style={{ color: "#555" }}>Fonte: questões ENADE validadas (POO). Nota do resumo: só objetivas.</p>
    </main>
  );
}
