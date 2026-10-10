import React from 'react';

export const TopEpisodesSection: React.FC = () => {
  const episodes = [
    {
      number: 420,
      title: "If You Only Listen to One Podcast This Week, Make It This One",
      image: "/images/Ep420_Hero.jpg",
      link: "https://www.melrobbins.com/episode/episode-420/",
    },
    {
      number: 435,
      title: "How to Stop Letting People Disrespect You",
      image: "/images/Ep435_Hero-2.jpg",
      link: "https://www.melrobbins.com/episode/episode-435/",
    },
    {
      number: 361,
      title: "The 6 Habits That Will Change Your Life",
      image: "/images/Ep361_Hero.jpg",
      link: "https://www.melrobbins.com/episode/episode-361/",
    },
    {
      number: 274,
      title: "How to Reset Your Nervous System",
      image: "/images/Ep.-274.jpg",
      link: "https://www.melrobbins.com/episode/episode-274/",
    },
    {
      number: 436,
      title: "The 3 Best Ways to Build Unshakable Self-Worth",
      image: "/images/Ep436_Clip_4.jpg",
      link: "https://www.melrobbins.com/episode/episode-436/",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-black mb-8">
          Top Episodes
        </h2>

        {/* 5 Episode Cards in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {episodes.map((ep) => (
            <a
              key={ep.number}
              href={ep.link}
              target="_blank"
              rel="noreferrer"
              className="group block text-left"
            >
              {/* Thumbnail */}
              <div className="rounded-xl overflow-hidden aspect-video bg-[#111111] mb-2.5 shadow-sm">
                <img
                  src={ep.image}
                  alt={ep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://www.melrobbins.com/wp-content/uploads/2026/08/Ep${ep.number}_Hero.jpg`;
                  }}
                />
              </div>

              {/* Subtitle */}
              <p className="uppercase text-[11px] text-black tracking-wide my-1">
                Episode #{ep.number}
              </p>

              {/* Title */}
              <h3 className="font-semibold text-xs sm:text-[13px] text-black leading-snug group-hover:underline">
                {ep.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
