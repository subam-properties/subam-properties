import { motion } from 'framer-motion'
import { Link } from '@/router'

const versions = [
  {
    id: 'v1',
    title: 'Version 1 — Full-Featured',
    subtitle: 'Like nammafamilybuilder.com',
    pages: '~25+ pages',
    nav: '3 dropdown menus',
    features: [
      'About (Organization, Executive Vision, Why Us, CSR)',
      'Projects (Ongoing, Completed, Upcoming, Resale, Acres, Houses, Villas)',
      'Construction (Projects, Specs, 3D Designs, Premium)',
      'Investors, Blog, Gallery, Contact, Careers, Booking, CEO Speak',
    ],
    color: 'bg-primary-900',
    accent: 'text-accent',
  },
  {
    id: 'v2',
    title: 'Version 2 — Business-Focused',
    subtitle: 'Streamlined & professional',
    pages: '~15 pages',
    nav: '1 dropdown menu',
    features: [
      'Single About Us page with all sections',
      'Projects with type filter (Plots, Villas, Premium, Resale)',
      'Blog, Gallery, Contact + Investors',
      'Booking Procedure, Testimonials',
    ],
    color: 'bg-blue-600',
    accent: 'text-blue-300',
  },
  {
    id: 'v3',
    title: 'Version 3 — Growth-Ready',
    subtitle: 'Lean launch, expand later',
    pages: '~8 pages',
    nav: 'Flat navigation',
    features: [
      'Rich home page with all key sections',
      'Single filterable projects page',
      'Clean About, Gallery, Contact pages',
      'Easy to add more pages later',
    ],
    color: 'bg-emerald-700',
    accent: 'text-emerald-300',
  },
]

export default function VersionPicker() {
  return (
    <div className="min-h-screen bg-cream-100">
      {/* Header */}
      <div className="bg-primary-900 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="container-custom text-center">
          <p className="text-accent font-medium mb-3 tracking-widest uppercase text-sm">Site Structure Preview</p>
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
            Choose Your <span className="text-accent">Version</span>
          </h1>
          <p className="text-primary-200 max-w-2xl mx-auto lg:text-lg">
            Browse 3 different site structures for Subam Properties. Click any version to preview the full navigation, home page, and pages.
          </p>
        </div>
      </div>

      {/* Version Cards */}
      <div className="container-custom -mt-8 lg:-mt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {versions.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Link href={`/${v.id}`} className="block group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 h-full">
                  {/* Card Header */}
                  <div className={`${v.color} p-6 lg:p-8`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${v.accent}`}>{v.pages}</span>
                      <span className={`text-xs ${v.accent} opacity-75`}>{v.nav}</span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-heading font-bold text-white mb-1">{v.title}</h2>
                    <p className="text-white/70 text-sm">{v.subtitle}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 lg:p-8">
                    <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-3">Includes</p>
                    <ul className="space-y-2.5">
                      {v.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-primary-700">
                          <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-primary-100">
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                        Preview this version
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
