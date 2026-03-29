import { VersionNavbar, NavItem } from '../VersionNavbar'
import { PlaceholderPage } from '../PlaceholderPage'
import { Hero } from '@/components/sections/Hero'
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
  { label: 'Home', href: '/v3' },
  { label: 'About', href: '/v3/about' },
  { label: 'Projects', href: '/v3/projects' },
  { label: 'Gallery', href: '/v3/gallery' },
  { label: 'Contact', href: '/v3/contact' },
]

function HomeContent() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Stats />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default function V3Layout() {
  const pathname = usePathname()

  const getPageTitle = () => {
    const pages: Record<string, string> = {
      '/v3/about': 'About Us',
      '/v3/projects': 'Our Projects',
      '/v3/gallery': 'Gallery',
      '/v3/contact': 'Contact Us',
    }
    return pages[pathname]
  }

  const pageTitle = getPageTitle()

  return (
    <div className="min-h-screen flex flex-col">
      <VersionNavbar items={NAV_ITEMS} />
      <main className="flex-grow">
        {pathname === '/v3' ? (
          <HomeContent />
        ) : (
          <PlaceholderPage
            title={pageTitle || 'Page'}
            backHref="/v3"
            versionLabel="Version 3 — Growth-Ready"
          />
        )}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
