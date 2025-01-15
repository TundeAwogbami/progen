import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { VolunteerDialog } from '@/components/volunteer-dialog'

export function DonateUsage() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto space-y-20">
        {/* How we use donations section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            How we use your donations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="text-gray-600">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
              risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </p>
          </div>
        </div>

        {/* Contribution Banner */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/classroom.jpg"
            alt="Classroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mb-8">
              You can contribute to provide recognition for schools and students with special talents!
            </h2>
            <div className="flex gap-4">
              <VolunteerDialog 
                trigger={
                  <Button variant="outline" className="bg-white hover:bg-white/90 text-black">
                    Join as a volunteer
                  </Button>
                }
              />
              <Button className="bg-[#FF6B6B] hover:bg-[#FF5252]">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

