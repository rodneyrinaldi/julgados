import { Section, SectionHeading } from "@/components/ui/primitives";

const STEPS = [
  {
    n: "1",
    title: "Você descreve o caso",
    sub: "Linguagem natural, sem juridiquês obrigatório.",
    detail: '"Meu cliente tem dívida bancária prescrita sendo cobrada por empresa de recuperação de crédito."',
  },
  {
    n: "2",
    title: "Busca relacional + semântica",
    sub: "Filtra por ministro, turma, período, resultado e significado.",
    detail: "Relacional: filtra por área, período, ministro, resultado. Semântico: encontra casos similares pelo significado — não só pela palavra.",
  },
  {
    n: "3",
    title: "Resposta estratégica",
    sub: "Teses por polo, tendência de voto, legislação e doutrina.",
    detail: null,
  },
];

const STEP3_LIST = [
  "Quais teses o polo ativo usou — e quais funcionaram.",
  "Quais teses o polo passivo usou — e como foram rebatidas.",
  "Como os ministros da turma competente votam nesse tema.",
  "A legislação aplicada em cada período e se ainda está vigente.",
  "As obras doutrinárias que embasaram cada posição.",
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona">
      <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,1fr)] md:items-start">
        <div>
          <SectionHeading
            eyebrow="Como funciona"
            title="Você descreve. O chatbot pesquisa. A IA explica."
          />

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            {STEPS.map((step) => (
              <div key={step.n}>
                <p className="font-semibold text-slate-100">
                  Passo {step.n} — {step.title}
                </p>
                <p className="mt-1">{step.detail}</p>
                {step.n === "3" && (
                  <ul className="mt-1 space-y-1 text-xs text-slate-300">
                    {STEP3_LIST.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs font-medium text-blue-100">
            A IA cita acórdãos reais. Você verifica antes de usar. Zero risco de citar processo que não existe.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 text-xs">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Fluxo visual
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {STEPS.map((step) => (
                <div key={step.n} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[11px] text-blue-100">
                    {step.n}
                  </div>
                  <div>
                    <p className="font-medium text-slate-100">{step.title}</p>
                    <p className="text-[11px] text-slate-400">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-[11px] text-emerald-100">
            <svg className="h-4 w-4 shrink-0 text-emerald-300/80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.8" />
              <path d="M9 12.5L11 14.5L15 9.5" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span>"Zero acórdãos inventados — estruturalmente impossível."</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
