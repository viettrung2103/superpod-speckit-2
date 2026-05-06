'use client'

import { motion } from 'framer-motion'
import { Play, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Episode } from '@/lib/types'
import { formatDuration, formatDate } from '@/lib/episodes'
import Link from 'next/link'

interface RelatedEpisodesProps {
  episodes: Episode[]
}

export function RelatedEpisodes({ episodes }: RelatedEpisodesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Related Episodes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {episodes.map((episode, index) => (
          <motion.div
            key={episode.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center relative">
                <Button
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                >
                  <Play className="w-4 h-4" />
                </Button>
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatDuration(episode.duration)}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>Ep {episode.episodeNumber}</span>
                  <span>•</span>
                  <span>{formatDate(episode.publishedAt)}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
                  {episode.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {episode.description}
                </p>

                <Button variant="outline" size="sm" asChild className="w-full border-white/20 text-white hover:bg-white/10">
                  <Link href={`/episodes/${episode.id}`}>
                    Listen
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}