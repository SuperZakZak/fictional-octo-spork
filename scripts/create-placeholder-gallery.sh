#!/bin/bash

# Alternative script to create placeholder images using Lorem Picsum API
# This creates simple colored placeholder images for the gallery

GALLERY_DIR="../public/gallery"

# Create gallery directory if it doesn't exist
mkdir -p "$GALLERY_DIR"

echo "📸 Creating gallery placeholder images..."
echo ""

# Download 15 JPEG placeholder images from Lorem Picsum
for i in {1..15}; do
  echo "Creating image-$i.jpg..."
  # Using Lorem Picsum with seed for consistent images
  curl -L -s -o "$GALLERY_DIR/image-$i.jpg" "https://picsum.photos/seed/$i/1200/1200.jpg"
  
  # Check if file was created successfully
  if [ -s "$GALLERY_DIR/image-$i.jpg" ]; then
    echo "  ✓ Success ($(du -h "$GALLERY_DIR/image-$i.jpg" | cut -f1))"
  else
    echo "  ✗ Failed to download"
  fi
  
  sleep 0.3  # Small delay to avoid rate limiting
done

echo ""
echo "🎬 Creating video placeholder (GIF)..."

# Try to download a sample GIF
curl -L -s -o "$GALLERY_DIR/video-1.gif" "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdlcnR5dWlvcGFzZGZnaGprbHp4Y3Zibm0xMjM0NTY3ODkwYXNkZmcmZXA9djFfZ2lmc19zZWFyY2gmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif"

if [ -s "$GALLERY_DIR/video-1.gif" ]; then
  echo "  ✓ Success ($(du -h "$GALLERY_DIR/video-1.gif" | cut -f1))"
else
  echo "  ✗ Failed to download GIF"
fi

echo ""
echo "✅ Done! Gallery images created in $GALLERY_DIR"
echo ""
echo "📋 Files created:"
ls -lh "$GALLERY_DIR" | grep -E '\.(jpg|gif)$' | awk '{print $9, "-", $5}'
echo ""
echo "🚀 You can now run 'npm run dev' and view the gallery section!"
