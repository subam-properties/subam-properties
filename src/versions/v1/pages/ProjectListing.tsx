import { motion } from 'framer-motion'
import { Project } from '@/types'
import { PageHeader } from '../PageHeader'
import { ProjectCard } from '@/components/projects'

interface ProjectListingProps {
  title: string
  subtitle: string
  projects: Project[]
}

export default function ProjectListing({ title, subtitle, projects }: ProjectListingProps) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={[{ label: 'Home', href: '/v1' }, { label: 'Projects', href: '/v1/projects/ongoing' }]} />
      <div className="container-custom py-10 lg:py-16">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-primary-500 lg:text-lg">No projects available in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  )
}
