import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from '@/router'
import { Button, Select } from '@/components/ui'
import { CITIES, BHK_OPTIONS, BUDGET_RANGES } from '@/lib/constants'

export function Hero() {
  const router = useRouter()
  const [city, setCity] = useState('')
  const [bhk, setBhk] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (city) params.set('city', city)
    if (bhk) params.set('bhk', bhk)
    if (budget) params.set('budget', budget)
    router.push(`/projects?${params.toString()}`)
  }

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Premium residential property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50" />
      </div>

      {/* Content - Desktop: two-column, Mobile: stacked */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left: Text Content */}
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl lg:flex-shrink-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium mb-3 lg:mb-4 text-sm lg:text-base tracking-widest uppercase"
            >
              Welcome to Subam Properties
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 lg:mb-6 leading-tight"
            >
              Building Dreams,
              <br />
              <span className="text-accent">Creating Landmarks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base lg:text-xl text-primary-100 mb-6 lg:mb-8 max-w-xl leading-relaxed"
            >
              Discover premium residential plots and projects in Chennai.
              DTCP approved plots and RERA approved homes with clear titles and great connectivity.
            </motion.p>

            {/* Desktop: Trust badges inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:flex items-center gap-8 mb-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">DTCP Approved</p>
                  <p className="text-primary-300 text-xs">100% Legal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">10+ Years</p>
                  <p className="text-primary-300 text-xs">Of Trust</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">500+ Families</p>
                  <p className="text-primary-300 text-xs">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 lg:mt-0 lg:w-[420px] xl:w-[460px] lg:flex-shrink-0"
          >
            <div className="bg-white p-5 lg:p-8 rounded-2xl shadow-2xl">
              <p className="text-primary-900 font-heading font-bold text-lg lg:text-xl mb-2">Find Your Dream Property</p>
              <p className="text-primary-500 text-sm mb-5 hidden lg:block">Search from our curated collection of premium plots and apartments</p>
              <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-5">
                <Select
                  label={undefined}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  options={[
                    { value: '', label: 'Select City' },
                    ...CITIES.map((c) => ({ value: c.slug, label: c.name })),
                  ]}
                />
                <Select
                  value={bhk}
                  onChange={(e) => setBhk(e.target.value)}
                  options={[
                    { value: '', label: 'BHK Type' },
                    ...BHK_OPTIONS.map((b) => ({ value: b, label: b })),
                  ]}
                />
                <Select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  options={[
                    { value: '', label: 'Budget Range' },
                    ...BUDGET_RANGES.map((b, i) => ({ value: String(i), label: b.label })),
                  ]}
                />
              </div>
              <Button onClick={handleSearch} className="w-full" size="lg">
                Search Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
