import React from 'react';
import { MEL_STATS } from '../data/siteData';
import { Heart, Sparkles, Mic, Calendar } from 'lucide-react';

export const AboutMelSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream/50 border-t border-muted-border/40">
      <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Portrait Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-3 bg-yellow/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform" />
              <div className="relative rounded-site-lg overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://www.melrobbins.com/wp-content/uploads/2025/10/Home_About_Mel_1.jpg"
                  alt="Mel Robbins"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
              </div>

              {/* Signature badge */}
              <div className="absolute -bottom-4 right-6 bg-yellow text-dark px-4 py-2 rounded-xl shadow-lg border border-black/10 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-black" /> It&rsquo;s Your Friend, Mel
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-muted-border text-xs font-bold uppercase tracking-wider text-muted mb-4">
              <Sparkles className="w-3.5 h-3.5 text-yellow-hover" />
              Meet Mel Robbins
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight mb-6">
              Hey, it&rsquo;s your friend, Mel
            </h2>

            <div className="text-muted text-base sm:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                <strong className="text-dark font-semibold">Mel Robbins</strong> is a #1 New York Times bestselling author, award-winning podcast host, and the most trusted expert in personal growth, with over 40 million followers worldwide.
              </p>
              <p>
                She didn&rsquo;t start out with a media empire or confident answers. In her 40s, her family was facing bankruptcy, their house was in foreclosure, and severe anxiety paralyzed her mornings. Out of sheer necessity, she discovered the simple brain-hack that became <em>The 5 Second Rule</em>.
              </p>
              <p className="text-dark font-medium italic border-l-4 border-yellow pl-4 py-1">
                &ldquo;I don&rsquo;t teach theory. I share the exact science and vulnerable truths that pulled me out of rock bottom. If I can rebuild my life, I know you can rebuild yours.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-4" id="speaking">
              <a
                href="#newsletter"
                className="button-yellow text-sm font-extrabold"
              >
                Join 40M+ Community
              </a>
              <a
                href="https://www.melrobbins.com/speaking/"
                target="_blank"
                rel="noreferrer"
                className="button-outline text-sm font-bold flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Mel to Speak
              </a>
            </div>

          </div>

        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-muted-border/60">
          {MEL_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-muted-border/40 shadow-sm text-center">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dark">
                {stat.value}
              </div>
              <div className="font-bold text-xs sm:text-sm text-dark mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-muted mt-1 leading-snug">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
