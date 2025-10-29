'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-black">
      {/* Video Background - Different for mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={isMobile ? 'mobile' : 'desktop'}
          className="h-full w-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source 
            src={isMobile ? "/taraxon_mobile.webm" : "/taraxon-404page.webm"} 
            type="video/webm" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Lighter overlay for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Ultra Minimalist Content - Positioned at Top */}
      <main className="relative z-10 mt-[20vh] flex w-full flex-col items-center px-6 text-center">
        {/* Main Message */}
        <h1 className="mb-6 text-3xl font-light uppercase tracking-[0.4em] text-white md:text-4xl lg:text-5xl">
          Under Construction
        </h1>
        
        {/* Subtle Loading Indicator */}
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:0ms]"></div>
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:150ms]"></div>
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:300ms]"></div>
        </div>
      </main>

      {/* Footer with Slogan */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-3 text-center md:bottom-12">
        {/* Slogan */}
        <p className="text-sm font-light italic tracking-wide text-white/50 md:text-base">
          Something extraordinary is on the horizon
        </p>
        
        {/* Copyright */}
        <p className="text-xs font-light tracking-wider text-white/30">
          © {new Date().getFullYear()} Taraxon
        </p>
      </div>
    </div>
  );
}
