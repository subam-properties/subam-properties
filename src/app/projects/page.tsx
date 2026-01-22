'use client'
import { useState } from 'react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/projects'
import { Select } from '@/components/ui'
import { CITIES } from '@/lib/constants'

export default function ProjectsPage() {
  const [city, setCity] = useState('')
  const filtered = city ? projects.filter(p => p.city.toLowerCase() === city) : projects

  return (
    <div className="pt-20">
      <section className="bg-primary-900 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Our Projects</h1>
          <p className="text-primary-200">Explore our premium residential projects</p>
        </div>
      </section>
      <section className="py-16 bg-cream-100">
        <div className="container-custom">
          <div className="bg-white p-4 rounded-xl mb-8 max-w-xs">
            <Select value={city} onChange={e => setCity(e.target.value)} options={[{ value: '', label: 'All Cities' }, ...CITIES.map(c => ({ value: c.slug, label: c.name }))]} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
