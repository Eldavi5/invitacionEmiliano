"use client";

import { useState, useRef, useEffect } from "react";
import { SkyBackground } from "@/components/ui/sky-background";
import { MusicDock } from "@/components/ui/music-dock";
import { Reveal } from "@/components/ui/reveal";

// Redesigned Sections
import { HeroSection } from "@/features/invitation/sections/hero-section";
import { EventSection } from "@/features/invitation/sections/event-section";
import { ItinerarySection } from "@/features/invitation/sections/itinerary-section";
import { ParentsSection } from "@/features/invitation/sections/parents-section";
import { DressAndGiftsSection } from "@/features/invitation/sections/dress-and-gifts-section";
import { MemoryCarousel } from "@/features/invitation/components/memory-carousel";
import { RSVPSection } from "@/features/invitation/sections/rsvp-section";

import { invitationContent } from "@/data/invitation";
import { useBackgroundMusic } from "@/hooks/use-background-music";
import { Volume2, Play, ChevronRight } from "lucide-react";

export function InvitationPage() {
  const content = invitationContent;
  const { play } = useBackgroundMusic();
  
  // Intro video states
  const [hasStarted, setHasStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video with audio after user interaction (Splash Click)
  const handleStartInvitation = () => {
    setHasStarted(true);
    // Play video
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video play failed", err);
      });
    }
  };

  // Exit video intro and start background music
  const handleEnterInvitation = () => {
    // Stop video playback if active
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowVideo(false);
    // Auto play background invitation music
    play();
  };

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-800 pb-20">
      {/* -----------------
          FULL SCREEN INTRO VIDEO OVERLAY
          ----------------- */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe] flex flex-col items-center justify-center overflow-hidden">
          
          {/* Welcome Splash Screen (Before playing video to bypass browser autoplay blocks) */}
          {!hasStarted && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#e0f2fe] via-white to-[#f0f9ff]">
              <div className="absolute inset-0 bg-sky-200/20 blur-[120px] pointer-events-none" />
              
              {/* Premium Envelope/Invitation card */}
              <div className="w-full max-w-sm rounded-[2.5rem] bg-white/70 border border-white/90 p-8 text-center shadow-[0_24px_70px_rgba(2,132,199,0.12)] backdrop-blur-xl animate-[pulse_6s_ease-in-out_infinite]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700 mb-4 animate-[bounce_3s_infinite]">
                  👑
                </span>
                
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.38em] text-sky-700">
                  Baby Corp presenta
                </p>
                <h1 className="mt-2 font-display text-2xl font-black text-slate-800 tracking-tight">
                  La Invitación Ejecutiva
                </h1>
                <p className="mt-3 text-xs leading-relaxed text-slate-500 font-medium">
                  Estás convocado a la gran junta directiva por el Bautizo y Primer Añito de Emiliano.
                </p>
                
                {/* Volume suggestion flag */}
                <div className="mt-5 flex items-center justify-center gap-1.5 text-[0.68rem] text-slate-400 font-bold uppercase tracking-wider">
                  <Volume2 className="h-4 w-4 text-sky-500 shrink-0" />
                  Activa el audio para la experiencia
                </div>

                <button
                  type="button"
                  onClick={handleStartInvitation}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-700 px-6 py-4 font-bold text-white shadow-lg shadow-sky-700/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-xl hover:shadow-sky-700/20 cursor-pointer text-sm"
                >
                  <Play className="h-4.5 w-4.5 fill-current" />
                  Reproducir Reporte
                </button>
              </div>
            </div>
          )}

          {/* Teaser Video Element */}
          <video
            ref={videoRef}
            src="/video/intro_teaser.mp4"
            className="w-full h-full max-h-[85vh] object-contain select-none z-10"
            playsInline
            onEnded={handleVideoEnded}
            // Allow clicking the video to skip at any time
            onClick={handleEnterInvitation}
          />

          {/* Click to enter overlay - visible at the end or when playing */}
          {hasStarted && (
            <div 
              onClick={handleEnterInvitation}
              className="absolute inset-0 bg-transparent cursor-pointer select-none z-20"
            >
              {/* Skip button (top-right) */}
              <button
                type="button"
                className="absolute top-6 right-6 rounded-full bg-black/40 border border-white/20 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-white backdrop-blur hover:bg-black/60 transition active:scale-95 z-30"
              >
                Omitir Teaser
              </button>

              {/* Enter prompt overlay (shows up when video ends) */}
              {videoEnded && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[280px] rounded-2xl bg-black/60 border border-white/15 p-4 text-center backdrop-blur-md shadow-2xl animate-[bounce_2s_infinite] z-30">
                  <p className="text-[0.68rem] font-bold uppercase tracking-widest text-sky-400">
                    Junta Directiva Lista
                  </p>
                  <button
                    type="button"
                    className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-3 font-bold text-slate-900 text-xs tracking-wider uppercase transition hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Ver Invitación
                    <ChevronRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Parallax Boss Baby Sky Background */}
      <SkyBackground />

      {/* Background music controller docks at bottom-right */}
      <MusicDock title={content.music.title} description={content.music.description} />

      {/* Core invitation content wrapper */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
        
        {/* 1. Hero Cover (Crown + Countdown) */}
        <Reveal>
          <HeroSection />
        </Reveal>

        {/* 2. Event Date/Time/Venue Details (Mass & Salon schedules) */}
        <Reveal delayClassName="reveal-delay-1">
          <EventSection />
        </Reveal>

        {/* 3. Event Complete Itinerary timeline */}
        <Reveal delayClassName="reveal-delay-2">
          <ItinerarySection />
        </Reveal>

        {/* 4. Parents & Godmother Presentation Section */}
        <Reveal delayClassName="reveal-delay-1">
          <ParentsSection />
        </Reveal>

        {/* 5. Dress Code & Gifts Registry info */}
        <Reveal delayClassName="reveal-delay-2">
          <DressAndGiftsSection />
        </Reveal>

        {/* 6. Memories swipeable Gallery Carousel */}
        <Reveal delayClassName="reveal-delay-1">
          <MemoryCarousel />
        </Reveal>

        {/* 7. RSVP Confirm Form */}
        <Reveal delayClassName="reveal-delay-2">
          <RSVPSection />
        </Reveal>
      </div>
    </main>
  );
}

export default InvitationPage;
