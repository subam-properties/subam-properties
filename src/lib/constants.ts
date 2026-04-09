export const COMPANY = {
  name: "Subam Properties",
  tagline: "Building Dreams, Creating Landmarks",
  phone: "+91 95009 95004",
  email: "contact@subamproperties.com",
  whatsapp: "919500995004",
  address: "115, GST Main Road, Guduvancheri, Chennai - 603202, Tamil Nadu, India",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/18FeZG7ZGz/",
  instagram: "https://www.instagram.com/subam_properties?igsh=MXQ2dm15bGNxdG44OA==",
  youtube: "https://youtube.com/@subamplotschennai?si=EBCUETiy414HVYw7",
};

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Gnnb71yjELyDstHt9";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d80.0614!3d12.8437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7a1aa578ce1%3A0x1ae6acd71e94a809!2sSubam%20Housing%20and%20Properties!5e0!3m2!1sen!2sin!4v1";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export const CITIES = [
  { name: "Chennai", slug: "chennai" },
];

export const BHK_OPTIONS = ["Plot", "2 BHK", "3 BHK", "4 BHK"];

export const BUDGET_RANGES = [
  { label: "Under ₹30 Lakhs", min: 0, max: 3000000 },
  { label: "₹30 Lakhs - ₹50 Lakhs", min: 3000000, max: 5000000 },
  { label: "₹50 Lakhs - ₹1 Cr", min: 5000000, max: 10000000 },
  { label: "₹1 Cr - ₹2 Cr", min: 10000000, max: 20000000 },
  { label: "Above ₹2 Cr", min: 20000000, max: Infinity },
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
  { label: "Years of Trust", value: 10, suffix: "+" },
  { label: "Projects Delivered", value: 5, suffix: "+" },
  { label: "Happy Families", value: 500, suffix: "+" },
  { label: "Plots Sold", value: 1000, suffix: "+" },
];
