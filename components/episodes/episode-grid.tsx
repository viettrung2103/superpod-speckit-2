"use client";

import { motion } from "framer-motion";
import { Play, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Episode } from "@/lib/types";
import { formatDuration, formatDate } from "@/lib/episodes";
import Link from "next/link";

interface EpisodeGridProps {
  episodes: Episode[];
}

export function EpisodeGrid({ episodes }: EpisodeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {episodes.map((episode, index) => (
        <motion.div
          key={episode.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center relative">
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                <Play className="w-6 h-6" />
              </Button>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDuration(episode.duration)}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <span>Episode {episode.episodeNumber}</span>
                <span>•</span>
                <Calendar className="w-4 h-4" />
                <span>{formatDate(episode.publishedAt)}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {episode.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {episode.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {episode.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <Link href={`/episodes/${episode.id}`}>Listen Now</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
