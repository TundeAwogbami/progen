import { DonateForm } from '@/components/donate/donate-form'

export default function DonateNowPage() {
  return (
    <main className="pt-20">
      <div className="container px-4 mx-auto py-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-red-500 font-medium mb-4">
              DONATE
            </div>
            <h1 className="text-3xl font-bold mb-4">
              DONATION OF ANY AMOUNT
            </h1>
            <p className="text-gray-600">
              To make clear charity task that. Equalize what we really better is to invest people hearts. Succinct anyway.
              Equalize what we really better is to invest people hearts. Succinct anyway. Equalize what we really better
              etc. Property needed is each point. Suspendisse varius enim in eros etc. A small scale copies. Of each
              property needed is each point. Suspendisse varius enim in eros etc.
            </p>
          </div>
          <DonateForm />
        </div>
      </div>
    </main>
  )
}

