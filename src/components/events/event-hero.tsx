import { MapPin, Calendar } from 'lucide-react'

export function EventHero() {
  return (
    <section className="bg-[#8D7B74] text-white">
      <div className="container px-4 mx-auto py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            A day with our brightest student
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Jos, Plateau Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Jan 01, 2024 8:30 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

