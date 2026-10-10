import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_QUOTES } from '../data/siteData';

interface HeroSectionProps {
  onNewHereClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNewHereClick }) => {
  // Index 1 is TIME ("Mel gives millions of people a reason to believe in themselves.") as shown in the screenshot
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % HERO_QUOTES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentQuote = HERO_QUOTES[activeQuoteIndex];

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1050px] bg-black text-white overflow-hidden flex items-center select-none">
      
      {/* Background Image: Mel Robbins smiling on black background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Home_Hero.jpg"
          alt="Mel Robbins"
          className="w-full h-full object-cover object-[25%_center] md:object-[left_center] opacity-95 pointer-events-none"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://www.melrobbins.com/wp-content/uploads/2025/10/Home_Hero.jpg";
          }}
        />

        {/* Seamless blend gradient: Mel is visible on left, right half fades completely into pure solid black */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black pointer-events-none left-[30%]" />
        
        {/* Mobile gradient overlay from bottom */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full items-center">
          
          {/* Left Column Spacer so Mel's portrait shines on the left */}
          <div className="hidden md:block md:col-span-6 lg:col-span-6 h-full" />

          {/* Right Column: Quote, Media Logo & Pagination Dots */}
          <div
            className="md:col-span-6 lg:col-span-6 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10 mt-24 md:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="w-full max-w-[540px] mx-auto flex flex-col items-center justify-center min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  {/* Testimonial Quote */}
                  <blockquote className="font-sans font-semibold text-xl sm:text-2xl md:text-[27px] leading-[1.35] text-white tracking-normal drop-shadow-md">
                    &ldquo;{currentQuote.quote}&rdquo;
                  </blockquote>

                  {/* Publication Logo */}
                  <div className="mt-6 sm:mt-8 flex items-center justify-center h-8 sm:h-9">
                    {currentQuote.id === 'time-1' ? (
                      <span className="font-serif font-black text-2xl sm:text-3xl text-[#EE1B24] tracking-wider">
                        TIME
                      </span>
                    ) : currentQuote.logoUrl ? (
                      <img
                        src={currentQuote.logoUrl}
                        alt={currentQuote.source}
                        className="max-h-7 sm:max-h-8 max-w-[180px] object-contain brightness-0 invert opacity-95"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="font-serif italic font-bold text-lg sm:text-xl text-white tracking-wider">
                        {currentQuote.source}
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 7 Carousel Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                {HERO_QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveQuoteIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeQuoteIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Yellow "New Here?" Button in Bottom Right */}
      <button
        onClick={onNewHereClick}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-12 z-30 w-[82px] h-[82px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#FFD200] hover:bg-[#E5BD00] text-black font-display font-extrabold text-xs sm:text-sm tracking-tight flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="New Here? Start Here Guide"
      >
        <span className="leading-tight">New</span>
        <span className="leading-tight">Here?</span>
      </button>

    </section>
  );
};
