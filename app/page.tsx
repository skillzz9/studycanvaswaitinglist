"use client"
import Features from "@/components/Features";
import ThemeToggle from "@/components/ThemeToggle";
import StudyCanvasDemo from "@/components/StudyCanvasDemo";
import GalleryDisplay from "@/components/GalleryDisplay";
import GalleryDemo from "@/components/GalleryDemo";
import React, { useState } from "react"; // Added React import for the type

export default function Home() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  // FIXED: Explicitly typed 'e' to avoid the implicit 'any' error
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const SCRIPT_URL = process.env.NEXT_PUBLIC_WAITLIST_URL || "";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setStatus("success");
      setEmail("");
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Waitlist Error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-app-bg text-app-text relative min-h-screen w-full flex flex-col font-sans overflow-y-auto transition-colors duration-300 scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen xl:h-screen w-full flex flex-col shrink-0 pb-20 xl:pb-0">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 md:opacity-20 pointer-events-none">
          <div className="w-full h-full bg-app-accent" />
        </div>

        {/* 2. THEME TOGGLE */}
        <div className="relative z-50 w-full p-6 flex justify-end">
          <ThemeToggle />
        </div>

        {/* 3. MAIN CONTENT */}
        <div className="relative z-10 flex-1 grid grid-cols-1 xl:grid-cols-3 items-center max-w-[95rem] mx-auto w-full px-6 xl:px-12 gap-8 xl:gap-12">
          
          {/* LEFT SIDE: Text and Actions */}
          <div className="xl:col-span-1 flex flex-col items-center xl:items-start text-center xl:text-left z-20 pt-4 xl:pt-0">
            
            {/* A. TITLE */}
            <div className="flex flex-col items-center xl:items-start w-full mb-6 xl:mb-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-none">
                Study Canvas Pomodoro
              </h1>
              
              <p className="hidden xl:block text-lg md:text-xl xl:text-2xl font-bold text-app-accent tracking-tight max-w-sm mt-4">
                Make studying addictive by making art with your friends!
              </p>
            </div>

            {/* B. IPHONE (Mobile Only) */}
            <div className="block xl:hidden mb-10">
               <div className="w-[285px] h-[520px] bg-app-card border-[8px] border-app-border rounded-[2.5rem] p-2 flex flex-col items-center transition-colors duration-300 shadow-2xl relative">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-app-border rounded-full z-20" />
                  <div className="w-full h-full bg-app-bg rounded-[1.8rem] flex flex-col items-center justify-center relative overflow-hidden">
                     <StudyCanvasDemo />
                  </div>
               </div>
            </div>

            {/* C. WAITLIST FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto xl:mx-0">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={status === "success" ? "You are on the list!" : "Enter your email"} 
                required
                disabled={status === "loading" || status === "success"}
                className="w-full h-14 bg-app-card border-4 border-app-border rounded-xl px-4 font-bold text-app-text placeholder:text-app-text/50 focus:outline-none focus:border-app-accent transition-colors disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className="w-full h-14 bg-app-card border-4 border-app-border rounded-xl flex items-center justify-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                 <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">
                   {status === "loading" ? "Processing..." : status === "success" ? "Subscribed!" : "Join Waitlist"}
                 </span>
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-[10px] font-black uppercase mt-2 tracking-widest">
                  Error: Please try again later.
                </p>
              )}
            </form>

            {/* D. MOBILE/TABLET SUBTITLE */}
            <p className="block xl:hidden text-lg font-bold text-app-accent tracking-tight max-w-xs mx-auto mt-10 mb-10">
              Make studying addictive by making art with your friends!
            </p>

            <h1 className="block xl:hidden text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-none mb-3">
               Create and Collect!
            </h1>
            
            <p className="block xl:hidden text-lg font-bold text-app-accent tracking-tight mx-auto mt-10 mb-10">
              Zoom in and move around, go on, try it! Imagine what your moodboard could look like.
            </p>

            {/* E. IPAD (Mobile Only) */}
            <div className="block xl:hidden w-full">
               <div className="w-[90vw] aspect-[4/3] bg-app-card border-[10px] border-app-border rounded-[2.5rem] p-3 flex flex-col transition-colors duration-300 shadow-2xl mx-auto relative max-w-[600px] md:max-w-[750px]">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-app-border z-20" />
                  <div className="w-full h-full bg-app-bg rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                     <GalleryDisplay />
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: Device Mockups (Desktop Only) */}
          <div className="hidden xl:block xl:col-span-2 relative w-full h-[650px]">
            <div className="absolute bottom-[-10px] left-0 z-20">
              <div className="w-[365px] h-[640px] bg-app-card border-[8px] border-app-border rounded-[2.5rem] p-2 flex flex-col items-center transition-colors duration-300 shadow-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-app-border rounded-full z-20" />
                <div className="w-full h-full bg-app-bg rounded-[1.8rem] flex flex-col items-center justify-center relative overflow-hidden">
                   <StudyCanvasDemo />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 z-10">
              <div className="w-[880px] h-[660px] bg-app-card border-[10px] border-app-border rounded-[2.5rem] p-3 flex flex-col transition-colors duration-300 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-app-border z-20" />
                <div className="w-full h-full bg-app-bg rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                   <GalleryDisplay />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SCROLL DOWN ARROW */}
        <div className="relative z-30 pb-10 flex justify-center w-full mt-auto hidden xl:flex">
          <a href="#features" className="w-12 h-12 rounded-full border-4 border-app-border bg-app-card flex items-center justify-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-colors duration-200 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
        </div>
      </section>

      <div id="features" className="scroll-mt-20">
        <Features />
      </div>

      <GalleryDemo/>
    </main>
  );
}