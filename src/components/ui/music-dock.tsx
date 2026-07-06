"use client";

import { useBackgroundMusic } from "@/hooks/use-background-music";
import { Music2 } from "lucide-react";

interface MusicDockProps {
  title: string;
  description: string;
}

export function MusicDock({ title, description }: MusicDockProps) {
  const { isPlaying, play, stop } = useBackgroundMusic();

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Self-contained styling for specialized music flight animations */}
      <style>{`
        @keyframes planeFlightWiggle {
          0%, 100% { transform: rotate(-8deg) translateY(0px) scale(1); }
          50% { transform: rotate(8deg) translateY(-4px) scale(1.08); }
        }
        @keyframes propellerSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes noteFloat1 {
          0% { transform: translate(0, 0) scale(0.6) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(14px, -60px) scale(1.15) rotate(20deg); opacity: 0; }
        }
        @keyframes noteFloat2 {
          0% { transform: translate(0, 0) scale(0.6) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(-16px, -65px) scale(1.15) rotate(-25deg); opacity: 0; }
        }
        @keyframes noteFloat3 {
          0% { transform: translate(0, 0) scale(0.5) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(10px, -50px) scale(1) rotate(15deg); opacity: 0; }
        }
        .anim-plane-flight {
          animation: planeFlightWiggle 1.4s ease-in-out infinite;
          transform-origin: center center;
        }
        .anim-propeller {
          animation: propellerSpin 0.3s linear infinite;
          transform-origin: 41px 29px; /* Center of propeller */
        }
        .note-1 {
          animation: noteFloat1 2.4s linear infinite;
        }
        .note-2 {
          animation: noteFloat2 2.4s linear infinite;
          animation-delay: 0.8s;
        }
        .note-3 {
          animation: noteFloat3 2.4s linear infinite;
          animation-delay: 1.6s;
        }
      `}</style>

      <button
        type="button"
        onClick={isPlaying ? stop : play}
        className={`group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-[0_18px_45px_rgba(59,130,246,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.3)] cursor-pointer outline-none ${
          isPlaying ? "ring-2 ring-sky-300" : ""
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {/* Animated Floating Music Notes when playing */}
        {isPlaying && (
          <>
            <span className="note-1 absolute top-2 right-2 text-xs select-none">🎵</span>
            <span className="note-2 absolute top-2 left-2 text-xs select-none">🎶</span>
            <span className="note-3 absolute top-1 left-6 text-[10px] select-none">✨</span>
          </>
        )}

        {/* Custom Airplane SVG Container */}
        <div className={`relative w-12 h-12 flex items-center justify-center ${isPlaying ? "anim-plane-flight" : ""}`}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full select-none"
          >
            {/* Plane Tail Wing */}
            <path d="M12 28L4 16H8L18 28Z" fill="#0284C7" stroke="#FFF" strokeWidth="0.8" />

            {/* Fuselage core */}
            <rect x="10" y="22" width="32" height="14" rx="7" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />

            {/* Cockpit canopy (Glass) */}
            <path d="M28 22C31 22 36 25 36 29H28V22Z" fill="#E0F2FE" />
            
            {/* Cockpit Eyes inside glass */}
            {isPlaying ? (
              // Happy winking eyes
              <path d="M30 26Q32 24 33 26" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              // Resting sleeping eyes
              <path d="M30 25.5Q31.5 27 33 25.5" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" />
            )}

            {/* Propeller Hub Nose */}
            <path d="M42 26.5C43.5 26.5 44.5 27.5 44.5 29C44.5 30.5 43.5 31.5 42 31.5V26.5Z" fill="#F59E0B" />
            
            {/* Propeller Blades (always visible, spins when playing) */}
            <g className={isPlaying ? "anim-propeller" : ""}>
              <ellipse cx="41.5" cy="29" rx="1.5" ry="10" fill="#E2E8F0" opacity="0.85" stroke="#D97706" strokeWidth="0.6" />
            </g>

            {/* Main wing */}
            <path d="M24 35L16 48C15 50 19 51 21 49L32 35H24Z" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.2" />

            {/* Headphones over cockpit */}
            {/* Headband */}
            <path
              d="M20 23C20 23 23 15 28 15C33 15 36 23 36 23"
              stroke="#0284C7"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Left Ear Pad */}
            <rect x="17.5" y="21" width="3.5" height="7.5" rx="1.5" fill="#334155" />
            {/* Right Ear Pad */}
            <rect x="35" y="21" width="3.5" height="7.5" rx="1.5" fill="#334155" />
          </svg>
        </div>

        {/* Accessibility screen-reader fallback */}
        <span className="sr-only">
          {title}: {description}
        </span>
        <Music2 className="hidden" />
      </button>
    </div>
  );
}
export default MusicDock;
