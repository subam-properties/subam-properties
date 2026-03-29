import { VersionNavbar, NavItem } from '../VersionNavbar'
import { PlaceholderPage } from '../PlaceholderPage'
import { Hero } from '@/components/sections/Hero'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Stats } from '@/components/sections/Stats'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/sections/FloatingCTA'
import { usePathname } from '@/router'

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/v2' },
  { label: 'About Us', href: '/v2/about' },
  {
    label: 'Projects', href: '/v2/projects',
    children: [
      { label: 'All Projects', href: '/v2/projects' },
      { label: 'Residential Plots', href: '/v2/projects/plots' },
      { label: 'Villas & Houses', href: '/v2/projects/villas' },
      { label: 'Premium Projects', href: '/v2/projects/premium' },
      { label: 'Resale Properties', href: '/v2/projects/resale' },
    ],
  },
  { label: 'Gallery', href: '/v2/gallery' },
  { label: 'Blog', href: '/v2/blog' },
  { label: 'Contact', href: '/v2/contact' },
]

function HomeContent() {
  return (
    <>
      <Hero />
      <AboutPreview learnMoreHref="/v2/about" />
      <FeaturedProjects />
      <Stats />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default function V2Layout() {
  const pathname = usePathname()

  const getPageTitle = () => {
    const pages: Record<string, string> = {
      '/v2/about': 'About Us',
      '/v2/projects': 'All Projects',
      '/v2/projects/plots': 'Residential Plots',
      '/v2/projects/villas': 'Villas & Houses',
      '/v2/projects/premium': 'Premium Projects',
      '/v2/projects/resale': 'Resale Properties',
      '/v2/gallery': 'Gallery',
      '/v2/blog': 'Blog',
      '/v2/contact': 'Contact Us',
      '/v2/investors': 'Investors',
      '/v2/testimonials': 'Testimonials',
      '/v2/booking': 'Booking Procedure',
    }
    return pages[pathname]
  }

  const pageTitle = getPageTitle()

  return (
    <div className="min-h-screen flex flex-col">
      <VersionNavbar items={NAV_ITEMS} />
      <main className="flex-grow">
        {pathname === '/v2' ? (
          <HomeContent />
        ) : (
          <PlaceholderPage
            title={pageTitle || 'Page'}
            backHref="/v2"
            versionLabel="Version 2 — Business-Focused"
          />
        )}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
