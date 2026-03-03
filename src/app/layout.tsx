import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LeadPopup } from '@/components/sections/LeadPopup'
import { FloatingCTA } from '@/components/sections/FloatingCTA'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Subam Properties - Premium Plots & Real Estate in Chennai',
  description: 'Discover premium residential plots and projects by Subam Properties in Chennai. DTCP approved plots in Guduvancheri, Kattankulathur & surrounding areas.',
  keywords: 'real estate, plots, land, residential plots, Chennai, Guduvancheri, Kattankulathur, Potheri, Subam Properties, DTCP approved',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <LeadPopup />
        <FloatingCTA />
      </body>
    </html>
  )
}
