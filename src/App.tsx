import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PodcastSection } from './components/PodcastSection';
import { TopEpisodesSection } from './components/TopEpisodesSection';
import { TopicsSection } from './components/TopicsSection';
import { BookSection } from './components/BookSection';
import { NewsletterSection } from './components/NewsletterSection';
import { AboutSection } from './components/AboutSection';
import { FooterSection } from './components/FooterSection';
import { SearchModal } from './components/SearchModal';
import { FloatingNewHereBadge } from './components/FloatingNewHereBadge';
import { EPISODES_DATA, EpisodeItem } from './data/siteData';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewHereOpen, setIsNewHereOpen] = useState(false);

  const handleSelectEpisode = (ep: EpisodeItem) => {
    window.open(ep.spotifyUrl || "https://www.melrobbins.com/podcast/", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans antialiased">
      
      {/* 1. Yellow Announcement Bar at the Very Top */}
      <AnnouncementBar />

      {/* 2. Floating Navbar over Hero */}
      <div className="relative">
        <Navbar onSearchOpen={() => setIsSearchOpen(true)} />

        {/* 3. Hero Section: Mel on left, Quote on right */}
        <HeroSection onNewHereClick={() => setIsNewHereOpen(true)} />
      </div>

      <main className="flex-1">
        {/* 4. Section: The #1 Podcast on the Globe */}
        <PodcastSection />

        {/* 5. Section: Top Episodes */}
        <TopEpisodesSection />

        {/* 6. Section: Search the entire library & 8 Topic Cards */}
        <TopicsSection />

        {/* 7. Section: The #1 Book in the World */}
        <BookSection />

        {/* 8. Section: 2 Million Readers. 1 Life-Changing Newsletter. */}
        <NewsletterSection />

        {/* 9. Section: Hey, it's your friend, Mel */}
        <AboutSection />
      </main>

      {/* 10. Footer Section with Links and Yellow 'New Here?' Button */}
      <FooterSection onNewHereClick={() => setIsNewHereOpen(true)} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectEpisode={handleSelectEpisode}
        onOrderClick={() => {
          window.open("https://www.melrobbins.com/book/the-let-them-theory/", "_blank");
        }}
      />

      {/* New Here Onboarding Modal */}
      <FloatingNewHereBadge
        isOpen={isNewHereOpen}
        onClose={() => setIsNewHereOpen(false)}
        onOpen={() => setIsNewHereOpen(true)}
        onListenClick={() => {
          setIsNewHereOpen(false);
          const el = document.getElementById('podcast');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOrderClick={() => {
          setIsNewHereOpen(false);
          window.open("https://www.melrobbins.com/book/the-let-them-theory/", "_blank");
        }}
      />

    </div>
  );
};

export default App;
