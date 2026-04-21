"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CandleProps {
  theme?: "light" | "dark";
}

export default function Candle({ theme }: CandleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const themeClass = theme === "light" ? "light" : theme === "dark" ? "dark" : "";
  const isDark = theme === "dark";

  const flickerDuration = 2.5; 

  return (
    <div className={`relative flex flex-col items-center font-space group w-[100px] ${themeClass}`}>
      
      {/* WALL GLOW SYSTEM */}
      {mounted && (
        <motion.div
          className="absolute w-[300px] h-[300px] pointer-events-none transition-colors duration-500 rounded-full z-0"
          style={{
            background: isDark 
              ? "radial-gradient(circle, rgba(250, 204, 21, 0.4) 0%, rgba(250, 204, 21, 0.1) 40%, rgba(0, 0, 0, 0) 70%)"
              : "radial-gradient(circle, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0.05) 40%, rgba(0, 0, 0, 0) 70%)",
            transformOrigin: "center top",
            y: "-45%", 
          }}
          initial={{ scale: 1, opacity: 0.9 }}
          animate={{
            scale: [1, 1.05, 0.98, 1.02, 1], 
            opacity: [0.9, 1, 0.8, 0.95, 0.9], 
          }}
          transition={{
            duration: flickerDuration,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.2, 0.5, 0.8, 1], 
          }}
        />
      )}

      <div className="relative flex flex-col items-center z-10">
        
        {/* FLAME */}
        {mounted ? (
          <motion.div 
            className="w-3 h-4 bg-yellow-400 rounded-t-[50%] rounded-b-[40%] shadow-[0_0_15px_rgba(250,204,21,0.8)]"
            style={{ transformOrigin: "center bottom" }}
            animate={{
              scaleY: [1, 1.15, 0.9, 1.1, 1], 
              scaleX: [1, 0.9, 1.1, 0.95, 1], 
              y: [0, -1, 0.5, -0.5, 0],       
            }}
            transition={{ duration: flickerDuration, repeat: Infinity }}
          />
        ) : (
          <div className="w-3 h-4 bg-yellow-400 rounded-t-[50%] rounded-b-[40%]" />
        )}
        
        {/* Wick */}
        <div className="w-1 h-1.5 bg-[var(--bg-main)] -mt-0.5 transition-colors duration-500" />
        
        {/* WAX BODY: Uses Beige in dark, White in light */}
        <div 
          className={`w-8 h-12 border-4 border-[var(--border-main)] transition-colors duration-500 relative z-10 ${
            isDark ? "bg-[var(--accent-main)]" : "bg-[var(--bg-card)]"
          }`} 
        />
        
        {/* HOLDER BASE: Uses Cab Sav in dark, Dark Brown in light */}
        <div 
          className={`w-16 h-5 border-4 border-[var(--border-main)] -mt-1 relative z-20 transition-colors duration-500 flex items-center shadow-lg ${
            isDark ? "bg-[var(--bg-card)]" : "bg-[var(--accent-main)]"
          }`} 
        />

      </div>
    </div>
  );
}