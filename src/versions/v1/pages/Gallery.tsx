import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { galleryImages } from '../mockData'

const categories = ['All', 'Projects', 'Construction', 'Plots', 'Events']

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? galleryImages : galleryImages.filter(img => img.category === active)

  return (
    <>
      <PageHeader title="Gallery" subtitle="A visual journey through our projects and events" breadcrumbs={[{ label: 'Home', href: '/' }]} />
      <div className="container-custom py-10 lg:py-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat ? 'bg-primary-900 text-white' : 'bg-primary-100 text-primary-700 hover:bg-primary-200'}`}>
              {cat}
            </button>
          ))}
        </div>
        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {filtered.map((img, i) => (
            <motion.div key={img.src + i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.05 }} className="group relative rounded-xl overflow-hidden aspect-square">
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
