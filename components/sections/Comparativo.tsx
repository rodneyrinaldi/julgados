import { Section, SectionHeading, cellClass } from "@/components/ui/primitives";
import { COMPETITOR_ROWS } from "@/lib/data";

export function Comparativo() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Vantagem competitiva"
        title="O que nenhum concorrente tem."
      />

      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80">
        <div className="overflow-x-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-900/80 text-[11px] uppercase tracking-[0.16em] text-slate-400">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Funcionalidade</th>
                <th className="px-4 py-3 text-center font-medium text-blue-200">julgados.adv.br</th>
                <th className="px-4 py-3 text-center font-medium">Jusbrasil</th>
                <th className="px-4 py-3 text-center font-medium">Turivius</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-[13px]">
              {COMPETITOR_ROWS.map(([feat, jus, tur, jlg]) => (
                <tr key={feat}>
                  <td className="px-4 py-3 text-slate-200">{feat}</td>
                  <td className={`px-4 py-3 text-center font-medium ${cellClass(jlg)}`}>{jlg}</td>
                  <td className={`px-4 py-3 text-center ${cellClass(jus)}`}>{jus}</td>
                  <td className={`px-4 py-3 text-center ${cellClass(tur)}`}>{tur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
