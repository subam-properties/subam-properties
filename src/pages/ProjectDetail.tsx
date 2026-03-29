import { getProjectBySlug } from '@/lib/data'
import { formatPriceRange } from '@/lib/utils'
import { Badge, Button } from '@/components/ui'
import { AMENITIES_ICONS } from '@/lib/constants'
import { Link } from '@/router'

interface ProjectDetailProps {
  city: string
  slug: string
}

export default function ProjectDetailPage({ city, slug }: ProjectDetailProps) {
  const project = getProjectBySlug(city, slug)

  if (!project) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary-900 mb-4">Project Not Found</h1>
          <p className="text-primary-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects" className="text-accent hover:underline">&larr; Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[45vh] lg:h-[50vh] min-h-[300px] lg:min-h-[400px]">
        <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="container-custom">
            <Badge status={project.status} className="mb-2 lg:mb-4" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-1 lg:mb-2">{project.name}</h1>
            <p className="text-primary-200 text-sm lg:text-lg">{project.location}, {project.city}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-6 lg:py-12">
        {/* Desktop: 3-col with sticky sidebar. Mobile: stacked */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-xl lg:text-2xl font-heading font-bold mb-3 lg:mb-4">Overview</h2>
              <p className="text-primary-700 leading-relaxed text-sm lg:text-base">{project.description}</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-4 lg:mt-6">
                <div className="bg-cream-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                  <p className="text-[10px] lg:text-sm text-primary-500">Price Range</p>
                  <p className="font-bold text-sm lg:text-base">{formatPriceRange(project.price.min, project.price.max)}</p>
                </div>
                <div className="bg-cream-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                  <p className="text-[10px] lg:text-sm text-primary-500">Configurations</p>
                  <p className="font-bold text-sm lg:text-base">{project.configurations.join(', ')}</p>
                </div>
                <div className="bg-cream-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                  <p className="text-[10px] lg:text-sm text-primary-500">Total Units</p>
                  <p className="font-bold text-sm lg:text-base">{project.totalUnits}</p>
                </div>
                <div className="bg-cream-100 p-3 lg:p-4 rounded-lg lg:rounded-xl">
                  <p className="text-[10px] lg:text-sm text-primary-500">Possession</p>
                  <p className="font-bold text-sm lg:text-base">{project.possessionDate}</p>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-xl lg:text-2xl font-heading font-bold mb-3 lg:mb-4">Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-2 lg:gap-3">
                {project.highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-sm lg:text-base">
                    <span className="text-accent">&check;</span>{h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-xl lg:text-2xl font-heading font-bold mb-3 lg:mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
                {project.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 bg-white p-2.5 lg:p-3 rounded-lg shadow-sm">
                    <span className="text-lg lg:text-xl">{AMENITIES_ICONS[a] || '\u2726'}</span>
                    <span className="text-xs lg:text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-xl lg:text-2xl font-heading font-bold mb-3 lg:mb-4">Gallery</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                {project.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`${project.name} ${i+1}`} className="rounded-lg lg:rounded-xl h-36 sm:h-40 lg:h-48 w-full object-cover hover:opacity-90 transition-opacity" />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Desktop: sticky. Mobile: full-width below content */}
          <div className="order-first lg:order-last">
            <div className="bg-white p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg lg:sticky lg:top-24">
              <h3 className="text-lg lg:text-xl font-heading font-bold mb-3 lg:mb-4">Interested?</h3>
              <p className="text-primary-600 mb-3 lg:mb-4 text-sm lg:text-base">Get in touch for pricing, floor plans, and site visits.</p>
              <form className="space-y-3 lg:space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border rounded-lg text-sm lg:text-base" required />
                <input type="tel" placeholder="Phone Number" className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border rounded-lg text-sm lg:text-base" required />
                <input type="email" placeholder="Email" className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border rounded-lg text-sm lg:text-base" />
                <Button type="submit" className="w-full">Request Callback</Button>
              </form>
              <p className="text-[10px] lg:text-xs text-primary-400 mt-3 lg:mt-4">RERA: {project.reraNumber}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-8">
          <Link href="/projects" className="text-accent hover:underline text-sm lg:text-base">&larr; Back to Projects</Link>
        </div>
      </div>
    </div>
  )
}
