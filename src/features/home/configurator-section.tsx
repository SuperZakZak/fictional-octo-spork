"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Download, Send, Shirt, ShoppingBag, X, Wind } from "lucide-react";
import { useDropzone } from "react-dropzone";

const products = [
  { id: "tshirt", name: "T-Shirt", icon: Shirt, mockup: "👕" },
  { id: "hoodie", name: "Hoodie", icon: Wind, mockup: "🧥" },
  { id: "tote", name: "Tote Bag", icon: ShoppingBag, mockup: "👜" },
];

// Colors for T-Shirts
const tshirtColors = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "navy", name: "Navy", hex: "#1a1a2e" },
  { id: "gray", name: "Gray", hex: "#d1d1d1" },
  { id: "cream", name: "Cream", hex: "#f5e6d3" },
  { id: "peach", name: "Peach", hex: "#f4a89f" },
];

// Colors for Hoodies
const hoodieColors = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "navy", name: "Navy", hex: "#1a1a2e" },
  { id: "gray", name: "Gray", hex: "#d1d1d1" },
  { id: "cream", name: "Cream", hex: "#f5e6d3" },
  { id: "pink-joy", name: "Pink Joy", hex: "#FFB6C1" },
];

// Colors for Tote Bags (matching catalog)
const toteColors = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "gray", name: "Gray", hex: "#d1d1d1" },
  { id: "midnight-blue", name: "Midnight Blue", hex: "#3d4f6b" },
  { id: "natural", name: "Natural", hex: "#f8f4e8" },
];

export function ConfiguratorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 40 });
  const [designSize, setDesignSize] = useState(30);
  const [mockupImageSrc, setMockupImageSrc] = useState<string>("");

  // Get colors based on selected product
  const availableColors = 
    selectedProduct.id === "tote" ? toteColors :
    selectedProduct.id === "hoodie" ? hoodieColors :
    tshirtColors;
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);

  // Update selected color when product changes
  useEffect(() => {
    setSelectedColor(availableColors[0]);
  }, [selectedProduct.id]);

  // Auto-detect available image format
  useEffect(() => {
    const formats = ['png', 'avif', 'webp', 'jpg', 'jpeg', 'svg'];
    const basePath = `/images/configurator/${selectedProduct.id}/${selectedColor.id}`;
    
    const tryLoadImage = async () => {
      for (const format of formats) {
        const imagePath = `${basePath}.${format}`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            setMockupImageSrc(imagePath);
            return;
          }
        } catch (error) {
          continue;
        }
      }
      // If no image found, use empty string (will show fallback)
      setMockupImageSrc("");
    };

    tryLoadImage();
  }, [selectedProduct.id, selectedColor.id]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg']
    },
    maxFiles: 1,
  });

  const handleUploadClick = () => {
    // Trigger file input click programmatically
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const handleDownloadQuote = () => {
    // In a real app, this would generate a PDF
    alert("Quote PDF would be generated and downloaded!");
  };

  const handleSendToWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order ${selectedProduct.name} in ${selectedColor.name}. Can you help me with a quote?`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleSendToTelegram = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order ${selectedProduct.name} in ${selectedColor.name}. Can you help me with a quote?`
    );
    window.open(`https://t.me/share/url?url=blooma.pt&text=${message}`, '_blank');
  };

  return (
    <section
      id="configurator"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Design <span className="gradient-text">Configurator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your design and see it come to life in real-time. Get an instant quote and place your order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Preview Canvas */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24">
              <div
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white"
              >
                {/* Product Mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {mockupImageSrc ? (
                    <img
                      src={mockupImageSrc}
                      alt={`${selectedProduct.name} - ${selectedColor.name}`}
                      className={`w-full h-full object-contain ${
                        selectedProduct.id === "tote" ? "scale-90" : "scale-110"
                      }`}
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        setMockupImageSrc("");
                      }}
                    />
                  ) : (
                    <div className="text-9xl opacity-20">
                      {selectedProduct.mockup}
                    </div>
                  )}
                </div>

                {/* Uploaded Design */}
                {uploadedImage && (
                  <div
                    className="absolute"
                    style={{
                      left: `${designPosition.x}%`,
                      top: `${designPosition.y}%`,
                      width: `${designSize}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <img
                      src={uploadedImage}
                      alt="Your design"
                      className="w-full h-auto drop-shadow-lg"
                      draggable={false}
                    />
                  </div>
                )}

                {/* Instructions Overlay */}
                {!uploadedImage && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleUploadClick}
                  >
                    <div className="text-center text-gray-600 bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all">
                      <Upload size={48} className="mx-auto mb-4 text-primary-500" />
                      <p className="font-medium">Upload your design to preview</p>
                      <p className="text-sm text-gray-500 mt-2">Click here to upload</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Design Controls */}
              {uploadedImage && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mt-6 bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Adjust Design</h4>
                  
                  {/* Size Slider */}
                  <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-2 block">Size</label>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      value={designSize}
                      onChange={(e) => setDesignSize(parseInt(e.target.value))}
                      className="w-full accent-primary-500"
                    />
                  </div>

                  {/* Position Sliders */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-2 block">Horizontal</label>
                      <input
                        type="range"
                        min="20"
                        max="80"
                        value={designPosition.x}
                        onChange={(e) => setDesignPosition(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                        className="w-full accent-primary-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-2 block">Vertical</label>
                      <input
                        type="range"
                        min="20"
                        max="80"
                        value={designPosition.y}
                        onChange={(e) => setDesignPosition(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                        className="w-full accent-primary-500"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setUploadedImage(null)}
                    className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <X size={16} />
                    <span>Remove Design</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Configuration Panel */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Product Selection */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Choose Product</h3>
              <div className="grid grid-cols-3 gap-4">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedProduct.id === product.id
                          ? "border-primary-500 bg-primary-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Icon size={24} className="mx-auto mb-2 text-gray-700" />
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. Choose Color</h3>
              <div className="flex flex-wrap gap-3">
                {availableColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-14 h-14 rounded-full border-4 transition-all hover:scale-110 ${
                      selectedColor.id === color.id
                        ? "border-primary-500 shadow-lg"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-500 italic">
                💡 Need other colors or models? Just ask us!
              </p>
            </div>

            {/* Upload Design */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. Upload Design</h3>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                  isDragActive
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-300 hover:border-primary-400 hover:bg-gray-50"
                }`}
              >
                <input {...getInputProps()} />
                <Upload size={48} className="mx-auto mb-4 text-primary-500" />
                {isDragActive ? (
                  <p className="text-gray-700 font-medium">Drop your design here...</p>
                ) : (
                  <>
                    <p className="text-gray-700 font-medium mb-2">
                      Drag & drop your design here
                    </p>
                    <p className="text-sm text-gray-500">
                      or click to browse (PNG, JPG, SVG)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. Get Your Quote</h3>
              <div className="space-y-3">
                <button
                  onClick={handleDownloadQuote}
                  disabled={!uploadedImage}
                  className="w-full px-6 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download PDF Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all font-medium flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={handleSendToTelegram}
                    className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all font-medium flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Telegram</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">💡 Design Tips</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use high-resolution images (300 DPI minimum)</li>
                <li>• PNG files with transparent backgrounds work best</li>
                <li>• Vector files (SVG) ensure perfect quality at any size</li>
                <li>• Avoid very thin lines (minimum 0.5mm)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
