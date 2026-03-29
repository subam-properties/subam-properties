import { Link } from '@/router'

interface Crumb {
  label: string
  href: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs: Crumb[]
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-primary-900 pt-28 lg:pt-32 pb-10 lg:pb-16">
      <div className="container-custom">
        <nav className="flex items-center gap-2 text-sm text-primary-300 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              <Link href={crumb.href} className="hover:text-accent transition-colors">{crumb.label}</Link>
            </span>
          ))}
          <span>/</span>
          <span className="text-accent">{title}</span>
        </nav>
        <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-primary-200 lg:text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
