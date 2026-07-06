import React from "react";

interface IllustrationProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

// 1. Baby Airplane flying on a cloud
export function BabyAirplane({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Sun glow back drop */}
      <circle cx="100" cy="90" r="60" fill="url(#sunGlow)" opacity="0.3" />

      {/* Cloud underneath */}
      <path
        d="M45 135C35 135 28 127 28 117C28 108.5 34.5 101.5 43 99.5C41.5 96.5 41 93.5 41 90C41 78 51 68 63 68C68.5 68 73.5 70 77.5 73.5C82.5 62.5 93.5 55 106 55C123.5 55 138 68.5 139.5 85.5C145.5 86 150.5 89.5 153.5 94.5C159.5 96.5 164 102.5 164 109.5C164 118.5 156.5 126 147.5 126H45V135Z"
        fill="url(#cloudGrad)"
        filter="drop-shadow(0 10px 25px rgba(186, 230, 253, 0.35))"
      />

      {/* Flight smoke trail */}
      <path d="M25 102Q15 95 30 85T15 75" stroke="#BAE6FD" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" opacity="0.7" />

      {/* Cartoon Airplane Body */}
      {/* Fuselage (Pill shape) */}
      <rect x="52" y="80" width="96" height="42" rx="21" fill="url(#planeBodyGrad)" stroke="#FFFFFF" strokeWidth="2.5" />

      {/* Cute face on cockpit */}
      <path d="M112 80C125 80 148 90 148 101C148 112 125 122 112 122" fill="#E0F2FE" opacity="0.9" />
      
      {/* Eyes (Happy winking arcs) */}
      <path d="M124 94C126 91.5 130 91.5 132 94" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M137 94C139 91.5 143 91.5 145 94" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Blush Cheeks */}
      <circle cx="120" cy="102" r="3.5" fill="#FCA5A5" />
      <circle cx="144" cy="102" r="3.5" fill="#FCA5A5" />

      {/* Happy Smile */}
      <path d="M131 103Q133 107 135 103" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />

      {/* Propeller Nose Cone */}
      <path d="M148 91C152 91 155 96 155 101C155 106 152 111 148 111V91Z" fill="#F59E0B" />
      
      {/* Propeller Blades (spinning effect) */}
      <ellipse cx="155" cy="101" rx="4" ry="24" fill="#FFFFFF" opacity="0.75" stroke="#D97706" strokeWidth="1" />
      <ellipse cx="155" cy="101" rx="24" ry="4" fill="#FFFFFF" opacity="0.4" />

      {/* Wings */}
      {/* Tail Wing */}
      <path d="M60 80L44 58C42 55 45 52 49 54L72 80H60Z" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
      
      {/* Main Wing (Underneath body perspective) */}
      <path d="M82 120L72 152C70 156 75 160 79 157L108 122H82Z" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
      {/* Top wing shading */}
      <path d="M86 96L92 68C93 64 99 64 100 68L106 96H86Z" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Little baby pacifier sticker on plane tail */}
      <circle cx="68" cy="101" r="5" fill="#FCD34D" />
      <circle cx="68" cy="101" r="2.5" fill="#0284C7" />

      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cloudGrad" x1="96" y1="55" x2="96" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        <linearGradient id="planeBodyGrad" x1="100" y1="80" x2="100" y2="122" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Mom & Dad planes flying side-by-side drawing a heart trail
export function PilotsAirplane({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Heart Loop Trail */}
      <path
        d="M100 135 C 50 170, 20 120, 20 85 C 20 50, 60 30, 100 70 C 140 30, 180 50, 180 85 C 180 120, 150 170, 100 135 Z"
        stroke="#BAE6FD"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="8 6"
        opacity="0.8"
      />

      {/* Dad Airplane (Left, larger, captain hat) */}
      <g transform="translate(38, 55) rotate(15)">
        {/* Shadow */}
        <ellipse cx="30" cy="48" rx="20" ry="5" fill="#E2E8F0" opacity="0.4" />
        {/* Fuselage */}
        <rect x="10" y="20" width="55" height="24" rx="12" fill="#0284C7" stroke="#FFF" strokeWidth="1.5" />
        {/* Tail wing */}
        <path d="M18 20L8 8C7 7 9 5 11 7L22 20H18Z" fill="#0369a1" />
        {/* Wing */}
        <path d="M34 38L26 55C25 57 29 59 31 57L46 38H34Z" fill="#0369a1" stroke="#FFF" strokeWidth="1" />
        {/* Cockpit */}
        <path d="M48 20C54 20 62 25 62 32C62 39 54 44 48 44" fill="#bae6fd" />
        {/* Eyes */}
        <circle cx="54" cy="29" r="1.5" fill="#334155" />
        {/* Captain Hat */}
        <path d="M44 14 L 56 11 L 58 17 L 42 19 Z" fill="#1E293B" />
        <path d="M41 18 Q 48 21 59 16" stroke="#FCD34D" strokeWidth="1.5" />
      </g>

      {/* Mom Airplane (Right, slightly smaller, pink bow) */}
      <g transform="translate(102, 75) rotate(-10)">
        {/* Shadow */}
        <ellipse cx="28" cy="44" rx="18" ry="4" fill="#E2E8F0" opacity="0.4" />
        {/* Fuselage */}
        <rect x="10" y="20" width="50" height="22" rx="11" fill="#38BDF8" stroke="#FFF" strokeWidth="1.5" />
        {/* Tail wing */}
        <path d="M18 20L9 9C8 8 10 6 12 8L22 20H18Z" fill="#0284C7" />
        {/* Wing */}
        <path d="M32 36L25 52C24 54 28 55 30 53L43 36H32Z" fill="#0284C7" stroke="#FFF" strokeWidth="1" />
        {/* Cockpit */}
        <path d="M44 20C50 20 58 25 58 31C58 37 50 42 44 42" fill="#bae6fd" />
        {/* Eyes */}
        <circle cx="50" cy="28" r="1.5" fill="#334155" />
        
        {/* Cute Bow on Wing (Red/Pink) */}
        <g transform="translate(30, 42) scale(0.7)">
          <circle cx="0" cy="0" r="3.5" fill="#F87171" />
          <path d="M-6 -4 L 6 4 M -6 4 L 6 -4" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="0" r="1.5" fill="#FFF" />
        </g>
      </g>
    </svg>
  );
}

// 3. Airplane landing on runway
export function LandingRunway({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Runway stretching into perspective */}
      <path d="M90 100 H 110 L 155 190 H 45 L 90 100 Z" fill="#334155" />
      {/* Center dash lines */}
      <line x1="100" y1="105" x2="100" y2="120" stroke="#FCD34D" strokeWidth="1.5" />
      <line x1="100" y1="130" x2="100" y2="150" stroke="#FCD34D" strokeWidth="2.5" />
      <line x1="100" y1="162" x2="100" y2="188" stroke="#FCD34D" strokeWidth="4.5" />

      {/* Runway Edge lights (Glowing dots) */}
      {/* Left side */}
      <circle cx="86" cy="110" r="2" fill="#FCE7F3" filter="drop-shadow(0 0 4px #F472B6)" />
      <circle cx="73" cy="135" r="2.5" fill="#FCE7F3" filter="drop-shadow(0 0 4px #F472B6)" />
      <circle cx="58" cy="165" r="3.5" fill="#FCE7F3" filter="drop-shadow(0 0 6px #F472B6)" />
      {/* Right side */}
      <circle cx="114" cy="110" r="2" fill="#FCE7F3" filter="drop-shadow(0 0 4px #F472B6)" />
      <circle cx="127" cy="135" r="2.5" fill="#FCE7F3" filter="drop-shadow(0 0 4px #F472B6)" />
      <circle cx="142" cy="165" r="3.5" fill="#FCE7F3" filter="drop-shadow(0 0 6px #F472B6)" />

      {/* Stars/sky backdrop */}
      <circle cx="100" cy="55" r="45" fill="url(#radarSweep)" opacity="0.15" />
      
      {/* Approaching Airplane */}
      <g transform="translate(0, -15)">
        {/* Glide path lines */}
        <line x1="100" y1="90" x2="60" y2="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="100" y1="90" x2="140" y2="140" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Wings main span */}
        <path d="M40 86 Q 100 76 160 86 L 155 92 Q 100 82 45 92 Z" fill="#0284C7" stroke="#FFF" strokeWidth="1" />
        
        {/* Fuselage core */}
        <ellipse cx="100" cy="85" rx="14" ry="12" fill="#38BDF8" stroke="#FFF" strokeWidth="1.5" />
        {/* Cockpit glass */}
        <path d="M92 80Q100 72 108 80Q100 87 92 80Z" fill="#E0F2FE" />

        {/* Tail wing */}
        <path d="M100 73 L 95 55 C 95 53 105 53 105 55 L 100 73 Z" fill="#0369a1" stroke="#FFF" strokeWidth="1" />
        
        {/* Engines */}
        <rect x="74" y="88" width="8" height="12" rx="2" fill="#1E293B" />
        <rect x="118" y="88" width="8" height="12" rx="2" fill="#1E293B" />

        {/* Navigation Warning lights (blinking effect) */}
        <circle cx="42" cy="86" r="3" fill="#EF4444" className="animate-pulse" />
        <circle cx="158" cy="86" r="3" fill="#22C55E" className="animate-pulse" />
        <circle cx="100" cy="54" r="2.5" fill="#EAB308" className="animate-pulse" />
      </g>

      <defs>
        <radialGradient id="radarSweep" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// 4. Boarding Pass ticket frame for Ultrasound
export function UltrasoundBoardingPass({ className = "", size = 200, style }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto select-none ${className}`}
      style={style}
    >
      {/* Boarding Pass Base */}
      <rect x="25" y="30" width="150" height="140" rx="14" fill="#FFFFFF" filter="drop-shadow(0 15px 35px rgba(2,132,199,0.15))" />
      
      {/* Flight Header */}
      <rect x="25" y="30" width="150" height="32" rx="14" fill="#0284C7" />
      {/* Clip top corners to match rectangle */}
      <rect x="25" y="44" width="150" height="18" fill="#0284C7" />
      
      {/* Header labels */}
      <text x="36" y="50" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">BOARDING PASS</text>
      <text x="134" y="50" fill="#BAE6FD" fontSize="8" fontWeight="bold" fontFamily="monospace">STG-2026</text>

      {/* Ultrasound Photo placeholder space inside ticket */}
      <rect x="35" y="70" width="130" height="75" rx="6" fill="#0F172A" />
      
      {/* Ultrasound Scan representation */}
      <circle cx="100" cy="107" r="30" stroke="#1E293B" strokeWidth="1" />
      <ellipse cx="106" cy="108" rx="14" ry="10" fill="url(#ultraGlow)" transform="rotate(-10 106 108)" />
      <circle cx="94" cy="102" r="7" fill="url(#ultraGlow)" />
      {/* Little baby nose profile */}
      <path d="M96 95C99 97 101 100 98 103" stroke="#E0F2FE" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Radar sweep line */}
      <line x1="70" y1="107" x2="130" y2="107" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

      {/* Ticket Tear dashes */}
      <line x1="25" y1="152" x2="175" y2="152" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
      {/* Ticket side punches */}
      <circle cx="25" cy="152" r="6" fill="#F0F9FF" />
      <circle cx="175" cy="152" r="6" fill="#F0F9FF" />

      {/* Ticket Footer Info */}
      <text x="36" y="166" fill="#64748B" fontSize="6.5" fontFamily="monospace">GATE: 01A</text>
      <text x="82" y="166" fill="#64748B" fontSize="6.5" fontFamily="monospace">SEAT: CO-PILOT</text>
      <text x="144" y="166" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace">CLASS: VIP</text>

      <defs>
        <radialGradient id="ultraGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// 5. Airplane Flight Trail Divider
export function FlightFootprints({ className = "", size = 48 }: IllustrationProps) {
  return (
    <div className={`flex justify-center items-center gap-2 py-2 select-none ${className}`}>
      <span className="text-xs font-bold text-sky-200 tracking-widest uppercase">SKY PATROL</span>
      <svg width={size * 2} height={size} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-300">
        {/* Loop path */}
        <path d="M10 20 H 45 C 55 20, 60 5, 50 5 C 40 5, 45 25, 55 25 H 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 4" />
        {/* Tiny plane at tip */}
        <g transform="translate(83, 20) rotate(0)">
          <path d="M0 0 L -8 -4 L -6 0 L -8 4 Z" fill="currentColor" />
        </g>
      </svg>
      <span className="text-xs font-bold text-sky-200 tracking-widest uppercase">LEVEL OK</span>
    </div>
  );
}

// 6. Background Clouds & Paper Airplanes
export function FloatingCloudsAndPlanes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Drifting Clouds */}
      <div className="absolute top-[6%] left-[-15vw] cloud-drift-1 opacity-25">
        <svg width="150" height="90" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" fill="#BAE6FD" />
        </svg>
      </div>

      <div className="absolute top-[42%] right-[-15vw] cloud-drift-2 opacity-20">
        <svg width="180" height="100" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" fill="#E0F2FE" />
        </svg>
      </div>

      <div className="absolute top-[75%] left-[-15vw] cloud-drift-1 opacity-25" style={{ animationDelay: "18s" }}>
        <svg width="120" height="75" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" fill="#BAE6FD" />
        </svg>
      </div>

      {/* Floating Paper Airplanes (Drifting) */}
      <div className="absolute top-[15%] left-[8%] opacity-35 plane-drift-fast text-sky-400">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>

      <div className="absolute top-[58%] right-[8%] opacity-30 plane-drift-slow text-sky-300">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>

      {/* Little floating hot air balloon / cloud shapes */}
      <div className="absolute top-[85%] right-[20%] opacity-[0.06] text-sky-600 scale-[1.5]">
        <svg width="50" height="70" viewBox="0 0 50 70" fill="currentColor">
          <path d="M25 5C14 5 5 14 5 25C5 34 11 41 18 43L21 50H29L32 43C39 41 45 34 45 25C45 14 36 5 25 5Z" />
          <rect x="22" y="54" width="6" height="5" />
        </svg>
      </div>

      {/* Stars that slowly pulse */}
      <div className="absolute top-[28%] right-[15%] w-4 h-4 text-sky-300 opacity-60 animate-pulse" style={{ animationDuration: "3.2s" }}>✦</div>
      <div className="absolute top-[4%] left-[30%] w-3 h-3 text-sky-200 opacity-80 animate-pulse" style={{ animationDuration: "1.8s" }}>✦</div>
      <div className="absolute top-[80%] left-[10%] w-5 h-5 text-sky-300 opacity-50 animate-pulse" style={{ animationDuration: "4.5s" }}>✦</div>
      <div className="absolute top-[38%] left-[85%] w-3 h-3 text-sky-200 opacity-70 animate-pulse" style={{ animationDuration: "2.8s" }}>✦</div>
      <div className="absolute top-[92%] right-[12%] w-4 h-4 text-sky-300 opacity-60 animate-pulse" style={{ animationDuration: "3.8s" }}>✦</div>
    </div>
  );
}
