"use client";

import React, { useState, useEffect, useMemo } from "react";
import Level from "@/components/Level";
import GridRevealMask from "@/components/GridRevealMask";
import Avatar from "@/components/Avatar";
import Stopwatch from "@/components/Stopwatch";

export default function StudyCanvasDemo() {
  const [mounted, setMounted] = useState(false);

  

  const gridSize = 6;
  const totalLayers = 5;
  const blocksPerLayer = 36;
  const totalSessionBlocks = 180;
  
  const [revealedCount, setRevealedCount] = useState(90);
  const [targetBlocksCount, setTargetBlocksCount] = useState(91); 
  const [secondsElapsed, setSecondsElapsed] = useState(300); 
  const studyImage = "/demoImages/bunny.png"; 

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

    const painter = setInterval(() => {
      setTargetBlocksCount((prev) => (prev < totalSessionBlocks ? prev + 1 : prev));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(painter);
    };
  }, [mounted, totalSessionBlocks]);

  if (!mounted) return null;

  const currentLayerIndex = Math.floor(revealedCount / blocksPerLayer);
  const baseLevel = currentLayerIndex + 1;
  const topLevel = currentLayerIndex + 2;

  // THREE-WAY TURN LOGIC
  // This modulo calculation determines which avatar index should be moving
  const activeIndex = revealedCount % 3;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ containerType: 'inline-size' }}>
      
      <style>{`
        .responsive-demo { transform: scale(0.52); }
        @container (min-width: 320px) { .responsive-demo { transform: scale(0.65); } }
        @container (min-width: 500px) { .responsive-demo { transform: scale(0.9); } }
        @container (min-width: 700px) { .responsive-demo { transform: scale(1); } }
      `}</style>

      <div className="responsive-demo relative flex flex-col items-center pb-40 w-[600px] origin-center transition-transform duration-500">
        
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
          workerCount={3}
          isSessionComplete={revealedCount >= totalSessionBlocks}
          onFinish={() => {}}
          onStart={() => {}} 
          roomStatus="active"
          revealedCount={revealedCount}
          totalSessionBlocks={totalSessionBlocks}
        />

        {/* AVATAR 1: YOU (Index 0) */}
         <Avatar 
          key="demo-avatar-you"
          myIndex={0}
          totalWorkers={3}
          homeX={200} 
          revealedCount={revealedCount}
          userName="You"
          avatarSrc="/avatar.webp" 
          targetBlocksCount={activeIndex === 0 ? targetBlocksCount : revealedCount}
          shuffledIndices={FIXED_INDICES} 
          gridSize={gridSize}
          onBlockComplete={() => setRevealedCount(prev => prev + 1)} 
          lastSeen={Date.now()}
          roomStatus="active"
          globalStartTime={Date.now()}
        />

        {/* AVATAR 2: BUDDY A (Center of Canvas) */}
        <Avatar 
          key="demo-avatar-buddy-a"
          myIndex={1}
          totalWorkers={3}
          homeX={300} 
          revealedCount={revealedCount}
          userName="Jack"
          avatarSrc="/avatar2.webp" 
          targetBlocksCount={activeIndex === 1 ? targetBlocksCount : revealedCount}
          shuffledIndices={FIXED_INDICES} 
          gridSize={gridSize}
          onBlockComplete={() => setRevealedCount(prev => prev + 1)} 
          lastSeen={Date.now()}
          roomStatus="active"
          globalStartTime={Date.now()}
        />

        {/* AVATAR 3: BUDDY B (Right Edge of Canvas) */}
        <Avatar 
          key="demo-avatar-buddy-b"
          myIndex={2}
          totalWorkers={3}
          homeX={400} 
          revealedCount={revealedCount}
          userName="Tony"
          avatarSrc="/avatar3.webp" 
          targetBlocksCount={activeIndex === 2 ? targetBlocksCount : revealedCount}
          shuffledIndices={FIXED_INDICES} 
          gridSize={gridSize}
          onBlockComplete={() => setRevealedCount(prev => prev + 1)} 
          lastSeen={Date.now()}
          roomStatus="active"
          globalStartTime={Date.now()}
        />

      </div>
    </div>
  );
}