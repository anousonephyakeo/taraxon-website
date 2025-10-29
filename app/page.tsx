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
          className="h-full w-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/taraxon-404page.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 animate-pulse">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 bg-white/5 backdrop-blur-sm">
            <svg
              className="h-10 w-10 text-white"
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

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          TARAXON
        </h1>
        
        <h2 className="mb-6 text-2xl font-semibold text-white/90 md:text-3xl">
          Under Construction
        </h2>
        
        <p className="mb-8 max-w-md text-lg text-white/70 md:text-xl">
          We're working hard to bring you something amazing. 
          <br />
          Stay tuned!
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-bounce rounded-full bg-white delay-0"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-white delay-75"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-white delay-150"></div>
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-white/60">
            Coming Soon
          </p>
        </div>
      </main>

      {/* Footer */}
      <div className="absolute bottom-8 z-10 text-center">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Taraxon. All rights reserved.
        </p>
      </div>
    </div>
  );
}
