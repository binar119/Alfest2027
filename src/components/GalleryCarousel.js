"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryCarousel() {
  const images = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Changes photo every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 group select-none">
      
      {/* Container Window - unified height, hidden overflow */}
      <div className="overflow-hidden rounded-3xl border border-gold/20 h-[550px] md:h-[650px] relative w-full bg-bg-main/20 backdrop-blur-md flex items-center justify-center">
        
        {/* Sliding Strip Track */}
        <div 
          className="flex gap-6 h-full w-full items-center transition-transform duration-500 ease-out"
          style={{ 
            // This math shifts the track by exactly the width of the active image 
            // plus its gap space, keeping the active image perfectly centered.
            transform: `translateX(calc(50% - 35% - ${currentIndex * 70}% - ${currentIndex * 1.5}rem))` 
          }}
        >
          {images.map((i, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={i} 
                className={`w-[70%] h-[90%] shrink-0 relative rounded-2xl overflow-hidden border transition-all duration-500 shadow-2xl
                  ${isActive 
                    ? "border-gold/40 scale-100 opacity-100" 
                    : "border-gold/10 scale-95 opacity-40 blur-[1px]"
                  }
                `}
              >
                <Image 
                  src={`/galeri_${i}.webp`} 
                  alt={`Dokumentasi Alfest ${i}`}
                  fill
                  priority={i === 1}
                  sizes="(max-width: 768px) 70vw, 800px"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Operational Manual Navigation Buttons */}
        {/* Left Button (<) */}
        <button 
          onClick={handlePrev}
          className="absolute left-6 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 border border-gold/20 text-gold hover:bg-gold hover:text-black hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md transition-all font-display text-lg font-bold"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        {/* Right Button (>) */}
        <button 
          onClick={handleNext}
          className="absolute right-6 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 border border-gold/20 text-gold hover:bg-gold hover:text-black hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md transition-all font-display text-lg font-bold"
          aria-label="Next Slide"
        >
          &gt;
        </button>

      </div>
    </div>
  );
}