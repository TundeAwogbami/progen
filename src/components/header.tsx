import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={32} 
            height={32}
          />
          <span className="font-bold">ProGen</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium">
            What We Do
          </Link>
          <Link href="/media" className="text-sm font-medium">
            Media
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
        </nav>
        <Button>Donate</Button>
      </div>
    </header>
  )
}

