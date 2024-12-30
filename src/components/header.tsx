import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={32} 
            height={32}
          />
          <span className="font-bold text-xl">ProGen Hub</span>
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
        <Button className="bg-red-600 hover:bg-red-700">Donate</Button>
      </div>
    </header>
  )
}

