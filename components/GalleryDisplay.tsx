"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import PaintingFrame from "@/components/PaintingFrame";
import Clock from "@/components/items/Clock";
import PostItNote from "@/components/items/PostItNote";
import Candle from "@/components/items/Candle";
import RecordPlayer from "@/components/items/RecordPlayer";
import StreakBoard from "@/components/items/StreakBoard";
import Whiteboard from "@/components/items/Whiteboard";
import Window from "@/components/items/Window";
import ShelfPlant from "@/components/items/ShelfPlant";
import RetroTV from "@/components/items/RetroTV"; // Import the TV component
import HangingShelf from "./items/HangingShelf";
import SimpleShelf from "./items/SimpleShelf";

export default function GalleryDisplay() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const themeProp = isDark ? "dark" : "light";

  const extraItems = [
    { type: 'window', x: 0, y: 0, rotate: 0, scale: 1.2 },
    { type: 'clock', x: 0, y: -300, rotate: 0, scale: 0.9 },
    { type: 'streak', x: 300, y: -320, rotate: 0, scale: 1 },
    { type: 'todo', x: 300, y: -160, rotate: 0, scale: 1 },
    { type: 'postit', x: -300, y: -160, rotate: 0, scale: 1.1 },
    { type: 'plant', x: -100, y: 90, rotate: 0, scale: 1 }, 
    { type: 'plant', x: 100, y: 90, rotate: 0, scale: 1 }, 
    { type: 'tv', x: 600, y: -50, rotate: 0, scale: 1 }, // Added Retro TV to extra items
    { type: 'hangingshelf', x: 600, y: -130, rotate: 0, scale: 1 },
    { type: 'hangingshelf', x: -600, y: 50, rotate: 0, scale: 1 },
    { type: 'plant', x: -595, y: 110, rotate: 0, scale: 1 }, 
    { type: 'whiteboard', x: -200, y: -400, rotate: 0, scale: 1 },
    { type: 'shelf', x: 200, y: -400, rotate: 0, scale: 1 },  
    { type: 'recordplayer', x: 200, y: -430, rotate: 0, scale: 1 }, 

  ];

  const paintings = [
    { id: 1, x: -300, y: 100, title: "Music & Emotion Thesis", src: "/paintings/painting1.png", revealed: 180 }, 
    { id: 2, x: 300, y: 100, title: "USYD Software Study", src: "/paintings/painting2.png", revealed: 112, hasCandles: true }, 
    { id: 3, x: 500, y: 380, title: "Combat Sports Analysis", src: "/paintings/painting3.png", revealed: 90 },
    { id: 4, x: -500, y: 380, title: "Productivity System", src: "/paintings/painting4.png", revealed: 150, hasCandles: true },
    { id: 5, x: -180, y: 380, title: "Morning Routine", src: "/paintings/painting5.png", revealed: 45 },
    { id: 6, x: 180, y: 380, title: "lo-fi study beats", src: "/paintings/painting6.png", revealed: 160 },
    { id: 7, x: 600, y: -420, title: "lo-fi study beats", src: "/paintings/painting7.png", revealed: 160 }
  ];

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full bg-app-bg transition-colors duration-500 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 flex items-center justify-center scale-[0.32] lg:scale-[0.65]">
        
        {/* RENDER PROPS */}
        {extraItems.map((item, index) => (
          <div 
            key={`item-${index}`}
            className="absolute flex items-center justify-center"
            style={{ 
              transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg) scale(${item.scale})`,
              zIndex: item.type === 'window' ? 0 : (item.type === 'postit' ? 30 : 20) 
            }}
          >
            {item.type === 'plant' && <ShelfPlant theme={themeProp} />}
            {item.type === 'tv' && <RetroTV theme={themeProp} />} {/* Added TV render logic */}
            {item.type === 'streak' && <StreakBoard theme={themeProp} count={3} />}
            {item.type === 'whiteboard' && <Whiteboard theme={themeProp} />}
            {item.type === 'clock' && <Clock theme={themeProp} />}
            {item.type === 'player' && <RecordPlayer theme={themeProp} />}
            {item.type === 'postit' && <PostItNote theme={themeProp} initialText="Drink more (water)!" />}
            {item.type === 'todo' && (
              <div className="w-56 bg-app-card border-4 border-app-border p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <h3 className="font-black text-app-accent uppercase text-xs tracking-widest border-b-2 border-app-border pb-2 mb-3">Daily Feats</h3>
                <ul className="flex flex-col gap-3">
                  {["Maths textbook questions", "Meeting with English teacher", "2 hours on side project!"].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-4 h-4 border-2 border-app-border flex-shrink-0 ${i < 2 ? 'bg-app-accent' : ''}`} />
                      <span className={`text-[11px] font-bold uppercase text-app-text ${i < 2 ? 'line-through opacity-40' : ''}`}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.type === 'window' && <Window theme={themeProp}/>}
            {item.type === 'hangingshelf' && (
  <HangingShelf 
    theme={themeProp} 
    width={350} 
    hangingHeight={300} 
  />
)}
{item.type === 'shelf' && <SimpleShelf width={280} theme={themeProp}/>}
{item.type === 'recordplayer' && <RecordPlayer theme={themeProp}/>}
          </div>
        ))}

        {/* RENDER PAINTINGS */}
        {paintings.map((p) => (
          <div 
            key={`painting-${p.id}`} 
            className="absolute"
            style={{ transform: `translate(${p.x}px, ${p.y}px)`, zIndex: 10 }}
          >
            <PaintingFrame src={p.src} title={p.title} revealedCount={p.revealed} totalBlocks={180} shuffledIndices={[]} onClick={() => {}} />
            {p.hasCandles && (
              <>
                <div className="absolute bottom-6 -left-12 z-20 scale-75"><Candle theme={themeProp} /></div>
                <div className="absolute bottom-6 -right-12 z-20 scale-75"><Candle theme={themeProp} /></div>
              </>
            )}
          </div>
        ))}

      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 dark:from-black/40 to-transparent pointer-events-none" />
    </div>
  );
}