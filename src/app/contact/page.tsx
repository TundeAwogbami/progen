import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactMap } from '@/components/contact/contact-map'

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </main>
  )
}

