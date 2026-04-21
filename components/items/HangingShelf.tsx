"use client";

import React from "react";

interface HangingShelfProps {
  theme?: "light" | "dark";
  width?: number;         // Dynamic width of the wood bar
  hangingHeight?: number; // Height from the anchor dot to the bar
}

export default function HangingShelf({ 
  theme = "dark", 
  width = 180, 
  hangingHeight = 80 
}: HangingShelfProps) {
  const isDark = theme === "dark";

  const colors = {
    wood: isDark ? "bg-[#5e503f]" : "bg-[#a9927d]",
    border: isDark ? "border-[#2d0a11]" : "border-[#5e503f]",
    rope: isDark ? "stroke-[#a9927d]" : "stroke-[#5e503f]",
    anchor: isDark ? "bg-[#49111c]" : "bg-[#5e503f]",
  };

  const SHELF_HEIGHT = 12;
  const TOTAL_HEIGHT = hangingHeight + SHELF_HEIGHT;

  return (
    <div 
      className="relative flex flex-col items-center flex-shrink-0 select-none pointer-events-none"
      style={{ width: `${width}px`, height: `${TOTAL_HEIGHT}px` }}
    >
      {/* 1. THE ANCHOR DOT */}
      <div className={`absolute top-0 w-3 h-3 rounded-full ${colors.anchor} z-20 shadow-sm`} />

      {/* 2. THE ROPE (Dynamically calculated SVG path) */}
      <svg 
        width={width} 
        height={hangingHeight} 
        className="absolute top-[6px] z-10"
      >
        <path
          d={`M ${width / 2} 0 L 10 ${hangingHeight} M ${width / 2} 0 L ${width - 10} ${hangingHeight}`}
          fill="none"
          strokeWidth="2"
          className={`${colors.rope} transition-colors duration-500`}
          strokeLinecap="round"
        />
      </svg>

      {/* 3. THE WOOD BAR */}
      <div 
        className={`absolute bottom-0 ${colors.wood} border-2 ${colors.border} rounded-sm shadow-md transition-colors duration-500`}
        style={{ width: `${width}px`, height: `${SHELF_HEIGHT}px` }}
      />
    </div>
  );
}