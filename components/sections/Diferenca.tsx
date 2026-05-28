import { Section, SectionHeading, Card } from "@/components/ui/primitives";

const QUESTIONS = [
  {
    q: "A tese que você quer usar já foi tentada antes nesse tribunal?",
    sub: "E funcionou para o polo ativo ou só para o passivo?",
  },
  {
    q: "O ministro relator sorteado costuma acolher esse argumento?",
    sub: "Ou rejeita sistematicamente? Antes de peticionar, você precisa saber.",
  },
  {
    q: "A lei que você vai citar estava vigente na data do precedente?",
    sub: "Citar acórdão fundamentado em lei revogada pode destruir o argumento.",
  },
  {
    q: "Quais obras doutrinárias o STJ usou para essa posição?",
    sub: "E de que lado cada autor foi colocado — favorável ao ativo, ao passivo ou neutro.",
  },
];

const AUDIENCES = [
  {
    title: "Para o advogado que peticiona no STJ",
    body: "Você não só precisa encontrar o acórdão — precisa saber se a tese funcionou para o polo ativo ou passivo, como o ministro relator vota e se a lei citada ainda estava vigente.",
    note: "O único produto do mercado que responde tudo isso de uma vez.",
  },
  {
    title: "Para o advogado que quer evitar citação inválida",
    body: "Em 2025, um advogado foi advertido por citar 43 processos inexistentes gerados por ChatGPT. Aqui, cada acórdão tem origem registrada. Você verifica antes de usar.",
    note: "Zero risco de citar processo que não existe.",
  },
  {
    title: "Para o acadêmico e o doutrinador",
    body: "Você precisa dos leading cases, não dos mais recentes. Quer saber quais obras foram mais citadas num determinado tema e de que lado da controvérsia cada autor foi colocado.",
    note: "É o único produto do mercado que registra doutrina citada com posição — favorável ao ativo, ao passivo ou neutra.",
  },
];

export function Diferenca() {
  return (
    <Section id="diferenca">
      <div className="relative grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading
            eyebrow="A diferença que muda o caso"
            title={
              <>
                Pesquisar jurisprudência qualquer ferramenta faz.<br />
                <span className="text-slate-300">Entender o que fazer com ela é outra história.</span>
              </>
            }
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Você encontra o acórdão no Jusbrasil. Você lê a ementa. Parece relevante.
            Mas o que você realmente precisa saber é se a tese já foi tentada, se funcionou
            para o seu polo, como o ministro relator costuma votar e se a lei citada estava
            vigente na data do precedente.
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-100">
            Nenhum buscador te responde isso. O julgados.adv.br responde.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-200">
          {QUESTIONS.map((item) => (
            <Card key={item.q}>
              <p className="font-medium text-slate-50">{item.q}</p>
              <p className="mt-1 text-xs text-slate-400">{item.sub}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {AUDIENCES.map((card) => (
          <Card key={card.title} className="flex h-full flex-col">
            <h3 className="text-sm font-semibold text-slate-50">{card.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{card.body}</p>
            <p className="mt-3 text-xs font-medium text-blue-100">{card.note}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
