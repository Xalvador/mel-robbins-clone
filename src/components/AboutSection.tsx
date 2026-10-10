import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const images = [
    "/images/Home_About_Mel_1.jpg",
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Carousel Image Container */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-md bg-white aspect-[16/10]">
            <img
              src={images[currentIdx]}
              alt="Mel Robbins"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://www.melrobbins.com/wp-content/uploads/2025/10/Home_About_Mel_1.jpg";
              }}
            />
          </div>

          {/* Carousel Arrows & Dots */}
          <div className="flex items-center justify-between mt-4 px-2 max-w-sm mx-auto text-black">
            <button
              onClick={() => setCurrentIdx((i) => (i - 1 + images.length) % images.length)}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`w-1.5 h-1.5 rounded-full ${
                    dot === 0 ? 'bg-black' : 'bg-black/25'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIdx((i) => (i + 1) % images.length)}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Text Copy & Yellow Button */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl lg:text-[38px] text-black leading-tight mb-4">
            Hey, it's your friend, Mel
          </h2>

          <p className="text-sm sm:text-base text-[#333333] leading-relaxed mb-8">
            <strong className="text-black font-semibold">Mel Robbins</strong> is a #1 New York Times bestselling author, award-winning podcast host, and the most trusted expert in personal growth, with 40 million followers worldwide.
          </p>

          <a
            href="https://www.melrobbins.com/about-mel/"
            className="inline-block bg-[#FFD200] hover:bg-[#E5BD00] text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm"
          >
            More about Mel
          </a>
        </div>

      </div>
    </section>
  );
};
