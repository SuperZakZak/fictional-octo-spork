#!/bin/bash

# Скрипт для конвертации PNG изображений в AVIF и WebP форматы
# Требует установки sharp-cli: npm install -g sharp-cli

echo "🖼️  Starting image conversion..."

# Цвета для обработки
COLORS=("black" "white" "gray" "midnight-blue" "natural")

# Продукты для обработки
PRODUCTS=("tshirt" "hoodie" "tote")

# Базовая директория
BASE_DIR="public/images/products"

# Функция для конвертации изображения
convert_image() {
    local input_file=$1
    local output_avif="${input_file%.png}.avif"
    local output_webp="${input_file%.png}.webp"
    
    if [ -f "$input_file" ]; then
        echo "  Converting: $input_file"
        
        # Конвертация в AVIF (качество 80, скорость 6)
        if command -v sharp &> /dev/null; then
            sharp -i "$input_file" -o "$output_avif" -f avif -q 80
            echo "    ✅ Created: $output_avif"
        else
            echo "    ⚠️  sharp-cli not found. Install with: npm install -g sharp-cli"
        fi
        
        # Конвертация в WebP (качество 85)
        if command -v sharp &> /dev/null; then
            sharp -i "$input_file" -o "$output_webp" -f webp -q 85
            echo "    ✅ Created: $output_webp"
        fi
    else
        echo "  ⚠️  File not found: $input_file"
    fi
}

# Обработка всех продуктов и цветов
for product in "${PRODUCTS[@]}"; do
    echo ""
    echo "📦 Processing product: $product"
    
    for color in "${COLORS[@]}"; do
        input_file="$BASE_DIR/$product/$color.png"
        convert_image "$input_file"
    done
done

echo ""
echo "✨ Conversion complete!"
echo ""
echo "📊 File size comparison:"
for product in "${PRODUCTS[@]}"; do
    echo ""
    echo "Product: $product"
    for color in "${COLORS[@]}"; do
        png_file="$BASE_DIR/$product/$color.png"
        avif_file="$BASE_DIR/$product/$color.avif"
        webp_file="$BASE_DIR/$product/$color.webp"
        
        if [ -f "$png_file" ]; then
            png_size=$(du -h "$png_file" | cut -f1)
            echo "  $color.png: $png_size"
            
            if [ -f "$avif_file" ]; then
                avif_size=$(du -h "$avif_file" | cut -f1)
                echo "    → $color.avif: $avif_size"
            fi
            
            if [ -f "$webp_file" ]; then
                webp_size=$(du -h "$webp_file" | cut -f1)
                echo "    → $color.webp: $webp_size"
            fi
        fi
    done
done

echo ""
echo "🎉 Done! You can now use AVIF and WebP images on your site."
