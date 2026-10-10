import React from 'react';
import { MEDIA_LOGOS } from '../data/siteData';

export const MediaProofSection: React.FC = () => {
  return (
    <section className="bg-cream border-y border-muted-border/40 py-8 md:py-10">
      <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[12px] font-bold uppercase tracking-widest text-muted mb-6">
          As Featured & Covered In
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {MEDIA_LOGOS.map((media, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              {media.logoUrl ? (
                <img
                  src={media.logoUrl}
                  alt={media.name}
                  className="h-6 sm:h-7 md:h-8 max-w-[120px] object-contain opacity-75 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Fallback to text
                    const parent = target.parentElement;
                    if (parent) {
                      const textSpan = document.createElement('span');
                      textSpan.className = 'font-display font-black text-lg md:text-xl tracking-tight text-dark/70';
                      textSpan.innerText = media.name;
                      parent.appendChild(textSpan);
                    }
                  }}
                />
              ) : (
                <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-tighter text-dark/80 hover:text-black">
                  {media.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
