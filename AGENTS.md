# AGENTS.md

## Repo reality (fase atual: implementação + Git)
- **IMPLEMENTATION PHASE** — code/git/build/deploy authorized. Previous "no code, no git" rule is obsolete. App is Next.js at repo root (see `ARCHITECTURE.md`).
- Not yet fully a code repo until scaffolding lands; after `npm run build` passes, standard Next.js flow applies (`npm install`, `npm run dev/build/start`).
- Do not run package managers before scaffolding/init instructions land — same guard as before.
- Root has 3 loose C# textbooks (not ENADE) — ignore for ENADE work: `Aprenda Visual C#*.pdf`, `C#.pdf`, `k19-k31-csharp-*.pdf`.
- Canonical data: `ENADE_Computacao_Todas_Areas/` (105 PDFs, ~159M, verified). `ENADE_Engenharia_de_Computacao/` is old hardlinked subset (21 PDFs) — keep intact, use `cp -al` if copying, never duplicate bytes.
- Per area: 3 PDFs — `PV`=Prova, `GB`=Gabarito definitivo, `PR`=Padrão de Resposta. `POO_questoes_ENADE.md` only checked `PV` (35 files).

## Sources and download
- Official source: `https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos/ANO`, files on `download.inep.gov.br`.
- Use `http://` for file URLs (https unstable) + `curl -L --retry 3`. Verify with `file`/`pdfinfo`.
- No `Engenharia de Software` area — only `Engenharia de Computação`. `relacionadas_Automacao/` is distinct area (embarcados), exclude for strict computação scope.

## Extraction gotchas (why naive search fails)
- 2014/2017 PDFs (Calibri) give 40–52% garbled chars in `pdftotext` — use OCR: `pdftoppm -png -r 300` + `tesseract -l por --psm 3` (PSM 6 drops `QUESTÃO` headers). Others: PyMuPDF `page.get_text()` (best column order).
- Legacy quirks: 2005 `Q U ES T Ã O` spaced, 2021 `QuEStãO` mixed-case, two-column PDFs (2008/2011), questionário no final reuses numbers 1–9 — always cut at `Qual o grau` / truncate.
- ENADE is triennial: 2025/2022/2018… have no computação. Don't fetch phantom years.

## POO list — current deliverable
- `ENADE_Computacao_Todas_Areas/POO_questoes_ENADE.md`: 64 entries (ano→prova→questão), pages are PDF 1-based. Counts: 2005:6, 2008:8, 2011:9, 2014:13, 2017:14, 2019:4, 2021:10, 2023:0. Full criteria + exclusions (e.g. network `encapsulamento`, generic `interface/classe/objeto`) are documented at top of that file — apply same rules before adding entries.

## Quiz site (planned, Vercel)
- Next.js App Router static, data from JSON (`questoes.json`) + images in `public/img/`, state only in `localStorage`.
- Open directly on shuffled list with fixed seed (same order for everyone). Objective: confirm → green=correct/red=wrong, locked, prev/next, summary with score `10*acertos/54 objetivas` and explicit “nota referente somente a objetivas”. Discursive (~10): free textarea + “Ver gabarito”, never scored.
- Requires per-question: enunciado+alternativas (PV), gabarito letter (GB), padrão discursivo (PR), cropped diagram PNG for UML/code questions.

## Work protocol (future sessions)
- Before any new task: read `AGENTS.md`, `PRD.md`, `ARCHITECTURE.md`, `PLAN.md`, `TASKS.md` (and `POO_questoes_ENADE.md` for ENADE data).
- After completing each activity: update `PLAN.md` (progress) and `TASKS.md` (done/pending/in-progress) preserving history and real state. Do not mark complete without verification.
- Do not implement features beyond current scope in PRD.md. Flag missing info as pendências in `TASKS.md`/`PRD.md`, do not invent requirements.

## Política Obrigatória de Testes e Commits
### Antes de qualquer commit
- Executar ESLint (`npm run lint`), testes unitários (`npm run test`), testes de integração quando aplicáveis, build de produção (`npm run build`), verificação TypeScript (`npm run typecheck`).
- Verificar que não existem arquivos/dados indevidos no commit (PDFs ENADE, `node_modules`, `.next`, caches — ver `.gitignore`).
- Comando único: `npm run verify` (= lint + typecheck + test + build). Husky pre-commit roda `npm run verify`; GitHub Actions (`.github/workflows/ci.yml`) roda a mesma bateria em push/PR.

### Testes específicos do projeto (não remover/enfraquecer)
- `__tests__/data.test.ts`: integridade/estrutura `questoes.json`, enunciados e alternativas obrigatórias (5× A–E ou fallback figura), gabaritos A–E, IDs únicos, existência de imagens em `public/img/`, 53 objetivas válidas (1 anulada fora), 10 discursivas.
- `__tests__/calc.test.ts`: cálculo da nota `10*acertos/53`.
- `__tests__/quiz.test.tsx`: navegação anterior/próxima, resumo/nota só-objetivas, discursiva com `textarea` + “Ver gabarito”, persistência `localStorage v1`.

### Regras de commit
- Nunca commite com testes falhando; nunca ignore erros nem desabilite testes para aprovar; corrija antes de retentar; não use comandos que escondam erros/resultados.
- Antes do commit, apresentar resumo dos testes executados e resultados; preservar alterações preexistentes que não sejam suas.
- **Fluxo GitHub+Vercel (automatizado):** 1) branch própria por funcionalidade/correção a partir da `main` sincronizada (`git fetch --all` + `git checkout main`/rebase); 2) implementar + testes (+ regressão se bug); 3) `npm run verify` (lint→typecheck→test→build) — **se falhar, não commitar nem fazer push**; corrigir na mesma branch; 4) se passar, commit automático + push da **branch** (não da `main`), sem force push, sem PDFs ENADE; 5) GitHub Actions valida push/PR; integração GitHub→Vercel gera **Preview Deployment** da branch; 6) informar URL da Preview; 7) **não** fazer merge na `main` nem promover a produção sem aprovação explícita do usuário (sua única intervenção obrigatória é testar Preview e aprovar).

### Política de regressão
- Ao corrigir bug: identificar causa raiz, criar teste que reproduza **antes** da correção, confirmar falha→passo depois, manter teste permanentemente, verificar regressões e rodar `npm run verify` antes de qualquer commit.
- Nunca remover/enfraquecer teste só para passar. Sem automação possível, documentar motivo e propor validação alternativa. Novo problema revelado → registrar e investigar separadamente; atualizar docs se mudar comportamento.
