#!/bin/bash

echo "🎨 Скачивание placeholder изображений..."

# T-Shirt
echo "📦 T-Shirt..."
curl -s "https://via.placeholder.com/1000/000000/FFFFFF.png?text=Black+T-Shirt" -o public/images/products/tshirt/black.png
curl -s "https://via.placeholder.com/1000/FFFFFF/000000.png?text=White+T-Shirt" -o public/images/products/tshirt/white.png
curl -s "https://via.placeholder.com/1000/1a1a2e/FFFFFF.png?text=Navy+T-Shirt" -o public/images/products/tshirt/navy.png
curl -s "https://via.placeholder.com/1000/d1d1d1/000000.png?text=Gray+T-Shirt" -o public/images/products/tshirt/gray.png
curl -s "https://via.placeholder.com/1000/f5e6d3/000000.png?text=Cream+T-Shirt" -o public/images/products/tshirt/cream.png
curl -s "https://via.placeholder.com/1000/f4a89f/000000.png?text=Peach+T-Shirt" -o public/images/products/tshirt/peach.png

# Hoodie
echo "🧥 Hoodie..."
curl -s "https://via.placeholder.com/1000/000000/FFFFFF.png?text=Black+Hoodie" -o public/images/products/hoodie/black.png
curl -s "https://via.placeholder.com/1000/FFFFFF/000000.png?text=White+Hoodie" -o public/images/products/hoodie/white.png
curl -s "https://via.placeholder.com/1000/1a1a2e/FFFFFF.png?text=Navy+Hoodie" -o public/images/products/hoodie/navy.png
curl -s "https://via.placeholder.com/1000/d1d1d1/000000.png?text=Gray+Hoodie" -o public/images/products/hoodie/gray.png
curl -s "https://via.placeholder.com/1000/f5e6d3/000000.png?text=Cream+Hoodie" -o public/images/products/hoodie/cream.png
curl -s "https://via.placeholder.com/1000/f4a89f/000000.png?text=Peach+Hoodie" -o public/images/products/hoodie/peach.png

# Tote Bag
echo "👜 Tote Bag..."
curl -s "https://via.placeholder.com/1000/000000/FFFFFF.png?text=Black+Tote" -o public/images/products/tote/black.png
curl -s "https://via.placeholder.com/1000/FFFFFF/000000.png?text=White+Tote" -o public/images/products/tote/white.png
curl -s "https://via.placeholder.com/1000/1a1a2e/FFFFFF.png?text=Navy+Tote" -o public/images/products/tote/navy.png
curl -s "https://via.placeholder.com/1000/d1d1d1/000000.png?text=Gray+Tote" -o public/images/products/tote/gray.png
curl -s "https://via.placeholder.com/1000/f5e6d3/000000.png?text=Cream+Tote" -o public/images/products/tote/cream.png
curl -s "https://via.placeholder.com/1000/f4a89f/000000.png?text=Peach+Tote" -o public/images/products/tote/peach.png

echo "✅ Все placeholder изображения скачаны!"
echo "📁 Файлы находятся в: public/images/products/"
echo "🚀 Запустите 'npm run dev' для проверки"
