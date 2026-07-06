"use client";

import React, { useRef, useState, useEffect } from "react";
import type { Locale } from "@/data/invitation";
import { invitationContent } from "@/data/invitation";
import { ChevronLeft, ChevronRight, Plane } from "lucide-react";
import {
  BabyAirplane,
  PilotsAirplane,
  LandingRunway,
  UltrasoundBoardingPass
} from "./airplane-illustrations";

interface MemoryCarouselProps {
  locale: Locale;
}

export function MemoryCarousel({ locale }: MemoryCarouselProps) {
  const content = invitationContent[locale];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: content.photos[0].title,
      caption: content.photos[0].caption,
      tag: content.photos[0].placeholder,
      illustration: (
        <img
          src="/images/fotodelbebe.jpeg"
          alt={content.photos[0].title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      )
    },
    {
      title: content.photos[1].title,
      caption: content.photos[1].caption,
      tag: content.photos[1].placeholder,
      illustration: (
        <img
          src="/images/OsoSorpresa.jpeg"
          alt={content.photos[1].title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      )
    },
    {
      title: content.photos[2].title,
      caption: content.photos[2].caption,
      tag: content.photos[2].placeholder,
      illustration: <LandingRunway size={180} className="plane-float" style={{ animationDelay: "3s" }} />
    },
    {
      title: content.photos[3].title,
      caption: content.photos[3].caption,
      tag: content.photos[3].placeholder,
      illustration: <PilotsAirplane size={180} className="plane-float" style={{ animationDelay: "0.5s" }} />
    }
  ];

  // Synchronize dot indicators with snapped items in scrollable container
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const index = Math.round(scrollLeft / itemWidth);
    
    if (index >= 0 && index < slidesData.length) {
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.clientWidth;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : slidesData.length - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < slidesData.length - 1 ? activeIndex + 1 : 0;
    scrollToSlide(newIndex);
  };

  // Adjust scroll position on resize to keep snapped item in view
  useEffect(() => {
    const handleResize = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const itemWidth = container.clientWidth;
      container.scrollLeft = activeIndex * itemWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-sky-700">
            {content.photosIntro}
          </p>
          <h2 className="mt-1 font-display text-3xl font-black text-slate-900 md:text-4xl">
            {content.photosTitle}
          </h2>
        </div>
        <p className="text-sm leading-6 text-slate-600 max-w-md">
          {locale === "es"
            ? "Desliza para ver la bitácora de vuelo y los preparativos celestiales que darán la bienvenida a Santiago."
            : "Swipe to view the flight log and celestial preparations welcoming Santiago."}
        </p>
      </div>

      <div className="relative group max-w-3xl mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-md text-sky-700 transition hover:scale-105 hover:bg-sky-50 active:scale-95 cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={locale === "es" ? "Imagen anterior" : "Previous slide"}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-md text-sky-700 transition hover:scale-105 hover:bg-sky-50 active:scale-95 cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={locale === "es" ? "Siguiente imagen" : "Next slide"}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Snapping Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none rounded-[2.2rem] glass-card"
        >
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="w-full shrink-0 snap-start snap-always p-6 md:p-8 flex flex-col items-center text-center"
            >
              {/* Image / Illustration Container with glass style */}
              <div className="relative w-full max-w-sm aspect-[4/3.2] flex items-center justify-center rounded-[1.75rem] bg-gradient-to-b from-sky-50/50 to-white/95 border border-sky-100/40 shadow-[inset_0_2px_4px_rgba(56,189,248,0.03)] overflow-hidden">
                <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-sky-100/30 text-[0.62rem] font-bold text-sky-700 tracking-wider uppercase shadow-sm">
                  <Plane className="h-3.5 w-3.5 text-sky-500 animate-pulse" />
                  {slide.tag}
                </div>
                {index === 0 || index === 1 ? (
                  <div className="absolute inset-0 w-full h-full">
                    {slide.illustration}
                  </div>
                ) : (
                  <div className="relative p-4">
                    {slide.illustration}
                  </div>
                )}
              </div>

              {/* Text Description */}
              <div className="mt-6 max-w-xl space-y-2">
                <h3 className="font-display text-2xl font-black text-slate-800 leading-tight">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-600">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicator Dots */}
        <div className="mt-5 flex justify-center gap-2.5">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "w-7 bg-sky-700 shadow-[0_2px_8px_rgba(3,105,161,0.3)]"
                  : "w-2.5 bg-sky-200 hover:bg-sky-300"
              }`}
              aria-label={`Ir a escala ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default MemoryCarousel;
