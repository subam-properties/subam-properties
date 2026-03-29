import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/router'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_LINKS, COMPANY } from '@/lib/constants'
import { Button } from '@/components/ui'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage || isMobileMenuOpen
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={cn(
                'font-heading font-bold text-lg sm:text-xl lg:text-2xl transition-colors',
                isScrolled || !isHomePage || isMobileMenuOpen
                  ? 'text-primary-900'
                  : 'text-white'
              )}
            >
              <span className="text-accent">SUBAM</span> PROPERTIES
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors relative text-sm lg:text-base',
                  isScrolled || !isHomePage
                    ? 'text-primary-700 hover:text-primary-900'
                    : 'text-white/90 hover:text-white',
                  pathname === link.href && 'text-accent'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop: Phone + CTA */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className={cn(
                'hidden lg:flex items-center gap-2 text-sm font-medium transition-colors',
                isScrolled || !isHomePage
                  ? 'text-primary-700 hover:text-primary-900'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY.phone}
            </a>
            <Button variant="accent" size="sm">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300',
                  isScrolled || !isHomePage || isMobileMenuOpen
                    ? 'bg-primary-900'
                    : 'bg-white',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300',
                  isScrolled || !isHomePage || isMobileMenuOpen
                    ? 'bg-primary-900'
                    : 'bg-white',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300',
                  isScrolled || !isHomePage || isMobileMenuOpen
                    ? 'bg-primary-900'
                    : 'bg-white',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="py-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'block py-3 px-4 rounded-lg font-medium text-primary-700 hover:bg-primary-50 hover:text-primary-900 transition-colors',
                      pathname === link.href && 'text-accent bg-accent/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 px-4 space-y-3">
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 py-3 text-primary-700 font-medium"
                  >
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {COMPANY.phone}
                  </a>
                  <Button variant="accent" className="w-full">
                    Enquire Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
