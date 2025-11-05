# Shopping Bag Product Added

## Summary

Added new product "Shopping Bag" to both the Products section and Configurator section of the website in English and Portuguese versions.

## Changes Made

### 1. Products Section (`src/features/home/products-section.tsx`)

- Added Shopping Bag to the `products` array:
  - **ID**: `shopping-bag`
  - **Name**: Shopping Bag
  - **Brand**: Stanley/Stella
  - **Icon**: ShoppingBag (from lucide-react)
  - **Colors**: Black, White, Gray, Midnight Blue, Natural
  - **Sizes**: One Size
  - **Price**: from €8

### 2. Configurator Section (`src/features/home/configurator-section.tsx`)

- Added Shopping Bag to the `products` array with emoji mockup 🛍️
- Created `shoppingBagColors` array with 5 color options
- Updated color selection logic to support Shopping Bag
- Shopping Bag uses the same colors as Tote Bag

### 3. English Translations (`messages/en.json`)

Added translations in the `products` section:
```json
"shoppingBag": {
  "name": "Shopping Bag",
  "brand": "Stanley/Stella",
  "description": "Eco-friendly shopping bag with handles",
  "priceFrom": "8"
}
```

Added to `contact` section:
```json
"shoppingBag": "Shopping Bag"
```

### 4. Portuguese Translations (`messages/pt.json`)

Added translations in the `products` section:
```json
"shoppingBag": {
  "name": "Saco de Compras",
  "brand": "Stanley/Stella",
  "description": "Saco de compras ecológico com alças",
  "priceFrom": "8"
}
```

Added to `contact` section:
```json
"shoppingBag": "Saco de Compras"
```

### 5. Image Placeholders

Created folder structure and placeholder images:

#### Products Section Images
- `/public/images/products/shopping-bag/`
  - `README.md` - Instructions for adding product images
  - `black.svg` - Black shopping bag placeholder
  - `white.svg` - White shopping bag placeholder

#### Configurator Section Images
- `/public/images/configurator/shopping-bag/`
  - `README.md` - Instructions for adding configurator mockups
  - `black.svg` - Black configurator mockup
  - `white.svg` - White configurator mockup

## Color Options

Shopping Bag is available in 5 colors:
1. **Black** (#000000) → `black-1.avif`
2. **Grey** (#d1d1d1) → `grey.avif`
3. **Midnight Blue** (#3d4f6b) → `midnight-blue.avif`
4. **Natural** (#f8f4e8) → `natural.avif`
5. **White** (#FFFFFF) → `white-1.avif` (or `white-2.avif`)

## Next Steps

To complete the Shopping Bag product setup, add real product images:

1. **For Products Section** (`/public/images/products/shopping-bag/`):
   - Add high-quality product photos (1200x1600px, 3:4 aspect ratio)
   - Format: AVIF
   - Required files: 
     - `black-1.avif`
     - `grey.avif`
     - `midnight-blue.avif`
     - `natural.avif`
     - `white-1.avif`
     - `white-2.avif` (optional alternative)

2. **For Configurator** (`/public/images/configurator/shopping-bag/`):
   - Add mockup images showing the bag from front view (1000x1000px, square)
   - Format: AVIF
   - Required files:
     - `black-1.avif`
     - `grey.avif`
     - `midnight-blue.avif`
     - `natural.avif`
     - `white-1.avif`
     - `white-2.avif` (optional alternative)
   - Images should have clear space in center for user designs

## Testing

The Shopping Bag product should now appear:
- ✅ In the Products section with a dedicated tab
- ✅ In the Configurator with 4 product options (grid layout)
- ✅ With proper color selection (5 colors)
- ✅ In both English and Portuguese versions
- ✅ In contact form product dropdown

## Notes

- The system automatically tries multiple image formats (AVIF → WebP → PNG → SVG)
- If no image is found, the configurator falls back to emoji mockup (🛍️)
- SVG placeholders are temporary and should be replaced with real product photos
