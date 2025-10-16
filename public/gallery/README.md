# Gallery Images

This folder contains images for the gallery section on the homepage.

## Required Images

Place your gallery images here with the following naming convention:

### Images (AVIF format)
- `image-1.avif` through `image-15.avif` (15 images total)

### Video/Animation (GIF format)
- `video-1.gif` (1 animated GIF)

## Image Specifications

### Recommended Dimensions
- **Aspect Ratio**: 1:1 (square)
- **Minimum Size**: 800x800px
- **Recommended Size**: 1200x1200px
- **Maximum File Size**: 1MB per image (AVIF has excellent compression)

### Format Guidelines
- **Images**: Use AVIF format (.avif) - modern format with superior compression
- **Animations**: Use GIF format (.gif)
- AVIF provides 50% better compression than JPEG with same quality
- All modern browsers support AVIF (Chrome, Firefox, Safari, Edge)

## Placeholder Images

If you don't have images yet, you can use placeholder images from:
- https://placeholder.com/
- https://picsum.photos/
- https://unsplash.com/

Example placeholder URL: `https://picsum.photos/1200/1200?random=1`

## How to Add Images

1. Place your images in this folder (`/public/gallery/`)
2. Name them according to the convention above
3. The gallery will automatically display them with a grayscale filter
4. Hovering over images will show them in full color
5. Clicking on images will open them in a lightbox modal

## Current Configuration

The gallery is configured to display:
- 16 total items
- 15 static images (AVIF)
- 1 animated video (GIF)
- Grid layout: 2 columns on mobile, 3 on tablet, 4 on desktop
- Grayscale effect until hover
- Lightbox modal on click

## Converting to AVIF

If you have JPEG/PNG images, convert them to AVIF:

### Using Online Tools
- https://avif.io/
- https://squoosh.app/

### Using Command Line (ImageMagick)
```bash
# Convert single image
convert input.jpg -quality 80 output.avif

# Batch convert all JPG files
for file in *.jpg; do convert "$file" -quality 80 "${file%.jpg}.avif"; done
```

### Using Node.js (Sharp)
```bash
npm install sharp
node -e "const sharp = require('sharp'); sharp('input.jpg').avif({quality: 80}).toFile('output.avif');"
```
