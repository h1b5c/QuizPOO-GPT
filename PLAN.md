# PLAN — Quiz ENADE POO

## Estado atual
- Levantamento ENADE concluído: 105 PDFs baixados, inventário por área/ano, critérios POO validados.
- Entregável: `ENADE_Computacao_Todas_Areas/POO_questoes_ENADE.md` com 64 entradas (2005:6, 2008:8, 2011:9, 2014:13, 2017:14, 2019:4, 2021:10, 2023:0).
- Quiz definido (ordem fixa, nota só objetivas, discursiva livre + gabarito, Next.js/Vercel), mas **não implementado**. Este histórico é a fonte; ver `PRD.md`/`ARCHITECTURE.md`/`TASKS.md`.

## Fases e prioridades
### P0 — Pipeline de dados (bloqueante, prioridade máxima)
- Gerar `data/questoes.json` (enunciado/alternativas/gabarito/padrão) + `public/img/` dos 64 itens.
- Validar OCR 2014/2017, gabaritos definitivos e anulações; fixar denominador da nota.

### P1 — MVP quiz (objetivas)
- Página quiz com ordem fixa embaralhada, confirmar verde/vermelho travado, anterior/próxima, progresso, resumo com nota 0–10 (aviso só-objetivas).

### P2 — Discursivas
- Textarea persistente + “Ver gabarito” (PR), fora da nota.

### P3 — Deploy e QA
- Publicar na Vercel, testar ponta a ponta mobile/desktop, revisões de imagem.

### P4 — Opcional (só se pedido)
- Filtros ano/prova, refazer só erradas, exportação.

## Dependências
- P1–P3 dependem de P0. Deploy depende de P1+P2.
- Regra: consultar `AGENTS.md`/`PRD.md`/`ARCHITECTURE.md`/`PLAN.md`/`TASKS.md` antes de cada tarefa; atualizar `PLAN.md`/`TASKS.md` ao concluir, preservando histórico.
