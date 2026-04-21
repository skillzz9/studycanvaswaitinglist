"use client";

import React, { useState, useEffect } from "react";
import GalleryDisplay from "./GalleryDisplay";

// ITEM IMPORTS
import Candle from "@/components/items/Candle";
import Clock from "@/components/items/Clock";
import PostItNote from "@/components/items/PostItNote";
import Whiteboard from "@/components/items/Whiteboard";
import RetroTV from "@/components/items/RetroTV";
import RecordPlayer from "@/components/items/RecordPlayer";
import SimpleShelf from "@/components/items/SimpleShelf";
import HangingShelf from "./items/HangingShelf";
import ShelfPlant from "@/components/items/ShelfPlant";
import StreakBoard from "@/components/items/StreakBoard";

export default function GalleryDemo() {
  const totalHours = 32;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="w-full bg-app-bg py-12 md:py-24 px-4 md:px-6 border-t-4 border-app-border">
      <div className="max-w-[95rem] mx-auto flex flex-col gap-8 md:gap-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-app-text">
            Add your art to your moodboard!
          </h2>
          <p className="text-sm md:text-xl font-bold text-app-accent tracking-widest opacity-80 max-w-3xl">
            Customise it with items you earn through study. Desktop users can preview the full unlocked catalogue.
          </p>
        </div>
        

        {/* DEMO INTERFACE */}
        <div className="w-full h-[800px] md:h-[900px] xl:h-[1000px] flex border-4 border-app-border bg-app-card rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          
          {/* ASSETS MENU */}
          <div className="flex flex-col w-full md:w-80 h-full border-r-0 md:border-r-4 border-app-border bg-app-card p-4 md:p-2 gap-6 z-20 overflow-y-auto custom-scrollbar">
            
            <div className="bg-app-accent p-4 border-4 border-app-border rounded-2xl flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] mb-2">
              <span className="text-[10px] font-black uppercase text-app-bg tracking-[0.2em] opacity-80 leading-none mb-1">Current Progress</span>
              <span className="text-3xl font-black uppercase text-app-bg tracking-tighter">
                Total Hours: {totalHours}
              </span>
            </div>

            {/* 1. SCHOLARLY TOOLS */}
            <MenuSection title="📝 Scholarly Tools">
              <ItemPreview name="Post-it Note" requiredHours={0} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.6]"><PostItNote theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Whiteboard" requiredHours={10} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.7]"><Whiteboard theme="dark" text="" /></div>
              </ItemPreview>
              <ItemPreview name="Todo list" requiredHours={40} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.75]">
                  <div className="w-56 bg-app-card border-4 border-app-border p-5">
                    <div className="w-full h-2 bg-app-accent mb-2" />
                    <div className="w-full h-2 bg-app-border" />
                  </div>
                </div>
              </ItemPreview>
              {isDesktop && (
                <>
                  <ItemPreview name="Drafting Table" requiredHours={120} currentHours={totalHours} isDesktop={isDesktop} isPhantom />
                  <ItemPreview name="Reference Library" requiredHours={150} currentHours={totalHours} isDesktop={isDesktop} isPhantom />
                </>
              )}
            </MenuSection>

            {/* 2. ATMOSPHERE */}
            <MenuSection title="🕯️ Atmosphere">
              <ItemPreview name="Clock" requiredHours={5} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.8]"><Clock theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Candle" requiredHours={20} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[1.1]"><Candle theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Pink Plant" requiredHours={45} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.9]"><ShelfPlant theme="dark" /></div>
              </ItemPreview>
              {isDesktop && (
                <>
                  <ItemPreview name="Indoor Fountain" requiredHours={130} currentHours={totalHours} isDesktop={isDesktop} isPhantom />
                  <ItemPreview name="Skylight Window" requiredHours={180} currentHours={totalHours} isDesktop={isDesktop} isPhantom />
                </>
              )}
            </MenuSection>

            {/* 3. STUDIO GEAR */}
            <MenuSection title="📺 Studio Gear">
              <ItemPreview name="Simple Shelf" requiredHours={30} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.7]"><SimpleShelf width={240} theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Retro TV" requiredHours={32} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.55]"><RetroTV theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Record Player" requiredHours={50} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.65]"><RecordPlayer theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Hanging Shelf" requiredHours={70} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.55]"><HangingShelf width={300} theme="dark" hangingHeight={200} /></div>
              </ItemPreview>
              <ItemPreview name="Streak Board" requiredHours={100} currentHours={totalHours} isDesktop={isDesktop}>
                <div className="scale-[0.7]"><StreakBoard theme="dark" count={"_" as any} /></div>
              </ItemPreview>
              {isDesktop && (
                <>
                  <ItemPreview name="Neon Sign" requiredHours={110} currentHours={totalHours} isDesktop={isDesktop} isPhantom />
                  <ItemPreview name="Synthesizer" requiredHours={200} currentHours={totalHours} isDesktop={isDesktop} isPhantom />
                </>
              )}
            </MenuSection>

            <div className="mt-auto pt-10">
            </div>
          </div>

          {/* THE LIVE GALLERY */}
          <div className="hidden md:block md:flex-1 h-full bg-app-bg relative">
             <GalleryDisplay />
          </div>

        </div>
      </div>
    </section>
  );
}

// HELPER COMPONENTS
function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-app-accent border-b-2 border-app-border pb-1">
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
}

interface ItemPreviewProps {
  name: string;
  requiredHours: number;
  currentHours: number;
  children?: React.ReactNode;
  isPhantom?: boolean;
  isDesktop: boolean;
}

function ItemPreview({ name, requiredHours, currentHours, children, isPhantom = false, isDesktop }: ItemPreviewProps) {
  // LOGIC: If we are on desktop, only phantom items (ones without real content) stay locked.
  // If we are on mobile, all items follow the hour budget.
  const isLocked = isDesktop 
    ? isPhantom 
    : currentHours < requiredHours;

  return (
    <div className="relative flex flex-col items-center justify-between p-0 bg-app-bg border-4 border-app-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] w-full min-h-[160px] md:min-h-[180px] group overflow-hidden">
      
      {/* LOCKED OVERLAY */}
      {isLocked && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[1px]">
          <div className="w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center mb-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <span className="text-[10px] font-black text-white uppercase tracking-tighter px-2 py-1 bg-black/40 border border-white/20">
            {requiredHours}H Goal
          </span>
        </div>
      )}

      {/* ITEM CONTENT */}
      <div className={`flex-1 flex items-center justify-center w-full relative min-h-[120px] md:min-h-[140px] transition-opacity duration-500 
        ${isLocked ? 'opacity-30 grayscale-[50%]' : 'opacity-100'}
        ${isPhantom ? 'opacity-0' : ''}
      `}>
        {children}
      </div>

      {/* ITEM FOOTER */}
      <div className="w-full bg-app-card border-t-2 border-app-border py-2 z-20">
        <span className={`block text-[10px] md:text-[11px] font-black uppercase tracking-widest text-center transition-colors 
          ${isLocked ? 'text-app-text/40' : 'text-app-text group-hover:text-app-accent'}`}>
          {isLocked ? "???" : name}
        </span>
      </div>
    </div>
  );
}