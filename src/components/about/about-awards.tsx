'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Award } from 'lucide-react'

interface StatCounterProps {
  end: number
  suffix?: string
  duration?: number
}

function StatCounter({ end, suffix = '', duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(end * percentage))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="text-2xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

function AwardIcon() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-5 h-5 flex items-center justify-center">
        <div className="absolute inset-0">
          <svg viewBox="0 0 80 80" className="w-full h-full text-yellow-400">
            <path
              d="M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0zm0 72c-17.6 0-32-14.4-32-32S22.4 8 40 8s32 14.4 32 32-14.4 32-32 32z"
              fill="currentColor"
              fillRule="evenodd"
            />
            <path
              d="M40 16L45.3 32.2H62.6L48.6 42.6L53.9 58.8L40 48.4L26.1 58.8L31.4 42.6L17.4 32.2H34.7L40 16Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <Award className="w-8 h-8 text-yellow-600 z-10" />
      </div>
      <div className="text-center mt-4">
        <div className="font-bold">2000</div>
        <div className="text-sm text-gray-600">Best NGO Award</div>
        <div className="text-xs text-gray-500">SOCIAL SUMMIT</div>
      </div>
    </div>
  )
}

export function AboutAwards() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Awards & Recognitions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[...Array(4)].map((_, i) => (
            <AwardIcon key={i} />
          ))}
        </div>

        <div className="bg-[#B8C6D0] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-medium uppercase">Our Journey</div>
                <h3 className="text-2xl font-bold">How we raised 34M</h3>
              </div>
              
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <StatCounter end={34} suffix="M+" />
                  <div className="text-sm text-gray-600">Donation Received</div>
                </div>
                <div>
                  <StatCounter end={400} suffix="+" />
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
                <div>
                  <StatCounter end={20} suffix="+" />
                  <div className="text-sm text-gray-600">Case Stories</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/graduates.jpg"
                alt="Graduates celebrating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

