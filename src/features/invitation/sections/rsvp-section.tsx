"use client";

import { useMemo, useState } from "react";
import { invitationContent } from "@/data/invitation";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircleMore, PhoneCall, Plus, Minus, User, Users, MessageSquareText } from "lucide-react";

type ConfirmType = "individual" | "family";

export function RSVPSection() {
  const content = invitationContent;
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

  const handleTypeChange = (type: ConfirmType) => {
    setConfirmType(type);
    if (type === "individual") {
      setGuestCount(1);
    } else {
      setGuestCount(2);
    }
  };

  // Boss Baby / Baptism themed WhatsApp message
  const whatsappMessage = useMemo(() => {
    const displayName = name.trim() || content.rsvp.defaultFamily;
    const typeLabel = confirmType === "individual" ? "Pase Individual" : "Pase Familiar";

    let msg = `🍼 *¡Hola papás de Emiliano!*\n\nMe hace muy feliz confirmar mi asistencia para el Bautizo y Primer Añito de Emiliano 👶👑\n\n✨ *Detalles de Confirmación:*\n• Tipo de Pase: ${typeLabel}\n• Nombre del Invitado: ${displayName}\n• Pases Reservados: ${guestCount} ${guestCount === 1 ? "pase" : "pases"}`;
    if (customNote.trim()) {
      msg += `\n\n💌 *Mensaje con cariño:*\n"${customNote.trim()}"`;
    }
    msg += `\n\n¡Nos vemos pronto para celebrar juntos! 🎂🎈`;
    return msg;
  }, [confirmType, name, guestCount, customNote, content.rsvp.defaultFamily]);

  const whatsappLink = buildWhatsAppLink(content.rsvp.phone, whatsappMessage);

  return (
    <section className="glass-card rounded-[2.5rem] p-6 md:p-8 space-y-6 shadow-[0_20px_50px_rgba(2,132,199,0.06)] border border-white/80">
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
              ¿Cómo confirmarás tu asistencia?
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
                Individual
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
                Grupo / Familia
              </button>
            </div>
          </div>

          {/* Name Input */}
          <div className="space-y-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-sky-700 block">
              {confirmType === "individual"
                ? "Nombre Completo del Invitado"
                : content.rsvp.familyLabel}
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={
                confirmType === "individual"
                  ? "Ej. Sofía Pérez"
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

          {/* Custom Note */}
          <div className="space-y-2">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-sky-700 flex items-center gap-1.5">
              <MessageSquareText className="h-4 w-4 text-sky-500" />
              Mensaje especial
            </span>
            <textarea
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Escribe tus buenos deseos o bendiciones para Emiliano..."
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
              <MessageCircleMore className="h-5 w-5 animate-pulse" />
              {content.rsvp.submit}
            </a>
            
            <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-100 bg-white/80 px-5 py-4 text-xs font-bold text-slate-700 shadow-sm">
              <PhoneCall className="h-4 w-4 text-sky-700 shrink-0" />
              {content.rsvp.phone}
            </div>
          </div>
        </div>

        {/* Live Chat Bubble Preview with Pointing Boss Baby */}
        <div className="relative min-h-[350px] flex flex-col">
          <div className="glass-card rounded-[2rem] p-5 pb-20 flex-1 flex flex-col justify-between shadow-[0_20px_50px_rgba(2,132,199,0.06)] overflow-hidden border border-white/80">
            <div className="space-y-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-slate-400">
                Mensaje Generado
              </p>

              {/* Smart Simulated Chat Bubble - Shifted left */}
              <div className="relative rounded-[1.6rem] bg-[#E2F6DD] border border-[#C6EDB8] p-4 text-slate-800 shadow-sm text-xs leading-relaxed max-w-[220px] sm:max-w-[250px] mr-auto ml-1 font-medium z-20">
                <div className="whitespace-pre-line font-sans">
                  {whatsappMessage}
                </div>
                
                {/* WhatsApp bubble triangle pin on the left */}
                <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-[#E2F6DD] border-l-[8px] border-l-transparent" />
              </div>
            </div>

            <p className="text-[0.65rem] font-semibold text-slate-400 mt-6 text-left max-w-[180px] z-20 leading-relaxed">
              Este mensaje se abrirá en tu WhatsApp listo para enviarse.
            </p>
          </div>
          
          {/* Pointing Boss Baby from User's template */}
          <img
            src="/images/jefe_confirmacion_final.png"
            alt="Jefe Presentando Confirmación"
            className="absolute bottom-[-10px] right-[-10px] z-10 w-32 md:w-40 object-contain pointer-events-none drop-shadow-[0_12px_24px_rgba(2,132,199,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}

export default RSVPSection;
