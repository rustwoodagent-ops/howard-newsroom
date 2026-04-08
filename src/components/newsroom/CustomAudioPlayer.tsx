"use client";

import { useState, useRef, useEffect } from "react";
import { Headphones, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { getImagePath } from "@/lib/images";

interface CustomAudioPlayerProps {
  audioUrl: string;
  duration?: string;
  title?: string;
  className?: string;
}

export function CustomAudioPlayer({
  audioUrl,
  duration = "0:24",
  title = "Listen to this report",
  className,
}: CustomAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDurationSeconds(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercent = durationSeconds > 0 ? (currentTime / durationSeconds) * 100 : 0;

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden",
        className
      )}
    >
      {/* Subtle gradient overlay for glass depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-neutral-100/30 pointer-events-none" />

      <div className="relative p-5 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-200/80 flex items-center justify-center">
              <Headphones className="w-4 h-4 text-neutral-600" />
            </div>
            <span className="text-base font-semibold text-neutral-800">{title}</span>
          </div>
          {isPlaying && (
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase bg-neutral-800 text-white border border-neutral-700">
              Now Playing
            </span>
          )}
        </div>

        {/* Play button and time */}
        <div className="flex items-center gap-4 mb-5">
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>
          <div className="flex-1 text-right">
            <span className="text-2xl font-light tracking-tight text-neutral-700 tabular-nums">
              {formatTime(currentTime)} <span className="text-neutral-400 mx-1">/</span> {duration}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mb-5">
          <div className="h-2 rounded-full bg-neutral-200/80 overflow-hidden">
            <div
              className="h-full bg-neutral-700 rounded-full transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={durationSeconds || 100}
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Seek"
          />
          {/* Thumb indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-700 border-2 border-white shadow-md pointer-events-none transition-all duration-100"
            style={{ left: `calc(${progressPercent}% - 8px)` }}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleReplay}
            className="w-full py-3 rounded-xl border border-neutral-300/80 bg-white/50 hover:bg-white/80 text-neutral-800 font-semibold tracking-[0.1em] uppercase text-sm transition-all active:scale-[0.98]"
          >
            Replay
          </button>
          <button
            onClick={handleStop}
            className="text-neutral-600 hover:text-neutral-800 font-semibold tracking-[0.1em] uppercase text-sm transition-colors py-1"
          >
            Stop
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-neutral-200/60">
          <p className="text-xs text-neutral-500 tracking-wide">
            Streaming audio <span className="mx-1">·</span> Enhanced player UI
          </p>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata">
        <source src={getImagePath(audioUrl)} />
      </audio>
    </div>
  );
}
