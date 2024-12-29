import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">ProGen: Rewarding Bright Schools and Students</h2>
          <p className="mb-6 text-gray-600">
            At ProGen, we believe in recognizing and nurturing talent. Our mission is to identify, support, and celebrate exceptional schools and students, fostering an environment of innovation and academic excellence.
          </p>
          <p className="mb-6 text-gray-600">
            Through our comprehensive programs, we provide resources, mentorship, and recognition to help bright minds shine and reach their full potential. Join us in shaping the future of education.
          </p>
          <Button variant="outline">Learn more</Button>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="About us video thumbnail"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

