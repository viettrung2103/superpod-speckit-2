import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EpisodeDetail } from '@/components/episodes/episode-detail'
import { RelatedEpisodes } from '@/components/episodes/related-episodes'
import { getEpisodeById, getAllEpisodes } from '@/lib/episodes'

interface EpisodePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const episode = getEpisodeById(params.slug)

  if (!episode) {
    return {
      title: 'Episode Not Found - SuperPod',
    }
  }

  return {
    title: `${episode.title} - SuperPod`,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: episode.imageUrl ? [episode.imageUrl] : [],
    },
  }
}

export async function generateStaticParams() {
  const episodes = getAllEpisodes()

  return episodes.map((episode) => ({
    slug: episode.id,
  }))
}

export default function EpisodePage({ params }: EpisodePageProps) {
  const episode = getEpisodeById(params.slug)

  if (!episode) {
    notFound()
  }

  const allEpisodes = getAllEpisodes()
  const relatedEpisodes = allEpisodes
    .filter(ep => ep.id !== episode.id)
    .filter(ep => ep.tags.some(tag => episode.tags.includes(tag)))
    .slice(0, 3)

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <EpisodeDetail episode={episode} />
        {relatedEpisodes.length > 0 && (
          <RelatedEpisodes episodes={relatedEpisodes} />
        )}
      </div>
    </main>
  )
}