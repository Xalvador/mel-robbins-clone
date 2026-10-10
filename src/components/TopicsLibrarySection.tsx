import React, { useState, useMemo } from 'react';
import { Search, X, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { TOPICS_DATA, EPISODES_DATA, EpisodeItem } from '../data/siteData';

interface TopicsLibrarySectionProps {
  onSelectEpisode: (ep: EpisodeItem) => void;
}

export const TopicsLibrarySection: React.FC<TopicsLibrarySectionProps> = ({ onSelectEpisode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  // Filter episodes based on search query & selected topic
  const filteredEpisodes = useMemo(() => {
    return EPISODES_DATA.filter((ep) => {
      const matchesTopic =
        selectedTopic === 'all' ||
        ep.category.toLowerCase().includes(selectedTopic.toLowerCase()) ||
        (selectedTopic === 'popular' && true);

      const matchesSearch =
        searchQuery.trim() === '' ||
        ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ep.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `episode ${ep.number}`.includes(searchQuery.toLowerCase());

      return matchesTopic && matchesSearch;
    });
  }, [searchQuery, selectedTopic]);

  return (
    <section id="topics" className="py-16 md:py-24 bg-white">
      <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-muted-border/60 text-xs font-bold uppercase tracking-wider text-muted mb-3">
            <Filter className="w-3.5 h-3.5 text-dark" />
            Curated Archive &bull; 400+ Episodes
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight">
            Search the entire library.<br />Find the episode you want.
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            Browse episodes by topic or search any challenge you are facing right now.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center shadow-sm">
            <Search className="w-5 h-5 text-muted absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, symptom, keyword, or guest (e.g. anxiety, sleep, dopamine)..."
              className="w-full pl-12 pr-10 py-4 bg-cream rounded-2xl border border-muted-border/70 text-dark placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent text-sm sm:text-base font-medium transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 p-1 rounded-full text-muted hover:text-dark"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setSelectedTopic('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedTopic === 'all'
                ? 'bg-dark text-white shadow-md'
                : 'bg-cream text-dark hover:bg-muted-border/40'
            }`}
          >
            All Topics ({TOPICS_DATA.reduce((acc, t) => acc + t.count, 0)}+)
          </button>

          {TOPICS_DATA.map((topic) => {
            const isSelected = selectedTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-yellow text-dark shadow-md ring-2 ring-black/10'
                    : 'bg-cream text-dark hover:bg-muted-border/40'
                }`}
              >
                <span>{topic.icon}</span>
                <span>{topic.name}</span>
                <span className="text-[11px] opacity-70">({topic.count})</span>
              </button>
            );
          })}
        </div>

        {/* Topic Highlights Grid (when 'all' is selected and no search) */}
        {selectedTopic === 'all' && searchQuery.trim() === '' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {TOPICS_DATA.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className="site-card p-6 cursor-pointer group hover:bg-white hover:border-dark/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{topic.icon}</span>
                  <span className="text-xs font-bold text-muted bg-white px-2.5 py-1 rounded-full border border-muted-border/50 group-hover:border-dark/20">
                    {topic.count} episodes
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-dark group-hover:text-black flex items-center justify-between">
                  {topic.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Filtered Episode Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-xl text-dark flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-hover" />
              {searchQuery ? `Results for "${searchQuery}"` : selectedTopic === 'all' ? 'Featured Episodes' : `${TOPICS_DATA.find(t => t.id === selectedTopic)?.name} Episodes`}
            </h3>
            <span className="text-xs font-bold text-muted">
              {filteredEpisodes.length} episode{filteredEpisodes.length === 1 ? '' : 's'} found
            </span>
          </div>

          {filteredEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  onClick={() => onSelectEpisode(ep)}
                  className="bg-cream/60 hover:bg-cream rounded-2xl p-5 border border-muted-border/50 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-muted mb-2">
                      <span className="bg-white px-2 py-0.5 rounded text-[11px] font-extrabold uppercase text-dark border border-muted-border/40">
                        {ep.category}
                      </span>
                      <span>Episode #{ep.number} &bull; {ep.duration}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-dark group-hover:text-black group-hover:underline line-clamp-2 leading-snug">
                      {ep.title}
                    </h4>

                    <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-muted-border/40 flex items-center justify-between">
                    <span className="text-xs font-bold text-dark group-hover:text-yellow-hover flex items-center gap-1">
                      Play Now →
                    </span>
                    <span className="text-[11px] text-muted font-medium">{ep.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-cream/40 rounded-2xl border border-dashed border-muted-border">
              <p className="font-bold text-dark text-lg">No episodes matched your search.</p>
              <p className="text-muted text-sm mt-1">Try searching for keywords like &ldquo;confidence&rdquo;, &ldquo;habits&rdquo;, or &ldquo;reset&rdquo;.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTopic('all');
                }}
                className="button-yellow text-xs font-bold mt-4"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
