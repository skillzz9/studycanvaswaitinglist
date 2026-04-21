"use client";

import React from "react";

interface WhiteboardProps {
  theme?: "light" | "dark";
}

export default function Whiteboard({ theme }: WhiteboardProps) {
  // Theme logic matching your Post-it and Clock exactly
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";

  return (
    <div 
      className={`relative flex flex-col flex-shrink-0 select-none pointer-events-none transition-all duration-500 ${themeClass}`}
      style={{ width: "220px", height: "160px" }}
    >
      {/* BOARD FACE: Uses --text-main
          Dark Mode: --text-main is White -> Whiteboard
          Light Mode: --text-main is Black -> Blackboard
      */}
      <div className="w-full h-full border-[6px] border-[var(--border-main)] rounded-sm shadow-xl p-3 flex flex-col bg-[var(--text-main)] transition-colors duration-500">
        
        {/* TRAY MARKERS: Mapped to --bg-card (Cab Sav in Dark, White in Light) */}
        <div className="absolute -bottom-3 left-4 flex gap-1">
          <div className="w-2 h-6 bg-blue-500 rounded-sm rotate-[15deg] shadow-sm" />
          <div className="w-2 h-6 bg-red-500 rounded-sm rotate-[-5deg] shadow-sm" />
          {/* Third marker using your card color */}
          <div className="w-2 h-6 bg-[var(--bg-card)] border border-[var(--border-main)] rounded-sm rotate-[10deg] shadow-sm" />
        </div>

        {/* BOARD CONTENT: Uses --bg-main
            Dark Mode: --bg-main is Black -> Black ink on Whiteboard
            Light Mode: --bg-main is White -> White chalk on Blackboard
        */}
        <div className="opacity-80 font-mono text-[10px] text-[var(--bg-main)] pointer-events-none select-none flex flex-col gap-1 transition-colors duration-500">
          <p className="font-bold border-b border-[var(--bg-main)]/20 pb-1">
            Darren's Math Prep:
          </p>
          <p className="mt-1">y = mx + b</p>
          <p>S(x) = 1 / (1 + e^-x)</p>
          
          {/* Subtle dust overlay only visible on the Blackboard (Light Mode) */}
          <div className="absolute inset-0 bg-[var(--bg-main)]/5 pointer-events-none mix-blend-overlay rounded-sm" />
        </div>
      </div>
    </div>
  );
}