import { DonateHero } from '@/components/donate/donate-hero'
import { DonateContent } from '@/components/donate/donate-content'

export default function DonatePage() {
  return (
    <main className="pt-20">
      <DonateHero />
      <DonateContent />
    </main>
  )
}

