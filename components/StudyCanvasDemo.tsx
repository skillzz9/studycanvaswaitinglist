"use client";

import React, { useState, useEffect, useMemo } from "react";
import Level from "@/components/Level";
import GridRevealMask from "@/components/GridRevealMask";
import Avatar from "@/components/Avatar";
import Stopwatch from "@/components/Stopwatch";
import Desk from "@/components/Desk";

export default function StudyCanvasDemo() {
  const [mounted, setMounted] = useState(false);

  const gridSize = 6;
  const totalLayers = 5;
  const blocksPerLayer = 36;
  const totalSessionBlocks = 180;
  
  // We start with 90 blocks revealed. 
  // We set the Target to 91 so the Avatar immediately goes to work on page load.
  const [revealedCount, setRevealedCount] = useState(90);
  const [targetBlocksCount, setTargetBlocksCount] = useState(91); 
  const [secondsElapsed, setSecondsElapsed] = useState(1800); 
  const studyImage = "/bunny.png"; 

  const FIXED_INDICES = useMemo(() => {
    const indices = [];
    for (let layer = 0; layer < totalLayers; layer++) {
      for (let i = 0; i < blocksPerLayer; i++) {
        const shuffledLocal = (i * 13 + layer * 7) % blocksPerLayer;
        indices.push(shuffledLocal + (layer * blocksPerLayer));
      }
    }
    return indices;
  }, [totalLayers, blocksPerLayer]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    // CHANGED: Now triggers every 3 seconds (3000ms).
    const painter = setInterval(() => {
      setTargetBlocksCount((prev) => (prev < totalSessionBlocks ? prev + 1 : prev));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(painter);
    };
  }, [mounted, totalSessionBlocks]);

  if (!mounted) {
    return (
      <div className="w-[400px] h-[400px] bg-app-card border-4 border-app-border rounded-2xl flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-t-transparent border-app-text rounded-full opacity-20" />
      </div>
    );
  }

  const currentLayerIndex = Math.floor(revealedCount / blocksPerLayer);
  const baseLevel = currentLayerIndex + 1;
  const topLevel = currentLayerIndex + 2;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center scale-[0.55] sm:scale-[0.7] lg:scale-[0.85] xl:scale-100 origin-center transition-all duration-500">
      
      <div className="relative flex flex-col items-center pb-40 w-[600px]">
        
        {/* THE CANVAS */}
        <div className="w-[400px] h-[400px] relative shadow-2xl bg-white rounded-2xl border-4 border-neutral-800 overflow-hidden">
          
          <div className="absolute inset-0 z-0 bg-[#F5F5F5]">
            <Level imageSrc={studyImage} level={baseLevel as any} />
          </div>

          <div className="absolute inset-0 z-10">
            <GridRevealMask 
                revealedCount={revealedCount} 
                fullShuffledIndices={FIXED_INDICES}
                gridSize={gridSize}
                currentLayerIndex={currentLayerIndex}
            >
                <Level imageSrc={studyImage} level={topLevel as any} />
            </GridRevealMask>
          </div>
        </div>

        {/* STOPWATCH */}
        <Stopwatch 
          secondsElapsed={secondsElapsed}
          totalMinutes={60}
          workerCount={1}
          isSessionComplete={revealedCount >= totalSessionBlocks}
          onFinish={() => {}}
          onStart={() => {}} 
          roomStatus="active"
          revealedCount={revealedCount}
          totalSessionBlocks={totalSessionBlocks}
        />

        {/* AVATAR */}
        <Avatar 
          key="demo-avatar"
          myIndex={0}
          totalWorkers={1}
          revealedCount={revealedCount}
          userName="You"
          avatarSrc="/avatar.webp" 
          targetBlocksCount={targetBlocksCount}
          shuffledIndices={FIXED_INDICES} 
          gridSize={gridSize}
          onBlockComplete={() => setRevealedCount(prev => prev + 1)} 
          lastSeen={Date.now()}
          roomStatus="active"
          globalStartTime={Date.now()}
        />

        <Desk topPosition={600} />
      </div>
    </div>
  );
}