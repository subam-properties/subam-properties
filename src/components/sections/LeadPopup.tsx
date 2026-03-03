'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Input } from '@/components/ui'
import { COMPANY } from '@/lib/constants'

interface LeadPopupProps {
  isOpen?: boolean
  onClose?: () => void
  source?: string
}

export function LeadPopup({ isOpen: controlledOpen, onClose, source = 'welcome' }: LeadPopupProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
  })

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  // Auto-show popup after 5 seconds (only for uncontrolled/welcome mode)
  useEffect(() => {
    if (isControlled) return

    const hasSeenPopup = sessionStorage.getItem('subam_popup_seen')
    if (hasSeenPopup) return

    const timer = setTimeout(() => {
      setInternalOpen(true)
      sessionStorage.setItem('subam_popup_seen', 'true')
    }, 5000)

    return () => clearTimeout(timer)
  }, [isControlled])

  const handleClose = () => {
    if (isControlled) {
      onClose?.()
    } else {
      setInternalOpen(false)
    }
    // Reset form after close animation
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', interest: '' })
    }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const form = new FormData()
      form.append('name', formData.name || 'Not provided')
      form.append('phone', formData.phone || 'Not provided')
      form.append('email', formData.email || 'Not provided')
      form.append('interest', formData.interest || 'Not specified')
      form.append('_subject', `New Lead from Subam Properties Website [${source}]`)
      form.append('_template', 'table')
      form.append('_captcha', 'false')

      await fetch('https://formsubmit.co/ajax/athithyavijay@gmail.com', {
        method: 'POST',
        body: form,
      })

      setSubmitted(true)
    } catch {
      // Still show success - the lead info is valuable
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 hover:bg-primary-200 text-primary-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-900 to-primary-800 px-8 py-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent font-heading font-bold text-lg">SUBAM</span>
                    <span className="text-white font-heading font-bold text-lg">PROPERTIES</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-white">
                    {source === 'cta' ? 'Talk to Our Sales Team' : 'Welcome! Let Us Help You'}
                  </h2>
                  <p className="text-primary-200 mt-1 text-sm">
                    {source === 'cta'
                      ? 'Share your details and we\'ll get back to you right away.'
                      : 'Share your details and we\'ll help you find the perfect property.'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
                  <Input
                    id="lead-name"
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />

                  <Input
                    id="lead-phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />

                  <Input
                    id="lead-email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />

                  <div className="w-full">
                    <label htmlFor="lead-interest" className="block text-sm font-medium text-primary-800 mb-1">
                      Interested In
                    </label>
                    <select
                      id="lead-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select your interest</option>
                      <option value="Residential Plots">Residential Plots</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Investment">Investment Opportunity</option>
                      <option value="Site Visit">Schedule a Site Visit</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : source === 'cta' ? 'Contact Sales' : 'Get in Touch'}
                  </Button>

                  <p className="text-xs text-primary-400 text-center">
                    All fields are optional. We respect your privacy.
                  </p>
                </form>

                {/* Trust bar */}
                <div className="px-8 pb-6">
                  <div className="flex items-center justify-center gap-4 text-xs text-primary-500 border-t border-primary-100 pt-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      10+ Years Trusted
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      DTCP Approved
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      500+ Families
                    </span>
                  </div>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="px-8 py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-primary-600 mb-6">
                  Our sales team will reach out to you shortly. Meanwhile, feel free to explore our projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 border-2 border-primary-900 text-primary-900 rounded-lg hover:bg-primary-900 hover:text-white transition-colors"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
