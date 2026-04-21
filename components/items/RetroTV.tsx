"use client";

import React from "react";
import { motion } from "framer-motion";

interface RetroTVProps {
  theme?: "light" | "dark";
}

const RetroWireframeCube = () => {
  const size = 60; 
  const halfSize = size / 2;
  
  // Using --accent-main for the cube edges
  const edgeStyle = "absolute inset-0 border-[1px] border-dashed border-[var(--accent-main)] opacity-90 rounded-sm backface-hidden"; 

  const rotationVariants = {
    animate: {
      rotateY: 360,
      rotateX: [15, 45, 15, -15, 15], 
      transition: {
        rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative"
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d" 
        }}
        variants={rotationVariants}
        animate="animate"
      >
        <div className={edgeStyle} style={{ transform: `translateZ(${halfSize}px)` }} />
        <div className={edgeStyle} style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }} />
        <div className={edgeStyle} style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }} />
        <div className={edgeStyle} style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }} />
        <div className={edgeStyle} style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }} />
        <div className={edgeStyle} style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }} />
      </motion.div>
    </div>
  );
};

export default function RetroTV({ theme }: RetroTVProps) {
  // Matches your Post-it theme logic exactly
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";

  return (
    <div 
      className={`relative flex flex-col items-center flex-shrink-0 select-none pointer-events-none ${themeClass}`}
      style={{ width: "160px", height: "140px" }}
    >
      {/* 1. ANTENNAE: Mapped to --border-main */}

      {/* 2. TV BODY: Case uses --bg-card (Cab Sav), Border uses --border-main */}
      <div className="w-full h-full bg-[var(--bg-card)] border-4 border-[var(--border-main)] rounded-2xl p-3 shadow-xl relative overflow-hidden transition-colors duration-500">
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border-2 border-black/40 shadow-inner">
          
          <RetroWireframeCube />

          {/* CRT SCANLINES */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, black, black 1px, transparent 1px, transparent 2px)" }} />
          
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      </div>

      {/* 3. FEET: Mapped to --border-main */}
      <div className="w-full flex justify-around -mt-1 px-4">
        <div className="w-3 h-2 bg-[var(--border-main)] rounded-b-md transition-colors duration-500" />
        <div className="w-3 h-2 bg-[var(--border-main)] rounded-b-md transition-colors duration-500" />
      </div>
    </div>
  );
}