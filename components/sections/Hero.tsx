export function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
      {/* Copy */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1 text-[11px] font-medium text-blue-100">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          Especializado em STJ — profundo onde outros são rasos
        </div>

        <div className="mt-6 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            O Jusbrasil encontra o acórdão.<br />
            <span className="text-blue-300">O julgados.adv.br te diz o que fazer com ele.</span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]">
            Especializado em STJ. Profundo onde outros são rasos.
            Sabe quais teses funcionam para cada polo. Como cada ministro vota.
            Qual lei estava vigente na data. O que a doutrina diz — e de que lado.
          </p>
        </div>

        <p className="mt-4 text-xs font-medium text-blue-100">
          1 milhão de acórdãos. De 1990 a 2025. A partir de R$ 33 por mês.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#cta-final"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-xs font-semibold tracking-tight text-slate-950 hover:bg-blue-400"
          >
            Começar grátis — 50 consultas sem cartão
          </a>
          <a
            href="#planos"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-xs font-semibold tracking-tight text-slate-100 hover:border-slate-500"
          >
            Ver os planos
          </a>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
          <span>50 consultas gratuitas • Sem cadastro • Sem cartão</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-600 md:inline-block" />
          <span className="hidden md:inline-block">Planos a partir de R$ 33/mês</span>
        </div>
      </div>

      {/* Illustration */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-5">
        <div className="mb-4 flex items-center justify-between text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Fluxo de decisão jurídica — STJ
          </span>
          <span>IA + dados reais</span>
        </div>

        <div className="relative h-52">
          <svg viewBox="0 0 420 220" className="h-full w-full text-slate-500/40" fill="none">
            <g stroke="currentColor" strokeWidth="0.3" opacity="0.25">
              <line x1="20" y1="40" x2="400" y2="40" />
              <line x1="20" y1="90" x2="400" y2="90" />
              <line x1="20" y1="140" x2="400" y2="140" />
              <line x1="20" y1="190" x2="400" y2="190" />
              <line x1="60" y1="20" x2="60" y2="200" />
              <line x1="150" y1="20" x2="150" y2="200" />
              <line x1="240" y1="20" x2="240" y2="200" />
              <line x1="330" y1="20" x2="330" y2="200" />
            </g>
            <g stroke="currentColor" strokeWidth="1">
              <rect x="40" y="60" width="80" height="40" rx="10" />
              <circle cx="80" cy="55" r="4" />
              <rect x="160" y="30" width="90" height="40" rx="10" />
              <circle cx="205" cy="25" r="4" />
              <rect x="160" y="110" width="90" height="40" rx="10" />
              <circle cx="205" cy="155" r="4" />
              <rect x="290" y="60" width="90" height="40" rx="10" />
              <circle cx="335" cy="55" r="4" />
              <rect x="290" y="140" width="90" height="40" rx="10" />
              <circle cx="335" cy="185" r="4" />
            </g>
            <g stroke="currentColor" strokeWidth="0.8">
              <path d="M120 80 C 135 80, 145 50, 160 50" />
              <path d="M120 80 C 135 80, 145 130, 160 130" />
              <path d="M250 50 C 270 50, 280 80, 290 80" />
              <path d="M250 130 C 270 130, 280 160, 290 160" />
              <path d="M335 100 C 335 115, 335 130, 335 140" />
              <path d="M158 50 l4 -3 l-4 -3" />
              <path d="M158 130 l4 -3 l-4 -3" />
              <path d="M288 80 l4 -3 l-4 -3" />
              <path d="M288 160 l4 -3 l-4 -3" />
              <path d="M335 138 l3 4 l3 -4" />
            </g>
            <g transform="translate(200,175)" stroke="currentColor" strokeWidth="0.8" opacity="0.7">
              <line x1="-10" y1="0" x2="10" y2="0" />
              <line x1="0" y1="-14" x2="0" y2="0" />
              <circle cx="0" cy="-16" r="2" />
              <path d="M-10 0 L-16 10 L-4 10 Z" />
              <path d="M10 0 L4 10 L16 10 Z" />
            </g>
          </svg>
        </div>

        <div className="mt-4 grid gap-3 text-xs md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Você descreve o caso</p>
            <p className="mt-1 text-slate-100">
              "Meu cliente tem dívida bancária prescrita sendo cobrada por empresa de recuperação de crédito."
            </p>
          </div>
          <div className="rounded-2xl border border-blue-500/40 bg-blue-500/5 p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-blue-200">A IA responde com estratégia</p>
            <p className="mt-1 text-slate-100">
              Teses por polo, tendência de voto, legislação aplicada e doutrina citada — em segundos.
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <span>Zero acórdãos inventados — 100% baseado no STJ</span>
          <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
            1.000.000+ acórdãos
          </span>
        </div>
      </div>
    </section>
  );
}
