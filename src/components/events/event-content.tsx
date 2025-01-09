import Image from 'next/image'

export function EventContent() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean
                  rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
                  est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla
                  quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <p>
                  Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus
                  dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                </p>
                <p>
                  Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit
                  scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero
                  egestas porttitor nunc pellentesque mauris et pulvinar eget.
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/events/graduate.jpg"
                alt="Graduate student in blue gown and cap"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean
                rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
                est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla
                quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

