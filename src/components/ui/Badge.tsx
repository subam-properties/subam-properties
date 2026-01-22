import { cn } from '@/lib/utils'
import { ProjectStatus } from '@/types'

interface BadgeProps {
  status: ProjectStatus
  className?: string
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  'new-launch': {
    label: 'New Launch',
    className: 'bg-accent text-primary-900',
  },
  'ongoing': {
    label: 'Ongoing',
    className: 'bg-blue-500 text-white',
  },
  'ready-to-move': {
    label: 'Ready to Move',
    className: 'bg-green-500 text-white',
  },
  'sold-out': {
    label: 'Sold Out',
    className: 'bg-gray-500 text-white',
  },
}

export function Badge({ status, className }: BadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  )
}
