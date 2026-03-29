import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { testimonials } from '@/lib/data'

const extraTestimonials = [
  { id: '5', name: 'Suresh Babu', location: 'Chennai', project: 'Subam Enclave', content: 'The documentation process was seamless. Subam Properties took care of everything from DTCP verification to registration. Highly recommended for first-time buyers.', rating: 5 },
  { id: '6', name: 'Kavitha Ramesh', location: 'Chennai', project: 'Vetrivelan Nagar', content: 'We were skeptical about buying plots initially, but Subam Properties won us over with their transparent approach. The plot value has already increased by 30% since purchase.', rating: 5 },
  { id: '7', name: 'Dr. Anand Kumar', location: 'Chennai', project: 'Subam Gardens', content: 'As a doctor with little time for property dealings, I appreciated how Subam Properties handled everything professionally. The amenities at Subam Gardens are truly world-class.', rating: 5 },
  { id: '8', name: 'Meena Sundaram', location: 'Chennai', project: 'Subam Skyline', content: 'The construction quality at Subam Skyline exceeded our expectations. From the lobby to our 3BHK apartment, every detail shows care and premium craftsmanship.', rating: 5 },
]

const allTestimonials = [...testimonials, ...extraTestimonials]

export default function TestimonialsFullPage() {
  return (
    <>
      <PageHeader title="Testimonials" subtitle="Real stories from our happy customers" breadcrumbs={[{ label: 'Home', href: '/v1' }, { label: 'About', href: '/v1/organization' }]} />
      <div className="container-custom py-10 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTestimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-primary-600 text-sm leading-relaxed mb-4">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-primary-100">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary-900 font-bold">{t.name.charAt(0)}</div>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">{t.name}</p>
                  <p className="text-primary-500 text-xs">{t.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
