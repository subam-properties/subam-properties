export type ProjectStatus = 'new-launch' | 'ongoing' | 'ready-to-move' | 'sold-out'

export interface Project {
  id: string
  name: string
  slug: string
  city: string
  location: string
  status: ProjectStatus
  price: {
    min: number
    max: number
  }
  configurations: string[]
  totalUnits: number
  totalFloors: number
  possessionDate: string
  reraNumber: string
  heroImage: string
  gallery: string[]
  amenities: string[]
  highlights: string[]
  description: string
}

export interface City {
  name: string
  slug: string
  projectCount: number
  image: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  project: string
  content: string
  rating: number
  image?: string
}

export interface StatItem {
  label: string
  value: number
  suffix: string
}
