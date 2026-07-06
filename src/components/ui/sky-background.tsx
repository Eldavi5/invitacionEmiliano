"use client";

import React, { useEffect, useState } from "react";

// Paper Airplane SVG with customizable size
function PaperPlane({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-sky-400/50 ${className}`}
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// Retro Cartoon Airplane SVG with customizable size
function CartoonPlane({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-sky-500/55 ${className}`}
    >
      <path d="M12 28L4 16H8L18 28Z" fill="currentColor" opacity="0.75" />
      <rect x="10" y="22" width="32" height="14" rx="7" fill="currentColor" stroke="#FFFFFF" strokeWidth="1.2" />
      <path d="M28 22C31 22 36 25 36 29H28V22Z" fill="#FFFFFF" opacity="0.65" />
      <path d="M24 35L16 48C15 50 19 51 21 49L32 35H24Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

// Cloud SVG with customizable size
function SkyCloud({ className = "", width = 120, height = 70 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 70"
      fill="currentColor"
      className={`text-white/55 ${className}`}
    >
      <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" />
    </svg>
  );
}

export function SkyBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* 1. Large Paper Airplane Top-Left (Parallax Speed: 0.18) */}
      <div
        className="absolute left-[8%] top-[8%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.18}px) rotate(5deg)` }}
      >
        <PaperPlane size={48} className="text-sky-500/50" />
      </div>

      {/* 2. Fluffy Cloud Top-Right (Parallax Speed: -0.08) */}
      <div
        className="absolute right-[10%] top-[18%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      >
        <SkyCloud width={130} height={75} />
      </div>

      {/* 3. Big Cartoon Plane Mid-Left-Top (Parallax Speed: -0.25) */}
      <div
        className="absolute left-[5%] top-[32%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.25}px) rotate(15deg)` }}
      >
        <CartoonPlane size={72} className="text-sky-500/55" />
      </div>

      {/* 4. Medium Paper Airplane Mid-Right (Parallax Speed: 0.14) */}
      <div
        className="absolute right-[8%] top-[42%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.14}px) rotate(-10deg)` }}
      >
        <PaperPlane size={44} className="text-sky-400/50" />
      </div>

      {/* 5. Big Fluffy Cloud Mid-Left (Parallax Speed: 0.06) */}
      <div
        className="absolute left-[7%] top-[54%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * 0.06}px)` }}
      >
        <SkyCloud width={140} height={80} className="text-white/45" />
      </div>

      {/* 6. Cartoon Plane Mid-Right-Bottom (Parallax Speed: -0.18) */}
      <div
        className="absolute right-[6%] top-[62%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.18}px) scaleX(-1) rotate(-5deg)` }}
      >
        <CartoonPlane size={64} className="text-sky-500/60" />
      </div>

      {/* 7. Large Paper Airplane Bottom-Left (Parallax Speed: 0.22) */}
      <div
        className="absolute left-[9%] top-[74%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.22}px) rotate(-18deg)` }}
      >
        <PaperPlane size={52} className="text-sky-500/55" />
      </div>

      {/* 8. Big Cartoon Plane Bottom-Left (Parallax Speed: -0.15) */}
      <div
        className="absolute left-[6%] top-[84%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.15}px) rotate(8deg)` }}
      >
        <CartoonPlane size={75} className="text-sky-400/60" />
      </div>

      {/* 9. Medium Paper Airplane Bottom-Right (Parallax Speed: 0.25) */}
      <div
        className="absolute right-[9%] top-[90%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(12deg)` }}
      >
        <PaperPlane size={46} className="text-sky-400/50" />
      </div>
    </div>
  );
}
export default SkyBackground;
