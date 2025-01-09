import { Users, Home, DollarSign, Users2 } from 'lucide-react'

const stats = [
  {
    icon: <Home className="w-6 h-6" />,
    title: '20+ orphanage visit in 2 months',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '230 People Have donated',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: '30+ people joined',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: '1.2m Raised for this initiate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  }
]

export function ProjectStats() {
  return (
    <section className="py-20 bg-[#8D7B74] text-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold">{stat.title}</h3>
              <p className="text-white/80 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

