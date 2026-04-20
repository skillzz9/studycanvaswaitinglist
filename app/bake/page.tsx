"use client";

import React, { useState, useEffect } from "react";
import Level from "@/components/Level";

export default function BakeStudio() {
  const [isReady, setIsReady] = useState(false);

  // Give the P5 scripts a second to mount and draw
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const levels = [2, 3, 4, 5, 6];

  return (
    <main className="min-h-screen bg-neutral-200 p-10 flex flex-col items-center font-sans text-neutral-900">
      
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-black uppercase tracking-widest mb-4">The Baking Studio</h1>
        <p className="font-medium opacity-70">
          This page forces the components to render at a crisp 800x800 resolution. 
          Wait for the sketches to finish drawing, then use Chrome DevTools to capture each square.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {levels.map((lvl) => (
          <div key={lvl} className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold uppercase tracking-widest">Level {lvl}</h2>
            
            {/* The 800x800 High-Res Container */}
            <div 
              id={`bake-level-${lvl}`}
              className="w-[800px] h-[800px] relative bg-white shadow-2xl overflow-hidden rounded-xl border-4 border-black"
            >
              {isReady && <Level imageSrc="/bunny.png" level={lvl as any} />}
            </div>
            
            <p className="text-xs font-mono opacity-50">id: bake-level-{lvl}</p>
          </div>
        ))}
      </div>
      
    </main>
  );
}