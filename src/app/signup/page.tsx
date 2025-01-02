import Image from 'next/image'
import { SignupForm } from '@/components/signup-form'

export default function SignupPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Image */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/hero-image.jpg"
          alt="School building"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-[30px] p-8 shadow-lg">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

