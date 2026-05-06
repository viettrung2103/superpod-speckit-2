'use client'

import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, Share2, Download, Calendar, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Episode } from '@/lib/types'
import { formatDuration, formatDate } from '@/lib/episodes'
import { useState } from 'react'

interface EpisodeDetailProps {
  episode: Episode
}

export function EpisodeDetail({ episode }: EpisodeDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(episode.duration)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Episode Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
          <span>Episode {episode.episodeNumber}</span>
          <span>•</span>
          <Calendar className="w-4 h-4" />
          <span>{formatDate(episode.publishedAt)}</span>
          <span>•</span>
          <Clock className="w-4 h-4" />
          <span>{formatDuration(episode.duration)}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {episode.title}
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          {episode.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {episode.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 flex items-center gap-2"
            >
              <Tag className="w-4 h-4" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Audio Player */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
          <div className="text-center text-white">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              {isPlaying ? (
                <Pause className="w-12 h-12" />
              ) : (
                <Play className="w-12 h-12 ml-1" />
              )}
            </div>
            <p className="text-lg font-semibold">SuperPod Audio</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <SkipBack className="w-6 h-6" />
          </Button>

          <Button
            size="lg"
            onClick={handlePlayPause}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-16 h-16 rounded-full"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </Button>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <SkipForward className="w-6 h-6" />
          </Button>
        </div>

        {/* Additional Controls */}
        <div className="flex items-center justify-center gap-6">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Volume2 className="w-4 h-4 mr-2" />
            Volume
          </Button>

          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>

          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Episode Content */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Show Notes</h2>
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: episode.content.replace(/\n/g, '<br />') }} />
        </div>
      </div>
    </motion.div>
  )
}