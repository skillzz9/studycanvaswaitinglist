import React from 'react'
import UploadInterface from "@/components/UploadInterface";
import StudyRoomDemo from "@/components/StudyRoomDemo";
import BrokenCanvasDemo from "@/components/BrokenCanvasDemo";

const featureData = [
  {
    id: 1,
    title: "Upload an image",
  description: "Write the title, subject, and time and it creates an empty painting frame. Pick an amount of time it should take to paint. Surprise your friends!",
  },
  {
    id: 2,
    title: "FOCUS",
    description: "Set a goal time for your session. Your masterpiece will paint itself while you focus on your work. Either contribute on your own, or with a study group.",
  },
  {
    id: 3,
    title: "Don't give up!",
    description: "Progress is only saved after finishing the session. Everyone leaving the app halfway will cause you to lose all your progress. Make sure your friends lock in!",
  }
];

export default function Features() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-12 tracking-tight uppercase">
        How it works
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {featureData.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center group">
            
            {/* 1. VISUAL CONTAINER (Fixed height anchors the text baseline) */}
            <div className="w-full h-[350px] md:h-[450px] flex items-end justify-center mb-8 overflow-visible">
              {feature.id === 1 && (
                <div className="scale-90 md:scale-110 origin-bottom">
                  <UploadInterface />
                </div>
              )}

              {feature.id === 2 && (
                <div className="scale-90 md:scale-110 origin-bottom">
                  <StudyRoomDemo />
                </div>
              )}

              {feature.id === 3 && (
                <div className="scale-90 md:scale-110 origin-bottom">
                  <BrokenCanvasDemo />
                </div>
              )}
            </div>
            
            {/* 2. TEXT CONTENT */}
            <div className="max-w-[280px]">
              <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight uppercase group-hover:text-app-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base font-medium opacity-60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}