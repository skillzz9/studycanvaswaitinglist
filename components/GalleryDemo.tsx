"use client";

import React from "react";
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
  return (
    <section className="w-full bg-app-bg py-24 px-6 border-t-4 border-app-border">
      <div className="max-w-[95rem] mx-auto flex flex-col gap-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-app-text">
            When you're done, see it in your gallery!
          </h2>
          <p className="text-lg md:text-xl font-bold text-app-accent uppercase tracking-widest opacity-80">
            customise it to your aesthetic
          </p>
        </div>

        {/* DEMO INTERFACE */}
        <div className="w-full h-[900px] xl:h-[1000px] flex border-4 border-app-border bg-app-card rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          
          {/* STATIC SIDE MENU (LEFT) */}
          <div className="w-80 h-full border-r-4 border-app-border bg-app-card p-2 flex flex-col gap-8 z-20 overflow-y-auto hidden md:flex custom-scrollbar">
            
            {/* 1. SCHOLARLY TOOLS */}
            <MenuSection title="📝 Scholarly Tools">
              <ItemPreview name="Post-it Note">
                <div className="scale-[0.6]"><PostItNote theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Whiteboard">
                {/* Passed an empty string to ensure the board is blank in the menu */}
                <div className="scale-[0.7]"><Whiteboard theme="dark" text="" /></div>
              </ItemPreview>
              <ItemPreview name="Todo list">
                <div className="scale-[0.75]">
                  <div className="w-56 bg-app-card border-4 border-app-border p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                    <div className="w-full h-2 bg-app-accent mb-2" />
                    <div className="w-full h-2 bg-app-border mb-2" />
                    <div className="w-3/4 h-2 bg-app-border" />
                  </div>
                </div>
              </ItemPreview>
            </MenuSection>

            {/* 2. ATMOSPHERE */}
            <MenuSection title="🕯️ Atmosphere">
              <ItemPreview name="Clock">
                <div className="scale-[0.8]"><Clock theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Candle">
                <div className="scale-[1.1]"><Candle theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Streak Board">
                {/* Replaced the number with an underscore as requested */}
                <div className="scale-[0.7]"><StreakBoard theme="dark" count={"_" as any} /></div>
              </ItemPreview>
            </MenuSection>

            {/* 3. STUDIO GEAR */}
            <MenuSection title="📺 Studio Gear">
              <ItemPreview name="Retro TV">
                <div className="scale-[0.55]"><RetroTV theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Record Player">
                <div className="scale-[0.65]"><RecordPlayer theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Simple Shelf">
                <div className="scale-[0.7]"><SimpleShelf width={240} theme="dark" /></div>
              </ItemPreview>
              <ItemPreview name="Hanging Shelf">
                <div className="scale-[0.55]"><HangingShelf width={300} theme="dark" hangingHeight={200} /></div>
              </ItemPreview>
            </MenuSection>

            {/* 4. BOTANICALS */}
            <MenuSection title="🌿 Botanicals">
              <ItemPreview name="Pink Plant">
                <div className="scale-[0.9]"><ShelfPlant theme="dark" /></div>
              </ItemPreview>
            </MenuSection>

            <div className="mt-auto pt-10">
              <p className="text-[10px] text-app-accent uppercase tracking-widest font-black opacity-40">
                Asset Inventory V1.4
              </p>
            </div>
          </div>

          {/* THE LIVE GALLERY (RIGHT) */}
          <div className="flex-1 h-full bg-app-bg relative">
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
      <div className="grid grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
}

function ItemPreview({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between p-0 bg-app-bg border-4 border-app-border shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] w-full min-h-[180px] group overflow-hidden">
      <div className="flex-1 flex items-center justify-center w-full relative min-h-[140px]">
        {children}
      </div>
      <div className="w-full bg-app-card border-t-2 border-app-border py-2">
        <span className="block text-[11px] font-black uppercase tracking-widest text-app-text text-center group-hover:text-app-accent transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
}