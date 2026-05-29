import { Section, SectionHeading, Card, cellClass } from "@/components/ui/primitives";
import { PLAN_COMPARISON_ROWS } from "@/lib/data";

const PLANS = [
  {
    emoji: "💬",
    name: "STARTER",
    price: "R$ 33/mês",
    tagline: "Comece já, sem burocracia.",
    featured: false,
    features: [
      { ok: true,  text: "Chatbot jurídico com IA no seu browser" },
      { ok: true,  text: "Base STJ relacional — últimos 5 anos" },
      { ok: true,  text: "Teses por polo, votação, legislação aplicada" },
      { ok: true,  text: "Resumo em linguagem simples" },
      { ok: true,  text: "Filtros por área, ministro, turma, resultado" },
      { ok: false, text: "Busca semântica (disponível no Essencial)" },
      { ok: false, text: "IA na nuvem com modelos maiores (Profissional)" },
    ],
    note: "Ideal para quem quer dados reais do STJ gastando pouco.",
    cta: "Assinar Starter — R$ 33/mês",
  },
  {
    emoji: "🔍",
    name: "ESSENCIAL",
    price: "R$ 61/mês",
    tagline: "Busca completa e sem limites.",
    featured: true,
    badge: "Mais escolhido",
    features: [
      { ok: true, text: "Tudo do Starter +" },
      { ok: true, text: "Busca semântica — encontra por significado, não só por palavra-chave" },
      { ok: true, text: "Base vetorial completa com teses individuais indexadas" },
      { ok: true, text: "Filtros híbridos: relacional + semântico simultaneamente" },
      { ok: true, text: "Teses similares — encontra casos que buscas tradicionais nunca achariam" },
    ],
    note: "Encontre casos parecidos, mesmo com termos diferentes.",
    cta: "Assinar Essencial — R$ 61/mês",
  },
  {
    emoji: "⚡",
    name: "PROFISSIONAL",
    price: "R$ 68/mês",
    tagline: "IA avançada. Respostas detalhadas.",
    featured: false,
    features: [
      { ok: true,    text: "Tudo do Essencial +" },
      { ok: true,    text: "IA na nuvem — modelos maiores, análises mais profundas" },
      { ok: true,    text: "Raciocínio jurídico mais sofisticado" },
      { ok: true,    text: "Histórico de conversas preservado" },
      { ok: true,    text: "Reranking por perfil: advogado, acadêmico, doutrinador" },
      { ok: "warn",  text: "200 consultas/mês — excedente em créditos avulsos" },
    ],
    note: "Para quem usa todo dia e quer o melhor resultado.",
    cta: "Assinar Profissional — R$ 68/mês",
  },
];

const ADD_ONS = [
  {
    emoji: "📚",
    name: "HISTÓRICO",
    price: "+ R$ 68/mês",
    tagline: "1990 a 2025. O acervo completo.",
    features: [
      "Todos os acórdãos desde a promulgação da CF/88",
      "Evolução jurisprudencial completa em 35 anos",
      "Contexto legislativo histórico — leis revogadas, sucessão de diplomas",
      "Indispensável para usufruto pré-88, direitos adquiridos, situações constituídas antes da ordem constitucional vigente",
    ],
    cta: "Adicionar Histórico — + R$ 68/mês",
  },
  {
    emoji: "🏢",
    name: "ESCRITÓRIO",
    price: "5 usuários pelo preço de 3",
    tagline: "Para equipes que trabalham juntas.",
    pre: `Profissional Escritório = R$ 68 × 3 = R$ 204/mês para 5 advogados\nvs. 5 individuais = R$ 340/mês\nEconomia: R$ 136/mês`,
    cta: "Falar sobre plano Escritório",
  },
];

const LOCAL_PLANS = [
  {
    emoji: "🖥️",
    name: "LOCAL BÁSICO",
    price: "R$ 297 (único)",
    tagline: "Seus dados. Sua máquina. Para sempre.",
    features: [
      "Imagem Docker completa — instala uma vez",
      "Banco, IA e interface — tudo embutido",
      "Funciona 100% offline após instalação",
      "Nenhum dado sai da sua máquina",
      "Área do direito + últimos 5 anos",
      "IA local — sem GPU, sem internet",
    ],
    note: "Para escritórios com política de dados restrita. Para regiões com internet limitada. Para quem não quer depender de ninguém.",
    cta: "Ver áreas disponíveis — R$ 297",
  },
  {
    emoji: "💾",
    name: "LOCAL COMPLETO",
    price: "R$ 997 (único)",
    tagline: "O produto definitivo. Tudo. Offline.",
    features: [
      "1 milhão de acórdãos — 1990 a 2025",
      "Todas as áreas do direito",
      "IA local de alta qualidade",
      "Zero dependência externa",
    ],
    note: "Para grandes escritórios, plataformas jurídicas e acadêmicos que querem a base completa do STJ na própria infraestrutura. R$ 997 pagos uma vez. Para sempre.",
    cta: "Adquirir Local Completo — R$ 997",
  },
];

export function Planos() {
  return (
    <Section id="planos">
      <div className="flex items-baseline justify-between gap-4 text-base">
        <SectionHeading
          eyebrow="Planos"
          title="Simples. Direto. Sem surpresas."
          subtitle="Comece grátis com 50 consultas. Depois, escolha o plano que acompanha o seu nível de uso."
        />
        <div className="hidden text-right text-[11px] text-slate-400 md:block">
          <p>Planos a partir de R$ 33/mês.</p>
          <p>Menos que um café por dia.</p>
        </div>
      </div>

      {/* Main plans */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-5 ${
              plan.featured
                ? "border-blue-500/70 bg-slate-900/80"
                : "border-slate-800 bg-slate-900/60"
            }`}
          >
            {"badge" in plan && plan.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-50">
                {plan.badge}
              </div>
            )}
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {plan.emoji} {plan.name}
              </h3>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  plan.featured ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-300"
                }`}
              >
                {plan.price}
              </span>
            </div>
            <p className={`mt-1 text-[11px] ${plan.featured ? "text-slate-300" : "text-slate-400"}`}>
              {plan.tagline}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs">
              {plan.features.map((f) => (
                <li
                  key={f.text}
                  className={
                    f.ok === true
                      ? "text-slate-200"
                      : f.ok === "warn"
                      ? "text-slate-300"
                      : "text-slate-500"
                  }
                >
                  {f.ok === true ? "✓" : f.ok === "warn" ? "⚠" : "✗"} {f.text}
                </li>
              ))}
            </ul>
            <p className={`mt-4 text-[11px] ${plan.featured ? "text-slate-300" : "text-slate-400"}`}>
              {plan.note}
            </p>
            <a
              href="#cta-final"
              className={`mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold ${
                plan.featured
                  ? "bg-blue-500 text-white hover:bg-blue-400"
                  : "border border-slate-700 text-slate-100 hover:border-blue-400"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {ADD_ONS.map((addon) => (
          <Card key={addon.name} className="flex flex-col text-xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {addon.emoji} {addon.name}
              </h3>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                {addon.price}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">{addon.tagline}</p>
            {"features" in addon && addon.features && (
              <ul className="mt-3 space-y-1 text-slate-200">
                {addon.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
            )}
            {"pre" in addon && addon.pre && (
              <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-slate-950/80 p-3 text-[11px] text-slate-200">
                {addon.pre}
              </pre>
            )}
            <a
              href="#cta-final"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-[11px] font-semibold text-slate-100 hover:border-blue-400"
            >
              {addon.cta}
            </a>
          </Card>
        ))}
      </div>

      {/* Local plans */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {LOCAL_PLANS.map((plan) => (
          <Card key={plan.name} className="flex flex-col text-xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {plan.emoji} {plan.name}
              </h3>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                {plan.price}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">{plan.tagline}</p>
            <ul className="mt-3 space-y-1 text-slate-200">
              {plan.features.map((f) => <li key={f}>✓ {f}</li>)}
            </ul>
            <p className="mt-4 text-[11px] text-slate-300">{plan.note}</p>
            <a
              href="#cta-final"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-[11px] font-semibold text-slate-100 hover:border-blue-400"
            >
              {plan.cta}
            </a>
          </Card>
        ))}
      </div>

      {/* Plugins */}
      <Card className="mt-10 text-xs">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-50">🔌 PLUGINS — Em breve</h3>
          <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
            Cobrança avulsa
          </span>
        </div>
        <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-slate-950/80 p-3 text-[11px] text-slate-200">
{`Doutrinador  → Mapeamento completo de obras citadas pelo STJ
Jurimetria   → Probabilidade de sucesso por tese, ministro e turma
Monitoramento → Alerta quando novo acórdão relevante é publicado
Peças        → Minutas baseadas nos precedentes encontrados`}
        </pre>
      </Card>

      {/* Plan comparison table */}
      <div id="comparativo" className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80">
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-900/80 text-[11px] uppercase tracking-[0.16em] text-slate-400">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Recurso</th>
                <th className="px-4 py-3 text-center font-medium">Starter</th>
                <th className="px-4 py-3 text-center font-medium">Essencial</th>
                <th className="px-4 py-3 text-center font-medium text-blue-200">Profissional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-[13px]">
              {PLAN_COMPARISON_ROWS.map(([feat, st, es, pr]) => (
                <tr key={feat}>
                  <td className="px-4 py-3 font-medium text-slate-200">{feat}</td>
                  <td className={`px-4 py-3 text-center ${cellClass(st)}`}>{st}</td>
                  <td className={`px-4 py-3 text-center ${cellClass(es)}`}>{es}</td>
                  <td className={`px-4 py-3 text-center ${cellClass(pr)}`}>{pr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
