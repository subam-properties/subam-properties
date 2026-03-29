import { RouterProvider, usePathname } from './router'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { LeadPopup } from './components/sections/LeadPopup'
import { FloatingCTA } from './components/sections/FloatingCTA'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetail'

function AppContent() {
  const pathname = usePathname()

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
