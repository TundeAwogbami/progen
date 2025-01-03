import { ServicesHero } from '@/components/services/services-hero'
import { ServicesGrid } from '@/components/services/services-grid'
import { ServicesProjects } from '@/components/services/services-projects'

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProjects />
    </main>
  )
}

