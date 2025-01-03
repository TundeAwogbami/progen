'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-10">
      <div className="container px-4 mx-auto">
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-gray-900 ml-1" />
              </div>
            </button>
          )}
          {isPlaying && (
            <video
              className="w-full h-full"
              controls
              autoPlay
              src="/about-video.mp4"
            />
          )}
        </div>
      </div>
    </section>
  )
}

