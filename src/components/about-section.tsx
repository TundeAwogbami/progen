import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">We reward schools and students that are bright</h3>
            <p className="mb-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p className="mb-6 text-gray-600">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Learn more</Button>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/about-video-thumbnail.jpg"
              alt="About us video thumbnail"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

