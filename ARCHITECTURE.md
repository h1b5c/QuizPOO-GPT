# ARCHITECTURE — Quiz ENADE POO

## 1. Visão geral
App estático Next.js App Router (TypeScript) na Vercel. Sem backend/base de dados. Dados gerados estaticamente a partir dos PDFs; estado do aluno só em `localStorage`.

## 2. Estrutura proposta
```
app/
  layout.tsx          # header, progresso global
  page.tsx            # quiz (ordem fixa embaralhada)
  componentes: QuizCard, Alternativas, Feedback, Navegacao, Resumo
data/questoes.json    # lista gerada (ver §3)
public/img/           # PNGs de diagramas/código recortados dos PV
```

## 3. Dados (`questoes.json`)
Por questão: `id (ano-prova-numero)`, `ano`, `prova`, `pdf`, `numero`, `pagina (1-based)`, `tipo (objetiva|discursiva)`, `enunciado`, `alternativas[] {letra,texto}` ou `padrao` (discursiva), `gabarito (letra)` ou `imagem`.
- Fonte: `PV` (enunciado/alternativas), `GB` (letra), `PR` (padrão discursivo).
- Ordem: gerar uma vez com Fisher-Yates de seed fixa (ex. `20261105`) e persistir a ordem no JSON — não re-sortear em runtime.
- Base: 64 entradas em `POO_questoes_ENADE.md` (~54 objetivas + ~10 discursivas; denominador final pendente de anulações).

## 4. Componentes e fluxo
- **QuizCard:** renderiza enunciado/imagem; se objetiva → radio A–E + `Confirmar`; se discursiva → `textarea` + `Ver gabarito`.
- **Feedback:** após confirmar objetiva, trava, aplica verde (gabarito) / vermelho (escolha errada), expõe “Sua resposta vs Gabarito” via `aria-live`.
- **Navegação:** anterior/próxima, índices de progresso coloridos (cinza/verde/vermelho/roxo-discursiva), reiniciar limpa `localStorage`.
- **Resumo:** nota `10*acertos/total_objetivas` com aviso “referente somente a objetivas”, listas objetivas/discursivas clicáveis, “Refazer só erradas”.

## 5. Integrações
- Build-time apenas: scripts Python (PyMuPDF `page.get_text()` + OCR 2014/2017 `pdftoppm -r 300`/`tesseract por --psm 3`) e recorte de imagens. Runtime não toca nos PDFs.
- Deploy Vercel: preset Next.js, assets estáticas em `public/`, sem env vars no MVP.

## 6. Decisões técnicas
- Estático vs backend: escolhido estático por simplicidade/desempenho/escopo MVP.
- Next.js vs Vite puro: escolhido Next.js App Router para componentização e deploy Vercel de primeira (Vite é alternativa válida, não escolhida).
- Sem correção automática de discursiva (decisão do usuário: só mostrar PR).
- Limitações conhecidas: OCR 2014/2017 exige revisão manual; diagramas/code são imagens (não texto selecionável).
