"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/data/invitation";
import { invitationContent } from "@/data/invitation";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircleMore, PhoneCall, Plus, Minus, User, Users, MessageSquareText, PlaneTakeoff } from "lucide-react";

interface RSVPSectionProps {
  locale: Locale;
}

type ConfirmType = "individual" | "family";

export function RSVPSection({ locale }: RSVPSectionProps) {
  const content = invitationContent[locale];
  const [confirmType, setConfirmType] = useState<ConfirmType>("family");
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const [customNote, setCustomNote] = useState("");

  const handleIncrement = () => {
    setGuestCount((prev) => Math.min(prev + 1, 10));
  };

  const handleDecrement = () => {
    setGuestCount((prev) => Math.max(prev - 1, 1));
  };

  // Adjust guest count based on selection type
  const handleTypeChange = (type: ConfirmType) => {
    setConfirmType(type);
    if (type === "individual") {
      setGuestCount(1);
    } else {
      setGuestCount(2);
    }
  };

  // Modernized, cheerful, and flight-themed WhatsApp confirmation message
  const whatsappMessage = useMemo(() => {
    const displayName = name.trim() || content.rsvp.defaultFamily;
    const typeLabel = confirmType === "individual"
      ? (locale === "es" ? "Pasajero Individual" : "Single Passenger")
      : (locale === "es" ? "Grupo Familiar" : "Family Group");

    if (locale === "es") {
      let msg = `✈️ *¡Hola Capitanes Omar y Mónica!*\n\nMe hace muy feliz confirmar mi boleto de abordaje para el Vuelo de Santiago 🎫☁️\n\n✨ *Detalles del Vuelo:*\n• Categoría: ${typeLabel}\n• Nombre del Pasajero: ${displayName}\n• Asientos Reservados: ${guestCount} ${guestCount === 1 ? "asiento" : "asientos"}`;
      if (customNote.trim()) {
        msg += `\n\n💌 *Mensaje para la bitácora:*\n"${customNote.trim()}"`;
      }
      msg += `\n\n¡Qué emoción abordar pronto para festejar juntos! 🛫💙`;
      return msg;
    } else {
      let msg = `✈️ *Hello Captains Omar and Monica!*\n\nI am thrilled to confirm my boarding pass for Santiago's Flight 🎫☁️\n\n✨ *Flight Details:*\n• Category: ${typeLabel}\n• Passenger Name: ${displayName}\n• Seats Reserved: ${guestCount} ${guestCount === 1 ? "seat" : "seats"}`;
      if (customNote.trim()) {
        msg += `\n\n💌 *Message for the logbook:*\n"${customNote.trim()}"`;
      }
      msg += `\n\nCan't wait to board soon and celebrate together! 🛫💙`;
      return msg;
    }
  }, [confirmType, name, guestCount, customNote, locale, content.rsvp.defaultFamily]);

  const whatsappLink = buildWhatsAppLink(content.rsvp.phone, whatsappMessage);

  return (
    <section className="glass-card rounded-[2.5rem] p-6 md:p-8 space-y-6 shadow-[0_20px_50px_rgba(2,132,199,0.06)]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700 block">
          {content.rsvp.title}
        </p>
        <h2 className="mt-1 font-display text-3xl font-black text-slate-800 md:text-4xl">
          {content.rsvp.heading}
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 font-medium">
          {content.rsvp.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Interactive RSVP Form */}
        <div className="space-y-5 rounded-[2rem] bg-sky-50/40 border border-sky-100/30 p-5 md:p-6">
          {/* Confirmation Type Toggle */}
          <div className="space-y-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-sky-700 block">
              {locale === "es" ? "¿Cómo confirmarás tu vuelo?" : "How will you confirm your flight?"}
            </span>
            <div className="grid grid-cols-2 gap-2.5 p-1 rounded-2xl bg-white/70 border border-sky-100/30">
              <button
                type="button"
                onClick={() => handleTypeChange("individual")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs md:text-sm transition-all cursor-pointer ${
                  confirmType === "individual"
                    ? "bg-sky-700 text-white shadow-md"
                    : "text-slate-600 hover:text-sky-700 hover:bg-sky-50/50"
                }`}
              >
                <User className="h-4 w-4" />
                {locale === "es" ? "Individual" : "Individual"}
              </button>
              <button
                type="button"
                onClick={() => handleTypeChange("family")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs md:text-sm transition-all cursor-pointer ${
                  confirmType === "family"
                    ? "bg-sky-700 text-white shadow-md"
                    : "text-slate-600 hover:text-sky-700 hover:bg-sky-50/50"
                }`}
              >
                <Users className="h-4 w-4" />
                {locale === "es" ? "Grupo / Familia" : "Group / Family"}
              </button>
            </div>
          </div>

          {/* Name Input */}
          <div className="space-y-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-sky-700 block">
              {confirmType === "individual"
                ? (locale === "es" ? "Nombre Completo del Pasajero" : "Full Passenger Name")
                : content.rsvp.familyLabel}
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={
                confirmType === "individual"
                  ? (locale === "es" ? "Ej. Sofía Pérez" : "Ex. Sofia Perez")
                  : content.rsvp.familyPlaceholder
              }
              className="w-full rounded-2xl px-4 py-3 text-sm text-slate-800 outline-none glass-input font-medium"
            />
          </div>

          {/* Seat Counter Buttons */}
          {confirmType === "family" && (
            <div className="space-y-2">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-sky-700 block">
                {content.rsvp.peopleLabel}
              </span>
              <div className="flex items-center gap-4 p-2 rounded-2xl bg-white/70 border border-sky-100/30 max-w-[200px] justify-between">
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={guestCount <= 2}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 border border-sky-100 hover:bg-sky-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-base font-black text-slate-800">
                  {guestCount}
                </span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  disabled={guestCount >= 8}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700 border border-sky-100 hover:bg-sky-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Custom Flight Note */}
          <div className="space-y-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-sky-700 flex items-center gap-1.5">
              <MessageSquareText className="h-4 w-4 text-sky-500" />
              {locale === "es" ? "Mensaje especial para la bitácora" : "Special message for the logbook"}
            </span>
            <textarea
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder={
                locale === "es"
                  ? "Escribe tus buenos deseos o bendiciones para el viaje de Santiago y sus papás..."
                  : "Write your warm wishes or blessings for Santiago's flight..."
              }
              rows={2}
              className="w-full rounded-2xl px-4 py-3 text-sm text-slate-800 outline-none glass-input font-medium resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-sky-700 px-6 py-4 font-bold text-white shadow-lg shadow-sky-700/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-xl hover:shadow-sky-700/20 cursor-pointer text-center text-sm"
            >
              <PlaneTakeoff className="h-5 w-5 animate-pulse" />
              {content.rsvp.submit}
            </a>
            
            <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-5 py-4 text-xs font-bold text-slate-700 shadow-sm">
              <PhoneCall className="h-4 w-4 text-sky-700 shrink-0" />
              {content.rsvp.phone}
            </div>
          </div>
        </div>

        {/* Live Chat Bubble Preview */}
        <div className="glass-card rounded-[2rem] p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(2,132,199,0.06)] overflow-hidden">
          <div className="space-y-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-slate-400">
              {locale === "es" ? "Pase de Abordar Generado" : "Generated Boarding Confirmation"}
            </p>

            {/* Smart Simulated Chat Bubble */}
            <div className="relative rounded-[1.6rem] bg-[#E2F6DD] border border-[#C6EDB8] p-4 text-slate-800 shadow-sm text-xs leading-relaxed max-w-sm mx-auto font-medium">
              <div className="whitespace-pre-line font-sans">
                {whatsappMessage}
              </div>
              
              {/* WhatsApp bubble triangle pin */}
              <div className="absolute right-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-[#E2F6DD] border-r-[8px] border-r-transparent" />
            </div>
          </div>

          <p className="text-[0.65rem] font-semibold text-slate-400 mt-6 text-center">
            {locale === "es"
              ? "Este mensaje abrirá tu pase de abordar directamente en tu WhatsApp para enviarlo con un solo toque."
              : "This message will open your boarding pass directly on your WhatsApp for one-tap sending."}
          </p>
        </div>
      </div>
    </section>
  );
}
export default RSVPSection;
