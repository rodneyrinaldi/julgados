export const NAV_LINKS = [
  { href: "#diferenca", label: "Por que é diferente" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#faq", label: "FAQ" },
];

export const COMPETITOR_ROWS: [string, string, string, string][] = [
  ["Teses por polo com resultado", "❌", "❌", "✅"],
  ["Voto individual por ministro", "❌", "Parcial", "✅ com tendência"],
  ["Evolução legislativa (lei vigente na data)", "❌", "❌", "✅"],
  ["Doutrina citada com posição", "❌", "❌", "✅"],
  ["Origem do dado (STJ vs IA)", "❌", "❌", "✅"],
  ["Score por feedback coletivo", "❌", "❌", "✅"],
  ["Versão offline (Docker local)", "❌", "❌", "✅"],
  ["Key própria de LLM", "❌", "❌", "✅"],
  ["Preço de entrada", "R$ 58,90/mês", "Sob consulta", "R$ 33/mês"],
  ["Consultas incluídas", "30–150/mês", "N/D", "200/mês (Prof.)"],
];

export const PLAN_COMPARISON_ROWS: [string, string, string, string][] = [
  ["Preço", "R$ 33/mês", "R$ 61/mês", "R$ 68/mês"],
  ["Chatbot STJ", "✅", "✅", "✅"],
  ["Base relacional", "✅", "✅", "✅"],
  ["Últimos 5 anos", "✅", "✅", "✅"],
  ["Teses por polo", "✅", "✅", "✅"],
  ["Voto por ministro", "✅", "✅", "✅"],
  ["Busca semântica", "❌", "✅", "✅"],
  ["IA na nuvem", "❌", "❌", "✅"],
  ["Histórico 1990-2025", "+ R$ 68", "+ R$ 68", "+ R$ 68"],
  ["Escritório (5×3)", "✅", "✅", "✅"],
];

export const FAQ_ITEMS = [
  {
    q: "O sistema pode citar acórdãos inexistentes?",
    a: "Não. Isso já custou caro a advogados que usaram ChatGPT sem filtro. O julgados.adv.br responde com base exclusiva nos dados do STJ. Se o acórdão não está na base, a resposta informa isso.",
  },
  {
    q: "Como sei se o dado veio do STJ ou foi inferido pela IA?",
    a: "Cada campo tem origem registrada. No acórdão detalhado você vê exatamente de onde veio cada informação — campo original do STJ ou inferência da IA, com nível de confiança registrado. Quando as duas fontes divergem, o sistema alerta.",
  },
  {
    q: "Cobre outros tribunais além do STJ?",
    a: "Não — e essa é uma escolha deliberada. Cobertura rasa de tudo não serve para quem atua no STJ com frequência. Cobertura profunda do STJ serve. Para jurisprudência estadual, use o Jusbrasil em paralelo.",
  },
  {
    q: "Os dados são atualizados quando?",
    a: "Mensalmente, com os acórdãos do STJ do mês anterior. Automático para todos os planos.",
  },
  {
    q: "A versão local funciona sem internet?",
    a: "Sim. Após instalação, funciona completamente offline. Nenhum dado de consulta sai da sua máquina.",
  },
  {
    q: "Tem limite de uso?",
    a: "Starter e Essencial: sem teto. Profissional: 200 consultas/mês incluídas — excedente em créditos avulsos. Para a maioria dos advogados, 200 consultas mensais é muito mais que suficiente. O Jusbrasil Essencial tem 30 mensagens/mês. Compare.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem fidelidade. Sem multa. Cancela com um clique.",
  },
  {
    q: "E os plugins?",
    a: "Doutrinador e Jurimetria chegam no segundo semestre. Cada plugin é avulso — você ativa só o que precisa.",
  },
];

export const OBJECTIONS = [
  {
    obj: '"Já uso o Jusbrasil"',
    resp: "Ótimo — continue usando para busca geral. Use o julgados.adv.br quando precisar saber como o ministro relator vota nesse tema e quais teses funcionaram para cada polo no STJ. São ferramentas complementares.",
  },
  {
    obj: '"É caro demais"',
    resp: "R$ 33/mês é R$ 1,10 por dia. O Jusbrasil Essencial cobra R$ 58,90 por 30 mensagens. Aqui são 200 consultas por R$ 68 no Profissional. Faça as contas.",
  },
  {
    obj: '"Tenho medo de citar jurisprudência errada"',
    resp: "Exatamente por isso existe o julgados.adv.br. Cada dado tem origem registrada. Você verifica antes de usar. Um tribunal já advertiu advogado em 2025 por citar 43 processos inexistentes gerados por ChatGPT. Aqui isso não acontece — estruturalmente.",
  },
  {
    obj: '"O STJ cobre o suficiente para mim?"',
    resp: "Se você atua em recursos especiais, agravos e matéria federal, sim — o STJ é o que importa. Se você precisa de jurisprudência estadual, use o Jusbrasil em paralelo. R$ 33 + R$ 58,90 ainda sai mais barato que os planos premium de qualquer concorrente.",
  },
];

export const TESTIMONIALS = [
  {
    title: '"Soube como o ministro vota antes de peticionar"',
    body: "Estava preparando REsp sobre exclusão do ICMS da base do PIS/COFINS. Em 3 minutos soube que o ministro relator sorteado votou contra essa tese nas últimas 4 oportunidades — mas que 3 ministros da turma votam a favor. Ajustou a petição para os fundamentos que cada um costuma acolher. Ganhou por maioria.",
    author: "Tributarista — São Paulo",
  },
  {
    title: '"Descobri que a lei que eu ia citar já tinha sido revogada"',
    body: "Ia citar precedente de 2003 sobre usufruto e ITCMD. O sistema sinalizou que a legislação estadual que embasou aquele acórdão foi revogada em 2001 — o precedente usou uma lei já inexistente. Se tivesse citado, a Fazenda teria destruído o argumento na primeira manifestação.",
    author: "Advogada de família — Belo Horizonte",
  },
  {
    title: '"Encontrei jurisprudência que palavras-chave nunca achariam"',
    body: "Precisava de casos sobre vício oculto descoberto após garantia em e-commerce. A busca semântica encontrou 23 acórdãos relevantes — nenhum aparecia na busca por palavras porque usavam terminologias diferentes. Três viraram argumentos centrais na petição.",
    author: "Advogado do consumidor — Porto Alegre",
  },
  {
    title: '"A doutrina que a Fazenda ia usar, eu já sabia com antecedência"',
    body: "Antes da audiência, pesquisei quais obras doutrinárias o STJ costuma citar a favor da Fazenda nesse tema. Preparei a resposta antes de precisar. O advogado da parte contrária ficou sem argumento novo.",
    author: "Advogado tributarista — Recife",
  },
];
