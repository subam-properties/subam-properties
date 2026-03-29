import { VersionNavbar, NavItem } from '../VersionNavbar'
import { Hero } from '@/components/sections/Hero'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Stats } from '@/components/sections/Stats'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { Testimonials } from '@/components/sections/Testimonials'
import { CityExplorer } from '@/components/sections/CityExplorer'
import { Newsletter } from '@/components/sections/Newsletter'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/sections/FloatingCTA'
import { LeadPopup } from '@/components/sections/LeadPopup'
import { usePathname } from '@/router'
import { projects } from '@/lib/data'
import { completedProjects, upcomingProjects, resaleProjects, acresProjects, houseProjects, villaProjects, premiumProjects } from './mockData'

import OrganizationPage from './pages/Organization'
import ExecutiveVisionPage from './pages/ExecutiveVision'
import WhyUsPage from './pages/WhyUs'
import TestimonialsFullPage from './pages/TestimonialsPage'
import CSRPage from './pages/CSR'
import ProjectListing from './pages/ProjectListing'
import GalleryPage from './pages/Gallery'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import InvestorsPage from './pages/Investors'
import SpecificationsPage from './pages/Specifications'
import ThreeDDesignsPage from './pages/ThreeDDesigns'
import CareersPage from './pages/Careers'
import BookingPage from './pages/Booking'

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About', href: '/organization',
    children: [
      { label: 'Organization', href: '/organization' },
      { label: 'Executive Vision', href: '/executive-vision' },
      { label: 'Why Us', href: '/why-us' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'CSR', href: '/csr' },
    ],
  },
  {
    label: 'Projects', href: '/projects/ongoing',
    children: [
      { label: 'Ongoing Projects', href: '/projects/ongoing' },
      { label: 'Completed Projects', href: '/projects/completed' },
      { label: 'Upcoming Projects', href: '/projects/upcoming' },
      { label: 'Resale Projects', href: '/projects/resale' },
      { label: 'Acres & Cents', href: '/projects/acres-cents' },
      { label: 'House Projects', href: '/projects/houses' },
      { label: 'Villa Projects', href: '/projects/villas' },
    ],
  },
  {
    label: 'Construction', href: '/construction/projects',
    children: [
      { label: 'Construction Projects', href: '/construction/projects' },
      { label: 'Specifications', href: '/construction/specs' },
      { label: '3D Designs', href: '/construction/3d-designs' },
      { label: 'Premium Projects', href: '/construction/premium' },
    ],
  },
  { label: 'Investors', href: '/investors' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

function HomeContent() {
  return (
    <>
      <Hero />
      <AboutPreview learnMoreHref="/organization" />
      <FeaturedProjects />
      <Stats />
      <CityExplorer />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default function V1Layout() {
  const pathname = usePathname()

  const renderPage = () => {
    switch (pathname) {
      case '/': return <HomeContent />
      // About
      case '/organization': return <OrganizationPage />
      case '/executive-vision': return <ExecutiveVisionPage />
      case '/why-us': return <WhyUsPage />
      case '/testimonials': return <TestimonialsFullPage />
      case '/csr': return <CSRPage />
      // Projects
      case '/projects/ongoing': return <ProjectListing title="Ongoing Projects" subtitle="Premium residential projects currently under development" projects={projects} />
      case '/projects/completed': return <ProjectListing title="Completed Projects" subtitle="Successfully delivered projects with happy families" projects={completedProjects} />
      case '/projects/upcoming': return <ProjectListing title="Upcoming Projects" subtitle="Exciting new projects launching soon" projects={upcomingProjects} />
      case '/projects/resale': return <ProjectListing title="Resale Projects" subtitle="Pre-owned plots available for immediate registration" projects={resaleProjects} />
      case '/projects/acres-cents': return <ProjectListing title="Acres & Cents" subtitle="Large land parcels for development and investment" projects={acresProjects} />
      case '/projects/houses': return <ProjectListing title="House Projects" subtitle="Ready-built individual houses for your family" projects={houseProjects} />
      case '/projects/villas': return <ProjectListing title="Villa Projects" subtitle="Luxury villa communities with premium amenities" projects={villaProjects} />
      // Construction
      case '/construction/projects': return <ProjectListing title="Construction Projects" subtitle="Ongoing and completed construction works" projects={[...projects, ...completedProjects]} />
      case '/construction/specs': return <SpecificationsPage />
      case '/construction/3d-designs': return <ThreeDDesignsPage />
      case '/construction/premium': return <ProjectListing title="Premium Projects" subtitle="Ultra-luxury developments for discerning buyers" projects={premiumProjects} />
      // Other
      case '/investors': return <InvestorsPage />
      case '/blog': return <BlogPage />
      case '/gallery': return <GalleryPage />
      case '/contact': return <ContactPage />
      case '/careers': return <CareersPage />
      case '/booking': return <BookingPage />
      default: return <HomeContent />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <VersionNavbar items={NAV_ITEMS} isProduction />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <LeadPopup />
      <FloatingCTA />
    </div>
  )
}
