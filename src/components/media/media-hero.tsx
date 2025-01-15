import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface NewsArticle {
  id: string
  title: string
  date: string
  excerpt: string
  image: string
  link: string
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Meet our latest Awardee',
    date: '1st Jan 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
    image: '/images/awardee.jpg',
    link: '/news/latest-awardee'
  },
  {
    id: '2',
    title: 'A trip to Crest School',
    date: '1st Jan 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
    image: '/images/school-trip.jpg',
    link: '/news/crest-school-trip'
  },
  {
    id: '3',
    title: 'Graduating in style',
    date: '1st Jan 2025',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
    image: '/images/graduates.jpg',
    link: '/news/graduation'
  }
]

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={article.link}>
      <Card className="overflow-hidden hover:bg-accent transition-colors">
        <CardContent className="p-4 flex gap-4">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold line-clamp-1">{article.title}</h3>
            <p className="text-xs text-muted-foreground">{article.date}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export function MediaHero() {
  return (
    <section className="bg-[#8D7B74] text-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 py-20">
          <div className="space-y-6">
            <div className="text-sm font-medium">
              TOP NEWS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our goal is to provide a chance for bright students to shine
            </h1>
            <p className="text-white/80">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
              ut sem vitae risus tristique posuere.
            </p>
            <Button 
              className="bg-black text-white border-white hover:bg-white hover:text-[#8D7B74]"
            >
              Read more
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="space-y-4">
              {newsArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

