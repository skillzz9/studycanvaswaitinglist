"use client";

import React from "react";

interface WhiteboardProps {
  theme?: "light" | "dark";
  text?: string; // New prop for custom board content
}

export default function Whiteboard({ 
  theme, 
  text = "Math Prep:\ny = mx + b\nS(x) = 1 / (1 + e^-x)" 
}: WhiteboardProps) {
  
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";

  return (
    <div 
      className={`relative flex flex-col flex-shrink-0 select-none pointer-events-none transition-all duration-500 ${themeClass}`}
      style={{ width: "220px", height: "160px" }}
    >
      {/* BOARD FACE */}
      <div className="w-full h-full border-[6px] border-[var(--border-main)] rounded-sm shadow-xl p-3 flex flex-col bg-[var(--text-main)] transition-colors duration-500">
        
        {/* TRAY MARKERS */}
        <div className="absolute -bottom-3 left-4 flex gap-1">
          <div className="w-2 h-6 bg-blue-500 rounded-sm rotate-[15deg] shadow-sm" />
          <div className="w-2 h-6 bg-red-500 rounded-sm rotate-[-5deg] shadow-sm" />
          <div className="w-2 h-6 bg-[var(--bg-card)] border border-[var(--border-main)] rounded-sm rotate-[10deg] shadow-sm" />
        </div>

        {/* BOARD CONTENT */}
        <div className="opacity-80 font-mono text-[10px] text-[var(--bg-main)] pointer-events-none select-none flex flex-col gap-1 transition-colors duration-500 overflow-hidden">
          {/* Using whitespace-pre-wrap allows for line breaks via \n */}
          <p className="whitespace-pre-wrap leading-relaxed">
            {text}
          </p>
          
          {/* Subtle dust overlay for Blackboard mode */}
          <div className="absolute inset-0 bg-[var(--bg-main)]/5 pointer-events-none mix-blend-overlay rounded-sm" />
        </div>
      </div>
    </div>
  );
}