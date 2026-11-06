# PRD — Quiz ENADE POO

## 1. Objetivo
Site público (Vercel) para colegas praticarem Programação Orientada a Objetos usando apenas questões ENADE já validadas. Abre direto em uma questão, permite responder objetivas com correção imediata e discursivas com texto livre, navega com anterior/próxima e gera resumo final com nota de 0 a 10.

## 2. Público e contexto
- Colegas do curso, acesso sem login, sem backend.
- Fonte: INEP — acervo de 105 PDFs em `ENADE_Computacao_Todas_Areas/`. Lista validação: `POO_questoes_ENADE.md` (64 entradas prova×questão).

## 3. Escopo
### Dentro
- Quiz com 64 entradas (ano→prova→questão). São ~54 objetivas (A–E) + ~10 discursivas (valor exato a confirmar após filtro de anulações).
- Objetiva: selecionar alternativa → Confirmar → verde (acertou) / vermelho (errou), trava resposta, anterior/próxima, progresso.
- Discursiva: campo de texto livre (persistido no navegador), botão “Ver gabarito” com padrão de resposta (PR), sem validação.
- Resumo final: acertos/erros, nota 0–10 proporcional, lista clicável para revisão.
- Ordem fixa embaralhada (determinística, mesma para todos).

### Fora (MVP)
- Login, ranking, banco de dados, filtros por ano/prova, modo por prova, cronômetro, exportação, correção automática de discursiva.

## 4. Requisitos funcionais
- FR1: Na abertura, exibir a primeira questão da ordem fixa embaralhada, sem tela de configuração obrigatória.
- FR2: Objetiva exige confirmação explícita; antes de confirmar permite trocar seleção; após confirmar não permite alterar.
- FR3: Feedback visual imediato (verde/vermelho) + indicação de “Sua resposta” vs “Gabarito”.
- FR4: Navegação livre anterior/próxima, índices de progresso persistentes, revisão de questões já respondidas.
- FR5: Discursiva: textarea salva em `localStorage`, botão revela gabarito/PR sob demanda.
- FR6: Ao finalizar (ou a partir do resumo), exibir nota `10 * acertos / total_objetivas` com aviso explícito “Nota referente somente às questões objetivas (discursivas não entram na conta)”, contagens e lista de acertos/erros + discursivas para conferência.
- FR7: Botão Reiniciar limpa progresso (inclui textos discursivos).

## 5. Requisitos não funcionais
- Estático, responsivo (mobile-first), acessível (foco teclado, contraste, aria-live para feedback).
- Rápido: sem chamadas de backend; imagens/diagramas otimizadas em `public/img/`.
- Determinismo: mesma ordem/alternativas para todos os usuários.

## 6. Regras de dados
- Enunciado + alternativas: `PV`. Letra do gabarito: `GB` definitivo. Padrão discursivo: `PR`. Imagem/diagrama: recorte da página PV quando enunciado depende de figura/código.
- Questões anuladas: excluir da nota, sinalizar no resumo.
- Denominador da nota: total de objetivas válidas (estimado 54, pendente confirmação pós-GB).

## 7. Critérios de aceite
- Quiz percorrível de ponta a ponta, nota calculada só sobre objetivas com avisos, discursivas exibem texto do usuário + gabarito, deploy público na Vercel.

## 8. Pendências
- Confirmar Gabaritos definitivos/anulações e denominador final da nota.
- Extrair textos integrais dos PR discursivos.
- Validar enunciados/alternativas OCR de 2014/2017 e recortar imagens.
- Nome/domínio do projeto Vercel.
