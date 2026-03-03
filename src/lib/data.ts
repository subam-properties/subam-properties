import { Project, City, Testimonial } from '@/types'

export const cities: City[] = [
  {
    name: 'Chennai',
    slug: 'chennai',
    projectCount: 3,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
  },
]

export const projects: Project[] = [
  {
    id: '1',
    name: 'Vetrivelan Nagar',
    slug: 'vetrivelan-nagar',
    city: 'Chennai',
    location: 'Potheri, Kattankulathur',
    status: 'new-launch',
    price: { min: 3000000, max: 6000000 },
    configurations: ['Plot'],
    totalUnits: 100,
    totalFloors: 0,
    possessionDate: 'Immediate',
    reraNumber: 'TN/01/Layout/2024',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80',
    ],
    amenities: ['Garden', 'Parking', 'Security', 'Power Backup', 'Rainwater Harvesting'],
    highlights: ['DTCP Approved Plots', 'Near SRM University', 'Clear Title & Documentation', 'Well-laid Roads & Drainage'],
    description: 'Vetrivelan Nagar offers premium residential plots in the rapidly developing Potheri-Kattankulathur area near Chennai. With DTCP approval, clear titles, and excellent connectivity to SRM University and IT corridors, these plots are ideal for building your dream home or a smart investment. Prices range from ₹30 Lakhs to ₹60 Lakhs.',
  },
  {
    id: '2',
    name: 'Subam Skyline',
    slug: 'subam-skyline',
    city: 'Chennai',
    location: 'OMR, Perungudi',
    status: 'new-launch',
    price: { min: 8500000, max: 15000000 },
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    totalUnits: 450,
    totalFloors: 25,
    possessionDate: 'December 2026',
    reraNumber: 'TN/01/Building/0123/2024',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Garden', 'Parking', 'Security', 'Power Backup', 'Lift', 'Jogging Track'],
    highlights: ['Sea-facing towers', 'Premium Italian marble flooring', 'Smart home automation', 'EV charging stations'],
    description: 'Subam Skyline redefines luxury living on OMR with breathtaking sea views and world-class amenities. These meticulously designed residences offer spacious layouts and premium finishes.',
  },
  {
    id: '3',
    name: 'Subam Gardens',
    slug: 'subam-gardens',
    city: 'Chennai',
    location: 'Velachery',
    status: 'ongoing',
    price: { min: 6500000, max: 12000000 },
    configurations: ['2 BHK', '3 BHK'],
    totalUnits: 320,
    totalFloors: 18,
    possessionDate: 'June 2025',
    reraNumber: 'TN/01/Building/0456/2023',
    heroImage: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Parking', 'Security', 'Power Backup', 'Lift', 'Indoor Games'],
    highlights: ['Metro connectivity', 'Vastu compliant', 'Landscaped gardens', 'Modular kitchen'],
    description: 'Subam Gardens brings nature to your doorstep with lush green landscapes and modern living spaces in the heart of Velachery.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Chennai',
    project: 'Vetrivelan Nagar',
    content: 'We bought a plot in Vetrivelan Nagar and the entire process was smooth and transparent. The documentation was clear, DTCP approved, and the location near SRM University is excellent for future growth.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Shankar',
    location: 'Chennai',
    project: 'Vetrivelan Nagar',
    content: 'Best investment decision we ever made. The plot prices have already appreciated and the area is developing rapidly. Subam Properties guided us throughout the buying process.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohammed Ashraf',
    location: 'Chennai',
    project: 'Subam Gardens',
    content: 'The quality of construction at Subam Gardens is exceptional. We moved in last year and the amenities are world-class. Subam Properties truly delivers what they promise.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Lakshmi Venkatesh',
    location: 'Chennai',
    project: 'Subam Skyline',
    content: 'We booked at Subam Skyline after visiting several projects in Chennai. The location on OMR, the design quality, and the transparent pricing convinced us. Very happy with our decision.',
    rating: 5,
  },
]

export function getProjectsByCity(city: string): Project[] {
  return projects.filter((p) => p.city.toLowerCase() === city.toLowerCase())
}

export function getProjectBySlug(city: string, slug: string): Project | undefined {
  return projects.find(
    (p) => p.city.toLowerCase() === city.toLowerCase() && p.slug === slug
  )
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.status === 'new-launch' || p.status === 'ongoing').slice(0, 4)
}

export function filterProjects(filters: {
  city?: string
  status?: string
  bhk?: string
  minPrice?: number
  maxPrice?: number
}): Project[] {
  return projects.filter((project) => {
    if (filters.city && project.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false
    }
    if (filters.status && project.status !== filters.status) {
      return false
    }
    if (filters.bhk && !project.configurations.includes(filters.bhk)) {
      return false
    }
    if (filters.minPrice && project.price.max < filters.minPrice) {
      return false
    }
    if (filters.maxPrice && project.price.min > filters.maxPrice) {
      return false
    }
    return true
  })
}
