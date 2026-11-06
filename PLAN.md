# PLAN — Quiz ENADE POO

## Estado atual (06/11/2026)
- Levantamento ENADE concluído: 105 PDFs, 64 questões POO validadas em `POO_questoes_ENADE.md`.
- **MVP implementado e publicado no GitHub:** Next.js 14.2.5 + React 18 em raiz, `data/questoes.json` (64 itens, seed `20261105`), `public/img/` (64 PNGs 150dpi), `app/page.tsx` (quiz + resumo). `npm run build` passa, `npm start` serve `/` e `/img/*` (200).
- Git: `git init` + commit `2a3cc7c` push para `https://github.com/h1b5c/QuizPOO-GPT.git` (main). `.gitignore` exclui PDFs ENADE/`node_modules`/`.next` (apenas JSON/imagens/código versionados).
- Denominador fixado: **53 objetivas válidas** (54 objetivas − 1 anulada `2008_CST_ADS-19`); 10 discursivas fora da nota. `com gabarito: 53/53`, `com alternativas texto: 39/54` (15 em figura — resposta por letra via imagem).

## Fases e prioridades
### P0 — Pipeline de dados ✅ concluída (fix 06/11/2026)
- `scripts/build_questoes.py` gera `questoes.json` + imagens; corrigido vínculo GB/PR por ano (tríduo legado). PR discursivo extraído em 3/10; 7/10 com fallback “consulte PR/PDF + imagem”.
- **Fix textos "zoados":** passar a usar OCR v2 (`--psm 3`) para 2014/2017 (não PyMuPDF direto) e PyMuPDF só para demais; rebuild + verify enunciados legíveis (ex.: 2014 Q29 UML). Commit `4ffef07`. Alternativas em figura (31/54 sem texto estruturado) respondidas pela letra via imagem da página.

### P1 — MVP quiz (objetivas) ✅ concluída
- Ordem fixa embaralhada, confirmar verde/vermelho travado, anterior/próxima, progresso, resumo com nota `10*acertos/53` e aviso só-objetivas; anulada fora da nota; alternativas em figura respondíveis por letra.

### P2 — Discursivas ✅ concluída
- Textarea persistente em `localStorage v1` + “Ver gabarito” (PR), fora da nota.

### P3 — Deploy e QA ✅ concluída (06/11/2026, Vercel build ✓)
- ✅ `npm run build` + `npm start` + curl + contagens validados.
- ✅ Vercel build `3e3befe` OK em 32s (`/` 44,6 kB, First Load 132 kB), deploy concluído. Avisos não bloqueantes: `next@14.2.5` deprecated (vulnerabilidade de segurança — upgrade para versão corrigida pendente) e `npm warn cache-dir` do ambiente Vercel.
- ⚠️ Repo do deploy: log mostra `github.com/h1b5c/quiz` (minúsculo), commit `3e3befe`, enquanto este workspace usa `https://github.com/h1b5c/QuizPOO-GPT.git` @ `c8ffb70`. Reconciliar (renomear/fork/sync) e anotar URL pública.

### P4 — Opcional (só se pedido)
- Filtros ano/prova, refazer só erradas, exportação.

## Dependências
- P1–P3 dependiam de P0 (concluído). Deploy depende só de autenticação Vercel.
- Regra: consultar `AGENTS.md`/`PRD.md`/`ARCHITECTURE.md`/`PLAN.md`/`TASKS.md` antes de cada tarefa; atualizar `PLAN.md`/`TASKS.md` ao concluir, preservando histórico.
- [x] Política obrigatória de testes/commits implementada (ESLint, Vitest data/calc/quiz, Husky pre-commit `verify`, GitHub Actions CI): 15 testes passam, `lint` só com warning `<img>` não bloqueante, `typecheck` e `build` OK. Sem commit nesta tarefa por ordem expressa (aguardando autorização).
