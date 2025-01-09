import { EventHero } from '@/components/events/event-hero'
import { EventContent } from '@/components/events/event-content'
import { OtherEvents } from '@/components/events/other-events'

export default function EventPage() {
  return (
    <main className="pt-20">
      <EventHero />
      <EventContent />
      <OtherEvents />
    </main>
  )
}

