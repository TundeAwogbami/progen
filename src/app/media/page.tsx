import { MediaHero } from '@/components/media/media-hero'
import { ContributionSection } from '@/components/contribution-section'
import { EventsSection } from '@/components/events-section'

export default function MediaPage() {
  return (
    <main className="pt-20">
      <MediaHero />
      <ContributionSection />
      <EventsSection />
    </main>
  )
}

