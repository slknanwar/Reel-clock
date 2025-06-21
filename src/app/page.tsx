"use client";

import { useState, useEffect } from "react";
import ClockDisplay from "@/components/clock/clock-display";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimeParts {
  h1: string;
  h2: string;
  m1: string;
  m2: string;
  s1: string;
  s2: string;
}

const initialTimeParts: TimeParts = {
  h1: "0", h2: "0", m1: "0", m2: "0", s1: "0", s2: "0"
};

const getCurrentISTParts = (): TimeParts => {
  const now = new Date();
  const utcMillis = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  const istMillis = utcMillis + (5.5 * 60 * 60 * 1000);
  const istDate = new Date(istMillis);

  // Use local time methods after offsetting to IST
  const hours = String(istDate.getHours()).padStart(2, '0');
  const minutes = String(istDate.getMinutes()).padStart(2, '0');
  const seconds = String(istDate.getSeconds()).padStart(2, '0');

  return {
    h1: hours[0],
    h2: hours[1],
    m1: minutes[0],
    m2: minutes[1],
    s1: seconds[0],
    s2: seconds[1],
  };
};


export default function Home() {
  const [timeParts, setTimeParts] = useState<TimeParts>(initialTimeParts);
  const [isClient, setIsClient] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const isMobile = useIsMobile();


  useEffect(() => {
    setIsClient(true); 
    setCurrentYear(new Date().getFullYear());
    
    const updateClock = () => {
      setTimeParts(getCurrentISTParts());
    };

    updateClock(); 
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId); 
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 selection:bg-accent selection:text-accent-foreground">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground pb-2">
          Reel Time
        </h1>
        <p className="text-md sm:text-lg text-foreground/80">
          Indian Standard Time (UTC+5:30)
        </p>
      </div>
      
      {isClient ? (
        <ClockDisplay {...timeParts} isMobile={isMobile} />
      ) : (
        // Render basic structure or loading state for SSR/initial load
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-10 sm:w-12 h-30 sm:h-36 bg-primary rounded-xl"></div>
          <div className="w-10 sm:w-12 h-30 sm:h-36 bg-primary rounded-xl"></div>
          <div className="w-2 sm:w-3"></div>
          <div className="w-10 sm:w-12 h-30 sm:h-36 bg-primary rounded-xl"></div>
          <div className="w-10 sm:w-12 h-30 sm:h-36 bg-primary rounded-xl"></div>
          <div className="w-2 sm:w-3"></div>
          <div className="w-10 sm:w-12 h-30 sm:h-36 bg-primary rounded-xl"></div>
          <div className="w-10 sm:w-12 h-30 sm:h-36 bg-primary rounded-xl"></div>
        </div>
      )}

      <footer className="mt-12 text-center text-foreground/60 text-xs sm:text-sm">
        <p>Crafted with Precision</p>
        {currentYear !== null && <p>&copy; {currentYear} Reel Time App. All rights reserved.</p>}
      </footer>
    </main>
  );
}
