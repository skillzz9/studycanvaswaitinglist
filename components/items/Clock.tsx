"use client";

import React, { useState, useEffect } from "react";

interface ClockProps {
  theme?: "light" | "dark";
}

export default function Clock({ theme }: ClockProps) {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Theme logic matching your Post-it component exactly
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";

  // Rotation Math
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  if (!mounted) {
    return <div className="w-[160px] h-[160px]" />; // Prevent layout shift
  }

  return (
    <div className={`relative flex flex-col items-center font-space w-[160px] h-[160px] ${themeClass}`}>
      {/* Outer Frame: Uses Cab Sav (--bg-card) with a Wood border (--border-main) */}
      <div className="w-full h-full rounded-full bg-[var(--bg-card)] border-8 border-[var(--border-main)] p-2 relative flex items-center justify-center transition-colors duration-500 shadow-xl">
        
        {/* Face: Blends with the wall background (--bg-main) */}
        <div className="w-full h-full rounded-full bg-[var(--bg-main)] relative overflow-hidden transition-colors duration-500">
          
          {/* Hour Markers: Subtle accent color */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-[var(--accent-main)] opacity-30"
              style={{ 
                transformOrigin: "50% 64px", 
                transform: `translateX(-50%) rotate(${i * 30}deg)` 
              }}
            />
          ))}

          {/* Hour Hand: Main text color */}
          <div 
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-2 h-[30%] bg-[var(--text-main)] rounded-full transition-colors duration-500"
            style={{ 
              transformOrigin: "bottom center",
              transform: `translateX(-50%) rotate(${hourAngle}deg)` 
            }}
          />
          
          {/* Minute Hand: Main text color */}
          <div 
            className="absolute top-[10%] left-1/2 -translate-x-1/2 w-1.5 h-[40%] bg-[var(--text-main)] rounded-full transition-colors duration-500"
            style={{ 
              transformOrigin: "bottom center",
              transform: `translateX(-50%) rotate(${minuteAngle}deg)` 
            }}
          />
          
          {/* Second Hand: Accent color (Beige/Dark Wood) */}
          <div 
            className="absolute top-[5%] left-1/2 -translate-x-1/2 w-1 h-[45%] bg-[var(--accent-main)] rounded-full transition-colors duration-500"
            style={{ 
              transformOrigin: "bottom center",
              transform: `translateX(-50%) rotate(${secondAngle}deg)` 
            }}
          />

          {/* Center Pin: Border color */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--border-main)] border-2 border-[var(--text-main)] z-10 transition-colors duration-500" />
        </div>
      </div>
    </div>
  );
}