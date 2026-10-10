import React, { useState, useEffect } from 'react';
import { Search, X, Headphones, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EPISODES_DATA, TOPICS_DATA, BOOKS_DATA, EpisodeItem } from '../data/siteData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEpisode: (ep: EpisodeItem) => void;
  onOrderClick: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectEpisode,
  onOrderClick,
}) => {
  const [query, setQuery] = useState('');

  // Handle keyboard shortcut '/' to open, 'Esc' to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const matchingEpisodes = EPISODES_DATA.filter((ep) =>
    ep.title.toLowerCase().includes(query.toLowerCase()) ||
    ep.description.toLowerCase().includes(query.toLowerCase()) ||
    ep.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchingTopics = TOPICS_DATA.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchingBooks = BOOKS_DATA.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.18 }}
          className="relative w-full max-w-2xl bg-white rounded-site-lg shadow-2xl border border-muted-border overflow-hidden z-50 flex flex-col max-h-[80vh]"
        >
          {/* Search Header Input */}
          <div className="p-4 sm:p-5 border-b border-muted-border flex items-center gap-3">
            <Search className="w-5 h-5 text-muted flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search episodes, books, topics, or keywords..."
              className="w-full text-base sm:text-lg font-medium text-dark focus:outline-none placeholder:text-muted/60"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-muted hover:text-dark rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs font-bold text-muted hover:text-dark px-2 py-1 bg-cream rounded"
            >
              ESC
            </button>
          </div>

          {/* Results Area */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
            {/* Quick Popular Keywords */}
            {!query && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Anxiety', 'Overthinking', 'Morning Routine', 'The 5 Second Rule', 'Boundaries', 'Confidence'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-full bg-cream hover:bg-yellow/30 text-xs font-semibold text-dark transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Episodes */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 flex items-center justify-between">
                <span>Episodes ({matchingEpisodes.length})</span>
                <Headphones className="w-3.5 h-3.5 text-yellow-hover" />
              </p>
              <div className="space-y-2">
                {matchingEpisodes.map((ep) => (
                  <div
                    key={ep.id}
                    onClick={() => {
                      onSelectEpisode(ep);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-cream/50 hover:bg-yellow/20 border border-muted-border/40 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-muted">
                        Ep #{ep.number} &bull; {ep.category}
                      </span>
                      <h4 className="text-sm font-bold text-dark group-hover:underline">
                        {ep.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-dark transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Matching Books */}
            {matchingBooks.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 flex items-center justify-between">
                  <span>Books ({matchingBooks.length})</span>
                  <BookOpen className="w-3.5 h-3.5 text-yellow-hover" />
                </p>
                <div className="space-y-2">
                  {matchingBooks.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => {
                        onOrderClick();
                        onClose();
                      }}
                      className="p-3 rounded-xl bg-cream/50 hover:bg-yellow/20 border border-muted-border/40 transition-colors cursor-pointer flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-dark group-hover:underline">
                          {b.title}
                        </h4>
                        <p className="text-xs text-muted">{b.subtitle}</p>
                      </div>
                      <span className="text-xs font-bold text-yellow-hover">Order →</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Topics */}
            {matchingTopics.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3 flex items-center justify-between">
                  <span>Topics ({matchingTopics.length})</span>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-hover" />
                </p>
                <div className="flex flex-wrap gap-2">
                  {matchingTopics.map((t) => (
                    <a
                      key={t.id}
                      href="#topics"
                      onClick={onClose}
                      className="px-3 py-1.5 rounded-xl bg-cream hover:bg-yellow/30 text-xs font-bold text-dark border border-muted-border/40 flex items-center gap-1.5"
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {matchingEpisodes.length === 0 && matchingBooks.length === 0 && matchingTopics.length === 0 && query && (
              <div className="text-center py-8">
                <p className="font-bold text-dark">No matches found for &ldquo;{query}&rdquo;</p>
                <p className="text-xs text-muted mt-1">Try searching for &ldquo;habits&rdquo;, &ldquo;confidence&rdquo;, or &ldquo;anxiety&rdquo;.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
