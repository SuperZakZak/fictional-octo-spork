#!/bin/bash

echo "🎨 Создание SVG placeholder изображений..."

# Function to create SVG
create_svg() {
    local product=$1
    local color_name=$2
    local color_hex=$3
    local text_color=$4
    local output_path=$5
    
    cat > "$output_path" << EOF
<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="1000" height="1000" fill="$color_hex"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="$text_color" text-anchor="middle" dominant-baseline="middle">
    $color_name $product
  </text>
</svg>
EOF
}

# T-Shirt
echo "📦 Creating T-Shirt placeholders..."
create_svg "T-Shirt" "Black" "#000000" "#FFFFFF" "public/images/products/tshirt/black.svg"
create_svg "T-Shirt" "White" "#FFFFFF" "#000000" "public/images/products/tshirt/white.svg"
create_svg "T-Shirt" "Navy" "#1a1a2e" "#FFFFFF" "public/images/products/tshirt/navy.svg"
create_svg "T-Shirt" "Gray" "#d1d1d1" "#000000" "public/images/products/tshirt/gray.svg"
create_svg "T-Shirt" "Cream" "#f5e6d3" "#000000" "public/images/products/tshirt/cream.svg"
create_svg "T-Shirt" "Peach" "#f4a89f" "#000000" "public/images/products/tshirt/peach.svg"

# Hoodie
echo "🧥 Creating Hoodie placeholders..."
create_svg "Hoodie" "Black" "#000000" "#FFFFFF" "public/images/products/hoodie/black.svg"
create_svg "Hoodie" "White" "#FFFFFF" "#000000" "public/images/products/hoodie/white.svg"
create_svg "Hoodie" "Navy" "#1a1a2e" "#FFFFFF" "public/images/products/hoodie/navy.svg"
create_svg "Hoodie" "Gray" "#d1d1d1" "#000000" "public/images/products/hoodie/gray.svg"
create_svg "Hoodie" "Cream" "#f5e6d3" "#000000" "public/images/products/hoodie/cream.svg"
create_svg "Hoodie" "Peach" "#f4a89f" "#000000" "public/images/products/hoodie/peach.svg"

# Tote Bag
echo "👜 Creating Tote Bag placeholders..."
create_svg "Tote" "Black" "#000000" "#FFFFFF" "public/images/products/tote/black.svg"
create_svg "Tote" "White" "#FFFFFF" "#000000" "public/images/products/tote/white.svg"
create_svg "Tote" "Navy" "#1a1a2e" "#FFFFFF" "public/images/products/tote/navy.svg"
create_svg "Tote" "Gray" "#d1d1d1" "#000000" "public/images/products/tote/gray.svg"
create_svg "Tote" "Cream" "#f5e6d3" "#000000" "public/images/products/tote/cream.svg"
create_svg "Tote" "Peach" "#f4a89f" "#000000" "public/images/products/tote/peach.svg"

echo "✅ Все SVG placeholder изображения созданы!"
echo "📁 Файлы находятся в: public/images/products/"
echo "🚀 Запустите 'npm run dev' для проверки"
