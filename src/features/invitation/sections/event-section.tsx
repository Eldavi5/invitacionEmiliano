import type { Locale } from "@/data/invitation";
import { invitationContent } from "@/data/invitation";
import { CalendarDays, MapPin, MapPinned, PartyPopper } from "lucide-react";
import { FlightFootprints } from "@/features/invitation/components/airplane-illustrations";

interface EventSectionProps {
  locale: Locale;
}

export function EventSection({ locale }: EventSectionProps) {
  const content = invitationContent[locale];
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.event.mapsQuery)}`;

  return (
    <section className="space-y-6">
      {/* Flight trail divider at the top */}
      <FlightFootprints size={40} className="mb-2 opacity-85 animate-[pulse_3s_ease-in-out_infinite]" />

      <div className="max-w-3xl text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
          {content.eventTitle}
        </p>
        <h2 className="mt-1 font-display text-3xl font-black text-slate-800 md:text-4xl">
          {content.eventSubtitle}
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 font-medium">
          {content.eventNote}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Quick Details Cards */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {/* Date Card */}
          <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
              <CalendarDays className="h-5.5 w-5.5" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
              {content.eventLabels.date}
            </p>
            <p className="mt-1.5 text-base font-black text-slate-800 leading-tight">
              {content.event.date}
            </p>
          </div>

          {/* Time Card */}
          <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
              <PartyPopper className="h-5.5 w-5.5" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
              {content.eventLabels.time}
            </p>
            <p className="mt-1.5 text-base font-black text-slate-800 leading-tight">
              {content.event.time}
            </p>
          </div>

          {/* Location Card */}
          <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
              <MapPin className="h-5.5 w-5.5" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
              {content.eventLabels.location}
            </p>
            <p className="mt-1.5 text-base font-black text-slate-800 leading-tight">
              {content.event.location}
            </p>
          </div>
        </div>

        {/* Location Map Preview Panel */}
        <div className="glass-card rounded-[2.2rem] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(2,132,199,0.06)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <MapPinned className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-black text-slate-800">
                {content.locationImageTitle}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              {content.locationImageCaption}
            </p>

            {/* Creative visual representation of a map with a landing pin */}
            <div className="relative overflow-hidden rounded-[1.6rem] border border-sky-100 bg-sky-50/40 p-4 aspect-[1.8/1] flex items-center justify-center">
              {/* Map grid decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40" />
              {/* Flight vectors decorative lines */}
              <svg className="absolute inset-0 h-full w-full stroke-sky-200/50" fill="none">
                <path d="M-10 40 Q 60 80 120 20 T 300 120" strokeWidth="6" />
                <path d="M50 -10 L 150 180" strokeWidth="4" />
                <path d="M120 -10 L 80 180" strokeWidth="3" />
              </svg>
              
              {/* Glowing Airplane Landing Center */}
              <div className="relative flex flex-col items-center">
                <span className="absolute -top-12 animate-bounce flex flex-col items-center">
                  {/* Little map pin airplane */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg border-2 border-white text-base">
                    ✈️
                  </span>
                  <span className="w-0.5 h-3.5 bg-sky-700" />
                </span>
                <span className="h-3.5 w-11 rounded-full bg-sky-950/15 blur-[2px] mt-6 animate-pulse" />
              </div>
            </div>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-700 px-6 py-4 font-bold text-white shadow-lg shadow-sky-700/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-xl hover:shadow-sky-700/25 cursor-pointer text-center text-sm tracking-wide"
          >
            <MapPinned className="h-4.5 w-4.5" />
            {content.mapsButton}
          </a>
        </div>
      </div>
    </section>
  );
}
export default EventSection;
