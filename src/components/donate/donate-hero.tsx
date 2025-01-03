import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function DonateHero() {
  return (
    <section className="bg-[#B8C6D0]">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <div className="text-red-500 font-medium">
              DONATE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Making a donation to our Cause and Vision
            </h1>
            <p className="text-gray-600 max-w-xl">
              When you donate, you're supporting different ways to achieve our
              vision and contribute to the support of education.
            </p>
            <Link href="/donate/now">
              <Button 
                size="lg"
                className="bg-[#FF6B6B] hover:bg-[#FF5252]"
              >
                Donate now
              </Button>
            </Link>
          </div>
          
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/donation-box.jpg"
              alt="Hands holding donation box"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

