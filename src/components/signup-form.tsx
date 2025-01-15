'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your signup logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Get Started Now</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, terms: checked as boolean })
              }
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-500"
            >
              I agree to the terms & policy
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#2D3748] hover:bg-[#1A202C]">
          Signup
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-gray-500">or</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => {/*Google sign in logic*/}}
        >
          <Image
            src="/images/google.jpg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Google
        </Button>

        <p className="text-center text-sm text-gray-600">
          Have an account?{' '}
          <Link href="/signin" className="text-red-600 hover:text-red-500">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  )
}

