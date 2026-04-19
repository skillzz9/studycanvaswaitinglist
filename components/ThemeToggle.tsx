"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // This targets the <html> tag and adds or removes the "light" class
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      className="px-4 py-2 text-sm font-bold border-2 border-app-border rounded-xl text-app-text hover:bg-app-text hover:text-app-bg transition-colors"
    >
      {isLight ? "🌙 DARK MODE" : "☀️ LIGHT MODE"}
    </button>
  );
}