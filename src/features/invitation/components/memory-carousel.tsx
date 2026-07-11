"use client";

import React, { useRef, useState, useEffect } from "react";
import { invitationContent } from "@/data/invitation";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function MemoryCarousel() {
  const content = invitationContent;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: content.photos[0].title,
      caption: content.photos[0].caption,
      tag: content.photos[0].placeholder,
      imageSrc: "/images/galeria_3.jpg"
    },
    {
      title: content.photos[1].title,
      caption: content.photos[1].caption,
      tag: content.photos[1].placeholder,
      imageSrc: "/images/galeria_1.jpg"
    },
    {
      title: content.photos[2].title,
      caption: content.photos[2].caption,
      tag: content.photos[2].placeholder,
      imageSrc: "/images/galeria_2.jpg"
    },
    {
      title: content.photos[3].title,
      caption: content.photos[3].caption,
      tag: content.photos[3].placeholder,
      imageSrc: "/images/galeria_4.jpg"
    }
  ];

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
          <p className="text-xs font-bold uppercase tracking-[0.38em] text-sky-700">
            {content.photosIntro}
          </p>
          <h2 className="mt-1 font-display text-3xl font-black text-slate-800 md:text-4xl">
            {content.photosTitle}
          </h2>
        </div>
        <p className="text-sm leading-6 text-slate-600 max-w-md font-medium">
          Desliza para ver la galería de fotos y preparativos especiales para Emiliano.
        </p>
      </div>

      <div className="relative group max-w-3xl mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-md text-sky-700 transition hover:scale-105 hover:bg-sky-50 active:scale-95 cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-md text-sky-700 transition hover:scale-105 hover:bg-sky-50 active:scale-95 cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Siguiente imagen"
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
              {/* Image Container with glass style */}
              <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center rounded-[1.75rem] bg-gradient-to-b from-sky-50/50 to-white/95 border border-sky-100/40 shadow-md overflow-hidden">
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-sky-100/40 text-[0.62rem] font-bold text-sky-700 tracking-wider uppercase shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-500 animate-pulse" />
                  {slide.tag}
                </div>
                <img
                  src={slide.imageSrc}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text Description */}
              <div className="mt-6 max-w-xl space-y-2">
                <h3 className="font-display text-2xl font-black text-slate-800 leading-tight">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
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
              aria-label={`Ir a foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemoryCarousel;
