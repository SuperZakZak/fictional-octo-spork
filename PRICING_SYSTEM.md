# Pricing System Documentation

## Overview
This document describes the pricing system implemented for the Blooma merchandise printing service. The pricing is based on the official price list and supports two printing methods: **Vinyl** and **DTF**.

## Pricing Structure

### Print Sizes
The system supports 4 standard print sizes:
- **A5**: 148 × 210 mm
- **A4**: 210 × 297 mm
- **A3**: 297 × 420 mm
- **A2**: 420 × 594 mm

### Printing Methods

#### 1. VINYL (Виниловая печать)
**Description**: Colored vinyl cut with a plotter and heat transferred to fabric.

**Best for**: Clean one-color graphics, texts, logos.

**Pricing Tiers**:
| Quantity | A5 | A4 | A3 | A2 |
|----------|-----|-----|-----|-----|
| 5-10 units | €7.00 | €8.50 | €13.00 | €15.00 |
| 11-20 units | €6.50 | €8.00 | €9.00 | €11.00 |
| 21-50 units | €5.50 | €7.00 | €8.00 | €10.00 |
| 51+ units | Request custom quote | Request custom quote | Request custom quote | Request custom quote |

#### 2. DTF (DTF печать)
**Description**: Full-color print on film + heat transfer to fabric.

**Best for**: Any colors, even photos. Perfect for detailed designs and small runs.

**Pricing Tiers**:
| Quantity | A5 | A4 | A3 | A2 |
|----------|-----|-----|-----|-----|
| 5-10 units | €6.00 | €8.00 | €11.00 | €13.00 |
| 11-20 units | €5.80 | €7.50 | €10.00 | €12.00 |
| 21-50 units | €5.30 | €7.00 | €9.00 | €11.00 |
| 51+ units | Request custom quote | Request custom quote | Request custom quote | Request custom quote |

## Implementation

### Core Files

#### `/src/lib/pricing.ts`
Contains all pricing logic and helper functions:

**Key Functions**:
- `getPricePerUnit(method, size, quantity)` - Returns price per unit based on parameters
- `calculateTotalPrice(method, size, quantity)` - Calculates total order price
- `comparePrices(size, quantity)` - Compares Vinyl vs DTF pricing
- `requiresCustomQuote(quantity)` - Checks if quantity requires custom quote
- `getDiscountPercentage(quantity)` - Returns discount percentage for quantity tier

**Constants**:
- `VINYL_PRICE_TIERS` - Vinyl pricing tiers array
- `DTF_PRICE_TIERS` - DTF pricing tiers array
- `SIZE_DIMENSIONS` - Size dimensions in millimeters

#### `/src/types/index.ts`
Contains TypeScript type definitions:
- `PrintSize` - Type for print sizes ("A5" | "A4" | "A3" | "A2")
- `PriceTier` - Interface for pricing tier structure
- `PriceCalculation` - Interface for price calculation results
- `PriceComparison` - Interface for price comparison results

#### `/src/features/home/pricing-section.tsx`
Interactive price calculator component that:
- Allows users to select print size (A5, A4, A3, A2)
- Adjust quantity with a slider (5-100 units)
- Automatically compares Vinyl vs DTF pricing
- Shows which method is cheaper
- Displays volume pricing tiers
- Highlights current tier based on quantity
- Shows warning for quantities requiring custom quote

## Usage Examples

### Basic Price Calculation
```typescript
import { getPricePerUnit, calculateTotalPrice } from '@/lib/pricing';

// Get price per unit for 20 A4 prints using Vinyl
const pricePerUnit = getPricePerUnit('vinyl', 'A4', 20);
// Returns: 8.00

// Calculate total price
const totalPrice = calculateTotalPrice('vinyl', 'A4', 20);
// Returns: 160.00
```

### Price Comparison
```typescript
import { comparePrices } from '@/lib/pricing';

const comparison = comparePrices('A4', 20);
console.log(comparison);
// {
//   vinyl: { total: 160, perUnit: 8 },
//   dtf: { total: 150, perUnit: 7.5 },
//   cheaperMethod: 'dtf',
//   savings: 10,
//   savingsPercentage: 6.25
// }
```

### Check for Custom Quote
```typescript
import { requiresCustomQuote } from '@/lib/pricing';

const needsQuote = requiresCustomQuote(75);
// Returns: true (quantity > 50)
```

## Volume Pricing Logic

The pricing system uses a tiered approach:

1. **Tier 1 (5-10 units)**: Standard pricing
2. **Tier 2 (11-20 units)**: Better rates (~5-15% discount)
3. **Tier 3 (21-50 units)**: Best value (~15-25% discount)
4. **51+ units**: Custom quote required

The discount percentages vary by size and method, as defined in the price tiers.

## UI Features

### Price Calculator
- **Size Selection**: Grid of 4 buttons (A5, A4, A3, A2) with dimensions
- **Quantity Slider**: Range from 5 to 100 units
- **Price Comparison**: Side-by-side Vinyl vs DTF pricing
- **Best Value Badge**: Highlights the cheaper option
- **Savings Display**: Shows how much you save by choosing the cheaper method
- **Tier Indicator**: Highlights current pricing tier based on quantity
- **Custom Quote Alert**: Shows when quantity exceeds 50 units

### Responsive Design
- Mobile: 2-column grid for sizes
- Desktop: 4-column grid for sizes
- Adaptive layout for price comparison cards

## Future Enhancements

Potential improvements to consider:
1. Add A1 and A0 sizes
2. Implement custom quote request form for 51+ units
3. Add bulk order discounts for 100+ units
4. Support for multiple designs in one order
5. Integration with actual order/checkout system
6. Add print area customization
7. Support for special materials or finishes

## Maintenance

When updating prices:
1. Update the tier arrays in `/src/lib/pricing.ts`
2. Ensure all tier ranges are consistent
3. Test the calculator UI with various quantities
4. Update this documentation if pricing structure changes

## Notes

- All prices are in Euros (€)
- Minimum order quantity is 5 units
- Prices are per unit and decrease with volume
- DTF is generally better for multi-color designs
- Vinyl is often cheaper for simple, single-color designs
- For quantities over 50, customers should contact for custom pricing
