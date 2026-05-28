import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { Diferenca } from "@/components/sections/Diferenca";
import { Comparativo } from "@/components/sections/Comparativo";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Planos } from "@/components/sections/Planos";
import { Confianca, Testimonials } from "@/components/sections/Confianca";
import { FAQ } from "@/components/sections/FAQ";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function JulgadosPage() {
  return (
    <div className="bg-slate-950 text-slate-50 antialiased min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:pt-16">
        <Hero />
        <Diferenca />
        <Comparativo />
        <ComoFunciona />
        <Planos />
        <Confianca />
        <Testimonials />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
