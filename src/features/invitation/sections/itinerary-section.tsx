"use client";

import { invitationContent } from "@/data/invitation";
import {
  ChurchIllustration,
  WelcomeIllustration,
  FoodIllustration,
  ShowIllustration,
  CakeIllustration,
  DismissIllustration
} from "../components/boss-baby-illustrations";

export function ItinerarySection() {
  const content = invitationContent;

  const getIcon = (type: string) => {
    switch (type) {
      case "church":
        return <ChurchIllustration className="h-6 w-6 text-sky-700 animate-pulse" />;
      case "welcome":
        return <WelcomeIllustration className="h-6 w-6 text-sky-700" />;
      case "food":
        return <FoodIllustration className="h-6 w-6 text-sky-700" />;
      case "show":
        return <ShowIllustration className="h-6 w-6 text-sky-700" />;
      case "cake":
        return <CakeIllustration className="h-6 w-6 text-sky-700" />;
      case "dismiss":
        return <DismissIllustration className="h-6 w-6 text-sky-700" />;
      default:
        return <WelcomeIllustration className="h-6 w-6 text-sky-700" />;
    }
  };

  return (
    <section className="space-y-6">
      <div className="max-w-3xl text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
          {content.itineraryTitle}
        </p>
        <h2 className="mt-1 font-display text-3xl font-black text-slate-800 md:text-4xl">
          {content.itinerarySubtitle}
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-sky-100 ml-4 md:ml-6 pl-6 md:pl-8 py-2 space-y-8 max-w-3xl">
        {content.itinerary.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot with Icon inside */}
            <span className="absolute -left-[45px] md:-left-[53px] top-0 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white border border-sky-100 shadow-[0_8px_16px_rgba(2,132,199,0.06)] z-10 transition-all duration-300 hover:scale-110">
              {getIcon(item.iconType)}
            </span>

            {/* Content card */}
            <div className="glass-card glass-card-hover p-5 rounded-[1.6rem] relative">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-xs font-bold text-sky-700 tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100/50">
                  {item.time}
                </span>
                <span className="text-[0.62rem] font-bold text-slate-400 uppercase tracking-widest">
                  Paso {index + 1}
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg font-black text-slate-800">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItinerarySection;
