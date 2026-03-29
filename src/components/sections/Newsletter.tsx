import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout'
import { Button, Input } from '@/components/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-accent">
      <Container>
        {/* Mobile: stacked center. Desktop: side-by-side */}
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="text-center lg:text-left lg:max-w-lg mb-6 lg:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary-900 mb-2 lg:mb-3"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-800 text-sm lg:text-lg"
            >
              Subscribe to receive updates on new projects, exclusive offers, and real estate insights.
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-xl mx-auto lg:mx-0 lg:flex-1"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit" variant="primary" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </motion.form>
        </div>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-800 font-medium text-center lg:text-left"
          >
            Thank you for subscribing! We&apos;ll keep you updated.
          </motion.p>
        )}
      </Container>
    </section>
  )
}
