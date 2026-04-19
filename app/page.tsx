import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-app-bg text-app-text relative min-h-screen w-full flex flex-col font-sans overflow-hidden transition-colors duration-300">
      
      {/* 1. BACKGROUND PLACEHOLDER */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 md:opacity-20">
        <div className="w-full h-full bg-app-accent" />
      </div>

      {/* 2. TOP NAVIGATION */}
      <nav className="relative z-30 w-full p-6 flex items-center justify-end gap-6 text-sm font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-app-accent transition-colors">About</a>
        <a href="#" className="hover:text-app-accent transition-colors">Twitter</a>
        <a href="#" className="hover:text-app-accent transition-colors">Contact</a>
        <ThemeToggle />
      </nav>

      {/* 3. MAIN CONTENT SPLIT */}
      <div className="relative z-10 flex-1 flex flex-col xl:flex-row items-center justify-center max-w-[90rem] mx-auto w-full px-6 gap-16 md:gap-24 pt-12 md:pt-0 pb-16 md:pb-0">
        
        {/* LEFT SIDE: Text and Actions */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-lg z-20">
          
          <div className="flex flex-col md:flex-row items-center xl:items-start gap-6 mb-8 text-center xl:text-left">
            {/* APP ICON PLACEHOLDER */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-app-card border-4 border-app-border rounded-3xl flex items-center justify-center shrink-0">
              <span className="text-[10px] md:text-xs font-black opacity-50 uppercase tracking-widest">Icon</span>
            </div>
            
            {/* TITLE & SUBTITLE GROUP */}
            <div className="flex flex-col justify-center mt-2 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-3">
                Study Canvas Pomodoro
              </h1>
              <p className="text-lg md:text-2xl font-bold text-app-accent tracking-tight">
                Create art with friends while you focus to show off your study feats!
              </p>
            </div>
          </div>
          

          {/* WAITLIST FORM */}
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center xl:justify-start">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              className="w-full sm:flex-1 h-14 bg-app-card border-4 border-app-border rounded-xl px-4 font-bold text-app-text placeholder:text-app-text/50 focus:outline-none focus:border-app-accent transition-colors"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto h-14 px-6 bg-app-card border-4 border-app-border rounded-xl flex items-center justify-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-colors duration-200 shrink-0"
            >
               <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Join Waitlist</span>
            </button>
          </form>
          
        </div>

        {/* RIGHT SIDE: Device Mockups */}
        <div className="relative shrink-0 mt-12 md:mt-0 w-[370px] md:w-[840px] h-[240px] md:h-[540px]">
          
          {/* A. iPad Mockup */}
          <div className="absolute bottom-0 right-0 z-0">
            {/* iPad Frame */}
            <div className="relative w-[280px] md:w-[680px] h-[200px] md:h-[500px] bg-app-card border-[6px] md:border-[10px] border-app-border rounded-[1.5rem] md:rounded-[2.5rem] p-1.5 md:p-3 flex flex-col transition-colors duration-300 shadow-2xl">
              
              {/* Top Camera Dot */}
              <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1 h-1 md:w-2 md:h-2 rounded-full bg-app-border z-20" />

              {/* Screen Placeholder */}
              <div className="w-full h-full bg-app-bg rounded-[1rem] md:rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                 <span className="text-[10px] md:text-sm font-black opacity-30 uppercase tracking-widest text-center px-2">iPad Screen</span>
              </div>
            </div>
          </div>

          {/* B. Phone Mockup */}
          <div className="absolute bottom-0 left-0 z-10">
            {/* Phone Frame */}
            <div className="relative w-[110px] md:w-[220px] h-[220px] md:h-[440px] bg-app-card border-[5px] md:border-[8px] border-app-border rounded-[1.5rem] md:rounded-[2.5rem] p-1 md:p-2 flex flex-col items-center transition-colors duration-300 shadow-xl">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-8 md:w-20 h-2 md:h-4 bg-app-border rounded-full z-20" />

              {/* SCREEN PLACEHOLDER */}
              <div className="w-full h-full bg-app-bg rounded-[1rem] md:rounded-[1.5rem] flex flex-col items-center justify-center relative overflow-hidden">
                 <span className="text-[8px] md:text-xs font-black opacity-40 uppercase tracking-widest text-center px-1 md:px-2">Phone Screen</span>
              </div>

            </div>
          </div>
          
        </div>

      </div>

      {/* 4. SCROLL DOWN ARROW */}
      <div className="relative z-30 pb-8 pt-4 flex justify-center w-full mt-auto">
        <div className="w-12 h-12 rounded-full border-4 border-app-border bg-app-card flex items-center justify-center cursor-pointer hover:bg-app-text hover:text-app-bg transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>

    </main>
  );
}