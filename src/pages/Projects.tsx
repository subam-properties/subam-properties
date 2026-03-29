import { useState } from 'react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/projects'
import { Select } from '@/components/ui'
import { CITIES } from '@/lib/constants'

export default function ProjectsPage() {
  const [city, setCity] = useState('')
  const filtered = city ? projects.filter(p => p.city.toLowerCase() === city) : projects

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-primary-900 py-10 lg:py-16">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-2 lg:mb-4">Our Projects</h1>
          <p className="text-primary-200 text-sm lg:text-base">Explore our premium residential projects</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-16 bg-cream-100">
        <div className="container-custom">
          {/* Desktop: filter bar with more options. Mobile: compact dropdown */}
          <div className="bg-white p-3 lg:p-4 rounded-xl mb-6 lg:mb-8 max-w-xs">
            <Select
              value={city}
              onChange={e => setCity(e.target.value)}
              options={[
                { value: '', label: 'All Cities' },
                ...CITIES.map(c => ({ value: c.slug, label: c.name })),
              ]}
            />
          </div>

          {/* Mobile: 1 col. Tablet: 2 cols. Desktop: 3 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary-500 text-lg">No projects found for the selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
