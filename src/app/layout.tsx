import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ProGen',
  description: 'Driving Innovation, Celebrating Achievements in Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

