import { Section, SectionHeading } from "@/components/ui/primitives";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Perguntas frequentes"
        title="As principais objeções — respondidas com dados."
      />

      <div className="mt-6 space-y-3 text-sm">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-medium text-slate-100">{item.q}</span>
              <span className="text-xs text-slate-500 group-open:hidden">+</span>
              <span className="hidden text-xs text-slate-500 group-open:inline">−</span>
            </summary>
            <div className="mt-2 text-xs text-slate-300">{item.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}
