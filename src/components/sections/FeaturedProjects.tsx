import { Link } from '@/router'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '@/lib/data'
import { Container } from '@/components/layout'
import { ProjectCard } from '@/components/projects'
import { Button } from '@/components/ui'

export function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              Explore our latest offerings with premium amenities and prime locations
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile: single column. Tablet: 2 cols. Desktop: 3-4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
