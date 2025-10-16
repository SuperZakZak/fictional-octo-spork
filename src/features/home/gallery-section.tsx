"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from 'next-intl';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Gallery items configuration - 8 images total
const galleryItems = [
  {
    id: 1,
    src: "/gallery/image-1.avif",
    alt: "Custom Merchandise Design 1",
    type: "image",
  },
  {
    id: 2,
    src: "/gallery/image-2.avif",
    alt: "Custom Merchandise Design 2",
    type: "image",
  },
  {
    id: 3,
    src: "/gallery/image-3.avif",
    alt: "Custom Merchandise Design 3",
    type: "image",
  },
  {
    id: 4,
    src: "/gallery/image-4.avif",
    alt: "Custom Merchandise Design 4",
    type: "image",
  },
  {
    id: 5,
    src: "/gallery/image-5.avif",
    alt: "Custom Merchandise Design 5",
    type: "image",
  },
  {
    id: 6,
    src: "/gallery/image-6.avif",
    alt: "Custom Merchandise Design 6",
    type: "image",
  },
  {
    id: 7,
    src: "/gallery/image-7.avif",
    alt: "Custom Merchandise Design 7",
    type: "image",
  },
  {
    id: 8,
    src: "/gallery/image-8.avif",
    alt: "Custom Merchandise Design 8",
    type: "image",
  },
];

export function GallerySection() {
  const t = useTranslations('gallery');
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  useEffect(() => {
    if (!scrollContainerRef.current || !sectionRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    
    // Only enable horizontal scroll on desktop (768px and above)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, just allow normal horizontal scroll without GSAP
      return;
    }
    
    // Wait for images to load and calculate proper width
    const setupAnimation = () => {
      // Calculate total scroll width including all images and gaps
      const totalWidth = scrollContainer.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;
      
      // Create horizontal scroll animation triggered by vertical scroll
      const scrollTween = gsap.to(scrollContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 0%", // Start when section reaches top of viewport
          end: () => `+=${scrollDistance + 500}`, // Add extra space to ensure full scroll
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return scrollTween;
    };

    // Delay setup to ensure proper calculation
    const timer = setTimeout(() => {
      const tween = setupAnimation();
      
      return () => {
        if (tween) tween.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-glass-100 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-liquid"></div>
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-liquid"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Gallery Container - Full Width */}
      <div className="w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 container-custom"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            <span className="gradient-text">{t('title')}</span>
          </h2>
        </motion.div>

        {/* Gallery - Single Row with Horizontal Scroll on Vertical Scroll */}
        <div className="w-full overflow-visible md:overflow-visible overflow-x-auto">
          <div ref={scrollContainerRef} className="flex gap-4 md:gap-8 will-change-transform px-4 md:px-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex-shrink-0 w-[333px] h-[333px] md:w-[500px] md:h-[500px] cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 333px, 500px"
                    priority={index < 2}
                  />

                  {/* Hover Border Effect - No text overlay */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/60 rounded-2xl md:rounded-3xl transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} className="text-white" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium px-4">
              {selectedImage.alt}
            </p>
          </div>
        </motion.div>
      )}

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
