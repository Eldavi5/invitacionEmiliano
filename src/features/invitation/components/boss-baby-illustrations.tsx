import React from "react";

interface IllustrationProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

// 1. Crown Icon (Corona) - Welcome Header
export function CrownIcon({ className = "", size = 80, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Background soft glow */}
      <circle cx="50" cy="55" r="35" fill="url(#crownGlow)" opacity="0.35" />
      
      {/* Crown base */}
      <path
        d="M20 75 L80 75 L85 68 L78 63 L70 65 L50 40 L30 65 L22 63 L15 68 Z"
        fill="url(#crownGold)"
        stroke="#B45309"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Main crown points */}
      <path
        d="M20 70 L15 35 L33 50 L50 20 L67 50 L85 35 L80 70 Z"
        fill="url(#crownGold)"
        stroke="#B45309"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Jewels on points */}
      <circle cx="15" cy="35" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="33" cy="50" r="3.5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="50" cy="20" r="5.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="67" cy="50" r="3.5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="85" cy="35" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
      
      {/* Velvet lining/cushion at the bottom */}
      <path d="M20 70 C30 74, 70 74, 80 70 L80 74 C70 78, 30 78, 20 74 Z" fill="#0284C7" />
      
      {/* Little star sparkles */}
      <path d="M28 25 L30 30 L35 32 L30 34 L28 39 L26 34 L21 32 L26 30 Z" fill="#FBBF24" opacity="0.8" />
      <path d="M72 23 L73.5 27 L77.5 28.5 L73.5 30 L72 34 L70.5 30 L66.5 28.5 L70.5 27 Z" fill="#FBBF24" opacity="0.8" />

      <defs>
        <radialGradient id="crownGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="crownGold" x1="50" y1="20" x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Boss Baby Suit/Tie Illustration (El Jefe en Traje)
export function BabySuitIcon({ className = "", size = 150, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Outer circular background with gradient */}
      <circle cx="60" cy="60" r="50" fill="url(#suitCircleGrad)" stroke="#E0F2FE" strokeWidth="2.5" />

      {/* Suit Lapels & Shoulders (Jacket) */}
      <path
        d="M25 90 C25 75, 38 65, 60 65 C82 65, 95 75, 95 90 L88 110 L32 110 Z"
        fill="#1E293B" // Dark Charcoal Suit
        stroke="#0F172A"
        strokeWidth="1.5"
      />

      {/* White Shirt Collar */}
      <path
        d="M44 65 L60 85 L76 65 L68 55 H52 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="1"
      />

      {/* Blue Necktie */}
      <path
        d="M57 78 L63 78 L66 102 L60 108 L54 102 Z"
        fill="#0284C7"
        stroke="#0369A1"
        strokeWidth="0.8"
      />
      {/* Tie Knot */}
      <path
        d="M55 75 L65 75 L62 82 L58 82 Z"
        fill="#0369A1"
      />

      {/* Left Suit Lapel fold */}
      <path d="M25 90 L48 78 L46 88 L34 105 Z" fill="#334155" />
      {/* Right Suit Lapel fold */}
      <path d="M95 90 L72 78 L74 88 L86 105 Z" fill="#334155" />

      {/* Baby Pacifier hanging chain or collar button */}
      <circle cx="60" cy="53" r="3.5" fill="#38BDF8" />
      
      {/* Little baby face outline at top */}
      <path d="M42 45 C42 30, 78 30, 78 45" stroke="#BAE6FD" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

      <defs>
        <linearGradient id="suitCircleGrad" x1="60" y1="10" x2="60" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. Pacifier Icon (Chupón)
export function PacifierIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Nipple */}
      <path d="M24 6 C20 6, 18 10, 18 15 C18 20, 21 21, 24 21 C27 21, 30 20, 30 15 C30 10, 28 6, 24 6 Z" fill="#FFD166" opacity="0.8" />
      {/* Shield (Guard) */}
      <rect x="10" y="21" width="28" height="6" rx="3" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="5.5" fill="#0284C7" />
      {/* Handle Ring */}
      <path
        d="M24 29 C28.5 29, 32 32.5, 32 37 C32 41.5, 28.5 45, 24 45 C19.5 45, 16 41.5, 16 37 C16 32.5, 19.5 29, 24 29 Z"
        stroke="#38BDF8"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

// 4. Baby Bottle Icon (Biberón)
export function BabyBottleIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Teat (Nipple) */}
      <path d="M21 8 C21 5, 27 5, 27 8 L29 13 H19 Z" fill="#FFD166" />
      {/* Cap Ring */}
      <rect x="16" y="13" width="16" height="4" rx="1.5" fill="#38BDF8" />
      {/* Bottle Body */}
      <path
        d="M17 17 H31 V37 C31 41, 29 43, 24 43 C19 43, 17 41, 17 37 Z"
        fill="#FFFFFF"
        fillOpacity="0.6"
        stroke="#38BDF8"
        strokeWidth="2"
      />
      {/* Measurement Markings */}
      <line x1="20" y1="23" x2="24" y2="23" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="26" y2="28" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="20" y1="33" x2="24" y2="33" stroke="#0284C7" strokeWidth="1.5" />
      {/* Milk Fill Level */}
      <path d="M18.5 27 C20 28, 28 26, 29.5 27 V37 C29.5 39.5, 28.5 41.5, 24 41.5 C19.5 41.5, 18.5 39.5, 18.5 37 Z" fill="#E0F2FE" />
    </svg>
  );
}

// 5. Sunglasses Icon (Lentes de Sol de Jefe)
export function SunglassesIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Frame bridge */}
      <rect x="20" y="21" width="8" height="3" rx="1" fill="#1E293B" />
      {/* Left Lens */}
      <path
        d="M6 18 H21 L19 31 C18 34, 13 34, 10 32 L7 28 C6 26, 6 20, 6 18 Z"
        fill="#0F172A"
        stroke="#38BDF8"
        strokeWidth="1.5"
      />
      {/* Right Lens */}
      <path
        d="M42 18 H27 L29 31 C30 34, 35 34, 38 32 L41 28 C42 26, 42 20, 42 18 Z"
        fill="#0F172A"
        stroke="#38BDF8"
        strokeWidth="1.5"
      />
      {/* Highlights on lenses */}
      <path d="M8 20 L13 22" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M29 20 L34 22" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      {/* Temples (Arms) */}
      <path d="M6 19 C3 19, 2 17, 2 15" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M42 19 C45 19, 46 17, 46 15" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Briefcase Icon (Maletín)
export function BriefcaseIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handle */}
      <path
        d="M18 15 V10 C18 8.5, 19.5 7, 21 7 H27 C28.5 7, 30 8.5, 30 10 V15"
        stroke="#1E293B"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Main Bag Body */}
      <rect x="7" y="15" width="34" height="24" rx="4" fill="#334155" stroke="#1E293B" strokeWidth="2.5" />
      {/* Leather accent corner patches */}
      <path d="M7 32 V35 C7 37.5, 9.5 39, 12 39 H15" stroke="#1E293B" strokeWidth="1.5" fill="none" />
      <path d="M41 32 V35 C41 37.5, 38.5 39, 36 39 H33" stroke="#1E293B" strokeWidth="1.5" fill="none" />
      {/* Latches */}
      <rect x="14" y="15" width="4" height="7" rx="1" fill="#FFD166" stroke="#1E293B" strokeWidth="1" />
      <rect x="30" y="15" width="4" height="7" rx="1" fill="#FFD166" stroke="#1E293B" strokeWidth="1" />
      {/* Center lock plate */}
      <circle cx="24" cy="23" r="2.5" fill="#E2E8F0" stroke="#1E293B" strokeWidth="1" />
    </svg>
  );
}

// 7. Itinerary: Church Icon
export function ChurchIllustration({ className = "", size = 32 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-8 8h16l-8-8z" />
      <path d="M14 21v-4a2 2 0 1 0-4 0v4" />
      <path d="M4 11v10h16V11" />
      <path d="M12 2v2" />
      <path d="M11 3h2" />
    </svg>
  );
}

// 8. Itinerary: Welcome / Drink Icon
export function WelcomeIllustration({ className = "", size = 32 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22V12" />
      <path d="m5 12 7-7 7 7" />
      <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Z" />
      <path d="M9 12h6" />
    </svg>
  );
}

// 9. Itinerary: Food Icon
export function FoodIllustration({ className = "", size = 32 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v4" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
      <path d="M12 11v11" />
      <path d="M18 15v7" />
      <path d="M5 11v11" />
    </svg>
  );
}

// 10. Itinerary: Show / Microphone Icon
export function ShowIllustration({ className = "", size = 32 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );
}

// 11. Itinerary: Cake / Party Icon
export function CakeIllustration({ className = "", size = 32 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16h16" />
      <path d="M12 11V7" />
      <path d="M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M7 11V9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

// 12. Itinerary: Dismiss / Star Check Icon
export function DismissIllustration({ className = "", size = 32 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
