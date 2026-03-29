import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { threeDDesigns } from '../mockData'

export default function ThreeDDesignsPage() {
  return (
    <>
      <PageHeader title="3D House Designs" subtitle="Explore our curated collection of modern house plans" breadcrumbs={[{ label: 'Home', href: '/v1' }, { label: 'Construction', href: '/v1/construction/projects' }]} />
      <div className="container-custom py-10 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {threeDDesigns.map((design, i) => (
            <motion.div key={design.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <img src={design.image} alt={design.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-accent text-primary-900 text-xs font-semibold rounded-full">{design.bhk}</span>
                  <span className="px-2 py-1 bg-white/90 text-primary-900 text-xs font-semibold rounded-full">{design.sqft}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-primary-900 group-hover:text-accent transition-colors">{design.title}</h3>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                  View Plan <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
