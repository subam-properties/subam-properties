import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { ProcessSteps } from '@/components/sections/ProcessSteps'

export default function BookingPage() {
  return (
    <>
      <PageHeader title="Booking Procedure" subtitle="Your step-by-step guide to owning a Subam property" breadcrumbs={[{ label: 'Home', href: '/v1' }]} />
      <ProcessSteps />
      <div className="container-custom py-10 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">Documents Required</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Aadhaar Card (Buyer & Co-applicant)', 'PAN Card', 'Passport-size Photographs (4 nos.)', 'Address Proof (Utility bill / Passport)', 'Income Proof (Salary slips / IT Returns)', 'Bank Statements (6 months)', 'Cheque book / Bank account details', 'Power of Attorney (if applicable)'].map((doc, i) => (
              <motion.div key={doc} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-accent">&#10003;</span>
                <span className="text-primary-700 text-sm">{doc}</span>
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">Payment Plans</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Booking Amount', desc: '10% of total price at the time of booking', icon: '1' },
              { title: 'Agreement', desc: '40% within 30 days of booking, at time of agreement', icon: '2' },
              { title: 'Registration', desc: 'Balance 50% at the time of registration', icon: '3' },
            ].map(plan => (
              <div key={plan.title} className="bg-primary-900 p-6 rounded-xl text-center">
                <div className="w-10 h-10 mx-auto bg-accent rounded-full flex items-center justify-center text-primary-900 font-bold mb-3">{plan.icon}</div>
                <h4 className="text-white font-heading font-bold mb-2">{plan.title}</h4>
                <p className="text-primary-200 text-sm">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
