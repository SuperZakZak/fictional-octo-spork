// Product Types
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  colors: string[];
  sizes: string[];
  basePrice: number;
  category: "apparel" | "accessories";
}

export interface ProductVariant {
  productId: string;
  color: string;
  size: string;
  sku: string;
  stock: number;
}

// Printing Types
export type PrintingMethod = "vinyl" | "dtf";

export interface PrintingOption {
  method: PrintingMethod;
  name: string;
  description: string;
  minColors: number;
  maxColors: number | null;
  pricePerUnit: number;
  features: string[];
  limitations: string[];
}

// Design Types
export interface Design {
  id: string;
  imageUrl: string;
  fileName: string;
  fileSize: number;
  width: number;
  height: number;
  position: {
    x: number;
    y: number;
  };
  scale: number;
  rotation: number;
}

// Order Types
export interface OrderItem {
  productId: string;
  variantId: string;
  quantity: number;
  printingMethod: PrintingMethod;
  design?: Design;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  status: "draft" | "pending" | "processing" | "completed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  product: string;
  quantity: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

// Quiz Types
export interface QuizQuestion {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: PrintingMethod | "both";
  }>;
}

export interface QuizResult {
  method: string;
  color: string;
  icon: string;
  description: string;
  benefits: string[];
}

// Pricing Types
export type PrintSize = "A5" | "A4" | "A3" | "A2";

export interface PriceSize {
  id: string;
  name: PrintSize;
  width: number;
  height: number;
}

export interface PriceTier {
  minQty: number;
  maxQty: number;
  prices: {
    A5: number;
    A4: number;
    A3: number;
    A2: number;
  };
}

export interface PriceCalculation {
  size: PrintSize;
  quantity: number;
  method: PrintingMethod;
  unitPrice: number;
  totalPrice: number;
  discountPercentage: number;
}

export interface PriceComparison {
  vinyl: {
    total: number;
    perUnit: number;
  };
  dtf: {
    total: number;
    perUnit: number;
  };
  cheaperMethod: PrintingMethod;
  savings: number;
  savingsPercentage: number;
}

// Use Case Types
export interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  examples: string[];
}

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// User Types (for future authentication)
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role: "customer" | "admin";
  createdAt: Date;
}

// Analytics Types
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}
