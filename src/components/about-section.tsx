import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-red-500" />
              <span className="text-gray-500 uppercase text-sm font-medium">Know about us</span>
            </div>
            
            <h2 className="text-4xl font-bold">
              We reward schools and students that are bright
            </h2>
            
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
            
            <p className="text-gray-600">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            
            <Button 
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900"
            >
              Learn more
            </Button>
          </div>
          
          <div className="relative aspect-square bg-gray-200 rounded-lg">
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-red-500 ml-1" />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-gray-500 uppercase text-sm font-medium">Our supporters</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/logoipsum-${i + 1}.svg`}
                  alt={`Supporter logo ${i + 1}`}
                  width={120}
                  height={40}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

