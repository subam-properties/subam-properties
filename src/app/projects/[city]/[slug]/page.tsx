import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/data'
import { formatPriceRange } from '@/lib/utils'
import { Badge, Button } from '@/components/ui'
import { AMENITIES_ICONS } from '@/lib/constants'
import Link from 'next/link'

export function generateStaticParams() {
  return projects.map(p => ({ city: p.city.toLowerCase(), slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { city: string; slug: string } }) {
  const project = getProjectBySlug(params.city, params.slug)
  if (!project) notFound()

  return (
    <div className="pt-20">
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <Badge status={project.status} className="mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{project.name}</h1>
            <p className="text-primary-200 text-lg">{project.location}, {project.city}</p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
              <p className="text-primary-700 leading-relaxed">{project.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-cream-100 p-4 rounded-xl"><p className="text-sm text-primary-500">Price Range</p><p className="font-bold">{formatPriceRange(project.price.min, project.price.max)}</p></div>
                <div className="bg-cream-100 p-4 rounded-xl"><p className="text-sm text-primary-500">Configurations</p><p className="font-bold">{project.configurations.join(', ')}</p></div>
                <div className="bg-cream-100 p-4 rounded-xl"><p className="text-sm text-primary-500">Total Units</p><p className="font-bold">{project.totalUnits}</p></div>
                <div className="bg-cream-100 p-4 rounded-xl"><p className="text-sm text-primary-500">Possession</p><p className="font-bold">{project.possessionDate}</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.highlights.map(h => <li key={h} className="flex items-center gap-2"><span className="text-accent">✓</span>{h}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-xl">{AMENITIES_ICONS[a] || '✦'}</span>
                    <span className="text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, i) => <img key={i} src={img} alt={`${project.name} ${i+1}`} className="rounded-xl h-48 w-full object-cover" />)}
              </div>
            </section>
          </div>

          <div>
            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
              <h3 className="text-xl font-heading font-bold mb-4">Interested?</h3>
              <p className="text-primary-600 mb-4">Get in touch for pricing, floor plans, and site visits.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg" required />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg" required />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
                <Button type="submit" className="w-full">Request Callback</Button>
              </form>
              <p className="text-xs text-primary-400 mt-4">RERA: {project.reraNumber}</p>
            </div>
          </div>
        </div>

        <div className="mt-8"><Link href="/projects" className="text-accent hover:underline">← Back to Projects</Link></div>
      </div>
    </div>
  )
}
