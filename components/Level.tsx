// src/components/Level.tsx
"use client";

import React from "react";
import Image from "next/image";

interface LevelProps {
  imageSrc: string; 
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  isFinal?: boolean; // New prop to bypass level logic
}

export default function Level({ imageSrc, level = 8, isFinal = false }: LevelProps) {
  // 1. If we just want the final form, return the original source immediately
  if (isFinal) {
    return (
      <div className="relative w-full h-full bg-white">
        <Image
          src={imageSrc}
          alt="Final Artwork"
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>
    );
  }

  // 2. Existing Level Logic (for the interactive part of your site)
  if (level === 1) {
    return <div className="relative w-full h-full bg-white"></div>;
  }

  const getBakedSrc = (lvl: number) => {
    if (lvl >= 7) return imageSrc;
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
        priority={level <= 3} 
      />
    </div>
  );
}