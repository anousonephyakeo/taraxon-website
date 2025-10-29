'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-40 sm:opacity-50"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="/taraxon-404page.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient - enhanced for better readability on all devices */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* Content - with responsive spacing and sizing */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:px-8 lg:px-10">
        {/* Icon - responsive sizing */}
        <div className="mb-6 animate-pulse sm:mb-8 md:mb-10">
          <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full border-3 border-white/20 bg-white/5 backdrop-blur-sm sm:h-20 sm:w-20 sm:border-4 md:mb-4 lg:h-24 lg:w-24">
            <svg
              className="h-8 w-8 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
        </div>

        {/* Main Title - responsive text sizing */}
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          TARAXON
        </h1>
        
        {/* Subtitle - responsive sizing */}
        <h2 className="mb-4 text-xl font-semibold text-white/90 sm:mb-6 sm:text-2xl md:text-3xl lg:text-4xl">
          Under Construction
        </h2>
        
        {/* Description - responsive with better line breaks */}
        <p className="mb-6 max-w-xs text-base text-white/70 sm:mb-8 sm:max-w-md sm:text-lg md:max-w-lg md:text-xl lg:max-w-xl">
          We're working hard to bring you something amazing.
          <br className="hidden sm:inline" />
          <span className="sm:hidden"> </span>
          Stay tuned!
        </p>

        {/* Loading Animation - responsive sizing */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white delay-0 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white delay-75 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white delay-150 sm:h-2 sm:w-2"></div>
          </div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/60 sm:text-sm">
            Coming Soon
          </p>
        </div>
      </main>

      {/* Footer - responsive positioning and sizing */}
      <div className="absolute bottom-4 z-10 w-full px-4 text-center sm:bottom-6 md:bottom-8">
        <p className="text-xs text-white/40 sm:text-sm">
          © {new Date().getFullYear()} Taraxon. All rights reserved.
        </p>
      </div>
    </div>
  );
}
