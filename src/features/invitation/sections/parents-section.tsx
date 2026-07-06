import type { Locale } from "@/data/invitation";
import { invitationContent } from "@/data/invitation";
import { Heart } from "lucide-react";
import { PilotsAirplane } from "@/features/invitation/components/airplane-illustrations";

interface ParentsSectionProps {
  locale: Locale;
}

export function ParentsSection({ locale }: ParentsSectionProps) {
  const content = invitationContent[locale];

  return (
    <section className="glass-card rounded-[2.2rem] p-6 md:p-8 space-y-6 shadow-[0_20px_50px_rgba(2,132,199,0.06)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
          <Heart className="h-4.5 w-4.5 fill-sky-200" />
        </span>
        <h2 className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
          {content.parentsTitle}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] items-center">
        {/* Adorable Mom & Dad Airplane Illustration */}
        <div className="relative aspect-square flex items-center justify-center rounded-[2rem] bg-gradient-to-b from-sky-50/50 to-white/90 border border-sky-100/40 p-4 shadow-[inset_0_2px_4px_rgba(56,189,248,0.03)] overflow-hidden">
          <PilotsAirplane size={175} className="plane-float" />
        </div>

        {/* Text Area */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-slate-400">
              {content.parentsPhotosTitle}
            </p>
            <h3 className="font-display text-2xl font-black text-slate-800">
              {content.parentsSubtitle}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 font-medium">
            {content.parentsPhotosCaption}
          </p>

          {/* Special Flight Phrases - Joyful copy from data */}
          <div className="pt-2 grid gap-3">
            <div className="p-4 rounded-2xl bg-white/70 border border-sky-100/30 text-xs md:text-sm font-semibold text-sky-800 leading-relaxed shadow-sm">
              <span className="text-sky-400 mr-1.5">✦</span>
              {content.phraseTwo}
            </div>
            <div className="p-4 rounded-2xl bg-white/70 border border-sky-100/30 text-xs md:text-sm font-semibold text-sky-800 leading-relaxed shadow-sm">
              <span className="text-sky-400 mr-1.5">✦</span>
              {content.phraseThree}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ParentsSection;
