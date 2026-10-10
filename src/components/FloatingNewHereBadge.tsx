import React, { useState, useEffect } from 'react';
import { X, Sparkles, Headphones, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingNewHereBadgeProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onListenClick: () => void;
  onOrderClick: () => void;
}

export const FloatingNewHereBadge: React.FC<FloatingNewHereBadgeProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  onOpen: externalOnOpen,
  onListenClick,
  onOrderClick,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const isModalOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleOpen = externalOnOpen || (() => setInternalIsOpen(true));
  const handleClose = externalOnClose || (() => setInternalIsOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      // Show fixed floating button only after scrolling past the hero (e.g. 500px)
      setIsScrolledPastHero(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Circular Badge when scrolled past hero */}
      <AnimatePresence>
        {isScrolledPastHero && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-40 rounded-full w-20 h-20 md:w-24 md:h-24 p-2 flex flex-col items-center justify-center text-center bg-yellow hover:bg-yellow-hover text-black transition-all duration-300 hover:scale-105 active:scale-95 origin-bottom-right font-display font-extrabold text-xs sm:text-sm leading-tight shadow-2xl border-2 border-black/10 group focus:outline-none"
            aria-label="New Here? Start Here Guide"
          >
            <span className="leading-tight">New</span>
            <span className="leading-tight">Here?</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Start Here Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-site-lg shadow-2xl border border-muted-border p-6 sm:p-8 z-50 overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-yellow" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-hover" /> Quick Start Guide
                </span>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-full text-muted hover:text-dark hover:bg-cream"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="font-display font-black text-2xl text-dark mb-2">
                Welcome! Start Right Here.
              </h3>
              <p className="text-sm text-muted mb-6">
                If you&rsquo;re feeling stuck or overwhelmed, here are the 3 fastest ways to shift your energy today:
              </p>

              <div className="space-y-3.5 mb-6">
                <div
                  onClick={() => {
                    handleClose();
                    onListenClick();
                  }}
                  className="p-4 rounded-2xl bg-cream hover:bg-yellow/20 border border-muted-border/60 transition-all cursor-pointer flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow flex items-center justify-center text-dark flex-shrink-0 font-black">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-sm text-dark group-hover:underline">
                      1. Listen to Episode #420
                    </h4>
                    <p className="text-xs text-muted">The #1 rated episode on creating immediate momentum.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-dark group-hover:translate-x-1 transition-all" />
                </div>

                <div
                  onClick={() => {
                    handleClose();
                    onOrderClick();
                  }}
                  className="p-4 rounded-2xl bg-cream hover:bg-yellow/20 border border-muted-border/60 transition-all cursor-pointer flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-dark text-yellow flex items-center justify-center flex-shrink-0 font-black">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-sm text-dark group-hover:underline">
                      2. Learn The Let Them Theory
                    </h4>
                    <p className="text-xs text-muted">The 2-word rule that releases unnecessary anxiety and control.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-dark group-hover:translate-x-1 transition-all" />
                </div>

                <a
                  href="#newsletter"
                  onClick={handleClose}
                  className="p-4 rounded-2xl bg-cream hover:bg-yellow/20 border border-muted-border/60 transition-all cursor-pointer flex items-center gap-4 group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-muted-border flex items-center justify-center text-dark flex-shrink-0 font-black">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-sm text-dark group-hover:underline">
                      3. Get Mel&rsquo;s Free Wednesday Letter
                    </h4>
                    <p className="text-xs text-muted">Join 2 million people for a 3-minute weekly mental reset.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-dark group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <button
                onClick={handleClose}
                className="button-yellow w-full text-center text-sm font-bold"
              >
                Got It! Let&rsquo;s Explore
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
