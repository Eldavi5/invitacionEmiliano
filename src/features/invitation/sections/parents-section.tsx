"use client";

import { invitationContent } from "@/data/invitation";
import { Heart, Baby, Sparkles } from "lucide-react";

export function ParentsSection() {
  const content = invitationContent;

  return (
    <section className="glass-card rounded-[2.2rem] p-6 md:p-8 space-y-6 shadow-[0_20px_50px_rgba(2,132,199,0.06)] border border-white/80">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
          <Heart className="h-4.5 w-4.5 fill-sky-200" />
        </span>
        <h2 className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
          {content.parentsTitle}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] items-center">
        {/* Family Photo */}
        <div className="relative aspect-square flex items-center justify-center rounded-[2rem] border border-sky-100/40 shadow-md overflow-hidden bg-sky-50">
          <img
            src="/images/emiliano_familia.jpg"
            alt="Emiliano, Papás y Madrina"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Family names card */}
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-slate-400">
              Padrinos y Padres
            </p>
            <h3 className="font-display text-2xl font-black text-slate-800">
              Nuestros Guías de Amor
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 font-medium">
            {content.phraseThree}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Parents block */}
            <div className="p-4 rounded-2xl bg-white/70 border border-sky-100/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-sky-700">
                <Baby className="h-4 w-4 text-sky-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Mis Papás</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-800">{content.parents.dad}</p>
                <p className="text-sm font-black text-slate-800">{content.parents.mom}</p>
              </div>
            </div>

            {/* Godmother block */}
            <div className="p-4 rounded-2xl bg-white/70 border border-sky-100/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-sky-700">
                <Sparkles className="h-4 w-4 text-sky-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Mi Madrina</span>
              </div>
              <p className="text-sm font-black text-slate-800">{content.parents.godmother}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParentsSection;
