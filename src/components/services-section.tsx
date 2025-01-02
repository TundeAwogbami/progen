import Image from 'next/image'
import { GraduationCap, Award, Gift, Coins } from 'lucide-react'

const services = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: 'Educational support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: 'Awards and benefits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  {
    icon: <Gift className="w-6 h-6 text-white" />,
    title: 'Scholarships',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  {
    icon: <Coins className="w-6 h-6 text-white" />,
    title: 'Funding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#5D4037]">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-white/30" />
                <span className="text-white/70 uppercase text-sm font-medium">What we do</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Some services we provide for the schools and students
              </h2>
              
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/images/library-image.jpg"
              alt="Library study room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

