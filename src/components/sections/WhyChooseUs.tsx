import { motion } from 'framer-motion'
import { Container } from '@/components/layout'

const features = [
  {
    icon: (
      <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'RERA Approved',
    description: 'All our projects are registered with RERA, ensuring complete transparency and legal compliance.',
  },
  {
    icon: (
      <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Premium Quality',
    description: 'Built with the finest materials and superior craftsmanship for a lifetime of comfort.',
  },
  {
    icon: (
      <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Value',
    description: 'Competitive pricing with flexible payment plans and excellent appreciation potential.',
  },
  {
    icon: (
      <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prime Locations',
    description: 'Strategically located near IT hubs, schools, hospitals, and major transportation.',
  },
  {
    icon: (
      <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time Delivery',
    description: 'Track record of delivering projects on schedule with no delays or excuses.',
  },
  {
    icon: (
      <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'After-Sales Support',
    description: 'Dedicated customer service team for all your post-purchase needs and maintenance.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-cream-100">
      <Container>
        <div className="text-center mb-8 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Why Choose Subam Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            25+ years of trust, quality, and commitment to excellence
          </motion.p>
        </div>

        {/* Mobile: 1 col stacked. Tablet: 2 cols. Desktop: 3 cols with larger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Mobile: horizontal icon+text. Desktop: vertical icon+text */}
              <div className="flex items-start gap-4 sm:block">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-lg lg:rounded-xl flex items-center justify-center text-accent sm:mb-4 lg:mb-6 flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-primary-900 mb-1 sm:mb-2 lg:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
