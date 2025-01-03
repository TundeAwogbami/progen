import Image from 'next/image'

export function AboutSupporters() {
  return (
    <section className="py-20 bg-[#5D4037]">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-white mb-12">OUR SUPPORTERS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={`/logoipsum-${i + 1}.svg`}
                alt={`Supporter logo ${i + 1}`}
                width={120}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

