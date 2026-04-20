"use client";
import React from "react";

export default function BrokenCanvasDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-0 m-0 gap-3">
      
      {/* 1. THE CANVAS (Sized to match StudyRoomDemo) */}
      <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative bg-white border-4 border-app-border rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
        
        {/* LAYER 1: THE BUNNY IMAGE - High contrast Black and White */}
        <div className="absolute inset-0 z-0 grayscale contrast-[1.8] brightness-50">
          <img 
            src="/bunny.png" 
            alt="Lost Study Progress" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* LAYER 2: THE "ERASURE" - White drips */}
        <div className="absolute inset-0 z-10 text-white">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
              <path d="
                M 0,0 
                L 100,0 
                L 100,35 
                C 90,45 88,85 78,55 
                C 70,25 68,75 58,105 
                C 50,135 45,65 38,55 
                C 30,45 28,95 22,120 
                C 15,145 12,75 8,70 
                C 4,65 2,55 0,60 
                Z" 
              />
           </svg>
        </div>

        {/* LAYER 3: EXTRA DRIP DROPLETS */}
        <div className="absolute inset-0 z-20 text-white pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <circle cx="15" cy="90" r="4" />
            <circle cx="55" cy="110" r="6" />
            <circle cx="82" cy="75" r="3.5" />
          </svg>
        </div>
      </div>

      {/* 2. THE "ERASED" STOPWATCH BAR (Aligned with the Focus timer) */}
      <div className="w-[280px] md:w-[350px] relative overflow-hidden flex bg-app-card p-1.5 rounded-2xl border-4 border-app-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] z-20 items-center gap-2 justify-center font-sans">
        
        {/* Background Fill (Set to 0% to show empty/lost state) */}
        <div className="absolute left-0 top-0 bottom-0 bg-red-500/10 w-full" />

        {/* STATUS PILL */}
        <div className="relative z-10 w-14 md:w-16 py-2 border-4 border-app-border rounded-xl font-bold uppercase bg-red-500 text-white flex items-center justify-center">
          <span className="text-[8px] md:text-[10px]">LOST</span>
        </div>
        
        {/* MAIN TEXT */}
        <div className="relative z-10 flex-1 tabular-nums text-center text-red-500 uppercase tracking-widest text-xl md:text-2xl font-black italic">
          ERASED
        </div>
        
        {/* RESET PILL */}
        <div className="relative z-10 w-14 md:w-16 py-2 border-4 border-app-border rounded-xl font-bold uppercase bg-app-bg text-app-text opacity-40 flex items-center justify-center">
          <span className="text-[8px] md:text-[10px]">0x</span>
        </div>
      </div>

    </div>
  );
}