"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type MusicState = "idle" | "playing" | "paused";

type MelodyNote = {
  note: number; // frequency in Hz
  dur: number;  // duration in beats
};

// "Twinkle Twinkle Little Star" transposed to a high music box octave (Octave 5 & 6)
const melody: MelodyNote[] = [
  { note: 523.25, dur: 1 }, { note: 523.25, dur: 1 }, { note: 783.99, dur: 1 }, { note: 783.99, dur: 1 },
  { note: 880.00, dur: 1 }, { note: 880.00, dur: 1 }, { note: 783.99, dur: 2 },
  { note: 698.46, dur: 1 }, { note: 698.46, dur: 1 }, { note: 659.25, dur: 1 }, { note: 659.25, dur: 1 },
  { note: 587.33, dur: 1 }, { note: 587.33, dur: 1 }, { note: 523.25, dur: 2 },

  { note: 783.99, dur: 1 }, { note: 783.99, dur: 1 }, { note: 698.46, dur: 1 }, { note: 698.46, dur: 1 },
  { note: 659.25, dur: 1 }, { note: 659.25, dur: 1 }, { note: 587.33, dur: 2 },
  { note: 783.99, dur: 1 }, { note: 783.99, dur: 1 }, { note: 698.46, dur: 1 }, { note: 698.46, dur: 1 },
  { note: 659.25, dur: 1 }, { note: 659.25, dur: 1 }, { note: 587.33, dur: 2 },

  { note: 523.25, dur: 1 }, { note: 523.25, dur: 1 }, { note: 783.99, dur: 1 }, { note: 783.99, dur: 1 },
  { note: 880.00, dur: 1 }, { note: 880.00, dur: 1 }, { note: 783.99, dur: 2 },
  { note: 698.46, dur: 1 }, { note: 698.46, dur: 1 }, { note: 659.25, dur: 1 }, { note: 659.25, dur: 1 },
  { note: 587.33, dur: 1 }, { note: 587.33, dur: 1 }, { note: 523.25, dur: 2 }
];

export function useBackgroundMusic() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const activeNodesRef = useRef<{ oscs: OscillatorNode[]; gain: GainNode }[]>([]);
  const schedulerIntervalRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef<number>(0);
  const noteIndexRef = useRef<number>(0);
  const masterGainRef = useRef<GainNode | null>(null);
  const [state, setState] = useState<MusicState>("idle");

  const stop = useCallback(() => {
    // Clear scheduler interval
    if (schedulerIntervalRef.current !== null) {
      window.clearInterval(schedulerIntervalRef.current);
      schedulerIntervalRef.current = null;
    }

    // Stop and disconnect all active playing nodes
    activeNodesRef.current.forEach(({ oscs, gain }) => {
      oscs.forEach((osc) => {
        try {
          osc.stop();
        } catch {
          // ignore
        }
        osc.disconnect();
      });
      gain.disconnect();
    });
    activeNodesRef.current = [];

    // Disconnect master gain
    if (masterGainRef.current) {
      masterGainRef.current.disconnect();
      masterGainRef.current = null;
    }

    // Close audio context
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => undefined);
      audioContextRef.current = null;
    }

    setState("paused");
  }, []);

  const play = useCallback(async () => {
    if (typeof window === "undefined") return;
    
    // Dispatch event to pause heartbeat
    window.dispatchEvent(new CustomEvent("pause-heartbeat"));
    
    // Safety stop before starting
    stop();

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      // Master Gain for smooth volume control
      const masterGain = audioContext.createGain();
      masterGain.gain.setValueAtTime(0.08, audioContext.currentTime); // Soft background volume
      masterGain.connect(audioContext.destination);
      masterGainRef.current = masterGain;

      nextNoteTimeRef.current = audioContext.currentTime + 0.1;
      noteIndexRef.current = 0;

      const tempo = 80; // Gentle, sleepy music box tempo (80 BPM)
      const secondsPerBeat = 60.0 / tempo;

      const scheduleNote = (noteIndex: number, time: number) => {
        const item = melody[noteIndex];
        if (!item || item.note === 0) return;

        // Music Box chime consists of:
        // 1. A primary sine wave for clear chime tone
        const osc1 = audioContext.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(item.note, time);

        // 2. An octave-overtone sine wave for metallic sparkle
        const osc2 = audioContext.createOscillator();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(item.note * 2, time);

        // Note envelope (Instant pluck, long decay to emulate music box key)
        const noteGain = audioContext.createGain();
        noteGain.gain.setValueAtTime(0, time);
        // Rapid attack
        noteGain.gain.linearRampToValueAtTime(0.3, time + 0.01);
        // Sweet exponential decay
        noteGain.gain.exponentialRampToValueAtTime(0.0001, time + 1.8);

        // Filter out harsh lows, keep crystal high chime frequencies
        const filter = audioContext.createBiquadFilter();
        filter.type = "highpass";
        filter.frequency.setValueAtTime(200, time);

        // Connect nodes
        osc1.connect(noteGain);
        osc2.connect(noteGain);
        noteGain.connect(filter);
        filter.connect(masterGain);

        osc1.start(time);
        osc2.start(time);

        const duration = 2.0; // Let note ring out
        osc1.stop(time + duration);
        osc2.stop(time + duration);

        const nodeGroup = { oscs: [osc1, osc2], gain: noteGain };
        activeNodesRef.current.push(nodeGroup);

        // Clean up node reference after it finishes playing
        setTimeout(() => {
          activeNodesRef.current = activeNodesRef.current.filter((n) => n !== nodeGroup);
          osc1.disconnect();
          osc2.disconnect();
          noteGain.disconnect();
          filter.disconnect();
        }, duration * 1000 + 500);
      };

      // Scheduler loop running every 200ms
      const scheduler = () => {
        if (!audioContextRef.current) return;
        const lookAhead = 0.4; // schedule notes 400ms ahead
        
        while (nextNoteTimeRef.current < audioContext.currentTime + lookAhead) {
          scheduleNote(noteIndexRef.current, nextNoteTimeRef.current);
          
          // Increment time based on note duration
          const currentNoteDuration = melody[noteIndexRef.current].dur;
          nextNoteTimeRef.current += currentNoteDuration * secondsPerBeat;
          
          // Loop melody
          noteIndexRef.current = (noteIndexRef.current + 1) % melody.length;
        }
      };

      // Start initial tick and schedule interval
      scheduler();
      schedulerIntervalRef.current = window.setInterval(scheduler, 200);
      setState("playing");
    } catch (err) {
      console.error("Failed to initialize Web Audio lullaby context", err);
      setState("paused");
    }
  }, [stop]);

  useEffect(() => {
    const handlePauseBgMusic = () => {
      stop();
    };
    window.addEventListener("pause-bg-music", handlePauseBgMusic);

    return () => {
      window.removeEventListener("pause-bg-music", handlePauseBgMusic);
      stop();
    };
  }, [stop]);

  return {
    isPlaying: state === "playing",
    play,
    stop
  };
}
