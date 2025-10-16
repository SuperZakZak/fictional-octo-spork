# AVIF Image Format - Setup Guide

## Why AVIF?

The gallery now uses **AVIF format** instead of JPEG for better performance:

### Benefits
- ✅ **50% better compression** than JPEG at same quality
- ✅ **Smaller file sizes** = faster loading
- ✅ **Better quality** at lower file sizes
- ✅ **Modern format** supported by all major browsers
- ✅ **Perfect for web** galleries and portfolios

### Browser Support
- ✅ Chrome 85+ (2020)
- ✅ Firefox 93+ (2021)
- ✅ Safari 16+ (2022)
- ✅ Edge 85+ (2020)

**Coverage: 95%+ of all users**

---

## Required Files

Place these files in `/public/gallery/`:

```
image-1.avif
image-2.avif
image-3.avif
...
image-15.avif
video-1.gif
```

**Total: 15 AVIF images + 1 GIF animation**

---

## Converting Your Images to AVIF

### Option 1: Online Tools (Easiest)

#### Squoosh (Recommended)
1. Go to https://squoosh.app/
2. Drag and drop your image
3. Select **AVIF** from the right panel
4. Set quality to **80** (good balance)
5. Download the converted file

#### AVIF.io
1. Go to https://avif.io/
2. Upload your images
3. Download converted AVIF files

### Option 2: Command Line (Batch Processing)

#### Using ImageMagick

**Install ImageMagick:**
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows (via Chocolatey)
choco install imagemagick
```

**Convert single image:**
```bash
convert input.jpg -quality 80 output.avif
```

**Batch convert all JPG files:**
```bash
for file in *.jpg; do 
  convert "$file" -quality 80 "${file%.jpg}.avif"
done
```

**Batch convert with resize:**
```bash
for file in *.jpg; do 
  convert "$file" -resize 1200x1200 -quality 80 "${file%.jpg}.avif"
done
```

#### Using Sharp (Node.js)

**Install Sharp:**
```bash
npm install sharp
```

**Create conversion script:**
```javascript
// convert-to-avif.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './input';
const outputDir = './output';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.avif'));
    
    sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✓ Converted ${file}`))
      .catch(err => console.error(`✗ Error converting ${file}:`, err));
  }
});
```

**Run:**
```bash
node convert-to-avif.js
```

### Option 3: Photoshop / GIMP

#### Photoshop (with plugin)
1. Install AVIF plugin: https://github.com/0xC0000054/avif-format
2. Open image in Photoshop
3. File → Export → Save for Web
4. Select AVIF format
5. Set quality to 80
6. Save

#### GIMP (with plugin)
1. Install AVIF plugin
2. Open image in GIMP
3. File → Export As
4. Choose .avif extension
5. Set quality to 80
6. Export

---

## Recommended Settings

### Quality Levels
- **60-70**: Small file size, good for thumbnails
- **75-80**: **Recommended** - Best balance of quality/size
- **85-90**: High quality, larger files
- **95-100**: Maximum quality, very large files

### Dimensions
- **Recommended**: 1200x1200px (1:1 square)
- **Minimum**: 800x800px
- **Maximum**: 2000x2000px

### File Sizes (approximate)
- **JPEG (quality 85)**: ~200-400KB per image
- **AVIF (quality 80)**: ~100-200KB per image
- **Savings**: ~50% smaller files!

---

## Quick Start Script

Create a script to convert all your images at once:

```bash
#!/bin/bash
# convert-gallery.sh

INPUT_DIR="./original-images"
OUTPUT_DIR="./public/gallery"

mkdir -p "$OUTPUT_DIR"

counter=1
for file in "$INPUT_DIR"/*.{jpg,jpeg,png}; do
  if [ -f "$file" ]; then
    echo "Converting $file to image-$counter.avif..."
    convert "$file" -resize 1200x1200 -quality 80 "$OUTPUT_DIR/image-$counter.avif"
    ((counter++))
  fi
done

echo "✅ Converted $((counter-1)) images to AVIF!"
```

**Usage:**
```bash
chmod +x convert-gallery.sh
./convert-gallery.sh
```

---

## Verifying AVIF Files

### Check file format:
```bash
file image-1.avif
# Output: image-1.avif: ISO Media, AVIF
```

### Check file size:
```bash
ls -lh public/gallery/*.avif
```

### View in browser:
```bash
open public/gallery/image-1.avif
# Should open in your default browser
```

---

## Fallback for Older Browsers

Next.js Image component automatically handles fallbacks:
- Modern browsers: Serve AVIF
- Older browsers: Automatically convert to WebP or JPEG

**No extra code needed!** ✨

---

## Performance Comparison

### Example: 1200x1200px image

| Format | Quality | File Size | Load Time (3G) |
|--------|---------|-----------|----------------|
| JPEG   | 85      | 350 KB    | 2.3s          |
| WebP   | 80      | 180 KB    | 1.2s          |
| **AVIF** | **80** | **150 KB** | **1.0s** |

**AVIF is 57% smaller than JPEG!** 🚀

---

## Troubleshooting

### "Cannot convert to AVIF"
- Update ImageMagick to latest version
- Check if AVIF support is enabled: `convert -list format | grep AVIF`

### "Images not showing in gallery"
- Verify files are named correctly: `image-1.avif`, `image-2.avif`, etc.
- Check files are in `/public/gallery/` folder
- Ensure files are actually AVIF format: `file image-1.avif`

### "File size too large"
- Reduce quality: try 70-75 instead of 80
- Resize images to 1200x1200px
- Use online tools like Squoosh for better compression

---

## Summary

### What to do:
1. ✅ Convert your 15 images to AVIF format
2. ✅ Name them `image-1.avif` through `image-15.avif`
3. ✅ Place in `/public/gallery/` folder
4. ✅ Add 1 GIF animation as `video-1.gif`
5. ✅ Run `npm run dev` and enjoy!

### Benefits you get:
- ⚡ 50% faster loading
- 💾 50% smaller file sizes
- 🎨 Same or better quality
- 🌐 Modern web standard
- 📱 Better mobile experience

---

**Ready to convert?** Use Squoosh.app for the easiest experience! 🎉
