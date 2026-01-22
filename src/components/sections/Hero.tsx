'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
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
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury apartment building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4"
          >
            Welcome to Subam Properties
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Building Dreams,
            <br />
            <span className="text-accent">Creating Landmarks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl"
          >
            Discover premium residential projects across South India.
            RERA approved homes with world-class amenities and unmatched quality.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-2xl max-w-2xl"
          >
            <p className="text-primary-900 font-semibold mb-4">Find Your Dream Home</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select
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
                  { value: '', label: 'Budget' },
                  ...BUDGET_RANGES.map((b, i) => ({ value: String(i), label: b.label })),
                ]}
              />
            </div>
            <Button onClick={handleSearch} className="w-full md:w-auto">
              Search Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
