import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'

export default function OrganizationPage() {
  return (
    <>
      <PageHeader title="Organization" subtitle="Our story, mission, and the values that drive us" breadcrumbs={[{ label: 'Home', href: '/v1' }, { label: 'About', href: '/v1/organization' }]} />
      <div className="container-custom py-10 lg:py-16">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Est. 2016</p>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-primary-900 mb-6">Subam Properties — A Legacy of Trust</h2>
            <p className="text-primary-600 leading-relaxed mb-4">Subam Properties was founded in 2016 with a clear vision: to make quality real estate accessible to every family in Chennai. Starting with a single project in Guduvancheri, we have grown to become one of the most trusted names in South Chennai's real estate market.</p>
            <p className="text-primary-600 leading-relaxed mb-4">Our founder, Mr. S. Subash, recognized the potential of the GST corridor early on and established Subam Properties to deliver DTCP-approved residential plots and apartments with complete transparency and legal compliance.</p>
            <p className="text-primary-600 leading-relaxed">Today, with over 500 happy families, 1000+ plots sold, and projects spanning Guduvancheri, Kattankulathur, Potheri, Velachery, and the OMR corridor, we continue to build on our promise of quality, trust, and value.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" alt="Premium project" className="rounded-2xl h-48 lg:h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Modern home" className="rounded-2xl h-48 lg:h-64 w-full object-cover mt-8" />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary-900 p-8 lg:p-10 rounded-2xl">
            <h3 className="text-accent font-heading font-bold text-xl mb-4">Our Mission</h3>
            <p className="text-primary-200 leading-relaxed">To deliver premium, legally compliant residential properties at competitive prices, ensuring every family can own their dream home with complete peace of mind. We are committed to transparency, quality construction, and lasting customer relationships.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-accent p-8 lg:p-10 rounded-2xl">
            <h3 className="text-primary-900 font-heading font-bold text-xl mb-4">Our Vision</h3>
            <p className="text-primary-800 leading-relaxed">To become Chennai's most trusted real estate developer by 2030, expanding across Tamil Nadu while maintaining our core values of integrity, quality, and customer-first approach. We envision a future where every Subam property is a landmark of excellence.</p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary-900 mb-8 text-center">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Transparency', desc: 'Clear documentation, honest pricing, no hidden charges' },
              { title: 'Quality', desc: 'Premium materials and superior craftsmanship in every project' },
              { title: 'Trust', desc: '10+ years of delivering on our promises to 500+ families' },
              { title: 'Innovation', desc: 'Modern designs, smart amenities, sustainable practices' },
            ].map((v, i) => (
              <div key={v.title} className="bg-cream-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent font-heading font-bold text-lg mb-3">{i + 1}</div>
                <h4 className="font-heading font-bold text-primary-900 mb-2">{v.title}</h4>
                <p className="text-primary-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
