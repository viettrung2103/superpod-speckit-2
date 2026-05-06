export interface Episode {
  id: string;
  title: string;
  description: string;
  content: string;
  audioUrl: string;
  duration: number;
  publishedAt: string;
  episodeNumber?: number;
  season?: number;
  tags: string[];
  imageUrl?: string;
  transcriptUrl?: string;
  chapters?: Chapter[];
}

export interface Chapter {
  startTime: number;
  title: string;
  url?: string;
}

export interface Podcast {
  title: string;
  description: string;
  author: string;
  email?: string;
  imageUrl: string;
  websiteUrl?: string;
  rssUrl?: string;
  language: string;
  categories: string[];
  explicit: boolean;
}

export interface AudioPlayerState {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
}

export interface ThemeState {
  mode: 'light' | 'dark' | 'system';
  gradient: {
    primary: string;
    secondary: string;
    accent: string;
  };
}