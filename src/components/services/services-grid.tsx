import { GraduationCap, Award, GiftIcon, Home, Coins, Share2 } from 'lucide-react'

const services = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Educational support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Awards and benefits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <GiftIcon className="w-6 h-6" />,
    title: 'Scholarships',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Basic amenities',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: 'Funding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Public outreach',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  }
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-[#8D7B74]">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          What we do for students and schools with bright minds
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-white/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

