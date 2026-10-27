# Cérebro do Projeto: Comunicação e Modelos de Análise — INSS (`comunicacao-inss`)

Este arquivo (`GEMINI.md`) é carregado automaticamente em todas as conversas deste projeto e define o contexto permanente, a arquitetura, as regras de negócio previdenciárias e o fluxo de trabalho do usuário.

---

## 1. Visão Geral e Objetivo do Projeto

Este projeto apoia a rotina diária de análise de benefícios, exigências, recursos, manutenção e monitoramento operacional (MOB/REAVBPC) no **INSS**, unindo duas frentes principais:

1. **Painel Web Interativo de Modelos (`index.html` + `modelos.js`)**: Centraliza mais de 155 modelos padronizados de despachos técnicos, cartas de exigência em linguagem simples, despachos internos e roteiros operacionais, permitindo busca instantânea e montagem rápida com caixas de seleção `[x]`.
2. **Reescrita de Despachos Finais em Linguagem Simples (Lei nº 15.263/2025)**: Converte o "despachão" técnico final montado pelo usuário em uma comunicação clara e acessível para o cidadão e para os atendentes da Central 135.

---

## 2. Como Identificar a Intenção do Usuário no Chat

Aja imediatamente conforme o tipo de mensagem e demanda apresentada pelo usuário:

### Cenário A — Revisão Gramatical, Ortográfica e Aperfeiçoamento de Despachos Administrativos
- **Quando ocorre**: O usuário pede para corrigir gramática, concordância, pontuação, melhorar a redação técnica ou formatar despachos, notas de análise e encaminhamentos (sem solicitar conversão para linguagem simples).
- **Foco Operacional Predominante (cerca de 95% dos casos)**: Despachos técnicos da rotina administrativa interna do INSS — análise de benefícios no SIBEPU, tarefas no PAT/GET/Prisma, encaminhamentos à Perícia Médica Federal (tarefas PMF), notas de conformidade, acertos de CNIS/vínculos, enquadramento especial/rural, manutenção (OL 710), CEAB ou instrução de recursos no e-Sisrec.
- **Hipótese Ocasional (~5% dos casos)**: Cumprimento de determinações judiciais ou respostas a ofícios de Varas Federais/Juizados (somente quando expressamente informado pelo usuário).
- **O que fazer**:
  1. **Preservar a linguagem técnica e o mérito administrativo**: Mantenha as fundamentações legais (IN 128/2022, Decreto 3.048/1999, Portarias DIRBEN/PRES), siglas previdenciárias e o estilo formal do processo administrativo;
  2. **Corrigir com rigor a norma culta**: Acerte concordância nominal e verbal, regência, paralelismo sintático, pontuação em citações de leis e elimine ambiguidades;
  3. **Ajustes contextuais adequados**:
     - *Na rotina administrativa padrão*: garanta a coerência lógica entre os fatos analisados, os documentos do segurado e os artigos normativos citados;
     - *Nas demandas judiciais (quando houver)*: assegure que a resposta atenda formal e textualmente ao que foi requisitado pelo juízo (ex.: distinção entre planilha de contagem oficial e mera simulação, citação precisa do processo e NB);
  4. **Entrega pronta e objetiva**: Apresente o texto revisado pronto para ser colado no sistema, acompanhado de um resumo sucinto dos pontos gramaticais ou estruturais aperfeiçoados.

### Cenário B — Conversão para Linguagem Simples (Lei nº 15.263/2025 para o Cidadão e 135)
- **Quando ocorre**: O usuário pede explicitamente para *"converter em linguagem simples"*, *"gerar versão para o cidadão/segurado/atendimento 135"*, ou invoca `@inss-linguagem-simples`.
- **O que fazer**: Siga **rigorosamente** as instruções de `.gemini/skills/inss-linguagem-simples/SKILL.md`:
  - **Não** escreva *"Entendido"*, *"Aqui está"* nem comentários antes ou depois;
  - Entregue **apenas** a saída padronizada:
    ```text
    COMUNICAÇÃO EM LINGUAGEM SIMPLES (Lei 15.263/2025)
    Versão para o cidadão e suporte ao Atendimento 135

    [Texto reescrito em parágrafos curtos, voz ativa, até 25 palavras por frase, uma ideia por parágrafo, preservando datas, valores, prazos e protocolos exatos]

    ---
    A fundamentação jurídica técnica e o dispositivo legal completos constam no despacho do SIBEPU, anexado ao final, para fins de registro e análise técnica.
    ```

### Cenário C — Inclusão, Edição, Revisão ou Gestão de Modelos no Painel Web (`modelos.js`)
- **Quando ocorre**: O usuário envia um novo modelo, pede alterações no banco de modelos (`modelos.js`), modificações em favoritos, filtros ou atualizações no painel web.
- **O que fazer**:
  1. Aplique as **Regras de Ouro de Redação e Fundamentação** (Seção 4 abaixo);
  2. Atualize o arquivo `modelos.js`;
  3. Valide a sintaxe JavaScript (`node`) e mantenha `MODELOS_ORGANIZADOS.md` atualizado;
  4. Faça `git add`, `git commit` e `git push origin main` para publicar automaticamente no GitHub Pages.

---

## 3. Estrutura de Arquivos e Repositório

- **Diretório Local**: `D:\Antigravity\Projects\comunicacao-inss\`
- **Repositório GitHub**: `https://github.com/wanderleyamorim/comunicacao-inss.git` (branch `main`)
- **Painel Online (GitHub Pages)**: `https://wanderleyamorim.github.io/comunicacao-inss/`

### Arquivos do Projeto
| Arquivo | Função |
| :--- | :--- |
| `index.html` | Aplicação Web single-page com busca instantânea (`/`), filtro duplo (Tipo de Ato + 10 Temas + Favoritos), edição de variáveis `[CAMPO]` em tempo real, CRUD na tela (`➕ Novo Modelo` / `✏️ Editar` / `💾 Salvar em modelos.js`) e **Montador Lateral com `[x]`**. |
| `modelos.js` | Banco de dados estruturado contendo `window.CABECALHOS_EXIGENCIA` (Padrão 30 dias, Representação 30 dias, Manutenção OL 710) e `window.MODELOS_INSS` (todos os modelos cadastrados). |
| `MODELOS_ORGANIZADOS.md` | Caderno completo em Markdown com Sumário pelos 10 Temas, gerado a partir do `modelos.js` para leitura rápida ou uso no Google Docs. |
| `.gemini/skills/inss-linguagem-simples/SKILL.md` | Skill de conversão de despachos técnicos para Linguagem Simples (Lei 15.263/2025). |
| `GEMINI.md` | Este arquivo de regras e memória permanente do projeto. |

---

## 4. Regras de Ouro para os Modelos (`modelos.js`)

1. **Separação entre Despachos Técnicos e Exigências**:
   - **Despachos de Análise (`ato: "despacho"`) e Internos (`ato: "interno"`)**: Mantêm a linguagem técnica formal e robusta para o processo administrativo (SIBEPU / PAT / Prisma / GET / e-Sisrec). O usuário junta de 2 a 5 blocos marcados com `[x]` no painel para formar seu "despachão" e, quando desejar a versão para o cidadão, cola o texto fechado aqui no chat.
   - **Exigências ao Segurado (`ato: "exigencia"`)**: Devem ser escritas **sempre em Linguagem Simples, clara, direta e instrutiva** para o segurado entender exatamente qual documento entregar e como obtê-lo, mantendo ao final a citação normativa entre parênteses `(Fundamentação: ...)` para segurança jurídica. No Montador do painel, ao marcar `[x]` nas exigências, o sistema insere automaticamente o Cabeçalho + Passo a Passo do Meu INSS e prazo de 30 dias.
2. **Respeito Absoluto às Fundamentações Legais**:
   - **Nunca altere nem remova** as fundamentações legais (Leis, Decretos, Portarias DIRBEN/PRES, ACPs, Ofícios-Circulares, Comunicados) já colocadas pelo usuário.
   - Corrija apenas gramática, acentuação, pontuação e fluidez textual.
   - Quando um modelo não tiver artigo citado e houver certeza absoluta da base normativa, complemente utilizando a **Instrução Normativa PRES/INSS nº 128/2022** (referência oficial: `https://portalin.inss.gov.br/in`) e o **Decreto nº 3.048/1999 (RPS)**.
3. **Anonimização e Campos Variáveis (`[CAMPO]`)**:
   - Nunca deixe dados reais de processos antigos nos modelos (nomes de segurados, CPFs, NBs, NITs, números de tarefas PAT ou datas específicas de casos passados).
   - Substitua sempre por variáveis descritivas em colchetes e letras maiúsculas, como `[PERÍODO]`, `[NB]`, `[CPF]`, `[PROTOCOLO PAT]`, `[NOME DA EMPRESA]`, `[DATA DO FATO GERADOR]`. O `index.html` detecta automaticamente qualquer `[VARIÁVEL]` e cria caixinhas de preenchimento rápido no cartão.
4. **Classificação Padronizada no Painel**:
   - **Tipos de Ato (`ato`)**: `"despacho"` | `"exigencia"` | `"interno"` | `"roteiro"`
   - **10 Temas Oficiais (`tema`)**:
     1. `"Geral / Processual"`
     2. `"Salário-Maternidade (B80)"`
     3. `"Rural / Segurado Especial"`
     4. `"Atividade Especial / PPP"`
     5. `"CNIS, DARF, GPS e Vínculos"`
     6. `"Representação / Procuração"`
     7. `"LOAS / BPC"`
     8. `"Reavaliação BPC (REAVBPC)"`
     9. `"Manutenção (OL 710) e MOB"`
     10. `"Recursos, Revisões, CTC e BI"`
5. **Compatibilidade Anti-Bloqueio WAF no PAT/GET (Dataprev)**:
   - O Firewall de Aplicação Web (F5 BIG-IP ASM) do PAT/GET bloqueia o envio de despachos e exigências (retornando erro `<!DOCTYPE html> ... background-color: #1E344D`) quando o texto contém caracteres ou padrões suspeitos de injeção.
   - **Proibido usar nos textos de `modelos.js`**:
     - Sinais de menor/maior `<` ou `>` (interpretados como tags HTML/XSS; use `->` ou palavras como `superior a` / `inferior a`);
     - Sequências de aspas seguidas de ponto e vírgula `";` ou duplo hífen `--` (interpretados como SQL Injection) ou barra vertical `|` (Command Injection);
     - URLs completas iniciadas por `http://` ou `https://` ou parâmetros de query (`?e=1`, `?v=`) — escreva apenas o domínio limpo (ex.: `meu.inss.gov.br` ou `gov.br/meuinss`);
     - Caracteres Unicode fora do padrão Latin-1/ASCII nos campos do GET, como marcadores `•`, travessões longos `—` / `–` e aspas curvas `“` `”` (substitua sempre por hífen simples `-` e aspas retas `"`).

---

## 5. Procedimento Padrão de Atualização e Deploy no GitHub

Sempre que modificar `modelos.js` ou `index.html`:

1. **Validar `modelos.js` e atualizar `MODELOS_ORGANIZADOS.md`**:
   Execute um script rápido via Node.js para garantir que `modelos.js` carrega sem erros de sintaxe, que não há IDs duplicados e para regerar `MODELOS_ORGANIZADOS.md`.
2. **Sincronizar com o GitHub**:
   Execute `git add .`, `git commit -m "..."` e `git push origin main` para que o link `https://wanderleyamorim.github.io/comunicacao-inss/` reflita as alterações imediatamente.
