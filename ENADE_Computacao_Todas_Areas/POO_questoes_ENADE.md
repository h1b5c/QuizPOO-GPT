# ENADE — Questões sobre Programação Orientada a Objetos (POO)

Levantamento de todas as questões das provas de computação (105 PDFs baixados do INEP) em que aparecem termos, conceitos ou código relacionados a **Programação Orientada a Objetos**.

**Como usar este arquivo**

- Organizado por **ano → prova (área) → questão**.
- Cada entrada traz: número da questão (como aparece na prova), página no PDF (numeração do arquivo PDF, 1-based), termos/conceitos de POO encontrados e resumo do enunciado.
- Os PDFs citados estão em `ENADE_Computacao_Todas_Areas/` (na mesma pasta deste arquivo) e em `ENADE_Engenharia_de_Computacao/` (cópia do núcleo de Engenharia). Os nomes de arquivos e as páginas permitem localizar a questão rapidamente por busca de texto no PDF.
- Questões de Formação Geral raramente são POO; a maioria está no Componente Específico.

**Critério adotado (o que conta como POO)**

Conta como relacionada a POO se a questão contém, no enunciado ou nas alternativas/itens, pelo menos um dos seguintes:

- Menção explícita: “programação orientada a objetos”, “orientada a objetos”, “orientação a objetos”, “paradigma orientado [a objetos]”, “linguagem orientada a objetos”, “projeto orientado a objetos”.
- Conceitos centrais de POO: `classe`, `objeto`, `instância` (de classe), `encapsulamento`, `herança` / `superclasse` / `subclasse` / `classe abstrata` / `classe derivada`, `polimorfismo`, `abstração` (em sentido OO), `sobrecarga` / `sobrescrita` / `sobreposição` (métodos), `construtor` / `destrutor`, `modificador de acesso` / `visibilidade`, `atributo`/`método` de classe, `mensagem` entre objetos, `diagrama de classes` (UML).
- Padrões de projeto OO / UML para OO: `Strategy`, `Singleton`, `Factory`, `Prototype`, `Template Method`, `Iterator`, `Abstract Factory` etc., quando descritos como padrões de software orientado a objetos.
- Código em linguagem OO (Java, C++, C#, etc.) com `public class`, `private …`, `extends` / `implements`, `this.`, `super(`, `new …()`, `public abstract class`, `interface` em sentido OO, `public class … extends …`, etc.
- Diagramas UML de interação/objetos: diagrama de sequência, diagrama de comunicação/estados quando envolvem objetos/mensagens.

**O que NÃO conta (excluído após revisão manual)**

- “encapsulamento” em redes (encapsulamento de pacotes TCP/IP, camadas);
- “interface” de rede, firewall, IHM, UI, socket, “interface Homem-Máquina” quando não é interface OO;
- “abstração” genérica (filosófica, de processo, SDN, manufatura) sem vínculo OO;
- “herança” cultural/histórica, “herança de prioridade” em tempo real;
- “instância” como instância de problema, de algoritmo, de processo, de governança, de conexão, sem ser instância de classe;
- “classe” social, “classe P/NP” (complexidade), “classe A” SCAMPI, “classe de problema”;
- “objeto” físico, “objetos de aprendizagem” (educacional), “objeto/produto” genérico, “objetivo”;
- “sobrecarga” elétrica, “sobrecarga” de sistema, “sobreposição” de fases de projeto;
- “paradigma orientado à conexão” (redes), “grafo orientado”/“aresta orientada” (grafos);
- Menções apenas na bibliografia ou na observação padronizada (“pode ser utilizada notação orientada a objetos”) sem papel no enunciado/itens — tratadas como não-POO.

As 2014/2017 com fonte Calibri (40–52 % de caracteres corrompidos no `pdftotext`) foram extraídas por OCR (Tesseract `por`, 300 dpi, `--psm 3`); as demais por PyMuPDF. Cada candidato foi revisado manualmente no texto extraído (±1 página) para descartar falsos positivos.

---

## Sumário

- [2005](#2005)
- [2008](#2008)
- [2011](#2011)
- [2014](#2014)
- [2017](#2017)
- [2019](#2019)
- [2021](#2021)
- [2023](#2023)
- [Arquivos](#arquivos-usados)

<a id="2005"></a>

## 2005

### Computação (legado, área única pré-separação)

PDF: `ENADE_Computacao_Todas_Areas/legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`

> Observação: em 2005 a prova era única de Computação; as questões 41–55 eram comuns a Ciência da Computação e Engenharia de Computação; 56–69 exclusivas de CC e 71–84 de Engenharia.

- **Questão 20** — p. 10 — *Paradigma orientado a objetos como forma de pensar com conceitos do mundo real; computação acionada por troca de mensagens entre objetos.* Termos: `orientação a objetos`, `paradigma orientado a objetos`, `mensagem` + `objeto`. Resumo: “A orientação a objetos é uma forma abstrata de pensar um problema utilizando-se conceitos do mundo real e não, apenas, conceitos computacionais. Nessa perspectiva, a adoção do paradigma orientado a objetos implica necessariamente que …” (alternativas sobre usuários, encapsulamento, troca de mensagens). PDF: `legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`, p. 10, **Questão 20**.
- **Questão 21** — p. 10 — *Recursividade como paradigma vs. orientação a objetos.* Termos: `orientação a objetos` (item II: “O uso da recursão não é possível em linguagens com estruturas para orientação a objetos.”). Resumo: Julgamento de itens sobre recursão (caso-base, linguagens funcionais, poder computacional, mistura iterativo/recursivo). PDF: `legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`, p. 10, **Questão 21**.
- **Questão 27** — p. 11 — *Projeto orientado a objetos.* Termos: `projeto orientado a objetos`. Resumo: “Na etapa de projeto orientado a objetos, no contexto de um processo de desenvolvimento de software, são desenvolvidas as atividades de …” (alternativas combinam arquitetura, conversão de bases, teste de integração, análise de requisitos). PDF: `legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`, p. 11, **Questão 27**.
- **Questão 28** — p. 11 — *SBD orientado a objetos / objeto-relacional para diagnóstico por imagem.* Termos: `SBD orientado a objeto`, `linguagens de programação orientadas a objetos`. Resumo: Arquitetura para 1 000→20 000 imagens/mês (20 KB); itens avaliam SBD orientado a objeto, relacional e objeto-relacional. PDF: `legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`, p. 11, **Questão 28**.
- **Questão 50** — p. 18 — *Paradigmas de linguagens; linguagens orientadas a objeto reduzem custos.* Termos: `linguagens orientadas a objeto`. Resumo: Itens sobre linguagens procedurais, declarativas, funcionais, estruturadas e orientadas a objeto. PDF: `legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`, p. 18, **Questão 50**.
- **Questão 57** — p. 21 — *Frames e paradigma orientado a objeto (encapsulamento).* Termos: `encapsulamento`, `paradigma orientado a objeto`, `frames`. Resumo: Representação de conhecimento em IA; alternativa D defende frames por “mecanismos de encapsulamento e componentes, comuns ao paradigma orientado a objeto”. PDF: `legado_Computacao_2005_2008_2011/2005_Computacao_PV.pdf`, p. 21, **Questão 57**.

<a id="2008"></a>

## 2008

### CST Análise e Desenvolvimento de Sistemas

PDF: `ENADE_Computacao_Todas_Areas/2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`

- **Questão 12** — p. 9 — *Herança (conceito de orientação a objetos).* Termos: `orientação a objetos`, `herança`, `sobrecarga`, `sobreposição`, `abstração`, `mensagem`. Resumo: “Uma pizzaria fez uma ampliação … aproveitou partes do sistema antigo e estendeu os componentes de maneira a usar código validado … Que conceito de orientação a objetos está descrito …? A sobrecarga B herança C sobreposição D abstração E mensagem”. PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 9, **Questão 12**.
- **Questão 13** — p. 9 — *Diagrama UML (sequência); objeto ControladorAcesso, mensagens.* Termos: `mensagem` + `objeto`. Resumo: “Com relação ao diagrama acima … mensagens de retorno 7: dados e 15: dados … O objeto ControladorAcesso … A mensagem 5: obterACL() …” PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 9, **Questão 13**.
- **Questão 17** — p. 11 — *Linguagem orientada a objetos (contexto).* Termos: `linguagem orientada a objetos`. Resumo: “Os alunos … deveriam escolher um sistema … para ser modelado em UML e codificado em uma linguagem orientada a objetos. … estratégia … técnica de levantamento e elicitação de requisitos …” (brainstorming). PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 11, **Questão 17**.
- **Questão 19** — p. 12 — *UML: classe Refeição, método sobrescrito, subclasses, agregação.* Termos: `UML`, `classe`, `método`, `sobrescrito`, `subclasses`, `agregação`. Resumo: Sistema de cardápios (TMB/FA); itens sobre `montarCardápioDiário()` sobrescrito nas subclasses, associações 1-1 com Pensionista e agregação com Alimento. PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 12, **Questão 19**.
- **Questão 24** — p. 14 — *Diagramas UML dinâmicos; atores e objetos (comunicação/estados/atividades).* Termos: `diagrama`, `objeto` (Urna eletrônica), `ator`. Resumo: “A figura acima mostra um diagrama de A comunicação, pois modela o comportamento … ilustra as interações entre atores e objetos. B estados, pois apresenta os possíveis estados do objeto Urna eletrônica …” PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 14, **Questão 24**.
- **Questão 32** — p. 16 — *Julgamento sobre orientação a objetos (private, construtor, classe abstrata, polimorfismo).* Termos: `orientação a objetos`, `private`, `instância de classe abstrata`, `herda`, `superclasse`, `polimorfismo`, `construtor`. Resumo: “Com relação a conceitos de orientação a objetos, julgue … I … modificador de acesso private … II Uma classe deve possuir uma única declaração de método construtor. III Uma instância de uma classe abstrata herda … IV O polimorfismo permite substituir a lógica condicional múltipla …” PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 16, **Questão 32**.
- **Questão Discursiva 39** — p. 20 — *Classes, diagrama de classes, atributos/métodos (visibilidade UML), encapsulamento.* Termos: `orientação a objetos`, `diagrama de classes`, `encapsulamento`, `visibilidade`, `atributo`, `método`, `classe`. Resumo: Montadora (carro de luxo/esporte, GPS); A) identificar classes, B) desenhar diagrama de classes, C) “Identifique e escreva para as classes seus atributos e métodos, utilizando os símbolos de visibilidade proposto na UML. Os métodos devem estar com sua assinatura completa e obedecerem as regras de encapsulamento da orientação a objetos.” PDF: `2008_CST_Analise_Desenvolvimento_Sistemas/2008_PV_TECNOLOGIA_DESENVOLVIMENTO_SISTEMAS.pdf`, p. 20, **Questão 39 (Discursiva)**.

### Computação (legado)

PDF: `ENADE_Computacao_Todas_Areas/legado_Computacao_2005_2008_2011/2008_Computacao_PV.pdf`

- **Questão Discursiva 80** — p. 34 — *Diagrama de classes + diagrama de sequência (SCCB, caso DUPLA_CONTA).* Termos: `diagrama de classes`, `objetos de negócio`, `diagrama de sequência UML`. Resumo: “Durante a análise de um sistema de controle de contas bancárias (SCCB), um analista elaborou o diagrama de classes acima … Foi atribuída a outro analista a tarefa de elaborar o diagrama de sequência do caso de uso chamado DUPLA_CONTA …” PDF: `legado_Computacao_2005_2008_2011/2008_Computacao_PV.pdf`, p. 34, **Questão 80 (Discursiva)**.

<a id="2011"></a>

## 2011

### CST Análise e Desenvolvimento de Sistemas

PDF: `ENADE_Computacao_Todas_Areas/2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`

- **Questão 11** — p. 9 — *Casos de uso e UML como padrão de modelagem orientada a objetos.* Termos: `modelagem orientada a objetos`. Resumo: “PORQUE a UML é um padrão para a modelagem orientada a objetos e, assim, os casos de uso … são cada vez mais utilizados …” PDF: `2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`, p. 9, **Questão 11**.
- **Questão 12** — p. 10 — *UML como metodologia para software orientado a objetos; mensagens entre objetos.* Termos: `software orientado a objetos`, `mensagens entre objetos`. Resumo: Itens I “A UML é uma metodologia para o desenvolvimento de software orientado a objetos …” e IV “Os diagramas de comportamento da UML demonstram como ocorrem as trocas de mensagens entre os objetos …” PDF: `2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`, p. 10, **Questão 12**.
- **Questão 20** — p. 12 — *Padrões de criação OO (herança, instanciação, classes abstratas).* Termos: `objetos`, `herança`, `instanciação`, `classes abstratas`, `subclasse`. Resumo: “Padrões de criação (creational patterns) abstraem a forma como objetos são criados … Um padrão de criação de classe usa a herança para variar a classe que é instanciada … Abstract Factory, Builder, Factory Method, Prototype e Singleton.” PDF: `2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`, p. 12, **Questão 20**.
- **Questão 21** — p. 12 — *Paradigma / herança (reuso, superclasse/subclasse).* Termos: `paradigma de programação orientado a objetos`, `herança`, `superclasse`, `subclasse`. Resumo: “O paradigma de programação orientado a objetos tem sido largamente utilizado … Considerando o conceito de herança … I Herança facilita reuso. II Quando uma subclasse é criada … III Herança múltipla … IV Extensão …” PDF: `2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`, p. 12, **Questão 21**.
- **Questão 35** — p. 18 — *POO como jeito de pensar; objetos, mensagens, herança, encapsulamento.* Termos: `programação orientada a objeto(s)`, `herança`, `encapsulamento`, `mensagem`, `instâncias`, `classes/subclasses`. Resumo: “A programação orientada a objeto não é apenas uma forma de programar, é também um jeito de pensar em um problema utilizando conceitos do mundo real … I … propriedades de um objeto … instâncias. II As mensagens … III A herança … IV O encapsulamento …” PDF: `2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`, p. 18, **Questão 35**.
- **Questão Discursiva 3** — p. 19 — *Diagrama de classes de domínio (UML) — jogo de dados (Larman).* Termos: `diagrama de classes`, `UML`, `Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design`. Resumo: “Desenhe um diagrama de classes de domínio (UML) para o problema apresentado. (valor: 6,0 pontos)” + requisitos funcionais. PDF: `2011_CST_Analise_Desenvolvimento_Sistemas/2011_PV_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS.pdf`, p. 19, **Questão Discursiva 3**.

### Computação (legado)

PDF: `ENADE_Computacao_Todas_Areas/legado_Computacao_2005_2008_2011/2011_Computacao_PV.pdf`

- **Questão 25** — p. 15 — *Padrões de Projeto OO (Singleton, Template Method, Prototype, Iterator).* Termos: `projeto orientado a objetos reutilizáveis`, `instância`, `subclasses`, `objeto agregado`. Resumo: “Um Padrão de Projeto … para torná-la útil para a criação de um projeto orientado a objetos reutilizáveis. GAMMA et al. … I Prototype é estrutural. II Singleton … garantir que uma classe tenha ao menos uma instância … III Template Method … postergando … para subclasses. IV Iterator …” PDF: `legado_Computacao_2005_2008_2011/2011_Computacao_PV.pdf`, p. 15, **Questão 25**.
- **Questão 37** — p. 24 — *Polimorfismo de tipos (linguagens / escopo dinâmico).* Termos: `polimorfismo`, `polimorfismo de tipos`. Resumo: Itens I “elimina-se a necessidade de polimorfismo …” e II “será necessário que a linguagem suporte polimorfismo de tipos.” Contexto: escopo dinâmico, vinculação estática, compilação integral. PDF: `legado_Computacao_2005_2008_2011/2011_Computacao_PV.pdf`, p. 24, **Questão 37**.
- **Questão 39** — p. 25 — *TDA em programas orientados a objetos (composição/herança, encapsulamento).* Termos: `programas orientados a objetos`, `composição e herança`, `encapsulamento`. Resumo: “Dois mecanismos utilizáveis na implementação de um TDA em programas orientados a objetos são a composição e a herança. … IV O encapsulamento em linguagens de programação orientadas a objetos é um efeito positivo do uso de TDA.” PDF: `legado_Computacao_2005_2008_2011/2011_Computacao_PV.pdf`, p. 25, **Questão 39**.

<a id="2014"></a>

## 2014

> Provas de 2014 com fonte Calibri (40–52 % de caracteres corrompidos no `pdftotext`) foram extraídas por OCR (Tesseract `por`, 300 dpi, `--psm 3`). Páginas referem-se ao PDF original.

### CST Análise e Desenvolvimento de Sistemas

PDF: `ENADE_Computacao_Todas_Areas/2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`

- **Questão Discursiva 3** — p. 9 — *Diagrama de classes (revista/edição/artigo; instância de classe).* Termos: `diagrama de classes`, `instância da classe`. Resumo: “As classes costumam possuir relacionamentos … Com base nesse contexto, construa um diagrama de classes para representar … (revista científica … edição … artigo …)” PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 9, **Questão Discursiva 3**.
- **Questão 10** — p. 13 — *Classe Java `CountOccurrence` (`public class`).* Termos: `classe … escrita na linguagem Java`, `public class`, `new CountOccurrence()`. Resumo: “A classe CountOccurrence escrita na linguagem Java … 1 public class CountConcurrence … 25 public static void main … 27 CountOccurrence co = new CountOccurrence(); …” PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 13, **Questão 10**.
- **Questão 14** — p. 16 — *Classe Java `Local` (`public class`, `private …`, referências `origem/destino`).* Termos: `public class Local`, `private String`, `private Local origem/destino`. Resumo: “projetou o seguinte esboço de uma classe que representa um ponto de venda: `public class Local { private String nome_estabelecimento; private String endereco; private Local origem; private Local destino; …`” PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 16, **Questão 14**.
- **Questão 18** — p. 18 — *Linguagens orientadas a objetos (contexto de evolução arquitetural).* Termos: `linguagens passaram a ser orientadas a objetos, cuja modelagem encapsula dados … métodos`. Resumo: Texto sobre mainframes → cliente-servidor → três camadas; itens sobre separação em camadas. PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 18, **Questão 18**.
- **Questão 24** — p. 21 — *RUP: análise/projeto orientado a objetos; diagramas de classes e de interação.* Termos: `análise e projeto orientado a objetos`, `diagramas de classes e de interação entre objetos`. Resumo: “Considerando que … utilizam-se técnicas de análise e projeto orientado a objetos … o momento que devem ser elaborados os diagramas de classes e de interação entre os objetos do sistema é …” PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 21, **Questão 24**.
- **Questão 29** — p. 23 — *Engenharia reversa: código Java → diagrama UML de classes (`extends Pessoa`, `super`, `this.`).* Termos: `diagrama de classes UML`, `public class Funcionario extends Pessoa`, `super()`, `this.salario`. Resumo: “Utilizando a engenharia reversa nesse trecho de código, o diagrama UML de classes correspondente é …” PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 23, **Questão 29**.
- **Questão 31** — p. 24 — *Testes em programas orientados a objetos (item III).* Termos: `programas orientados a objetos`. Resumo: Fluxograma e caixa branca; item III “Testes sobre caminhos independentes podem ser executados em programas procedurais, mas não podem ser executados em programas orientados a objetos.” PDF: `2014_CST_Analise_Desenvolvimento_Sistemas/2014_PV_40_tecnologia_analise_desenv_sistemas.pdf`, p. 24, **Questão 31**. *(Inclusão por menção explícita em item; núcleo é teste estrutural.)*

### Ciência da Computação — Bacharelado

PDF: `ENADE_Computacao_Todas_Areas/2014_Computacao_Bacharelado/2014_PV_03_computacao_bacharelado.pdf`

- **Questão 21** — p. 19 — *Classes Java (`class LockA/LockB`, `private int turn`, `acquire/release`).* Termos: `class LockA/LockB`, `private`, métodos. Resumo: “O fragmento de código a seguir, escrito em Java, descreve duas implementações diferentes para um lock. Ambas possuem um método denominado acquire …” (locks com `turn`, threads). PDF: `2014_Computacao_Bacharelado/2014_PV_03_computacao_bacharelado.pdf`, p. 19, **Questão 21**.
- **Questão 25** — p. 21 — *Java com orientação a objetos; herança (extends), interfaces (implements).* Termos: `linguagem de programação Java é uma linguagem com suporte à orientação a objetos que não permite herança múltipla`, `class A extends B`, `class F implements C`, `class J extends A implements C, D`. Resumo: GLC/BNF para `classdecl`; trechos de código válidos em Java. PDF: `2014_Computacao_Bacharelado/2014_PV_03_computacao_bacharelado.pdf`, p. 21, **Questão 25**.

### Ciência da Computação — Licenciatura

PDF: `ENADE_Computacao_Todas_Areas/2014_Computacao_Licenciatura/2014_PV_04_computacao_licenciatura.pdf`

- **Questão 24** — p. 21 — *Linguagens orientadas a objetos no ensino de algoritmos (coluna esquerda da página).* Termos: `linguagens orientadas a objetos`. Resumo: “Uns defendem o uso de linguagens orientadas a objetos, que possuem facilidades de programação de alto nível …” vs. linguagens básicas; itens sobre C/ponteiros/Python/tipificação. PDF: `2014_Computacao_Licenciatura/2014_PV_04_computacao_licenciatura.pdf`, p. 21, **Questão 24**. *(A coluna direita da mesma página, Questão 25, é sobre espaços de ensino e foi excluída.)*

### Engenharia de Computação

PDF: `ENADE_Computacao_Todas_Areas/2014_Engenharia_de_Computacao/2014_PV_14_engenharia_computacao.pdf`

- **Questão 35** — p. 29 — *Programa Java (`public class`, `private static`).* Termos: `public class Java`, `private static void trocaB/trocaC`. Resumo: “O código a seguir mostra um programa escrito na linguagem de programação Java. `public class Java { private static void trocaB(String a, String b) … private static void trocaC(int array[], String a) … }`” (passagem de parâmetros). PDF: `2014_Engenharia_de_Computacao/2014_PV_14_engenharia_computacao.pdf`, p. 29, **Questão 35**.

### CST Redes de Computadores

PDF: `ENADE_Computacao_Todas_Areas/2014_CST_Redes_de_Computadores/2014_PV_43_tecnologia_redes_computadores.pdf`

> Nenhuma questão de POO validada nesta prova (o único `private` encontrado é de “Virtual Private Network”; ver exclusões).
### Sistemas de Informação

PDF: `ENADE_Computacao_Todas_Areas/2014_Sistemas_de_Informacao/2014_PV_39_sistemas_informacao.pdf`

- **Questão Discursiva 5** — p. 11 — *Diagrama de Classes UML (generalização/composição) — e-commerce.* Termos: `diagrama de Classes`, `generalização`, `composição`, `atributos`, `relacionamentos`. Resumo: “Considere o seguinte cenário, proponha um Diagrama de Classes, segundo a UML … identifique, pelo menos, um relacionamento de generalização e um relacionamento de composição …” (cliente corporativo/individual, produto, pedido, pagamento, nota fiscal). PDF: `2014_Sistemas_de_Informacao/2014_PV_39_sistemas_informacao.pdf`, p. 11, **Questão Discursiva 5**.
- **Questão 14** — p. 15–16 — *Ranking de linguagens; paradigma orientado a objetos.* Termos: `paradigma orientado a objetos`. Resumo: Tabela TIOBE das 20 linguagens; “Ill. É maior, no ranking, a participação de linguagens que utilizam o paradigma orientado a objetos que a das linguagens que utilizam os demais paradigmas.” PDF: `2014_Sistemas_de_Informacao/2014_PV_39_sistemas_informacao.pdf`, p. 15, **Questão 14**.


<a id="2017"></a>

## 2017

> Provas de 2017 também extraídas por OCR (mesma fonte Calibri). Páginas referem-se ao PDF original.

### CST Análise e Desenvolvimento de Sistemas

PDF: `ENADE_Computacao_Todas_Areas/2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`

- **Questão Discursiva 05** — p. 16–17 — *Diagrama de classe (app de rede social / prototipação).* Termos: `diagrama de classe`, `atributos`, `associações`. Resumo: App de projetos (cadastro, categorias “Melhoria de Processo”/“Social”, comentários, equipe); “Considerando a situação … construa um diagrama de classe que esteja em conformidade com os requisitos, indicando os atributos de cada classe e as associações entre as classes. (valor: 10,0 pontos)” PDF: `2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`, p. 16, **Questão Discursiva 05**.
- **Questão 16** — p. 22 — *Diagrama de classe (transferência de materiais).* Termos: `diagrama de classe`, `classe abstrata`, `atributos`. Resumo: “O seguinte diagrama de classe representa a modelagem de um serviço de transferência de materiais … I A classe Funcionario é abstrata. II Uma RequisicaoTransferencia só existe se estiver vinculada a um Material. …” PDF: `2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`, p. 22, **Questão 16**.
- **Questão 24** — p. 27 — *Reengenharia para linguagem orientada a objetos (classes/métodos).* Termos: `linguagem orientada a objetos`, `estrutura de classes e métodos`. Resumo: Cobol/ADABAS/ISAM; “Ill. Uma estratégia de conversão dos referidos sistemas para uma linguagem orientada a objetos é definir uma estrutura de classes e métodos e realizar o refatoramento do código.” PDF: `2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`, p. 27, **Questão 24**.
- **Questão 26** — p. 29 — *Padrão MVC / Strategy (Calculadora Java, `new ProbabilistaController()`, variável de instância).* Termos: `padrão MVC (Model-View-Controller)`, `padrão Strategy`, `variável de instância`, `public class Calculadora`, `private CalculadoraController c`. Resumo: “A hierarquia exibida ilustra o uso do padrão de projetos Strategy. … II O padrão composto MVC … III … conversão de interfaces … padrão Adapter.” PDF: `2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`, p. 29, **Questão 26**.
- **Questão 27** — p. 30 — *Padrão Strategy — simulador de voo (`interface Voar/Pousar`, `implements`, `extends Aviao`).* Termos: `padrão Strategy`, `diagrama de classe`, `orientação a objetos`, `herança`, `public class … implements`, `public abstract class Aviao`, `interface`. Resumo: “O diagrama de classe … utiliza o padrão Strategy … LARMAN, C. Utilizando UML e padrões: uma introdução à análise e ao projeto orientados a objetos … `public interface Voar { … } public class VoarDia implements Voar … public abstract class Aviao { Voar voarForma; … } public class Boeing757 extends Aviao …`” PDF: `2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`, p. 30, **Questão 27**.
- **Questão 30** — p. 34 — *Paradigma / pilares OO + código (`abstract class Impressora`, `extends`).* Termos: `paradigma de orientação a objetos, cujos pilares são abstração, encapsulamento, herança e polimorfismo`, `public abstract class Impressora`, `extends Impressora`, `this.nome`, `new Laser()`. Resumo: “Os desenvolvedores contam com linguagens de programação baseadas no paradigma de orientação a objetos, cujos pilares são abstração, encapsulamento, herança e polimorfismo. No código … `public abstract class Impressora … public class Laser extends Impressora …`” + polimorfismo/instanciação do vetor. PDF: `2017_CST_Analise_Desenvolvimento_Sistemas/2017_PV_41_TEC_ANA_DES_SIS_BAIXA.pdf`, p. 34, **Questão 30**.

### CST Gestão da Tecnologia da Informação

PDF: `ENADE_Computacao_Todas_Areas/2017_CST_Gestao_Tecnologia_Informacao/2017_PV_43_TEC_GES_TEC_INF_BAIXA.pdf`

> Nenhuma questão de POO validada nesta prova (hits apenas de “interface” operacional/SOA e “interface gráfica” em casos de uso).

### CST Redes de Computadores

PDF: `ENADE_Computacao_Todas_Areas/2017_CST_Redes_de_Computadores/2017_PV_44_TEC_RED_COM_BAIXA.pdf`

> Nenhuma questão de POO validada nesta prova (hits apenas de “interface” SNMP/rede e “abstração/instância” de virtualização).

### Ciência da Computação — Bacharelado

PDF: `ENADE_Computacao_Todas_Areas/2017_Ciencia_Computacao_Bacharelado/2017_PV_03_CIE_COM_BACHAREL_BAIXA.pdf`

- **Questão Discursiva 04** — p. 14 — *Diagrama de classe UML com herança e polimorfismo (folha de pagamento).* Termos: `UML`, `herança`, `polimorfismo`, `classe abstrata (abstract)`, `diagrama de classe`. Resumo: “Considerando essa situação e que o modelo … utilizará herança e polimorfismo, desenhe um diagrama de classe UML que contenha: classes … associações, atributos e métodos … eventuais classes abstratas …” (comissionado/horista/assalariado). PDF: `2017_Ciencia_Computacao_Bacharelado/2017_PV_03_CIE_COM_BACHAREL_BAIXA.pdf`, p. 14, **Questão Discursiva 04**.
- **Questão 10** — p. 17 — *Padrão Observer.* Termos: `padrão de projeto Observer`. Resumo: Rede de restaurantes (status do pedido notificado a entregador, linha de produção, central): “I O requisito apresentado pode ser implementado com a utilização do padrão de projeto Observer. PORQUE II O padrão de projeto Observer realiza o estilo arquitetural cliente-servidor …” PDF: `2017_Ciencia_Computacao_Bacharelado/2017_PV_03_CIE_COM_BACHAREL_BAIXA.pdf`, p. 17, **Questão 10**.
- **Questão 11** — p. 17 — *Encapsulamento / visibilidade (`privado`/`público`/`protegido`).* Termos: `encapsulamento é um mecanismo da programação orientada a objetos … membros de uma classe (atributos e métodos)`, `modificadores de visibilidade`. Resumo: “O encapsulamento é um mecanismo da programação orientada a objetos no qual os membros de uma classe (atributos e métodos) constituem uma caixa preta. …” + perguntas sobre visibilidade em descendentes. PDF: `2017_Ciencia_Computacao_Bacharelado/2017_PV_03_CIE_COM_BACHAREL_BAIXA.pdf`, p. 17, **Questão 11**.

### Ciência da Computação — Licenciatura

PDF: `ENADE_Computacao_Todas_Areas/2017_Ciencia_Computacao_Licenciatura/2017_PV_04_CIE_COM_LICENCIATURA_BAIXA.pdf`

- **Questão Discursiva 04** — p. 14 — *Diagrama de classe UML com herança e polimorfismo (idêntica à do Bacharelado).* Termos: `UML`, `herança`, `polimorfismo`, `diagrama de classe`. Resumo: Idêntica à Questão Discursiva 04 do Bacharelado. PDF: `2017_Ciencia_Computacao_Licenciatura/2017_PV_04_CIE_COM_LICENCIATURA_BAIXA.pdf`, p. 14, **Questão Discursiva 04**.
- **Questão 10** — p. 17 — *Padrão Observer (idêntica à do Bacharelado).* Termos: `padrão Observer`. Resumo: Idêntica à Questão 10 do Bacharelado. PDF: `2017_Ciencia_Computacao_Licenciatura/2017_PV_04_CIE_COM_LICENCIATURA_BAIXA.pdf`, p. 17, **Questão 10**.
- **Questão 11** — p. 17 — *Encapsulamento / visibilidade (idêntica à do Bacharelado).* Termos: `programação orientada a objetos`, `encapsulamento`, `classe (atributos e métodos)`. Resumo: Idêntica à Questão 11 do Bacharelado. PDF: `2017_Ciencia_Computacao_Licenciatura/2017_PV_04_CIE_COM_LICENCIATURA_BAIXA.pdf`, p. 17, **Questão 11**.
- **Questão 28** — p. 27 — *Orientação a objetos / herança (`class A extends B`, polimorfismo).* Termos: `conceito de orientação a objetos`, `herança`, `class A extends B`, `polimorfismo de tipos`. Resumo: “Um dos conceitos básicos de orientação a objetos é o conceito de herança. … (por exemplo, em Java, pode-se definir a classe A herdeira da classe B como `class A extends B`). Além disso, tal mecanismo pode implementar polimorfismo de tipos de objetos. … I Herança pode implementar polimorfismo. II Herança permite reaproveitamento …” PDF: `2017_Ciencia_Computacao_Licenciatura/2017_PV_04_CIE_COM_LICENCIATURA_BAIXA.pdf`, p. 27, **Questão 28**.

### Engenharia de Computação

PDF: `ENADE_Computacao_Todas_Areas/2017_Engenharia_de_Computacao/2017_PV_13_ENG_COM_BACHAREL_BAIXA.pdf`

> Nenhuma questão de POO validada nesta prova (hits apenas de “interface” hardware/API/OpenGL/UI).

### Sistemas de Informação

PDF: `ENADE_Computacao_Todas_Areas/2017_Sistemas_de_Informacao/2017_PV_40_SIS_INFORMACAO_BAIXA.pdf`

- **Questão Discursiva 05** — p. 15 — *Diagrama de classe UML (tiro esportivo).* Termos: `diagrama de classe`, `atributos`, `relacionamentos`, `UML`. Resumo: Olimpíadas/tiro esportivo (competições, eventos, atletas); “Considerando o domínio apresentado no texto, elabore um diagrama de classe da UML para esse sistema, identificando as classes (no máximo seis), os atributos e os relacionamentos. (valor: 10,0 pontos)” PDF: `2017_Sistemas_de_Informacao/2017_PV_40_SIS_INFORMACAO_BAIXA.pdf`, p. 15, **Questão Discursiva 05**.

<a id="2019"></a>

## 2019

### Engenharia de Computação

PDF: `ENADE_Computacao_Todas_Areas/2019_Engenharia_de_Computacao/2019_PV_ENGENHARIA_COMPUTACAO.pdf`

- **Questão 09** — p. 16 — *Código Java OO (`public class MergeSort`).* Termos: `public class`, `private static`, `classe`. Resumo: MergeSort com `public class MergeSort { private static Comparable[] aux; public static void merge… public static void sort… }`; pergunta sobre implementação do protótipo de `sort`. Código OO, foco em algoritmo. PDF: `2019_Engenharia_de_Computacao/2019_PV_ENGENHARIA_COMPUTACAO.pdf`, p. 16, **Questão 09**.
- **Questão 20** — p. 25 — *Rigidez / princípios de projeto OO (C++ structs Modem, OCP).* Termos: código C++ com `struct`, `Modem::Type`, `Modem&`, `enum`; contexto “Design Principles and Patterns”. Resumo: “Rigidez é a tendência de um software ser difícil de modificar … [código Modem/Hayes/Courrier/Ernie, LogOn com switch por tipo] … Nesse projeto … sintoma de rigidez é que …” (alternativas sobre adicionar/remover tipo de modem). Princípio aberto/fechado e polimorfismo por substituição do `if`. PDF: `2019_Engenharia_de_Computacao/2019_PV_ENGENHARIA_COMPUTACAO.pdf`, p. 25, **Questão 20**.
- **Questão 27** — p. 31 — *Padrão Strategy (diagrama de classes UML, classe abstrata/interface).* Termos: `diagrama de classes UML`, `software orientado a objetos`, `classe abstrata`, `interface`, `abstração`. Resumo: “O diagrama de classes UML abaixo ilustra a estrutura do padrão Strategy … I A Classe Strategy pode ser implementada como uma classe abstrata ou uma interface … IV O uso do padrão Singleton …” PDF: `2019_Engenharia_de_Computacao/2019_PV_ENGENHARIA_COMPUTACAO.pdf`, p. 31, **Questão 27**.
- **Questão 30** — p. 33 — *Servlet Java OO (`extends HttpServlet`, `private int contador`).* Termos: `classe Java`, `extends`, `private`, `protected void doGet`. Resumo: “Um Container de Servlets … um Servlet é uma classe Java … 2 public class ContaRequisicoes extends HttpServlet { 3 private int contador; … }” PDF: `2019_Engenharia_de_Computacao/2019_PV_ENGENHARIA_COMPUTACAO.pdf`, p. 33, **Questão 30**.

<a id="2021"></a>

## 2021

### CST Análise e Desenvolvimento de Sistemas

PDF: `ENADE_Computacao_Todas_Areas/2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`

- **Questão Discursiva 04** — p. 15 — *Diagrama de classes UML com herança (reservas ida/volta).* Termos: `diagrama de classes`, `herança` (generalização), `atributos`, `associações`, `método`. Resumo: Histórias de usuário de reserva de passagens; “elabore um diagrama de classes da UML … identificando as classes (máximo seis), atributos e associações … Deverão ser representadas as reservas de ida e de volta como classes de uma associação do tipo generalização (herança) …” PDF: `2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`, p. 15, **Questão Discursiva 04**.
- **Questão 11** — p. 20 — *Código Java OO (Pilha encadeada: `public class No`, construtor, `this.`).* Termos: `public class`, `private No topo`, `this.dado`, `new No()`. Resumo: “O código Java … contém a implementação de uma Pilha … `public class No{ public int dado; public No prox; public No(int dado){ this.dado = dado; } } public class PilhaEncadeada{ private No topo; … }` … assinale a implementação correta do método `push` …” PDF: `2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`, p. 20, **Questão 11**.
- **Questão 13** — p. 21 — *Instanciação OO (`new Pilha()`, `new Fila()`; push/pop/enqueue/dequeue).* Termos: `new Pilha()`, `new Fila()`, `pilha.push/top/pop`, `fila.enqueue/dequeue`. Resumo: “Pilha pilha = new Pilha(); Fila fila = new Fila(); pilha.push(‘A’); … fila.enqueue(pilha.top()); …” PDF: `2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`, p. 21, **Questão 13**.
- **Questão 16** — p. 24 — *Java OO + Diagrama de Sequência (subclasse, objetos, mensagens).* Termos: `desenvolvido em Java de acordo com o Paradigma Orientado a Objetos`, `Diagrama de Sequência`, `subclasse`, `método`, `objetos`. Resumo: Hospital de campanha; “A Leito é uma subclasse de UTI. B O método registraPaciente() é implementado por Paciente. …” PDF: `2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`, p. 24, **Questão 16**.
- **Questão 19** — p. 27 — *Arquiteturas orientadas a objetos (troca de mensagens).* Termos: `arquiteturas orientadas a objetos`, `mensagens`. Resumo: “I Em arquiteturas orientadas a objetos, a comunicação entre os componentes do software é realizada por intermédio da troca de mensagens. …” (demais itens sobre monolíticas, MVC, microsserviços). PDF: `2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`, p. 27, **Questão 19**.
- **Questão 24** — p. 32 — *Teste de método da classe (UML, método `Finalizar Pedido` da classe `Pedido`).* Termos: `UML`, `método … da classe …`. Resumo: Sistema de delivery modelado com UML; descrições de teste, incluindo “01 – Verificar se o método ‘Finalizar Pedido’ da classe ‘Pedido’ está funcionando corretamente.” PDF: `2021_CST_Analise_Desenvolvimento_Sistemas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`, p. 32, **Questão 24**.

### Ciência da Computação — Bacharelado

PDF: `ENADE_Computacao_Todas_Areas/2021_Ciencia_Computacao_Bacharelado/2021_PV_bacharelado_ciencia_computacao.pdf`

- **Questão 10** — p. 19 — *Classes Java (coleções: lista, pilha, fila, deque).* Termos: `linguagem Java`, `definições de classes`, `objetos`. Resumo: “A biblioteca de coleções da linguagem Java … Considere as seguintes definições de classes que representam implementações de estruturas de dados … Classe A: os objetos são organizados … Classe B: … Classe C: … Classe D: …” PDF: `2021_Ciencia_Computacao_Bacharelado/2021_PV_bacharelado_ciencia_computacao.pdf`, p. 19, **Questão 10**.

### Ciência da Computação — Licenciatura

PDF: `ENADE_Computacao_Todas_Areas/2021_Ciencia_Computacao_Licenciatura/2021_PV_licenciatura_ciencia_computacao.pdf`

- **Questão 10** — p. 18 — *Classes Java (coleções) — mesma questão da Bacharelado.* Termos: `linguagem Java`, `definições de classes`, `objetos`. Resumo: Idêntica à Questão 10 do Bacharelado (Classes A–D; lista/deque/pilha/fila). PDF: `2021_Ciencia_Computacao_Licenciatura/2021_PV_licenciatura_ciencia_computacao.pdf`, p. 18, **Questão 10**.

### Sistemas de Informação

PDF: `ENADE_Computacao_Todas_Areas/2021_Sistemas_de_Informacao_Bacharelado/2021_PV_bacharelado_sistema_informacao.pdf`

- **Questão 09** — p. 17 — *Diagrama UML de classes (superclasse, herança múltipla, subclasses abstratas).* Termos: `diagrama UML`, `superclasse`, `herança`, `classes abstratas`, `subclasses`. Resumo: Seguros (Segurado/Seguro; Residencial/Automotivo/Vida); “I A classe Seguro é a superclasse de uma hierarquia de herança múltipla. … III As subclasses … devem ser implementadas como classes abstratas.” PDF: `2021_Sistemas_de_Informacao_Bacharelado/2021_PV_bacharelado_sistema_informacao.pdf`, p. 17, **Questão 09**.
- **Questão 32** — p. 35 — *Diagrama de sequência (objetos e chamadas de métodos).* Termos: `diagrama de sequência`, objetos `:Regulacao/:hospitalA/:hospitalB/:API`, chamadas `solicitarLeito()`, `procurarVaga()`, `definirVaga()`. Resumo: Integração SAMU/hospitais; “As chamadas 4: procurarVaga() e 5: procurarVaga() são feitas simultaneamente … PORQUE As chamadas 10: definirVaga() e 12: definirVaga() …” PDF: `2021_Sistemas_de_Informacao_Bacharelado/2021_PV_bacharelado_sistema_informacao.pdf`, p. 35, **Questão 32**.

<a id="2023"></a>

## 2023

> Nenhuma questão de POO encontrada nas provas de 2023 deste acervo após a varredura completa (ver critério e exclusões acima). As provas de 2023 avaliadas foram Engenharia da Computação e Engenharia de Controle e Automação.

## Arquivos usados

- Provas (PV — Prova): `ENADE_Computacao_Todas_Areas/**/ *PV*.pdf` (35 PDFs). Gabaritos (GB) e Padrões de Resposta (PR) foram baixados no mesmo acervo, mas não foram varridos para esta lista (a pedido: “questões (+ a prova)”).
- Fontes oficiais: `https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos` e arquivos em `download.inep.gov.br` (ver `ENADE_Computacao_Todas_Areas/README.md`).
- Anos sem computação (sem questão a listar): 2025, 2022, 2018, 2016, 2015, 2013, 2012, 2010, 2009, 2007, 2006, 2004 não tiveram áreas de computação neste acervo. Provas de Automação (subpasta `relacionadas_Automacao/`, 2014/2017 por OCR) foram varridas e não apresentaram questões de POO pelos critérios acima (apenas interface/IHM, sobrecarga elétrica/buffer, sobreposição de fases etc.).
- Contagem final: 64 entradas validadas (prova × questão) em 35 provas varridas — 2005: 6; 2008: 8; 2011: 9; 2014: 13; 2017: 14; 2019: 4; 2021: 10; 2023: 0. Questões idênticas repetidas em provas diferentes (ex.: 2021 CC Bach/Lic Q10; 2017 CC Bach/Lic Disc.04 e Q10/Q11) contam como entradas separadas por prova, conforme pedido (ano → prova → questão).

