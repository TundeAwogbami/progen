import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { VolunteerDialog } from '@/components/volunteer-dialog'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
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

interface Event {
  date: {
    day: number
    month: string
  }
  title: string
  link: string
  type: string
}

const events: Event[] = [
  {
    date: {
      day: 13,
      month: 'APR'
    },
    title: 'A day with our bright students',
    link: '/events/bright-students-day',
    type: 'NEXT EVENTS'
  },
  {
    date: {
      day: 25,
      month: 'APR'
    },
    title: 'Seminar: The price of brilliance and dedication',
    link: '/events/brilliance-seminar',
    type: 'NEXT EVENTS'
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative h-[300px] group overflow-hidden rounded-lg">
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

function EventCard({ event }: { event: Event }) {
  return (
    <Link 
      href={event.link}
      className="block bg-[#B8C6D0] rounded-lg p-6 hover:bg-[#A5B4C2] transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div>
            <div className="text-xs font-medium text-red-500 mb-1">
              {event.type}
            </div>
            <div className="text-2xl font-bold">
              {event.date.day}
            </div>
            <div className="text-sm font-medium">
              {event.date.month}
            </div>
          </div>
          <h3 className="text-lg font-medium">
            {event.title}
          </h3>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          className="mt-2"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">View event details</span>
        </Button>
      </div>
    </Link>
  )
}

export function ServicesProjects() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto space-y-20">
        {/* Projects Section */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-red-500 font-medium mb-4">
              PROJECTS WE HAVE DONE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              We are creating a place where schools with special talents can be seen.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Contribution Banner */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/classroom.jpg"
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

        {/* Events Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b">
            Our Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

