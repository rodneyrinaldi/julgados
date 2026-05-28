import { ReactNode } from "react";

// ── Section wrapper ──────────────────────────────────────────────────────────
interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`mt-20 border-t border-slate-900 pt-12 ${className}`}
    >
      {children}
    </section>
  );
}

// ── Section heading ──────────────────────────────────────────────────────────
interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`relative rounded-3xl border border-slate-800 bg-slate-900/60 p-5 ${className}`}
    >
      {children}
    </div>
  );
}

// ── Table cell helper ─────────────────────────────────────────────────────────
export function cellClass(value: string): string {
  if (value === "✅" || value.startsWith("✅")) return "text-emerald-400";
  if (value === "❌") return "text-slate-500";
  return "text-slate-300";
}
