import { Episode, Podcast } from './types'
import episodesData from '../data/episodes.json'
import podcastData from '../data/podcast.json'

export function getAllEpisodes(): Episode[] {
  return episodesData as Episode[]
}

export function getEpisodeById(id: string): Episode | undefined {
  return getAllEpisodes().find(episode => episode.id === id)
}

export function getRecentEpisodes(limit: number = 5): Episode[] {
  return getAllEpisodes()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getCurrentEpisode(): Episode {
  return getRecentEpisodes(1)[0]
}

export function getPodcast(): Podcast {
  return podcastData as Podcast
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}