// src/components/items/RecordPlayer.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RecordPlayer({ theme = "dark" }) {
  const isDark = theme === "dark";
  return (
    <div className="relative flex flex-col items-center flex-shrink-0" style={{ width: '160px' }}>
      <div className="absolute -top-16 w-full h-16 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 0], y: -40 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            className={`absolute text-xl font-bold ${isDark ? "text-[#f5f2e9]" : "text-[#5e503f]"}`}
          > ♪ </motion.span>
        ))}
      </div>

      {/* Main Body */}
      <div 
        style={{ height: '40px', width: '128px' }}
        className={`rounded-sm border-x-4 border-t-4 transition-colors duration-500 relative z-10
          ${isDark ? "bg-[#3d4043] border-[#0a0908]" : "bg-[#f2f4f3] border-[#a9927d]"}
        `}
      >
        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex gap-1">
          <div className={`w-2 h-2 rounded-full ${isDark ? "bg-[#5e503f]" : "bg-[#a9927d]"}`} />
          <div className={`w-2 h-2 rounded-full ${isDark ? "bg-[#5e503f]" : "bg-[#a9927d]"}`} />
        </div>
      </div>

      {/* THE SHELF: Enforced height */}
      <div 
        style={{ height: '16px', width: '160px' }}
        className={`-mt-1 border-b-4 border-x-4 rounded-b-xl transition-colors duration-500 shadow-md
          ${isDark ? "bg-[#5e503f] border-[#0a0908]" : "bg-[#a9927d] border-[#5e503f]"}
        `} 
      />
    </div>
  );
}