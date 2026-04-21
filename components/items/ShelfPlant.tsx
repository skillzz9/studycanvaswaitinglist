"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShelfPlantProps {
  theme?: "light" | "dark";
}

export default function ShelfPlant({ theme }: ShelfPlantProps) {
  // Matches your Post-it theme logic
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";

  const danceAnimation = {
    rotate: [-5, 5, -5], 
    transition: {
      duration: 4, 
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div 
      className={`relative flex flex-col items-center flex-shrink-0 select-none pointer-events-none ${themeClass}`}
      style={{ width: "160px", height: "180px" }}
    >
      {/* 1. THE PLANT UNIT */}
      <motion.div
        className="relative z-10 origin-bottom flex flex-col items-center"
        style={{ height: "130px", bottom: "10px" }}
        animate={danceAnimation}
      >
        {/* Flower Head */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* STATIC PINK PETALS: This color will no longer change with the theme */}
          {[0, 72, 144, 216, 288].map((deg) => (
            <div
              key={deg}
              className="absolute w-6 h-6 bg-[#ffb7c5] rounded-full opacity-90 border-[1px] border-black/5"
              style={{
                transform: `rotate(${deg}deg) translateY(-8px)`,
              }}
            />
          ))}
          {/* Center */}
          <div className="relative z-10 w-4 h-4 rounded-full bg-yellow-400 border-2 border-black/5" />
        </div>

        {/* Stem: Remains theme-reactive */}
        <div className="w-1 h-20 bg-[var(--border-main)] -mt-2 rounded-full relative transition-colors duration-500">
          <div className="absolute top-8 -left-4 w-5 h-3 bg-[var(--border-main)] rounded-full rotate-[-30deg] opacity-80" />
          <div className="absolute top-10 -right-4 w-5 h-3 bg-[var(--border-main)] rounded-full rotate-[30deg] opacity-80" />
        </div>
      </motion.div>

      {/* 2. THE POT: Body remains Cab Sav in dark mode (--bg-card) */}
      <div className="relative z-20 -mt-6 flex flex-col items-center">
        <div className="w-20 h-4 bg-[var(--border-main)] rounded-t-sm border-b border-black/10 transition-colors duration-500" />
        <div 
          className="w-16 h-14 bg-[var(--bg-card)] rounded-b-lg shadow-md transition-colors duration-500"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)" }} 
        />
      </div>

      {/* 3. THE SHELF */}
      <div 
        className="relative z-10 -mt-1 bg-[var(--border-main)] border-4 border-[var(--bg-main)] rounded-xl shadow-lg transition-colors duration-500"
        style={{ width: "140px", height: "14px" }}
      />
    </div>
  );
}