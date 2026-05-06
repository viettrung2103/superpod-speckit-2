'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { AnimatedEpisodeHighlight } from '@/components/animations/animated-episode-highlight'
import { getCurrentEpisode } from '@/lib/episodes'

export function HeroSection() {
  const currentEpisode = getCurrentEpisode()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-pink-900/20" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SuperPod
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover amazing podcast episodes, explore new stories, and join the conversation that matters.
          </p>
        </motion.div>

        {/* Animated Episode Highlight */}
        <AnimatedEpisodeHighlight episode={currentEpisode} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <p className="text-gray-400 mb-8">Explore more episodes below</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="w-8 h-8 text-white mx-auto rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}