import { RouterProvider, usePathname } from './router'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { LeadPopup } from './components/sections/LeadPopup'
import { FloatingCTA } from './components/sections/FloatingCTA'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetail'
import VersionPicker from './versions/VersionPicker'
import V1Layout from './versions/v1/HomeV1'
import V2Layout from './versions/v2/HomeV2'
import V3Layout from './versions/v3/HomeV3'

function AppContent() {
  const pathname = usePathname()

  // Version routes — standalone layouts (own navbar/footer)
  if (pathname === '/versions') {
    return <VersionPicker />
  }
  if (pathname.startsWith('/v1')) {
    return <V1Layout />
  }
  if (pathname.startsWith('/v2')) {
    return <V2Layout />
  }
  if (pathname.startsWith('/v3')) {
    return <V3Layout />
  }

  // Main site routes
  let page: React.ReactNode
  const projectDetailMatch = pathname.match(/^\/projects\/([^/]+)\/([^/]+)\/?$/)

  if (pathname === '/') {
    page = <HomePage />
  } else if (pathname === '/projects' || pathname.startsWith('/projects?')) {
    page = <ProjectsPage />
  } else if (projectDetailMatch) {
    page = <ProjectDetailPage city={projectDetailMatch[1]} slug={projectDetailMatch[2]} />
  } else {
    page = <HomePage />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {page}
      </main>
      <Footer />
      <LeadPopup />
      <FloatingCTA />
    </div>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  )
}
