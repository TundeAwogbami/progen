import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

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

export function EventsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b">
          Our Events
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

