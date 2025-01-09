import { ProjectHero } from '@/components/projects/project-hero'
import { ProjectContent } from '@/components/projects/project-content'
import { ProjectStats } from '@/components/projects/project-stats'
import { ProjectGrid } from '@/components/projects/project-grid'
import { ContributionSection } from '@/components/contribution-section'

export default function ProjectPage() {
  return (
    <main className="pt-20">
      <ProjectHero />
      <ProjectContent />
      <ProjectStats />
      <ProjectGrid />
      <ContributionSection />
    </main>
  )
}

