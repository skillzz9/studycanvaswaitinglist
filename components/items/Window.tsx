"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface WindowProps {
  theme?: "light" | "dark";
}

const starVariants: Variants = {
  flicker: (delay: number) => ({
    opacity: [0.8, 0.2, 0.8],
    transition: {
      duration: 3 + Math.random(),
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  }),
};

export default function Window({ theme }: WindowProps) {
  // Theme logic matching your Post-it and Retro TV exactly
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";

  // PHYSICAL DIMENSIONS
  const WINDOW_WIDTH = 240;
  const WINDOW_HEIGHT = 320;
  const SILL_WIDTH = 280;

  return (
    <div 
      className={`relative flex flex-col items-center flex-shrink-0 pointer-events-none select-none ${themeClass}`} 
      style={{ width: `${SILL_WIDTH}px`, height: `${WINDOW_HEIGHT + 40}px` }}
    >
      {/* 1. MAIN OUTER FRAME: Uses --bg-card and --border-main */}
      <div 
        style={{ width: `${WINDOW_WIDTH}px`, height: `${WINDOW_HEIGHT}px` }}
        className="relative bg-[var(--bg-card)] border-8 border-[var(--border-main)] p-2 shadow-2xl transition-all duration-500"
      >
        {/* 2. THE GLASS / SKY */}
        <div 
          className="w-full h-full border-4 border-[var(--border-main)] relative overflow-hidden flex items-center justify-center transition-all duration-500"
          style={{
            // Night sky uses your core variables: --bg-main to --bg-card
            background: theme === "dark" 
              ? "linear-gradient(to bottom, var(--bg-main), var(--bg-card))" 
              : "linear-gradient(to bottom, #7dd3fc, #dbeafe)"
          }}
        >
          
          {/* STAR LAYER: Only renders when the theme prop is explicitly dark */}
          {theme === "dark" && (
            <div className="absolute inset-0">
              {[
                { t: '15%', l: '20%', d: 0.2 },
                { t: '40%', l: '70%', d: 0.8 },
                { t: '80%', l: '30%', d: 0.1 },
                { t: '25%', r: '20%', d: 0.5 },
              ].map((star, i) => (
                <motion.div
                  key={i}
                  custom={star.d}
                  animate="flicker"
                  variants={starVariants}
                  className="absolute w-1 h-1 rounded-full bg-[#f5f2e9] shadow-[0_0_2px_#f5f2e9]"
                  style={{ top: star.t, left: star.l, right: star.r }}
                />
              ))}
            </div>
          )}

          {/* SUN LAYER: Only renders in light mode */}
          {theme === "light" && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-8 left-8 w-12 h-12 bg-yellow-100 rounded-full blur-xl opacity-80"
            />
          )}
          
          {/* 3. CROSSBARS: Mapped to --border-main with low opacity */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-[var(--border-main)] -translate-y-1/2 opacity-30 transition-colors duration-500" />
          <div className="absolute top-0 left-1/2 w-2 h-full bg-[var(--border-main)] -translate-x-1/2 opacity-30 transition-colors duration-500" />
        </div>
      </div>

      {/* 4. THE WINDOW SILL: Uses --bg-card and --border-main */}
      <div 
        style={{ width: `${SILL_WIDTH}px` }}
        className="h-6 bg-[var(--bg-card)] border-4 border-[var(--border-main)] mt-1 shadow-xl transition-all duration-500" 
      />
    </div>
  );
}