"use client";

import React, { useEffect, useState } from "react";

// Cloud SVG with customizable size
function SkyCloud({ className = "", width = 140, height = 80 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 70"
      fill="currentColor"
      className={`text-white/60 ${className} drop-shadow-[0_10px_25px_rgba(255,255,255,0.4)]`}
    >
      <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" />
    </svg>
  );
}

// Minimalist baby pacifier vector - colored sky blue
function PacifierBackgroundIcon({ className = "", size = 52 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-sky-400/40 ${className}`}
    >
      <path d="M24 6 C20 6, 18 10, 18 15 C18 20, 21 21, 24 21 C27 21, 30 20, 30 15 C30 10, 28 6, 24 6 Z" fill="currentColor" />
      <rect x="10" y="21" width="28" height="6" rx="3" fill="currentColor" />
      <path
        d="M24 29 C28.5 29, 32 32.5, 32 37 C32 41.5, 28.5 45, 24 45 C19.5 45, 16 41.5, 16 37 C16 32.5, 19.5 29, 24 29 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
      />
    </svg>
  );
}

// Blue Balloon with Shiny highlights
function BlueBalloonIcon({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 36) / 24}
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_12px_24px_rgba(2,132,199,0.22)]`}
    >
      <defs>
        <linearGradient id="blue-bal-grad" x1="30%" y1="10%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="25%" stopColor="#38BDF8" />
          <stop offset="70%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="13" rx="9" ry="11" fill="url(#blue-bal-grad)" />
      <ellipse cx="9" cy="9" rx="2.2" ry="3.2" fill="#FFFFFF" opacity="0.5" transform="rotate(-15 9 9)" />
      <polygon points="12,24 9,26 15,26" fill="#0284C7" />
      <path d="M12 26 Q9 31 13 35" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
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
      {/* -----------------
          LARGE WATERCOLOR SKY BLOB OVERLAYS
          ----------------- */}
      <div className="absolute top-[5%] left-[5%] w-96 h-96 rounded-full bg-sky-200/40 blur-[100px]" />
      <div className="absolute top-[22%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-100/50 blur-[130px]" />
      <div className="absolute top-[50%] left-[-15%] w-[600px] h-[600px] rounded-full bg-sky-200/35 blur-[140px]" />
      <div className="absolute top-[78%] right-[-5%] w-[450px] h-[450px] rounded-full bg-sky-100/45 blur-[120px]" />
      
      {/* 1. Large Blue Balloon Top-Left (Parallax Speed: 0.18) */}
      <div
        className="absolute left-[8%] top-[7%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.18}px) rotate(5deg)` }}
      >
        <BlueBalloonIcon size={76} />
      </div>

      {/* 2. Fluffy Cloud Top-Right (Parallax Speed: -0.08) */}
      <div
        className="absolute right-[10%] top-[13%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      >
        <SkyCloud width={160} height={90} className="text-white/70" />
      </div>

      {/* 3. Soft Cloud Mid-Left-Top (Parallax Speed: -0.25) */}
      <div
        className="absolute left-[5%] top-[24%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.25}px)` }}
      >
        <SkyCloud width={150} height={85} className="text-white/65" />
      </div>

      {/* 4. Soft Cloud Mid-Right (Parallax Speed: 0.14) */}
      <div
        className="absolute right-[6%] top-[34%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * 0.14}px)` }}
      >
        <SkyCloud width={170} height={95} className="text-white/55" />
      </div>

      {/* 5. Pacifier Background Icon Mid-Left (Parallax Speed: 0.06) */}
      <div
        className="absolute left-[7%] top-[45%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.06}px) rotate(-8deg)` }}
      >
        <PacifierBackgroundIcon size={60} />
      </div>

      {/* 6. Large Blue Balloon Mid-Right-Bottom (Parallax Speed: -0.18) */}
      <div
        className="absolute right-[5%] top-[56%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.18}px) rotate(-5deg)` }}
      >
        <BlueBalloonIcon size={88} />
      </div>

      {/* 7. Large Fluffy Cloud Bottom-Left (Parallax Speed: 0.22) */}
      <div
        className="absolute left-[9%] top-[66%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * 0.22}px)` }}
      >
        <SkyCloud width={180} height={100} className="text-white/60" />
      </div>

      {/* 8. Blue Balloon Bottom-Left (Parallax Speed: -0.15) */}
      <div
        className="absolute left-[4%] top-[77%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.15}px) rotate(12deg)` }}
      >
        <BlueBalloonIcon size={78} />
      </div>

      {/* 9. Large Balloon and Pacifier Bottom-Right (Parallax Speed: 0.25) */}
      <div
        className="absolute right-[8%] top-[87%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(-15deg)` }}
      >
        <div className="flex flex-col gap-4 items-center">
          <BlueBalloonIcon size={84} />
          <PacifierBackgroundIcon size={56} className="text-sky-300/40" />
        </div>
      </div>
    </div>
  );
}
export default SkyBackground;
