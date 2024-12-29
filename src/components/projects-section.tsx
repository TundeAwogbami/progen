import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="object-cover w-full h-[300px]"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-white transition-all duration-300 translate-y-full group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Button variant="outline" className="w-fit">Learn more</Button>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Awards and outdoor charity",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Weekly excursions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Monthly public awareness",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/placeholder.svg?height=300&width=400"
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          We are creating a place where schools with special talents can be seen.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

