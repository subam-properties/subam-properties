import { motion } from 'framer-motion'
import { PageHeader } from '../PageHeader'
import { blogPosts } from '../mockData'

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" subtitle="Real estate insights, guides, and design inspiration" breadcrumbs={[{ label: 'Home', href: '/v1' }]} />
      <div className="container-custom py-10 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-primary-900 text-xs font-semibold rounded-full">{post.category}</span>
              </div>
              <div className="p-5">
                <p className="text-primary-400 text-xs mb-2">{post.date}</p>
                <h3 className="font-heading font-bold text-primary-900 mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  )
}
