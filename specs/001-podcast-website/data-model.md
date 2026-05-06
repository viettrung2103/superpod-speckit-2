# Data Model: Podcast Website

**Date**: 2026-05-06
**Feature**: 001-podcast-website

## Episode Entity

```typescript
interface Episode {
  id: string; // Unique identifier (slug)
  title: string; // Episode title
  description: string; // Short description for listings
  content: string; // Full show notes/content (markdown)
  audioUrl: string; // Audio file URL
  duration: number; // Duration in seconds
  publishedAt: string; // ISO date string
  episodeNumber?: number; // Episode number (optional)
  season?: number; // Season number (optional)
  tags: string[]; // Topic tags
  imageUrl?: string; // Episode-specific artwork
  transcriptUrl?: string; // Transcript file URL
  chapters?: Chapter[]; // Podcast chapters
}

interface Chapter {
  startTime: number; // Start time in seconds
  title: string; // Chapter title
  url?: string; // Optional chapter URL
}
```

## Podcast Metadata

```typescript
interface Podcast {
  title: string; // Podcast title
  description: string; // Podcast description
  author: string; // Podcast author/host
  email?: string; // Contact email
  imageUrl: string; // Podcast artwork/cover
  websiteUrl?: string; // Official website
  rssUrl?: string; // RSS feed URL
  language: string; // Language code (e.g., "en")
  categories: string[]; // Podcast categories
  explicit: boolean; // Contains explicit content
}
```

## UI State Models

```typescript
interface AudioPlayerState {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
}

interface ThemeState {
  mode: "light" | "dark" | "system";
  gradient: {
    primary: string;
    secondary: string;
    accent: string;
  };
}
```

## Data Flow

### Static Data Loading

1. Episodes loaded from `data/episodes.json` at build time
2. Podcast metadata loaded from `data/podcast.json`
3. Static generation creates all pages with pre-rendered content

### Runtime Data Flow

1. Landing page: Load recent episodes (last 5-10)
2. Episodes page: Load all episodes with pagination/filtering
3. Episode page: Load single episode by slug
4. Audio player: Client-side state management for playback

## Data Validation

### Episode Validation Rules

- `id`: Required, URL-safe slug format
- `title`: Required, 1-100 characters
- `description`: Required, 10-300 characters
- `audioUrl`: Required, valid HTTP/HTTPS URL
- `duration`: Required, positive number
- `publishedAt`: Required, valid ISO date
- `tags`: Array of 1-10 strings, 2-20 characters each

### File Structure

```
data/
├── episodes.json      # Array of Episode objects
├── podcast.json       # Podcast metadata
└── assets/
    ├── images/        # Episode artwork
    └── audio/         # Audio files (if hosted locally)
```

## Data Relationships

### Episode Dependencies

- Episodes are independent entities
- No foreign key relationships required
- Episodes can reference each other via tags or manual linking

### Content Relationships

- Podcast metadata is global configuration
- Episodes belong to the podcast (implicit relationship)
- Chapters belong to episodes (nested structure)

## Performance Considerations

### Static Generation

- All episode data pre-loaded at build time
- No database queries or API calls at runtime
- Large episode catalogs may increase build time

### Client-Side Optimization

- Lazy load episode images
- Paginate episode listings
- Cache audio player state in localStorage

### Data Size Limits

- Episode descriptions: <500 characters for listings
- Full content: <10,000 characters for show notes
- Audio files: Optimize for web delivery (<100MB per episode)
- Images: WebP format, <500KB per image
