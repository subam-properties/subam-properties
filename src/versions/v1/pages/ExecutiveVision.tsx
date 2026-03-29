import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'

export default function ExecutiveVisionPage() {
  return (
    <>
      <PageHeader title="Executive Vision" subtitle="Meet the leadership behind Subam Properties" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/organization' }]} />
      <div className="container-custom py-10 lg:py-16">
        {/* Founder */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-primary-900 rounded-2xl p-6 text-center">
              <div className="w-32 h-32 mx-auto bg-accent rounded-full flex items-center justify-center text-primary-900 text-5xl font-heading font-bold mb-4">S</div>
              <h3 className="text-xl font-heading font-bold text-white">Mr. S. Subash</h3>
              <p className="text-accent text-sm mt-1">Founder & Chairman</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary-900 mb-4">A Message from Our Founder</h2>
            <div className="text-primary-600 leading-relaxed space-y-4">
              <p>"When I started Subam Properties in 2016, I had one simple belief — that every hardworking family in Chennai deserves access to quality, legally approved land at fair prices. Too many families were being misled by unclear titles, unapproved layouts, and hidden costs."</p>
              <p>"We built Subam Properties on the foundation of transparency. Every plot we sell comes with DTCP or RERA approval, clear documentation, and no surprises. Our team personally verifies every land title, ensures proper road connectivity, drainage, and infrastructure before we begin sales."</p>
              <p>"Over the past decade, I've had the privilege of handing over keys to more than 500 families. Each handshake, each smile — that's what drives us forward. As we expand across Chennai's growth corridors — GST, OMR, and ECR — our commitment remains unchanged: building dreams, creating landmarks."</p>
              <p className="font-semibold text-primary-900">"Thank you for trusting Subam Properties. Your dream home is our mission."</p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary-900 mb-8 text-center">Leadership Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Mr. S. Subash', role: 'Founder & Chairman', initial: 'S' },
            { name: 'Mrs. Priya Subash', role: 'Managing Director', initial: 'P' },
            { name: 'Mr. Karthik R.', role: 'VP - Projects', initial: 'K' },
            { name: 'Mr. Vijay Kumar', role: 'VP - Sales & Marketing', initial: 'V' },
            { name: 'Mrs. Lakshmi N.', role: 'Head - Legal & Compliance', initial: 'L' },
            { name: 'Mr. Rajan M.', role: 'Chief Engineer', initial: 'R' },
          ].map((person) => (
            <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl font-heading font-bold mb-3">{person.initial}</div>
              <h4 className="font-heading font-bold text-primary-900">{person.name}</h4>
              <p className="text-primary-500 text-sm mt-1">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
