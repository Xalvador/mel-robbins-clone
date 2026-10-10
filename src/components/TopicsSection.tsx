import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const TopicsSection: React.FC = () => {
  const [searchVal, setSearchVal] = useState('');

  const topics = [
    { name: "Anxiety", icon: "/images/anxiety-topic-icon.svg", link: "https://www.melrobbins.com/topic/anxiety/" },
    { name: "Confidence", icon: "/images/confidence.svg", link: "https://www.melrobbins.com/topic/confidence/" },
    { name: "Habits", icon: "/images/habits.svg", link: "https://www.melrobbins.com/topic/habits/" },
    { name: "Happiness", icon: "/images/happiness.svg", link: "https://www.melrobbins.com/topic/happiness/" },
    { name: "Health", icon: "/images/health.svg", link: "https://www.melrobbins.com/topic/health-wellness/" },
    { name: "Most Popular", icon: "/images/popular-topic-icon.svg", link: "https://www.melrobbins.com/topic/most-popular/" },
    { name: "Motivation", icon: "/images/motivation.svg", link: "https://www.melrobbins.com/topic/motivation/" },
    { name: "Relationships", icon: "/images/relationships.svg", link: "https://www.melrobbins.com/topic/relationships/" },
  ];

  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl lg:text-[34px] text-black leading-tight mb-3">
            Search the entire library.<br />Find the episode you want.
          </h2>
          <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
            Unlock the full power of <strong>The Mel Robbins Podcast</strong> library. Find any moment, quote or advice you're looking for. Fast.
          </p>

          {/* Search Box */}
          <div className="mt-6 relative max-w-lg mx-auto">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search for anything"
              className="w-full py-3 pl-4 pr-11 bg-[#FAF7F2] border border-[#E8E4DA] rounded-lg text-sm text-black placeholder:text-[#888888] focus:outline-none focus:border-black"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-black hover:opacity-75"
              aria-label="Submit search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Topic Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {topics.map((t) => (
            <a
              key={t.name}
              href={t.link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#FAF7F2] hover:bg-[#F2EEE4] rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-colors group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FFD200] rounded-full p-2 flex items-center justify-center mb-2.5 flex-shrink-0">
                <img
                  src={t.icon}
                  alt={t.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="uppercase text-[11px] font-semibold text-black tracking-wide">
                {t.name}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
