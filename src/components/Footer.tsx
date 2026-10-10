import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream pt-16 pb-20 border-t border-muted-border/60 text-dark">
      <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer: Brand, Mission, Back-to-Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-muted-border/60 gap-6">
          <div>
            <span className="font-display font-black text-3xl sm:text-4xl tracking-tighter text-black">
              MEL ROBBINS
            </span>
            <p className="text-muted text-sm mt-2 max-w-md">
              Empowering millions worldwide with research-backed tools to take control, overcome self-doubt, and live an intentional life.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-yellow border border-muted-border/60 text-xs font-bold text-dark transition-all duration-200 shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-muted-border/60 text-sm">
          
          {/* Column 1: Topics */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-4">
              Explore Topics
            </h4>
            <ul className="space-y-2.5 font-medium text-dark/80">
              <li><a href="#topics" className="hover:text-black hover:underline">Anxiety & Stress</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Confidence</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Habits & Routine</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Happiness</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Health & Longevity</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Relationships</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Motivation</a></li>
            </ul>
          </div>

          {/* Column 2: Books */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-4">
              Bestselling Books
            </h4>
            <ul className="space-y-2.5 font-medium text-dark/80">
              <li>
                <a href="#books" className="hover:text-black hover:underline flex items-center gap-1.5">
                  <span>The Let Them Theory</span>
                  <span className="bg-yellow text-dark text-[9px] font-black px-1 rounded">NEW</span>
                </a>
              </li>
              <li><a href="#books" className="hover:text-black hover:underline">The High 5 Habit</a></li>
              <li><a href="#books" className="hover:text-black hover:underline">The 5 Second Rule</a></li>
              <li><a href="#books" className="hover:text-black hover:underline">Take Control of Your Life</a></li>
              <li><a href="#books" className="hover:text-black hover:underline">Kick Ass with Mel Robbins</a></li>
            </ul>
          </div>

          {/* Column 3: The Podcast */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-4">
              The Podcast
            </h4>
            <ul className="space-y-2.5 font-medium text-dark/80">
              <li><a href="#podcast" className="hover:text-black hover:underline">Listen on Spotify</a></li>
              <li><a href="#podcast" className="hover:text-black hover:underline">Apple Podcasts</a></li>
              <li><a href="#podcast" className="hover:text-black hover:underline">YouTube Studio Shows</a></li>
              <li><a href="#topics" className="hover:text-black hover:underline">Browse 400+ Episodes</a></li>
              <li><a href="#podcast" className="hover:text-black hover:underline">Golden Globe Nominee</a></li>
            </ul>
          </div>

          {/* Column 4: About & Events */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-4">
              About &amp; Speaking
            </h4>
            <ul className="space-y-2.5 font-medium text-dark/80">
              <li><a href="#about" className="hover:text-black hover:underline">About Mel Robbins</a></li>
              <li><a href="#speaking" className="hover:text-black hover:underline">Keynote Speaking</a></li>
              <li><a href="https://www.melrobbins.com/media-press/" target="_blank" rel="noreferrer" className="hover:text-black hover:underline">Press &amp; Media Kit</a></li>
              <li><a href="https://www.melrobbins.com/awards/" target="_blank" rel="noreferrer" className="hover:text-black hover:underline">Awards &amp; Honors</a></li>
              <li><a href="https://www.melrobbins.com/careers/" target="_blank" rel="noreferrer" className="hover:text-black hover:underline">Careers at 143 Studios</a></li>
              <li><a href="https://www.melrobbins.com/contact/" target="_blank" rel="noreferrer" className="hover:text-black hover:underline">Contact Team</a></li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted mb-4">
              Join 40M+ Community
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { name: 'Instagram', url: 'https://instagram.com/melrobbins' },
                { name: 'YouTube', url: 'https://youtube.com/@melrobbins' },
                { name: 'TikTok', url: 'https://tiktok.com/@melrobbins' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/melrobbins' },
                { name: 'Facebook', url: 'https://facebook.com/melrobbins' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-yellow border border-muted-border/60 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted gap-4 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} 143 Studios, Inc. All rights reserved. The Mel Robbins Podcast is a registered trademark.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://www.melrobbins.com/privacy/" target="_blank" rel="noreferrer" className="hover:text-dark underline">
              Privacy Policy
            </a>
            <a href="https://www.melrobbins.com/terms-of-use/" target="_blank" rel="noreferrer" className="hover:text-dark underline">
              Terms of Use
            </a>
            <a href="https://www.melrobbins.com/disclaimer/" target="_blank" rel="noreferrer" className="hover:text-dark underline">
              Disclaimer
            </a>
            <a href="https://www.melrobbins.com/fraud-warning/" target="_blank" rel="noreferrer" className="hover:text-dark underline">
              Fraud Warning
            </a>
          </div>
        </div>

        {/* Loving Sign-off */}
        <div className="mt-6 pt-4 text-center text-[11px] text-muted flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          <span>for believers in human potential.</span>
        </div>

      </div>
    </footer>
  );
};
