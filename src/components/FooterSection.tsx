import React from 'react';
import { MelRobbinsLogo } from './MelRobbinsLogo';
import { Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';

interface FooterSectionProps {
  onNewHereClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNewHereClick }) => {
  return (
    <footer className="bg-[#FAF7F2] pt-16 pb-20 border-t border-black/10 text-black relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top: Logo & 4 Column Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-black/10">
          
          {/* Logo */}
          <div className="md:col-span-3">
            <a href="/" aria-label="Mel Robbins homepage">
              <MelRobbinsLogo className="h-9 w-auto text-black" color="#000000" />
            </a>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs sm:text-[13px]">
            
            {/* Column 1: Topics */}
            <div>
              <h4 className="font-semibold text-black mb-3">Topics</h4>
              <ul className="space-y-2 text-[#333333]">
                <li><a href="https://www.melrobbins.com/topic/anxiety/" className="hover:underline">Anxiety</a></li>
                <li><a href="https://www.melrobbins.com/topic/confidence/" className="hover:underline">Confidence</a></li>
                <li><a href="https://www.melrobbins.com/topic/habits/" className="hover:underline">Habits</a></li>
                <li><a href="https://www.melrobbins.com/topic/happiness/" className="hover:underline">Happiness</a></li>
                <li><a href="https://www.melrobbins.com/topic/health-wellness/" className="hover:underline">Health</a></li>
                <li><a href="https://www.melrobbins.com/topic/most-popular/" className="hover:underline">Most Popular</a></li>
                <li><a href="https://www.melrobbins.com/topics/" className="hover:underline font-semibold text-black">All Topics</a></li>
              </ul>
            </div>

            {/* Column 2: Books */}
            <div>
              <h4 className="font-semibold text-black mb-3">Books</h4>
              <ul className="space-y-2 text-[#333333]">
                <li><a href="https://www.melrobbins.com/book/the-let-them-theory/" className="hover:underline">The Let Them Theory</a></li>
                <li><a href="https://www.melrobbins.com/book/the-high-5-habit/" className="hover:underline">The High 5 Habit</a></li>
                <li><a href="https://www.melrobbins.com/book/the-5-second-rule/" className="hover:underline">The 5 Second Rule</a></li>
                <li><a href="https://www.melrobbins.com/books/" className="hover:underline font-semibold text-black">All Books</a></li>
              </ul>
            </div>

            {/* Column 3: Courses */}
            <div>
              <h4 className="font-semibold text-black mb-3">Courses</h4>
              <ul className="space-y-2 text-[#333333]">
                <li><a href="https://www.melrobbins.com/course/make-it-happen/" className="hover:underline">Make It Happen</a></li>
                <li><a href="https://www.melrobbins.com/course/take-control-2/" className="hover:underline">Take Control</a></li>
              </ul>
            </div>

            {/* Column 4: About */}
            <div>
              <h4 className="font-semibold text-black mb-3">About</h4>
              <ul className="space-y-2 text-[#333333]">
                <li><a href="https://www.melrobbins.com/about-mel/" className="hover:underline">About Mel</a></li>
                <li><a href="https://www.melrobbins.com/press/" className="hover:underline">Press</a></li>
                <li><a href="https://www.melrobbins.com/awards/" className="hover:underline">Awards</a></li>
                <li><a href="https://www.melrobbins.com/careers/" className="hover:underline">Careers</a></li>
                <li><a href="https://www.melrobbins.com/speaking/" className="hover:underline">Speaking</a></li>
                <li><a href="https://www.melrobbins.com/contact/" className="hover:underline">Contact</a></li>
                <li><a href="https://www.melrobbins.com/fraud-warning/" className="hover:underline">Fraud Warning</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Social Icons, Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#555555]">
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-black">
            <a href="https://instagram.com/melrobbins" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-75">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@melrobbins" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:opacity-75">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/melrobbins" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-75">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/melrobbins" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-75">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>&copy; {new Date().getFullYear()} Mel Robbins. All rights reserved.</span>
            <a href="https://www.melrobbins.com/privacy/" className="hover:underline">Privacy</a>
            <a href="https://www.melrobbins.com/disclaimer/" className="hover:underline">Disclaimer</a>
            <a href="https://www.melrobbins.com/terms-of-use/" className="hover:underline">Terms of Use</a>
            <a href="https://www.melrobbins.com/fraud-warning/" className="hover:underline">Fraud Warning</a>
          </div>

        </div>

      </div>

      {/* Floating Yellow "New Here?" Button on Bottom Right */}
      <button
        onClick={onNewHereClick}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FFD200] hover:bg-[#E5BD00] text-black font-display font-extrabold text-xs sm:text-sm tracking-tight flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="New Here? Start Here Guide"
      >
        <span className="leading-tight">New</span>
        <span className="leading-tight">Here?</span>
      </button>
    </footer>
  );
};
