# Episode Data Contract

**Version**: 1.0.0
**Date**: 2026-05-06

## Overview

This contract defines the structure and validation rules for episode data used throughout the podcast website.

## Schema

```typescript
interface Episode {
  // Unique identifier, URL-safe slug
  id: string;

  // Episode title (1-100 characters)
  title: string;

  // Short description for listings (10-300 characters)
  description: string;

  // Full show notes in markdown format
  content: string;

  // Audio file URL (HTTP/HTTPS)
  audioUrl: string;

  // Duration in seconds (positive number)
  duration: number;

  // Publication date (ISO 8601 format)
  publishedAt: string;

  // Optional episode number
  episodeNumber?: number;

  // Optional season number
  season?: number;

  // Topic tags (1-10 tags, 2-20 characters each)
  tags: string[];

  // Optional episode artwork URL
  imageUrl?: string;

  // Optional transcript URL
  transcriptUrl?: string;

  // Optional podcast chapters
  chapters?: Chapter[];
}

interface Chapter {
  // Start time in seconds
  startTime: number;

  // Chapter title
  title: string;

  // Optional chapter URL
  url?: string;
}
```

## Validation Rules

### Required Fields

- `id`, `title`, `description`, `content`, `audioUrl`, `duration`, `publishedAt`, `tags`

### Field Constraints

- `id`: Must be URL-safe, lowercase, no spaces (use hyphens)
- `title`: 1-100 characters
- `description`: 10-300 characters for optimal display
- `content`: Markdown format, no character limit
- `audioUrl`: Valid HTTP/HTTPS URL
- `duration`: Positive integer (seconds)
- `publishedAt`: Valid ISO 8601 date string
- `episodeNumber`: Positive integer if provided
- `season`: Positive integer if provided
- `tags`: 1-10 strings, each 2-20 characters
- `imageUrl`: Valid HTTP/HTTPS URL if provided
- `transcriptUrl`: Valid HTTP/HTTPS URL if provided

### Business Rules

- Episodes must have unique `id` values
- `publishedAt` should be in the past (not future-dated)
- Audio files should be accessible and CORS-enabled
- Images should be optimized for web (WebP format preferred)

## Usage Examples

### Valid Episode

```json
{
  "id": "welcome-to-the-podcast",
  "title": "Welcome to Our Podcast",
  "description": "Join us for our inaugural episode where we introduce the show and what to expect.",
  "content": "# Welcome!\n\nThis is our first episode...",
  "audioUrl": "https://cdn.example.com/episodes/welcome.mp3",
  "duration": 1800,
  "publishedAt": "2026-05-06T10:00:00Z",
  "episodeNumber": 1,
  "tags": ["introduction", "welcome"],
  "imageUrl": "https://cdn.example.com/images/episode1.jpg"
}
```

### Invalid Episode (Missing Required Fields)

```json
{
  "title": "Missing ID and other fields"
  // Missing: id, description, audioUrl, duration, publishedAt, tags
}
```

## Implementation Notes

- Data stored in `data/episodes.json` as array of Episode objects
- Validation performed at build time during static generation
- Invalid episodes will cause build failures with descriptive errors
- Consider implementing runtime validation for dynamic features
