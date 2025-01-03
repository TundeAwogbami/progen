'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const PRESET_AMOUNTS = [5000, 10000, 20000, 50000]

export function DonateForm() {
  const [donationType, setDonationType] = useState('one-time')
  const [amount, setAmount] = useState<number>(5000)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [country, setCountry] = useState('nigeria')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add payment processing logic here
    console.log({
      donationType,
      amount: customAmount ? parseInt(customAmount) : amount,
      country
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        {/* Donation Type Selection */}
        <div>
          <h2 className="text-lg font-semibold mb-4">SELECT YOUR DONATION TYPE</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="one-time"
                name="donation-type"
                value="one-time"
                checked={donationType === 'one-time'}
                onChange={(e) => setDonationType(e.target.value)}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="one-time">One Time Donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="monthly"
                name="donation-type"
                value="monthly"
                checked={donationType === 'monthly'}
                onChange={(e) => setDonationType(e.target.value)}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="monthly">Monthly Donations</Label>
            </div>
          </div>
        </div>

        {/* Country Selection */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CHOOSE YOUR COUNTRY</h2>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
          >
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="kenya">Kenya</option>
            <option value="southafrica">South Africa</option>
          </select>
        </div>

        {/* Amount Selection */}
        <div>
          <h2 className="text-lg font-semibold mb-4">SELECT YOUR AMOUNT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {PRESET_AMOUNTS.map((preset) => (
              <Button
                key={preset}
                type="button"
                variant={amount === preset ? 'default' : 'outline'}
                onClick={() => {
                  setAmount(preset)
                  setCustomAmount('')
                }}
                className={`h-16 ${
                  amount === preset ? 'bg-[#2D3748] hover:bg-[#1A202C]' : ''
                }`}
              >
                {preset.toLocaleString()}
              </Button>
            ))}
          </div>

          <div className="text-center text-gray-500 my-4">OR</div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">ENTER YOUR OWN AMOUNT</h2>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                NGN
              </span>
              <Input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setAmount(0)
                }}
                className="pl-14"
                placeholder="enter your amount"
              />
            </div>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#2D3748] hover:bg-[#1A202C] h-12"
      >
        MAKE PAYMENT
      </Button>
    </form>
  )
}

