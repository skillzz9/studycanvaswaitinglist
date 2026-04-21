// src/components/items/StreakBoard.tsx
"use client";
import React from "react";

export default function StreakBoard({ theme = "dark", count = 3 }) {
  const isDark = theme === "dark";
  return (
    <div className={`
      w-32 py-4 flex flex-col items-center justify-center border-4 rounded-xl shadow-lg transition-colors duration-500
      ${isDark ? "bg-[#3d4043] border-[#5e503f]" : "bg-white border-[#a9927d]"}
    `}>
      <span className={`text-3xl font-black ${isDark ? "text-[#f5f2e9]" : "text-[#5e503f]"}`}>
        {count}
      </span>
      <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-app-accent" : "text-[#a9927d]"}`}>
        Day Streak
      </span>
    </div>
  );
}