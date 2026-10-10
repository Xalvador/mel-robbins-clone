import React from 'react';

export const PodcastSection: React.FC = () => {
  return (
    <section id="podcast" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-[46px] text-black leading-[1.1] mb-6">
              The #1<br />Podcast on<br />the Globe
            </h2>

            <div className="text-[#333333] text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              <p>
                <strong className="text-black font-semibold">The Mel Robbins Podcast </strong>
                is the most shared and followed podcast in the world and is nominated for the first-ever Golden Globe for Best Podcast. It's a global phenomenon for a reason: Mel and her renowned guests share practical, science-backed tools and deeply personal insights that help people take control and change their lives in a moment when the world feels so overwhelming.
              </p>
            </div>

            <a
              href="https://www.melrobbins.com/podcast/"
              className="inline-block bg-[#FFD200] hover:bg-[#E5BD00] text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm"
            >
              Find an Episode
            </a>
          </div>

          {/* Right Column: Mel Podcast Image */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-2xl lg:rounded-3xl overflow-hidden shadow-md bg-white">
              <img
                src="/images/Mel-Podcast-Image.png"
                alt="The Mel Robbins Podcast"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.melrobbins.com/wp-content/uploads/2025/10/Mel-Podcast-Image.png";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
