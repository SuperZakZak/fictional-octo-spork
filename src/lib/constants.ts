// Site Configuration
export const SITE_CONFIG = {
  name: "Blooma",
  tagline: "We print your vision. Beautifully.",
  description: "Professional DTF and Vinyl printing services for custom apparel and accessories.",
  url: "https://blooma.pt",
  email: "hey.b1001ma@gmail.com",
  phone: "+351922280992",
  location: "Portugal, Lisbon",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/hey.blooma",
  facebook: "https://facebook.com/blooma",
  linkedin: "https://linkedin.com/company/blooma",
  whatsapp: "https://wa.me/351922280992",
  telegram: "https://t.me/+351922280992",
} as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekday: { open: "9:00 AM", close: "6:00 PM" },
  saturday: { open: "10:00 AM", close: "2:00 PM" },
  sunday: "Closed",
} as const;

// Product Categories
export const PRODUCT_CATEGORIES = {
  TSHIRT: "tshirt",
  HOODIE: "hoodie",
  TOTE: "tote",
} as const;

// Printing Methods
export const PRINTING_METHODS = {
  VINYL: "vinyl",
  DTF: "dtf",
} as const;

// Available Colors
export const PRODUCT_COLORS = [
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "black", name: "Black", hex: "#000000" },
  { id: "gray", name: "Gray", hex: "#9CA3AF" },
  { id: "navy", name: "Navy", hex: "#1E3A8A" },
  { id: "red", name: "Red", hex: "#DC2626" },
  { id: "green", name: "Green", hex: "#10B981" },
  { id: "blue", name: "Blue", hex: "#0EA5E9" },
  { id: "pink", name: "Pink", hex: "#E74C63" },
] as const;

// Available Sizes
export const PRODUCT_SIZES = {
  TSHIRT: ["XS", "S", "M", "L", "XL", "XXL"],
  HOODIE: ["S", "M", "L", "XL", "XXL"],
  TOTE: ["One Size"],
} as const;

// Print Sizes
export const PRINT_SIZES = [
  { id: "a5", name: "A5", width: 148, height: 210, vinylBase: 3, dtfBase: 4 },
  { id: "a4", name: "A4", width: 210, height: 297, vinylBase: 5, dtfBase: 6 },
  { id: "a3", name: "A3", width: 297, height: 420, vinylBase: 8, dtfBase: 9 },
] as const;

// Quantity Discounts
export const QUANTITY_DISCOUNTS = [
  { min: 1, max: 19, discount: 0 },
  { min: 20, max: 49, discount: 0.1 },
  { min: 50, max: 99, discount: 0.2 },
  { min: 100, max: Infinity, discount: 0.3 },
] as const;

// File Upload Configuration
export const UPLOAD_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  acceptedFormats: [".png", ".jpg", ".jpeg", ".svg", ".webp", ".avif"],
  acceptedMimeTypes: ["image/png", "image/jpeg", "image/svg+xml", "image/webp", "image/avif"],
  minResolution: { width: 800, height: 800 },
  recommendedDPI: 300,
} as const;

// Animation Durations (in seconds)
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#technologies", label: "Technologies" },
  { href: "#products", label: "Products" },
  { href: "#pricing", label: "Pricing" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#configurator", label: "Configurator" },
  { href: "#contact", label: "Contact" },
] as const;

// Use Cases
export const USE_CASES = [
  {
    id: 1,
    title: "Corporate Swag",
    description: "Branded merchandise for your team and clients",
    icon: "Briefcase",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Souvenir Sales",
    description: "Custom designs for tourist shops and events",
    icon: "Gift",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Promo Uniforms",
    description: "Professional workwear with your branding",
    icon: "Users",
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Retail Collections",
    description: "Launch your own clothing line",
    icon: "Store",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 5,
    title: "Event Merchandise",
    description: "Concerts, festivals, and special occasions",
    icon: "Heart",
    color: "from-red-500 to-red-600",
  },
  {
    id: 6,
    title: "Sports Teams",
    description: "Custom jerseys and team apparel",
    icon: "Trophy",
    color: "from-orange-500 to-orange-600",
  },
] as const;

// Feature Comparisons
export const VINYL_FEATURES = [
  { text: "Perfect for simple designs", available: true },
  { text: "Matte finish", available: true },
  { text: "Durable and long-lasting", available: true },
  { text: "Limited color gradients", available: false },
  { text: "Best for 1-3 colors", available: true },
  { text: "No photo-realistic prints", available: false },
] as const;

export const DTF_FEATURES = [
  { text: "Full-color photo quality", available: true },
  { text: "Vibrant gradients", available: true },
  { text: "Soft, flexible feel", available: true },
  { text: "Complex designs welcome", available: true },
  { text: "Unlimited colors", available: true },
  { text: "Fast production", available: true },
] as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  VALIDATION: "Please check your input and try again.",
  FILE_TOO_LARGE: "File size exceeds the maximum limit.",
  INVALID_FILE_TYPE: "Invalid file type. Please upload PNG, JPG, or SVG.",
  REQUIRED_FIELD: "This field is required.",
  INVALID_EMAIL: "Please enter a valid email address.",
  INVALID_PHONE: "Please enter a valid phone number.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: "Thank you! We'll get back to you soon.",
  FILE_UPLOADED: "File uploaded successfully.",
  QUOTE_GENERATED: "Your quote has been generated.",
} as const;

// Meta Tags
export const DEFAULT_SEO = {
  title: "Blooma - Custom Printed Clothing & Accessories | DTF & Vinyl Printing",
  description: "Professional DTF and Vinyl printing services for custom apparel and accessories. High-quality t-shirts, hoodies, and tote bags with your designs.",
  keywords: [
    "DTF printing",
    "vinyl printing",
    "custom apparel",
    "custom t-shirts",
    "printed clothing",
    "Portugal",
    "Stanley/Stella",
    "WATC",
    "custom hoodies",
    "tote bags",
    "corporate merchandise",
    "promotional products",
  ],
} as const;
