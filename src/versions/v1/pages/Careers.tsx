import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { Button } from '@/components/ui'
import { jobOpenings } from '../mockData'

export default function CareersPage() {
  return (
    <>
      <PageHeader title="Careers" subtitle="Join our team and build the future of Chennai's real estate" breadcrumbs={[{ label: 'Home', href: '/' }]} />
      <div className="container-custom py-10 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-4">Why Join Subam Properties?</h2>
          <p className="text-primary-600 leading-relaxed">We're a fast-growing real estate company with a mission to transform how Chennai buys property. We offer competitive salaries, growth opportunities, and the chance to be part of a team that's making homeownership dreams come true.</p>
        </motion.div>
        <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">Current Openings</h2>
        <div className="space-y-4">
          {jobOpenings.map((job, i) => (
            <motion.div key={job.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white p-5 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-primary-900 text-lg">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-primary-500">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>{job.location}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{job.type}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>{job.experience}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex-shrink-0">Apply Now</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
