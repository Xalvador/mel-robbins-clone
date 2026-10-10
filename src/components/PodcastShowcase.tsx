import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Radio, Trophy, ExternalLink } from 'lucide-react';
import { EpisodeItem } from '../data/siteData';

interface PodcastShowcaseProps {
  currentEpisode: EpisodeItem;
  onExploreClick: () => void;
}

export const PodcastShowcase: React.FC<PodcastShowcaseProps> = ({ currentEpisode, onExploreClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(145); // seconds elapsed (02:25)
  const totalDuration = 3480; // 58 minutes = 3480 seconds
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Simulated playback timer
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + Math.floor(playbackSpeed);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  return (
    <section id="podcast" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Accolades */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Golden Globe Nomination Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow/30 border border-yellow text-dark text-xs font-bold uppercase tracking-wider mb-5">
              <Trophy className="w-3.5 h-3.5 text-black" />
              Golden Globe Nominee &bull; Best Podcast
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-[1.1] mb-6">
              The #1 Podcast on the Globe
            </h2>

            <div className="text-muted text-base sm:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                <strong className="text-dark">The Mel Robbins Podcast</strong> is the most shared and followed podcast in the world. It’s a global phenomenon for a reason: Mel and her renowned guests share practical, science-backed tools and deeply personal insights that help people take control and change their lives in a moment when the world feels so overwhelming.
              </p>
              <p className="text-sm text-dark/70">
                New episodes drop every Monday and Thursday. Available everywhere you get your podcasts.
              </p>
            </div>

            {/* Platform Badges */}
            <div className="w-full mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                Listen Free On Your Favorite App:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cream hover:bg-yellow/30 border border-muted-border/60 transition-all text-xs font-bold text-dark group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954]" />
                  Spotify <ExternalLink className="w-3 h-3 text-muted group-hover:text-dark" />
                </a>

                <a
                  href="https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646101002"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cream hover:bg-yellow/30 border border-muted-border/60 transition-all text-xs font-bold text-dark group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#872EC4]" />
                  Apple Podcasts <ExternalLink className="w-3 h-3 text-muted group-hover:text-dark" />
                </a>

                <a
                  href="https://www.youtube.com/@melrobbins"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cream hover:bg-yellow/30 border border-muted-border/60 transition-all text-xs font-bold text-dark group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
                  YouTube <ExternalLink className="w-3 h-3 text-muted group-hover:text-dark" />
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="#topics"
                onClick={onExploreClick}
                className="button-yellow text-sm font-extrabold"
              >
                Find an Episode
              </a>
              <a
                href="https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv"
                target="_blank"
                rel="noreferrer"
                className="button-outline text-sm font-bold"
              >
                Follow on Spotify
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Player & Artwork */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A1A1A] text-white rounded-site-lg p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl pointer-events-none" />

              {/* Cover Art & Now Playing Header */}
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-6">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border-2 border-white/20">
                  <img
                    src="https://www.melrobbins.com/wp-content/uploads/2025/10/Mel-Podcast-Image.png"
                    alt="The Mel Robbins Podcast"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  {isPlaying && (
                    <div className="absolute top-2 right-2 bg-yellow text-dark text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 animate-pulse">
                      <Radio className="w-3 h-3" /> LIVE
                    </div>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-yellow">
                    Episode #{currentEpisode.number} &bull; {currentEpisode.category}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-1 leading-snug">
                    {currentEpisode.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {currentEpisode.description}
                  </p>
                </div>
              </div>

              {/* Waveform / Visualizer bars */}
              <div className="flex items-center justify-between gap-1 h-8 px-2 py-1 bg-white/5 rounded-lg mb-4">
                {[40, 65, 30, 85, 95, 45, 60, 30, 75, 90, 50, 70, 40, 85, 60, 35, 90, 75, 55, 40, 70, 95, 60, 45, 80, 50, 65, 40].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '20%',
                      transition: 'height 0.2s ease',
                    }}
                    className={`w-1 rounded-full ${
                      (i / 28) <= (currentTime / totalDuration) ? 'bg-yellow' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Progress Slider */}
              <div className="space-y-1.5 mb-6">
                <input
                  type="range"
                  min="0"
                  max={totalDuration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-yellow"
                />
                <div className="flex justify-between text-xs text-white/60 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(totalDuration)}</span>
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="flex items-center justify-between">
                
                {/* Playback speed toggle */}
                <button
                  onClick={() => {
                    const speeds = [1.0, 1.25, 1.5, 2.0];
                    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                    setPlaybackSpeed(speeds[nextIdx]);
                  }}
                  className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors"
                  title="Playback Speed"
                >
                  {playbackSpeed}x
                </button>

                {/* Center playback controls */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <button
                    onClick={() => setCurrentTime((t) => Math.max(0, t - 15))}
                    className="p-2 text-white/80 hover:text-white transition-colors"
                    title="Rewind 15s"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-full bg-yellow hover:bg-yellow-hover text-dark flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow/20"
                    aria-label={isPlaying ? "Pause episode" : "Play episode"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-dark" />
                    ) : (
                      <Play className="w-6 h-6 fill-dark ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={() => setCurrentTime((t) => Math.min(totalDuration, t + 15))}
                    className="p-2 text-white/80 hover:text-white transition-colors"
                    title="Forward 15s"
                  >
                    <RotateCw className="w-5 h-5" />
                  </button>
                </div>

                {/* Volume slider */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-white/80 hover:text-white"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      if (isMuted) setIsMuted(false);
                    }}
                    className="w-16 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-yellow hidden sm:inline-block"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
