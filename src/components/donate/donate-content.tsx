'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function DonateContent() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabContent = {
    overview: (
      <div className="space-y-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
          eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
          nulla, ut commodo diam libero vitae erat.
        </p>
        <p className="text-gray-600">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
          risus tristique posuere.
        </p>
      </div>
    ),
    impact: (
      <div className="space-y-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
          eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
          nulla, ut commodo diam libero vitae erat.
        </p>
        <p className="text-gray-600">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
          risus tristique posuere.
        </p>
      </div>
    ),
    benefits: (
      <div className="space-y-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
          eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
          nulla, ut commodo diam libero vitae erat.
        </p>
        <p className="text-gray-600">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
          risus tristique posuere.
        </p>
      </div>
    )
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">
            How you can contribute making our Vision come true
          </h2>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum</p>

          <Card>
            <CardContent className="p-6">
              <div className="flex space-x-1 border-b mb-6">
                {['Overview', 'Impact', 'What You get'].map((tab) => {
                  const value = tab.toLowerCase().replace(/\s+/g, '')
                  return (
                    <Button
                      key={value}
                      variant={activeTab === value ? "default" : "ghost"}
                      onClick={() => setActiveTab(value)}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                    >
                      {tab}
                    </Button>
                  )
                })}
              </div>
              {tabContent[activeTab as keyof typeof tabContent]}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

