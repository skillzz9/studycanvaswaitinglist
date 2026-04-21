"use client";
import React from "react";
import GridRevealMask from "@/components/GridRevealMask";
import Level from "@/components/Level"; 

interface PaintingFrameProps {
  src: string;
  title: string;
  revealedCount: number;
  totalBlocks: number;
  shuffledIndices: number[];
  onClick: () => void;
}

export default function PaintingFrame({ 
  src, 
  title, 
  revealedCount, 
  totalBlocks, 
  shuffledIndices,
  onClick 
}: PaintingFrameProps) {
  
  const percentage = Math.round((revealedCount / totalBlocks) * 100);
  const isFinished = revealedCount >= totalBlocks;

  const gridSize = 6;
  const blocksPerLayer = gridSize * gridSize;
  const totalLayers = Math.floor(totalBlocks / blocksPerLayer); 
  
  const currentLayerIndex = Math.min(Math.floor(revealedCount / blocksPerLayer), totalLayers - 1);

  return (
    <div 
      onClick={onClick}
      className="group flex flex-col items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      
      {/* 1. HOVER TITLE */}
      <span className="text-[12px] font-black uppercase text-app-text tracking-widest truncate max-w-[240px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        {title}
      </span>

      {/* 2. WOOD FRAME */}
      <div className="relative w-[240px] h-[240px] border-[14px] border-[#5C4033] bg-app-bg shadow-[4px_4px_10px_rgba(0,0,0,0.1)]">
        
        <div className="absolute inset-0 bg-app-bg overflow-hidden">
          
          {/* THE FIX: Use isFinal={true} to bypass all filename logic */}
          <div className="absolute inset-0 bg-[#F5F5F5] overflow-hidden">
            <Level 
              imageSrc={src} 
              isFinal={true} // Forces the final image (painting1.png) immediately
            />
          </div>

          {/* ACTIVE PAINTING LAYER (Only show mask if NOT finished) */}
          {!isFinished && (
            <div className="absolute inset-0 z-10">
              <GridRevealMask 
                revealedCount={revealedCount} 
                gridSize={gridSize} 
                fullShuffledIndices={shuffledIndices}
                currentLayerIndex={currentLayerIndex} 
                isStatic={true} 
                allLayers={false} 
              >
                <Level imageSrc={src} isFinal={true} />
              </GridRevealMask>
            </div>
          )}

        </div>
      </div>

      {/* 3. HOVER PROGRESS */}
      <span className="text-[10px] font-bold uppercase text-app-text tracking-widest text-center opacity-0 group-hover:opacity-60 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
        {percentage}% Complete
      </span>

    </div>
  );
}