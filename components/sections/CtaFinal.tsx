import { Section } from "@/components/ui/primitives";
import { OBJECTIONS } from "@/lib/data";

export function CtaFinal() {
  return (
    <Section id="cta-final">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
            O julgados.adv.br resolve o STJ.<br />
            <span className="text-blue-300">Teste grátis agora.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            50 consultas grátis. Sem cadastro. Sem cartão.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-blue-500 px-6 py-3 text-base text-white font-semibold tracking-tight text-slate-950 hover:bg-blue-400"
            >
              Testar grátis
            </a>
            <a
              href="#planos"
              className="rounded-full border border-slate-700 px-5 py-3 text-base font-semibold tracking-tight text-slate-100 hover:border-blue-400"
            >
              Ver planos desde R$ 33/mês
            </a>
          </div>
          <p className="mt-4 text-base text-slate-400">
            Planos desde R$ 33/mês — mais consultas que o concorrente.
          </p>
          <p className="mt-3 text-base text-slate-400">
            Para empresas e API: <span className="font-mono text-slate-200">contato@julgados.adv.br</span>
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 text-xs">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Argumentos por objeção
          </p>
          <div className="mt-3 space-y-3 text-slate-200">
            {OBJECTIONS.map((item) => (
              <div key={item.obj}>
                <p className="text-[11px] font-semibold text-slate-100">{item.obj}</p>
                <p className="text-[11px] text-slate-300">{item.resp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
