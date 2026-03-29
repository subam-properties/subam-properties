import { motion } from 'framer-motion'
import { Link } from '@/router'

interface PlaceholderPageProps {
  title: string
  backHref: string
  versionLabel: string
}

export function PlaceholderPage({ title, backHref, versionLabel }: PlaceholderPageProps) {
  return (
    <div className="pt-28 lg:pt-32 min-h-screen bg-cream-100">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900 mb-4">{title}</h1>
          <p className="text-primary-600 mb-2">This page is part of <span className="font-semibold text-primary-900">{versionLabel}</span></p>
          <p className="text-primary-500 mb-8 text-sm">
            This page will be fully built after you choose this version. Navigate the menu above to explore the site structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={backHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium">
              &larr; Back to Home
            </Link>
            <Link href="/versions" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-900 text-primary-900 rounded-lg hover:bg-primary-900 hover:text-white transition-colors font-medium">
              Compare Versions
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
