export const COMPANY = {
  name: "Subam Properties",
  tagline: "Building Dreams, Creating Landmarks",
  phone: "+91 98765 43210",
  email: "info@subamproperties.com",
  whatsapp: "919876543210",
  address: "123, Anna Salai, Chennai - 600002, Tamil Nadu, India",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/subamproperties",
  instagram: "https://instagram.com/subamproperties",
  linkedin: "https://linkedin.com/company/subamproperties",
  youtube: "https://youtube.com/subamproperties",
  twitter: "https://twitter.com/subamproperties",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export const CITIES = [
  { name: "Chennai", slug: "chennai" },
  { name: "Bangalore", slug: "bangalore" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Coimbatore", slug: "coimbatore" },
];

export const BHK_OPTIONS = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

export const BUDGET_RANGES = [
  { label: "Under ₹50 Lakhs", min: 0, max: 5000000 },
  { label: "₹50 Lakhs - ₹1 Cr", min: 5000000, max: 10000000 },
  { label: "₹1 Cr - ₹2 Cr", min: 10000000, max: 20000000 },
  { label: "₹2 Cr - ₹5 Cr", min: 20000000, max: 50000000 },
  { label: "Above ₹5 Cr", min: 50000000, max: Infinity },
];

export const PROJECT_STATUS_LABELS: Record<string, string> = {
  "new-launch": "New Launch",
  ongoing: "Ongoing",
  "ready-to-move": "Ready to Move",
  "sold-out": "Sold Out",
};

export const AMENITIES_ICONS: Record<string, string> = {
  "Swimming Pool": "🏊",
  Gym: "💪",
  Clubhouse: "🏛️",
  "Children's Play Area": "🎮",
  Garden: "🌳",
  Parking: "🚗",
  Security: "🔒",
  "Power Backup": "⚡",
  Lift: "🛗",
  "Jogging Track": "🏃",
  "Indoor Games": "🎱",
  "Tennis Court": "🎾",
  "Basketball Court": "🏀",
  "Yoga Room": "🧘",
  Library: "📚",
  "Multipurpose Hall": "🎭",
  "Senior Citizen Area": "👴",
  "Rainwater Harvesting": "💧",
};

export const STATS = [
  { label: "Years of Trust", value: 25, suffix: "+" },
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Families", value: 10000, suffix: "+" },
  { label: "Million Sq.ft", value: 15, suffix: "M+" },
];
