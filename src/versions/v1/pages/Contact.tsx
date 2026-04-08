import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { COMPANY, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED } from '@/lib/constants'
import { Button, Input } from '@/components/ui'

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch — we'd love to hear from you" breadcrumbs={[{ label: 'Home', href: '/' }]} />
      <div className="container-custom py-10 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-primary-900 text-lg mb-4">Head Office</h3>
              <p className="text-primary-600 text-sm leading-relaxed">{COMPANY.address}</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary-900 text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-primary-600 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className="text-sm">{COMPANY.phone}</span>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-primary-600 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-sm">{COMPANY.email}</span>
                </a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-600 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary-900 text-lg mb-2">Office Hours</h3>
              <p className="text-primary-600 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-primary-600 text-sm">Sun: 10:00 AM - 5:00 PM</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input id="c-name" label="Full Name" placeholder="Enter your name" />
                  <Input id="c-phone" label="Phone Number" type="tel" placeholder="Enter your phone number" />
                </div>
                <Input id="c-email" label="Email" type="email" placeholder="Enter your email" />
                <div>
                  <label className="block text-sm font-medium text-primary-800 mb-1">Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-primary-200 bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>Residential Plots</option>
                    <option>Apartments</option>
                    <option>Villas</option>
                    <option>Resale Property</option>
                    <option>Investment</option>
                    <option>Site Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-800 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-primary-200 bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Tell us what you're looking for..." />
                </div>
                <Button type="submit" className="w-full sm:w-auto" size="lg">Send Message</Button>
              </form>
            </div>

            {/* Google Map */}
            <div className="mt-6 rounded-2xl overflow-hidden h-64 lg:h-80">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Subam Properties Office Location"
              />
            </div>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-accent text-sm font-medium hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}
