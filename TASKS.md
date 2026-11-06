# TASKS — Quiz ENADE POO

## Concluídas
- [x] Baixar e inventariar 105 PDFs ENADE (INEP) por área/ano; mapa PDF/URL em `ENADE_Computacao_Todas_Areas/README.md`.
- [x] Auditar encoding (Calibri 2014/2017 40–52% corrompida → OCR; demais PyMuPDF) e quirks legados/questionário.
- [x] Levantar 64 questões POO (PV apenas) em `POO_questoes_ENADE.md` com página 1-based e critérios/antifalsos documentados.
- [x] Criar `AGENTS.md` (regras repo + extração + quiz planejado).
- [x] Definir quiz: ordem fixa embaralhada, discursiva livre + gabarito sem correção, nota só objetivas 0–10, Next.js estático na Vercel.
- [x] Criar `PRD.md`, `ARCHITECTURE.md`, `PLAN.md`, `TASKS.md` (esta documentação).

## Pendentes
- [ ] P0: extrair `questoes.json` (PV enunciado/alternativas, GB letra, PR padrão) para as 64 entradas.
- [ ] P0: recortar imagens/diagramas dos PVs em `public/img/` e referenciar no JSON.
- [ ] P0: validar gabaritos definitivos/anulações; fixar denominador final da nota (estimado 54 objetivas) e tratar anuladas.
- [ ] [pendência] Texto integral dos PR discursivos (~10) — fonte confirmada (`PR`), extração pendente.
- [ ] P1: implementar app Next.js (quiz objetiva, fechar verde/vermelho, anterior/próxima, progresso, resumo/nota com aviso só-objetivas).
- [ ] P2: implementar discursivas (textarea persistente + “Ver gabarito”, fora da nota).
- [ ] P3: deploy Vercel + QA ponta a ponta mobile/desktop.
- [ ] [pendência] Nome/domínio do projeto Vercel.

## Em andamento
- (nenhuma — aguardando início de P0)

## Regra
Antes de iniciar qualquer tarefa: ler `AGENTS.md`, `PRD.md`, `ARCHITECTURE.md`, `PLAN.md`, `TASKS.md`. Ao concluir: mover item para Concluídas com evidência e atualizar `PLAN.md` sem apagar histórico.
