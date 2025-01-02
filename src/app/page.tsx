import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { DonationStats } from '@/components/donation-stats'
import { ContributionSection } from '@/components/contribution-section'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <DonationStats />
      <ContributionSection />
    </div>
  )
}

