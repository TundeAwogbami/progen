import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

const projects = [
  {
    title: 'Awards and outdoor charity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: '/projects/awards-charity.jpg',
    link: '/projects/awards-charity'
  },
  {
    title: 'Weekly excursions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: '/projects/weekly-excursions.jpg',
    link: '/projects/weekly-excursions'
  },
  {
    title: 'Monthly public awareness',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: '/projects/public-awareness.jpg',
    link: '/projects/public-awareness'
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[4/3] group overflow-hidden rounded-lg">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/80 text-sm mb-4">{project.description}</p>
        <Button 
          variant="outline" 
          size="sm"
          asChild
          className="w-fit text-white border-white hover:bg-white hover:text-black"
        >
          <Link href={project.link}>
            Learn more
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function ProjectGrid() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-8">MORE PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

