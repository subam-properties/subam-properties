import { Project, City, Testimonial } from '@/types'

export const cities: City[] = [
  {
    name: 'Chennai',
    slug: 'chennai',
    projectCount: 12,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
  },
  {
    name: 'Bangalore',
    slug: 'bangalore',
    projectCount: 8,
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80',
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    projectCount: 6,
    image: 'https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=800&q=80',
  },
  {
    name: 'Coimbatore',
    slug: 'coimbatore',
    projectCount: 4,
    image: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800&q=80',
  },
]

export const projects: Project[] = [
  {
    id: '1',
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
    id: '2',
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
  {
    id: '3',
    name: 'Subam Elite',
    slug: 'subam-elite',
    city: 'Bangalore',
    location: 'Whitefield',
    status: 'ready-to-move',
    price: { min: 12000000, max: 25000000 },
    configurations: ['3 BHK', '4 BHK', '5 BHK'],
    totalUnits: 200,
    totalFloors: 22,
    possessionDate: 'Ready to Move',
    reraNumber: 'KA/02/Building/0789/2022',
    heroImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Tennis Court', 'Basketball Court', 'Children\'s Play Area', 'Garden', 'Parking', 'Security', 'Power Backup', 'Lift', 'Yoga Room'],
    highlights: ['Tech park proximity', 'International school nearby', 'Premium club membership', 'Concierge services'],
    description: 'Subam Elite offers an exclusive lifestyle in Whitefield with premium amenities and proximity to IT hubs.',
  },
  {
    id: '4',
    name: 'Subam Heights',
    slug: 'subam-heights',
    city: 'Bangalore',
    location: 'Sarjapur Road',
    status: 'ongoing',
    price: { min: 9000000, max: 18000000 },
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    totalUnits: 380,
    totalFloors: 20,
    possessionDate: 'March 2026',
    reraNumber: 'KA/02/Building/0321/2024',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Garden', 'Parking', 'Security', 'Jogging Track', 'Library'],
    highlights: ['Lake view apartments', 'Rooftop infinity pool', 'Pet-friendly community', 'Solar powered common areas'],
    description: 'Subam Heights brings together modern architecture and sustainable living on Sarjapur Road.',
  },
  {
    id: '5',
    name: 'Subam Lakeside',
    slug: 'subam-lakeside',
    city: 'Hyderabad',
    location: 'Gachibowli',
    status: 'new-launch',
    price: { min: 7500000, max: 14000000 },
    configurations: ['2 BHK', '3 BHK'],
    totalUnits: 280,
    totalFloors: 16,
    possessionDate: 'September 2026',
    reraNumber: 'TS/03/Building/0654/2024',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Garden', 'Parking', 'Security', 'Power Backup', 'Rainwater Harvesting'],
    highlights: ['Financial district proximity', 'Lake-facing units', 'Business lounge', 'Work from home pods'],
    description: 'Subam Lakeside offers serene lake views with premium connectivity to Hyderabad\'s financial district.',
  },
  {
    id: '6',
    name: 'Subam Prime',
    slug: 'subam-prime',
    city: 'Hyderabad',
    location: 'HITEC City',
    status: 'ongoing',
    price: { min: 8000000, max: 16000000 },
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    totalUnits: 420,
    totalFloors: 24,
    possessionDate: 'December 2025',
    reraNumber: 'TS/03/Building/0987/2023',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Tennis Court', 'Children\'s Play Area', 'Garden', 'Parking', 'Security', 'Multipurpose Hall'],
    highlights: ['Walk to metro', 'Premium shopping mall', 'Smart security systems', 'Green certified building'],
    description: 'Subam Prime is strategically located in HITEC City, offering urban convenience with premium lifestyle.',
  },
  {
    id: '7',
    name: 'Subam Valley',
    slug: 'subam-valley',
    city: 'Coimbatore',
    location: 'Avinashi Road',
    status: 'ready-to-move',
    price: { min: 4500000, max: 8500000 },
    configurations: ['2 BHK', '3 BHK'],
    totalUnits: 180,
    totalFloors: 12,
    possessionDate: 'Ready to Move',
    reraNumber: 'TN/04/Building/0147/2022',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Garden', 'Parking', 'Security', 'Power Backup', 'Senior Citizen Area'],
    highlights: ['Mountain views', 'Airport proximity', 'Peaceful neighborhood', 'Ayurvedic wellness center'],
    description: 'Subam Valley offers a tranquil lifestyle with stunning Western Ghats views in the Manchester of South India.',
  },
  {
    id: '8',
    name: 'Subam Enclave',
    slug: 'subam-enclave',
    city: 'Coimbatore',
    location: 'RS Puram',
    status: 'new-launch',
    price: { min: 5500000, max: 10000000 },
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    totalUnits: 150,
    totalFloors: 14,
    possessionDate: 'August 2026',
    reraNumber: 'TN/04/Building/0258/2024',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Garden', 'Parking', 'Security', 'Indoor Games'],
    highlights: ['Prime city location', 'Heritage neighborhood', 'Premium schools nearby', 'Organic rooftop garden'],
    description: 'Subam Enclave brings contemporary luxury to the prestigious RS Puram locality.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Chennai',
    project: 'Subam Gardens',
    content: 'We moved into Subam Gardens last year and couldn\'t be happier. The quality of construction and attention to detail is exceptional. The amenities are world-class and the community is wonderful.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Bangalore',
    project: 'Subam Elite',
    content: 'The buying process was smooth and transparent. Subam Properties kept us informed at every stage. Our 4 BHK apartment exceeded our expectations in terms of space and finishing.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohammed Ashraf',
    location: 'Hyderabad',
    project: 'Subam Prime',
    content: 'Best investment decision I ever made. The property value has appreciated significantly, and the rental yields are excellent. Subam Properties delivers what they promise.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Lakshmi Venkatesh',
    location: 'Coimbatore',
    project: 'Subam Valley',
    content: 'After retirement, we wanted a peaceful home with good amenities. Subam Valley is perfect - beautiful views, great security, and a wonderful senior citizen community.',
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
