export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 pb-8 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-200">julgados.adv.br</p>
          <p className="text-slate-400">Especializado em STJ. Profundo onde outros são rasos.</p>
          <p className="text-slate-500">Atualizado todo mês. Zero alucinação. 100% baseado nos dados do STJ.</p>
        </div>
        <div className="space-y-1 md:text-right">
          <p>
            Contato:{" "}
            <span className="font-mono text-slate-300">contato@julgados.adv.br</span>
          </p>
          <p>© {new Date().getFullYear()} julgados.adv.br — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
