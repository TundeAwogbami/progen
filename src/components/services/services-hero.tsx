import Image from 'next/image'

export function ServicesHero() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-red-500 font-medium">
              WHAT WE DO
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              We are working cross country
            </h1>
            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
          
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/school-bus.jpg"
              alt="School bus on the road"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

