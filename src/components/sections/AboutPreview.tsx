import { motion } from 'framer-motion'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { Link } from '@/router'

interface AboutPreviewProps {
  learnMoreHref?: string
}

export function AboutPreview({ learnMoreHref = '/about' }: AboutPreviewProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                alt="Premium property"
                className="rounded-2xl h-40 lg:h-52 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="Modern interior"
                className="rounded-2xl h-32 lg:h-40 w-full object-cover"
              />
            </div>
            <div className="pt-6 lg:pt-8">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
                alt="Luxury home"
                className="rounded-2xl h-48 lg:h-64 w-full object-cover"
              />
              <div className="mt-4 bg-accent rounded-xl p-4 text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold text-primary-900">10+</p>
                <p className="text-primary-800 text-sm font-medium">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="text-2xl lg:text-4xl font-heading font-bold text-primary-900 mb-4 lg:mb-6">
              Subam Properties — Building Dreams Since 2016
            </h2>
            <p className="text-primary-600 leading-relaxed mb-4 lg:mb-6">
              Subam Properties is a trusted name in Chennai's real estate market, specializing in premium residential plots and apartments. With DTCP and RERA approved projects across key growth corridors, we've helped over 500 families find their dream homes.
            </p>
            <p className="text-primary-600 leading-relaxed mb-6 lg:mb-8">
              Our commitment to transparency, quality construction, and customer satisfaction has made us one of the most reliable developers in the region. From Guduvancheri to OMR, our projects are strategically located for growth and connectivity.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6 lg:mb-8">
              <div className="text-center p-3 bg-cream-100 rounded-xl">
                <p className="text-2xl font-heading font-bold text-primary-900">5+</p>
                <p className="text-xs text-primary-500">Projects</p>
              </div>
              <div className="text-center p-3 bg-cream-100 rounded-xl">
                <p className="text-2xl font-heading font-bold text-primary-900">500+</p>
                <p className="text-xs text-primary-500">Families</p>
              </div>
              <div className="text-center p-3 bg-cream-100 rounded-xl">
                <p className="text-2xl font-heading font-bold text-primary-900">1000+</p>
                <p className="text-xs text-primary-500">Plots Sold</p>
              </div>
            </div>

            <Link href={learnMoreHref}>
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
