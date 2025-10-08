"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Gift, Users, Store, Heart, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useCases = [
  {
    id: 1,
    icon: Briefcase,
    title: "Corporate Swag",
    description: "Branded merchandise for your team and clients",
    color: "from-blue-500 to-blue-600",
    image: "🏢",
  },
  {
    id: 2,
    icon: Gift,
    title: "Souvenir Sales",
    description: "Custom designs for tourist shops and events",
    color: "from-purple-500 to-purple-600",
    image: "🎁",
  },
  {
    id: 3,
    icon: Users,
    title: "Promo Uniforms",
    description: "Professional workwear with your branding",
    color: "from-green-500 to-green-600",
    image: "👕",
  },
  {
    id: 4,
    icon: Store,
    title: "Retail Collections",
    description: "Launch your own clothing line",
    color: "from-pink-500 to-pink-600",
    image: "🛍️",
  },
  {
    id: 5,
    icon: Heart,
    title: "Event Merchandise",
    description: "Concerts, festivals, and special occasions",
    color: "from-red-500 to-red-600",
    image: "🎉",
  },
  {
    id: 6,
    icon: Trophy,
    title: "Sports Teams",
    description: "Custom jerseys and team apparel",
    color: "from-orange-500 to-orange-600",
    image: "⚽",
  },
];

export function UseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    
    // Horizontal scroll animation
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    gsap.to(scrollContainer, {
      scrollLeft: scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isInView]);

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="section-padding bg-black text-white overflow-hidden"
    >
      <div className="container-custom mb-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Perfect For <span className="text-white">Every Occasion</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From corporate branding to personal projects, we&apos;ve got you covered.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-8 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex-shrink-0 w-80 md:w-96"
            >
              <div className="relative group h-full">
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${useCase.color} rounded-3xl p-8 h-full overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
                      backgroundSize: "40px 40px",
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Emoji */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                      {useCase.image}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-lg mb-6">
                      {useCase.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>Fast turnaround</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>Bulk discounts available</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>Premium quality guaranteed</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-8"
      >
        <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
          <span>Scroll horizontally</span>
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="container-custom mt-16 text-center"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 border-4 border-white">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need 10 or 10,000 pieces, we&apos;re here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#configurator"
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-all font-medium shadow-lg hover:shadow-xl"
            >
              Design Now
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-black text-black rounded-full hover:bg-gray-100 transition-all font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
