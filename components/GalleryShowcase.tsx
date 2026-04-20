import React from 'react'

export default function GalleryShowcase() {
  const points = [
    "Add items you earn",
    "Add dynamic post it notes, to do lists, and way more!",
    "Build by yourself or with your friends"
  ];

  return (
    <section className="w-[80%] mx-auto py-20 flex flex-col items-center">
      
      {/* 1. LARGE GALLERY SCREEN */}
      <div className="w-full aspect-video bg-app-card border-4 border-app-border rounded-[3rem] shadow-2xl flex items-center justify-center relative overflow-hidden group mb-12">
        {/* Gallery Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(var(--app-border) 2px, transparent 2px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Placeholder Content */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-app-border flex items-center justify-center animate-pulse">
            <span className="text-2xl">🖼️</span>
          </div>
          <span className="text-xs font-black uppercase tracking-[0.3em] opacity-40">
            Gallery Showcase View
          </span>
        </div>
      </div>

      {/* 2. TEXT CONTENT BELOW */}
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
          Build a moodboard over time by yourself or with your friends!
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-4 group">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-app-card border-2 border-app-border flex items-center justify-center group-hover:border-app-accent transition-colors">
                <span className="text-app-accent font-bold">✓</span>
              </div>
              <p className="text-lg md:text-xl font-medium opacity-80">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}