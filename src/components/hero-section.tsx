'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/hero-image.jpg"
        alt="University building"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-white mb-4">
            Driving Innovation...
            <br />
            Celebrating Achievements
          </h1>
          <p className="text-xl text-white mb-8">
            Rewarding Schools and Students for exceptional performances
          </p>
          <div className="flex space-x-4 mb-8">
            <Button 
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8"
            >
              What we do
            </Button>
            <Button 
              className="bg-[#2D3748] text-white hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" />
              Play Video
            </Button>
          </div>
          <div className="flex space-x-10">
            <Link href="/signup">
              <Button 
                className="bg-[#2D3748] border-white text-white hover:bg-[#FF5252]"
              >
                Sign up
              </Button>
            </Link>
            <Link href="/signin">
              <Button 
                variant="outline" 
                className="bg-[#2D3748] text-white hover:bg-white/10"
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between">
          <p className="text-sm">1000 schools under our radar</p>
          <p className="text-sm">100 donations collected</p>
        </div>
      </div>
    </section>
  )
}

