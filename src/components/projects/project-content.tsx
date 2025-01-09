import Image from 'next/image'

export function ProjectContent() {
  return (
    <section className="pb-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4 text-gray-600">
            <p>
              Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus
              scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere
              molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae.
              Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
            </p>
            <p>
              Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus.
              Ut amet, cras volutpat dui. A bibendum viverra eu cras.
            </p>
            <p>
              Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit
              scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas
              porttitor nunc pellentesque mauris et pulvinar eget.
            </p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/projects/awareness-activity.jpg"
              alt="Public awareness activity"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Weekly Excursions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio
                orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est
                sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis
                interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas
                nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus.
                Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit
                sagittis, ultrices ut dui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

