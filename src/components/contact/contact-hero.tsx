import { Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ContactHero() {
  return (
    <section className="bg-[#8D7B74] text-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 py-20">
          <div className="space-y-6">
            <div className="text-sm font-medium">
              CONTACT US
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              We'd love to hear from you
            </h1>
            <p className="text-white/80">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Let's talk!</h2>
              <p>+234 09000000000</p>
              <p>info@progeninnovationhub.com</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold">Headoffice</h2>
              <p>8 aaaaaa 000000, Lagos,</p>
              <p>Nigeria.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold">Branch Office</h2>
              <p>Jos, Plateau Nigeria</p>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="text-white hover:text-white hover:bg-white/20"
              >
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="text-white hover:text-white hover:bg-white/20"
              >
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="text-white hover:text-white hover:bg-white/20"
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

