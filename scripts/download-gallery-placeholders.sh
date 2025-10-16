#!/bin/bash

# Script to download placeholder images for the gallery section
# This will download 15 JPEG images and 1 GIF animation

GALLERY_DIR="../public/gallery"

# Create gallery directory if it doesn't exist
mkdir -p "$GALLERY_DIR"

echo "📸 Downloading gallery placeholder images..."
echo ""

# Download 15 JPEG placeholder images
for i in {1..15}; do
  echo "Downloading image-$i.jpg..."
  curl -s -o "$GALLERY_DIR/image-$i.jpg" "https://picsum.photos/1200/1200?random=$i"
  sleep 0.5  # Small delay to avoid rate limiting
done

echo ""
echo "🎬 Downloading video placeholder (GIF)..."
# Download a sample GIF (design/printing related)
curl -s -o "$GALLERY_DIR/video-1.gif" "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif"

echo ""
echo "✅ Done! Gallery images downloaded to $GALLERY_DIR"
echo ""
echo "📋 Files created:"
ls -lh "$GALLERY_DIR" | grep -E '\.(jpg|gif)$'
echo ""
echo "🚀 You can now run 'npm run dev' and view the gallery section!"
