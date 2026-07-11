"use client";

import { useBackgroundMusic } from "@/hooks/use-background-music";

interface MusicDockProps {
  title: string;
  description: string;
}

export function MusicDock({ title, description }: MusicDockProps) {
  const { isPlaying, play, stop } = useBackgroundMusic();

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Floating music note animation keyframes */}
      <style>{`
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
        className="group relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0_12px_36px_rgba(2,132,199,0.18)] hover:shadow-[0_18px_48px_rgba(2,132,199,0.25)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer outline-none active:scale-95 bg-transparent"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {/* Animated Floating Music Notes when playing */}
        {isPlaying && (
          <>
            <span className="note-1 absolute -top-1 -right-1 text-xs select-none">🎵</span>
            <span className="note-2 absolute -top-1 -left-1 text-xs select-none">🎶</span>
            <span className="note-3 absolute -top-3 left-6 text-[10px] select-none">✨</span>
          </>
        )}

        {/* Circular baby image states with vinyl record rotation effect */}
        <img
          src={isPlaying ? "/images/music_playing.png" : "/images/music_paused.png"}
          alt="Reproductor de música"
          className={`w-full h-full rounded-full object-cover transition-transform duration-500 ${
            isPlaying ? "animate-[spin_18s_linear_infinite]" : "hover:rotate-6"
          }`}
        />

        {/* Accessibility screen-reader fallback */}
        <span className="sr-only">
          {title}: {description}
        </span>
      </button>
    </div>
  );
}
export default MusicDock;
