import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">ProGen</span>
              <span className="font-bold text-xl text-gray-500">Hub</span>
              <span className="text-red-500 ml-1">innovation</span>
            </Link>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-white text-sm">Team</Link></li>
              <li><Link href="/what-we-do" className="text-gray-400 hover:text-white text-sm">What we do</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-400 hover:text-white text-sm">Events</Link></li>
              <li><Link href="/donate" className="text-gray-400 hover:text-white text-sm">Donate</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Facebook</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Instagram</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Twitter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-medium mb-4">Subscribe to get latest updates</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

