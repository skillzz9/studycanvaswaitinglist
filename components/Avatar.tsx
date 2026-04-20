"use client";
import React, { useState, useEffect } from "react";
import DustCloud from "./DustCloud";

interface AvatarProps {
  myIndex: number;
  revealedCount: number;
  targetBlocksCount: number;
  shuffledIndices: number[];
  gridSize: number;
  onBlockComplete?: () => void;
  userName: string;
  avatarSrc: string;
  roomStatus: string;
}

export default function Avatar({ 
  myIndex,
  revealedCount,
  avatarSrc,
  targetBlocksCount, 
  shuffledIndices, 
  gridSize, 
  onBlockComplete,
  userName,
  roomStatus
}: AvatarProps) {
  
  const [isBusy, setIsBusy] = useState(false);
  const [isPainting, setIsPainting] = useState(false);
  const [stopwatch, setStopwatch] = useState("00:00:00");
  const [isMounted, setIsMounted] = useState(false);

  // Home position centered around the 600px parent container
  const homeX = 270 + (myIndex * 60); 
  const homeY = 550;
  const [state, setState] = useState({ x: homeX, y: homeY, facingLeft: false });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (roomStatus !== "active") return;

    let seconds = 0;
    const interval = setInterval(() => {
      seconds++;
      const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
      const s = Math.floor(seconds % 60).toString().padStart(2, "0");
      setStopwatch(`${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [roomStatus]);

  const moveAvatar = (newX: number, newY: number) => {
    setState(current => ({
      x: newX,
      y: newY,
      facingLeft: newX < current.x ? true : newX > current.x ? false : current.facingLeft
    }));
  };

  const getCoords = (globalIndex: number) => {
    const localIndex = globalIndex % (gridSize * gridSize);
    const col = localIndex % gridSize;
    const row = Math.floor(localIndex / gridSize);
    
    // 400px canvas / 6 blocks = 66.66px per block
    const blockSize = 400 / gridSize; 
    
    // The parent container is 600px wide because of the Desk.
    // The Canvas is 400px and centered.
    // This means the left edge of the Canvas is exactly 100px inward.
    const canvasOffsetX = 100;
    
    return { 
      x: canvasOffsetX + (col * blockSize) + (blockSize / 2), 
      y: (row * blockSize) + (blockSize / 2) 
    };
  };

  useEffect(() => {
    if (targetBlocksCount > revealedCount && !isBusy && shuffledIndices.length > 0) {
      const runArtistLoop = async () => {
        setIsBusy(true);
        const nextGlobalIndex = shuffledIndices[revealedCount];
        if (nextGlobalIndex === undefined) { setIsBusy(false); return; }
        
        const target = getCoords(nextGlobalIndex);
        
        moveAvatar(target.x, target.y);
        await new Promise(r => setTimeout(r, 600)); 
        
        setIsPainting(true);
        await new Promise(r => setTimeout(r, 400)); 
        
        onBlockComplete?.();
        
        await new Promise(r => setTimeout(r, 400)); 
        setIsPainting(false);
        moveAvatar(homeX, homeY);
        await new Promise(r => setTimeout(r, 600)); 
        
        setIsBusy(false);
      };
      runArtistLoop();
    }
  }, [targetBlocksCount, revealedCount, isBusy, shuffledIndices]);

  return (
    <div 
      className="absolute top-0 left-0 z-50 pointer-events-none flex flex-col items-center"
      style={{ 
        transform: `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${isMounted ? 1 : 0})`,
        opacity: isMounted ? 1 : 0,
        transition: "transform 600ms ease-in-out, opacity 600ms ease-in-out",
        willChange: "transform, opacity"
      }}
    >
      <div className="mb-1 flex flex-col items-center gap-0.5">
        <div className="bg-white/90 border-2 border-app-border rounded px-1.5 py-0.5 shadow-sm">
          <h1 className="text-[10px] font-black uppercase tracking-tighter text-app-text">
            {userName} <span className="ml-1 opacity-40 font-mono">{stopwatch}</span>
          </h1>
        </div>
      </div>

      <div className="relative" style={{ transform: `scaleX(${state.facingLeft ? -1 : 1})` }}>
        {isPainting && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <DustCloud cellSize={80} />
          </div>
        )}
        
        <img 
          src="/paintbrush.png" 
          className={`absolute -top-3 -left-3 w-6 h-6 object-contain transition-opacity duration-300 z-10 ${isBusy ? "opacity-100" : "opacity-0"}`}
        />

        <img 
          src={avatarSrc} 
          className={`w-16 h-16 object-contain ${isBusy && isPainting ? "animate-bounce" : ""}`} 
        />
      </div>
    </div>
  );
}