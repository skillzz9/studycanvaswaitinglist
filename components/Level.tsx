"use client";

import React from "react";
import Image from "next/image";

interface LevelProps {
  imageSrc: string; 
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export default function Level({ imageSrc, level }: LevelProps) {
  // Level 1 is always the blank white canvas
  if (level === 1) {
    return <div className="relative w-full h-full bg-white"></div>;
  }

  // Helper function to generate the correct filename
  const getBakedSrc = (lvl: number) => {
    // If it is the final finished level (7 or 8), use the original bunny.png
    if (lvl >= 7) return imageSrc;

    // Otherwise, turn "/bunny.png" into "/bunny-2.png", "/bunny-3.png", etc.
    const parts = imageSrc.split('.');
    const ext = parts.pop();
    const base = parts.join('.');
    return `${base}-${lvl}.${ext}`;
  };

  const currentImageSrc = getBakedSrc(level);

  return (
    <div className="relative w-full h-full bg-white">
      <Image
        src={currentImageSrc}
        alt={`Art Stage ${level}`}
        fill
        unoptimized
        className="object-cover"
        // Loads the first few layers instantly for a smooth experience
        priority={level <= 3} 
      />
    </div>
  );
}