# TASKS — Quiz ENADE POO

## Concluídas
- [x] Baixar e inventariar 105 PDFs ENADE (INEP) por área/ano; mapa PDF/URL em `ENADE_Computacao_Todas_Areas/README.md`.
- [x] Auditar encoding (Calibri 2014/2017 40–52% corrompida → OCR; demais PyMuPDF) e quirks legados/questionário.
- [x] Levantar 64 questões POO (PV apenas) em `POO_questoes_ENADE.md` com página 1-based e critérios/antifalsos documentados.
- [x] Criar `AGENTS.md` (regras repo + extração + quiz planejado).
- [x] Definir quiz: ordem fixa embaralhada, discursiva livre + gabarito sem correção, nota só objetivas 0–10, Next.js estático na Vercel.
- [x] Criar `PRD.md`, `ARCHITECTURE.md`, `PLAN.md`, `TASKS.md` (esta documentação).
- [x] Atualizar `AGENTS.md` para fase implementação (code/git/build/deploy autorizados).
- [x] Criar `.gitignore` Next.js (exclui PDFs ENADE, `node_modules`, `.next`).
- [x] P0: `scripts/build_questoes.py` → `data/questoes.json` (64 itens) + `public/img/` (64 PNGs); GB/PR por ano; `data` validado (64 total, 54 obj, 10 disc, 53 com gabarito, 1 anulada excluída da nota).
- [x] P1: app Next.js (`app/page.tsx`): quiz objetiva, confirmar verde/vermelho travado, anterior/próxima, progresso, resumo/nota `10*acertos/53` com aviso só-objetivas; alternativas em figura por letra.
- [x] P2: discursivas (textarea em `localStorage v1` + “Ver gabarito”, fora da nota).
- [x] Git: init + commit `2a3cc7c` + push para `https://github.com/h1b5c/QuizPOO-GPT.git` (main).
- [x] Build/QA local: `npm run build` ✓, `npm start` 200 em `/` e `/img/*`, contagens JSON conferidas.

## Pendentes
- [ ] P3: Publicar na Vercel — **`npx vercel whoami: Logged out`**. Executar `vercel login` local ou importar `h1b5c/QuizPOO-GPT` em vercel.com → Add New Project (preset Next.js, env vars nenhuma). Não publicado ainda.
- [ ] [pendência] Completar `padrao` (PR) de 7/10 discursivas — fallback atual mostra “consulte PR/PDF + imagem”.
- [ ] [pendência] Transcrever texto das 15 alternativas em figura (39/54 com texto hoje) — MVP permite responder pela letra via imagem da página.
- [ ] [pendência] QA visual ponta a ponta no navegador (confirmar/navegar/persistência/mobile) e garantia de carregamento das 64 imagens — build/start validados, testes de clique pendentes.
- [ ] [pendência] Nome/domínio final Vercel.

## Em andamento
- (nenhuma — aguardando autenticação Vercel para P3)

## Regra
Antes de iniciar qualquer tarefa: ler `AGENTS.md`, `PRD.md`, `ARCHITECTURE.md`, `PLAN.md`, `TASKS.md`. Ao concluir: mover item para Concluídas com evidência e atualizar `PLAN.md` sem apagar histórico.
