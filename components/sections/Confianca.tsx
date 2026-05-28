import { Section, SectionHeading, Card } from "@/components/ui/primitives";
import { TESTIMONIALS } from "@/lib/data";

export function Confianca() {
  return (
    <Section>
      <div className="relative grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading
            eyebrow="Por que confiar nos dados"
            title="Origem registrada em cada informação."
          />
          <p className="mt-4 text-sm text-slate-300">
            Em 2025, um tribunal brasileiro não conheceu um recurso com 43 acórdãos inexistentes
            inventados por ChatGPT e advertiu o advogado formalmente.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            No julgados.adv.br isso não acontece. Cada campo tem origem registrada:
            se veio diretamente do STJ ou foi inferido pela IA — e com qual nível de confiança.
            Quando as duas fontes divergem, sinalizamos. Você sabe exatamente no que está se baseando.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Todo mês, novos acórdãos do STJ são processados e incorporados. Você sempre pesquisa
            na jurisprudência atual. Sem precisar fazer nada.
          </p>
        </div>

        <Card>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Prova social
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-200">
            <li>"1.000.000+ acórdãos processados — 1990 a 2025"</li>
            <li>"O único sistema que registra teses por polo com resultado"</li>
            <li>"Zero acórdãos inventados — estruturalmente impossível"</li>
            <li>"200 consultas/mês no Profissional vs 30 do Jusbrasil Essencial"</li>
            <li>"Desde R$ 1,10 por dia — menos que um café"</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

export function Testimonials() {
  const [first, ...rest] = TESTIMONIALS;

  return (
    <Section>
      <SectionHeading
        eyebrow="Casos de uso reais"
        title="Histórias de quem já usou antes de peticionar."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.slice(0, 3).map((t) => (
          <Card key={t.title} className="flex h-full flex-col text-xs">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {t.title}
            </p>
            <p className="mt-3 text-slate-300">{t.body}</p>
            <p className="mt-3 text-[11px] text-slate-500">{t.author}</p>
          </Card>
        ))}
      </div>

      {TESTIMONIALS.length > 3 && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.slice(3).map((t) => (
            <Card key={t.title} className="flex h-full flex-col text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {t.title}
              </p>
              <p className="mt-3 text-slate-300">{t.body}</p>
              <p className="mt-3 text-[11px] text-slate-500">{t.author}</p>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
