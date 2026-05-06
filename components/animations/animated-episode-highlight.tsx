"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Episode } from "@/lib/types";
import { formatDuration } from "@/lib/episodes";
import Link from "next/link";

interface AnimatedEpisodeHighlightProps {
  episode: Episode;
}

export function AnimatedEpisodeHighlight({
  episode,
}: AnimatedEpisodeHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing border animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{
          background: [
            "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
            "linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6)",
            "linear-gradient(225deg, #ec4899, #3b82f6, #8b5cf6)",
            "linear-gradient(315deg, #3b82f6, #8b5cf6, #ec4899)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
        }}
      />

      {/* Main card */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden">
        {/* Sparkle effects */}
        <motion.div
          className="absolute top-4 right-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
        </motion.div>

        {/* Content */}
        <div className="text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full text-sm font-medium text-white border border-white/20">
              Latest Episode
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {episode.title}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto"
          >
            {episode.description}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8"
          >
            <span>Episode {episode.episodeNumber}</span>
            <span>•</span>
            <span>{formatDuration(episode.duration)}</span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/episodes/${episode.id}`}>
                <Play className="w-5 h-5 mr-2" />
                Listen Now
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full"
            >
              <Link href="/episodes">View All Episodes</Link>
            </Button>
          </motion.div>
        </div>

        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
