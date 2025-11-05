"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Upload, Download, Send, Shirt, ShoppingBag, X, Wind, Phone, CheckCircle2, ZoomIn, ZoomOut, Move, RotateCw, Maximize2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import html2canvas from "html2canvas";
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";
import { useTranslations } from "next-intl";

const products = [
  { id: "tshirt", name: "T-Shirt", icon: Shirt, mockup: "👕" },
  { id: "hoodie", name: "Hoodie", icon: Wind, mockup: "🧥" },
  { id: "tote", name: "Tote Bag", icon: ShoppingBag, mockup: "👜" },
  { id: "shopping-bag", name: "Shopping Bag", icon: ShoppingBag, mockup: "🛍️" },
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

// Colors for Shopping Bags (with updated file names)
const shoppingBagColors = [
  { id: "black-1", name: "Black", hex: "#000000" },
  { id: "grey", name: "Grey", hex: "#d1d1d1" },
  { id: "midnight-blue", name: "Midnight Blue", hex: "#3d4f6b" },
  { id: "natural", name: "Natural", hex: "#f8f4e8" },
  { id: "white-1", name: "White", hex: "#FFFFFF" },
];

export function ConfiguratorSection() {
  const t = useTranslations('configurator');
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 40 });
  const [designSize, setDesignSize] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ size: 30, x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; distance: number } | null>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const [mockupImageSrc, setMockupImageSrc] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(10);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Get colors based on selected product
  const availableColors = 
    selectedProduct.id === "tote" ? toteColors :
    selectedProduct.id === "shopping-bag" ? shoppingBagColors :
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

  const handleSendMeQuote = () => {
    setShowPhoneInput(true);
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  const captureScreenshot = async (): Promise<string | null> => {
    if (!previewRef.current || !uploadedImage) {
      return null;
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      // Convert to base64 with quality optimization
      return canvas.toDataURL("image/jpeg", 0.85);
    } catch (error) {
      console.error("Screenshot capture failed:", error);
      return null;
    }
  };

  const handleSubmitQuote = async () => {
    // Validate phone number
    if (!phoneNumber.trim()) {
      setSubmitError("Please enter your phone number");
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setSubmitError("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Capture screenshot
      const screenshot = await captureScreenshot();

      // Get locale information
      const browserLocale = navigator.language || "en-US";
      const siteLocale = document.documentElement.lang || "en";

      // Send request to API
      const response = await fetch("/api/request-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          product: selectedProduct.name,
          color: selectedColor.name,
          quantity: quantity,
          designScreenshot: screenshot,
          siteLocale,
          browserLocale,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send quote request");
      }

      // Success!
      setSubmitSuccess(true);
      setPhoneNumber("");
      
      // Hide form after 5 seconds
      setTimeout(() => {
        setShowPhoneInput(false);
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Quote submission error:", error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : "Failed to send quote request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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

  // Mouse wheel zoom handler
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!uploadedImage) return;
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -2 : 2;
      setDesignSize(prev => Math.max(10, Math.min(60, prev + delta)));
    }
  }, [uploadedImage]);

  // Drag handlers for moving
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!uploadedImage || isResizing) return;
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  }, [uploadedImage, isResizing]);

  // Resize handlers
  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    if (!uploadedImage) return;
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({ size: designSize, x: e.clientX, y: e.clientY });
  }, [uploadedImage, designSize]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!previewRef.current) return;
    
    // Handle dragging (moving)
    if (isDragging) {
      const rect = previewRef.current.getBoundingClientRect();
      const deltaX = ((e.clientX - dragStart.x) / rect.width) * 100;
      const deltaY = ((e.clientY - dragStart.y) / rect.height) * 100;
      
      setDesignPosition(prev => ({
        x: Math.max(20, Math.min(80, prev.x + deltaX)),
        y: Math.max(20, Math.min(80, prev.y + deltaY))
      }));
      
      setDragStart({ x: e.clientX, y: e.clientY });
    }
    
    // Handle resizing
    if (isResizing) {
      const rect = previewRef.current.getBoundingClientRect();
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      const delta = (deltaX + deltaY) / 2; // Average of both directions
      const sizeChange = (delta / rect.width) * 100;
      
      setDesignSize(Math.max(10, Math.min(80, resizeStart.size + sizeChange)));
    }
  }, [isDragging, isResizing, dragStart, resizeStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  // Touch handlers for mobile
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!uploadedImage) return;
    
    if (e.touches.length === 1) {
      // Single touch - drag
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    } else if (e.touches.length === 2) {
      // Two fingers - pinch to zoom
      const distance = getTouchDistance(e.touches);
      setTouchStart({
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        distance
      });
    }
  }, [uploadedImage]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!uploadedImage || !previewRef.current) return;
    
    if (e.touches.length === 1 && isDragging) {
      // Single touch - drag
      const rect = previewRef.current.getBoundingClientRect();
      const deltaX = ((e.touches[0].clientX - dragStart.x) / rect.width) * 100;
      const deltaY = ((e.touches[0].clientY - dragStart.y) / rect.height) * 100;
      
      setDesignPosition(prev => ({
        x: Math.max(20, Math.min(80, prev.x + deltaX)),
        y: Math.max(20, Math.min(80, prev.y + deltaY))
      }));
      
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    } else if (e.touches.length === 2 && touchStart) {
      // Two fingers - pinch to zoom
      e.preventDefault();
      const distance = getTouchDistance(e.touches);
      const scale = distance / touchStart.distance;
      const newSize = designSize * scale;
      
      setDesignSize(Math.max(10, Math.min(80, newSize)));
      setTouchStart({
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        distance
      });
    }
  }, [uploadedImage, isDragging, dragStart, touchStart, designSize]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTouchStart(null);
  }, []);

  // Add event listeners
  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    preview.addEventListener('wheel', handleWheel, { passive: false });
    
    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      preview.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleWheel, handleMouseMove, handleMouseUp, isDragging, isResizing]);

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
            {t('title').split(' ')[0]} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
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
                ref={previewRef}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white touch-none"
              >
                {/* Product Mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {mockupImageSrc ? (
                    <img
                      src={mockupImageSrc}
                      alt={`${selectedProduct.name} - ${selectedColor.name}`}
                      className={`w-full h-full object-contain ${
                        selectedProduct.id === "tote" || selectedProduct.id === "shopping-bag" 
                          ? "scale-90" 
                          : "scale-110"
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
                    ref={designRef}
                    className={`absolute group ${isDragging ? 'cursor-grabbing' : isResizing ? 'cursor-nwse-resize' : 'cursor-grab'}`}
                    style={{
                      left: `${designPosition.x}%`,
                      top: `${designPosition.y}%`,
                      width: `${designSize}%`,
                      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                    }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {/* Border Frame - visible on hover */}
                    <div className="absolute inset-0 border border-gray-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <img
                      src={uploadedImage}
                      alt="Your design"
                      className="w-full h-auto drop-shadow-lg pointer-events-none"
                      draggable={false}
                    />
                    
                    {/* Control Icons - visible on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {/* Delete - Top Left */}
                      <button
                        className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full border border-gray-300 shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedImage(null);
                        }}
                        title={t('removeDesign')}
                      >
                        <X size={12} className="text-gray-700" />
                      </button>

                      {/* Rotate - Top Right */}
                      <button
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border border-gray-300 shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          setRotation(prev => (prev + 90) % 360);
                        }}
                        title={t('rotate')}
                      >
                        <RotateCw size={12} className="text-gray-700" />
                      </button>

                      {/* Resize - Bottom Right */}
                      <div
                        className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border border-gray-300 shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center pointer-events-auto cursor-nwse-resize"
                        onMouseDown={handleResizeStart}
                        title={t('resize')}
                      >
                        <Maximize2 size={12} className="text-gray-700" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Compact Control Panel */}
                {uploadedImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full shadow-xl px-4 py-2 flex items-center gap-2 border border-gray-200"
                  >
                    {/* Zoom Out */}
                    <button
                      onClick={() => setDesignSize(prev => Math.max(10, prev - 5))}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      title={t('zoomOut')}
                    >
                      <ZoomOut size={18} className="text-gray-700" />
                    </button>
                    
                    {/* Zoom In */}
                    <button
                      onClick={() => setDesignSize(prev => Math.min(80, prev + 5))}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      title={t('zoomIn')}
                    >
                      <ZoomIn size={18} className="text-gray-700" />
                    </button>
                  </motion.div>
                )}

                {/* Instructions Overlay */}
                {!uploadedImage && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleUploadClick}
                  >
                    <div className="text-center text-gray-600 bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all">
                      <Upload size={48} className="mx-auto mb-4 text-charcoal" />
                      <p className="font-medium">{t('uploadToPreview')}</p>
                      <p className="text-sm text-gray-500 mt-2">{t('clickToUpload')}</p>
                    </div>
                  </div>
                )}
              </div>

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
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('step1')}</h3>
              <div className="grid grid-cols-3 gap-4">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedProduct.id === product.id
                          ? "border-charcoal bg-glass-100"
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('step2')}</h3>
              <div className="flex flex-wrap gap-3">
                {availableColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-14 h-14 rounded-full border-4 transition-all hover:scale-110 ${
                      selectedColor.id === color.id
                        ? "border-charcoal shadow-lg"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-500 italic">
                {t('needOtherColors')}
              </p>
            </div>

            {/* Hidden file input for upload */}
            <div className="hidden">
              <input {...getInputProps()} />
            </div>

            {/* Quantity Input */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('step3')}</h3>
              <div className="bg-white border-2 border-gray-300 rounded-2xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('numberOfItems')}
                </label>
                <input
                  type="number"
                  min="5"
                  max="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(5, parseInt(e.target.value) || 5))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-lg font-medium text-gray-900 focus:border-charcoal focus:outline-none transition-colors"
                  placeholder={t('enterQuantity')}
                />
                <p className="mt-3 text-sm text-gray-500">
                  {t('minimumOrder')}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('step4')}</h3>
              {!uploadedImage && (
                <p className="text-sm text-gray-500 mb-3 italic">
                  {t('canRequestWithout')}
                </p>
              )}
              <div className="space-y-3">
                {/* Main Quote Button */}
                {!showPhoneInput && (
                  <button
                    onClick={handleSendMeQuote}
                    className="w-full px-6 py-4 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>{t('sendMeQuote')}</span>
                  </button>
                )}

                {/* Phone Input Form */}
                <AnimatePresence>
                  {showPhoneInput && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {!submitSuccess ? (
                        <div className="bg-white border-2 border-glass-300 rounded-2xl p-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <Phone size={16} className="inline mr-2" />
                              {t('yourPhone')}
                            </label>
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => {
                                setPhoneNumber(e.target.value);
                                setSubmitError(null);
                              }}
                              placeholder={t('phonePlaceholder')}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:border-charcoal focus:outline-none transition-colors"
                              disabled={isSubmitting}
                            />
                            {submitError && (
                              <p className="mt-2 text-sm text-red-600">{submitError}</p>
                            )}
                          </div>

                          <div className="flex space-x-3">
                            <button
                              onClick={handleSubmitQuote}
                              disabled={isSubmitting}
                              className="flex-1 px-6 py-3 bg-charcoal text-white rounded-xl hover:bg-charcoal-light transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  <span>{t('sending')}</span>
                                </>
                              ) : (
                                <>
                                  <Send size={18} />
                                  <span>{t('send')}</span>
                                </>
                              )}
                            </button>
                            <button
                              onClick={() => {
                                setShowPhoneInput(false);
                                setPhoneNumber("");
                                setSubmitError(null);
                              }}
                              disabled={isSubmitting}
                              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all font-medium disabled:opacity-50"
                            >
                              {t('cancel')}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6 text-center"
                        >
                          <CheckCircle2 size={48} className="mx-auto mb-4 text-green-600" />
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {t('quoteSent')}
                          </h4>
                          <p className="text-gray-700">
                            {t('contactSoon')}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Alternative Contact Methods */}
                {!showPhoneInput && (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all font-medium flex items-center justify-center space-x-2"
                    >
                      <Send size={18} />
                      <span>{t('whatsapp')}</span>
                    </button>

                    <button
                      onClick={handleSendToTelegram}
                      className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all font-medium flex items-center justify-center space-x-2"
                    >
                      <Send size={18} />
                      <span>{t('telegram')}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-glass-100 to-accent-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">{t('designTips')}</h4>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {(t.raw('tips') as string[]).map((tip: string, index: number) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
