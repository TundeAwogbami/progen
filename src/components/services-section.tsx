import { Award, GraduationCap, Gift, Coins } from 'lucide-react'

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#5D4037]">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-white mb-12">
          Some services we provide for the schools and students
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<GraduationCap className="h-8 w-8" />}
            title="Educational support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            icon={<Award className="h-8 w-8" />}
            title="Awards and benefits"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            icon={<Gift className="h-8 w-8" />}
            title="Scholarships"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            icon={<Coins className="h-8 w-8" />}
            title="Funding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

