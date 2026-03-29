import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Stats } from '@/components/sections/Stats'
import { ProcessSteps } from '@/components/sections/ProcessSteps'

export default function WhyUsPage() {
  return (
    <>
      <PageHeader title="Why Us" subtitle="What makes Subam Properties the right choice for your investment" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/organization' }]} />
      <div className="container-custom py-10 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary-600 leading-relaxed lg:text-lg">Choosing a real estate developer is one of the most important decisions you'll make. At Subam Properties, we don't just sell land — we build trust. Here's why thousands of families have chosen us as their preferred builder in Chennai.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary-900 p-8 rounded-2xl text-center">
            <p className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-2">1.96 Cr</p>
            <p className="text-primary-200 text-sm">Sq.Ft Completed</p>
          </div>
          <div className="bg-primary-900 p-8 rounded-2xl text-center">
            <p className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-2">38.68 L</p>
            <p className="text-primary-200 text-sm">Sq.Ft Ongoing</p>
          </div>
          <div className="bg-primary-900 p-8 rounded-2xl text-center">
            <p className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-2">1.58 Cr</p>
            <p className="text-primary-200 text-sm">Sq.Ft Upcoming</p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <Stats />
      <ProcessSteps />
    </>
  )
}
