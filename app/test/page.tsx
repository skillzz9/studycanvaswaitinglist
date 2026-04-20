"use client";
import React from "react";
import StudyCanvasDemo from "@/components/StudyCanvasDemo";

export default function TestDemoPage() {
  return (
    <main className="min-h-screen bg-app-bg flex flex-col items-center justify-center p-10 font-sans transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-black uppercase tracking-widest text-app-text mb-2">
          Demo Sandbox
        </h1>
        <p className="text-app-accent font-bold">
          Verifying local state logic, animations, and component scaling.
        </p>
      </div>

      {/* THE DEMO COMPONENT */}
      <div className="w-full max-w-4xl bg-app-card border-4 border-app-border rounded-[3rem] shadow-2xl p-12 relative overflow-hidden flex items-center justify-center min-h-[700px]">
        {/* Subtle grid background for the "Stage" feel */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(var(--app-text) 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
          }} 
        />
        
        <div className="relative z-10 w-full flex justify-center">
            <StudyCanvasDemo />
        </div>
      </div>

      {/* DEBUG CHECKLIST */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-app-card border-4 border-app-border rounded-2xl">
          <h3 className="font-black uppercase text-xs mb-2 text-app-accent">1. Logic Check</h3>
          <p className="text-xs font-medium opacity-70">
            Does the Avatar move to a new block every 10 seconds? (revealedCount incrementing).
          </p>
        </div>
        
        <div className="p-6 bg-app-card border-4 border-app-border rounded-2xl">
          <h3 className="font-black uppercase text-xs mb-2 text-app-accent">2. Visual Check</h3>
          <p className="text-xs font-medium opacity-70">
            Are the DustClouds appearing at the correct coordinates on the 400px canvas?
          </p>
        </div>

        <div className="p-6 bg-app-card border-4 border-app-border rounded-2xl">
          <h3 className="font-black uppercase text-xs mb-2 text-app-accent">3. Theme Check</h3>
          <p className="text-xs font-medium opacity-70">
            Toggle your system theme. Do the borders and text colors update instantly?
          </p>
        </div>
      </div>
    </main>
  );
}