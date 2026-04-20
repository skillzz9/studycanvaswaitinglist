"use client";
import React from "react";

export default function StudyRoomDemo() {
  const percentage = 84;
  const timeRemaining = "24:59";
  const multiplier = 3;

  return (
    <div className="flex flex-col items-center justify-center p-0 m-0 gap-3">
      {/* 1. THE CANVAS */}
      <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] bg-white rounded-2xl border-4 border-app-border overflow-hidden">
        <div className="absolute top-3 right-3 z-30 flex items-center justify-center px-2 py-0.5 bg-app-card border-4 border-app-border rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-app-text tabular-nums">
            {percentage}%
          </span>
        </div>
        <div className="absolute inset-0 z-0">
          <img src="/bunnypainting.png" alt="Study Art" className="w-full h-full object-cover grayscale-[0.2] contrast-125" />
        </div>
      </div>

      {/* 2. THE STOPWATCH */}
      <div className="w-[280px] md:w-[350px] relative overflow-hidden flex bg-app-card p-1.5 rounded-2xl border-4 border-app-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-20 items-center gap-2 justify-center font-sans">
        <div className="absolute left-0 top-0 bottom-0 bg-app-accent/20" style={{ width: `60%` }} />
        <div className="relative z-10 w-14 md:w-16 py-2 border-4 border-app-border rounded-xl font-bold uppercase bg-app-accent text-app-card flex items-center justify-center gap-1">
          <span className="w-1.5 h-1.5 bg-app-card rounded-full animate-pulse" />
          <span className="text-[8px] md:text-[10px]">Live</span>
        </div>
        <div className="relative z-10 flex-1 tabular-nums text-center text-app-text uppercase tracking-widest text-xl md:text-2xl font-black">{timeRemaining}</div>
        <div className="relative z-10 w-14 md:w-16 py-2 border-4 border-app-border rounded-xl font-bold uppercase bg-app-accent text-app-card flex items-center justify-center">
          <span className="text-[8px] md:text-[10px]">{multiplier}x</span>
        </div>
      </div>
    </div>
  );
}