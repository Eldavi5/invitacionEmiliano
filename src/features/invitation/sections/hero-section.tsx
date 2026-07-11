"use client";

import { invitationContent } from "@/data/invitation";
import { CountdownCard } from "@/components/ui/countdown-card";
import { CrownIcon } from "../components/boss-baby-illustrations";

export function HeroSection() {
  const content = invitationContent;

  return (
    <section className="relative overflow-hidden rounded-[2.8rem] border border-white/70 bg-gradient-to-br from-white/80 via-sky-50/50 to-white/80 px-6 py-12 shadow-[0_24px_70px_-15px_rgba(2,132,199,0.12)] backdrop-blur-md md:px-10 md:py-16">
      {/* Decorative background glows */}
      <div className="absolute right-[-10%] top-[-10%] h-48 w-48 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] h-40 w-40 rounded-full bg-blue-100/30 blur-3xl" />
      
      <div className="relative mx-auto max-w-3xl text-center flex flex-col items-center">
        {/* Crown welcoming Emiliano's baptism and first year */}
        <div className="mb-6 animate-[bounce_3s_ease-in-out_infinite]">
          <CrownIcon size={100} className="filter drop-shadow-md" />
        </div>

        {/* Welcome Pill */}
        <p className="inline-flex rounded-full border border-sky-100/70 bg-white/90 px-4.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.38em] text-sky-700 shadow-[0_4px_12px_rgba(2,132,199,0.06)]">
          {content.heroPill}
        </p>

        {/* Invitation Title */}
        <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-slate-800 md:text-5xl lg:text-6xl max-w-2xl leading-[1.15]">
          {content.hostName}
        </h1>

        {/* Emotional Greeting Message */}
        <p className="mx-auto mt-6 max-w-xl text-sm md:text-base leading-relaxed text-slate-600 font-medium">
          {content.message}
        </p>

        {/* Beautiful Boss Baby theme quote */}
        <p className="mx-auto mt-4 max-w-lg text-xs md:text-sm italic leading-relaxed text-sky-600/80 font-bold">
          "{content.phrase}"
        </p>

        {/* Countdown - Centered and highlighted */}
        <div className="mt-20 w-full max-w-md">
          <CountdownCard />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
