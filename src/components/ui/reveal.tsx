"use client";

import { type ReactNode, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayClassName?: string;
}

export function Reveal({ children, className = "", delayClassName = "" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    /* Outer observed anchor wrapper stays in document flow to trigger IntersectionObserver on scroll */
    <div ref={ref} className="w-full relative min-h-[10px]">
      {/* Inner animated card container simulates a sheet of paper sliding out from a stack */}
      <div
        className={`paper-reveal relative w-full ${delayClassName} ${
          hasAnimated ? "is-visible" : ""
        } ${className}`}
      >
        {/* Transparent Boss Baby with number 1 image at the top-right corner of each card */}
        <img
          src="/images/jefe_logo.png"
          alt="Jefe Emiliano"
          className="absolute -top-7 right-6 z-30 w-12 h-16 object-contain pointer-events-none drop-shadow-[0_6px_12px_rgba(2,132,199,0.15)]"
        />
        {children}
      </div>
    </div>
  );
}

export default Reveal;
