import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { Container } from '@/components/layout'

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-primary-900">
      <Container>
        <div className="text-center mb-8 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle text-primary-200 mx-auto"
          >
            Real stories from happy homeowners who trusted Subam Properties
          </motion.p>
        </div>

        {/* Mobile: single column. Tablet: 2 cols. Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-800 p-5 lg:p-6 rounded-xl lg:rounded-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 lg:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 lg:w-5 lg:h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Desktop: large quote mark */}
              <div className="hidden lg:block text-accent/30 text-5xl font-serif leading-none mb-2">&ldquo;</div>

              {/* Content */}
              <p className="text-primary-100 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-sm">
                <span className="lg:hidden">&ldquo;</span>{testimonial.content}<span className="lg:hidden">&rdquo;</span>
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center text-primary-900 font-bold text-sm lg:text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm lg:text-base">{testimonial.name}</p>
                  <p className="text-primary-300 text-xs lg:text-sm">
                    {testimonial.project}, {testimonial.location}
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
