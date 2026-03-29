import { Project } from '@/types'

export const completedProjects: Project[] = [
  {
    id: 'c1', name: 'Subam Enclave', slug: 'subam-enclave', city: 'Chennai',
    location: 'Guduvancheri', status: 'sold-out',
    price: { min: 2500000, max: 4500000 }, configurations: ['Plot'],
    totalUnits: 80, totalFloors: 0, possessionDate: 'Delivered 2022',
    reraNumber: 'TN/01/Layout/2020', heroImage: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80',
    gallery: [], amenities: ['Garden', 'Parking', 'Security'], highlights: ['DTCP Approved', '100% Sold'], description: '',
  },
  {
    id: 'c2', name: 'Subam Heritage', slug: 'subam-heritage', city: 'Chennai',
    location: 'Tambaram', status: 'sold-out',
    price: { min: 3500000, max: 7000000 }, configurations: ['Plot', '2 BHK'],
    totalUnits: 120, totalFloors: 0, possessionDate: 'Delivered 2021',
    reraNumber: 'TN/01/Layout/2019', heroImage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80',
    gallery: [], amenities: ['Garden', 'Parking', 'Security', 'Power Backup'], highlights: ['DTCP Approved', '100% Sold'], description: '',
  },
  {
    id: 'c3', name: 'Subam Paradise', slug: 'subam-paradise', city: 'Chennai',
    location: 'Maraimalai Nagar', status: 'sold-out',
    price: { min: 2000000, max: 3500000 }, configurations: ['Plot'],
    totalUnits: 60, totalFloors: 0, possessionDate: 'Delivered 2023',
    reraNumber: 'TN/01/Layout/2021', heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    gallery: [], amenities: ['Parking', 'Security', 'Rainwater Harvesting'], highlights: ['DTCP Approved', '100% Sold'], description: '',
  },
]

export const upcomingProjects: Project[] = [
  {
    id: 'u1', name: 'Subam Grand', slug: 'subam-grand', city: 'Chennai',
    location: 'Padappai, GST', status: 'new-launch',
    price: { min: 4000000, max: 8000000 }, configurations: ['Plot', '3 BHK'],
    totalUnits: 200, totalFloors: 0, possessionDate: 'Q3 2027',
    reraNumber: 'Coming Soon', heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [], amenities: ['Swimming Pool', 'Clubhouse', 'Garden', 'Security'], highlights: ['Premium Gated Community', 'Near GST Corridor'], description: '',
  },
  {
    id: 'u2', name: 'Subam Riverside', slug: 'subam-riverside', city: 'Chennai',
    location: 'Potheri, GST', status: 'new-launch',
    price: { min: 3500000, max: 6500000 }, configurations: ['Plot'],
    totalUnits: 150, totalFloors: 0, possessionDate: 'Q1 2028',
    reraNumber: 'Coming Soon', heroImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    gallery: [], amenities: ['Garden', 'Jogging Track', 'Security'], highlights: ['Waterfront Plots', 'Near SRM University'], description: '',
  },
]

export const resaleProjects: Project[] = [
  {
    id: 'r1', name: '600 Sq.Ft Plot - Guduvancheri', slug: 'plot-guduvancheri-600', city: 'Chennai',
    location: 'Guduvancheri, GST', status: 'ready-to-move',
    price: { min: 1800000, max: 1800000 }, configurations: ['Plot'],
    totalUnits: 1, totalFloors: 0, possessionDate: 'Immediate',
    reraNumber: 'N/A', heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    gallery: [], amenities: [], highlights: ['Clear Title', 'Immediate Registration'], description: '',
  },
  {
    id: 'r2', name: '1200 Sq.Ft Plot - Kattankulathur', slug: 'plot-kattankulathur-1200', city: 'Chennai',
    location: 'Kattankulathur, GST', status: 'ready-to-move',
    price: { min: 3600000, max: 3600000 }, configurations: ['Plot'],
    totalUnits: 1, totalFloors: 0, possessionDate: 'Immediate',
    reraNumber: 'N/A', heroImage: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80',
    gallery: [], amenities: [], highlights: ['Corner Plot', 'Near SRM'], description: '',
  },
  {
    id: 'r3', name: '2400 Sq.Ft Plot - Potheri', slug: 'plot-potheri-2400', city: 'Chennai',
    location: 'Potheri, GST', status: 'ready-to-move',
    price: { min: 6000000, max: 6000000 }, configurations: ['Plot'],
    totalUnits: 1, totalFloors: 0, possessionDate: 'Immediate',
    reraNumber: 'N/A', heroImage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80',
    gallery: [], amenities: [], highlights: ['Prime Location', 'Road-facing'], description: '',
  },
  {
    id: 'r4', name: '1000 Sq.Ft Plot - Maraimalai Nagar', slug: 'plot-maraimalai-1000', city: 'Chennai',
    location: 'Maraimalai Nagar, GST', status: 'ready-to-move',
    price: { min: 2500000, max: 2500000 }, configurations: ['Plot'],
    totalUnits: 1, totalFloors: 0, possessionDate: 'Immediate',
    reraNumber: 'N/A', heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    gallery: [], amenities: [], highlights: ['DTCP Layout', 'All amenities'], description: '',
  },
]

export const acresProjects: Project[] = [
  {
    id: 'a1', name: '5.5 Acres - Chengalpattu', slug: 'acres-chengalpattu', city: 'Chennai',
    location: 'Chengalpattu, GST', status: 'ready-to-move',
    price: { min: 25000000, max: 25000000 }, configurations: ['Plot'],
    totalUnits: 1, totalFloors: 0, possessionDate: 'Immediate',
    reraNumber: 'N/A', heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    gallery: [], amenities: [], highlights: ['Agricultural Land', 'Road Access'], description: '',
  },
  {
    id: 'a2', name: '2.3 Acres - Thiruporur', slug: 'acres-thiruporur', city: 'Chennai',
    location: 'Thiruporur, ECR', status: 'ready-to-move',
    price: { min: 18000000, max: 18000000 }, configurations: ['Plot'],
    totalUnits: 1, totalFloors: 0, possessionDate: 'Immediate',
    reraNumber: 'N/A', heroImage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80',
    gallery: [], amenities: [], highlights: ['Near ECR', 'Clear Title'], description: '',
  },
]

export const houseProjects: Project[] = [
  {
    id: 'h1', name: '3 BHK House - Guduvancheri', slug: 'house-guduvancheri-3bhk', city: 'Chennai',
    location: 'Guduvancheri, GST', status: 'ongoing',
    price: { min: 8700000, max: 8700000 }, configurations: ['3 BHK'],
    totalUnits: 1, totalFloors: 2, possessionDate: 'March 2027',
    reraNumber: 'TN/01/Building/2025', heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [], amenities: ['Parking', 'Garden'], highlights: ['Independent House', 'Modular Kitchen', 'Car Parking'], description: '',
  },
  {
    id: 'h2', name: '2 BHK House - Kattankulathur', slug: 'house-kattankulathur-2bhk', city: 'Chennai',
    location: 'Kattankulathur, GST', status: 'ready-to-move',
    price: { min: 5500000, max: 5500000 }, configurations: ['2 BHK'],
    totalUnits: 1, totalFloors: 1, possessionDate: 'Immediate',
    reraNumber: 'TN/01/Building/2024', heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    gallery: [], amenities: ['Parking'], highlights: ['Ready to Move', 'East Facing', 'Near Schools'], description: '',
  },
  {
    id: 'h3', name: '3 BHK House - Velachery', slug: 'house-velachery-3bhk', city: 'Chennai',
    location: 'Velachery', status: 'ongoing',
    price: { min: 12000000, max: 12000000 }, configurations: ['3 BHK'],
    totalUnits: 1, totalFloors: 2, possessionDate: 'June 2027',
    reraNumber: 'TN/01/Building/2025', heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [], amenities: ['Parking', 'Garden', 'Power Backup'], highlights: ['Metro Nearby', 'Premium Finish', 'Vastu Compliant'], description: '',
  },
]

export const villaProjects: Project[] = [
  {
    id: 'v1', name: 'Subam Meadows Villas', slug: 'subam-meadows', city: 'Chennai',
    location: 'Guduvancheri, GST', status: 'new-launch',
    price: { min: 15000000, max: 25000000 }, configurations: ['3 BHK', '4 BHK'],
    totalUnits: 40, totalFloors: 2, possessionDate: 'December 2027',
    reraNumber: 'TN/01/Building/2025', heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [], amenities: ['Swimming Pool', 'Clubhouse', 'Garden', 'Gym', 'Security', 'Power Backup'],
    highlights: ['Gated Villa Community', 'Private Garden per Villa', 'Smart Home Features', 'EV Charging'], description: '',
  },
  {
    id: 'v2', name: 'Subam Lake View Villas', slug: 'subam-lakeview', city: 'Chennai',
    location: 'Kelambakkam, OMR', status: 'new-launch',
    price: { min: 18000000, max: 30000000 }, configurations: ['4 BHK'],
    totalUnits: 24, totalFloors: 2, possessionDate: 'March 2028',
    reraNumber: 'TN/01/Building/2026', heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [], amenities: ['Swimming Pool', 'Clubhouse', 'Tennis Court', 'Gym', 'Jogging Track', 'Security'],
    highlights: ['Lake-facing Villas', 'Italian Marble', 'Home Theatre Room', 'Infinity Pool'], description: '',
  },
]

export const premiumProjects: Project[] = [
  {
    id: 'p1', name: 'Subam Crown Towers', slug: 'subam-crown-towers', city: 'Chennai',
    location: 'OMR, Sholinganallur', status: 'new-launch',
    price: { min: 20000000, max: 45000000 }, configurations: ['3 BHK', '4 BHK'],
    totalUnits: 120, totalFloors: 30, possessionDate: 'December 2028',
    reraNumber: 'TN/01/Building/2026', heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [], amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Tennis Court', 'Basketball Court', 'Jogging Track', 'Yoga Room', 'Library'],
    highlights: ['Sky Lounge on 30th Floor', 'Private Elevator per Unit', 'Concierge Service', 'Rooftop Infinity Pool'], description: '',
  },
]

export const blogPosts = [
  { id: '1', title: 'Top 5 Reasons to Invest in Guduvancheri Real Estate in 2026', category: 'Investment', date: 'Mar 15, 2026', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', excerpt: 'Guduvancheri is emerging as one of Chennai\'s hottest real estate corridors. Here\'s why smart investors are rushing in...' },
  { id: '2', title: 'DTCP vs CMDA Approval: What Every Buyer Must Know', category: 'Legal Guide', date: 'Mar 10, 2026', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', excerpt: 'Understanding the difference between DTCP and CMDA approvals is crucial before buying any property in Tamil Nadu...' },
  { id: '3', title: 'How to Check Patta Chitta Online in Tamil Nadu', category: 'Legal Guide', date: 'Feb 28, 2026', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', excerpt: 'A step-by-step guide to verify your land records online through the Tamil Nadu government portal...' },
  { id: '4', title: 'Modern House Front Elevation Designs for 2026', category: 'Design Ideas', date: 'Feb 20, 2026', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', excerpt: 'Looking for inspiration for your new home? Check out these stunning front elevation designs trending in 2026...' },
  { id: '5', title: 'GST Corridor: The Next Big Growth Hub in Chennai', category: 'Area Guide', date: 'Feb 12, 2026', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80', excerpt: 'From IT parks to metro connectivity, the GST corridor is set to transform Chennai\'s southern suburbs...' },
  { id: '6', title: 'Home Loan Guide: Interest Rates, EMI & Tax Benefits', category: 'Finance', date: 'Jan 30, 2026', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', excerpt: 'Everything you need to know about getting a home loan in India — from eligibility to tax savings under Section 80C...' },
]

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', category: 'Projects', caption: 'Subam Skyline - OMR' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', category: 'Projects', caption: 'Subam Gardens - Velachery' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', category: 'Projects', caption: 'Subam Meadows Villas' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', category: 'Projects', caption: 'Subam Paradise - Maraimalai Nagar' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', category: 'Construction', caption: 'Construction Progress' },
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', category: 'Construction', caption: 'Subam Crown Towers' },
  { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', category: 'Plots', caption: 'Vetrivelan Nagar Plots' },
  { src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80', category: 'Plots', caption: 'Plot Development' },
  { src: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80', category: 'Plots', caption: 'Residential Layout' },
  { src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', category: 'Events', caption: 'Project Launch Event' },
  { src: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&q=80', category: 'Events', caption: 'Customer Meet' },
  { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', category: 'Events', caption: 'Awards Ceremony' },
]

export const constructionSpecs = [
  { title: 'Foundation', spec: 'RCC foundation with M20 grade concrete, depth as per soil test report' },
  { title: 'Structure', spec: 'RCC framed structure with M25 grade concrete and Fe500 TMT steel bars' },
  { title: 'Brickwork', spec: '9" external walls and 4.5" internal walls with wire-cut clay bricks' },
  { title: 'Plastering', spec: 'Double coat cement plastering — 12mm external, 10mm internal with sand finish' },
  { title: 'Flooring', spec: 'Vitrified tiles (2x2 ft) in living/bedrooms, anti-skid tiles in bathrooms & kitchen' },
  { title: 'Electrical', spec: 'Concealed copper wiring with Anchor/Havells modular switches & MCB distribution board' },
  { title: 'Plumbing', spec: 'CPVC pipes for hot water, uPVC for cold water, PVC for drainage with ISI standards' },
  { title: 'Doors & Windows', spec: 'Teak wood main door (7\'x3.5\'), flush doors for internal, UPVC/aluminum sliding windows' },
  { title: 'Painting', spec: 'Internal: 2 coats putty + 1 primer + 2 coats Asian/Berger emulsion. External: Weatherproof texture' },
  { title: 'Kitchen', spec: 'Granite platform with stainless steel sink, ceramic wall tiles up to 2ft above counter' },
  { title: 'Bathroom', spec: 'Anti-skid floor tiles, glazed wall tiles up to 7ft, Jaquar/Parryware CP fittings' },
  { title: 'Roofing', spec: 'RCC roof slab with waterproofing treatment, cool roof coating for terrace' },
]

export const threeDDesigns = [
  { id: '1', title: '30x60 Modern 3BHK House Plan', bhk: '3 BHK', sqft: '1800 sq.ft', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
  { id: '2', title: '40x50 Elegant 4BHK House Plan', bhk: '4 BHK', sqft: '2000 sq.ft', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
  { id: '3', title: '20x40 Compact 2BHK House Plan', bhk: '2 BHK', sqft: '800 sq.ft', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
  { id: '4', title: '36x58 Premium 4BHK Duplex', bhk: '4 BHK', sqft: '2088 sq.ft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { id: '5', title: '25x50 Modern 3BHK Duplex', bhk: '3 BHK', sqft: '1250 sq.ft', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80' },
  { id: '6', title: '20x30 Budget 1BHK House Plan', bhk: '1 BHK', sqft: '600 sq.ft', image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=600&q=80' },
]

export const jobOpenings = [
  { title: 'Sales Executive', location: 'Guduvancheri', type: 'Full-time', experience: '2-5 years' },
  { title: 'Site Engineer', location: 'Chennai (Multiple Sites)', type: 'Full-time', experience: '3-7 years' },
  { title: 'Marketing Manager', location: 'Guduvancheri', type: 'Full-time', experience: '5-10 years' },
  { title: 'Accountant', location: 'Guduvancheri', type: 'Full-time', experience: '2-4 years' },
  { title: 'Customer Relationship Executive', location: 'Guduvancheri', type: 'Full-time', experience: '1-3 years' },
]
