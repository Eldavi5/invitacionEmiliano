"use client";

import { useEffect, useState } from "react";
import { SkyBackground } from "@/components/ui/sky-background";
import { FloatingHearts } from "@/components/ui/floating-hearts";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { MusicDock } from "@/components/ui/music-dock";
import { Reveal } from "@/components/ui/reveal";
import { FloatingCloudsAndPlanes } from "@/features/invitation/components/airplane-illustrations";

// Redesigned Sections
import { HeroSection } from "@/features/invitation/sections/hero-section";
import { EventSection } from "@/features/invitation/sections/event-section";
import { ParentsSection } from "@/features/invitation/sections/parents-section";
import { HeartbeatSection } from "@/features/invitation/sections/heartbeat-section";
import { MemoryCarousel } from "@/features/invitation/components/memory-carousel";
import { RSVPSection } from "@/features/invitation/sections/rsvp-section";

import { invitationContent, type Locale } from "@/data/invitation";

export function InvitationPage() {
  const [locale, setLocale] = useState<Locale>("es");
  const content = invitationContent[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-800 pb-20">
      {/* Decorative Vector and Cloud Backgrounds */}
      <SkyBackground />
      <FloatingCloudsAndPlanes />
      <FloatingHearts />

      {/* Background music controller docks at bottom-right */}
      <MusicDock title={content.music.title} description={content.music.description} />

      {/* Core invitation content wrapper */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
        {/* Language Switch placed inline at the top of the flow to prevent overlapping content on mobile */}
        <div className="flex w-full justify-end">
          <LanguageSwitch
            locale={locale}
            onToggle={() => setLocale((current) => (current === "es" ? "en" : "es"))}
            label={locale === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"}
          />
        </div>

        {/* 1. Hero Cover */}
        <Reveal>
          <HeroSection locale={locale} />
        </Reveal>

        {/* 2. Event Date/Time/Venue Details */}
        <Reveal delayClassName="reveal-delay-1">
          <EventSection locale={locale} />
        </Reveal>

        {/* 3. Parents Presentation Section */}
        <Reveal delayClassName="reveal-delay-2">
          <ParentsSection locale={locale} />
        </Reveal>

        {/* 4. Heartbeat Player Section */}
        <Reveal>
          <HeartbeatSection locale={locale} />
        </Reveal>

        {/* 5. Memories swipeable Gallery Carousel */}
        <Reveal delayClassName="reveal-delay-1">
          <MemoryCarousel locale={locale} />
        </Reveal>

        {/* 5. RSVP Confirm Form */}
        <Reveal delayClassName="reveal-delay-2">
          <RSVPSection locale={locale} />
        </Reveal>
      </div>
    </main>
  );
}
export default InvitationPage;
