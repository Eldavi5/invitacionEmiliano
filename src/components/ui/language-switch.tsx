"use client";

import type { Locale } from "@/data/invitation";

interface LanguageSwitchProps {
  locale: Locale;
  onToggle: () => void;
  label: string;
}

export function LanguageSwitch({ locale, onToggle, label }: LanguageSwitchProps) {
  const isSpanish = locale === "es";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/92 p-1.5 pr-4 text-xs font-bold text-slate-700 shadow-[0_12px_32px_rgba(56,189,248,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white active:scale-95 cursor-pointer outline-none select-none"
      aria-label={label}
    >
      {/* Slider track */}
      <span className={`relative flex h-8 w-15 shrink-0 items-center rounded-full p-0.5 transition-colors duration-300 ${isSpanish ? "bg-sky-600" : "bg-sky-400"}`}>
        {/* Sliding Paper Airplane Handle */}
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-out transform ${
            isSpanish ? "translate-x-0" : "translate-x-7"
          } group-hover:scale-105`}
        >
          {/* Paper Airplane vector */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sky-700 transition-transform duration-300 group-hover:rotate-[15deg]"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </span>
      </span>

      {/* Language Labels */}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.62rem] uppercase tracking-[0.3em] text-slate-400 font-bold">
          {isSpanish ? "Idioma" : "Language"}
        </span>
        <span className="mt-0.5 text-xs font-black text-slate-800 tracking-wider">
          {isSpanish ? "ES" : "EN"}
          <span className="mx-1 text-slate-300 font-normal">/</span>
          <span className="text-slate-400 font-semibold">{isSpanish ? "EN" : "ES"}</span>
        </span>
      </span>
    </button>
  );
}
export default LanguageSwitch;
