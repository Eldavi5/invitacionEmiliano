"use client";

import { invitationContent } from "@/data/invitation";
import { CalendarDays, MapPin, MapPinned, PartyPopper } from "lucide-react";

export function EventSection() {
  const content = invitationContent;

  const churchMapsHref = content.event.churchMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.event.churchMapsQuery)}`;
  const salonMapsHref = content.event.salonMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.event.salonMapsQuery)}`;

  return (
    <section className="space-y-8">
      <div className="max-w-3xl text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
          Detalles del Evento
        </p>
        <h2 className="mt-1 font-display text-3xl font-black text-slate-800 md:text-4xl">
          ¿Dónde y Cuándo?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 font-medium">
          {content.phraseTwo}
        </p>
      </div>

      {/* Main date banner card (Full width date indicator) */}
      <div className="glass-card glass-card-hover p-6 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-md">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100/80 text-sky-700">
          <CalendarDays className="h-6 w-6" />
        </div>
        <div className="text-center sm:text-left flex-1">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-sky-700">
            {content.eventLabels.date}
          </p>
          <p className="mt-1 text-lg md:text-xl font-black text-slate-800">
            {content.event.date}
          </p>
        </div>
        <span className="text-[0.62rem] font-bold text-sky-700 tracking-wider bg-sky-50 border border-sky-100/50 px-4 py-2 rounded-full uppercase">
          Salva la fecha
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 1. MISA CARD */}
        <div className="glass-card rounded-[2.2rem] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(2,132,199,0.06)] border border-white/80">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <PartyPopper className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-black text-slate-800">
                {content.eventLabels.churchTime}
              </h3>
            </div>
            
            <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/30">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Hora Misa</span>
              <p className="text-xl font-black text-slate-800 mt-0.5">{content.event.churchTime}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4.5 w-4.5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-slate-850">{content.event.churchName}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mt-0.5">{content.event.churchAddress}</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed iframe */}
            <div className="relative overflow-hidden rounded-[1.6rem] border border-sky-100/50 aspect-[1.8/1] flex items-center justify-center bg-sky-50 shadow-inner">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(content.event.churchMapsQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="absolute border-0 opacity-95 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Church Location Map"
              />
              <div className="absolute inset-0 z-0 bg-transparent" />
            </div>
          </div>

          <a
            href={churchMapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-750 px-6 py-3.5 font-bold text-white bg-sky-700 shadow-md transition-all duration-350 hover:-translate-y-0.5 hover:bg-sky-850 cursor-pointer text-center text-xs tracking-wide uppercase"
          >
            <MapPinned className="h-4 w-4" />
            {content.mapsButton}
          </a>
        </div>

        {/* 2. SALON CARD */}
        <div className="glass-card rounded-[2.2rem] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(2,132,199,0.06)] border border-white/80">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <PartyPopper className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-lg font-black text-slate-800">
                {content.eventLabels.salonTime}
              </h3>
            </div>

            <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100/30">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Hora Fiesta</span>
              <p className="text-xl font-black text-slate-800 mt-0.5">{content.event.salonTime}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4.5 w-4.5 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-slate-850">{content.event.salonName}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mt-0.5">{content.event.salonAddress}</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed iframe */}
            <div className="relative overflow-hidden rounded-[1.6rem] border border-sky-100/50 aspect-[1.8/1] flex items-center justify-center bg-sky-50 shadow-inner">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(content.event.salonMapsQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="absolute border-0 opacity-95 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Salon Location Map"
              />
              <div className="absolute inset-0 z-0 bg-transparent" />
            </div>
          </div>

          <a
            href={salonMapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-750 px-6 py-3.5 font-bold text-white bg-sky-700 shadow-md transition-all duration-350 hover:-translate-y-0.5 hover:bg-sky-850 cursor-pointer text-center text-xs tracking-wide uppercase"
          >
            <MapPinned className="h-4 w-4" />
            {content.mapsButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
