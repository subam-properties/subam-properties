import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { constructionSpecs } from '../mockData'

export default function SpecificationsPage() {
  return (
    <>
      <PageHeader title="Construction Specifications" subtitle="Premium materials and superior craftsmanship in every detail" breadcrumbs={[{ label: 'Home', href: '/v1' }, { label: 'Construction', href: '/v1/construction/projects' }]} />
      <div className="container-custom py-10 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {constructionSpecs.map((spec, i) => (
              <motion.div key={spec.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white p-5 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-4 lg:gap-6 items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-heading font-bold text-sm flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="font-heading font-bold text-primary-900 mb-1">{spec.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{spec.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
