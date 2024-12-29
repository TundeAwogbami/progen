'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Driving Innovation...",
    subtitle: "Celebrating Achievements",
    description: "ProGen: Powering Schools and Students for exceptional education",
    image: "/hero-1.jpg"
  },
  // Add more slides as needed
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-3xl mb-6">{slide.subtitle}</p>
            <p className="text-xl mb-8">{slide.description}</p>
            <Button size="lg" className="w-fit">
              Learn More
            </Button>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>
    </section>
  )
}

