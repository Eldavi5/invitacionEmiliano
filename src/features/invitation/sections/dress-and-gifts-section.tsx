"use client";

import { invitationContent } from "@/data/invitation";
import { SunglassesIcon, BriefcaseIcon } from "../components/boss-baby-illustrations";
import { Sparkles, HelpingHand } from "lucide-react";

export function DressAndGiftsSection() {
  const content = invitationContent;

  return (
    <section className="grid gap-8 md:grid-cols-2">
      {/* 1. Dress Code Panel */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
            {content.dressCode.title}
          </p>
          <h3 className="mt-1 font-display text-2xl font-black text-slate-800">
            {content.dressCode.description}
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Card 1: Ropa Clara */}
          <div className="glass-card glass-card-hover p-5 rounded-[1.8rem] flex flex-col justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 border border-sky-100 text-sky-700">
              <Sparkles className="h-5 w-5 text-sky-500 animate-pulse" />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-black text-slate-800">
                {content.dressCode.wearLabel}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                {content.dressCode.wearDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Evitar Colores Oscuros */}
          <div className="glass-card glass-card-hover p-5 rounded-[1.8rem] flex flex-col justify-between border-red-100/50">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
              <SunglassesIcon size={26} className="text-slate-800" />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-black text-slate-800">
                {content.dressCode.avoidLabel}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                {content.dressCode.avoidDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gifts Panel */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
            {content.gifts.title}
          </p>
          <h3 className="mt-1 font-display text-2xl font-black text-slate-800">
            {content.gifts.description}
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Card 1: Presencia es lo mejor */}
          <div className="glass-card glass-card-hover p-5 rounded-[1.8rem] flex flex-col justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 border border-sky-100 text-sky-700">
              <HelpingHand className="h-5 w-5 text-sky-600" />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-black text-slate-800">
                {content.gifts.presenceLabel}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                {content.gifts.presenceDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Lluvia de sobres */}
          <div className="glass-card glass-card-hover p-5 rounded-[1.8rem] flex flex-col justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 border border-amber-100 text-amber-700">
              <BriefcaseIcon size={26} className="text-slate-700" />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-black text-slate-800">
                {content.gifts.envelopeLabel}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                {content.gifts.envelopeDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressAndGiftsSection;
