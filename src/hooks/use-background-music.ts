"use client";

import { useCallback, useEffect, useState } from "react";

// Global audio object instance so it is shared across all mounts/uses of this hook
let globalAudio: HTMLAudioElement | null = null;
const globalListeners: Set<(state: "idle" | "playing" | "paused") => void> = new Set();
let globalState: "idle" | "playing" | "paused" = "idle";

function setGlobalState(newState: "idle" | "playing" | "paused") {
  globalState = newState;
  globalListeners.forEach((listener) => listener(newState));
}

export function useBackgroundMusic() {
  const [state, setState] = useState<"idle" | "playing" | "paused">(globalState);

  useEffect(() => {
    const listener = (newState: "idle" | "playing" | "paused") => {
      setState(newState);
    };
    globalListeners.add(listener);
    
    // Sync local state to current global state on mount
    setState(globalState);

    return () => {
      globalListeners.delete(listener);
    };
  }, []);

  const initAudio = () => {
    if (typeof window === "undefined") return null;
    if (!globalAudio) {
      globalAudio = new Audio("/audio/jefe_music.mp3");
      globalAudio.loop = true;
      globalAudio.volume = 0.28; // set volume to a comfortable level (28%)
      
      // Sync events
      globalAudio.addEventListener("play", () => setGlobalState("playing"));
      globalAudio.addEventListener("pause", () => setGlobalState("paused"));
      globalAudio.addEventListener("ended", () => setGlobalState("paused"));
    }
    return globalAudio;
  };

  const play = useCallback(async () => {
    const audio = initAudio();
    if (!audio) return;
    
    // Dispatch event to pause other audio-visual elements if any
    window.dispatchEvent(new CustomEvent("pause-heartbeat"));
    
    try {
      await audio.play();
      setGlobalState("playing");
    } catch (err) {
      console.error("Playback failed", err);
    }
  }, []);

  const stop = useCallback(() => {
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.currentTime = 0; // Reset track to beginning
      setGlobalState("paused");
    }
  }, []);

  useEffect(() => {
    const handlePauseBgMusic = () => {
      stop();
    };
    window.addEventListener("pause-bg-music", handlePauseBgMusic);

    return () => {
      window.removeEventListener("pause-bg-music", handlePauseBgMusic);
    };
  }, [stop]);

  return {
    isPlaying: state === "playing",
    play,
    stop
  };
}

export default useBackgroundMusic;
