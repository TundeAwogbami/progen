import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl">ProGen</span>
          <span className="font-bold text-xl text-gray-500">Hub</span>
          <span className="text-red-500 ml-1">innovation</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-red-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600">
            About us
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-red-600">
            What We Do
          </Link>
          <Link href="/media" className="text-sm font-medium hover:text-red-600">
            Media
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-red-600">
            Contact
          </Link>
        </nav>
        <Button className="bg-[#2D3748] hover:bg-[#1A202C]">Donate</Button>
      </div>
    </header>
  )
}

