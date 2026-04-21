"use client";
import React from "react";

interface StopwatchProps {
  secondsElapsed: number;
  totalMinutes: number; 
  workerCount: number; 
  isSessionComplete: boolean; 
  roomStatus: string; 
  onStart?: () => void;
  onFinish?: () => void;
}

export default function Stopwatch({ 
  secondsElapsed, 
  totalMinutes, 
  workerCount, 
  isSessionComplete, 
  roomStatus, 
  onStart,
  onFinish
}: StopwatchProps) {
  
  // 1. CALCULATE 3X SPEED
  const multiplier = Math.max(1, workerCount);
  const effectiveElapsed = secondsElapsed * multiplier;
  
  const totalSecondsGoal = totalMinutes * 60;
  
  // 2. APPLY SPEED TO REMAINING TIME
  const secondsRemaining = Math.max(0, totalSecondsGoal - effectiveElapsed);

  const formatTime = (totalSeconds: number) => {
    const total = Math.floor(totalSeconds); 
    const hrs = Math.floor(total / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;

    const hDisplay = hrs > 0 ? `${hrs}:` : "";
    const mDisplay = hrs > 0 ? (mins < 10 ? `0${mins}:` : `${mins}:`) : `${mins}:`;
    const sDisplay = secs < 10 ? `0${secs}` : `${secs}`;

    return `${hDisplay}${mDisplay}${sDisplay}`;
  };

  // 3. APPLY SPEED TO PROGRESS BAR
  const timeProgress = totalSecondsGoal > 0 
    ? Math.min(100, (effectiveElapsed / totalSecondsGoal) * 100) 
    : 0;

  return (
    <div className="w-[340px] md:w-[400px] relative overflow-hidden flex bg-app-card p-2 rounded-3xl border-4 border-app-border shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] z-20 items-center gap-4 justify-center font-sans transition-colors duration-300 mt-6">
      
      {/* BACKGROUND PROGRESS FILL */}
      <div 
        className="absolute left-0 top-0 bottom-0 bg-app-accent/20 transition-all duration-1000 ease-linear"
        style={{ width: `${timeProgress}%` }}
      />

      {!isSessionComplete ? (
        <div className="flex items-center gap-3 md:gap-4 justify-center z-10 w-full">
          
          {roomStatus === "idle" ? (
            <button 
              onClick={onStart}
              className="w-16 md:w-20 py-3 md:py-4 border-4 border-app-border rounded-3xl font-black uppercase bg-app-accent text-app-bg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center"
            >
              <span className="text-[10px] md:text-xs">Start</span>
            </button>
          ) : (
            <div className="w-16 md:w-20 py-3 md:py-4 border-4 border-app-border rounded-3xl font-black uppercase bg-app-accent text-app-bg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-app-bg rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs">Live</span>
            </div>
          )}
          
          {/* TIMER DISPLAY */}
          <div className="w-32 md:w-48 tabular-nums text-center text-app-text uppercase tracking-widest text-2xl md:text-4xl font-black drop-shadow-sm">
            {formatTime(secondsRemaining)}
          </div>
          
          <div 
            className={`w-16 md:w-20 py-3 md:py-4 border-4 border-app-border rounded-3xl font-black uppercase transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center
              ${multiplier > 1 ? "bg-app-accent text-app-bg" : "bg-app-bg text-app-accent"}
            `}
          >
            {multiplier}x
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between px-4 gap-4 z-10 py-2">
          <div className="flex flex-col text-left">
            <h2 className="text-xs md:text-sm font-black uppercase text-app-text leading-none">Session Over!</h2>
            <p className="text-[8px] md:text-[10px] font-bold uppercase text-app-accent">Art complete.</p>
          </div>
          <button 
            onClick={onFinish}
            className="flex-1 py-2 md:py-3 bg-app-accent border-4 border-app-border rounded-2xl font-black uppercase text-app-bg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none transition-all text-xs"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}