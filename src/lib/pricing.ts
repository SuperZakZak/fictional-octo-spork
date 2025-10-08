/**
 * Pricing configuration based on official price list
 * Updated: 2025-10-07
 */

export type PrintSize = "A5" | "A4" | "A3" | "A2";
export type PrintMethod = "vinyl" | "dtf";

/**
 * Price tiers based on quantity ranges
 */
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

/**
 * VINYL Pricing Tiers
 * Colored vinyl cut with a plotter and heat transferred to fabric.
 * Clean one color graphics, texts, logos.
 */
export const VINYL_PRICE_TIERS: PriceTier[] = [
  {
    minQty: 5,
    maxQty: 10,
    prices: {
      A5: 7,
      A4: 8.5,
      A3: 13,
      A2: 15,
    },
  },
  {
    minQty: 11,
    maxQty: 20,
    prices: {
      A5: 6.5,
      A4: 8,
      A3: 9,
      A2: 11,
    },
  },
  {
    minQty: 21,
    maxQty: 50,
    prices: {
      A5: 5.5,
      A4: 7,
      A3: 8,
      A2: 10,
    },
  },
];

/**
 * DTF Pricing Tiers
 * Full-color print on film + heat transfer to fabric.
 * Any colors, even photos.
 * Perfect for detailed designs and small runs.
 */
export const DTF_PRICE_TIERS: PriceTier[] = [
  {
    minQty: 5,
    maxQty: 10,
    prices: {
      A5: 6,
      A4: 8,
      A3: 11,
      A2: 13,
    },
  },
  {
    minQty: 11,
    maxQty: 20,
    prices: {
      A5: 5.8,
      A4: 7.5,
      A3: 10,
      A2: 12,
    },
  },
  {
    minQty: 21,
    maxQty: 50,
    prices: {
      A5: 5.3,
      A4: 7,
      A3: 9,
      A2: 11,
    },
  },
];

/**
 * Size dimensions in millimeters
 */
export const SIZE_DIMENSIONS = {
  A5: { width: 148, height: 210 },
  A4: { width: 210, height: 297 },
  A3: { width: 297, height: 420 },
  A2: { width: 420, height: 594 },
} as const;

/**
 * Get price per unit based on method, size, and quantity
 */
export function getPricePerUnit(
  method: PrintMethod,
  size: PrintSize,
  quantity: number
): number {
  const tiers = method === "vinyl" ? VINYL_PRICE_TIERS : DTF_PRICE_TIERS;

  // Find the appropriate tier
  const tier = tiers.find(
    (t) => quantity >= t.minQty && quantity <= t.maxQty
  );

  // If quantity is less than minimum (5), use the first tier
  if (!tier && quantity < 5) {
    return tiers[0].prices[size];
  }

  // If quantity is more than 50, return null (requires custom quote)
  if (!tier && quantity > 50) {
    // For quantities over 50, we'll use the best tier (21-50) as a base
    // In real scenario, this should trigger a "request quote" flow
    return tiers[tiers.length - 1].prices[size];
  }

  return tier ? tier.prices[size] : 0;
}

/**
 * Calculate total price for an order
 */
export function calculateTotalPrice(
  method: PrintMethod,
  size: PrintSize,
  quantity: number
): number {
  const pricePerUnit = getPricePerUnit(method, size, quantity);
  return pricePerUnit * quantity;
}

/**
 * Get discount percentage based on quantity
 */
export function getDiscountPercentage(quantity: number): number {
  if (quantity >= 21 && quantity <= 50) return 20; // Approximate discount
  if (quantity >= 11 && quantity <= 20) return 10; // Approximate discount
  return 0;
}

/**
 * Compare prices between vinyl and DTF
 */
export function comparePrices(size: PrintSize, quantity: number) {
  const vinylTotal = calculateTotalPrice("vinyl", size, quantity);
  const dtfTotal = calculateTotalPrice("dtf", size, quantity);

  const cheaperMethod: PrintMethod = vinylTotal < dtfTotal ? "vinyl" : "dtf";
  const savings = Math.abs(vinylTotal - dtfTotal);
  const savingsPercentage = ((savings / Math.max(vinylTotal, dtfTotal)) * 100).toFixed(1);

  return {
    vinyl: {
      total: vinylTotal,
      perUnit: getPricePerUnit("vinyl", size, quantity),
    },
    dtf: {
      total: dtfTotal,
      perUnit: getPricePerUnit("dtf", size, quantity),
    },
    cheaperMethod,
    savings,
    savingsPercentage: parseFloat(savingsPercentage),
  };
}

/**
 * Check if quantity requires custom quote
 */
export function requiresCustomQuote(quantity: number): boolean {
  return quantity > 50;
}
