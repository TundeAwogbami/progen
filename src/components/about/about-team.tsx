import Image from 'next/image'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TeamMember {
  name: string
  role: string
  image: string
  socials: {
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: 'Chijundu',
    role: 'Executive CEO',
    image: '/team/chijundu.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Emmanuel',
    role: 'Executive CFO',
    image: '/team/emmanuel.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Tunde',
    role: 'Head of Activities',
    image: '/team/tunde.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Anonymous',
    role: 'Support Executive',
    image: '/team/anonymous.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-[#B8AAA4]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{member.role}</p>
      <div className="flex gap-4">
        {member.socials.facebook && (
          <Button variant="ghost" size="icon" asChild className="hover:text-blue-600">
            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
        )}
        {member.socials.twitter && (
          <Button variant="ghost" size="icon" asChild className="hover:text-blue-400">
            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        )}
        {member.socials.linkedin && (
          <Button variant="ghost" size="icon" asChild className="hover:text-blue-700">
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export function AboutTeam() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet our team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

