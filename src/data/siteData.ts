export interface QuoteItem {
  id: string;
  quote: string;
  source: string;
  logoUrl?: string;
}

export interface EpisodeItem {
  id: string;
  number: number;
  title: string;
  duration: string;
  category: string;
  description: string;
  coverImage: string;
  audioUrl?: string;
  date: string;
  spotifyUrl: string;
  appleUrl: string;
}

export interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  salesHighlight: string;
  description: string;
  coverImage: string;
  buyUrl: string;
  features: string[];
  retailers: { name: string; url: string; badge?: string }[];
}

export interface TopicItem {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

export const HERO_QUOTES: QuoteItem[] = [
  {
    id: "boston-globe",
    quote: "Robbins is supremely talented at breaking down the steps you need to take to make change and at giving people hope that change is possible.",
    source: "The Boston Globe",
    logoUrl: "/images/Boston-Globe-Logo.png",
  },
  {
    id: "time-1",
    quote: "Mel gives millions of people a reason to believe in themselves.",
    source: "TIME Magazine",
    logoUrl: "/images/Time_Magazine_logo.png",
  },
  {
    id: "cnn-1",
    quote: "She's the #1 female podcaster in the world.",
    source: "CNN",
    logoUrl: "/images/CNN-Logo.png",
  },
  {
    id: "time-woty",
    quote: "Mel is a leader working toward a better, more equitable world.",
    source: "TIME Women of the Year",
    logoUrl: "https://www.melrobbins.com/wp-content/uploads/2026/04/time-women-of-the-year.png",
  },
  {
    id: "parade",
    quote: "Mel's simple, research-backed advice has changed millions of people's lives.",
    source: "Parade",
    logoUrl: "https://www.melrobbins.com/wp-content/uploads/2025/09/ParadeWhite.webp",
  },
  {
    id: "guardian",
    quote: "Even if you don't know her name, you have probably been touched by her rules for empowered life.",
    source: "The Guardian",
    logoUrl: "https://www.melrobbins.com/wp-content/uploads/2026/04/The-Guardian-logo-scaled.png",
  },
  {
    id: "abc-news",
    quote: "Her practical wisdom and research-backed tools have empowered tens of millions.",
    source: "ABC News",
    logoUrl: "https://www.melrobbins.com/wp-content/uploads/2026/04/abc-logo.png",
  },
];

export const MEDIA_LOGOS = [
  { name: "Forbes", text: "Forbes" },
  { name: "The New York Times", text: "The New York Times" },
  { name: "CNN", text: "CNN", logoUrl: "https://www.melrobbins.com/wp-content/uploads/2026/04/CNN-Logo.png" },
  { name: "Oprah Daily", text: "Oprah Daily" },
  { name: "TIME", text: "TIME", logoUrl: "https://www.melrobbins.com/wp-content/uploads/2025/03/Time_Magazine_logo.svg-1.png" },
  { name: "Boston Globe", text: "The Boston Globe", logoUrl: "https://www.melrobbins.com/wp-content/uploads/2026/04/Boston-Globe-Logo.png" },
  { name: "ABC News", text: "ABC", logoUrl: "https://www.melrobbins.com/wp-content/uploads/2026/04/abc-logo.png" },
];

export const EPISODES_DATA: EpisodeItem[] = [
  {
    id: "ep-420",
    number: 420,
    title: "If You Only Listen to One Podcast This Week, Make It This One",
    duration: "58 min",
    category: "Motivation",
    description: "The science of momentum and why the next 48 hours determine the rest of your season. Mel unpacks why waiting for motivation is a trap and gives you the exact blueprint to kickstart action.",
    coverImage: "https://www.melrobbins.com/wp-content/uploads/2026/08/Ep420_Hero.jpg",
    date: "Aug 2026",
    spotifyUrl: "https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646101002",
  },
  {
    id: "ep-435",
    number: 435,
    title: "How to Stop Letting People Disrespect You: The Boundary Masterclass",
    duration: "64 min",
    category: "Relationships",
    description: "Learn how to speak up without feeling guilty, stop over-explaining yourself, and establish boundaries that protect your peace. Featuring world-renowned boundary experts and tactical scripts.",
    coverImage: "https://www.melrobbins.com/wp-content/uploads/2026/09/Ep435_Hero-2.jpg",
    date: "Sep 2026",
    spotifyUrl: "https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646101002",
  },
  {
    id: "ep-361",
    number: 361,
    title: "The 6 Habits That Will Change Your Life: Backed by Neurobiology",
    duration: "71 min",
    category: "Habits",
    description: "Forget willpower. Breakthrough research reveals the subtle morning tweaks and evening routines that rewire your dopamine system for calm, focus, and unstoppable self-trust.",
    coverImage: "https://www.melrobbins.com/wp-content/uploads/2026/01/Ep361_Hero.jpg",
    date: "Jan 2026",
    spotifyUrl: "https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646101002",
  },
  {
    id: "ep-274",
    number: 274,
    title: "How to Reset Your Nervous System: Somatic Tools for Anxiety",
    duration: "52 min",
    category: "Anxiety",
    description: "When your mind races and your chest tightens, thinking positive thoughts doesn't work. Mel shares 3 physiological triggers that immediately tell your vagus nerve you are safe.",
    coverImage: "https://www.melrobbins.com/wp-content/uploads/2025/04/Ep.-274.jpg",
    date: "Apr 2025",
    spotifyUrl: "https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646101002",
  },
  {
    id: "ep-436",
    number: 436,
    title: "The 3 Best Ways to Build Unshakable Self-Worth and Confidence",
    duration: "60 min",
    category: "Confidence",
    description: "Confidence isn't personality—it's a learned habit. Here's how to stop people-pleasing, quiet your harsh inner critic, and celebrate yourself without feeling like an imposter.",
    coverImage: "https://www.melrobbins.com/wp-content/uploads/2026/09/Ep436_Clip_4.jpg",
    date: "Sep 2026",
    spotifyUrl: "https://open.spotify.com/show/2OEpWsgJk3m6j0bU3L1fQv",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646101002",
  },
];

export const TOPICS_DATA: TopicItem[] = [
  { id: "anxiety", name: "Anxiety", icon: "🧠", count: 42, description: "Calm your nervous system, quiet racing thoughts, and find instant relief." },
  { id: "confidence", name: "Confidence", icon: "⚡", count: 58, description: "Silence self-doubt, step into your power, and stop waiting for permission." },
  { id: "habits", name: "Habits", icon: "🔄", count: 64, description: "Micro-habits that actually stick and transform your daily routine." },
  { id: "happiness", name: "Happiness", icon: "☀️", count: 35, description: "Evidence-based strategies to bring real joy and gratitude into your days." },
  { id: "health", name: "Health & Wellness", icon: "🌱", count: 49, description: "Sleep, energy, hormones, and longevity tips with world-leading doctors." },
  { id: "motivation", name: "Motivation", icon: "🔥", count: 77, description: "Beat procrastination, spark momentum, and get things done today." },
  { id: "relationships", name: "Relationships", icon: "❤️", count: 51, description: "Set boundaries, communicate clearly, and heal deep connections." },
  { id: "popular", name: "Most Popular", icon: "⭐", count: 120, description: "The most listened to and shared episodes in the entire podcast catalog." },
];

export const BOOKS_DATA: BookItem[] = [
  {
    id: "let-them",
    title: "The Let Them Theory",
    subtitle: "A life-changing tool millions of people can't stop talking about.",
    salesHighlight: "#1 Bestselling Book Worldwide — Over 10 Million Copies Sold",
    description: "The Let Them Theory is a publishing phenomenon. It gives you the ultimate mindset shift: stop wasting your energy trying to control other people, their opinions, and external outcomes. Let them be who they are, and reclaim your time, peace of mind, and joy.",
    coverImage: "https://www.melrobbins.com/wp-content/uploads/2025/11/let-them-book-holiday-2025.png",
    buyUrl: "#order",
    features: [
      "The viral 2-word rule that instantly ends overthinking",
      "How to detach with love and stop emotional enabling",
      "Actionable scripts to handle family, coworkers, and friends",
      "Bonus Let Them Workbook and discussion guide included",
    ],
    retailers: [
      { name: "Amazon", url: "https://amazon.com", badge: "Best Seller" },
      { name: "Barnes & Noble", url: "https://barnesandnoble.com", badge: "Exclusive Edition" },
      { name: "Audible", url: "https://audible.com", badge: "Narrated by Mel" },
      { name: "Target", url: "https://target.com" },
      { name: "Books-A-Million", url: "https://booksamillion.com" },
    ],
  },
  {
    id: "high-5",
    title: "The High 5 Habit",
    subtitle: "Take control of your life with one simple habit.",
    salesHighlight: "International Bestseller Translated in 36+ Languages",
    description: "You spend your whole life cheering for everyone else. When was the last time you cheered for yourself? Discover the neurobiology of the High 5 Habit and how high-fiving your reflection rewires your brain to believe in yourself.",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    buyUrl: "#order",
    features: [
      "The High 5 in the mirror routine",
      "Rewiring the Reticular Activating System (RAS)",
      "Overcoming the childhood trauma of criticism",
    ],
    retailers: [
      { name: "Amazon", url: "https://amazon.com" },
      { name: "Barnes & Noble", url: "https://barnesandnoble.com" },
      { name: "Audible", url: "https://audible.com" },
    ],
  },
  {
    id: "5-second-rule",
    title: "The 5 Second Rule",
    subtitle: "The fastest way to change your life.",
    salesHighlight: "#1 Most Listened-To Audiobook on Audible Worldwide",
    description: "Count backwards: 5 - 4 - 3 - 2 - 1 - GO. That's the metacognitive tool that has helped over 25 million people destroy procrastination, speak up in meetings, defeat fear, and take control of their destiny.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    buyUrl: "#order",
    features: [
      "The science of the 5-second decision window",
      "How to push through hesitation before your brain stops you",
      "Real stories from everyday people achieving extraordinary breakthroughs",
    ],
    retailers: [
      { name: "Amazon", url: "https://amazon.com" },
      { name: "Barnes & Noble", url: "https://barnesandnoble.com" },
      { name: "Audible", url: "https://audible.com" },
    ],
  },
];

export const MEL_STATS = [
  { value: "40M+", label: "Followers Worldwide", detail: "Across Instagram, YouTube, TikTok, and LinkedIn" },
  { value: "#1", label: "Podcast on the Globe", detail: "Nominated for the first-ever Golden Globe for Best Podcast" },
  { value: "10M+", label: "Books Sold Worldwide", detail: "#1 New York Times & International Bestsellers" },
  { value: "2M+", label: "Newsletter Subscribers", detail: "Weekly actionable advice in your inbox every Wednesday" },
];
