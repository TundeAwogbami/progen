import { DonateHero } from '@/components/donate/donate-hero'
import { DonateContent } from '@/components/donate/donate-content'
import { DonateUsage } from '@/components/donate/donate-usage'

export default function DonatePage() {
  return (
    <main className="pt-20">
      <DonateHero />
      <DonateContent />
      <DonateUsage />
    </main>
  )
}

