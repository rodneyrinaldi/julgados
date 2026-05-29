"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/40">
            <span className="text-xs font-semibold tracking-tight text-blue-200">STJ</span>
            <svg
              className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 text-blue-500/30"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="0.8" />
              <path d="M10 18L16 8L22 18L16 24L10 18Z" stroke="currentColor" strokeWidth="0.8" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">julgados.adv.br</span>
            <span className="text-[11px] text-slate-400">Especializado em STJ</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-50">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="#planos" className="text-xs font-medium text-slate-300 hover:text-slate-50">
            Ver planos
          </a>
          <a
            href="#cta-final"
            className="rounded-full bg-blue-500 px-4 py-2 text-xs text-white font-semibold tracking-tight text-slate-950 hover:bg-blue-400"
          >
            Começar grátis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700 p-2 text-slate-200 md:hidden"
          aria-label="Abrir menu"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm text-slate-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href="#planos"
                className="flex-1 rounded-full border border-slate-700 px-3 py-2 text-center text-xs font-medium"
              >
                Ver planos
              </a>
              <a
                href="#cta-final"
                className="flex-1 rounded-full bg-blue-500 px-3 py-2 text-center text-xs font-semibold text-slate-950"
              >
                Começar grátis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
