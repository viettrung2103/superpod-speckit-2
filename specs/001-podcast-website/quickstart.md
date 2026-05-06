# Quickstart: Podcast Website

**Date**: 2026-05-06
**Feature**: 001-podcast-website

## Prerequisites

- Node.js 18+
- npm or yarn
- Git

## Installation

```bash
# Clone repository
git clone <repository-url>
cd podcast-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

## Development Setup

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
podcast-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── episodes/          # Episodes section
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── episodes/         # Episode components
├── data/                 # Static data files
│   └── episodes.json     # Episode data
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Adding Episodes

1. **Create episode data** in `data/episodes.json`:

```json
{
  "id": "episode-1",
  "title": "Welcome to the Podcast",
  "description": "Our first episode introduction",
  "content": "Full show notes in markdown...",
  "audioUrl": "https://example.com/episode1.mp3",
  "duration": 1800,
  "publishedAt": "2026-05-06T10:00:00Z",
  "tags": ["introduction", "welcome"],
  "imageUrl": "/images/episode1.jpg"
}
```

2. **Add audio file** to `public/audio/` or use external URL

3. **Add episode image** to `public/images/`

4. **Restart development server** to see changes

## Customization

### Theme Configuration

Edit `app/layout.tsx` to customize colors:

```typescript
// Dark theme with custom gradients
const theme = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  accent: "#0f3460",
  text: "#e94560",
};
```

### Audio Player

The audio player supports:

- Play/pause controls
- Volume adjustment
- Playback speed (0.5x - 2x)
- Progress seeking
- Keyboard shortcuts

### Animations

Episode highlights use Framer Motion:

- Scale and glow effects for current episode
- Smooth transitions between states
- Reduced motion support

## Deployment

### Static Export

```bash
# Build static files
npm run build
npm run export

# Deploy dist/ folder to CDN
```

### Platforms

- **Vercel**: Connect GitHub repo, automatic deployments
- **Netlify**: Drag & drop dist/ folder or Git integration
- **Cloudflare Pages**: Git integration with build commands

## Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Check accessibility
npm run audit:a11y
```

## Performance

- Lighthouse score target: >90
- Core Web Vitals monitoring
- Image optimization with Next.js Image component
- CSS optimization with Tailwind purging

## Troubleshooting

### Common Issues

1. **Audio not loading**: Check CORS headers on audio host
2. **Images not displaying**: Verify file paths in `public/` directory
3. **Build failing**: Ensure all required environment variables are set
4. **Animations not working**: Check browser support for CSS transforms

### Debug Mode

```bash
# Enable debug logging
DEBUG=podcast:* npm run dev
```

## Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test
3. Run tests: `npm run test`
4. Submit pull request

## Support

- Documentation: `docs/` directory
- Issues: GitHub Issues
- Discussions: GitHub Discussions
