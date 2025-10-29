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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Video Background - Different for mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={isMobile ? 'mobile' : 'desktop'}
          className="h-full w-full object-cover opacity-50"
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
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Minimalist Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Subtle Icon */}
        <div className="mb-8 md:mb-12">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-white/20 md:h-16 md:w-16">
            <svg
              className="h-7 w-7 text-white/90 md:h-8 md:w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>
        </div>

        {/* Minimal Typography */}
        <h1 className="mb-4 text-6xl font-light tracking-[0.2em] text-white md:text-7xl lg:text-8xl">
          TARAXON
        </h1>
        
        {/* Divider Line */}
        <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent md:w-32"></div>
        
        {/* Subtitle */}
        <h2 className="mb-8 text-sm font-light uppercase tracking-[0.3em] text-white/70 md:text-base">
          Under Construction
        </h2>
        
        {/* Minimalist Description */}
        <p className="mb-12 max-w-sm text-sm font-light leading-relaxed text-white/60 md:max-w-md md:text-base">
          Something extraordinary is on the horizon.
        </p>

        {/* Subtle Loading Indicator */}
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:0ms]"></div>
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:150ms]"></div>
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/60 [animation-delay:300ms]"></div>
        </div>
      </main>

      {/* Minimal Footer */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center md:bottom-8">
        <p className="text-xs font-light tracking-wider text-white/30">
          © {new Date().getFullYear()} Taraxon
        </p>
      </div>
    </div>
  );
}
