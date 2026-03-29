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
  { label: 'Home', href: '/v1' },
  {
    label: 'About', href: '/v1/organization',
    children: [
      { label: 'Organization', href: '/v1/organization' },
      { label: 'Executive Vision', href: '/v1/executive-vision' },
      { label: 'Why Us', href: '/v1/why-us' },
      { label: 'Testimonials', href: '/v1/testimonials' },
      { label: 'CSR', href: '/v1/csr' },
    ],
  },
  {
    label: 'Projects', href: '/v1/projects/ongoing',
    children: [
      { label: 'Ongoing Projects', href: '/v1/projects/ongoing' },
      { label: 'Completed Projects', href: '/v1/projects/completed' },
      { label: 'Upcoming Projects', href: '/v1/projects/upcoming' },
      { label: 'Resale Projects', href: '/v1/projects/resale' },
      { label: 'Acres & Cents', href: '/v1/projects/acres-cents' },
      { label: 'House Projects', href: '/v1/projects/houses' },
      { label: 'Villa Projects', href: '/v1/projects/villas' },
    ],
  },
  {
    label: 'Construction', href: '/v1/construction/projects',
    children: [
      { label: 'Construction Projects', href: '/v1/construction/projects' },
      { label: 'Specifications', href: '/v1/construction/specs' },
      { label: '3D Designs', href: '/v1/construction/3d-designs' },
      { label: 'Premium Projects', href: '/v1/construction/premium' },
    ],
  },
  { label: 'Investors', href: '/v1/investors' },
  { label: 'Blog', href: '/v1/blog' },
  { label: 'Gallery', href: '/v1/gallery' },
  { label: 'Contact', href: '/v1/contact' },
]

function HomeContent() {
  return (
    <>
      <Hero />
      <AboutPreview learnMoreHref="/v1/organization" />
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
      case '/v1': return <HomeContent />
      // About
      case '/v1/organization': return <OrganizationPage />
      case '/v1/executive-vision': return <ExecutiveVisionPage />
      case '/v1/why-us': return <WhyUsPage />
      case '/v1/testimonials': return <TestimonialsFullPage />
      case '/v1/csr': return <CSRPage />
      // Projects
      case '/v1/projects/ongoing': return <ProjectListing title="Ongoing Projects" subtitle="Premium residential projects currently under development" projects={projects} />
      case '/v1/projects/completed': return <ProjectListing title="Completed Projects" subtitle="Successfully delivered projects with happy families" projects={completedProjects} />
      case '/v1/projects/upcoming': return <ProjectListing title="Upcoming Projects" subtitle="Exciting new projects launching soon" projects={upcomingProjects} />
      case '/v1/projects/resale': return <ProjectListing title="Resale Projects" subtitle="Pre-owned plots available for immediate registration" projects={resaleProjects} />
      case '/v1/projects/acres-cents': return <ProjectListing title="Acres & Cents" subtitle="Large land parcels for development and investment" projects={acresProjects} />
      case '/v1/projects/houses': return <ProjectListing title="House Projects" subtitle="Ready-built individual houses for your family" projects={houseProjects} />
      case '/v1/projects/villas': return <ProjectListing title="Villa Projects" subtitle="Luxury villa communities with premium amenities" projects={villaProjects} />
      // Construction
      case '/v1/construction/projects': return <ProjectListing title="Construction Projects" subtitle="Ongoing and completed construction works" projects={[...projects, ...completedProjects]} />
      case '/v1/construction/specs': return <SpecificationsPage />
      case '/v1/construction/3d-designs': return <ThreeDDesignsPage />
      case '/v1/construction/premium': return <ProjectListing title="Premium Projects" subtitle="Ultra-luxury developments for discerning buyers" projects={premiumProjects} />
      // Other
      case '/v1/investors': return <InvestorsPage />
      case '/v1/blog': return <BlogPage />
      case '/v1/gallery': return <GalleryPage />
      case '/v1/contact': return <ContactPage />
      case '/v1/careers': return <CareersPage />
      case '/v1/booking': return <BookingPage />
      default: return <HomeContent />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <VersionNavbar items={NAV_ITEMS} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
