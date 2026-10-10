import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MelRobbinsLogo } from './MelRobbinsLogo';
import { TOPICS_DATA, BOOKS_DATA } from '../data/siteData';

interface NavbarProps {
  onSearchOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 py-5 sm:py-6">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left: Mel Robbins Signature Logo in White */}
          <a
            href="/"
            className="flex items-center text-white hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Mel Robbins homepage"
          >
            <MelRobbinsLogo className="h-8 sm:h-9 lg:h-10 w-auto text-white" />
          </a>

          {/* Right: Floating White Capsule Pill Navbar (Desktop) */}
          <div className="hidden lg:flex items-center bg-white rounded-xl px-4 py-2 shadow-xl border border-black/5">
            <nav className="flex items-center gap-1 text-[14px] font-semibold text-black">
              
              {/* Podcast */}
              <a
                href="#podcast"
                className="px-3.5 py-1.5 rounded-full hover:bg-cream transition-colors"
              >
                Podcast
              </a>

              {/* Topics Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('topics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#topics"
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-cream transition-colors focus:outline-none"
                >
                  <span>Topics</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'topics' ? 'rotate-180' : ''}`} />
                </a>

                <AnimatePresence>
                  {activeDropdown === 'topics' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-black/10 p-2 z-50 text-black text-left"
                    >
                      {TOPICS_DATA.slice(0, 6).map((topic) => (
                        <a
                          key={topic.id}
                          href="#topics"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cream text-xs font-semibold"
                        >
                          <span>{topic.name}</span>
                        </a>
                      ))}
                      <div className="h-px bg-black/10 my-1" />
                      <a
                        href="#topics"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-1.5 rounded-lg hover:bg-cream text-xs font-bold"
                      >
                        All Topics &rarr;
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Books Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('books')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#books"
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-cream transition-colors focus:outline-none"
                >
                  <span>Books</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'books' ? 'rotate-180' : ''}`} />
                </a>

                <AnimatePresence>
                  {activeDropdown === 'books' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-black/10 p-2 z-50 text-black text-left"
                    >
                      {BOOKS_DATA.map((book) => (
                        <a
                          key={book.id}
                          href="#books"
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-1.5 rounded-lg hover:bg-cream text-xs font-semibold"
                        >
                          {book.title}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#about"
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-cream transition-colors focus:outline-none"
                >
                  <span>About</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </a>

                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-black/10 p-2 z-50 text-black text-left"
                    >
                      <a href="#about" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 rounded-lg hover:bg-cream text-xs font-semibold">
                        About Mel
                      </a>
                      <a href="#about" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 rounded-lg hover:bg-cream text-xs font-semibold">
                        Speaking
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Newsletter */}
              <a
                href="#newsletter"
                className="px-3.5 py-1.5 rounded-full hover:bg-cream transition-colors"
              >
                Newsletter
              </a>
            </nav>

            {/* Search Icon Button */}
            <div className="pl-1.5 ml-1 border-l border-black/10">
              <button
                onClick={onSearchOpen}
                className="p-1.5 rounded-full hover:bg-cream text-black transition-colors focus:outline-none"
                aria-label="Search Library"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Mobile Capsule: Search & Menu */}
          <div className="lg:hidden flex items-center bg-white rounded-xl px-2.5 py-1.5 shadow-xl border border-black/10">
            <button
              onClick={onSearchOpen}
              className="p-1.5 text-black hover:bg-cream rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-black hover:bg-cream rounded-lg ml-1"
              aria-label="Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col z-50 p-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <MelRobbinsLogo className="h-7 w-auto text-black" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 py-6 font-bold text-lg text-black">
                <a href="#podcast" onClick={() => setMobileMenuOpen(false)}>Podcast</a>
                <a href="#topics" onClick={() => setMobileMenuOpen(false)}>Topics</a>
                <a href="#books" onClick={() => setMobileMenuOpen(false)}>Books</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#newsletter" onClick={() => setMobileMenuOpen(false)}>Newsletter</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
