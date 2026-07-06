"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/data/invitation";
import { invitationContent } from "@/data/invitation";
import { AudioLines, Play, Pause, Video, Eye, HeartHandshake, Disc3 } from "lucide-react";

interface HeartbeatSectionProps {
  locale: Locale;
}

type Mode = "audio" | "video";
type AudioTrack = "track1" | "track2";

export function HeartbeatSection({ locale }: HeartbeatSectionProps) {
  const content = invitationContent[locale];
  const [mode, setMode] = useState<Mode>("audio");
  const [selectedTrack, setSelectedTrack] = useState<AudioTrack>("track1");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Set up audio source based on selected track
  const audioSrc = selectedTrack === "track1" ? "/audio/corazon.opus" : "/audio/corazon2.opus";

  // Dispatch event to pause background music
  const triggerPauseBgMusic = () => {
    window.dispatchEvent(new CustomEvent("pause-bg-music"));
  };

  // Toggle Audio playback
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
    } else {
      // Pause video if playing
      if (videoRef.current && isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
      triggerPauseBgMusic();
      audio.play().then(() => {
        setIsAudioPlaying(true);
      }).catch((err) => console.log("Audio playback blocked:", err));
    }
  };

  // Toggle Video playback
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoPlaying) {
      video.pause();
      setIsVideoPlaying(false);
    } else {
      // Pause audio if playing
      if (audioRef.current && isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      }
      triggerPauseBgMusic();
      video.play().then(() => {
        setIsVideoPlaying(false); // Video play initiates
      }).catch((err) => console.log("Video playback blocked:", err));
    }
  };

  // Change audio track
  const handleTrackChange = (track: AudioTrack) => {
    setSelectedTrack(track);
    setIsAudioPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  };

  // Listen to background music play event to pause heartbeat
  useEffect(() => {
    const handlePauseHeartbeat = () => {
      if (audioRef.current && isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      }
      if (videoRef.current && isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    };

    window.addEventListener("play-bg-music", handlePauseHeartbeat);
    window.addEventListener("pause-heartbeat", handlePauseHeartbeat);

    return () => {
      window.removeEventListener("play-bg-music", handlePauseHeartbeat);
      window.removeEventListener("pause-heartbeat", handlePauseHeartbeat);
    };
  }, [isAudioPlaying, isVideoPlaying]);

  // Handle video element play/pause events directly to sync UI state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsVideoPlaying(true);
    const onPause = () => setIsVideoPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [mode]);

  // Load new audio source on change
  useEffect(() => {
    if (audioRef.current && isAudioPlaying) {
      audioRef.current.play().catch(() => setIsAudioPlaying(false));
    }
  }, [audioSrc, isAudioPlaying]);

  return (
    <section className="glass-card rounded-[2.5rem] p-6 md:p-8 space-y-6 shadow-[0_20px_50px_rgba(2,132,199,0.06)]">
      <audio ref={audioRef} src={audioSrc} loop onEnded={() => setIsAudioPlaying(false)} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
            <HeartHandshake className="h-5.5 w-5.5 animate-pulse" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-black text-slate-800">
              {locale === "es" ? "¿Quieres escuchar mi corazón?" : "Want to hear my heartbeat?"}
            </h2>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
              {locale === "es" ? "El Latido de Mi Vida" : "The Beat of My Life"}
            </p>
          </div>
        </div>

        {/* Toggle Mode Buttons (Audio vs Video) */}
        <div className="flex p-1 rounded-2xl bg-sky-50/60 border border-sky-100/30 max-w-[280px]">
          <button
            type="button"
            onClick={() => setMode("audio")}
            className={`flex items-center gap-2 py-2 px-4 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              mode === "audio"
                ? "bg-sky-700 text-white shadow-md"
                : "text-slate-600 hover:text-sky-700 hover:bg-sky-100/30"
            }`}
          >
            <AudioLines className="h-4 w-4" />
            {locale === "es" ? "Solo Escucha" : "Just Listen"}
          </button>
          <button
            type="button"
            onClick={() => setMode("video")}
            className={`flex items-center gap-2 py-2 px-4 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              mode === "video"
                ? "bg-sky-700 text-white shadow-md"
                : "text-slate-600 hover:text-sky-700 hover:bg-sky-100/30"
            }`}
          >
            <Eye className="h-4 w-4" />
            {locale === "es" ? "Mira cómo vivo" : "See me Alive"}
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Playback Panel */}
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-600 font-medium">
            {locale === "es"
              ? "¡Hola! Soy Santiago. Mis papás grabaron el dulce latido de mi corazón para que sientas cómo me preparo para despegar. Puedes elegir solo escuchar mi latido o ver mi primer radar de amor."
              : "Hi! I'm Santiago. My parents recorded my heartbeat so you can feel how I prepare to takeoff. You can choose to just listen to my heartbeat or view my first love radar."}
          </p>

          {mode === "audio" ? (
            /* Audio Mode Custom Controls */
            <div className="space-y-4 p-5 rounded-[2rem] bg-sky-50/40 border border-sky-100/30">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-sky-700 block">
                {locale === "es" ? "Selecciona una grabación:" : "Select a recording:"}
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => handleTrackChange("track1")}
                  className={`flex-1 flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedTrack === "track1"
                      ? "bg-white border-sky-200 text-sky-700 shadow-sm"
                      : "bg-white/40 border-transparent text-slate-500 hover:bg-white/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Disc3 className={`h-4 w-4 ${selectedTrack === "track1" && isAudioPlaying ? "animate-spin" : ""}`} />
                    {locale === "es" ? "Grabación 1 (Suave)" : "Recording 1 (Soft)"}
                  </span>
                  <span className="text-[10px] opacity-60">0:15s</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTrackChange("track2")}
                  className={`flex-1 flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    selectedTrack === "track2"
                      ? "bg-white border-sky-200 text-sky-700 shadow-sm"
                      : "bg-white/40 border-transparent text-slate-500 hover:bg-white/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Disc3 className={`h-4 w-4 ${selectedTrack === "track2" && isAudioPlaying ? "animate-spin" : ""}`} />
                    {locale === "es" ? "Grabación 2 (Fuerte)" : "Recording 2 (Strong)"}
                  </span>
                  <span className="text-[10px] opacity-60">0:24s</span>
                </button>
              </div>

              {/* Main Play Toggle for Audio */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleAudio}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg shadow-sky-700/10 transition-all hover:scale-105 hover:bg-sky-800 active:scale-95 cursor-pointer"
                  aria-label={isAudioPlaying ? "Pausar" : "Reproducir"}
                >
                  {isAudioPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 translate-x-[1px]" />}
                </button>
                <div>
                  <p className="text-sm font-black text-slate-800">
                    {isAudioPlaying 
                      ? (locale === "es" ? "Escuchando mi corazoncito..." : "Listening to my heart...")
                      : (locale === "es" ? "Pulsa play para escuchar" : "Press play to listen")}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {locale === "es" ? "Silenciará la música de fondo automáticamente" : "Will mute background music automatically"}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Video Mode Instructions */
            <div className="p-5 rounded-[2rem] bg-sky-50/40 border border-sky-100/30 space-y-3">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-sky-700 block">
                {locale === "es" ? "Control de Radar" : "Radar Controls"}
              </span>
              <p className="text-xs leading-relaxed text-slate-500 font-medium">
                {locale === "es"
                  ? "Pulsa directamente sobre la pantalla de radar a la derecha para iniciar o detener el video de mi ultrasonido latiendo. ¡Se detendrá la música de fondo!"
                  : "Click directly on the radar screen on the right to start or stop the video of my beating ultrasound. Will stop background music!"}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={toggleVideo}
                  className="flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-4 py-2 text-xs font-bold text-white hover:bg-sky-800 cursor-pointer"
                >
                  {isVideoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  {isVideoPlaying ? (locale === "es" ? "Pausar Video" : "Pause Video") : (locale === "es" ? "Iniciar Video" : "Start Video")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Visualizer Panel (Soundwave animation or Video Player) */}
        <div className="glass-card rounded-[2rem] border border-sky-100/40 p-4 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-[0_15px_40px_rgba(2,132,199,0.04)] relative bg-slate-950">
          {mode === "audio" ? (
            /* Animated Audio Soundwave */
            <div className="flex items-end justify-center gap-1.5 h-32 w-full px-6">
              {Array.from({ length: 15 }).map((_, i) => {
                // Staggered custom animation durations for a natural wave
                const dur = 0.6 + (i % 5) * 0.15;
                return (
                  <span
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-sky-600 to-sky-300 rounded-full transition-all duration-300"
                    style={{
                      height: isAudioPlaying ? "100%" : "8px",
                      animation: isAudioPlaying ? `wave ${dur}s ease-in-out infinite alternate` : "none",
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                );
              })}
              {/* Internal keyframe for soundwave visualizer */}
              <style>{`
                @keyframes wave {
                  0% { height: 10%; }
                  100% { height: 95%; }
                }
              `}</style>
            </div>
          ) : (
            /* Video Player Screen */
            <div className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center" onClick={toggleVideo}>
              <video
                ref={videoRef}
                src="/video/videocorazon.mp4"
                playsInline
                loop
                className="w-full h-full object-cover"
              />
              
              {/* Video Play Overlay Overlay HUD */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 border border-white/30 backdrop-blur-md shadow-lg animate-pulse mb-3">
                    <Video className="h-6 w-6 text-white" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-200">
                    {locale === "es" ? "Ver Latido" : "Watch Heartbeat"}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default HeartbeatSection;
