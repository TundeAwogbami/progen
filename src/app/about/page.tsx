import { AboutHero } from '@/components/about/about-hero'
import { AboutVideo } from '@/components/about/about-video'
import { AboutMissionVision } from '@/components/about/about-mission-vision'
import { AboutSupporters } from '@/components/about/about-supporters'
import { AboutAwards } from '@/components/about/about-awards'
import { AboutTeam } from '@/components/about/about-team'
import { AboutContribution } from '@/components/about/about-contribution'


export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <AboutVideo />
      <AboutMissionVision />
      <AboutSupporters />
      <AboutAwards />
      <AboutTeam />
      <AboutContribution />
      
    </main>
  )
}



