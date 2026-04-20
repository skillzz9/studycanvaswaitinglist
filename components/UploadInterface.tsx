import React from 'react'

export default function UploadInterface() {
  return (
    <div className="flex flex-col items-center justify-center p-0 m-0">
      {/* THE STATIC INTERFACE MODAL */}
      <div className="relative w-[280px] md:w-[320px] origin-center bg-app-card border-4 border-app-border rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 duration-300">
          <h2 className="text-lg font-black text-app-text uppercase italic mb-4">Start New Project</h2>

          <div className="flex flex-col gap-4">
            {/* Bunny Reference */}
            <div className="relative w-full h-28 border-4 border-app-border rounded-2xl bg-app-bg overflow-hidden shadow-inner">
              <img src="/bunny.png" className="w-full h-full object-cover" alt="My Bunny" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl text-app-text font-bold text-[9px]">My Bunny</div>
              <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl text-app-text font-bold text-[9px]">Law Exam</div>
            </div>

            <div className="bg-app-bg border-4 border-app-border p-2 rounded-xl text-app-text font-medium text-[9px] leading-relaxed italic opacity-80 h-16 overflow-hidden">
              my bunny kept me calm during this time of stress
            </div>

            <button className="w-full py-2 bg-app-accent text-app-card border-2 md:border-4 border-app-border rounded-xl font-black uppercase text-[9px]">
              Drop Canvas on Wall
            </button>
          </div>
      </div>
    </div>
  )
}