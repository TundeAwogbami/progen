import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-[4/3] relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <Button 
          variant="outline" 
          size="sm"
          className="w-fit text-white border-white hover:bg-white hover:text-black"
        >
          Learn more
        </Button>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Awards and outdoor charity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/awards-charity.jpg"
  },
  {
    title: "Weekly excursions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/weekly-excursions.jpg"
  },
  {
    title: "Monthly public awareness",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: "/public-awareness.jpg"
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-red-500" />
            <span className="text-gray-500 uppercase text-sm font-medium">Projects we have done</span>
          </div>
          
          <h2 className="text-4xl font-bold">
            We are creating a place where schools and students with special talents can be seen.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

