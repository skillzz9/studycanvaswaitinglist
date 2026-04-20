import Features from "@/components/Features";
import ThemeToggle from "@/components/ThemeToggle";
import GalleryShowcase from "@/components/GalleryShowcase";

export default function Home() {
  return (
    <main className="bg-app-bg text-app-text relative min-h-screen w-full flex flex-col font-sans overflow-y-auto transition-colors duration-300 scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen lg:h-screen w-full flex flex-col shrink-0 pb-20 lg:pb-0">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 md:opacity-20 pointer-events-none">
          <div className="w-full h-full bg-app-accent" />
        </div>

        {/* 2. THEME TOGGLE (Placed floating since nav is gone) */}
        <div className="relative z-50 w-full p-6 flex justify-end">
          <ThemeToggle />
        </div>

        {/* 3. MAIN CONTENT */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-3 items-center max-w-[95rem] mx-auto w-full px-6 lg:px-12 gap-8 lg:gap-12">
          
          {/* LEFT SIDE: The Dynamic Stack */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20 pt-4 lg:pt-0">
            
            {/* A. TITLE */}
            <div className="flex flex-col items-center lg:items-start w-full mb-6 lg:mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Study Canvas Pomodoro
              </h1>
              
              {/* Desktop Subtitle (Hidden on mobile) */}
              <p className="hidden lg:block text-lg md:text-xl lg:text-2xl font-bold text-app-accent tracking-tight max-w-sm mt-4">
                Create art with friends while you focus to show off your study feats!
              </p>
            </div>

            {/* B. IPHONE (Visible only in Portrait between Title and Waitlist) */}
            <div className="block lg:hidden mb-10">
               <div className="w-[220px] h-[450px] bg-app-card border-[8px] border-app-border rounded-[2.5rem] p-2 flex flex-col items-center transition-colors duration-300 shadow-2xl relative">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-app-border rounded-full z-20" />
                  <div className="w-full h-full bg-app-bg rounded-[1.8rem] flex flex-col items-center justify-center relative overflow-hidden">
                     <span className="text-xs font-black opacity-40 uppercase tracking-widest text-center px-4">Mobile App</span>
                  </div>
               </div>
            </div>

            {/* C. WAITLIST FORM */}
            <form className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full h-14 bg-app-card border-4 border-app-border rounded-xl px-4 font-bold text-app-text placeholder:text-app-text/50 focus:outline-none focus:border-app-accent transition-colors"
              />
              <button 
                type="submit" 
                className="w-full h-14 bg-app-card border-4 border-app-border rounded-xl flex items-center justify-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-colors duration-200"
              >
                 <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Join Waitlist</span>
              </button>
            </form>

            {/* D. MOBILE SUBTITLE (Underneath waitlist, above iPad) */}
            <p className="block lg:hidden text-lg font-bold text-app-accent tracking-tight max-w-xs mx-auto mt-10 mb-10">
              Create art with friends while you focus to show off your study feats!
            </p>

            {/* E. IPAD (Visible only in Portrait at the bottom) */}
            <div className="block lg:hidden w-full">
               <div className="w-[90vw] aspect-[4/3] bg-app-card border-[10px] border-app-border rounded-[2.5rem] p-3 flex flex-col transition-colors duration-300 shadow-2xl mx-auto relative max-w-[600px]">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-app-border z-20" />
                  <div className="w-full h-full bg-app-bg rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                     <span className="text-sm font-black opacity-30 uppercase tracking-widest text-center px-4">iPad Interface</span>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: Desktop/Landscape Devices */}
          <div className="hidden lg:block lg:col-span-2 relative w-full h-[500px] xl:h-[650px]">
            
            {/* Phone Front */}
            <div className="absolute bottom-[-10px] left-0 z-20">
              <div className="w-[220px] xl:w-[280px] h-[450px] xl:h-[570px] bg-app-card border-[8px] border-app-border rounded-[2.5rem] p-2 flex flex-col items-center transition-colors duration-300 shadow-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-app-border rounded-full z-20" />
                <div className="w-full h-full bg-app-bg rounded-[1.8rem] flex flex-col items-center justify-center relative overflow-hidden">
                   <span className="text-xs font-black opacity-40 uppercase tracking-widest text-center px-4">Mobile App</span>
                </div>
              </div>
            </div>

            {/* iPad Back */}
            <div className="absolute bottom-0 right-0 z-10">
              <div className="w-[600px] xl:w-[880px] h-[450px] xl:h-[660px] bg-app-card border-[10px] border-app-border rounded-[2.5rem] p-3 flex flex-col transition-colors duration-300 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-app-border z-20" />
                <div className="w-full h-full bg-app-bg rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                   <span className="text-sm font-black opacity-30 uppercase tracking-widest text-center px-4">iPad Interface</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. SCROLL DOWN ARROW */}
        <div className="relative z-30 pb-10 flex justify-center w-full mt-auto hidden lg:flex">
          <a 
            href="#features" 
            className="w-12 h-12 rounded-full border-4 border-app-border bg-app-card flex items-center justify-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-colors duration-200 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div id="features" className="scroll-mt-20">
        <Features />
      </div>
      
      <GalleryShowcase />

    </main>
  );
}