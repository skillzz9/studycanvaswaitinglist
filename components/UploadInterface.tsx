"use client";
import React from 'react'

export default function UploadInterface() {
  return (
    <div className="flex flex-col items-center justify-center p-0 m-0">
      {/* FIXED HEIGHT MODAL: Matches the height of Canvas + Timer bar */}
      <div className="relative w-[280px] md:w-[320px] h-[400px] md:h-[440px] origin-center bg-app-card border-4 border-app-border rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 duration-300 flex flex-col">
          
          <h2 className="text-lg font-black text-app-text uppercase italic mb-4 flex-shrink-0">
            Start New Project
          </h2>

          <div className="flex flex-col flex-1 justify-between gap-2">
            {/* Bunny Reference - Height slightly adjusted to save vertical space */}
            <div className="relative w-full h-24 md:h-28 border-4 border-app-border rounded-2xl bg-app-bg overflow-hidden shadow-inner flex-shrink-0">
              <img src="/bunny.png" className="w-full h-full object-cover" alt="My Bunny" />
            </div>

            {/* Inputs Section */}
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl text-app-text font-bold text-[9px] flex items-center justify-center">
                  My Bunny
                </div>
                <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl text-app-text font-bold text-[9px] flex items-center justify-center">
                  Law Exam
                </div>
              </div>

              <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl text-app-text font-medium text-[9px] leading-relaxed italic opacity-80 h-14 overflow-hidden">
                my bunny kept me calm during this time of stress
              </div>

              <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl flex items-center justify-center">
                <span className="text-app-text font-black uppercase text-[9px] tracking-widest">
                  Time Total: 10 Hours
                </span>
              </div>
            </div>

            {/* Action Button - Pushed to the bottom */}
            <button className="w-full py-3 bg-app-accent text-app-card border-2 md:border-4 border-app-border rounded-xl font-black uppercase text-[9px] mt-auto">
              Drop Canvas on Wall
            </button>
          </div>
      </div>
    </div>
  )
}