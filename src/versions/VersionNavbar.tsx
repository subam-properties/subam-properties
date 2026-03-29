import { useState, useEffect, useRef } from 'react'
import { Link, usePathname } from '@/router'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/lib/constants'
import { Button } from '@/components/ui'

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

interface VersionNavbarProps {
  items: NavItem[]
  backTo?: string
  isProduction?: boolean
}

export function VersionNavbar({ items, backTo = '/versions', isProduction = false }: VersionNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHome = items[0] && pathname === items[0].href

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled || !isHome || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
    )}>
      {/* Version banner - only in preview mode */}
      {!isProduction && (
        <div className="bg-accent text-primary-900 text-center py-1 text-xs font-medium">
          <Link href={backTo} className="hover:underline">&larr; Back to Version Picker</Link>
          <span className="mx-2">|</span>
          Preview Mode
        </div>
      )}

      <nav className="container-custom" ref={dropdownRef}>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={items[0]?.href || '/'} className="flex items-center gap-2">
            <div className={cn(
              'font-heading font-bold text-lg lg:text-2xl transition-colors',
              isScrolled || !isHome || isMobileMenuOpen ? 'text-primary-900' : 'text-white'
            )}>
              <span className="text-accent">SUBAM</span> PROPERTIES
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      isScrolled || !isHome
                        ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.label}
                    <svg className={cn('w-3.5 h-3.5 transition-transform', openDropdown === item.label && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      isScrolled || !isHome
                        ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10',
                      pathname === item.href && 'text-accent'
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-primary-100 py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-primary-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors',
              isScrolled || !isHome ? 'text-primary-700' : 'text-white/90'
            )}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {COMPANY.phone}
            </a>
            <Button variant="accent" size="sm">Enquire Now</Button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2" aria-label="Menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={cn('w-full h-0.5 transition-all duration-300', isScrolled || !isHome || isMobileMenuOpen ? 'bg-primary-900' : 'bg-white', isMobileMenuOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('w-full h-0.5 transition-all duration-300', isScrolled || !isHome || isMobileMenuOpen ? 'bg-primary-900' : 'bg-white', isMobileMenuOpen && 'opacity-0')} />
              <span className={cn('w-full h-0.5 transition-all duration-300', isScrolled || !isHome || isMobileMenuOpen ? 'bg-primary-900' : 'bg-white', isMobileMenuOpen && '-rotate-45 -translate-y-2')} />
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
              className="lg:hidden overflow-hidden bg-white max-h-[70vh] overflow-y-auto"
            >
              <div className="py-3 space-y-1">
                {items.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg"
                        >
                          {item.label}
                          <svg className={cn('w-4 h-4 transition-transform', mobileExpanded === item.label && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                              <div className="pl-6 space-y-1 pb-2">
                                {item.children.map((child) => (
                                  <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg">
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} className={cn('block px-4 py-3 font-medium text-primary-700 hover:bg-primary-50 rounded-lg', pathname === item.href && 'text-accent')}>
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="accent" className="w-full">Enquire Now</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
