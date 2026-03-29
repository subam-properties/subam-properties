import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'

export default function CSRPage() {
  return (
    <>
      <PageHeader title="CSR Initiatives" subtitle="Building communities beyond homes" breadcrumbs={[{ label: 'Home', href: '/v1' }, { label: 'About', href: '/v1/organization' }]} />
      <div className="container-custom py-10 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary-600 leading-relaxed lg:text-lg">At Subam Properties, we believe in giving back to the communities we serve. Our CSR initiatives focus on education, environmental sustainability, and community welfare across Chennai's growing neighborhoods.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Education Support', desc: 'Scholarship programs for underprivileged students near our project areas. Over 50 students supported since 2020.', icon: '📚' },
            { title: 'Tree Planting Drives', desc: 'Planted 5,000+ saplings across our project sites and surrounding areas to promote green cover in Chennai South.', icon: '🌳' },
            { title: 'Rainwater Harvesting', desc: 'All our projects include rainwater harvesting systems, and we help nearby communities set up similar infrastructure.', icon: '💧' },
            { title: 'Community Health Camps', desc: 'Free health check-up camps organized quarterly in collaboration with local hospitals for residents and neighbors.', icon: '🏥' },
            { title: 'Skill Development', desc: 'Construction skill training programs for local youth, creating employment opportunities in the real estate sector.', icon: '🔧' },
            { title: 'Disaster Relief', desc: 'Active participation in flood relief efforts in Chennai, providing shelter materials and essentials to affected families.', icon: '🤝' },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-heading font-bold text-primary-900 text-lg mb-2">{item.title}</h3>
              <p className="text-primary-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
