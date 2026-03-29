import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { Button, Input } from '@/components/ui'

export default function InvestorsPage() {
  return (
    <>
      <PageHeader title="Investors" subtitle="Grow your wealth with premium real estate investments" breadcrumbs={[{ label: 'Home', href: '/v1' }]} />
      <div className="container-custom py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary-900 mb-6">Why Invest with Subam Properties?</h2>
            <div className="space-y-4 text-primary-600 leading-relaxed">
              <p>Chennai's real estate market is one of the fastest-growing in India, and Subam Properties offers strategic investment opportunities across the city's key growth corridors — GST, OMR, and ECR.</p>
              <p>Our DTCP-approved plots and RERA-registered apartments offer investors the security of legal compliance combined with excellent appreciation potential. Properties along the GST corridor have seen 15-25% annual appreciation over the past 5 years.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Avg. Annual Appreciation', value: '18-25%' },
                { label: 'Projects Delivered', value: '5+' },
                { label: 'Investor Returns', value: 'Consistent' },
                { label: 'Legal Compliance', value: '100%' },
              ].map(s => (
                <div key={s.label} className="bg-cream-100 p-4 rounded-xl text-center">
                  <p className="text-2xl font-heading font-bold text-primary-900">{s.value}</p>
                  <p className="text-xs text-primary-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-2">Investment Enquiry</h3>
              <p className="text-primary-500 text-sm mb-6">Share your details and our investment team will reach out with tailored opportunities.</p>
              <form className="space-y-4">
                <Input id="i-name" label="Full Name" placeholder="Your name" />
                <Input id="i-phone" label="Phone" type="tel" placeholder="Phone number" />
                <Input id="i-email" label="Email" type="email" placeholder="Email address" />
                <div>
                  <label className="block text-sm font-medium text-primary-800 mb-1">Investment Budget</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-primary-200 bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>Under ₹25 Lakhs</option>
                    <option>₹25 Lakhs - ₹50 Lakhs</option>
                    <option>₹50 Lakhs - ₹1 Crore</option>
                    <option>₹1 Crore - ₹5 Crore</option>
                    <option>Above ₹5 Crore</option>
                  </select>
                </div>
                <Button type="submit" className="w-full" size="lg">Submit Enquiry</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
