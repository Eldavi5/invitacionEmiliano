"use client";

import { useEffect, useMemo, useState } from "react";
import { invitationContent } from "@/data/invitation";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdownParts(targetDate: Date): CountdownParts {
  const difference = Math.max(targetDate.getTime() - Date.now(), 0);
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export function CountdownCard() {
  const content = invitationContent;
  const targetDate = useMemo(() => new Date("2026-09-19T13:00:00"), []);
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState<CountdownParts>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setCountdown(getCountdownParts(targetDate));
    setMounted(true);

    const interval = window.setInterval(() => {
      setCountdown(getCountdownParts(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: content.countdown.days, value: countdown.days },
    { label: content.countdown.hours, value: countdown.hours },
    { label: content.countdown.minutes, value: countdown.minutes },
    { label: content.countdown.seconds, value: countdown.seconds }
  ];

  if (!mounted) {
    return (
      <div className="relative w-full">
        {/* Leaning Boss Baby on the left (Refined from user's new image) */}
        <img
          src="/images/bebe_countdown_final.png"
          alt="Jefe Emiliano recargado"
          className="absolute -left-10 -top-12 md:-left-12 md:-top-14 z-10 w-22 md:w-26 object-contain pointer-events-none drop-shadow-[0_6px_12px_rgba(2,132,199,0.15)]"
        />

        <div className="rounded-3xl glass-card-blue p-4 pl-14 pr-6 text-center shadow-md border border-white/80 animate-pulse">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.35em] text-sky-700/60">
            {content.countdown.title}
          </p>
          <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate-400">
            {content.countdown.subtitle}
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-white/50 p-2 shadow-sm border border-sky-100/10">
                <p className="text-lg font-black text-slate-300">00</p>
                <div className="mx-auto h-2 w-8 rounded bg-sky-200/40 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Leaning Boss Baby on the left (Refined from user's new image) */}
      <img
        src="/images/bebe_countdown_final.png"
        alt="Jefe Emiliano recargado"
        className="absolute -left-10 -top-12 md:-left-12 md:-top-14 z-10 w-22 md:w-26 object-contain pointer-events-none drop-shadow-[0_6px_12px_rgba(2,132,199,0.15)] animate-[pulse_4s_ease-in-out_infinite]"
      />

      <div className="rounded-3xl glass-card-blue p-4 pl-14 pr-6 text-center shadow-[0_12px_45px_-10px_rgba(125,211,252,0.14)] border border-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(125,211,252,0.22)]">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-sky-700">
          {content.countdown.title}
        </p>
        <p className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-slate-500">
          {content.countdown.subtitle}
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {items.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/70 p-2 shadow-sm border border-white/80">
              <p className="text-lg font-black text-slate-800 leading-tight">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-sky-700 mt-0.5">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountdownCard;
