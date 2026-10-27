// Banco de Modelos de Despachos, Exigências e Procedimentos - INSS
// Fonte de embasamento complementar: IN PRES/INSS nº 128/2022 (https://portalin.inss.gov.br/in)
// Atualizado em: 27/10/2026, 06:44:18

window.CABECALHOS_EXIGENCIA = {
  "padrao": {
    "nome": "Padrão Geral (Meu INSS / 135 - 30 dias)",
    "cabecalho": "Prezado(a) Senhor(a),\nPara dar andamento ao processo [PROTOCOLO], solicitamos o envio eletrônico dos documentos descritos abaixo:",
    "rodape": "O envio deve ser feito pelo Meu INSS (meu.inss.gov.br, na opção Cumprimento de Exigência), anexando os arquivos originais e confirmando com um comentário no campo Responda Aqui, ou mediante agendamento presencial pela Central 135.\n\nATENÇÃO! A digitalização ou foto deve ser colorida e legível, permitindo a correta visualização de todo o documento, inclusive o verso, se for o caso. Isto se aplica a todos os documentos requisitados. Antes de cumprir a exigência, verifique se houve de fato o cumprimento da totalidade do que foi pedido. Caso não tenha sido possível apresentar algum item, justifique o motivo, pois não será feita nova exigência pedindo os mesmos documentos.\n\nO não atendimento desta exigência ou a ausência de manifestação em 30 dias poderá acarretar a desistência do processo, o que não prejudica a apresentação de novo requerimento pelo interessado, conforme disposto nos arts. 566 e 601 da IN PRES/INSS nº 128, de 2022."
  },
  "representacao30": {
    "nome": "Representação / Procuração (Encerramento em 30 dias - Art. 574, § 4º, II)",
    "cabecalho": "Prezado(a) Senhor(a),\nPara dar andamento ao processo [PROTOCOLO], solicitamos o envio eletrônico dos documentos descritos abaixo:",
    "rodape": "O envio deve ser feito pelo aplicativo ou site Meu INSS (meu.inss.gov.br, na opção Cumprimento de Exigência), anexando o arquivo solicitado (quando exigida assinatura digital ICP-Brasil ou avançada, envie o arquivo PDF digital original, sem imprimir ou fotografar a tela) e confirmando no campo Responda Aqui.\n\nATENÇÃO! Caso a pendência na representação não seja regularizada no prazo legal de 30 (trinta) dias contados da ciência, o processo será encerrado por desistência administrativa, sem análise do mérito do pedido, nos termos dos arts. 566, 574, § 4º, inciso II, e 601 da IN PRES/INSS nº 128, de 2022."
  },
  "manutencao710": {
    "nome": "Manutenção OL 710 (Cadastro de Procurador / Representante Legal)",
    "cabecalho": "Prezado(a) Senhor(a),\nPara dar andamento ao processo [PROTOCOLO], solicitamos o envio eletrônico dos documentos descritos abaixo:",
    "rodape": "O cumprimento de exigência por meio eletrônico é feito diretamente pelo aplicativo ou site Meu INSS (meu.inss.gov.br, na opção Cumprimento de Exigência). Basta digitalizar ou fotografar os documentos originais (coloridos e legíveis, frente e verso), anexá-los ao processo, escrever um comentário no campo Responda Aqui e clicar em Enviar.\nSe preferir, agende o serviço Cumprimento de Exigência pelo Meu INSS ou pela Central 135 (de segunda a sábado, das 7h às 22h) para apresentar os documentos em uma Agência da Previdência Social.\n\nO não atendimento desta exigência ou a ausência de manifestação no prazo de 30 dias poderá acarretar a desistência do processo, o que não prejudica a apresentação de novo requerimento pelo interessado, conforme o art. 566 da IN PRES/INSS nº 128, de 2022, e o art. 1º, inciso III, da Portaria PRES/INSS nº 412, de 2020."
  }
};

window.MODELOS_INSS = [
  {
    "id": "ger-nao-cumpriu-exigencia",
    "titulo": "Indeferimento por Não Cumprimento de Exigência",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "indeferimento",
      "exigência",
      "não cumpriu",
      "art. 19-F",
      "art. 574"
    ],
    "resumo": "Requerimento indeferido por não apresentação dos documentos solicitados em exigência.",
    "texto": "Trata-se de requerimento de [ESPÉCIE / NOME DO BENEFÍCIO] indeferido em razão do não cumprimento de exigência (não apresentação dos documentos solicitados). A fundamentação legal embasa-se no art. 4º da Lei nº 9.784, de 1999, e no art. 19-F do Regulamento da Previdência Social, aprovado pelo Decreto nº 3.048, de 1999, c/c o art. 566, § 4º, e o art. 574 da Instrução Normativa PRES/INSS nº 128, de 2022."
  },
  {
    "id": "ger-apos-conclusao-pat",
    "titulo": "Comunicado Rápido Após Conclusão no PAT",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "conclusão",
      "PAT",
      "comunicação",
      "NB",
      "art. 575"
    ],
    "resumo": "Mensagem padrão de encerramento de tarefa no PAT informando conclusão e consulta via Meu INSS.",
    "texto": "Prezado(a) Senhor(a),\nPelas regras vigentes da Previdência Social, o requerimento solicitado foi [RESULTADO: concedido / indeferido / concluído] sob o número de benefício (NB) descrito acima. Aguarde correspondência com as informações ou acesse o portal de serviços Meu INSS (meu.inss.gov.br), nos termos do art. 575 da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "ger-pode-solicitar-recurso",
    "titulo": "Possibilidade de Interposição de Recurso (30 dias)",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "recurso",
      "30 dias",
      "CRPS",
      "JR",
      "fechamento",
      "art. 578"
    ],
    "resumo": "Parágrafo de fechamento cientificando sobre o prazo de 30 dias para recurso pelo Meu INSS ou 135.",
    "texto": "Conclui-se pela possibilidade de interposição de Recurso pelo(a) Requerente, caso não concorde com a sua conclusão, em até 30 (trinta) dias após sua ciência, por meio do serviço correspondente no Meu INSS ou pelo telefone 135, nos termos do art. 578 da Instrução Normativa PRES/INSS nº 128/2022 e do art. 305 do Decreto nº 3.048/1999."
  },
  {
    "id": "ger-economia-processual-sem-exigencia",
    "titulo": "Dispensa de Exigência por Economia Processual (Não Alteraria o Mérito)",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "economia processual",
      "eficiência",
      "celeridade",
      "art. 523",
      "sem exigência"
    ],
    "resumo": "Justifica a não emissão de exigência quando os elementos dos autos já demonstram que o cumprimento não alteraria o indeferimento.",
    "texto": "Não foi oportunizado o cumprimento de exigência, pois, em observância aos princípios da eficiência, celeridade e economia processual que norteiam a Administração Pública (conforme art. 2º da Lei nº 9.784/1999, aplicável ao processo previdenciário por força do art. 523, § 3º, da Instrução Normativa PRES/INSS nº 128/2022), e considerando que a análise dos elementos já constantes nos autos e nos sistemas corporativos desta Autarquia demonstra inequivocamente o não atendimento pelo(a) interessado(a) aos requisitos legais indispensáveis para a concessão do benefício, verifica-se que o eventual cumprimento de exigência referente a [DESCRIÇÃO DA DOCUMENTAÇÃO OU PROVIDÊNCIA] não alteraria a presente conclusão de [CONCLUSÃO: indeferimento]."
  },
  {
    "id": "ger-quanto-aos-demais-pedidos",
    "titulo": "Ônus do Interessado Quanto aos Demais Pedidos Não Comprovados",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "demais pedidos",
      "ônus da prova",
      "art. 19-F",
      "art. 566"
    ],
    "resumo": "Ressalta a responsabilidade do requerente em anexar documentação de fatos não registrados na base da Previdência.",
    "texto": "Em relação aos demais pedidos apresentados, é importante ressaltar que, embora o INSS tenha a obrigação de instruir requerimentos e verificar os requisitos legais para o reconhecimento de direitos, isso não exclui a responsabilidade do(a) interessado(a) ou de seu representante em anexar ao requerimento toda a documentação necessária para a comprovação do direito, especialmente em relação aos fatos não registrados na base de dados da Previdência Social, conforme estabelecido no Decreto nº 3.048/1999, art. 19-F, e na Instrução Normativa PRES/INSS nº 128/2022, art. 566, § 6º."
  },
  {
    "id": "ger-dilacao-prazo-negada",
    "titulo": "Dilação de Prazo Negada (Despacho SIDEPE e PAT)",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "dilação de prazo",
      "prorrogação",
      "negada",
      "SIDEPE",
      "PAT",
      "art. 566"
    ],
    "resumo": "Indefere pedido genérico de prorrogação de prazo sem prova de solicitação a terceiros e encerra a fase instrutória.",
    "texto": "Para despacho SIDEPE:\nForam formuladas exigências ao(à) Requerente, as quais não foram cumpridas. Ressalte-se que o pedido de dilação de prazo restou indeferido, conforme fundamentação constante no Despacho nº [Nº DO DESPACHO].\n\nPara PAT:\nTrata-se de análise de cumprimento de exigências. A parte interessada solicitou dilação de prazo, alegando genericamente aguardar documentação de terceiros, sem apresentar prova da solicitação ou previsão de atendimento.\nIndefiro o pedido de dilação, visto que a justificativa apresentada não atende ao requisito de \"pedido justificado\" previsto no art. 566, § 2º, da Instrução Normativa PRES/INSS nº 128/2022, sendo insuficiente para afastar a preclusão temporal. A instrução processual rege-se pelos princípios da celeridade e da eficiência, não podendo a Administração aguardar indefinidamente sem motivação concreta.\nDiante do exposto e esgotado o prazo regulamentar sem o cumprimento das exigências, encerro a fase instrutória e passo à decisão de mérito com base nos elementos constantes nos autos, na forma do art. 566, § 4º, c/c o art. 574 da referida Instrução Normativa."
  },
  {
    "id": "ger-dilacao-prazo-concedida",
    "titulo": "Dilação de Prazo Concedida (+30 dias)",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "dilação de prazo",
      "prorrogação",
      "concedida",
      "30 dias",
      "art. 566",
      "art. 601"
    ],
    "resumo": "Defere a prorrogação do prazo de exigência por igual período (30 dias).",
    "texto": "Trata-se de solicitação de dilação de prazo para cumprimento de exigências.\nConsiderando o pedido apresentado, DEFIRO a prorrogação por igual período (30 dias), nos estritos termos do art. 566, § 2º, da Instrução Normativa PRES/INSS nº 128/2022.\nO não atendimento desta dilação para cumprimento de exigências ou a ausência de manifestação até o dia [NOVA DATA LIMITE] (mais 30 dias de prazo) poderá acarretar a desistência do processo, o que não prejudica a apresentação de novo requerimento pelo(a) interessado(a), conforme disposto no art. 601 da Instrução Normativa PRES/INSS nº 128, de 2022."
  },
  {
    "id": "ger-desistencia-administrativa-sem-merito",
    "titulo": "Desistência Administrativa Sem Análise do Mérito (Arquivamento)",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "desistência",
      "sem análise do mérito",
      "arquivamento",
      "30 dias",
      "art. 574",
      "art. 601"
    ],
    "resumo": "Encerra o processo sem resolução de mérito por inércia na apresentação de elementos indispensáveis ou vício de representação/biometria.",
    "texto": "Verifica-se que, devidamente notificada, a parte requerente deixou transcorrer o prazo estipulado sem promover o cumprimento da exigência referente à apresentação de documentação indispensável à análise do pleito. Ressalta-se que eventual documentação apresentada não atendeu aos critérios exigidos, inviabilizando a correta verificação do direito pretendido, consoante o art. 574, § 4º, inciso II, da Instrução Normativa PRES/INSS nº 128/2022.\nDiante da inércia em sanar o vício (representação/biometria) ou em fornecer os elementos essenciais para a instrução do pedido, o entendimento técnico aponta para a aplicação combinada do art. 77, § 1º, e do art. 105, inciso II, alíneas \"b\" e \"c\", da Portaria DIRBEN/INSS nº 993/2022 (Livro IV), que determinam o encerramento do processo por desistência administrativa.\nConclui-se, portanto, pelo arquivamento do Processo Administrativo Previdenciário sem análise do mérito. Cumpre salientar que tal decisão extintiva não comporta interposição de recurso ao Conselho de Recursos da Previdência Social (CRPS), por expressa vedação contida no art. 578, § 2º, e no art. 601, parágrafo único, da IN PRES/INSS nº 128/2022, bem como no art. 111, parágrafo único, da referida Portaria DIRBEN/INSS nº 993/2022, ficando resguardado ao(à) requerente o direito de protocolar nova solicitação com efeitos financeiros a partir da nova Data de Entrada do Requerimento (DER)."
  },
  {
    "id": "ger-afastamento-regras-adm-judicial",
    "titulo": "Afastamento das Regras Administrativas (Determinação Judicial)",
    "ato": "despacho",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "judicial",
      "afastamento",
      "SEI",
      "regramento administrativo"
    ],
    "resumo": "Encaminha conclusão ao Judiciário quando a decisão judicial exige o afastamento de regras administrativas.",
    "texto": "Processo reanalisado considerando as normativas administrativas do INSS. Visto que a decisão judicial determina o afastamento do regramento administrativo e que, se afastado, resultará na concessão do benefício (ou averbação do período para reconhecimento em benefício futuro), concluo o procedimento para que seja informado ao Poder Judiciário o exposto, nos termos das orientações contidas nos processos SEI 35014.109219/2022-12 e 35014.0033219/2025-87."
  },
  {
    "id": "ger-exig-documentacao-pessoal-vinculos",
    "titulo": "Exigência: Documentação Pessoal e Carteiras de Trabalho (CTPS)",
    "ato": "exigencia",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "RG",
      "CPF",
      "CTPS",
      "carteira de trabalho",
      "identificação",
      "vínculos"
    ],
    "resumo": "Solicita documento de identificação com foto, CPF e digitalização completa das Carteiras de Trabalho físicas.",
    "texto": "- Documento de Identificação e Carteiras de Trabalho (CTPS): Apresente um documento de identificação oficial com foto, o seu CPF e todas as suas Carteiras de Trabalho físicas. Envie fotos ou digitalizações legíveis e na ordem correta das páginas (incluindo a página com foto, qualificação civil, todos os contratos de trabalho, férias, alterações de salário, observações e extratos de FGTS). Se algum período trabalhado não estiver anotado na Carteira de Trabalho, envie os documentos que comprovem esse trabalho. Você pode consultar a lista completa de documentos aceitos em gov.br/inss/pt-br (Fundamentação: art. 19-B do Decreto nº 3.048/1999 e arts. 48 e 525 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ger-exig-pericia-avaliacao-social",
    "titulo": "Exigência: Comparecimento à Perícia Médica e/ou Avaliação Social",
    "ato": "exigencia",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "perícia médica",
      "avaliação social",
      "comparecimento",
      "laudos"
    ],
    "resumo": "Orienta o segurado a comparecer à Perícia Médica e/ou Avaliação Social agendada levando documentos originais.",
    "texto": "- Comparecimento à Perícia Médica e/ou Avaliação Social: Compareça à Perícia Médica e/ou à Avaliação Social na data, horário e local informados no comprovante de agendamento em anexo. No dia do atendimento, leve um documento de identificação oficial com foto e todos os seus documentos médicos ou sociais originais (como laudos, exames, atestados, prontuários e receitas médicas) que comprovem a sua condição de saúde (Fundamentação: art. 566 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ger-exig-biometria-geral",
    "titulo": "Exigência: Registro de Biometria (CIN, CNH ou Título Eleitoral)",
    "ato": "exigencia",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "biometria",
      "CIN",
      "CNH",
      "título eleitoral",
      "Decreto 12.561/2025"
    ],
    "resumo": "Solicita comprovação de cadastro biométrico válido ou documento de dispensa legal.",
    "texto": "- Cadastro de Biometria Obrigatório: Para continuar a análise do seu pedido, é obrigatório possuir biometria (impressão digital e foto) registrada na Carteira de Identidade Nacional (CIN), na Carteira Nacional de Habilitação (CNH) ou no Título de Eleitor. Após regularizar a biometria em um desses órgãos, anexe o comprovante pelo Meu INSS. Estão dispensados dessa exigência: maiores de 80 anos com documento oficial com foto; pessoas com atestado médico de impossibilidade de locomoção; moradores de áreas de difícil acesso (Portaria nº 76/2025); migrantes ou refugiados com registro oficial; e residentes no exterior com declaração consular ou apostilada (Fundamentação: Decreto nº 12.561/2025)."
  },
  {
    "id": "ger-exig-duvida-assinatura-requerente",
    "titulo": "Exigência: Dúvida Fundada sobre a Assinatura do(a) Requerente",
    "ato": "exigencia",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "assinatura",
      "dúvida fundada",
      "termo de requerimento",
      "original",
      "art. 63"
    ],
    "resumo": "Solicita Termo de Requerimento assinado fisicamente (ou assinatura eletrônica avançada/qualificada) ou conferência presencial.",
    "texto": "- Confirmação da Assinatura do(a) Requerente: Identificamos divergência ou dúvida quanto à autenticidade da assinatura no documento apresentado. Para confirmar a sua solicitação, envie o Termo de Requerimento de Serviços original assinado de próprio punho (conforme o seu documento de identidade) ou assinado eletronicamente no padrão avançado/qualificado (como a assinatura Gov.br Prata/Ouro ou certificado ICP-Brasil). Se preferir, você pode comparecer a uma Agência do INSS levando o seu documento de identificação original para conferência presencial (Fundamentação: art. 63, § 1º, inciso II, e parágrafo único da Instrução Normativa PRES/INSS nº 128/2022, c/c art. 33, § 2º, da Portaria DIRBEN/INSS nº 993/2022 e Decreto nº 10.543/2020)."
  },
  {
    "id": "ger-exig-dilacao-prazo-5dias",
    "titulo": "Exigência: Prazo Adicional de 5 Dias (Resolução 166/2011)",
    "ato": "exigencia",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "5 dias",
      "prazo adicional",
      "Resolução 166",
      "art. 599"
    ],
    "resumo": "Concede prazo complementar de 5 dias para conclusão do envio de documentos.",
    "texto": "- Prazo Adicional de 5 Dias: Concedemos o prazo adicional de 5 (cinco) dias para que você conclua o envio dos documentos pendentes solicitados na exigência anterior (Fundamentação: Resolução INSS/PRES nº 166/2011 e art. 599 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ger-exig-andamento-controle-interno",
    "titulo": "Exigência Interna: Documentos Recebidos (Manter em Exigência para Controle)",
    "ato": "exigencia",
    "tema": "Geral / Processual",
    "favorito": false,
    "tags": [
      "controle interno",
      "andamento",
      "destravar fila",
      "exigência"
    ],
    "resumo": "Informa ao segurado que os documentos já foram recebidos e orienta a não encerrar a exigência (controle interno).",
    "texto": "- Aviso sobre o Andamento do Processo: Os seus documentos já foram recebidos e a análise do seu pedido continuará internamente pelo INSS. Você não precisa enviar novos documentos nem responder a esta mensagem neste momento. Por favor, mantenha o pedido na situação \"Em exigência\" (não clique em \"Cumprir exigência\" novamente) apenas para controle interno do sistema."
  },
  {
    "id": "mat-facultativo-antes-16-anos",
    "titulo": "Maternidade: Facultativo Antes dos 16 Anos (Inviabilidade Legal)",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "facultativo",
      "menor de 16 anos",
      "ACP",
      "art. 5º-A",
      "IN 188/2025"
    ],
    "resumo": "Afasta o cômputo de recolhimentos como segurado facultativo anteriores aos 16 anos de idade.",
    "texto": "No que tange à possibilidade de recolhimento de contribuições na qualidade de segurado facultativo referente a período anterior aos 16 (dezesseis) anos de idade, constata-se a inviabilidade legal do pleito, uma vez que a idade mínima para filiação nesta categoria é de 16 anos, conforme dispõe o art. 5º, inciso IV, da Instrução Normativa PRES/INSS nº 128/2022. Ressalte-se que a exceção trazida pelo art. 5º-A da mesma norma (incluído pela IN PRES/INSS nº 188/2025), em cumprimento à Ação Civil Pública nº 5017267-34.2013.4.04.7100/RS, restringe-se ao segurado obrigatório, havendo vedação expressa de sua aplicação ao segurado facultativo no § 4º do referido dispositivo, razão pela qual não há amparo normativo para o processamento de Guia da Previdência Social (GPS)."
  },
  {
    "id": "mat-facultativo-mesma-competencia-parto",
    "titulo": "Maternidade: Facultativo Pago na Mesma Competência do Fato Gerador",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "facultativo",
      "mesma competência",
      "parto",
      "filiação",
      "art. 107"
    ],
    "resumo": "Invalida filiação como facultativo cujo primeiro recolhimento ocorreu na mesma competência do fato gerador.",
    "texto": "No que tange à competência [COMPETÊNCIA, EX: 10/2025], paga em [DATA DO PAGAMENTO], verifica-se que o recolhimento não produz efeitos para fins de filiação ao Regime Geral de Previdência Social (RGPS). O fato gerador do benefício de Salário-Maternidade ocorreu em [DATA DO FATO GERADOR], coincidindo com a competência do recolhimento pretendido. Conforme preceitua o art. 107, § 5º, inciso I, da Instrução Normativa PRES/INSS nº 128/2022, é expressamente vedada a filiação na categoria de segurado facultativo na mesma competência em que se inicia o pagamento de benefício previdenciário. Portanto, a contribuição vertida nesta competência não pode ser validada para o reconhecimento da qualidade de segurado."
  },
  {
    "id": "mat-facultativo-unico-mesma-competencia",
    "titulo": "Maternidade: Indeferimento (Não Filiada - Único Vínculo Facultativo no Mês do Parto)",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "não filiada",
      "facultativo único",
      "art. 107",
      "art. 71"
    ],
    "resumo": "Indefere Salário-Maternidade por falta de filiação quando o único recolhimento como facultativo ocorreu na competência do nascimento.",
    "texto": "Trata-se de Benefício de Salário-Maternidade Urbano indeferido em razão de a Requerente não estar filiada ao Regime Geral de Previdência Social na data do nascimento, nos termos do art. 71 da Lei nº 8.213, de 24/07/1991 (com redação dada pela Lei nº 9.876, de 26/11/1999) e do Regulamento da Previdência Social, aprovado pelo Decreto nº 3.048, de 06/05/1999.\nNo que tange à competência [COMPETÊNCIA, EX: 10/2025], paga em [DATA DO PAGAMENTO], verifica-se que o recolhimento não produz efeitos para fins de filiação ao Regime Geral de Previdência Social (RGPS). O fato gerador do benefício de Salário-Maternidade ocorreu em [DATA DO FATO GERADOR], coincidindo com a competência do recolhimento pretendido. Conforme preceitua o art. 107, § 5º, inciso I, da Instrução Normativa PRES/INSS nº 128/2022, é expressamente vedada a filiação na categoria de segurado facultativo na mesma competência em que se inicia o pagamento de benefício previdenciário. Portanto, a contribuição vertida nesta competência não pode ser validada para o reconhecimento da qualidade de segurado."
  },
  {
    "id": "mat-ci-nao-comprovou-atividade-apos-exigencia",
    "titulo": "Maternidade: Contribuinte Individual Não Comprovou Atividade (Após Exigência)",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "contribuinte individual",
      "CI",
      "recolhimento sem atividade",
      "concomitância",
      "art. 90",
      "art. 361"
    ],
    "resumo": "Indefere B80 de Contribuinte Individual que recolheu GPS/DARF mas não comprovou o efetivo exercício da atividade autônoma.",
    "texto": "Trata-se de requerimento de Salário-Maternidade Urbano na categoria de Contribuinte Individual, o qual se indefere ante a precariedade do conjunto probatório acostado, insuficiente para comprovar o efetivo exercício de atividade remunerada autônoma contemporânea ao recolhimento, requisito indispensável à configuração da filiação obrigatória nessa qualidade, a teor do art. 90 da Instrução Normativa PRES/INSS nº 128/2022 c/c o art. 59 da Portaria DIRBEN/INSS nº 990/2022 (Livro I). Ressalta-se que o mero recolhimento de guia da Previdência Social sem a demonstração material do trabalho não confere enquadramento como contribuinte individual nem autoriza o reconhecimento de concomitância de atividades com o contrato de trabalho de segurada empregada vigente na data do fato gerador (art. 361 da IN PRES/INSS nº 128/2022 e art. 447 da Portaria DIRBEN/INSS nº 991/2022), cabendo à empresa empregadora o pagamento do benefício referente ao vínculo laboral mantido."
  },
  {
    "id": "mat-empregada-ativa-periodo-graca-ci",
    "titulo": "Maternidade: Empregada Ativa e em Período de Graça como CI (Indeferir sem Exigência)",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "empregada",
      "empresa empregadora",
      "período de graça",
      "concomitância",
      "art. 72",
      "art. 361"
    ],
    "resumo": "Indefere B80 quando a segurada tem vínculo ativo de empregada e apenas período de graça decorrente de atividade pretérita de CI.",
    "texto": "Trata-se de requerimento de Salário-Maternidade Urbano indeferido em razão de a requerente manter vínculo ativo como segurada empregada na data do fato gerador, hipótese em que a responsabilidade pelo pagamento do benefício é exclusivamente da empresa empregadora, nos termos do art. 72, § 1º, da Lei nº 8.213/1991 e do art. 426 do Livro II das Normas Procedimentais em Matéria de Benefícios (Portaria DIRBEN/INSS nº 991/2022). Verifica-se que a requerente se encontrava em período de manutenção da qualidade de segurada (período de graça) decorrente de atividade pretérita como Contribuinte Individual, conforme previsão do art. 184 da Instrução Normativa PRES/INSS nº 128/2022 e do art. 45 do Livro II (Portaria DIRBEN/INSS nº 991/2022). Ocorre que, nos termos do art. 361, caput e § 2º, da IN PRES/INSS nº 128/2022 e do art. 447, §§ 1º e 2º, do Livro II (Portaria DIRBEN/INSS nº 991/2022), não se considera atividade simultânea ou concomitante a situação em que a segurada esteja em período de graça quanto a uma das atribuições, sendo o salário-maternidade devido unicamente em razão da atividade que ela estiver efetivamente exercendo. Portanto, mantido o contrato de trabalho ativo na data do evento, e estando em período de graça em relação à atividade de Contribuinte Individual, o benefício é devido exclusivamente sob a categoria de empregada (pago pela empresa), restando indevida a concessão direta pelo INSS na qualidade de contribuinte individual."
  },
  {
    "id": "mat-cancelou-tarefa-anterior-exigencia",
    "titulo": "Maternidade: Segurada Cancelou Tarefa Anterior Após Exigência e Agendou Outra",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "tarefa cancelada",
      "exigência anterior",
      "CI",
      "art. 90"
    ],
    "resumo": "Registra que o protocolo anterior foi cancelado após emissão de exigência para comprovação de atividade de Contribuinte Individual.",
    "texto": "Ao ter sido formulada exigência na tarefa PAT anterior ([PROTOCOLO PAT ANTERIOR]), o requerimento foi cancelado e agendada nova solicitação.\nRegistra-se o teor e o embasamento legal da exigência realizada para comprovação do efetivo exercício de atividade remunerada como Contribuinte Individual mediante documentos contemporâneos (RPA, Notas Fiscais, contratos, IRPF com recibo, alvará ou ISS), ante a precariedade do conjunto probatório acostado, insuficiente para comprovar o efetivo exercício de atividade remunerada autônoma contemporânea ao recolhimento, requisito indispensável à configuração da filiação obrigatória nessa qualidade, a teor do art. 90 da Instrução Normativa PRES/INSS nº 128/2022 c/c o art. 59 da Portaria DIRBEN/INSS nº 990/2022 (Livro I). Ressalta-se que o mero recolhimento de guia da Previdência Social sem a demonstração material do trabalho não confere enquadramento como contribuinte individual nem autoriza o reconhecimento de concomitância de atividades com o contrato de trabalho de segurada empregada vigente na data do fato gerador (art. 361 da IN PRES/INSS nº 128/2022 e art. 447 da Portaria DIRBEN/INSS nº 991/2022), cabendo à empresa empregadora o pagamento do benefício referente ao vínculo laboral mantido."
  },
  {
    "id": "mat-ivin-jornada-diferenciada-maior-minimo",
    "titulo": "Maternidade: Indicador IVIN-JORN-DIFERENCIADA com Salário Igual/Superior ao Mínimo",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "jornada diferenciada",
      "jornada parcial",
      "salário mínimo",
      "art. 240",
      "art. 427"
    ],
    "resumo": "Afasta o pagamento pelo INSS em vínculo com indicador de jornada diferenciada quando o salário de contribuição alcança o salário mínimo.",
    "texto": "Trata-se de requerimento de Salário-Maternidade Urbano, indeferido em razão de os salários de contribuição não serem inferiores ao salário mínimo, afastando a aplicação das regras de jornada parcial/diferenciada (art. 240, inciso VII, da Instrução Normativa PRES/INSS nº 128/2022 e art. 427, inciso VI, alínea \"d\", da Portaria DIRBEN/INSS nº 991/2022)."
  },
  {
    "id": "mat-jornada-parcial-ultimo-salario-maior-minimo",
    "titulo": "Maternidade: Empregada com Jornada Parcial mas Salário Maior que o Mínimo",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "empregada",
      "jornada parcial",
      "empresa empregadora",
      "art. 72",
      "art. 427"
    ],
    "resumo": "Indefere B80 de segurada empregada cuja remuneração não é inferior ao limite mínimo mensal (responsabilidade da empresa).",
    "texto": "Trata-se de Benefício de Salário-Maternidade Urbano indeferido em razão de a Requerente manter a condição de Empregada na data do fato gerador, situação em que a responsabilidade pelo pagamento do benefício é da Empresa Empregadora, nos termos do § 1º do art. 72 da Lei nº 8.213/1991. Não foi verificado tratar-se da hipótese do art. 427, inciso VI, alínea \"d\", da Portaria DIRBEN/INSS nº 991, de 28 de março de 2022 (c/c art. 240, inciso VII, da Instrução Normativa PRES/INSS nº 128/2022): \"empregada com jornada parcial cujo salário de contribuição seja inferior ao seu limite mínimo mensal\"."
  },
  {
    "id": "mat-ci-mei-declaracao-afastamento-120-dias",
    "titulo": "Maternidade: Recolhimento CI/MEI nos 120 Dias Suprido por Declaração de Afastamento",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "MEI",
      "CI",
      "120 dias",
      "declaração de afastamento",
      "art. 357"
    ],
    "resumo": "Valida o afastamento nos 120 dias de B80 mediante a Declaração de Afastamento formalizada no ato do requerimento.",
    "texto": "Tendo em vista a identificação de recolhimentos na categoria de Contribuinte Individual/MEI concomitantes ao período do benefício, restou cumprida a exigência prevista no art. 357, § 2º, da Instrução Normativa PRES/INSS nº 128/2022 e no art. 457 do Livro II da Portaria DIRBEN/INSS nº 991/2022 (conforme orientado nas Perguntas e Respostas nº 22 e 23, constantes no Portal IN), mediante a apresentação da Declaração de Afastamento das Atividades Laborais formalizada pela requerente no ato do requerimento, atestando a não realização de atividade remunerada durante os 120 (cento e vinte) dias de percepção do benefício."
  },
  {
    "id": "mat-alteracao-dip-nao-afastamento",
    "titulo": "Maternidade: Alteração da DIP por Não Afastamento Imediato",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "DIP",
      "não afastamento",
      "art. 71-C",
      "art. 357",
      "art. 457"
    ],
    "resumo": "Fixa a DIP do Salário-Maternidade apenas nos períodos sem exercício de atividade remunerada.",
    "texto": "Considerando o disposto no artigo 71-C da Lei nº 8.213/1991 e no artigo 357, § 2º, da Instrução Normativa PRES/INSS nº 128/2022, é necessário observar que o recebimento do salário-maternidade está condicionado ao afastamento das atividades laborais. Portanto, a existência de remuneração registrada no CNIS durante o período de percepção do benefício implica a não comprovação do afastamento naquele intervalo, conforme previsto no artigo 29-A da Lei nº 8.213/1991. Ademais, nos casos em que houver contribuição apenas em parte do período devido do salário-maternidade, o benefício será devido em relação aos períodos em que não houver exercício de atividade remunerada, ainda que o afastamento ocorra após o fato gerador, conforme estabelecido no artigo 457 do Livro II das Normas Procedimentais em Matéria de Benefícios (Portaria DIRBEN/INSS nº 991/2022). Dessa forma, cabe registrar que no presente pedido houve a alteração da DIP para [NOVA DIP]."
  },
  {
    "id": "mat-bloquear-pagamento-retorno-atividade",
    "titulo": "Maternidade: Suspensão de Pagamento por Retorno à Atividade Antes do Término",
    "ato": "despacho",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "suspensão",
      "retorno ao trabalho",
      "manutenção",
      "art. 457",
      "art. 357"
    ],
    "resumo": "Determina a suspensão dos pagamentos do B80 e abertura de tarefa para a Manutenção apurar os períodos devidos.",
    "texto": "Haverá a suspensão dos pagamentos em conformidade com o art. 357, § 2º, da Instrução Normativa PRES/INSS nº 128/2022 e com o art. 457 da Portaria DIRBEN/INSS nº 991/2022, pois foi detectado o retorno à atividade de prestador(a) de serviço antes do término do período normal de duração do salário-maternidade. Será aberta tarefa para a Manutenção verificar os períodos devidos."
  },
  {
    "id": "mat-exig-comprovacao-ci",
    "titulo": "Exigência: Comprovação de Trabalho Autônomo (Contribuinte Individual - Salário-Maternidade)",
    "ato": "exigencia",
    "tema": "Salário-Maternidade (B80)",
    "favorito": false,
    "tags": [
      "B80",
      "exigência",
      "contribuinte individual",
      "RPA",
      "nota fiscal",
      "art. 90"
    ],
    "resumo": "Solicita provas materiais contemporâneas do exercício efetivo de trabalho por conta própria antes do parto.",
    "texto": "- Comprovação de Trabalho por Conta Própria (Contribuinte Individual): Apresente documentos da época dos pagamentos que comprovem que você realmente exerceu atividade remunerada por conta própria antes do parto (como Recibos de Pagamento a Autônomo - RPA, Notas Fiscais de serviço, contratos de prestação de serviços, Declaração de Imposto de Renda com recibo de entrega, alvará de funcionamento ou comprovantes de ISS). Apenas pagar a guia do INSS (GPS/DARF) sem comprovar o trabalho efetivo não garante a filiação como contribuinte individual nem permite acumular o benefício com vínculo de carteira assinada (Fundamentação: arts. 90 e 361 da Instrução Normativa PRES/INSS nº 128/2022 c/c art. 59 da Portaria DIRBEN/INSS nº 990/2022 e art. 447 da Portaria DIRBEN/INSS nº 991/2022)."
  },
  {
    "id": "rur-texto-cnis-deferido",
    "titulo": "Rural: Averbação / Deferimento de Período para o CNIS",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "CNIS",
      "deferido",
      "art. 109",
      "art. 110",
      "art. 5º-A"
    ],
    "resumo": "Texto curto para registro de deferimento de período rural no CNIS.",
    "texto": "Pelas regras vigentes da Previdência Social, foi deferido o período pleiteado ([PERÍODO]), pois o(a) requerente enquadrou-se nos artigos 5º, 5º-A, 109 e/ou 110 da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "rur-deferindo-menor-12-14-16-anos",
    "titulo": "Rural: Deferimento de Período Abaixo de 12/14/16 Anos (Art. 5º-A IN 128/2022)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "menor de 12 anos",
      "menor de 14 anos",
      "art. 5º-A",
      "IN 188/2025",
      "deferimento"
    ],
    "resumo": "Ratifica período rural exercido em idade inferior à mínima constitucionalmente permitida quando comprovada a indispensabilidade do labor familiar.",
    "texto": "Em análise ao período de [PERÍODO], no qual se pleiteia o reconhecimento de atividade rural exercida em idade inferior à mínima constitucionalmente permitida, observa-se que o art. 5º-A da Instrução Normativa PRES/INSS nº 128, de 2022 (com redação dada pela IN PRES/INSS nº 188/2025), ampara o cômputo de tal período, condicionando-o à comprovação do efetivo exercício da atividade sob os mesmos requisitos legais exigidos para o segurado em idade regular. Para a categoria de segurado especial, a comprovação recai sobre a demonstração de que o labor era indispensável à subsistência do núcleo familiar, conforme o art. 109, § 1º, da referida norma. O conjunto probatório que instrui os autos comprova a condição de segurado especial do grupo familiar, encabeçado pelos genitores, estabelecendo o regime de economia familiar no qual a participação do(a) requerente, ainda que em tenra idade, se insere como essencial à mútua colaboração. Desta forma, por ter sido cumprido o ônus probatório e considerados os instrumentos ratificadores (art. 116 da IN PRES/INSS nº 128/2022) como suficientes para comprovar os requisitos dos arts. 5º-A, § 1º, e 109, § 1º, da referida norma, ratifica-se a autodeclaração para o período pleiteado."
  },
  {
    "id": "rur-negando-menor-12-14-anos",
    "titulo": "Rural: Indeferimento de Período Abaixo de 12/14 Anos (Não Individualizado)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "menor de 12 anos",
      "menor de 14 anos",
      "art. 5º-A",
      "IN 188/2025",
      "indeferimento"
    ],
    "resumo": "Deixa de ratificar período rural em tenra idade quando os documentos não individualizam a participação ativa e indispensável do menor.",
    "texto": "Em análise ao período de [PERÍODO], no qual se pleiteia o reconhecimento de atividade rural exercida em idade inferior à mínima constitucionalmente permitida, observa-se que o art. 5º-A da Instrução Normativa PRES/INSS nº 128, de 2022 (com redação dada pela IN PRES/INSS nº 188/2025), permite o cômputo de tal período, contanto que o efetivo exercício da atividade seja comprovado sob os mesmos requisitos legais exigidos para o segurado em idade regular. Para a categoria de segurado especial, isso implica a demonstração de que o trabalho era indispensável à subsistência do núcleo familiar, conforme o art. 109, § 1º. A própria norma, ao exigir a comprovação da \"participação ativa\" até mesmo para o filho maior de 16 anos (art. 109, § 1º, inciso I), reforça o elevado ônus probatório para a situação excepcional em análise. Os documentos que instruem o processo, embora estabeleçam a condição rural do grupo familiar, são insuficientes para individualizar a participação do(a) requerente e comprovar a essencialidade de seu labor. Desta forma, por não ter sido cumprido o ônus probatório, não se ratifica a autodeclaração para o período pleiteado, em razão da insuficiência dos instrumentos ratificadores (art. 116 da IN PRES/INSS nº 128/2022) para comprovar os requisitos dos arts. 5º-A, § 1º, e 109, § 1º, da referida norma."
  },
  {
    "id": "rur-ja-analisado-processo-anterior",
    "titulo": "Rural: Período Já Analisado em Processo Anterior (Art. 97 Portaria 990/2022)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "processo anterior",
      "art. 97",
      "Portaria 990",
      "reanalisado"
    ],
    "resumo": "Mantém períodos rurais reconhecidos anteriormente e dispensa reanálise de períodos indeferidos sem nova prova documental.",
    "texto": "O artigo 97 da Portaria DIRBEN/INSS nº 990, de 28 de março de 2022 (c/c o art. 116 da Instrução Normativa PRES/INSS nº 128/2022), estabelece que os períodos de segurado especial reconhecidos pelo INSS, tanto no CNIS quanto nos sistemas de benefícios, devem ser considerados válidos para todos os fins. Quanto aos períodos anteriormente indeferidos, estes somente serão reanalisados caso o(a) segurado(a) apresente nova documentação, com base nas regras vigentes."
  },
  {
    "id": "rur-nao-implantado-cnis-aadj",
    "titulo": "Rural: Sentença Judicial Ainda Não Averbada no CNIS pela AADJ",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "sentença judicial",
      "AADJ",
      "trânsito em julgado",
      "CNIS"
    ],
    "resumo": "Esclarece que a averbação de período rural reconhecido judicialmente compete à unidade de Atendimento de Demandas Judiciais (AADJ).",
    "texto": "Outrossim, a despeito da existência de sentença judicial favorável, o período pretendido ([PERÍODO]) ainda não consta averbado no CNIS. Registra-se que a inclusão do referido período compete à unidade de Atendimento de Demandas Judiciais (AADJ) do INSS, a qual promoverá a devida averbação mediante a constatação do trânsito em julgado da decisão judicial, nos termos do art. 523 da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "rur-justificacao-administrativa-dispensada",
    "titulo": "Rural / Geral: Justificação Administrativa (JA) Dispensada",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "JA",
      "justificação administrativa",
      "dispensada",
      "testemunhas",
      "art. 568"
    ],
    "resumo": "Fundamenta a dispensa do processamento de Justificação Administrativa (JA).",
    "texto": "No presente requerimento, foram realizados procedimentos adicionais para verificar a possibilidade de processamento da Justificação Administrativa (JA). No entanto, seu processamento foi dispensado, pois foi possível realizar uma análise conclusiva do período e das condições pretendidas com base nas informações já anexadas ao processo; a comprovação da atividade de segurado especial passou a ser realizada por meio de autodeclaração e análise de prova documental, conforme a Portaria Conjunta nº 1 DIRBEN/DIRAT/INSS, de 07/08/2017, tornando desnecessária a oitiva de testemunhas; inexiste início de prova material que trouxesse convicção para delimitar marco inicial e marco final; ou o formulário de JA não foi devidamente preenchido, nos termos do art. 151 do Decreto nº 3.048/1999, do art. 568 da Instrução Normativa PRES/INSS nº 128/2022 e do art. 79 da Portaria DIRBEN/INSS nº 993/2022 (Livro IV - Processo Administrativo Previdenciário)."
  },
  {
    "id": "rur-parceria-50-porcento-producao",
    "titulo": "Rural: Contrato de Parceria com 50% da Produção (Descaracterização de Segurado Especial)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "parceria agrícola",
      "50%",
      "outorgante",
      "prestador de serviço",
      "art. 109"
    ],
    "resumo": "Não ratifica período rural quando o contrato de parceria prevê cota de 50% da produção ao parceiro outorgado.",
    "texto": "Foram apresentados documentos para comprovação de Atividade Rural, porém não foi possível o reconhecimento de quaisquer dos períodos requeridos. O período autodeclarado de [PERÍODO] não foi ratificado porque consta no Contrato de Parceria Agrícola apresentado que \"o parceiro OUTORGADO receberá 50% (cinquenta por cento) da produção\". Constata-se, portanto, tratar-se de prestador(a) de serviço (contribuinte individual) e não de segurado especial, nos termos da alínea \"g\", inciso V, do art. 11 da Lei nº 8.213/1991, c/c o art. 90, inciso I, alínea \"e\", e o art. 109, § 4º, da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "rur-certidao-funai-nao-homologada",
    "titulo": "Rural: Certidão da FUNAI Não Homologada (Terra Inexistente / Campo 21)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "indígena",
      "FUNAI",
      "campo 21",
      "art. 116"
    ],
    "resumo": "Não homologa Certidão da FUNAI com inconsistência no campo 21 (inclui orientação Supertec).",
    "texto": "A Certidão de Exercício de Atividade Rural Indígena ([Nº DA CERTIDÃO FUNAI, EX: 15/2023/CTL]) não foi considerada, tendo em vista informação inconsistente/inexistente no campo 21 do referido documento. O documento apresentado pelo(a) requerente é o previsto no inciso X do art. 116 da Instrução Normativa PRES/INSS nº 128, de 28 de março de 2022 (Certidão da FUNAI). Após análise, a referida certidão não foi homologada quanto à forma, conforme os §§ 6º e 7º do art. 116 da Instrução Normativa PRES/INSS nº 128/2022.\n\n[Orientação Supertec - Caso necessário:]\nOrientamos que, nos casos em que não há a informação elencada, deve ser informada a opção \"Outros\", conforme cita o guia constante no Anexo I do Memorando-Circular Conjunto nº 45/DIRBEN/DIRAT/INSS, de 27 de setembro de 2018. Após, cabe informar no campo \"Informações Adicionais\" o nome da Aldeia e a etnia, se for o caso."
  },
  {
    "id": "rur-autodeclaracao-incompleta-indeferimento",
    "titulo": "Rural: Indeferimento por Autodeclaração Incompleta / Rasurada (Após Exigência)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "autodeclaração incompleta",
      "Ofício-Circular 46",
      "art. 115",
      "indeferimento"
    ],
    "resumo": "Indefere o reconhecimento de período rural quando a Autodeclaração do Segurado Especial permanece incompleta após exigência.",
    "texto": "Foram apresentados documentos para comprovação de Atividade Rural, porém não foi possível o reconhecimento de quaisquer dos períodos requeridos, em razão de não ter sido apresentada Autodeclaração do Segurado Especial devidamente preenchida e assinada, nos moldes dos Anexos I/II/III do Ofício-Circular nº 46/DIRBEN/INSS, de 13/09/2019, e do art. 115 da Instrução Normativa PRES/INSS nº 128/2022. O preenchimento encontra-se incompleto - faltam informações em campos essenciais referentes ao grupo familiar e ao proprietário da terra, o que impede a análise e a ratificação do documento quanto à forma.\nO Ofício-Circular nº 46, de 13/09/2019, dispensa a apresentação de documento rural ano a ano, a entrevista rural e o processamento da Justificação Administrativa (JA), cabendo, contudo, o preenchimento completo e correto da autodeclaração, tendo em vista a natureza declaratória da atividade rural alegada. Foram formuladas exigências ao(à) Requerente, cujo cumprimento se deu de forma incompleta, não tendo sido sanada a pendência de apresentação da autodeclaração preenchida em todos os campos obrigatórios."
  },
  {
    "id": "rur-boia-fria-indeferimento",
    "titulo": "Rural: Indeferimento de Trabalhador Eventual / Boia-Fria (B41, B42/CTC e B80)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "boia-fria",
      "volante",
      "eventual",
      "CI",
      "art. 90",
      "art. 116"
    ],
    "resumo": "Indefere período de trabalhador rural eventual (boia-fria) por ausência de prova material em nome próprio e/ou recolhimentos.",
    "texto": "Relativamente ao intervalo de [PERÍODO], no qual a parte requerente alega o exercício de atividade rurícola na condição de trabalhador eventual (\"boia-fria\"), o enquadramento dá-se como Contribuinte Individual (CI), nos termos do art. 90, inciso XXVI, da Instrução Normativa PRES/INSS nº 128/2022 e conforme entendimento consolidado nas Notas Técnicas nº 236/2013 e nº 237/2014. Ressalte-se que esta categoria possui forma de comprovação própria e não utiliza a autodeclaração, que é instrumento exclusivo do segurado especial. No caso em tela, verifica-se a ausência de início de prova material contemporânea em nome próprio suficiente para comprovar o efetivo exercício da atividade rurícola, o que inviabiliza, inclusive, o processamento de Justificação Administrativa (JA), nos termos dos arts. 116 e 571 da IN PRES/INSS nº 128/2022.\n\n[Se Aposentadoria por Idade Rural - B41:] Embora para a concessão deste benefício no valor de um salário mínimo seja dispensado o recolhimento de contribuições para períodos até 31/12/2010 (art. 143 da Lei nº 8.213/1991 e art. 183 do RPS), permanece indispensável a comprovação documental do trabalho, o que não ocorreu nos autos.\n[Se Aposentadoria por Tempo de Contribuição - B42 ou CTC:] Para este benefício, é obrigatório o efetivo recolhimento ou indenização das contribuições previdenciárias para todo o período pleiteado, inclusive o anterior a 01/01/2011, uma vez que a dispensa de recolhimento prevista no art. 143 da Lei nº 8.213/1991 não se aplica a benefícios sem redução da idade.\n[Se Salário-Maternidade Rural - B80:] No caso de Salário-Maternidade, apesar da isenção de carência estabelecida pela ADI 2.110, é imperativo que a parte comprove o exercício da atividade rural na data do fato gerador para fins de manutenção da qualidade de segurado, requisito não satisfeito por falta de provas contemporâneas.\n\nDiante da falta de provas da atividade alegada e/ou da ausência de recolhimentos obrigatórios, indefiro o pedido."
  },
  {
    "id": "rur-nao-adianta-indenizar-pos-1991-detalhado",
    "titulo": "Rural: Inviabilidade de Indenizar Período Pós-10/1991 (Decreto 10.410/2020 e Pedágio EC 103)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "indenização",
      "pós-1991",
      "Decreto 10.410/2020",
      "EC 103",
      "art. 17"
    ],
    "resumo": "Esclarece que a indenização de período rural pós-10/1991 não retroage a 13/11/2019 para fins de direito adquirido ou regras de transição.",
    "texto": "Quanto ao período homologado de [PERÍODO HOMOLOGADO, EX: 01/11/1991 a 26/02/1998], com possibilidade de emissão de GPS para recolhimento de período em atraso/indenização de período rural para fins de cômputo no tempo de contribuição e concessão do benefício, é importante esclarecer que o Decreto nº 10.410/2020 promoveu alterações no cômputo dos períodos recolhidos em atraso, revogando o art. 59 do Decreto nº 3.048/1999 e modificando o entendimento aplicável aos recolhimentos realizados em atraso. Dessa forma, não é permitido o cômputo de período recolhido em atraso após o fato gerador, sendo considerado apenas mediante a alteração da DER para a data do pagamento. Além disso, o referido período não integrará o cálculo do tempo de contribuição apurado até 13/11/2019, conforme disposto no art. 3º da Emenda Constitucional nº 103/2019. Assim, mesmo que ocorra o pagamento, o período não será computado no tempo de contribuição apurado até 13/11/2019 para fins de direito adquirido, o que também impede sua utilização no requisito temporal até 13/11/2019 das regras de transição previstas nos arts. 17 e 20 da EC nº 103/2019, conforme previsto nos §§ 5º e 6º do art. 9º da Portaria PRES/INSS nº 1.382, de 19/11/2021 (c/c art. 198, § 5º, da Instrução Normativa PRES/INSS nº 128/2022). Pelo exposto, evidencia-se que o recolhimento em atraso solicitado não surtirá efeitos para o reconhecimento do direito no presente caso, visto que, para o art. 17 (pedágio de 50%), o(a) requerente não possui o tempo mínimo de 28/33 anos até a data de 13/11/2019. As fontes utilizadas para embasar essa decisão foram: Comunicado nº 02/2020 - DIVBEN, de 26/04/2021; Parecer CONJUR/MPS nº 219/2011; Nota nº 134/2011/CGMBEN/PFEINSS/PGF/AGU; Parecer CONJUR/MPS nº 616/2010; § 4º do artigo 28 e artigo 188-A do RPS (Decreto nº 3.048/1999) e Portaria PRES/INSS nº 1.382, de 19/11/2021."
  },
  {
    "id": "rur-nao-adianta-indenizar-ec103-resumido",
    "titulo": "Rural: Dispensa de Emissão de GPS Indenizatória Pós-10/1991 (Resumo EC 103/2019)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "indenização",
      "GPS",
      "EC 103",
      "art. 188-A"
    ],
    "resumo": "Versão direta explicando a dispensa de emissão de GPS indenizatória pós-10/1991 por não implementar transição da EC 103/2019.",
    "texto": "Vale ressaltar que o período de [PERÍODO, EX: 11/1991 a XX/XXXX] não foi indenizado. Com a alteração do art. 28, § 4º, do Decreto nº 3.048/1999 (pelo Decreto nº 10.410/2020), o período a ser indenizado não contaria para o cálculo do direito até 13/11/2019, conforme a Emenda Constitucional nº 103/2019. Assim, mesmo com o acréscimo do período a indenizar, o tempo de contribuição em 13/11/2019 permaneceria o mesmo, não implementando tempo/idade suficientes para as regras de transição dos arts. 15, 16, 17 e 20 da EC nº 103/2019.\nA fundamentação legal para a não consideração do período indenizado na aferição do direito adquirido é a Emenda Constitucional nº 103, de 13/11/2019, que considera o tempo efetivamente apurado até aquela data. Dessa forma, eventual indenização realizada posteriormente produz efeitos apenas a partir da data do pagamento, em consonância com o disposto no art. 188-A do Decreto nº 3.048/1999 e no art. 198, § 5º, da Instrução Normativa PRES/INSS nº 128/2022.\nPortanto, deixa-se de emitir GPS indenizatória do período rural posterior a 10/1991, pois não garantiria a concessão do benefício pleiteado."
  },
  {
    "id": "rur-aposentadoria-hibrida-qualidade-segurado",
    "titulo": "Rural / Híbrida: Perda da Qualidade de Segurado na Aposentadoria Híbrida (ACP RS)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "aposentadoria híbrida",
      "ACP",
      "qualidade de segurado",
      "art. 257"
    ],
    "resumo": "Exige manutenção da qualidade de segurado na DER ou na implementação dos requisitos para Aposentadoria Híbrida (ACP).",
    "texto": "Cumpre destacar que, para a concessão da aposentadoria por idade híbrida conforme a Ação Civil Pública nº 2038261-15.2015.4.04.7100/RS (c/c o art. 257 da Instrução Normativa PRES/INSS nº 128/2022), o(a) requerente deverá estar em exercício de atividade (urbana ou rural) ou em período de manutenção da qualidade de segurado na data da implementação das condições ou na Data de Entrada do Requerimento (DER). Uma vez que para o trabalhador rural exige-se a verificação da manutenção da qualidade de segurado, estende-se essa regra ao trabalhador urbano para fins de estrito cumprimento à referida Ação Civil Pública."
  },
  {
    "id": "rur-recebe-b21-cota-individual",
    "titulo": "Rural: Recebimento de Pensão por Morte (B21) Acima do Mínimo - Apuração pela Cota Individual",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "pensão por morte",
      "B21",
      "cota individual",
      "salário mínimo",
      "art. 112"
    ],
    "resumo": "Aplica o § 1º do art. 112 da IN 128/2022 para considerar apenas a cota individual da pensão por morte desmembrada.",
    "texto": "Verifica-se que o(a) requerente recebe benefício de Pensão por Morte (B21) com valor global superior ao salário mínimo; porém, conforme dispõe o § 1º do art. 112 da Instrução Normativa PRES/INSS nº 128/2022: \"§ 1º Em se tratando de recebimento de pensão por morte e auxílio-reclusão, para a apuração do valor previsto na alínea 'a' do inciso VIII do caput, nos casos em que o benefício for pago a mais de um dependente, deverá ser considerada a cota individual.\""
  },
  {
    "id": "rur-acp-segurado-especial-acampado",
    "titulo": "Rural: Segurado Especial na Condição de Acampado (ACP - Vedação a partir de 16/01/2020)",
    "ato": "despacho",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "acampado",
      "ACP",
      "16/01/2020",
      "art. 110"
    ],
    "resumo": "Afasta o enquadramento como segurado especial na condição de acampado para períodos a partir de 16/01/2020.",
    "texto": "Em observância à decisão judicial proferida na Ação Civil Pública (ACP) nº 0003807-95.2011.4.05.8300, e conforme normatizado pelo art. 110, § 6º, da Instrução Normativa PRES/INSS nº 128, de 2022, restou estabelecido que a condição de \"acampado\" deixou de ser considerada para fins de enquadramento como segurado especial a partir de 16 de janeiro de 2020. Desta forma, não há amparo legal para o cômputo de períodos nesta condição a partir da data mencionada, sendo que a análise de períodos anteriores fica condicionada à data de entrada do requerimento, em estrita conformidade com os incisos I e II do referido dispositivo."
  },
  {
    "id": "rur-exig-preenchimento-autodeclaracao",
    "titulo": "Exigência: Preenchimento da Autodeclaração do Segurado Especial (Meu INSS)",
    "ato": "exigencia",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "exigência",
      "autodeclaração",
      "segurado especial",
      "art. 115"
    ],
    "resumo": "Orienta o segurado a preencher e enviar eletronicamente a Autodeclaração Rural pelo Meu INSS ou 135.",
    "texto": "- Preenchimento da Autodeclaração Rural: Preencha a Autodeclaração do Segurado Especial diretamente no Meu INSS (acesse \"Cumprimento de Exigência\" - \"Preencher Autodeclaração\") ou pelo telefone 135. Preencha todos os campos solicitados (períodos trabalhados, dados da terra e componentes do grupo familiar) e clique no botão \"Enviar\" ao finalizar. Caso envie formulário físico digitalizado, todas as páginas devem estar completamente preenchidas e assinadas pelo(a) requerente ou representante legal (Fundamentação: art. 115 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rur-exig-comprovacao-atividade-rural",
    "titulo": "Exigência: Documentos para Comprovação de Atividade Rural",
    "ato": "exigencia",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "exigência",
      "documentos rurais",
      "prova material",
      "art. 116"
    ],
    "resumo": "Solicita documentos contemporâneos que comprovem o trabalho rural, pesqueiro ou extrativista.",
    "texto": "- Comprovação de Trabalho Rural: Apresente documentos emitidos na época do trabalho que comprovem o exercício da atividade rural, pesqueira ou extrativista (como notas fiscais de produtor, contratos de parceria/arrendamento, certidões de casamento ou nascimento com profissão de lavrador/agricultor, histórico escolar rural, recibos de compra de insumos, ITR/INCRA ou declaração sindical homologada). Você pode consultar a lista completa de documentos aceitos em gov.br/inss/pt-br (Fundamentação: art. 116 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rur-exig-certidao-funai-indigena",
    "titulo": "Exigência: Certidão de Exercício de Atividade Rural - Indígena (FUNAI)",
    "ato": "exigencia",
    "tema": "Rural / Segurado Especial",
    "favorito": false,
    "tags": [
      "rural",
      "exigência",
      "indígena",
      "FUNAI",
      "Anexo XXV",
      "art. 116"
    ],
    "resumo": "Solicita a Certidão de Exercício de Atividade Rural emitida pela FUNAI nos moldes do Anexo XXV da IN 128/2022.",
    "texto": "- Comprovação de Atividade Rural (Indígena): Apresente a Certidão de Exercício de Atividade Rural - Indígena, emitida e assinada pela FUNAI (ou com certificação eletrônica válida), comprovando o período trabalhado e preenchida conforme o modelo do Anexo XXV da Instrução Normativa PRES/INSS nº 128/2022 (Fundamentação: art. 116, inciso X, da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "esp-dispensa-reanalise-ppp-anterior",
    "titulo": "Especial: Dispensa de Reanálise de PPPs Já Analisados em Processo Anterior",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "atividade especial",
      "reanálise dispensada",
      "PMF",
      "art. 270",
      "art. 313"
    ],
    "resumo": "Mantém a análise de atividade especial de requerimento anterior por ausência de novos elementos ou mudança normativa.",
    "texto": "Apresentados documentos para comprovação de Atividade Especial, informa-se que os períodos indicados não foram submetidos a nova análise administrativa nem encaminhados à Perícia Médica Federal. Tal procedimento justifica-se pelo aproveitamento de análises previamente realizadas em requerimento anterior, cujos dados foram importados para o presente processo, e pela não apresentação de novos elementos pela parte interessada. Adicionalmente, não se constataram decisões recursais ou judiciais ulteriores, tampouco alterações de entendimento ou legislativas que motivassem a reapreciação. Conforme disposto no art. 270 da Instrução Normativa PRES/INSS nº 128, de 2022, e no art. 313 da Portaria DIRBEN/INSS nº 991, de 28 de março de 2022, as análises de atividade especial efetuadas em benefícios anteriores devem ser mantidas, respeitadas as orientações vigentes à época. O § 1º do referido art. 270 da IN PRES/INSS nº 128/2022 estabelece que a reanálise caberá somente diante da apresentação de novos elementos, a saber: nova documentação com informações distintas, ocorrência de decisão recursal ou judicial ulterior, ou alterações de entendimento e legislativas. Desse modo, considerando que o(a) requerente apresentou o(s) mesmo(s) Perfil(is) Profissiográfico(s) Previdenciário(s) (PPP) já constante(s) em processo anterior, não se configurou a necessidade de nova análise pela Perícia Médica Federal."
  },
  {
    "id": "esp-encaminhamento-pmf-portaria-1630",
    "titulo": "Especial: Encaminhamento à Perícia Médica Federal (Portaria 1.630/2023)",
    "ato": "interno",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "PMF",
      "perícia médica",
      "Portaria 1.630/2023",
      "encaminhamento"
    ],
    "resumo": "Despacho PAT encaminhando o processo à Perícia Médica Federal por enquadrar-se nas exceções do art. 5º da Portaria 1.630/2023.",
    "texto": "Encaminhou-se o presente processo à Perícia Médica Federal para análise do(s) período(s) de atividade especial, em conformidade com a Portaria PRES/INSS nº 1.630, de 17 de novembro de 2023 (c/c o art. 287 da Instrução Normativa PRES/INSS nº 128/2022), uma vez que a situação fática se amolda a, no mínimo, uma das hipóteses elencadas no art. 5º da referida norma (seja o inciso I, alíneas \"a\" ou \"b\". ou o inciso II, alíneas \"a\" ou \"b\"), que excepcionam a análise administrativa de conformidade e determinam a apreciação pela Perícia Médica Federal."
  },
  {
    "id": "esp-ppp-analisado-adm-sem-pmf",
    "titulo": "Especial: PPP Analisado pelo Administrativo Sem Enquadramento (Sem Envio à PMF)",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "análise administrativa",
      "não enquadrado",
      "Portaria 1.630/2023",
      "art. 269",
      "art. 270"
    ],
    "resumo": "Informa que os períodos especiais foram analisados administrativamente (Portaria 1.630/2023), sem enquadramento e sem necessidade de PMF.",
    "texto": "Foram apresentados documentos para comprovação de Atividade Especial, analisados pelo setor administrativo; porém, não houve o enquadramento de quaisquer períodos, conforme relatório conclusivo da análise da exposição a agentes prejudiciais à saúde, nos termos da Portaria PRES/INSS nº 1.630, de 2023, e da Portaria MPS nº 630, de 8 de novembro de 2023. Foram analisadas atividades descritas no Anexo XVI (Enquadramento de Atividade Especial), passíveis de enquadramento por Categoria Profissional até 28/04/1995, nos termos do § 1º do art. 269 da Instrução Normativa PRES/INSS nº 128/2022; exposição a agentes prejudiciais à saúde; e/ou aproveitamento de períodos analisados em requerimento anterior, importados para o presente benefício e com reanálise dispensada, nos termos do art. 270 da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "esp-ppp-analisado-adm-e-encaminhado-pmf",
    "titulo": "Especial: PPP Parcialmente Analisado pelo Administrativo E Encaminhado à PMF",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "análise administrativa",
      "PMF",
      "Portaria 1.630/2023",
      "art. 269",
      "art. 270"
    ],
    "resumo": "Registra análise administrativa parcial dos períodos especiais e o encaminhamento dos períodos remanescentes à Perícia Médica Federal.",
    "texto": "Foram apresentados documentos para comprovação de atividade especial, os quais foram parcialmente analisados pelo setor administrativo, conforme relatório conclusivo da análise da exposição a agentes prejudiciais à saúde, nos termos da Portaria PRES/INSS nº 1.630, de 17 de novembro de 2023, e da Portaria MPS nº 630, de 8 de novembro de 2023. Foram analisadas atividades passíveis de enquadramento por categoria profissional até 28/04/1995, nos termos do § 1º do art. 269 da Instrução Normativa PRES/INSS nº 128/2022; a exposição a agentes prejudiciais à saúde; e/ou o aproveitamento de períodos já analisados em requerimento anterior, com reanálise dispensada, nos termos do art. 270 da mesma Instrução Normativa.\nAdicionalmente, encaminhou-se o presente processo à Perícia Médica Federal para análise do(s) período(s) remanescente(s) de atividade especial, em conformidade com a Portaria PRES/INSS nº 1.630/2023, uma vez que a situação fática do(s) referido(s) período(s) se amolda a, no mínimo, uma das hipóteses elencadas no art. 5º da referida norma (seja o inciso I, alíneas \"a\" ou \"b\", ou o inciso II, alíneas \"a\" ou \"b\"), as quais excepcionam a análise administrativa de conformidade e determinam a apreciação pela Perícia Médica Federal.\nRessalta-se que a verificação da necessidade de informações do código GFIP nos formulários é de responsabilidade da análise técnica, assim como as informações relativas à eficácia de EPC/EPI.\n\n---\n\nEm contato com a Direção Central, a orientação repassada foi no sentido de que, independentemente da forma como forem lançados os períodos, caberá ao perito médico saber que sua análise se dará por período, de data a data, independentemente da quantidade de agentes nocivos. Logo, no tempo direcionado para análise (tarefa PMF), caberá ao profissional competente analisar todos os agentes prejudiciais à saúde a que o segurado esteve exposto naquele período. Dessa forma, orienta-se encaminhar os períodos somente uma vez, sem concomitâncias."
  },
  {
    "id": "esp-conversao-apos-ec103-vedada",
    "titulo": "Especial: Vedação de Conversão de Tempo Especial em Comum Após 13/11/2019 (EC 103)",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "conversão",
      "13/11/2019",
      "EC 103",
      "art. 25",
      "art. 259"
    ],
    "resumo": "Nega a conversão de tempo especial em comum para períodos trabalhados após a Reforma da Previdência (13/11/2019).",
    "texto": "O artigo 25, § 2º, da Emenda Constitucional nº 103/2019 (c/c o art. 259 da Instrução Normativa PRES/INSS nº 128/2022) garante a conversão de tempo especial em comum apenas para o trabalho realizado até 13 de novembro de 2019. A norma proíbe essa conversão de acréscimo temporal para as atividades exercidas após a entrada em vigor da Reforma da Previdência."
  },
  {
    "id": "esp-ppp-sem-representante-ou-responsavel-ambiental",
    "titulo": "Especial: PPP Não Enquadrado - Ausência de Representante Legal e/ou Responsável pelos Registros Ambientais",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "representante legal",
      "registros ambientais",
      "art. 281",
      "art. 68 RPS"
    ],
    "resumo": "Nega enquadramento por vício formal no PPP (ausência de dados do responsável pela emissão ou pelos registros ambientais).",
    "texto": "Período ([PERÍODO]) NÃO enquadrado, em razão de o documento apresentado para comprovação da efetiva exposição a agentes prejudiciais à saúde não possuir informações válidas acerca do responsável pela emissão do documento (§ 3º do art. 68 do Regulamento da Previdência Social - RPS, aprovado pelo Decreto nº 3.048, de 1999, c/c art. 281, inciso III, da Instrução Normativa PRES/INSS nº 128, de 2022).\n\nPeríodo ([PERÍODO]) NÃO enquadrado, em razão de o documento apresentado para comprovação da efetiva exposição a agentes prejudiciais à saúde não apresentar as informações completas relativas ao responsável pelos registros ambientais (§ 3º do art. 68 do Regulamento da Previdência Social - RPS, aprovado pelo Decreto nº 3.048, de 1999, c/c art. 281, inciso II, da Instrução Normativa PRES/INSS nº 128, de 2022)."
  },
  {
    "id": "esp-ppp-eletronico-obrigatorio-pos-2023",
    "titulo": "Especial: Obrigatoriedade de PPP Eletrônico a partir de 01/01/2023 (Evento S-2240)",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP eletrônico",
      "S-2240",
      "eSocial",
      "01/01/2023",
      "Portaria 313/2021",
      "art. 284"
    ],
    "resumo": "Informa que a partir de 01/01/2023 não é admitido PPP em meio físico, sendo obrigatório o envio do evento S-2240 no eSocial.",
    "texto": "Cumpre destacar que as empresas são obrigadas a informar o evento destinado às informações de saúde e segurança do trabalhador - Evento S-2240 no eSocial -, mesmo nos casos em que não houver exposição a agentes prejudiciais à saúde, conforme a Portaria MTP nº 313, de 22 de setembro de 2021 (c/c o art. 284 da Instrução Normativa PRES/INSS nº 128/2022). Nesses casos, não será admitido PPP em meio físico para períodos trabalhados a partir de 1º de janeiro de 2023, conforme o parágrafo único do artigo 2º da Portaria MTP nº 313, de 22 de setembro de 2021."
  },
  {
    "id": "esp-ppp-trabalhador-avulso-pat-email",
    "titulo": "Especial: PPP de Trabalhador Avulso (Despacho PAT + E-mail CGRPMF Sem Fracionamento Prévio)",
    "ato": "interno",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "trabalhador avulso",
      "fracionamento",
      "PRISMA",
      "PMF",
      "art. 70-E",
      "art. 274"
    ],
    "resumo": "Despacho PAT e minuta de e-mail à CGRPMF explicando o envio em bloco dos PPPs de trabalhador avulso para posterior fracionamento no Prisma.",
    "texto": "Despacho no PAT:\nDestaque-se que, excepcionalmente, não foi realizado o fracionamento prévio das atividades especiais constantes nos formulários apresentados (Campo 15 do PPP) em face do elevado número de vínculos e das limitações operacionais do sistema GET. Desse modo, após a avaliação técnica por parte da Perícia Médica Federal, ocorrendo o enquadramento de qualquer período (integral ou parcial), serão os mesmos fracionados no sistema de benefícios (PRISMA) para fins de enquadramento e eventual conversão em tempo comum, na forma prevista no art. 70-E do Decreto nº 3.048/1999 e nos arts. 274 e 289 da Instrução Normativa PRES/INSS nº 128/2022.\n\n-\nMinuta de E-mail para a Perícia Médica Federal (CGRPMF):\nAssunto: Encaminhamento para Análise de PPP - Trabalhador Avulso - CPF: [CPF]\n\nPrezado(a) [NOME DO DESTINATÁRIO],\nConforme alinhamento, solicito a gentileza de encaminhar este e-mail à Coordenação Regional da Perícia Médica Federal ([E-MAIL DA DIVSAT/CGRPMF]), com a seguinte solicitação:\n\nSolicitamos a análise dos Perfis Profissiográficos Previdenciários (PPPs) cadastrados nas tarefas vinculadas ao CPF [CPF].\nInformamos que, devido a limitações operacionais no fluxo entre os sistemas PMF Tarefas, PAT e Prisma, o envio dos referidos PPPs foi realizado em bloco, correspondendo aos vínculos migrados do CNIS, sem o fracionamento detalhado por períodos. Tal procedimento foi adotado por se tratar de trabalhador avulso, cujo grande volume de formulários inviabilizaria o retorno da análise se cadastrado de outra forma.\nConsta despacho no processo PAT com o seguinte teor:\n\"Destaque-se que, excepcionalmente, não foi realizado o fracionamento das atividades especiais constantes nos formulários apresentados (Campo 15 do PPP) face ao número de vínculos e às limitações operacionais do sistema GET. Desse modo, após a avaliação técnica por parte da Perícia Médica Federal, ocorrendo o enquadramento de qualquer período (integral ou parcial), serão os mesmos fracionados no sistema de benefícios (PRISMA) para fins de enquadramento e eventual conversão em comum, na forma prevista no art. 70-E do Decreto nº 3.048/1999.\""
  },
  {
    "id": "esp-ppp-ci-somente-cooperado",
    "titulo": "Especial: Atividade Especial de Contribuinte Individual (Somente Cooperado Após 13/12/2002)",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "contribuinte individual",
      "cooperado",
      "cooperativa",
      "art. 263",
      "art. 275"
    ],
    "resumo": "Esclarece que após 28/04/1995 (e a partir de 13/12/2002) a atividade especial para CI restringe-se ao cooperado filiado a cooperativa.",
    "texto": "Sobre a atividade especial de Contribuinte Individual (CI), nos termos dos arts. 263, 272 e 275 da Instrução Normativa PRES/INSS nº 128/2022, para fins de caracterização de atividade especial exercida até 28/04/1995 por categoria profissional, a comprovação é realizada mediante documentos que atestem, ano a ano, a habitualidade e permanência na atividade arrolada para enquadramento, estando dispensada a apresentação do formulário previsto no art. 272. Já para períodos posteriores a 28/04/1995 (observada a previsão legal a partir de 13/12/2002, Lei nº 10.666/2003), a caracterização dá-se exclusivamente por efetiva exposição a agentes prejudiciais à saúde e somente ao contribuinte individual cooperado filiado a cooperativa de trabalho ou de produção, mediante apresentação de formulário de comprovação de atividade especial (PPP) emitido pela cooperativa."
  },
  {
    "id": "esp-rural-na-ctps-ate-1995",
    "titulo": "Especial: Atividade Especial Rural / Agropecuária na CTPS até 28/04/1995",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "especial rural",
      "agropecuária",
      "lavrador",
      "2.2.1",
      "28/04/1995",
      "art. 269",
      "art. 271"
    ],
    "resumo": "Análise de enquadramento por categoria profissional em atividade agropecuária/rural registrada em CTPS até 28/04/1995 (art. 269 e art. 271 da IN 128/2022).",
    "texto": "Quanto ao pleito de enquadramento como atividade especial por categoria profissional de vínculo rural registrado em CTPS até 28/04/1995 ([PERÍODO]), observa-se o disposto no art. 269, § 1º, e no art. 271 da Instrução Normativa PRES/INSS nº 128/2022 (c/c o item 2.2.1 do Quadro Anexo ao Decreto nº 53.831/1964 e Anexo XVI da IN 128/2022). Ressalta-se que o enquadramento no código 2.2.1 (Agropecuária) restringe-se aos trabalhadores empregados em empresa agroindustrial ou agrocomercial, não alcançando o trabalhador rural comum (lavrador/rurícola vinculado ao Decreto nº 83.080/1979) que exercia atividades tipicamente rurais sem comprovação de atuação em empreendimento agroindustrial ou exposição efetiva a agentes químicos/biológicos nocivos."
  },
  {
    "id": "esp-indeferimento-revisao-ppp-completo",
    "titulo": "Especial: Indeferimento de Revisão Administrativa de Aposentadoria (PPPs Não Enquadrados)",
    "ato": "despacho",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "revisão",
      "PPP",
      "indeferimento",
      "art. 583",
      "art. 270",
      "art. 287"
    ],
    "resumo": "Despacho completo em 6 itens indeferindo pedido de revisão de aposentadoria por não enquadramento de novos PPPs e manutenção de análises anteriores.",
    "texto": "1. Trata-se de Aposentadoria submetida a Revisão Administrativa a pedido do(a) segurado(a), conforme preceitua o artigo 583 da Instrução Normativa PRES/INSS nº 128/2022, a qual foi indeferida.\n2. O indeferimento do pedido de revisão ocorreu devido à falta de enquadramento como atividade especial dos períodos constantes nos novos PPPs apresentados.\n3. Como não foram apresentados novos elementos quanto aos demais intervalos e não houve decisões recursais ou judiciais posteriores, nem alterações de entendimento e/ou legislativas, conforme disposto no art. 270 da IN PRES/INSS nº 128/2022 e no art. 313 da Portaria DIRBEN/INSS nº 991, de 28/03/2022, ficam mantidas as análises de atividade especial realizadas nos benefícios anteriores, respeitadas as orientações vigentes à época. Segundo o § 1º desse mesmo artigo, a reanálise somente é cabível em caso de apresentação de nova documentação com informações diferentes, ocorrência de ulterior decisão recursal ou judicial ou alterações de entendimento e legislativas. Como o(a) requerente apresentou o mesmo PPP do processo anterior para tais períodos, não houve necessidade de envio para reanálise pela Perícia Médica Federal.\n4. Quanto aos novos documentos apresentados referentes ao período de [PERÍODO] (fl. [FOLHAS]), não houve o enquadramento, devido à falta de comprovação da efetiva exposição a agentes prejudiciais à saúde acima dos limites de tolerância, conforme parecer da Perícia Médica Federal / análise técnica, nos termos do caput e § 1º do art. 287 da Instrução Normativa PRES/INSS nº 128/2022.\n5. Conclui-se pela possibilidade de o(a) Requerente interpor Recurso, caso não concorde com a conclusão, em até 30 (trinta) dias após sua ciência, por meio do serviço correspondente no Meu INSS ou pelo telefone 135.\n6. Sem mais diligências. Arquive-se."
  },
  {
    "id": "esp-exig-apresentacao-ppp",
    "titulo": "Exigência: Apresentação de Perfil Profissiográfico Previdenciário (PPP)",
    "ato": "exigencia",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP",
      "exigência",
      "atividade especial",
      "LTCAT",
      "ICP-Brasil",
      "art. 272",
      "art. 281"
    ],
    "resumo": "Solicita PPP devidamente preenchido e assinado pelo representante legal e responsável técnico.",
    "texto": "- Perfil Profissiográfico Previdenciário (PPP): Apresente o formulário PPP totalmente preenchido, carimbado e assinado pelo representante legal da empresa, contendo também a identificação completa e o registro de classe (CREA ou CRM) do responsável técnico pelos registros ambientais (Engenheiro de Segurança do Trabalho ou Médico do Trabalho). Se o laudo técnico for de época diferente da trabalhada (extemporâneo), anexe declaração da empresa informando se o ambiente de trabalho sofreu alterações. Caso o PPP tenha assinatura digital (ICP-Brasil), envie o arquivo PDF digital original para permitir a validação da assinatura (Fundamentação: arts. 272 e 281 da Instrução Normativa PRES/INSS nº 128/2022 e art. 68, § 3º, do Decreto nº 3.048/1999)."
  },
  {
    "id": "esp-exig-ppp-eletronico-esocial",
    "titulo": "Exigência: PPP Eletrônico no eSocial (Períodos a partir de 01/01/2023)",
    "ato": "exigencia",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "PPP eletrônico",
      "exigência",
      "eSocial",
      "S-2240",
      "01/01/2023",
      "art. 284"
    ],
    "resumo": "Orienta o segurado a solicitar ao empregador o envio do evento S-2240 no eSocial para períodos a partir de 01/01/2023.",
    "texto": "- PPP Eletrônico (eSocial - a partir de 01/01/2023): Para períodos trabalhados a partir de 01/01/2023, o INSS analisa exclusivamente o PPP Eletrônico. Como essas informações ainda não constam no seu cadastro (CNIS), solicite ao seu empregador que envie imediatamente os dados de saúde e segurança do trabalho por meio do evento S-2240 no portal do eSocial (login.esocial.gov.br/) (Fundamentação: Portaria MTP nº 313/2021 e art. 284 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "esp-exig-empresa-extinta-ja",
    "titulo": "Exigência: Empresa Extinta e Comprovação de Atividade Especial (JA)",
    "ato": "exigencia",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "empresa extinta",
      "PPP",
      "exigência",
      "JA",
      "justificação administrativa",
      "art. 277",
      "art. 568"
    ],
    "resumo": "Informa os documentos necessários para Justificação Administrativa quando a empresa está baixada e não emitiu PPP.",
    "texto": "- Comprovação de Atividade Especial em Empresa Fechada (Extinta): Caso a empresa esteja fechada (baixada na Receita Federal) e você não possua o PPP, apresente: o comprovante de baixa do CNPJ da empresa; laudo técnico da época ou documento equivalente; e o pedido de Justificação Administrativa (JA) preenchido com a indicação de pelo menos 2 (duas) testemunhas que trabalharam na mesma empresa, no mesmo setor e no mesmo período que você (Fundamentação: arts. 277 e 568 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "esp-exig-tempo-professor",
    "titulo": "Exigência: Declaração de Tempo de Magistério (Professor)",
    "ato": "exigencia",
    "tema": "Atividade Especial / PPP",
    "favorito": false,
    "tags": [
      "professor",
      "magistério",
      "educação básica",
      "exigência",
      "art. 249"
    ],
    "resumo": "Solicita declaração do estabelecimento de ensino atestando regência de classe e nível de ensino.",
    "texto": "- Comprovação de Tempo de Professor: Apresente declaração emitida pela escola ou instituição de ensino (ou órgão oficial de educação) informando o período exato em que você exerceu atividade de magistério (regência de classe, direção de unidade escolar ou coordenação/assessoramento pedagógico) e especificando o nível de ensino (Educação Infantil, Ensino Fundamental ou Ensino Médio), acompanhada dos registros na Carteira de Trabalho ou portarias de nomeação/designação (Fundamentação: arts. 249 a 254 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-alteracao-conforme-ctps",
    "titulo": "CNIS: Inclusão / Alteração de Vínculo Conforme CTPS (Art. 48 IN 128/2022)",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": true,
    "tags": [
      "CNIS",
      "CTPS",
      "inclusão",
      "alteração",
      "art. 48"
    ],
    "resumo": "Registra a inclusão ou alteração de vínculos no CNIS com base na CTPS anexada na tarefa PAT.",
    "texto": "Conforme CTPS constante na tarefa PAT [PROTOCOLO PAT], foi realizada a inclusão/alteração de vínculo(s) no CNIS, de acordo com o artigo 48 da Instrução Normativa PRES/INSS nº 128, de 2022."
  },
  {
    "id": "cnis-ajuste-darf-ec103-economia-processual",
    "titulo": "CNIS / DARF: Contribuições Abaixo do Mínimo (Dispensa de Exigência - EC 103/2019)",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": true,
    "tags": [
      "DARF",
      "abaixo do mínimo",
      "EC 103/2019",
      "art. 29",
      "art. 124",
      "art. 523",
      "salário mínimo"
    ],
    "resumo": "Desconsidera competências abaixo do mínimo sem abrir exigência quando o ajuste não alteraria o mérito ou a RMI, orientando sobre o Meu INSS.",
    "texto": "Não foi oportunizada a regularização, via DARF, das contribuições abaixo do mínimo (relatório das pendências em anexo), pois, em observância aos princípios da eficiência e da economia processual (art. 2º da Lei nº 9.784/1999, c/c art. 523, § 3º, da Instrução Normativa PRES/INSS nº 128/2022), mesmo com a eventual regularização de tais pendências, o(a) segurado(a) [não completaria os requisitos mínimos para a concessão do benefício / já completaria os requisitos mínimos para a concessão do benefício] e não teria alterada a sua RMI. O ajuste pode ser feito pelo próprio segurado, caso queira (complementação, utilização de excedente ou agrupamento), por meio do serviço \"Ajustes para Alcance do Salário Mínimo - Emenda Constitucional 103/2019\" no Meu INSS, conforme o art. 29 da Emenda Constitucional nº 103/2019 e os arts. 124 a 132 da Instrução Normativa PRES/INSS nº 128/2022. Saiba mais em gov.br/inss/pt-br/saiba-mais/salario-minimo"
  },
  {
    "id": "cnis-ajuste-darf-pos-obito-15-janeiro",
    "titulo": "CNIS / DARF: Vedação de Ajuste Pós-Óbito Após 15 de Janeiro do Ano Seguinte",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "DARF",
      "pós-óbito",
      "dependentes",
      "15 de janeiro",
      "art. 106",
      "art. 127",
      "art. 19-E"
    ],
    "resumo": "Veda a regularização pós-óbito de contribuições abaixo do mínimo após o dia 15 de janeiro do ano civil subsequente.",
    "texto": "Não foi oportunizada a regularização, via DARF, das contribuições abaixo do limite mínimo mensal (relatório de pendências em anexo) para fins de concessão de benefício aos dependentes, uma vez que os ajustes pretendidos e o recolhimento das competências do ano civil correspondente superaram o limite temporal máximo de até o dia 15 (quinze) do mês subsequente ao do encerramento do referido ano. A medida observa o disposto no art. 106, § 2º, inciso I, e no art. 127 da Instrução Normativa PRES/INSS nº 128, de 28 de março de 2022, em consonância com o art. 119 da Portaria DIRBEN/INSS nº 990, de 28 de março de 2022, e com o art. 19-E, § 7º, do Decreto nº 3.048/1999. Consequentemente, resta vedada a geração de guia complementar extemporânea pós-óbito e o cômputo dos referidos períodos."
  },
  {
    "id": "cnis-orientacao-gps-darf-regularizar-1553",
    "titulo": "CNIS / Guia: Orientações para Regularizar GPS (Pré-Reforma) e DARF (Pós-Reforma - Portaria 1.553/2023)",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "GPS",
      "DARF",
      "Portaria 1.553/2023",
      "pós-reforma",
      "pré-reforma",
      "complementação"
    ],
    "resumo": "Explica no despacho como o segurado pode regularizar competências pós-11/2019 (DARF) e períodos antigos/indenizações (GPS).",
    "texto": "Para regularizar essa situação, caso queira, observe as instruções abaixo:\n- Ajustes Pós-Reforma (Competências após 11/2019): Acesse o portal Meu INSS e busque pela opção \"Ajustes para Alcance do Salário Mínimo\". O sistema calculará a diferença e emitirá um DARF.\n- Ajustes Pré-Reforma, Indenizações ou Diferenças: Para períodos antigos, o cálculo não é automático. É necessário protocolar um pedido específico por meio da Central 135 ou buscar no Meu INSS o serviço \"Solicitar Cálculo de Complementação de Contribuição e/ou Diferenças\" para que o INSS emita a GPS com os juros e multas pertinentes.\nA regularização é indispensável para o aproveitamento desses períodos na concessão de novos pedidos de benefício.\nEssas orientações constam na Portaria PRES/INSS nº 1.553, de 1º de fevereiro de 2023 (c/c os arts. 124 a 132 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-alterar-der-apos-pagamento-gps",
    "titulo": "CNIS / DER: Alteração da DER para Dia Posterior ao Pagamento de GPS em Atraso",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "DER",
      "recolhimento em atraso",
      "indenização",
      "Decreto 10.410/2020",
      "art. 198",
      "art. 577"
    ],
    "resumo": "Esclarece que recolhimentos em atraso/indenização somente contam como tempo de contribuição a partir da data do efetivo pagamento.",
    "texto": "Solicita-se declarar se autoriza a reafirmação/mudança da DER para o dia posterior ao pagamento das contribuições de indenização ([DATA DO PAGAMENTO]), pois, conforme disciplinam o Decreto nº 10.410, de 30 de junho de 2020 (art. 28, § 4º, e art. 188-A do Decreto nº 3.048/1999) e os arts. 198, § 5º, e 577 da Instrução Normativa PRES/INSS nº 128/2022, pagamentos em atraso referentes a indenização somente são computados para efeito de tempo de contribuição após a data do efetivo recolhimento."
  },
  {
    "id": "cnis-aluno-aprendiz-indeferimento",
    "titulo": "CNIS / Vínculo: Indeferimento de Período de Aluno-Aprendiz",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "aluno-aprendiz",
      "escola técnica",
      "orçamento público",
      "art. 135",
      "art. 137"
    ],
    "resumo": "Indefere período de aluno-aprendiz por falta de certidão escolar comprovando retribuição à conta do orçamento público ou CTC de RPPS.",
    "texto": "No tocante ao período requerido na condição de aluno-aprendiz ([PERÍODO]), verifica-se o não atendimento aos requisitos materiais e formais previstos nos arts. 135 a 137 da Instrução Normativa PRES/INSS nº 128/2022 e nos arts. 128 a 129 da Portaria DIRBEN/INSS nº 990/2022 (Livro I de Cadastro), tendo em vista a ausência de certidão escolar que ateste a retribuição pecuniária à conta do orçamento público (ainda que de forma indireta, mediante fornecimento de alimentação, fardamento ou material escolar) ou de Certidão de Tempo de Contribuição (CTC) expedida por Regime Próprio de Previdência Social competente, razão pela qual o referido interregno é indeferido e não é passível de cômputo no âmbito do RGPS."
  },
  {
    "id": "cnis-seminarista-religioso-indeferimento",
    "titulo": "CNIS / Vínculo: Indeferimento de Período como Seminarista / Religioso (Sem Emissão de Votos)",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "seminarista",
      "religioso",
      "votos",
      "contribuinte individual",
      "art. 90",
      "art. 94"
    ],
    "resumo": "Afasta o cômputo de período em seminário sem comprovação de emissão de votos temporários/perpétuos e recolhimentos.",
    "texto": "O art. 90, inciso V, da Instrução Normativa PRES/INSS nº 128/2022 enquadra como contribuinte individual o ministro de confissão religiosa e o membro de instituto de vida consagrada, de congregação ou de ordem religiosa. A comprovação de tal condição está disposta no inciso III do art. 94 da mesma Instrução Normativa, sendo exigido para o reconhecimento da filiação o ato equivalente de emissão de votos temporários ou perpétuos (ou compromissos equivalentes que habilitem ao exercício estável da atividade religiosa) e, ainda, documentação comprobatória da dispensa dos votos ou compromissos, caso já tenha cessado o exercício da atividade religiosa. Não há no processo elemento que indique tal equivalência, bem como não foram apresentados documentos comprobatórios e contemporâneos (reconhecimento somente a partir da emissão dos votos - SISCON 7900). Dessa forma, o período em seminário ([PERÍODO]) não poderá ser computado para fins de tempo de contribuição na condição de contribuinte individual."
  },
  {
    "id": "cnis-mandato-eletivo-analise-e-sobrestamento",
    "titulo": "CNIS / Vínculo: Mandato Eletivo (1998 a 2004 - Análise e Despacho GET de Sobrestamento)",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "mandato eletivo",
      "vereador",
      "1998 a 2004",
      "Anexo IV",
      "Anexo XII",
      "art. 138",
      "art. 140"
    ],
    "resumo": "Orientações sobre mandato eletivo entre 01/02/1998 e 18/09/2004 e modelo de despacho GET para transferência ao SGBEN.",
    "texto": "1. Análise de Mandato Eletivo (01/02/1998 a 18/09/2004):\nVerifica-se que o(a) requerente possui vínculos com entes federativos e exercício de mandato eletivo no período compreendido entre 01/02/1998 e 18/09/2004, sendo necessária a apresentação da Declaração de Tempo de Contribuição (Anexo IV da IN PRES/INSS nº 128/2022) e, para comprovação das remunerações, do Anexo V da referida norma (ou CTC e Relação de Salários caso vinculado a RPPS). Além disso, para os períodos de mandato eletivo entre 01/02/1998 e 18/09/2004, cabe ao(à) requerente manifestar opção pela manutenção da filiação ao RGPS na qualidade de segurado facultativo, apresentando os documentos e formulários constantes nos arts. 138 e 140 da IN PRES/INSS nº 128/2022:\n- Original e cópia do ato de diplomação referente ao período objeto da opção;\n- \"Termo de Opção pela Filiação ao RGPS na Qualidade de Segurado Facultativo - Exercente de Mandato Eletivo - TOF-EME\" (Anexo XII da IN 128/2022);\n- \"Declaração do Exercente de Mandato Eletivo\" (Anexo XIII da IN 128/2022), declarando que não requereu a restituição dos valores descontados pelo ente federativo e que não exerceu outra atividade determinante de filiação obrigatória ao RGPS nem ao RPPS;\n- \"Discriminativo das Remunerações e dos Valores Recolhidos Relativos ao Exercente de Mandato Eletivo\" (Anexo XIV da IN 128/2022).\n\n-\n2. Despacho GET na Subtarefa de Processo Sobrestado (Comunicado 01/23, item 10):\nInformação expressa de que se trata de opção do exercente de mandato eletivo ([CARGO, EX: VEREADOR]) no período de 01/02/1998 a 18/09/2004.\nIDs dos documentos anexados: [IDs DOS DOCUMENTOS].\nConclusão da análise: O(A) segurado(a) cumpriu a exigência e apresentou os documentos previstos nos arts. 138 e 140 da IN PRES/INSS nº 128/2022 (Anexos XII, XIII e XIV e ato de diplomação). Transfere-se a subtarefa para o OL do SGBEN (Serviço de Gerenciamento de Benefícios) da Gerência Executiva de abrangência do município em que o mandato eletivo foi exercido."
  },
  {
    "id": "cnis-facultativo-concomitante-aposentado-rpps",
    "titulo": "CNIS: Vedação de Contribuições como Facultativo por Aposentado em RPPS",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "facultativo",
      "RPPS",
      "aposentado",
      "vedação",
      "art. 107"
    ],
    "resumo": "Desconsidera recolhimentos realizados na categoria de segurado facultativo por segurado já aposentado em qualquer regime.",
    "texto": "Há contribuições como Segurado Facultativo constantes no Cadastro Nacional de Informações Sociais (CNIS) que não puderam ser consideradas por não atendimento aos requisitos previstos na legislação: o recolhimento das competências [PERÍODO DAS COMPETÊNCIAS, EX: 12/2016 a 08/2022] como segurado facultativo encontra-se em desacordo com o disposto no inciso II do § 5º do art. 107 da Instrução Normativa PRES/INSS nº 128/2022, visto que é expressamente vedada a filiação nesta categoria ao RGPS para o aposentado, qualquer que seja o regime de previdência social a que esteja vinculado."
  },
  {
    "id": "cnis-domestico-entre-conjuge-pais-filhos",
    "titulo": "CNIS: Não Cômputo de Vínculo de Empregado Doméstico entre Cônjuges, Pais e Filhos",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "doméstico",
      "pais e filhos",
      "cônjuge",
      "parentes",
      "art. 73"
    ],
    "resumo": "Desconsidera vínculo de empregado doméstico firmado entre cônjuges/companheiros ou entre pais e filhos sem recolhimento em época própria.",
    "texto": "Os vínculos registrados na Carteira de Trabalho (CTPS) como empregado(a) doméstico(a), tendo como empregador(a) [GRAU DE PARENTESCO E NOME DO EMPREGADOR] nos períodos de [PERÍODOS], foram desconsiderados de acordo com o art. 73 da Instrução Normativa PRES/INSS nº 128/2022, que estabelece que, a partir de 24 de março de 1997 (data da publicação da Orientação Normativa MPAS/SPS nº 8, de 21/03/1997), não é considerado vínculo empregatício o contrato de empregado doméstico entre cônjuges ou companheiros, pais e filhos, observando-se que:\nI - o contrato de trabalho doméstico celebrado entre pais e filhos, bem como entre irmãos, não gerou filiação previdenciária no período de 11 de julho de 1980 a 11 de março de 1992 (Parecer CGI/EB 040/80 e Ordem de Serviço INSS/DISES nº 078, de 09/03/1992); contudo, o período anterior a 24/03/1997 somente poderia ser reconhecido se devidamente comprovado e com as respectivas contribuições vertidas em épocas próprias. Como as contribuições foram efetuadas extemporaneamente (após o término dos vínculos) ou inexistem recolhimentos tempestivos, nenhuma pode ser convalidada e os vínculos não foram inseridos no CNIS."
  },
  {
    "id": "cnis-remuneracoes-anteriores-07-1994",
    "titulo": "CNIS: Inclusão de Remunerações Anteriores a 07/1994 (Não Integram o PBC)",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "remunerações",
      "07/1994",
      "PBC",
      "art. 12",
      "art. 51",
      "art. 219"
    ],
    "resumo": "Esclarece que remunerações anteriores a julho de 1994 não integram o Período Básico de Cálculo (PBC) dos benefícios.",
    "texto": "De acordo com o artigo 51 da Instrução Normativa PRES/INSS nº 128/2022, a comprovação de remuneração junto ao INSS para fins de atualização do CNIS deve observar documentos contemporâneos, tais como ficha financeira, anotações na Carteira de Trabalho (CP/CTPS), folha do Livro de Registro de Empregados, contracheques ou recibos de pagamento.\nEmbora o artigo 12 da mesma Instrução Normativa permita ao filiado solicitar a inclusão ou alteração de informações no CNIS, as normas previdenciárias (art. 219 da IN PRES/INSS nº 128/2022 e Lei nº 9.876/1999) estabelecem que apenas os salários de contribuição referentes às competências a partir de julho de 1994 são considerados na composição do Período Básico de Cálculo (PBC) dos benefícios previdenciários. Portanto, ainda que remunerações anteriores a 07/1994 constem registradas, elas não são utilizadas no cálculo da renda mensal do benefício.\nConclui-se pela possibilidade de interposição de Recurso pelo(a) Requerente, caso não concorde com a conclusão, em até 30 dias após sua ciência, pelo Meu INSS ou telefone 135."
  },
  {
    "id": "cnis-solicita-contagem-antes-pagar-gps",
    "titulo": "CNIS: Indeferimento de Pedido de Contagem Oficial Antes do Pagamento da GPS",
    "ato": "despacho",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "contagem de tempo",
      "simulação",
      "GPS",
      "vencimento",
      "art. 523"
    ],
    "resumo": "Esclarece que a apuração oficial do tempo de contribuição ocorre apenas na análise de requerimento de benefício.",
    "texto": "Em atenção ao pedido de contagem de tempo de contribuição, informamos que a apuração oficial e definitiva do tempo de contribuição é realizada exclusivamente no momento da análise de um requerimento de benefício, após o devido acerto de dados e vínculos nos sistemas cadastrais (nos termos do art. 523 da Instrução Normativa PRES/INSS nº 128/2022). Ressaltamos que o(a) segurado(a) poderá realizar simulações de caráter informativo por meio do serviço \"Simular Aposentadoria\", disponível no portal ou aplicativo Meu INSS, ciente de que o resultado oficial será consolidado apenas ao final da instrução de um processo administrativo de concessão.\nLembramos que a GPS emitida tem vencimento para [DATA DE VENCIMENTO DA GPS]. Não efetuar o pagamento após o vencimento."
  },
  {
    "id": "cnis-subtarefa-aguia-mv2-desindexacao",
    "titulo": "Interno: Abertura de Subtarefa de Consulta de Recolhimentos Águia / MV2 (Desindexação)",
    "ato": "interno",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "Águia",
      "MV2",
      "parcelamento",
      "desindexação",
      "Memorando Circular 1/2011"
    ],
    "resumo": "Solicita informações sobre parcelamento liquidado no Águia/MV2 e lembra a necessidade de desindexação no CNIS.",
    "texto": "Solicitam-se informações acerca de parcelamento efetuado: se liquidado, o período abrangido e os seus valores originais.\nConsulta de Arrecadação Águia/MV2 em anexo.\nAtentar para os procedimentos do Memorando-Circular nº 1 DIRBEN/CGAIS, de 04/01/2011, que dispõe sobre a necessidade da desindexação do salário de contribuição no CNIS, a fim de restabelecer o valor real do salário de contribuição para fins de cômputo no benefício."
  },
  {
    "id": "cnis-subtarefa-consulta-gfipweb",
    "titulo": "Interno: Solicitação de Consulta GFIPWEB ao SAIS (Indicador PDV-GFIP / PDIV-DADOS-GFIP)",
    "ato": "interno",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "GFIPWEB",
      "CONGFIP",
      "8614",
      "PDV-GFIP",
      "SAIS",
      "Portaria Conjunta 90/2023"
    ],
    "resumo": "Modelo estruturado em 3 itens para subtarefa CONGFIP (cód. 8614) enviada ao SAIS da GEX.",
    "texto": "[Orientação: Criar Subtarefa no GET \"Consulta GFIPWEB/eSocial\" (código 8614, sigla CONGFIP) - - Fila de Destino: OL do SAIS da GEX]\n\n1. RELATO DO CASO CONCRETO:\nEm análise de requerimento de benefício, verificou-se no extrato CNIS do(a) segurado(a) [NOME DO SEGURADO], NIT [NIT DO SEGURADO], a presença do indicador PDIV-DADOS-GFIP (ou PDV-GFIP). O referido indicador recai sobre os vínculos/remunerações informados pelo(s) seguinte(s) empregador(es):\n- CNPJ/CEI: [CNPJ/CEI 1] - Empresa: [NOME DA EMPRESA 1] - Período: [PERÍODO 1]\n- CNPJ/CEI: [CNPJ/CEI 2] - Empresa: [NOME DA EMPRESA 2] - Período: [PERÍODO 2]\n\n2. MANIFESTAÇÃO DO ENTENDIMENTO FUNDAMENTADO:\nConforme as normativas vigentes, a presença deste indicador aponta inconsistência na declaração, exigindo a verificação nas bases da Receita Federal (GFIPWEB) para confirmar a real titularidade dos vínculos e remunerações antes de promover qualquer validação, exigência ou cômputo no benefício do(a) segurado(a).\n\n3. DÚVIDA ESPECÍFICA E SOLICITAÇÃO:\nDiante do exposto, e em cumprimento aos requisitos do item 10.5 do Anexo III da Portaria Conjunta DIRBEN/DTI/INSS nº 90/2023, solicito ao SAIS os procedimentos de verificação em GFIPWEB para esclarecer a seguinte dúvida técnica:\nAs remunerações informadas pelas empresas listadas acima no NIT [NIT DO SEGURADO] pertencem de fato ao(à) requerente deste benefício, ou trata-se de utilização indevida da inscrição por terceiros?\n\nNome do(a) Segurado(a): [NOME DO SEGURADO]\nNIT: [NIT DO SEGURADO]\nAguardo retorno técnico para prosseguimento da análise."
  },
  {
    "id": "cnis-desativacao-ferr-sabi",
    "titulo": "Interno: Desativação do FERR/SABI (Portaria 874/2021)",
    "ato": "interno",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "FERR",
      "SABI",
      "desativação",
      "Portaria 874/2021"
    ],
    "resumo": "Solicita a desativação do FERR/SABI conforme Anexo II, item 4, da Portaria DIRBEN/INSS nº 874/2021.",
    "texto": "Solicito a desativação do FERR/SABI, conforme Portaria DIRBEN/INSS nº 874, de 14/01/2021, Anexo II, item 4, tendo em vista a impossibilidade de conclusão pelo SABI.\nNúmero do benefício (NB): [NB]\nNIT: [NIT]\nCPF do(a) requerente: [CPF]\nOL do benefício: [OL BENEFÍCIO]"
  },
  {
    "id": "cnis-desativacao-ferr-cnis-prisma",
    "titulo": "Interno: Desativação do FERR/CNIS + Roteiro Passo a Passo no Prisma (Portaria 874/2021)",
    "ato": "interno",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "FERR",
      "CNIS",
      "desativação",
      "intermitente",
      "abaixo do mínimo",
      "Prisma",
      "Portaria 874/2021"
    ],
    "resumo": "Solicita desativação do FERR/CNIS (Anexo I, item 12.2.2) e traz o passo a passo de captura e reinclusão manual no Prisma.",
    "texto": "Solicito a desativação do FERR/CNIS, conforme Portaria DIRBEN/INSS nº 874, de 14/01/2021, Anexo I, item 12.2.2 (permitida a desativação para inclusão de períodos de trabalho intermitente/ajustes nas espécies 25, 80, 91, 92, 93 e 94).\nNúmero do benefício (NB): [NB]\nNIT: [NIT]\nCPF do(a) requerente: [CPF]\nOL do benefício: [OL BENEFÍCIO]\n\n-\n[Lembrete Operacional - Passo a Passo no Prisma após a desativação:]\n1. Acessar o Prisma - menu Gerenciamento - clicar em \"Captura Desativações Ferramenta CNIS\" (o sistema atualizará);\n2. Reabrir o benefício com o motivo \"04 - Atualização dados CNIS\".\n3. Continuar a habilitação normalmente;\n4. Excluir o vínculo cujas remunerações estão abaixo do salário mínimo; incluir um novo documento de CTPS (opção I) e, dentro desse documento, reincluir este vínculo manualmente;\n5. Continuar a habilitação e informar os salários de contribuição, inclusive os complementados para o salário mínimo, no campo 12 do Prisma."
  },
  {
    "id": "cnis-exig-complementacao-gps-fbr",
    "titulo": "Exigência: Complementação de GPS - Facultativo Baixa Renda (FBR) Não Validado",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "FBR",
      "facultativo baixa renda",
      "GPS",
      "complementação",
      "CadÚnico",
      "art. 107",
      "art. 122"
    ],
    "resumo": "Solicita comprovante de pagamento da GPS de complementação da alíquota de 5% (FBR) para 11% ou 20%.",
    "texto": "- Comprovante de Complementação da Contribuição (Facultativo Baixa Renda): Apresente o comprovante de pagamento da guia GPS em anexo (com vencimento em [DATA DE VENCIMENTO] e valor de R$ [VALOR DA GPS]). Essa guia refere-se à complementação das contribuições feitas na alíquota reduzida de 5% (Facultativo Baixa Renda) para o Plano Simplificado (11%), pois os pagamentos originais não foram validados em razão de constar renda própria informada no Cadastro Único (CadÚnico) (Fundamentação: art. 107, § 4º, e art. 122 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-regularizacao-darf-ec103",
    "titulo": "Exigência: Regularização de Contribuições Abaixo do Salário Mínimo (DARF - Pós-EC 103/2019)",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "DARF",
      "abaixo do mínimo",
      "exigência",
      "EC 103/2019",
      "agrupamento",
      "complementação",
      "art. 124"
    ],
    "resumo": "Orienta o segurado a acessar o serviço de Ajustes para Alcance do Salário Mínimo no Meu INSS para complementar ou agrupar meses pós-11/2019.",
    "texto": "- Regularização de Contribuições Abaixo do Salário Mínimo (Competências:[COMPETÊNCIAS ABAIXO DO MÍNIMO]): Para que os meses com contribuição abaixo do salário mínimo (a partir de 11/2019) possam valer para o seu benefício, acesse o aplicativo ou site Meu INSS (meu.inss.gov.br/), procure pelo serviço \"Ajustes para Alcance do Salário Mínimo - Emenda Constitucional 103/2019\", selecione o ano correspondente e escolha se deseja complementar o valor via guia DARF, utilizar valores excedentes de outros meses ou agrupar competências. Após realizar o ajuste ou pagar o DARF até a data de vencimento, anexe o comprovante neste pedido (Fundamentação: art. 29 da Emenda Constitucional nº 103/2019 e arts. 124 a 132 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-regularizacao-gps-1553",
    "titulo": "Exigência: Regularização de Contribuições em Guia GPS (Plano Simplificado / MEI / Pré-Reforma)",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "GPS",
      "MEI",
      "plano simplificado",
      "Portaria 1.553/2023",
      "exigência",
      "art. 122"
    ],
    "resumo": "Orienta a emissão ou solicitação de cálculo de GPS para regularizar diferenças de alíquota ou salários abaixo do mínimo pré-Reforma.",
    "texto": "- Regularização de Contribuições em Guia GPS: Regularize as contribuições pendentes ([COMPETÊNCIAS]) emitindo a guia de complementação diretamente pelo Meu INSS (meu.inss.gov.br/). Caso se trate de períodos com mais de 5 (cinco) anos ou diferenças de alíquota do Plano Simplificado / MEI, solicite o cálculo específico ligando para a Central 135 ou pelo serviço \"Solicitar Cálculo de Complementação de Contribuição e/ou Diferenças\" no Meu INSS, e anexe o comprovante de pagamento neste processo (Fundamentação: Portaria PRES/INSS nº 1.553/2023 e art. 122 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-ajuste-empresa-esocial-intermitente",
    "titulo": "Exigência: Retificação pela Empresa no eSocial (Trabalho Intermitente / Jornada Diferenciada)",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "eSocial",
      "PVIN-TRAB-INTERM",
      "IVIN-JORN-DIFERENCIADA",
      "retificação",
      "art. 35"
    ],
    "resumo": "Orienta o segurado a solicitar ao empregador a retificação no eSocial para sanar indicadores PVIN-TRAB-INTERM ou IVIN-JORN-DIFERENCIADA.",
    "texto": "- Correção de Dados pelo Empregador no eSocial: Identificamos uma pendência no seu cadastro (indicador de trabalho intermitente ou jornada diferenciada - PVIN-TRAB-INTERM / IVIN-JORN-DIFERENCIADA) referente ao vínculo com a empresa [NOME DA EMPRESA]. Como o INSS não pode alterar esses dados manualmente, solicite ao seu empregador que faça a correção das informações diretamente no portal do eSocial (login.esocial.gov.br/) e, em seguida, informe neste processo que a retificação foi concluída (Fundamentação: art. 35 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-vinculos-extemporaneos-esocial",
    "titulo": "Exigência: Comprovação de Vínculo Extemporâneo no eSocial (Pós-24/09/2019 - Anexo II)",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "eSocial",
      "vínculo extemporâneo",
      "pós-09/2019",
      "Anexo II",
      "art. 48",
      "art. 19-B"
    ],
    "resumo": "Solicita comprovante do evento no eSocial com recibo eletrônico e declaração do empregador (Anexo II da IN 128/2022) ou provas contemporâneas.",
    "texto": "- Comprovação de Vínculo de Emprego (Período a partir de 24/09/2019 - eSocial): Para validar o vínculo com a empresa [NOME DA EMPRESA] ([PERÍODO]), apresente o comprovante do evento enviado ao eSocial contendo o número do recibo eletrônico, acompanhado da Declaração do Empregador preenchida e assinada (conforme modelo do Anexo II da Instrução Normativa PRES/INSS nº 128/2022), ou apresente documentos da época do trabalho (como contracheques, recibos de salário, extratos de FGTS ou contrato de trabalho) que confirmem as datas de início e fim do emprego (Fundamentação: art. 19-B do Decreto nº 3.048/1999 e art. 48 e Anexo II da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-remuneracao-esocial",
    "titulo": "Exigência: Comprovação de Remunerações no Período do eSocial",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "eSocial",
      "remunerações",
      "contracheque",
      "Anexo II",
      "art. 51"
    ],
    "resumo": "Solicita contracheques com número do recibo eletrônico do eSocial ou declaração do empregador (Anexo II).",
    "texto": "- Comprovação de Salários (Período do eSocial): Para comprovar os salários recebidos na empresa [NOME DA EMPRESA] nas competências [COMPETÊNCIAS], apresente os contracheques ou recibos de pagamento da época que contenham o número do recibo eletrônico do eSocial, ou o comprovante do evento no eSocial acompanhado da Declaração do Empregador (Anexo II da Instrução Normativa PRES/INSS nº 128/2022) (Fundamentação: art. 19-B do Decreto nº 3.048/1999 e art. 51 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-gfip-extemporanea-ci",
    "titulo": "Exigência: Comprovação de Atividade / Remuneração em GFIP Extemporânea (Contribuinte Individual)",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "GFIP extemporânea",
      "contribuinte individual",
      "pró-labore",
      "RPA",
      "art. 95"
    ],
    "resumo": "Solicita documentos contemporâneos que comprovem a prestação de serviço ou retirada de pró-labore declarada em GFIP fora do prazo.",
    "texto": "- Comprovação de Trabalho Prestado a Empresa (GFIP enviada fora do prazo): Para validar as contribuições declaradas fora do prazo pela empresa [NOME DA EMPRESA] ([PERÍODO]), apresente documentos da época do trabalho que confirmem a prestação de serviço e os valores recebidos: recibos de pró-labore (se sócio/administrador), Recibos de Pagamento a Autônomo (RPA) ou comprovantes de pagamento com identificação do CNPJ e do desconto do INSS, Declaração de Imposto de Renda da época (com recibo de entrega) ou declaração da empresa baseada em seus registros contábeis/fiscais (Fundamentação: art. 95 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-jornada-intermitente-parcial",
    "titulo": "Exigência: Declaração e Comprovantes de Trabalho em Jornada Intermitente ou Parcial",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "intermitente",
      "jornada parcial",
      "contracheques",
      "contrato de trabalho",
      "art. 240"
    ],
    "resumo": "Solicita declaração conjunta de empregador e empregado, contrato de trabalho e contracheques dos meses trabalhados.",
    "texto": "- Comprovação de Jornada de Trabalho (Intermitente ou Parcial): Apresente o contrato individual de trabalho, os contracheques dos meses trabalhados e uma declaração assinada pela empresa informando a modalidade da jornada (parcial ou intermitente) e os meses em que houve convocação e efetivo trabalho (Fundamentação: art. 240, inciso VII, e art. 427 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-convalidacao-facultativo",
    "titulo": "Exigência: Concordância para Convalidação de Contribuições como Segurado Facultativo",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "convalidação",
      "facultativo",
      "segurado obrigatório",
      "art. 119"
    ],
    "resumo": "Solicita manifestação por escrito do segurado concordando em convalidar recolhimentos indevidos como obrigatório para facultativo.",
    "texto": "- Autorização para Aproveitamento de Contribuições como Facultativo: Apresente uma declaração simples, datada e assinada por você, informando que concorda em aproveitar (convalidar) para a categoria de Segurado Facultativo as contribuições das competências [COMPETÊNCIAS], que foram pagas com código de segurado obrigatório sem comprovação de trabalho naquele período (Fundamentação: art. 119 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "cnis-exig-aluno-aprendiz",
    "titulo": "Exigência: Certidão Escolar para Comprovação de Período de Aluno-Aprendiz",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "aluno-aprendiz",
      "exigência",
      "certidão escolar",
      "orçamento público",
      "art. 135"
    ],
    "resumo": "Solicita Certidão Escolar detalhando autorização da escola, período exato de frequência e retribuição à conta do orçamento público.",
    "texto": "- Documentação de Aluno-Aprendiz (Períodos até 16/12/1998): Apresente Certidão Escolar emitida pela instituição de ensino profissionalizante informando: o ato/norma de autorização ou reconhecimento da escola pelo Governo; o curso frequentado; as datas exatas (dia, mês e ano) de início e fim do período como aluno-aprendiz; e a confirmação de que você recebia retribuição paga pelo orçamento público, mesmo que de forma indireta (como alimentação, uniforme/fardamento, material escolar ou participação na renda de encomendas executadas para terceiros). Caso a escola pertencesse a órgão público com Regime Próprio (RPPS) na época, apresente a Certidão de Tempo de Contribuição (CTC) emitida pelo respectivo órgão (Fundamentação: arts. 135 a 137 da Instrução Normativa PRES/INSS nº 128/2022 e arts. 128 e 129 da Portaria DIRBEN/INSS nº 990/2022)."
  },
  {
    "id": "cnis-exig-dtc-orgao-publico-anexos-iv-v",
    "titulo": "Exigência: Declaração de Tempo de Contribuição ao RGPS - Órgão Público (DTC - Anexos IV e V)",
    "ato": "exigencia",
    "tema": "CNIS, DARF, GPS e Vínculos",
    "favorito": false,
    "tags": [
      "DTC",
      "órgão público",
      "RGPS",
      "Anexo IV",
      "Anexo V",
      "art. 69"
    ],
    "resumo": "Solicita os formulários Anexo IV (vínculo RGPS em ente público) e Anexo V (remunerações), com links oficiais e regras de assinatura.",
    "texto": "- Declaração de Tempo de Contribuição ao RGPS - Órgão Público ([NOME DO ÓRGÃO / ENTIDADE]): Para comprovar o período trabalhado em órgão público com contribuição para o INSS (RGPS), apresente o formulário \"Declaração de Tempo de Contribuição ao RGPS - DTC\" (Anexo IV da IN 128/2022) e, para comprovar os salários, o formulário do Anexo V, ambos preenchidos sem rasuras e sem alteração de modelo, assinados em todas as folhas pelo servidor responsável pela emissão e pelo dirigente do órgão público.\nObs.: Caso o Anexo IV descreva os documentos oficiais que serviram de base para sua emissão e declare expressamente que eles estão à disposição do INSS, fica dispensada a entrega separada das portarias/atos de nomeação e exoneração. A declaração deve conter apenas períodos com contribuição vertida ao INSS (RGPS).\nOs formulários oficiais seguem em anexo a esta exigência (também disponíveis na rede interna em portalin.prevnet/assets/anexos/in/AnexoIV.pdf e portalin.prevnet/assets/anexos/in/AnexoV.pdf) (Fundamentação: art. 69, § 1º, e Anexos IV e V da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-exig-ausencia-procuracao-termo-act",
    "titulo": "Exigência Representação: Ausência de Procuração ou Termo de Representação (ACT)",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração",
      "ausência",
      "ACT",
      "termo de representação",
      "advogado",
      "art. 527",
      "art. 543"
    ],
    "resumo": "Solicita Procuração, Termo de Representação (para advogados/entidades ACT) ou documento de tutela/curatela com RG do representante.",
    "texto": "- Comprovação de Representação (Procuração ou Termo de Representação): Identificamos que este pedido foi feito por um representante, mas o documento que autoriza essa representação não foi anexado. Apresente um dos documentos abaixo, acompanhado do documento de identificação oficial com foto do representante:\n  a) Procuração (pública ou particular) assinada pelo(a) segurado(a); ou\n  b) Termo de Representação e Autorização de Acesso a Informações Previdenciárias (obrigatório quando o pedido é feito por advogado ou entidade conveniada via Acordo de Cooperação Técnica - ACT); ou\n  c) Documento de representação legal (Termo de Tutela, Curatela ou Guarda).\nAtenção: A falta desse documento impede a análise do pedido e acarretará o encerramento do processo por desistência, sem análise do mérito (Fundamentação: arts. 527 e 543 da Instrução Normativa PRES/INSS nº 128/2022; arts. 44 e 77 da Portaria DIRBEN/INSS nº 993/2022)."
  },
  {
    "id": "rep-exig-assinatura-eletronica-ausente-invalida",
    "titulo": "Exigência Representação: Assinatura Eletrônica do Outorgante Ausente ou Inválida",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração",
      "assinatura eletrônica",
      "outorgante",
      "inválida",
      "Decreto 10.543/2020",
      "art. 560"
    ],
    "resumo": "Solicita nova procuração quando o documento contém apenas assinatura do procurador/plataforma ou assinatura inválida do segurado.",
    "texto": "- Regularização da Assinatura na Procuração: A procuração apresentada não possui assinatura válida do(a) segurado(a) (outorgante) ou consta assinada apenas pelo procurador/plataforma. Apresente uma nova procuração em uma das seguintes formas:\n  a) Procuração física: assinada à mão pelo(a) segurado(a) de forma igual ao documento de identidade (se o segurado não for alfabetizado, a procuração deve ser pública feita em cartório, exceto quando o procurador for advogado, conforme art. 541, § 1º, da IN 128/2022); ou\n  b) Procuração eletrônica: assinada digitalmente pelo(a) próprio(a) segurado(a) utilizando, no mínimo, assinatura eletrônica avançada (como Gov.br nível Prata/Ouro ou certificado ICP-Brasil) que permita validar a autoria no arquivo original (Fundamentação: arts. 541, 542, § 3º, e 560 da Instrução Normativa PRES/INSS nº 128/2022; Decreto nº 10.543/2020, art. 4º, II; Lei nº 14.063/2020, art. 4º, II)."
  },
  {
    "id": "rep-exig-divergencia-assinatura",
    "titulo": "Exigência Representação: Divergência entre a Assinatura da Procuração e o Documento de Identidade",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração",
      "divergência de assinatura",
      "reconhecimento de firma",
      "art. 542",
      "art. 560"
    ],
    "resumo": "Solicita novo instrumento de mandato (físico compatível/com firma reconhecida ou eletrônico avançado) por divergência de assinatura.",
    "texto": "- Divergência na Assinatura da Procuração / Termo de Representação: A assinatura do(a) segurado(a) na procuração está diferente da assinatura que consta no documento de identidade apresentado, gerando dúvida quanto à autenticidade. Apresente nova procuração:\n  a) Física: com assinatura manuscrita do(a) segurado(a) compatível com o documento de identificação oficial atual (ou com firma reconhecida em cartório, caso a assinatura tenha mudado). Se o(a) segurado(a) for não alfabetizado(a), exige-se procuração pública (salvo se outorgada a advogado, art. 541, § 1º, da IN 128/2022); ou\n  b) Eletrônica: assinada digitalmente pelo(a) segurado(a) com assinatura eletrônica no mínimo avançada (Gov.br Prata/Ouro ou ICP-Brasil), enviando o arquivo PDF original assinado.\nA não regularização no prazo legal acarretará o encerramento do processo por desistência, sem análise do mérito (Fundamentação: arts. 525, 542, § 3º, 560 e 563 da Instrução Normativa PRES/INSS nº 128/2022; Decreto nº 10.543/2020)."
  },
  {
    "id": "rep-exig-reforco-30-dias",
    "titulo": "Exigência Representação: Reiteração / Reforço (Aviso de Encerramento em 30 Dias)",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração",
      "reforço",
      "reiteração",
      "30 dias",
      "art. 574"
    ],
    "resumo": "Reitera exigência de representação cumprida de forma incompleta no mesmo dia/próximo, alertando sobre o prazo de 30 dias.",
    "texto": "- Reiteração - Regularização da Assinatura / Representação: Reiteramos a solicitação para o cumprimento integral da exigência anterior, pois ainda não foi possível validar a assinatura do(a) segurado(a) (outorgante) no documento enviado. Caso a pendência não seja totalmente regularizada dentro do prazo legal de 30 (trinta) dias contados da ciência da exigência, o processo será encerrado por desistência do pedido, sem análise do mérito (Fundamentação: arts. 566 e 574, § 4º, inciso II, da Instrução Normativa PRES/INSS nº 128, de 28 de março de 2022)."
  },
  {
    "id": "rep-exig-clausula-ad-judicia",
    "titulo": "Exigência Representação: Procuração Apenas com Cláusula Ad Judicia (Sem Poderes para o INSS)",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração",
      "ad judicia",
      "ad judicia et extra",
      "poderes administrativos",
      "art. 542",
      "Portaria 993"
    ],
    "resumo": "Solicita nova procuração com outorga expressa de poderes para atuar na esfera administrativa / perante o INSS.",
    "texto": "- Procuração com Poderes para Atuação no INSS (Via Administrativa): A procuração apresentada possui apenas poderes para processos judiciais (cláusula \"ad judicia\" ou \"ad judicia et extra\" sem especificar poderes administrativos). Apresente uma nova procuração que descreva expressamente os poderes para representar o(a) segurado(a) perante o INSS ou a Administração Pública (com qualificação das partes, local, data e assinatura válida do segurado) (Fundamentação: art. 43, § 6º, da Portaria DIRBEN/INSS nº 993/2022; arts. 542 e 574, § 4º, inciso II, alínea \"a\", da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-exig-substabelecimento-sem-originaria",
    "titulo": "Exigência Representação: Substabelecimento Sem Procuração Originária ou Sem Poderes",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "substabelecimento",
      "procuração originária",
      "cadeia de poderes",
      "art. 532",
      "art. 542"
    ],
    "resumo": "Solicita a procuração originária (com permissão para substabelecer) e substabelecimento regular com data igual ou posterior.",
    "texto": "- Regularização de Substabelecimento: Para validar a representação por substabelecimento, apresente:\n  1. A procuração originária assinada pelo(a) segurado(a), contendo autorização expressa para substabelecer poderes a outro representante; e\n  2. O documento de substabelecimento identificando claramente o(a) segurado(a) e a procuração original (observando que a data do substabelecimento não pode ser anterior à data da procuração originária) (Fundamentação: art. 653 do Código Civil; arts. 532, 542 e 574, § 4º, inciso II, alínea \"a\", da Instrução Normativa PRES/INSS nº 128/2022; art. 43, § 9º, da Portaria DIRBEN/INSS nº 993/2022)."
  },
  {
    "id": "rep-exig-termo-autorizacao-inabil",
    "titulo": "Exigência Representação: Termo de Autorização Inábil para Mandato (Exigir Procuração)",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "termo de autorização",
      "procuração",
      "mandato",
      "art. 532",
      "art. 544"
    ],
    "resumo": "Esclarece que simples \"Termo de Autorização\" não substitui Procuração para requerer benefícios ou praticar atos no processo.",
    "texto": "- Apresentação de Procuração Regular (Substituição de Termo de Autorização): Foi apresentado apenas um \"Termo de Autorização\", documento que não tem validade jurídica de procuração para fazer pedidos ou atuar no processo administrativo em nome do(a) segurado(a). Apresente uma Procuração regular (pública ou particular, assinada fisicamente conforme o RG ou eletronicamente em nível avançado/qualificado), contendo os dados completos do(a) segurado(a) e do(a) procurador(a) e poderes expressos para atuar junto ao INSS, acompanhada do documento de identificação do procurador (Fundamentação: art. 653 e seguintes do Código Civil; arts. 532 a 544 e art. 574, § 4º, inciso II, alínea \"a\", da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-exig-campos-obrigatorios-ausentes",
    "titulo": "Exigência Representação: Procuração com Campos Obrigatórios Ausentes",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração",
      "campos obrigatórios",
      "qualificação",
      "poderes",
      "art. 560"
    ],
    "resumo": "Solicita nova procuração contendo qualificação completa das partes, objetivo/extensão dos poderes, local, data e assinatura.",
    "texto": "- Procuração Preenchida com Todos os Dados Obrigatórios: A procuração enviada está incompleta. Apresente uma nova procuração contendo obrigatoriamente: identificação e qualificação completa do(a) segurado(a) e do(a) procurador(a); o objetivo e a descrição dos poderes concedidos perante o INSS (como requerer benefícios, cumprir exigências, recorrer); o prazo de validade (se houver); o local e a data de emissão; e a assinatura válida do(a) segurado(a) (Fundamentação: art. 560, § 1º, da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-exig-arquivo-original-validacao-digital",
    "titulo": "Exigência Representação: Envio do Arquivo PDF Original Assinado Digitalmente",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "procuração eletrônica",
      "arquivo original",
      "PDF assinado",
      "validação",
      "art. 108"
    ],
    "resumo": "Solicita o arquivo PDF digital original (e não foto/impressão digitalizada) para permitir a validação da assinatura eletrônica.",
    "texto": "- Envio do Arquivo Digital Original da Procuração Eletrônica: Não foi possível validar a assinatura eletrônica da procuração porque o arquivo anexado é uma imagem, foto ou cópia impressa/regravada, o que corrompe o certificado digital. Anexe o arquivo PDF digital original exatamente no formato em que foi gerado e assinado na plataforma eletrônica, sem imprimir nem converter, para que o INSS possa verificar a validade da assinatura online (Fundamentação: art. 108, §§ 1º e 4º, da Instrução Normativa PRES/INSS nº 128/2022; Medida Provisória nº 2.200-2/2001, art. 10)."
  },
  {
    "id": "rep-exig-nivel-assinatura-simples-insuficiente",
    "titulo": "Exigência Representação: Nível de Assinatura Eletrônica Insuficiente (Assinatura Simples)",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "assinatura simples",
      "assinatura avançada",
      "assinatura qualificada",
      "ICP-Brasil",
      "Decreto 10.543/2020",
      "art. 560"
    ],
    "resumo": "Recusa assinatura eletrônica simples em procuração e solicita assinatura no mínimo avançada (Gov.br Prata/Ouro) ou qualificada (ICP-Brasil).",
    "texto": "- Procuração com Assinatura Eletrônica Avançada ou Qualificada: A procuração apresentada foi assinada com \"assinatura eletrônica simples\", que não possui o nível de segurança exigido por lei para outorga de poderes no INSS. Apresente nova procuração assinada pelo(a) segurado(a) com assinatura eletrônica no mínimo Avançada (como a assinatura Gov.br de conta nível Prata ou Ouro) ou Qualificada (certificado digital ICP-Brasil), ou envie procuração física assinada à mão conforme o documento de identidade (Fundamentação: Decreto nº 10.543/2020, art. 4º, II; Lei nº 14.063/2020, art. 5º; arts. 108 e 560 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-exig-ausencia-dados-verificacao-eletronica",
    "titulo": "Exigência Representação: Ausência de Link / Chave / Código para Verificação da Assinatura",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "código de verificação",
      "chave de acesso",
      "procuração eletrônica",
      "art. 108",
      "art. 560"
    ],
    "resumo": "Solicita documento eletrônico contendo o endereço (link), código/chave de validação, data/hora e dados do signatário.",
    "texto": "- Dados para Validação da Assinatura Eletrônica na Procuração: O documento eletrônico de representação enviado não apresenta os dados necessários para conferência da sua autenticidade (endereço do site validador, chave de acesso ou código de verificação, data e hora da assinatura e identificação do signatário). Envie o documento completo contendo o relatório/código de validação online ou o arquivo PDF original assinado com certificado ICP-Brasil / Gov.br (Fundamentação: art. 108, § 4º, e art. 560, § 4º, da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-exig-divergencia-verificacao-autoria-conteudo",
    "titulo": "Exigência Representação: Divergência na Verificação de Autoria / Conteúdo da Procuração",
    "ato": "exigencia",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "divergência",
      "integridade",
      "autoria",
      "validação",
      "art. 108",
      "art. 560"
    ],
    "resumo": "Solicita novo documento de representação quando há divergência entre o documento anexado e os dados retornados pela plataforma certificadora.",
    "texto": "- Novo Documento de Representação (Divergência na Validação Digital): Ao consultar o código/chave de verificação informado, constatamos divergência entre o documento anexado ao processo e as informações registradas na plataforma de assinatura digital. Apresente um novo documento de representação assinado eletronicamente pelo(a) segurado(a) (no mínimo com assinatura avançada), enviando o arquivo PDF original íntegro cujos dados de verificação correspondam exatamente ao documento anexado (Fundamentação: Medida Provisória nº 2.200-2/2001, art. 10; Lei nº 14.063/2020, art. 4º; art. 108, § 1º, e art. 560 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rep-despacho-encerramento-sem-merito-30-dias",
    "titulo": "Despacho Representação: Encerramento Sem Análise do Mérito (Não Cumprimento em 30 Dias - Art. 574, § 4º, II)",
    "ato": "despacho",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "encerramento",
      "sem análise do mérito",
      "30 dias",
      "alínea a",
      "alínea b",
      "art. 574",
      "art. 575"
    ],
    "resumo": "Despacho estruturado em 9 itens para encerrar processo sem resolução de mérito após 30 dias sem sanar vício de representação (alínea a) ou habilitação (alínea b).",
    "texto": "1. Trata-se de requerimento de [NOME DO BENEFÍCIO / SERVIÇO SOLICITADO] que será encerrado sem análise do mérito, em razão do não cumprimento integral das exigências formuladas para a correta instrução e habilitação do pedido, conforme detalhado abaixo.\n2. Em [DATA DE EMISSÃO DA EXIGÊNCIA], foi emitida carta de exigência, da qual o(a) interessado(a) tomou ciência em [DATA DA CIÊNCIA OU 6º DIA APÓS E-MAIL/SMS], solicitando a apresentação de documentos/esclarecimentos imprescindíveis, especificamente quanto a [NATUREZA DA EXIGÊNCIA, EX: regularização da representação processual / apresentação do arquivo original da procuração com assinatura eletrônica válida]. Foi concedido o prazo legal para cumprimento.\n3. Verifica-se que, decorrido o prazo de 30 (trinta) dias da ciência da referida exigência, o(a) interessado(a) não apresentou os elementos solicitados de forma a sanar as seguintes pendências:\n- [DESCREVER A PENDÊNCIA NÃO SANADA, EX: Não apresentação de procuração com assinatura eletrônica avançada ou qualificada do outorgante / Não fornecimento do arquivo PDF original para validação / Manutenção de vício de representação].\n4. O não atendimento das referidas exigências impede a análise de mérito do requerimento, configurando, nos termos do art. 574, § 4º, inciso II, da Instrução Normativa PRES/INSS nº 128, de 28 de março de 2022:\n[ALÍNEA APLICÁVEL: a) vício de representação não sanado; e/ou b) ausência de elementos suficientes para a habilitação do pedido.]\n5. A regularidade da representação e a validade dos documentos eletrônicos são requisitos essenciais para a segurança jurídica dos atos processuais, conforme estabelecido pela Medida Provisória nº 2.200-2/2001, pela Lei nº 14.063/2020, pelo Decreto nº 10.543/2020 e pelos artigos 108 e 560 da Instrução Normativa PRES/INSS nº 128/2022.\n6. Desta forma, diante da inércia do(a) interessado(a) em cumprir as exigências no prazo estabelecido, e considerando a ausência de elementos mínimos para prosseguir com a análise do direito pleiteado, impõe-se o encerramento do processo sem resolução de mérito, por desistência do pedido.\n7. Nos termos do art. 575 da Instrução Normativa PRES/INSS nº 128/2022, o(a) interessado(a) será comunicado(a) desta decisão, com a exposição dos motivos e a fundamentação legal.\n8. Ressalta-se que o presente encerramento não impede a formulação de novo requerimento, que poderá ser realizado a qualquer tempo, devendo, contudo, ser instruído desde o início com toda a documentação necessária para a comprovação do direito, observadas as normativas vigentes.\n9. Processo encerrado sem análise do mérito, e a tarefa correspondente finalizada nesta data."
  },
  {
    "id": "rep-roteiro-exemplos-alineas-a-b",
    "titulo": "Roteiro: Guia Rápido de Uso das Alíneas 'a' (Vício de Representação) e 'b' (Falta de Elementos para Habilitação)",
    "ato": "roteiro",
    "tema": "Representação / Procuração",
    "favorito": false,
    "tags": [
      "roteiro",
      "alínea a",
      "alínea b",
      "art. 574",
      "vício de representação",
      "habilitação"
    ],
    "resumo": "Guia de consulta rápida com exemplos práticos de quando aplicar a alínea 'a' ou a alínea 'b' do art. 574, § 4º, II, da IN 128/2022.",
    "texto": "GUIA DE CONSULTA - ART. 574, § 4º, INCISO II, DA IN 128/2022:\n\n1. Alínea \"a\": Vício de representação não sanado\n- Quando usar: Exclusivamente quando o problema que impede a análise do mérito é a irregularidade na representação por terceiro (procurador, advogado, curador, entidade conveniada).\n- Exemplos práticos para colar no item 3 do despacho:\n  - \"Não apresentação de procuração com assinatura eletrônica avançada ou qualificada do outorgante (requerente)\".\n  - \"Procuração apresentada com assinatura eletrônica de nível simples, inferior ao exigido pelo Decreto nº 10.543/2020\".\n  - \"Procuração com campos obrigatórios ausentes que invalidam o mandato (art. 560, § 1º, da IN 128/2022)\".\n  - \"Não fornecimento do arquivo PDF original da procuração eletrônica para validação da assinatura\".\n  - \"Divergência entre o documento de representação anexado e os dados verificados na plataforma certificadora\".\n  - \"Procurador com poderes insuficientes (apenas cláusula ad judicia) ou substabelecimento sem procuração originária\".\n\n2. Alínea \"b\": Ausência de elementos suficientes para a habilitação do pedido\n- Quando usar: Quando, mesmo com representação regular (ou pedido feito pelo próprio segurado), faltam peças-chave indispensáveis para que a análise possa sequer começar.\n- Exemplos práticos para colar no item 3 do despacho:\n  - \"Falta de documento de identificação oficial do próprio requerente (RG/CPF) que permita sua qualificação inequívoca\".\n  - \"Ausência completa de formulário obrigatório essencial ao benefício requerido (ex.: Autodeclaração do Segurado Especial ou PPP solicitado em exigência e não apresentado)\".\n  - \"Ausência de documento mínimo que comprove o fato gerador do benefício (ex.: Certidão de Óbito na pensão por morte)\".\n  - \"Ausência de Termo de Requerimento devidamente assinado quando suscitada dúvida fundada sobre a assinatura\"."
  },
  {
    "id": "loas-exig-renda-deducao-saude",
    "titulo": "Exigência LOAS/BPC: Renda Per Capita Superior ao Limite (Dedução de Gastos com Saúde)",
    "ato": "exigencia",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "renda per capita",
      "1/4 salário mínimo",
      "dedução saúde",
      "medicamentos",
      "fraldas",
      "Portaria 14/2021"
    ],
    "resumo": "Comunica que a renda ultrapassou 1/4 do salário mínimo e orienta como comprovar gastos contínuos com saúde (valores médios ou efetivos).",
    "texto": "- Comprovação de Despesas Contínuas com Saúde (Dedução na Renda Familiar do BPC):\nIdentificamos que a renda por pessoa da sua família ultrapassou o limite de 1/4 do salário mínimo. Para que possamos abater (descontar) gastos contínuos com saúde do titular do pedido, apresente os documentos abaixo:\n\n1. Categorias e Valores Médios para Desconto Mensal:\n  a) Medicamentos: R$ 56,00;\n  b) Consultas e tratamentos médicos (não fornecidos pelo SUS): R$ 110,00;\n  c) Serviços não disponibilizados pelo SUAS (Centro-Dia): R$ 40,00;\n  d) Fraldas descartáveis: R$ 120,00;\n  e) Alimentação especial (enteral/parenteral): R$ 147,00.\n\n2. Documentos Obrigatórios para Aplicar o Desconto pelo Valor Médio:\n  - Receita, laudo ou prescrição médica informando a necessidade de uso contínuo do medicamento, fralda, alimentação especial ou tratamento;\n  - Declaração da Secretaria de Saúde / posto de saúde (SUS) informando que o item ou tratamento não é fornecido gratuitamente na rede pública (ou comprovante da negativa);\n  - Declaração do órgão de Assistência Social (SUAS), caso precise comprovar a falta de vaga em Centro-Dia;\n  - Declaração assinada por você informando que concorda com o desconto pelo valor médio tabelado acima.\n\n3. Caso seus gastos mensais sejam maiores que o valor médio tabelado:\n  - Além dos documentos médicos e da negativa do SUS/SUAS, apresente os recibos ou notas fiscais de compra de cada um dos últimos 12 meses anteriores ao pedido do BPC (ou proporcional à idade, se criança menor de 1 ano), junto com uma declaração informando que não concorda com o valor médio.\n\nEm caso de dúvidas, procure o CRAS mais próximo (Fundamentação: art. 20, § 11-A, da Lei nº 8.742/1993 e Portaria Conjunta MC/MTP/INSS nº 14/2021)."
  },
  {
    "id": "loas-exig-inscricao-atualizacao-cadunico",
    "titulo": "Exigência LOAS/BPC: Inscrição ou Atualização do Cadastro Único (CadÚnico)",
    "ato": "exigencia",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "CadÚnico",
      "CRAS",
      "atualização",
      "CPF"
    ],
    "resumo": "Solicita inscrição ou atualização do CadÚnico no CRAS contendo o CPF de todos os membros do grupo familiar.",
    "texto": "- Inscrição ou Atualização do Cadastro Único (CadÚnico): Faça a inscrição ou a atualização do seu Cadastro Único (CadÚnico) no CRAS (Centro de Referência de Assistência Social) ou posto de atendimento da prefeitura mais próximo da sua casa (consulte os endereços em mapa-social.cidadania.gov.br/). Atenção: o CadÚnico deve estar atualizado e conter obrigatoriamente o número do CPF de todas as pessoas que moram na casa e fazem parte do grupo familiar (Fundamentação: art. 20, § 12, da Lei nº 8.742/1993 e Decreto nº 6.214/2007)."
  },
  {
    "id": "loas-exig-termo-compromisso-responsabilidade",
    "titulo": "Exigência LOAS/BPC: Termo de Compromisso, Termo de Responsabilidade e Documentos do Representante Legal",
    "ato": "exigencia",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "representante legal",
      "termo de responsabilidade",
      "termo de compromisso",
      "guarda",
      "curatela"
    ],
    "resumo": "Solicita documentos do titular e do representante legal, comprovante de endereço e Termos de Responsabilidade e Compromisso.",
    "texto": "- Documentação do Representante Legal (BPC/LOAS): Apresente os seguintes documentos:\n  1. Documento de identificação oficial com foto, CPF e comprovante de endereço do(a) titular do pedido;\n  2. Documento de identificação oficial com foto, CPF e comprovante de endereço do(a) Representante Legal;\n  3. Termo de Responsabilidade preenchido e assinado pelo representante (pai, mãe, tutor, curador, guardião, procurador ou administrador provisório): gov.br/inss/pt-br/centrais-de-conteudo/formularios/antigos/TermodeResponsabilidade.pdf\n  4. Termo de Compromisso preenchido e assinado (quando se tratar de tutela, curatela ou guarda): gov.br/inss/pt-br/centrais-de-conteudo/formularios/inss_termo-de-compromisso.docx\n(Fundamentação: arts. 527 e 547 da Instrução Normativa PRES/INSS nº 128/2022 e Decreto nº 6.214/2007)."
  },
  {
    "id": "loas-exig-biometria-bpc",
    "titulo": "Exigência LOAS/BPC: Regularização de Biometria (CIN, CNH ou Título Eleitoral)",
    "ato": "exigencia",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "biometria",
      "CIN",
      "CNH",
      "título eleitoral",
      "Justiça Eleitoral"
    ],
    "resumo": "Orienta a regularização da biometria do titular ou representante legal na Justiça Eleitoral, CIN ou CNH.",
    "texto": "- Regularização de Biometria para o BPC/LOAS: Para continuar a análise do seu Benefício de Prestação Continuada (BPC), é obrigatório que o(a) titular ou o(a) representante legal possua biometria (digitais e foto) registrada na Carteira de Identidade Nacional (CIN), no Título de Eleitor ou na Carteira Nacional de Habilitação (CNH). Para regularizar, escolha uma das opções abaixo:\n  1. Compareça ao Cartório Eleitoral onde você fez a biometria e solicite a atualização/individualização do seu cadastro biométrico para que ele fique disponível na base de dados do Governo Federal; ou\n  2. Faça o cadastramento da sua biometria emitindo a Carteira de Identidade Nacional (CIN) no órgão de identificação do seu estado ou na Carteira Nacional de Habilitação (CNH), anexando o comprovante pelo Meu INSS (Fundamentação: Lei nº 8.742/1993 e Decreto nº 12.561/2025)."
  },
  {
    "id": "loas-exig-empresa-ativa-comprovacao-renda",
    "titulo": "Exigência LOAS/BPC: Vínculo Societário Ativo (CNPJ / MEI - Declaração e DEFIS / DASN-SIMEI)",
    "ato": "exigencia",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "empresa ativa",
      "sócio",
      "CNPJ",
      "MEI",
      "DEFIS",
      "DASN-SIMEI",
      "pró-labore"
    ],
    "resumo": "Solicita declaração de renda/pró-labore ou declaração fiscal de inatividade (DEFIS/DASN-SIMEI) para sócio de empresa ativa no grupo familiar.",
    "texto": "- Esclarecimento sobre Participação em Empresa Ativa ([NOME DO COMPONENTE] - Empresa [NOME DA EMPRESA / CNPJ]):\nIdentificamos nos sistemas da Receita Federal que você ou um membro da sua família consta como sócio(a) ou titular de empresa ativa. Para prosseguir com a análise do BPC, apresente:\n  1. Declaração de Atividade e Renda: Declaração datada e assinada pelo(a) sócio(a) ([NOME DO COMPONENTE]) informando se trabalha na empresa [NOME DA EMPRESA / CNPJ] e qual é o valor mensal recebido (pró-labore ou retirada de lucros);\n  2. Comprovação de Empresa Sem Faturamento ou Inativa: Caso a empresa não esteja funcionando ou não gere nenhuma renda ao(à) sócio(a), apresente obrigatoriamente a declaração fiscal do último ano entregue à Receita Federal - DEFIS (para Simples Nacional), DASN-SIMEI (para MEI) ou Escrituração Contábil/ECF - comprovando a ausência de faturamento ou de retirada de pró-labore;\n  3. Atualização do CadÚnico: Se houver qualquer renda recebida da empresa, atualize primeiro o CadÚnico no CRAS para registrar essa renda corretamente (Fundamentação: art. 20 da Lei nº 8.742/1993 e Decreto nº 6.214/2007)."
  },
  {
    "id": "loas-exig-empresa-inapta-comprovacao-renda",
    "titulo": "Exigência LOAS/BPC: Vínculo Societário em Empresa INAPTA (Declaração e DEFIS / DASN-SIMEI)",
    "ato": "exigencia",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "empresa inapta",
      "sócio",
      "CNPJ",
      "DEFIS",
      "DASN-SIMEI"
    ],
    "resumo": "Esclarece que a situação de 'Inapta' na Receita Federal não comprova por si só a ausência de atividade, exigindo declaração e DEFIS/DASN-SIMEI.",
    "texto": "- Esclarecimento sobre Participação em Empresa na Situação INAPTA ([NOME DO COMPONENTE] - Empresa [NOME DA EMPRESA / CNPJ]):\nIdentificamos que consta vínculo societário na empresa [NOME DA EMPRESA / CNPJ]. Embora o CNPJ conste como \"INAPTO\" na Receita Federal (por falta de entrega de declarações fiscais), essa situação não comprova automaticamente o fechamento de fato da empresa nem a ausência de renda. Por isso, apresente:\n  1. Declaração de Atividade e Renda: Declaração datada e assinada por [NOME DO COMPONENTE] informando se exerce atividade na empresa e, em caso positivo, o valor mensal recebido;\n  2. Comprovação Documental de Inatividade ou Renda Zero: Caso a empresa esteja fechada de fato ou sem gerar renda, apresente a DEFIS, a DASN-SIMEI (no caso de MEI), o comprovante de baixa ou a escrituração fiscal do último exercício comprovando a ausência de faturamento;\n  3. Atualização do CadÚnico: Caso exista renda, atualize previamente o CadÚnico junto ao CRAS (Fundamentação: art. 20 da Lei nº 8.742/1993 e Decreto nº 6.214/2007)."
  },
  {
    "id": "loas-desp-rendas-decreto-12534-2025",
    "titulo": "Despacho LOAS/BPC: Rendas que Passaram a Integrar o Cálculo Familiar (Decreto nº 12.534/2025)",
    "ato": "despacho",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "Decreto 12.534/2025",
      "Decreto 6.214/2007",
      "Bolsa Família",
      "renda sazonal"
    ],
    "resumo": "Fundamenta o cômputo de rendas antes excluídas (incisos I, II, IV e V do § 2º do art. 4º do Decreto 6.214/2007, revogados pelo Decreto 12.534/2025).",
    "texto": "Informativo Técnico - Alteração no Cálculo da Renda Familiar (BPC):\nO Decreto nº 12.534, de 25 de junho de 2025, que alterou o Decreto nº 6.214/2007 (Regulamento do Benefício de Prestação Continuada), revogou os incisos I, II, IV e V do § 2º do art. 4º:\n- I: benefícios e auxílios assistenciais de natureza eventual e temporária (Revogado pelo Decreto nº 12.534/2025);\n- II: valores oriundos de programas sociais de transferência de renda (Revogado pelo Decreto nº 12.534/2025);\n- IV: pensão especial de natureza indenizatória e benefícios de assistência médica, conforme disposto no art. 5º (Revogado pelo Decreto nº 12.534/2025);\n- V: rendas de natureza eventual ou sazonal (Revogado pelo Decreto nº 12.534/2025).\n\nImpacto no Requerimento:\nEm razão da revogação dos referidos dispositivos, verificou-se que o(a) requerente e/ou componente do grupo familiar percebe:\n[MODALIDADE DE RENDA COMPUTADA, EX: rendas de natureza eventual ou sazonal / valores de programas de transferência de renda / pensão especial], sendo que o sistema compara e utiliza a renda de maior valor entre a média dos rendimentos recentes no CadÚnico (ponderada quando houver até três meses trabalhados), a remuneração bruta do último mês no CadÚnico e o salário de contribuição no CNIS.\nConclusão: Os valores informados ([DETALHAR COMPONENTES E VALORES: Dependente A recebe R$ X,XX]) foram incluídos no cálculo para aferição da renda familiar mensal per capita."
  },
  {
    "id": "loas-desp-nao-cumpriu-exigencia-renda",
    "titulo": "Despacho LOAS/BPC: Não Cumprimento da Exigência de Comprovação de Gastos com Saúde",
    "ato": "despacho",
    "tema": "LOAS / BPC",
    "favorito": false,
    "tags": [
      "LOAS",
      "BPC",
      "não cumpriu exigência",
      "renda",
      "gastos com saúde",
      "SUS"
    ],
    "resumo": "Registra que o requerente não apresentou a documentação médica, negativa do SUS/SUAS e declaração de concordância para dedução na renda.",
    "texto": "Verifica-se que o(a) requerente não cumpriu a exigência destinada à comprovação de despesas dedutíveis da renda bruta familiar, deixando de apresentar a documentação médica informando os tratamentos e sua natureza contínua, a declaração do órgão responsável atestando a indisponibilidade do tratamento pelo SUS (ou da assistência social quanto ao Centro-Dia/SUAS) e a declaração de concordância com a aplicação do desconto com base no valor médio, mantendo-se a renda familiar per capita superior ao limite legal (art. 20, §§ 3º e 11-A, da Lei nº 8.742/1993 e Portaria Conjunta MC/MTP/INSS nº 14/2021)."
  },
  {
    "id": "reav-exig-modelo-defesa-renda",
    "titulo": "Exigência REAVBPC: Notificação de Defesa por Superação de Renda (30 dias)",
    "ato": "exigencia",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "defesa",
      "superação de renda",
      "filho casado",
      "união estável",
      "Auxílio-Inclusão",
      "art. 21 LOAS"
    ],
    "resumo": "Notifica o beneficiário da Reavaliação do BPC por renda acima de 1/4 do salário mínimo, abrindo prazo de 30 dias para defesa, deduções de saúde ou comprovação de filho casado/união estável.",
    "texto": "- Apresentação de Defesa - Reavaliação do BPC/LOAS (Protocolo [PROTOCOLO]):\nEm revisão periódica do seu Benefício de Prestação Continuada (art. 21 da Lei nº 8.742/1993), identificamos que a renda mensal por pessoa da sua família está acima do limite de 1/4 do salário mínimo.\nVocê tem o prazo de 30 (trinta) dias para apresentar sua DEFESA pelo aplicativo/site Meu INSS ou pela Central 135 (opção \"Cumprimento de Exigência\"), enviando os documentos que comprovem que você continua atendendo às regras do benefício:\n  a) Comprovantes de gastos contínuos com saúde (medicamentos, fraldas, alimentação especial, consultas ou tratamentos médicos do idoso ou da pessoa com deficiência) que não sejam fornecidos gratuitamente pelo SUS/SUAS, acompanhados de receita médica e da negativa de fornecimento pelo órgão público (§ 4º do art. 8º da Portaria Conjunta MDS nº 3/2018);\n  b) Declaração assinada informando se você concorda com os valores médios de desconto (Portaria Conjunta MC/MTP/INSS nº 14, de 07/10/2021);\n  c) Comprovante de atualização do Cadastro Único (CadÚnico) no CRAS;\n  d) Declaração informando se recebe ou não outro benefício da Previdência Social ou de outro regime.\n\n- Alternativa - Caso o(a) filho(a) [NOME DO FILHO(A)] seja casado(a), divorciado(a) ou viva/tenha vivido em união estável:\nApresente a Certidão de Casamento ou a Escritura/Comprovantes de União Estável dele(a). Comprovado o casamento ou a união estável, o(a) filho(a) deixa de fazer parte do cálculo da renda do BPC (conforme art. 20, § 1º, da Lei nº 8.742/1993), não sendo necessário apresentar os comprovantes de despesas médicas acima.\n\n- Aviso sobre Auxílio-Inclusão: Caso o ingresso no mercado de trabalho seja da própria pessoa com deficiência titular do BPC, você pode ter direito ao Auxílio-Inclusão (Portaria Conjunta nº 13/2021), que pode ser solicitado no Meu INSS ou pelo 135.\nAtenção: O benefício será suspenso caso não seja apresentada defesa no prazo de 30 dias ou caso se confirme que a renda permanece acima do limite legal."
  },
  {
    "id": "reav-exig-beneficio-no-cadunico",
    "titulo": "Exigência REAVBPC: Atualização do CadÚnico (Consta Recebimento de Benefício para o Titular)",
    "ato": "exigencia",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "CadÚnico",
      "CRAS",
      "benefício no CadÚnico",
      "titular"
    ],
    "resumo": "Solicita atualização do CadÚnico no CRAS para corrigir informação de recebimento de outro benefício pelo titular.",
    "texto": "- Atualização do CadÚnico (Reavaliação do BPC - Protocolo [PROTOCOLO]):\nCompareça ao CRAS (Centro de Referência de Assistência Social) ou posto do CadÚnico da sua cidade no prazo de 30 (trinta) dias para atualizar o Cadastro Único da sua família (consulte o endereço mais próximo em mapa-social.cidadania.gov.br/).\nMotivo da atualização: Consta no CadÚnico a informação incorreta de recebimento de outro benefício/renda em nome do(a) próprio(a) titular, além de ser necessário conferir o CPF de todos os moradores da casa (Fundamentação: art. 21 da Lei nº 8.742/1993)."
  },
  {
    "id": "reav-exig-destravar-fila-controle",
    "titulo": "Exigência Interna REAVBPC: Destravar a Fila (Manter em Exigência sem Ação do Segurado)",
    "ato": "exigencia",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "destravar fila",
      "controle interno",
      "exigência"
    ],
    "resumo": "Informa o recebimento dos documentos na Reavaliação do BPC e pede que o segurado mantenha a tarefa em exigência para controle interno.",
    "texto": "- Aviso sobre a Reavaliação do seu BPC: Recebemos os seus documentos e daremos andamento à análise da Reavaliação do Benefício de Prestação Continuada. Você não precisa fazer mais nada neste momento. Por favor, deixe este pedido na situação \"Em exigência\" (não clique em \"Cumprir exigência\" novamente) para controle interno e prioridade na conclusão do seu atendimento."
  },
  {
    "id": "reav-desp-conclusao-pat",
    "titulo": "Despacho REAVBPC: Comunicado de Conclusão no PAT",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "conclusão",
      "PAT",
      "comunicado"
    ],
    "resumo": "Mensagem padrão informando a conclusão da Reavaliação do BPC no PAT.",
    "texto": "Prezado(a) Senhor(a),\nPelas regras vigentes da Previdência Social, a Reavaliação do Benefício de Prestação Continuada (BPC), protocolo [PROTOCOLO / NB], foi concluída. Aguarde correspondência com as informações ou acesse o portal de serviços Meu INSS (meu.inss.gov.br)."
  },
  {
    "id": "reav-desp-extra-beneficio-ja-suspenso",
    "titulo": "Despacho REAVBPC: Benefício Já se Encontra Suspenso (Manutenção da Irregularidade)",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "já suspenso",
      "superação de renda",
      "Portaria Conjunta 35/2026"
    ],
    "resumo": "Registra que o benefício já está suspenso e mantém a irregularidade apurada conforme art. 11 da Portaria Conjunta nº 35/2026.",
    "texto": "Trata-se de reavaliação por superação de renda (REAVBPC). Constata-se que o benefício já se encontra suspenso (Motivo [CÓDIGO DO MOTIVO]). Confirmada a superação de renda conforme o art. 11 da Portaria Conjunta DIRBEN/DTI/INSS nº 35/2026, mantém-se a irregularidade apurada."
  },
  {
    "id": "reav-desp-manutencao-deducao-saude",
    "titulo": "Despacho REAVBPC (Manutenção): Defesa Procedente por Dedução de Despesas com Saúde",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "manutenção",
      "defesa procedente",
      "dedução saúde",
      "17795",
      "Portaria Conjunta 35/2026"
    ],
    "resumo": "Acolhe a defesa na tarefa REAVBPC (cód. 17795) após dedução de gastos contínuos com saúde no SIBE PU, mantendo o BPC.",
    "texto": "ASSUNTO: ANÁLISE DE DEFESA - REAVALIAÇÃO BPC (Superação de Renda)\nTrata-se da tarefa REAVBPC (Cód. 17795), instaurada para apuração de indícios de superação de renda per capita, conforme o art. 11 da Portaria Conjunta DIRBEN/DTI/INSS nº 35/2026.\nDefesa apresentada tempestivamente pelo(a) beneficiário(a)/representante.\nNa análise do mérito, foram apresentados documentos comprobatórios de despesas contínuas ([ESPECIFICAR: medicamentos / fraldas / consultas / alimentação especial]) não fornecidas pelo SUS/SUAS.\nProcedeu-se à dedução dos valores na renda bruta familiar, conforme a Portaria Conjunta MC/MTP/INSS nº 14/2021 e a Portaria Conjunta MDS/INSS nº 34/2025, nos termos do Anexo I da Portaria Conjunta nº 35/2026.\nApós o recálculo no módulo do SIBE PU, a renda familiar per capita resultou inferior ou igual a 1/4 do salário mínimo (ou enquadrada nos critérios de vulnerabilidade vigentes).\nCONCLUSÃO: Diante do exposto, considero a defesa PROCEDENTE. Opino pela MANUTENÇÃO do benefício, uma vez que persistem as condições que deram origem à concessão (art. 21 da Lei nº 8.742/1993).\nArquive-se."
  },
  {
    "id": "reav-desp-manutencao-atualizacao-cadunico",
    "titulo": "Despacho REAVBPC (Manutenção): Defesa Procedente por Atualização do CadÚnico",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "manutenção",
      "defesa procedente",
      "CadÚnico",
      "17795",
      "Portaria Conjunta 35/2026"
    ],
    "resumo": "Acolhe a defesa na tarefa REAVBPC (cód. 17795) após atualização da composição familiar no CadÚnico, mantendo o BPC.",
    "texto": "ASSUNTO: ANÁLISE DE DEFESA - REAVALIAÇÃO BPC (Atualização CadÚnico)\nTrata-se da tarefa REAVBPC (Cód. 17795), instaurada para apuração de indícios de superação de renda per capita, conforme o art. 11 da Portaria Conjunta DIRBEN/DTI/INSS nº 35/2026.\nDefesa apresentada tempestivamente pelo(a) beneficiário(a)/representante.\nNa análise do mérito, foram apresentados documentos comprobatórios de atualização do CadÚnico.\nProcedeu-se à atualização dos membros do grupo familiar ([DETALHE, EX: reside sozinho(a)]).\nApós o recálculo no módulo do SIBE PU, a renda familiar per capita resultou inferior ou igual a 1/4 do salário mínimo (ou enquadrada nos critérios de vulnerabilidade vigentes).\nCONCLUSÃO: Diante do exposto, considero a defesa PROCEDENTE. Opino pela MANUTENÇÃO do benefício, uma vez que persistem as condições que deram origem à concessão (art. 21 da Lei nº 8.742/1993).\nArquive-se."
  },
  {
    "id": "reav-desp-manutencao-exclusao-membro-familia",
    "titulo": "Despacho REAVBPC (Manutenção): Exclusão de Pessoa que Não Integra o Grupo Familiar Legal",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "manutenção",
      "composição familiar",
      "filha casada",
      "art. 20 § 1º LOAS",
      "17795"
    ],
    "resumo": "Exclui do cálculo no SIBE PU pessoa que reside no domicílio mas não integra o conceito legal de grupo familiar (art. 20, § 1º, da Lei 8.742/93).",
    "texto": "ASSUNTO: ANÁLISE DE COMPOSIÇÃO FAMILIAR - MANUTENÇÃO\nTrata-se da tarefa REAVBPC (Cód. 17795), instaurada por indício de superação de renda.\nNa análise detalhada da composição familiar constante no CadÚnico, verificou-se a inclusão de pessoa(s) que, embora resida(m) no mesmo domicílio, não integra(m) o conceito legal de Grupo Familiar para fins de BPC, conforme taxativamente previsto no art. 20, § 1º, da Lei nº 8.742/1993.\nProcedeu-se, no sistema SIBE PU, à exclusão do cálculo de renda do(a) Sr(a). [NOME DA PESSOA EXCLUÍDA], CPF [CPF], por tratar-se de [GRAU DE PARENTESCO / ESTADO CIVIL: EX: FILHA CASADA / TIO / NETO / IRMÃO CASADO].\nA exclusão obedece ao regramento legal, visto que o vínculo familiar ou estado civil impede a comunicabilidade de renda para o(a) titular do BPC.\nApós o ajuste da composição familiar e acionamento da função \"Recalcular Renda\" no SIBE PU, a renda per capita familiar resultou em R$ [VALOR DA RENDA PER CAPITA, EX: 0,00], enquadrando-se no limite legal de 1/4 do salário mínimo (ou critérios de vulnerabilidade).\nCONCLUSÃO: Superado o indício de irregularidade pela correção do grupo familiar, opino pela MANUTENÇÃO do benefício.\nArquive-se."
  },
  {
    "id": "reav-desp-suspensao-defesa-improcedente",
    "titulo": "Despacho REAVBPC (Suspensão): Defesa Improcedente - Documentos/Despesas Insuficientes",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "suspensão",
      "defesa improcedente",
      "Portaria Conjunta 14/2021",
      "Portaria Conjunta 35/2026"
    ],
    "resumo": "Julga improcedente a defesa quando as despesas apresentadas não cumprem os requisitos de dedução legal e suspende o BPC.",
    "texto": "ASSUNTO: ANÁLISE DE DEFESA E CONCLUSÃO - SUSPENSÃO\nTrata-se de Reavaliação do BPC por superação de renda (REAVBPC).\nDefesa apresentada; contudo, os documentos não foram suficientes para afastar a superação de renda identificada pelo cruzamento de dados (CNIS/CadÚnico).\nAs despesas apresentadas não se enquadram nas hipóteses de dedução legal da Portaria Conjunta MC/MTP/INSS nº 14/2021 e do art. 20, § 11-A, c/c art. 21 da Lei nº 8.742/1993:\na) documentação médica que indique a necessidade de tratamento contínuo de saúde e comprovação de que não existe oferta gratuita do tratamento, ou de que houve negativa de disponibilização pelo SUS; e/ou\nb) documentação que demonstre a necessidade de utilização do Serviço de Proteção Especial (Centro-Dia) e de sua não disponibilização pelo SUAS.\nMantida a renda per capita familiar superior a 1/4 do salário mínimo, descaracterizando o requisito de miserabilidade do art. 20, § 3º, da Lei nº 8.742/1993. Não foram encontradas ações judiciais no Sapiens e/ou ACPs impeditivas para o município de residência do(a) titular.\nCONCLUSÃO: Considero a defesa IMPROCEDENTE. Benefício SUSPENSO, conforme o art. 47 do Decreto nº 6.214/2007 e procedimentos da Portaria Conjunta DIRBEN/DTI/INSS nº 35/2026.\nNotifique-se o(a) interessado(a) quanto à decisão e ao prazo de 30 (trinta) dias para interposição de recurso ao CRPS."
  },
  {
    "id": "reav-desp-suspensao-decurso-prazo",
    "titulo": "Despacho REAVBPC (Suspensão): Decurso de Prazo Sem Apresentação de Defesa",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "suspensão",
      "decurso de prazo",
      "revelia",
      "art. 21 LOAS"
    ],
    "resumo": "Determina a suspensão do BPC por decurso do prazo de 30 dias sem apresentação de defesa pelo beneficiário.",
    "texto": "ASSUNTO: DECURSO DE PRAZO - SUSPENSÃO DO BENEFÍCIO\nTrata-se de Reavaliação do BPC (REAVBPC). Notificação de defesa emitida em [DATA DA NOTIFICAÇÃO].\nDecorrido o prazo legal de 30 (trinta) dias sem manifestação do(a) interessado(a) (Decurso de Prazo), conforme verificado nos sistemas PAT e SIBE PU.\nA análise das bases governamentais confirma a manutenção da renda per capita superior ao limite legal.\nCONCLUSÃO: Diante da ausência de elementos que justifiquem a manutenção, e em cumprimento ao art. 21 da Lei nº 8.742/1993 e ao art. 47 do Decreto nº 6.214/2007, procedo à SUSPENSÃO do benefício no sistema.\nAberto prazo de 30 dias para recurso."
  },
  {
    "id": "reav-desp-suspensao-cadunico-pendente-titular",
    "titulo": "Despacho REAVBPC (Suspensão): Persistência de Erro de Renda/Benefício para o Titular no CadÚnico (V1 e V2)",
    "ato": "despacho",
    "tema": "Reavaliação BPC (REAVBPC)",
    "favorito": false,
    "tags": [
      "REAVBPC",
      "suspensão",
      "CadÚnico pendente",
      "benefício no CadÚnico",
      "SIBE PU"
    ],
    "resumo": "Suspende o benefício quando, mesmo após reemissões de exigência e atualização mensal do CadÚnico, persiste registro de renda/benefício para o titular no SIBE PU.",
    "texto": "ASSUNTO: DECURSO DE PRAZO - ATUALIZAÇÃO AINDA PENDENTE - SUSPENSÃO DO BENEFÍCIO\nTrata-se de Reavaliação do BPC (REAVBPC). Notificação de defesa emitida em [DATA INICIAL] e reiterada em [DATAS DE REITERAÇÃO].\nDecorrido o prazo para processamento da atualização do CadÚnico no sistema (atualização realizada em [DATA DA ATUALIZAÇÃO NO CADÚNICO], aguardada a virada mensal), ainda persiste a pendência de informação de renda para o(a) titular, conforme verificado no sistema SIBE PU: \"há informação de recebimento de benefício no CadÚnico para o titular\".\nObserva-se que, quanto aos demais moradores, a renda familiar per capita estaria dentro do limite legal ([MOTIVO DA COMPOSIÇÃO: pois a filha casada/divorciada ou em união estável não integra o grupo familiar / pois reside com pessoas que não fazem parte do seu grupo familiar legal]).\nCONCLUSÃO: Contudo, diante da permanência da informação impeditiva de recebimento de benefício para o(a) próprio(a) titular no CadÚnico, e em cumprimento ao art. 21 da Lei nº 8.742/1993, procedo à SUSPENSÃO do benefício no sistema.\nAberto prazo de 30 dias para recurso."
  },
  {
    "id": "man-exig-cadastro-procurador-rl-ol710",
    "titulo": "Exigência Manutenção (OL 710): Cadastro de Procurador ou Atualização de Representante Legal",
    "ato": "exigencia",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "OL 710",
      "manutenção",
      "procurador",
      "representante legal",
      "atestado médico",
      "locomoção",
      "Portaria 992",
      "Portaria 993"
    ],
    "resumo": "Exigência completa da Manutenção (OL 710) para inclusão/renovação de procurador para recebimento (alíneas a-e) ou atualização de RL.",
    "texto": "- Caso o seu pedido seja para Cadastrar ou Renovar Procurador para Recebimento do Benefício, apresente:\n  1. Documento de identificação oficial com foto e CPF do(a) beneficiário(a), além de comprovante ou declaração de endereço com CEP;\n  2. Documento de identificação oficial com foto e CPF do(a) procurador(a);\n  3. Procuração assinada pelas partes com poderes específicos para atuar junto ao INSS (realizar prova de vida ou receber benefício). Se a procuração for particular, é necessário reconhecimento de firma (caso não haja conferência presencial). Se o(a) beneficiário(a) ou o(a) procurador(a) não for alfabetizado(a), a procuração deve ser pública feita em cartório (exceto quando o procurador for advogado, para atos gerais). Se outorgada por curador ou tutor a terceiros, a procuração deve ser obrigatoriamente pública;\n  4. Termo de Responsabilidade preenchido e assinado pelo(a) procurador(a) (mesmo que a procuração seja pública). Modelos disponíveis em: gov.br/inss/pt-br/saiba-mais/seus-direitos-e-deveres/procuracao/procuracao/\n  5. Documento que comprove o motivo do cadastro do procurador (emitido há no máximo 30 dias para os itens \"a\", \"b\" e \"c\"):\n     a) Impossibilidade de locomoção ou moléstia contagiosa: Atestado médico emitido há menos de 30 dias informando de forma clara e direta que o(a) beneficiário(a) está impossibilitado(a) de se locomover (ou possui moléstia contagiosa) e que está lúcido(a), com data, carimbo e assinatura do médico (não são aceitos exames, prontuários ou laudos sem conclusão direta);\n     b) Privação de liberdade: Atestado de recolhimento à prisão emitido pela autoridade competente (há menos de 30 dias);\n     c) Internação em casa de recuperação de dependentes químicos: Declaração de internação emitida há menos de 30 dias;\n     d) Viagem: Declaração escrita de viagem informando se é dentro do Brasil ou para o exterior e o período de ausência;\n     e) Residência no exterior: Atestado de vida (válido por 90 dias) legalizado pelo Consulado Brasileiro ou apostilado (Convenção da Haia).\n\n- Caso o seu pedido seja para Atualização de Representante Legal (Tutor, Curador ou Guardião), apresente:\n  1. Documento de identificação oficial com foto e CPF do(a) beneficiário(a) e do(a) Representante Legal;\n  2. Documento judicial que comprove a representação legal (Termo de Curatela, Tutela ou Guarda);\n  3. Termo de Responsabilidade preenchido e assinado pelo(a) Representante Legal.\n(Fundamentação: art. 31, § 1º, e art. 19 da Portaria DIRBEN/INSS nº 993/2022; art. 43, § 2º, da Portaria DIRBEN/INSS nº 992/2022; art. 566 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "man-desp-maior-16-anos-exclusao-rl",
    "titulo": "Despacho Manutenção: Maior de 16 Anos Receber Pagamento Diretamente (Exclusão de RL)",
    "ato": "despacho",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "OL 710",
      "maior de 16 anos",
      "exclusão de RL",
      "representante legal",
      "HISATU",
      "HISOCR",
      "art. 145 Portaria 992"
    ],
    "resumo": "Registra a exclusão do Representante Legal para titular maior de 16 anos em benefício não judicial.",
    "texto": "Nada de relevante encontrado no HISATU e no HISOCR. Benefício de concessão não judicial. Excluído o Representante Legal (RL) conforme o § 1º do artigo 145 da Portaria DIRBEN/INSS nº 992, de 28 de março de 2022 (c/c o art. 529 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "man-desp-pedido-inclusao-rural-apenas-beneficio",
    "titulo": "Despacho Manutenção: Pedido Avulso de Inclusão de Período Rural (Analisado Apenas em Benefício)",
    "ato": "despacho",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "OL 710",
      "atualização CNIS",
      "período rural",
      "pedido de benefício",
      "art. 12",
      "art. 115"
    ],
    "resumo": "Esclarece que o serviço de atualização do CNIS destina-se a vínculos urbanos e que o período rural é analisado no pedido de benefício.",
    "texto": "Informamos que o serviço de atualização cadastral permite a inclusão, alteração e exclusão de vínculos e remunerações constantes no Cadastro Nacional de Informações Sociais (CNIS) referentes a segurados empregados, trabalhadores avulsos, empregados domésticos e contribuintes individuais. No caso de atividades rurais (segurado especial), o reconhecimento e a ratificação dependem de instrução específica verificada durante a análise de um requerimento de benefício previdenciário, mediante a apresentação da autodeclaração e dos documentos comprobatórios pertinentes, nos termos dos arts. 12 e 115 da Instrução Normativa PRES/INSS nº 128/2022. Portanto, o reconhecimento de tempo de serviço rural será analisado no contexto de pedido de benefício."
  },
  {
    "id": "man-desp-indeferimento-procurador-sem-atestado",
    "titulo": "Despacho Manutenção: Indeferimento de Cadastro de Procurador (Não Cumpriu Exigência de Atestado)",
    "ato": "despacho",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "OL 710",
      "procurador",
      "indeferimento",
      "atestado médico",
      "impossibilidade de locomoção",
      "art. 545"
    ],
    "resumo": "Indefere o cadastramento de procurador no benefício por não cumprimento da exigência referente ao atestado de impossibilidade de locomoção.",
    "texto": "Não foi possível cadastrar o(a) procurador(a) no(s) benefício(s), pois não houve o cumprimento da exigência referente à apresentação de atestado médico válido ou documento comprobatório da impossibilidade de locomoção do(a) titular, nos termos dos arts. 545 e 574 da Instrução Normativa PRES/INSS nº 128/2022 e do art. 31 da Portaria DIRBEN/INSS nº 993/2022."
  },
  {
    "id": "man-interno-cp-pab-pendente-autorizacao",
    "titulo": "Interno Manutenção: Complemento Positivo (CP) ou PAB Pendente de Autorização (CEAB 19/2024)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "CP",
      "complemento positivo",
      "PAB",
      "autorização",
      "liberação",
      "Portaria Conjunta 90/2023",
      "CEAB 19/2024"
    ],
    "resumo": "Encaminha subtarefa iniciada por servidor para conferência e liberação de CP ou PAB pendente de autorização.",
    "texto": "NB: [NB]\nBeneficiário(a): [NOME DO BENEFICIÁRIO]\n\nEsta tarefa foi iniciada por um servidor do INSS após a conclusão do serviço \"[NOME DA TAREFA DE ORIGEM]\", sob o protocolo nº [PROTOCOLO DE ORIGEM]. Durante esse processo, foram realizadas as seguintes alterações nos parâmetros da concessão: [DESCREVER ALTERAÇÕES REALIZADAS].\nApós análise, constatou-se a geração de pagamento referente ao período de [DATA INICIAL] a [DATA FINAL], no valor de R$ [VALOR DO CRÉDITO], desde a DIP da revisão ([DIP DA REVISÃO]), que se encontra aguardando liberação.\nEncaminhamos para conferência e liberação do valor.\nDespacho em consonância com a Portaria Conjunta DIRBEN/DTI/INSS nº 90/2023 e o Comunicado CEAB nº 19/2024."
  },
  {
    "id": "man-interno-credito-nao-gerado-manual",
    "titulo": "Interno Manutenção: Crédito Não Gerado Automaticamente - Emissão Manual (CEAB 19/2024)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "crédito manual",
      "CP",
      "pagamento não gerado",
      "Portaria Conjunta 90/2023",
      "CEAB 19/2024"
    ],
    "resumo": "Encaminha subtarefa para cálculo e emissão manual de crédito devido desde a DIP da revisão quando não há geração automática.",
    "texto": "NB: [NB]\nBeneficiário(a): [NOME DO BENEFICIÁRIO]\n\nEsta tarefa foi iniciada por um servidor do INSS após a conclusão do serviço \"[NOME DA TAREFA DE ORIGEM]\", sob o protocolo nº [PROTOCOLO DE ORIGEM]. Durante esse processo, foram realizadas as seguintes alterações nos parâmetros da concessão: [DESCREVER ALTERAÇÕES REALIZADAS].\nApós verificação, constatou-se que não houve a geração automática do crédito referente ao período de [DATA INICIAL] a [DATA FINAL]. No entanto, o pagamento é devido desde a DIP da revisão ([DIP DA REVISÃO]) e não há concomitância impeditiva, devendo ser emitido manualmente.\nEncaminhamos para cálculo, emissão e acompanhamento da liberação do valor.\nDespacho em consonância com a Portaria Conjunta DIRBEN/DTI/INSS nº 90/2023 e o Comunicado CEAB nº 19/2024."
  },
  {
    "id": "man-interno-valores-nao-recebidos-ate-obito",
    "titulo": "Interno Manutenção: Valores Não Recebidos Até a Data do Óbito (Resíduo - Pensão por Morte)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "resíduo",
      "óbito",
      "pensão por morte",
      "valores não recebidos",
      "Portaria Conjunta 90/2023",
      "CEAB 19/2024",
      "art. 628"
    ],
    "resumo": "Encaminha tarefa iniciada após concessão de Pensão por Morte para liberação de resíduo não recebido em vida pelo instituidor.",
    "texto": "Esta tarefa foi iniciada por um servidor do INSS após a conclusão do serviço \"Pensão por Morte\", com o protocolo nº [PROTOCOLO DA PENSÃO].\nApós análise, constatou-se o direito ao pagamento de valores não recebidos até o óbito do(a) beneficiário(a) instituidor(a) (NB [NB DO INSTITUIDOR]).\nEncaminhamos para conferência, recálculo e liberação do valor.\nDespacho em consonância com a Portaria Conjunta DIRBEN/DTI/INSS nº 90/2023, o Comunicado CEAB nº 19/2024 e o art. 628 da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "man-desp-mob-carta-defesa-erro-concessao",
    "titulo": "Despacho MOB: Carta de Defesa (Ampla Defesa e Contraditório - Erro Material na Concessão / Renda)",
    "ato": "despacho",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "MOB",
      "carta de defesa",
      "ampla defesa",
      "contraditório",
      "erro material",
      "art. 179 RPS",
      "art. 609"
    ],
    "resumo": "Notifica o beneficiário para apresentar defesa em 30 dias em face de concessão indevida por erro sistêmico (renda per capita acima do limite).",
    "texto": "Referente ao processo [PROTOCOLO], em observância ao § 1º do artigo 179 do Regulamento da Previdência Social (Decreto nº 3.048/1999) e ao art. 609 da Instrução Normativa PRES/INSS nº 128/2022, devido a erro material na concessão, o INSS notifica o(a) beneficiário(a), seu representante legal ou seu procurador para apresentar defesa, provas ou os documentos de que dispuser, no prazo de 30 (trinta) dias:\nEsclarecemos que o benefício foi concedido equivocadamente pelo sistema, quando deveria ter sido indeferido por renda familiar per capita superior ao limite legal permitido, uma vez que os documentos apresentados no cumprimento de exigências não supriram os requisitos de dedução. Diante desse erro operacional que resultou na concessão indevida do benefício, faculta-se a apresentação de carta de defesa no prazo de 30 dias, caso entenda pela regularidade da concessão."
  },
  {
    "id": "man-desp-mob-carta-defesa-reducao-rmi",
    "titulo": "Despacho MOB: Carta de Defesa (Ampla Defesa e Contraditório - Redução da RMI/MR Após Revisão)",
    "ato": "despacho",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "MOB",
      "carta de defesa",
      "redução de RMI",
      "revisão",
      "reclamatória trabalhista",
      "art. 179 RPS",
      "art. 609"
    ],
    "resumo": "Notifica o beneficiário para apresentar defesa em 30 dias quando a revisão solicitada resulta em diminuição da RMI e da MR.",
    "texto": "Referente ao processo [PROTOCOLO], benefício [ESPÉCIE / NB], em respeito ao § 1º do artigo 179 do Regulamento da Previdência Social (Decreto nº 3.048/1999) e ao art. 609 da Instrução Normativa PRES/INSS nº 128/2022, devido à diminuição do valor da Renda Mensal Inicial (RMI), o INSS notifica o(a) beneficiário(a), seu representante legal ou seu procurador para apresentar defesa, provas ou os documentos de que dispuser, no prazo de 30 (trinta) dias.\nO benefício foi revisto para atender ao solicitado pelo(a) segurado(a) ([MOTIVO DA REVISÃO, EX: inclusão dos valores da Reclamatória Trabalhista]), resultando na redução da RMI de R$ [RMI ANTERIOR] para R$ [NOVA RMI]; consequentemente, a Renda Mensal Atual (MR) também passou de R$ [MR ANTERIOR] para R$ [NOVA MR]. Solicitamos que apresente carta de defesa no prazo legal, caso entenda que os valores apurados estão incorretos."
  },
  {
    "id": "man-desp-nao-cobranca-pos-obito-pensao-1255",
    "titulo": "Despacho Pensão / MOB: Dispensa de Consignação Pós-Óbito na Pensão (Portaria 1.255/2025 - Atribuição do MOB)",
    "ato": "despacho",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "pós-óbito",
      "pensão por morte",
      "MOB",
      "campo 13 Prisma",
      "Portaria 1.255/2025",
      "IN 147/2023"
    ],
    "resumo": "Deixa de incluir consignação de valores recebidos pós-óbito no campo 13 do Prisma, por ser competência exclusiva do MOB (Portaria 1.255/2025).",
    "texto": "Deixo de realizar a apuração e a consignação de valores eventualmente recebidos após o óbito do(a) instituidor(a) neste processo. Tal medida atende à diretriz estabelecida pela Portaria DIRBEN/INSS nº 1.255, de 16 de janeiro de 2025, a qual determina que a verificação e a cobrança dos referidos valores devem ser realizadas por meio de procedimento específico a cargo do Monitoramento Operacional de Benefícios (MOB), disciplinado pela Instrução Normativa PRES/INSS nº 147, de 15 de maio de 2023, que centraliza a responsabilidade pela recuperação de créditos do espólio. Desta forma, cumpre-se a orientação vigente, concluindo a presente análise sem a inclusão de valores de consignação no campo 13 do Prisma."
  },
  {
    "id": "man-interno-atuexc-b31-com-b80-b41",
    "titulo": "Interno (ATUEXC): Alteração de DCB do B31 para Véspera da DIB do Novo Benefício (Portaria Conjunta 90/2023)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "ATUEXC",
      "B31",
      "DCB",
      "concomitância",
      "consignação",
      "Portaria 1.123/2023",
      "Portaria Conjunta 90/2023"
    ],
    "resumo": "Solicita na fila ATUEXC a alteração da DCB do B31 para o dia anterior à DIB do novo benefício (B80/B41/B42) com consignação.",
    "texto": "[Orientação: Abrir Tarefa na Área Meio - \"Procedimentos de Atualização de Exceção - ATUEXC\"]\n\nEm conformidade com o item 12.3 do Anexo II da Portaria DIRBEN/INSS nº 1.123, de 24 de março de 2023, alterada pela Portaria Conjunta DIRBEN/DTI/INSS nº 90, de 1º de dezembro de 2023, e em consonância com o Comunicado COREC-SRSUL de 29/12/2023, solicita-se a alteração da Data de Cessação do Benefício (DCB) do benefício [NB DO BENEFÍCIO A CESSAR, EX: B31/XXXXXXXXXX] para o dia imediatamente anterior à Data de Início do Benefício (DIB) do [ESPÉCIE E NB DO NOVO BENEFÍCIO] ([DIB DO NOVO BENEFÍCIO]). Portanto, requer-se que a DCB do benefício anterior seja alterada para [NOVA DCB - VÉSPERA DA DIB], visando sanar a inconsistência de concomitância.\nInforma-se que a consignação será realizada e o cálculo, com as devidas correções monetárias, será anexado à tarefa principal nº [PROTOCOLO DA TAREFA PRINCIPAL]."
  },
  {
    "id": "man-interno-libdup-v1-consignacao",
    "titulo": "Interno (LIBDUP - V1): Liberação de Crítica após Consignação de Benefício Incapacitante",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "LIBDUP",
      "Portaria Conjunta 32/2025",
      "concomitância",
      "consignação",
      "incapacidade"
    ],
    "resumo": "Solicita LIBDUP quando a DIB do novo benefício retroage a período em que houve recebimento de auxílio por incapacidade, já consignado.",
    "texto": "Em conformidade com o § 1º do artigo 7º da Portaria Conjunta DIRBEN/DTI/INSS nº 32, de 19/12/2025, solicita-se o procedimento de LIBDUP.\nEsclarece-se que o(a) interessado(a) recebeu o benefício incapacitante sob nº [NB INCAPACITANTE] no período de [PERÍODO RECEBIDO], ao passo que o benefício em concessão ([ESPÉCIE / NB EM CONCESSÃO]) possui início (DIB) em [DIB DO NOVO BENEFÍCIO]. Dessa forma, efetuou-se a consignação dos valores recebidos no período concomitante, no importe de R$ [VALOR CONSIGNADO].\nDiante do exposto, solicita-se a liberação da crítica de incompatibilidade para propiciar a concessão do benefício.\nTarefa PAT: [PROTOCOLO PAT]."
  },
  {
    "id": "man-interno-libdup-v2-b21-com-b94",
    "titulo": "Interno (LIBDUP - V2): Liberação de Crítica - Pensão por Morte (B21) Acumulada com Auxílio-Acidente (B94)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "LIBDUP",
      "B21",
      "B94",
      "auxílio-acidente",
      "pensão por morte",
      "acumulação",
      "art. 648",
      "Portaria Conjunta 32/2025"
    ],
    "resumo": "Solicita LIBDUP para afastar Crítica-2 (Manutenção Incompatível) entre Pensão por Morte (B21) e Auxílio-Acidente (B94).",
    "texto": "Em conformidade com o § 1º do artigo 7º da Portaria Conjunta DIRBEN/DTI/INSS nº 32, de 19/12/2025, solicita-se o procedimento de LIBDUP.\nEsclarece-se que o sistema barrou a concessão da Pensão por Morte (B21), acusando acumulação indevida com Auxílio-Acidente (B94) - Crítica-2 (Manutenção Incompatível). Porém, tanto o art. 10 do Livro V (Portaria DIRBEN/INSS nº 994/2022) quanto o art. 648 da Instrução Normativa PRES/INSS nº 128/2022 autorizam expressamente essa cumulação.\nDiante do exposto, solicita-se a liberação da crítica de incompatibilidade para propiciar a concessão do benefício.\nBenefício em concessão: B21/[NB DA PENSÃO] com B94/[NB DO AUXÍLIO-ACIDENTE].\nTarefa PAT: [PROTOCOLO PAT]."
  },
  {
    "id": "man-interno-libdup-v3-b80-com-b94",
    "titulo": "Interno (LIBDUP - V3): Liberação de Crítica - Salário-Maternidade (B80) Acumulado com Auxílio-Acidente (B94)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "LIBDUP",
      "B80",
      "B94",
      "auxílio-acidente",
      "salário-maternidade",
      "acumulação",
      "art. 639",
      "Portaria Conjunta 32/2025"
    ],
    "resumo": "Solicita LIBDUP para afastar Crítica-2 entre Salário-Maternidade (B80) e Auxílio-Acidente (B94), cujo caráter é indenizatório.",
    "texto": "Em conformidade com o § 1º do artigo 7º da Portaria Conjunta DIRBEN/DTI/INSS nº 32, de 19/12/2025, solicita-se o procedimento de LIBDUP.\nEsclarece-se que o sistema barrou a concessão do Salário-Maternidade (B80), acusando acumulação indevida com Auxílio-Acidente (B94) - Crítica-2 (Manutenção Incompatível).\nOcorre que o art. 639, inciso IV, da Instrução Normativa PRES/INSS nº 128/2022 e o art. 1º, inciso IV, do Livro V (Portaria DIRBEN/INSS nº 994/2022) restringem a inacumulabilidade do Salário-Maternidade apenas aos benefícios de Auxílio por Incapacidade Temporária e Aposentadoria por Incapacidade Permanente. Por ter caráter estritamente indenizatório (art. 352 da IN PRES/INSS nº 128/2022), o Auxílio-Acidente não impede a concessão do Salário-Maternidade.\nDiante do exposto, solicita-se a liberação da crítica de incompatibilidade para propiciar o regular processamento e concessão do benefício.\nBenefício em concessão: B80/[NB DO SALÁRIO-MATERNIDADE] com B94/[NB DO AUXÍLIO-ACIDENTE].\nTarefa PAT: [PROTOCOLO PAT]."
  },
  {
    "id": "man-interno-libdup-v4-ctc-orgao-lotacao",
    "titulo": "Interno (LIBDUP - V4): Liberação de Crítica - Períodos Certificados em CTC (Declaração do Órgão de Lotação)",
    "ato": "interno",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "LIBDUP",
      "CTC",
      "órgão de lotação",
      "períodos certificados",
      "Portaria Conjunta 32/2025"
    ],
    "resumo": "Solicita LIBDUP informando que foram marcados como certificados apenas os períodos efetivamente utilizados no órgão de lotação.",
    "texto": "Em conformidade com o § 1º do artigo 7º da Portaria Conjunta DIRBEN/DTI/INSS nº 32, de 19/12/2025, solicita-se o procedimento de LIBDUP.\nNB em concessão: [ESPÉCIE E NB EM CONCESSÃO]\nCTC nº: [NÚMERO DA CTC]\nTarefa PAT: [PROTOCOLO PAT]\nEsclarece-se que foram marcados como certificados os períodos efetivamente utilizados no Órgão de Lotação, conforme declaração oficial constante às fls. [NÚMERO DAS FOLHAS]."
  },
  {
    "id": "man-interno-admissibilidade-irregularidade",
    "titulo": "Interno MOB: Abertura de Tarefa de Admissibilidade de Irregularidade (OL 20.150.516)",
    "ato": "roteiro",
    "tema": "Manutenção (OL 710) e MOB",
    "favorito": false,
    "tags": [
      "admissibilidade de irregularidade",
      "MOB",
      "20.150.516",
      "art. 607"
    ],
    "resumo": "Lembrete operacional para abertura de tarefa de Admissibilidade de Irregularidade e transferência para a OL 20.150.516.",
    "texto": "Procedimento Operacional - Admissibilidade de Irregularidade:\nNesses casos, abrir uma tarefa de \"Admissibilidade de Irregularidade\" no GET e transferir para a OL [OL DE DESTINO: 20.150.516], nos termos dos arts. 607 e seguintes da Instrução Normativa PRES/INSS nº 128/2022."
  },
  {
    "id": "rec-roteiro-implantacao-recurso",
    "titulo": "Roteiro / Checklist: Passo a Passo de Recurso com Implantação (PAT / e-Sisrec / Prisma)",
    "ato": "roteiro",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "roteiro",
      "checklist",
      "recurso",
      "e-Sisrec",
      "acórdão",
      "JR",
      "CRPS",
      "implantação"
    ],
    "resumo": "Checklist operacional completo em 12 passos para análise e implantação de Acórdão recursal no PAT, Prisma e e-Sisrec.",
    "texto": "CHECKLIST - RECURSO COM IMPLANTAÇÃO (PAT / E-SISREC / PRISMA):\n1. Verificar se a tarefa está integrada;\n2. Pesquisar pelo CPF no PAT e no e-Sisrec para conferir se há apenas um recurso ativo;\n3. Verificar se constam telefone e e-mail atualizados na tarefa principal de recurso;\n4. Consultar no e-Sisrec / Sapiens se há ação judicial com o mesmo objeto;\n5. Abrir o Acórdão no e-Sisrec, analisar os pontos providos e verificar os vínculos no CNIS;\n6. Implantar o benefício no Prisma conforme determinado no Acórdão;\n7. Salvar o PDF do Prisma como \"RESUMO DE BENEFÍCIO\".\n8. Se houver atrasados/créditos pendentes, salvar o Acórdão junto para a subtarefa \"Solicitar Emissão de Pagamento não Recebido\".\n9. Na subtarefa, emitir a exigência/comunicação de \"Comunicação de Decisão da JR\" preenchida e atualizar os campos adicionais da subtarefa;\n10. Na tarefa do recurso, imprimir a ciência salvando como \"INTIMACAO\".\n11. Elaborar o \"Despacho Conclusivo - Evento Arquivar\" (com ou sem novo elemento);\n12. Acessar o e-Sisrec e lançar os 4 eventos finais de cumprimento e arquivamento."
  },
  {
    "id": "rec-exig-comunicacao-decisao-jr",
    "titulo": "Recurso (Comunicação/Exigência): Comunicação de Decisão da Junta de Recursos (JR - fls. 251 do Guia)",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "recurso",
      "comunicação",
      "JR",
      "Junta de Recursos",
      "acórdão",
      "CRPS",
      "30 dias"
    ],
    "resumo": "Comunica ao segurado o resultado do julgamento pela Junta de Recursos (JR), como acessar o inteiro teor e o prazo de 30 dias para a CAJ/CRPS.",
    "texto": "Ao(À) Senhor(a): [NOME DO SEGURADO], CPF: [CPF DO SEGURADO]\nProtocolo: [PROTOCOLO] - NB: [NB]\nAssunto: Comunicação de Decisão da Junta de Recursos (JR)\n\nPrezado(a) Senhor(a),\nComunicamos que a [NÚMERO E NOME DA JUNTA DE RECURSOS - JR], por meio do Acórdão nº [NÚMERO DO ACÓRDÃO], de [DATA DO ACÓRDÃO], [RESULTADO: deu provimento / deu provimento parcial / negou provimento] ao recurso interposto àquele Órgão.\nPara visualizar a decisão completa, acesse o site consultaprocessos.inss.gov.br utilizando o seu CPF e a sua senha Gov.br (caso não possua senha, você pode criá-la no site ou aplicativo Meu INSS). Para visualizar o processo, o usuário deve estar cadastrado no sistema de recursos como parte interessada (titular, procurador/advogado ou representante legal).\nInformamos que você poderá apresentar recurso dessa decisão às Câmaras de Julgamento do CRPS no prazo de 30 (trinta) dias, contados da data do recebimento desta comunicação. O INSS também poderá recorrer e, nesse caso, você será comunicado(a) para apresentar suas contrarrazões (defesa) (Fundamentação: art. 305 do Decreto nº 3.048/1999 e art. 578 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "rec-desp-conclusivo-evento-arquivar",
    "titulo": "Recurso (Despacho): Despacho Conclusivo - Evento Arquivar (Com ou Sem Novo Elemento - fls. 247/254)",
    "ato": "despacho",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "recurso",
      "despacho conclusivo",
      "arquivar",
      "CRPS",
      "RICRPS",
      "novo elemento",
      "art. 308 RPS"
    ],
    "resumo": "Despacho conclusivo de cumprimento integral de Acórdão do CRPS (com opção de fixação da DER/DIB com ou sem novo elemento e criação de demanda de pagamento).",
    "texto": "Trata-se de decisão recursal definitiva, em favor do(a) interessado(a), proferida pela [ÓRGÃO JULGADOR: XXª Junta de Recursos / XXª Câmara de Julgamento], por meio do Acórdão nº [NÚMERO DO ACÓRDÃO].\nEm síntese, a unidade julgadora assim decidiu: [SÍNTESE DO QUE FOI RECONHECIDO NO ACÓRDÃO].\nApós análise da decisão e da documentação anexada aos autos processuais, não foi identificada nenhuma das hipóteses de cabimento de recurso especial ou incidente processual, previstas nos artigos 33, 75 e 76 do Regimento Interno do Conselho de Recursos da Previdência Social (RICRPS), aprovado pela Portaria MTP nº 4.061/2022.\nAlém disso, não foi localizada ação judicial com o mesmo objeto do presente recurso administrativo.\nPor conseguinte, foi dado integral cumprimento à decisão do CRPS, nos exatos termos do acórdão epigrafado, em observância ao disposto no § 2º do art. 308 do Regulamento da Previdência Social (RPS), aprovado pelo Decreto nº 3.048/1999.\n\n[Escolher conforme o caso - COM ou SEM novo elemento:]\n- (Sem novo elemento): No presente caso, foi mantida a DER original do benefício em [DER ORIGINAL], uma vez que a decisão recursal não foi fundamentada em novo elemento, considerando o previsto nos artigos 21 e 22 do Livro VII das Normas Procedimentais em Matéria de Benefícios, aprovado pela Portaria DIRBEN/INSS nº 996/2022.\n- (Com novo elemento): No presente caso, a DER/DIB foi fixada em [DATA DO NOVO ELEMENTO], data da apresentação de novo elemento que ensejou o reconhecimento do direito alegado, observadas as disposições dos §§ 6º e 7º do artigo 176 e do § 4º do artigo 347, todos do RPS (Decreto nº 3.048/1999).\n\n[Se criada subtarefa para pagamento de atrasados:]\nPor fim, considerando que há créditos pendentes de liberação (ou a serem emitidos manualmente), foi criada demanda específica para as tratativas necessárias, sob o Protocolo [PROTOCOLO DO PAGAMENTO] (Solicitar Emissão de Pagamento não Recebido), a qual poderá ser acompanhada pelo Meu INSS.\nIsso posto, concluída a tramitação recursal, arquivamos o presente."
  },
  {
    "id": "rec-interno-solicitar-emissao-pagamento-acordao",
    "titulo": "Interno Recurso: Solicitar Emissão de Pagamento Não Recebido (Cumprimento de Acórdão)",
    "ato": "interno",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "recurso",
      "pagamento não recebido",
      "acórdão",
      "e-Sisrec",
      "créditos concessórios"
    ],
    "resumo": "Texto de abertura para subtarefa de Solicitar Emissão de Pagamento Não Recebido após implantação de benefício recursal.",
    "texto": "Trata-se de demanda criada para liberação dos créditos concessórios [PERÍODO DOS CRÉDITOS: a partir de XX/XX/XXXX / do período de XX/XX/XXXX a XX/XX/XXXX], referentes ao benefício nº [ESPÉCIE / NB], implantado em cumprimento à decisão recursal proferida no bojo do processo nº [NÚMERO DO PROCESSO / PROTOCOLO].\nObs.: O respectivo processo eletrônico encontra-se disponível para consulta no sistema e-Sisrec."
  },
  {
    "id": "rev-desp-revisao-vida-toda",
    "titulo": "Despacho Revisão: Revisão da Vida Toda (Sobrestamento e Orientação sobre Risco de Redução)",
    "ato": "despacho",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "revisão da vida toda",
      "STF",
      "sobrestamento",
      "art. 583"
    ],
    "resumo": "Esclarece a situação processual da Revisão da Vida Toda no STF e orienta sobre o serviço específico e o risco de redução da renda.",
    "texto": "A chamada \"Revisão da Vida Toda\" encontra-se pendente de definição final pelo Supremo Tribunal Federal (STF), motivo pelo qual eventual requerimento específico aguarda diretriz definitiva para internalização administrativa. Além disso, verifica-se que [SITUAÇÃO DO PEDIDO: na Data de Entrada do Requerimento (DER) sequer havia julgamento pelo STF / foi protocolado um requerimento administrativo de revisão comum].\nRessalta-se que, caso o(a) segurado(a) deseje requerer especificamente essa modalidade, existe opção própria no aplicativo e site Meu INSS, hipótese em que o pedido permanece sobrestado até a decisão final. Recomenda-se, contudo, cautela e análise criteriosa dos salários anteriores a julho de 1994 antes de formalizar o pedido, a fim de evitar eventual redução no valor do benefício atual."
  },
  {
    "id": "rev-desp-conclusao-revisao-alteracao-rmi-cp",
    "titulo": "Despacho Revisão: Conclusão de Revisão com Alteração de RMI/MR e Geração de Complemento Positivo (CP)",
    "ato": "despacho",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "revisão",
      "conclusão",
      "RMI",
      "MR",
      "complemento positivo",
      "CP",
      "art. 583"
    ],
    "resumo": "Apresenta o quadro comparativo de RMI/MR antes e depois da revisão e informa o valor do Complemento Positivo (CP) gerado.",
    "texto": "Revisão concluída (art. 583 da Instrução Normativa PRES/INSS nº 128/2022).\nResumo da Alteração de Valores (RMI / MR):\n- RMI Anterior: R$ [RMI ANTERIOR] - MR Anterior: R$ [MR ANTERIOR]\n- Competência (DIP da Revisão): [COMPETÊNCIA DIP]\n- Nova RMI: R$ [NOVA RMI] - Nova MR: R$ [NOVA MR]\n\nFoi gerado um Complemento Positivo (CP) no valor de R$ [VALOR DO CP]. Caso não seja verificado o recebimento automático nos próximos pagamentos, o(a) interessado(a) poderá solicitar o serviço \"Solicitar Emissão de Pagamento não Recebido\" pelo Meu INSS (meu.inss.gov.br) ou pela Central 135 (de segunda a sábado, das 7h às 22h)."
  },
  {
    "id": "rev-exig-justificativa-pedido-revisao",
    "titulo": "Exigência Revisão: Apresentação de Motivos e Documentos para o Pedido de Revisão",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "revisão",
      "exigência",
      "justificativa",
      "formulário",
      "art. 583"
    ],
    "resumo": "Solicita que o segurado detalhe os motivos do pedido de revisão e anexe a documentação comprobatória.",
    "texto": "- Justificativa para o Pedido de Revisão: Apresente uma carta ou o formulário oficial de revisão explicando de forma clara o que você deseja revisar no seu benefício (quais vínculos, salários ou períodos considera que faltaram no cálculo) e anexe os documentos que comprovam o seu pedido (Fundamentação: art. 583 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ctc-desp-indeferimento-revisao-ctc-sem-exigencia",
    "titulo": "Despacho CTC: Indeferimento de Revisão de CTC por Não Cumprimento de Exigência (Mais de 35 Dias)",
    "ato": "despacho",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "CTC",
      "revisão de CTC",
      "indeferimento",
      "não cumpriu exigência",
      "35 dias",
      "art. 574"
    ],
    "resumo": "Indefere pedido de revisão de Certidão de Tempo de Contribuição (CTC) após decurso de mais de 35 dias sem cumprimento da exigência.",
    "texto": "Trata-se de requerimento de Revisão de Certidão de Tempo de Contribuição (CTC) indeferido por não cumprimento de exigência, nos termos do art. 566, § 4º, e do art. 574 da Instrução Normativa PRES/INSS nº 128/2022.\nPelas regras vigentes da Previdência Social, o requerimento solicitado foi indeferido sob o protocolo acima descrito em razão da ausência de apresentação dos documentos solicitados. Importa destacar que o(a) interessado(a) declarou estar ciente acerca da necessidade de acompanhar o andamento de sua solicitação pelos canais remotos da Previdência Social (Meu INSS, Central 135 ou e-mail), conforme requerimento originário. Não obstante tenha sido devidamente notificado(a) por e-mail e SMS, não houve atendimento ao solicitado nem qualquer manifestação até a presente data, já transcorridos mais de 35 (trinta e cinco) dias desde o encaminhamento da exigência.\nSem mais diligências. Arquive-se."
  },
  {
    "id": "ctc-exig-completa-emissao-ctc",
    "titulo": "Exigência CTC: Documentação Completa para Emissão de Certidão de Tempo de Contribuição (CTC)",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "CTC",
      "exigência completa",
      "órgão de lotação",
      "DTC",
      "Anexo IV",
      "Anexo V",
      "CTPS física",
      "art. 506"
    ],
    "resumo": "Lista completa de documentos para emissão de CTC (RG/CPF, Declaração do Órgão de Lotação, DTC Anexos IV e V, Requerimento de Períodos e CTPS física).",
    "texto": "- Documentação para Emissão de Certidão de Tempo de Contribuição (CTC - Protocolo [PROTOCOLO PAT]):\n  1. Identificação: Documento oficial com foto, CPF e comprovante de endereço recente;\n  2. Declaração do Órgão de Lotação Atual: Declaração oficial do órgão público informando seu nome, matrícula, cargo/função, RG, CPF e se o vínculo está ativo;\n  3. Vínculos com Órgãos Públicos sob Regime Geral - RGPS (DTC): Caso tenha trabalhado em prefeitura ou outro órgão público vinculado ao INSS (cargo comissionado, temporário ou emprego público), apresente o ato de nomeação/exoneração acompanhado obrigatoriamente da Declaração de Tempo de Contribuição ao RGPS (Anexo IV da IN 128/2022) e da relação de salários (Anexo V da IN 128/2022);\n  4. Indicação dos Períodos que Deseja Certificar: Pedido assinado informando exatamente quais vínculos ou períodos você deseja levar na CTC e para qual órgão público (RPPS) ela será destinada;\n  5. Carteiras de Trabalho Físicas (CTPS): Envie fotos ou digitalizações coloridas e legíveis de todas as páginas com anotações das suas Carteiras de Trabalho físicas (identificação, contratos, alterações salariais, férias, FGTS e anotações gerais), em ordem cronológica (não é aceita apenas a CTPS Digital para conferência de vínculos antigos);\n  6. Outros Documentos: Comprovantes de baixa de vínculos que estejam em aberto no CNIS.\n(Fundamentação: art. 69, § 1º, e arts. 506 a 518 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ctc-exig-revisao-ctc",
    "titulo": "Exigência CTC: Documentação para Revisão de Certidão de Tempo de Contribuição (CTC)",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "CTC",
      "revisão de CTC",
      "exigência",
      "declaração RPPS",
      "art. 514",
      "art. 517"
    ],
    "resumo": "Solicita a CTC original (se física), declaração do RPPS sobre utilização do tempo e requerimento indicando os períodos a alterar.",
    "texto": "- Documentação para Revisão de CTC: Para analisar a revisão da sua Certidão de Tempo de Contribuição (CTC), apresente:\n  1. A via original da CTC emitida anteriormente (exceto se foi emitida eletronicamente pelo portal Meu INSS);\n  2. Declaração oficial do órgão público de destino (RPPS) informando se os períodos da CTC já foram utilizados para aposentadoria ou vantagens financeiras; e\n  3. Pedido assinado explicando o motivo da revisão e indicando quais períodos você deseja incluir, excluir ou alterar (Fundamentação: arts. 514 a 517 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ctc-exig-ctc-rpps-para-rgps",
    "titulo": "Exigência CTC / RPPS: Apresentação de CTC Emitida por Órgão Público (Para Trazer Tempo ao INSS)",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "CTC",
      "RPPS para RGPS",
      "contagem recíproca",
      "Portaria 1.467/2022",
      "art. 506"
    ],
    "resumo": "Solicita CTC original emitida pelo RPPS acompanhada da Relação das Remunerações a partir de 07/1994.",
    "texto": "- Certidão de Tempo de Contribuição de Órgão Público (Para Trazer Tempo ao INSS): Para somar no INSS o tempo trabalhado em regime próprio de servidor público (RPPS), apresente a Certidão de Tempo de Contribuição (CTC) original emitida pelo órgão público, totalmente preenchida e assinada (contendo matrícula, cargo, datas de início e fim, faltas/licenças e tempo líquido), acompanhada da Relação das Remunerações de Contribuição para os períodos a partir de julho de 1994 (Fundamentação: Portaria MTP nº 1.467/2022 e arts. 506 a 518 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ctc-exig-declaracao-uso-tempo-rpps",
    "titulo": "Exigência CTC / RPPS: Declaração do Órgão Público sobre Períodos Utilizados ou Não Utilizados",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "CTC",
      "RPPS",
      "declaração de não uso",
      "duplicidade",
      "art. 514"
    ],
    "resumo": "Solicita declaração do órgão gestor do RPPS discriminando quais períodos da CTC do INSS foram usados e quais sobraram livres.",
    "texto": "- Declaração sobre Uso de Tempo em Regime Próprio (RPPS): Apresente declaração oficial emitida pelo órgão gestor do Regime Próprio de Previdência Social (RPPS) informando detalhadamente quais períodos da CTC emitida pelo INSS foram utilizados para aposentadoria ou vantagens lá no órgão público, e especificando quais períodos não foram utilizados, para permitir o aproveitamento no INSS sem contagem em duplicidade (Fundamentação: art. 514 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ctc-exig-beneficio-outro-regime-rpps",
    "titulo": "Exigência RPPS: Informações sobre Aposentadoria ou Pensão Recebida em Outro Regime",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "RPPS",
      "outro regime",
      "acumulação de benefícios",
      "pensão",
      "aposentadoria",
      "art. 642"
    ],
    "resumo": "Solicita preenchimento de declaração e contracheque sobre aposentadoria ou pensão recebida em RPPS (civil ou militar).",
    "texto": "- Declaração de Benefício Recebido em Outro Regime de Previdência (RPPS / Militar): Informe os dados da aposentadoria ou pensão que você recebe em outro regime de previdência (tipo de benefício, data de início, nome do órgão pagador, esfera municipal/estadual/federal, natureza civil ou militar e valor bruto atual), preenchendo e assinando o formulário em anexo acompanhado do último contracheque (Fundamentação: art. 24 da Emenda Constitucional nº 103/2019 e art. 642 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "ctc-exig-documentacao-especifica-reclamatoria-vigilante",
    "titulo": "Exigência Específica: Reclamatória Trabalhista ou Atividade de Vigilante",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "reclamatória trabalhista",
      "vigilante",
      "arma de fogo",
      "trânsito em julgado",
      "art. 172",
      "art. 280"
    ],
    "resumo": "Solicita documentos específicos para averbação de Reclamatória Trabalhista (cópia autenticada/eletrônica + início de prova material) ou Vigilante.",
    "texto": "- Documentação Específica (Reclamatória Trabalhista e/ou Vigilante):\n  - Para Reclamatória Trabalhista: Apresente cópia integral ou peças principais do processo trabalhista (petição inicial, sentença, acórdãos, certidão de trânsito em julgado e planilha de cálculo dos salários homologada), acompanhadas de início de prova material da época do trabalho quando se tratar de reconhecimento ou alteração de vínculo (art. 172 e art. 571 da Instrução Normativa PRES/INSS nº 128/2022);\n  - Para Vigilante: Apresente o PPP acompanhado da comprovação do porte de arma de fogo e habilitação na Polícia Federal, nos termos da Lei nº 7.102/1983 (art. 280 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "bi-exig-declaracao-dut-afastamento",
    "titulo": "Exigência BI: Declaração da Data do Último Dia Trabalhado (DUT) e Afastamento no eSocial",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "BI",
      "incapacidade",
      "DUT",
      "último dia trabalhado",
      "afastamento",
      "eSocial",
      "férias",
      "art. 335"
    ],
    "resumo": "Solicita declaração atualizada da empresa informando a DUT, retorno/permanência no afastamento, afastamentos nos últimos 60 dias, férias e recibo do eSocial.",
    "texto": "- Declaração da Empresa sobre o Último Dia Trabalhado (DUT): Apresente declaração atualizada, carimbada e assinada pela empresa [NOME DA EMPRESA], informando obrigatoriamente:\n  1. A data exata do seu Último Dia Trabalhado (DUT);\n  2. Se você continua afastado(a) do trabalho ou a data em que retornou às atividades;\n  3. Se houve afastamento superior a 15 dias pela mesma doença dentro de um período de 60 dias;\n  4. Se você tirou férias no período do afastamento.\nApresente também o comprovante/recibo de entrega do evento de afastamento temporário enviado pela empresa ao eSocial (Fundamentação: art. 72 do Decreto nº 3.048/1999 e art. 335 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "bi-desp-indeferimento-nao-apresentacao-dut",
    "titulo": "Despacho BI: Indeferimento por Não Apresentação da Declaração de Último Dia Trabalhado (DUT)",
    "ato": "despacho",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "BI",
      "incapacidade",
      "DUT",
      "indeferimento",
      "não apresentou DUT",
      "art. 335",
      "art. 574"
    ],
    "resumo": "Indefere requerimento de Benefício por Incapacidade quando o segurado não atende à exigência de apresentação da DUT para vínculo em aberto.",
    "texto": "Trata-se de requerimento de Benefício por Incapacidade.\nFoi identificada a necessidade de comprovação da Data do Último Dia de Trabalho (DUT) para o vínculo empregatício em aberto, informação indispensável para a fixação da Data de Início do Benefício (DIB) e verificação do efetivo afastamento das atividades laborais, conforme preveem o art. 72 do Decreto nº 3.048/1999 e o art. 335 da Instrução Normativa PRES/INSS nº 128/2022.\nFoi emitida exigência oportunizando ao(à) segurado(a) a apresentação da Declaração da DUT emitida pela empresa ou documento equivalente.\nDecorrido o prazo regulamentar, constatou-se que a exigência não foi atendida pelo(a) requerente.\nDiante do exposto, e considerando a impossibilidade de confirmar o afastamento da atividade sem o referido documento, INDEFIRO o presente requerimento pelo motivo de não comprovação do afastamento das atividades, nos termos do art. 574 da Instrução Normativa PRES/INSS nº 128/2022 e em conformidade com as orientações do Guia de Análise dos Benefícios por Incapacidade."
  },
  {
    "id": "bi-desp-auxilio-acidente-anterior-2008",
    "titulo": "Despacho BI / B94: Indeferimento de Auxílio-Acidente (Acidente Ocorrido Antes de 31/12/2008)",
    "ato": "despacho",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "auxílio-acidente",
      "B94",
      "31/12/2008",
      "Decreto 6.722/2008",
      "art. 104 § 7º RPS",
      "art. 352"
    ],
    "resumo": "Indefere pedido de auxílio-acidente para segurado especial/categoria não abrangida cujo acidente ocorreu antes de 31/12/2008.",
    "texto": "Trata-se do indeferimento do benefício de Auxílio-Acidente Previdenciário (B94) em razão de o acidente ter ocorrido anteriormente a 31/12/2008, data da publicação do Decreto nº 6.722/2008, que alterou o art. 104, § 7º, do Regulamento da Previdência Social, aprovado pelo Decreto nº 3.048, de 06/05/1999 (c/c o art. 352 da Instrução Normativa PRES/INSS nº 128/2022). Conforme disposto no referido dispositivo legal, não há respaldo normativo para a concessão do benefício requerido para sinistros anteriores àquela data."
  },
  {
    "id": "pao-exig-pensao-morte-companheiro",
    "titulo": "Exigência Pensão por Morte: Documentação para Companheiro(a) (União Estável)",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "pensão por morte",
      "B21",
      "união estável",
      "companheiro",
      "companheira",
      "2 provas",
      "JA",
      "art. 180",
      "art. 504"
    ],
    "resumo": "Solicita documentos pessoais, certidão de óbito e ao menos 2 provas materiais de união estável (sendo 1 dos últimos 24 meses) ou 1 prova + JA.",
    "texto": "- Documentação para Pensão por Morte - Companheiro(a) (União Estável): Apresente os seguintes documentos:\n  1. Documento de identificação oficial com foto e CPF (seu e da pessoa falecida);\n  2. Certidão de Óbito;\n  3. Certidão de Nascimento ou de Casamento atualizada (sua e da pessoa falecida);\n  4. Carteira de Trabalho (CTPS) e comprovantes de trabalho ou contribuição da pessoa falecida;\n  5. Pelo menos 2 (dois) documentos que comprovem a união estável e a vida em comum, sendo que ao menos 1 (um) deles deve ter sido emitido nos últimos 24 meses antes do falecimento (como certidão de filhos em comum, conta bancária conjunta, comprovantes de mesmo endereço residencial em nome de ambos, declaração de Imposto de Renda, plano de saúde ou seguro de vida como dependente);\n  6. Caso você possua apenas 1 (um) documento de prova da união estável (emitido nos últimos 24 meses), poderá solicitar Justificação Administrativa (JA), preenchendo o formulário em anexo com a indicação de 2 (duas) a 6 (seis) testemunhas (Fundamentação: arts. 180 e 504 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "pao-exig-pensao-morte-pais",
    "titulo": "Exigência Pensão por Morte: Documentação para Pais do Segurado Falecido",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "pensão por morte",
      "B21",
      "pais",
      "dependência econômica",
      "art. 176",
      "art. 180"
    ],
    "resumo": "Solicita documentos pessoais, certidões, 2 provas materiais de dependência econômica e declaração de inexistência de dependentes preferenciais.",
    "texto": "- Documentação para Pensão por Morte - Pais do(a) Segurado(a) Falecido(a): Apresente os seguintes documentos:\n  1. Documento de identificação oficial com foto e CPF (dos pais e do filho falecido);\n  2. Certidão de Óbito do(a) filho(a);\n  3. Certidão de Nascimento do(a) filho(a) falecido(a) (comprovando a filiação) e certidão de estado civil dos pais;\n  4. Carteira de Trabalho (CTPS) e comprovantes de contribuição do(a) falecido(a);\n  5. Pelo menos 2 (dois) documentos que comprovem que vocês dependiam financeiramente do(a) filho(a) falecido(a), sendo ao menos 1 (um) emitido nos últimos 24 meses antes do óbito (como comprovantes de pagamento de contas da casa, transferências bancárias regulares, compras de medicamentos/alimentos ou declaração de Imposto de Renda);\n  6. Declaração assinada informando que o(a) falecido(a) não deixou cônjuge, companheiro(a) ou filhos (dependentes de 1ª classe) (Fundamentação: arts. 176 e 180 da Instrução Normativa PRES/INSS nº 128/2022)."
  },
  {
    "id": "pao-exig-pensao-morte-ex-conjuge",
    "titulo": "Exigência Pensão por Morte: Documentação para Ex-Cônjuge ou Ex-Companheiro(a)",
    "ato": "exigencia",
    "tema": "Recursos, Revisões, CTC e BI",
    "favorito": false,
    "tags": [
      "pensão por morte",
      "B21",
      "ex-cônjuge",
      "pensão alimentícia",
      "ajuda financeira",
      "art. 373"
    ],
    "resumo": "Solicita certidão de casamento com averbação de divórcio/separação e comprovação de pensão alimentícia ou ajuda econômica contínua até o óbito.",
    "texto": "- Documentação para Pensão por Morte - Ex-Cônjuge ou Ex-Companheiro(a): Apresente os seguintes documentos:\n  1. Documento de identificação oficial com foto e CPF (seu e da pessoa falecida);\n  2. Certidão de Óbito;\n  3. Certidão de Casamento com a averbação da separação judicial ou do divórcio;\n  4. Carteira de Trabalho (CTPS) e comprovantes de contribuição da pessoa falecida;\n  5. Comprovante de que você recebia pensão alimentícia judicial/extrajudicial ou ajuda financeira contínua e indispensável paga pela pessoa falecida até a data do óbito (Fundamentação: art. 373 da Instrução Normativa PRES/INSS nº 128/2022)."
  }
];
