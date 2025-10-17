"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Shirt, ShoppingBag, Palette, Wind } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

// Маппинг hex цветов к названиям файлов
const colorToFileName: Record<string, string> = {
  "#000000": "black",
  "#FFFFFF": "white",
  "#1a1a2e": "navy",
  "#d1d1d1": "gray",
  "#f5e6d3": "cream",
  "#f4a89f": "peach",
  "#FFB6C1": "pink", // Pink Joy для худи
  "#3d4f6b": "midnight-blue", // Midnight Blue C591
  "#f8f4e8": "natural", // Natural/Off-white
};

// Поддерживаемые форматы изображений (в порядке приоритета)
const IMAGE_FORMATS = ["avif", "webp", "png"];

// Функция для получения пути к изображению с fallback на другие форматы
const getImagePath = (productId: string, colorName: string, format: string = "avif") => {
  return `/images/products/${productId}/${colorName}.${format}`;
};

const products = [
  {
    id: "tshirt",
    name: "T-Shirt",
    brand: "Stanley/Stella",
    icon: Shirt,
    colors: ["#000000", "#FFFFFF", "#1a1a2e", "#d1d1d1", "#f5e6d3", "#f4a89f"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Premium organic cotton t-shirt, perfect for any design",
    priceFrom: "10",
  },
  {
    id: "hoodie",
    name: "Hoodie",
    brand: "Stanley/Stella",
    icon: Wind,
    colors: ["#000000", "#FFFFFF", "#1a1a2e", "#d1d1d1", "#f5e6d3", "#FFB6C1"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable heavyweight hoodie with kangaroo pocket",
    priceFrom: "43",
  },
  {
    id: "tote",
    name: "Tote Bag",
    brand: "Stanley/Stella",
    icon: ShoppingBag,
    colors: ["#000000", "#FFFFFF", "#d1d1d1", "#3d4f6b", "#f8f4e8"],
    sizes: ["One Size"],
    description: "Durable canvas tote bag for everyday use",
    priceFrom: "7",
  },
];

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [imageError, setImageError] = useState(false);
  const [currentFormatIndex, setCurrentFormatIndex] = useState(0);

  // Сбрасываем индекс формата при смене продукта или цвета
  useEffect(() => {
    setCurrentFormatIndex(0);
    setImageError(false);
  }, [selectedProduct.id, selectedColor]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-glass-50 to-glass-100 relative overflow-hidden"
    >
      {/* Background Glass Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-glass-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Premium <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-glass-700 max-w-3xl mx-auto leading-relaxed">
            We use only the highest quality blanks from trusted brands like&nbsp;Stanley/Stella&nbsp;and&nbsp;WATC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image Viewer */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl glass-card">
              <motion.div
                key={`${selectedProduct.id}-${selectedColor}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={getImagePath(
                    selectedProduct.id,
                    colorToFileName[selectedColor],
                    IMAGE_FORMATS[currentFormatIndex]
                  )}
                  alt={`${selectedProduct.name} in ${colorToFileName[selectedColor]}`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  onError={() => {
                    // Пробуем следующий формат, если текущий не загрузился
                    if (currentFormatIndex < IMAGE_FORMATS.length - 1) {
                      console.log(`Trying next format: ${IMAGE_FORMATS[currentFormatIndex + 1]}`);
                      setCurrentFormatIndex(currentFormatIndex + 1);
                    } else {
                      console.error(`Failed to load image in all formats for: ${colorToFileName[selectedColor]}`);
                      setImageError(true);
                    }
                  }}
                  onLoad={() => {
                    setImageError(false);
                    // Сбрасываем индекс формата при успешной загрузке
                    if (currentFormatIndex !== 0) {
                      setCurrentFormatIndex(0);
                    }
                  }}
                />
              </motion.div>
            </div>

            {/* Floating Badge - Hidden on mobile */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="hidden md:flex absolute top-4 right-4 glass-morphism rounded-full px-4 py-2 shadow-lg items-center space-x-2"
            >
              <Palette className="text-charcoal" size={16} />
              <span className="text-sm font-medium text-charcoal">Premium Quality</span>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Product Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedColor(product.colors[0]);
                    }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedProduct.id === product.id
                        ? "bg-charcoal text-white shadow-xl"
                        : "glass-card text-charcoal hover:bg-white/60"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{product.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Product Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-charcoal mb-2">
                {selectedProduct.name} • {selectedProduct.brand}
              </h3>
              {selectedProduct.priceFrom && (
                <p className="text-lg text-glass-700 mb-3">
                  from €{selectedProduct.priceFrom}
                </p>
              )}
              <p className="text-glass-700">{selectedProduct.description}</p>
            </div>

            {/* Color Picker */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal mb-3">
                Choose Color
              </label>
              <div className="flex flex-wrap gap-3">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-300 hover:scale-110 ${
                      selectedColor === color
                        ? "border-charcoal shadow-xl ring-2 ring-offset-2 ring-charcoal"
                        : "border-glass-300 hover:border-glass-500"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-glass-600 italic">
                💡 Need other colors or models? Just ask us!
              </p>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal mb-3">
                Available Sizes
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-4 py-2 glass-card rounded-xl text-charcoal font-medium hover:bg-white/60 transition-all duration-300"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="glass-card rounded-3xl p-6 mb-8 border border-white/30">
              <h4 className="font-bold text-charcoal mb-4">Product Features</h4>
              <ul className="space-y-2 text-glass-700">
                <li className="flex items-start space-x-2">
                  <span className="text-charcoal mt-1">✓</span>
                  <span>100% organic cotton (or premium canvas for bags)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-charcoal mt-1">✓</span>
                  <span>Ethically sourced and sustainably produced</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-charcoal mt-1">✓</span>
                  <span>Pre-shrunk and machine washable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-charcoal mt-1">✓</span>
                  <span>Perfect for DTF and Vinyl printing</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#configurator"
              className="block w-full text-center px-8 py-4 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all duration-300 font-medium shadow-xl hover:shadow-2xl"
            >
              Customize This Product
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
