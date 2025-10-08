"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Printer, Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const vinylFeatures = [
  { text: "Perfect for simple designs", available: true },
  { text: "Matte finish", available: true },
  { text: "Durable and long-lasting", available: true },
  { text: "Limited color gradients", available: false },
  { text: "Best for 1-3 colors", available: true },
  { text: "No photo-realistic prints", available: false },
];

const dtfFeatures = [
  { text: "Full-color photo quality", available: true },
  { text: "Vibrant gradients", available: true },
  { text: "Soft, flexible feel", available: true },
  { text: "Complex designs welcome", available: true },
  { text: "Unlimited colors", available: true },
  { text: "Fast production", available: true },
];

export function TechnologiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vinylCardRef = useRef<HTMLDivElement>(null);
  const dtfCardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Animate vinyl card
      gsap.fromTo(
        vinylCardRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: vinylCardRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate DTF card
      gsap.fromTo(
        dtfCardRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dtfCardRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section
      id="technologies"
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Choose Your <span className="text-black">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer two professional printing methods, each with unique advantages.
            Let us help you choose the perfect one for your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vinyl Printing Card */}
          <div
            ref={vinylCardRef}
            className="relative bg-black rounded-3xl p-8 text-white overflow-hidden border-4 border-black"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0,50 Q25,30 50,50 T100,50"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Scissors className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold">Vinyl Printing</h3>
              </div>

              <p className="text-gray-300 mb-8 text-lg">
                Perfect for bold, simple designs with solid colors. Ideal for text, logos, and geometric patterns.
              </p>

              {/* Animated Cutting Process */}
              <div className="mb-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300">Cutting Process</span>
                </div>
                <motion.div
                  className="h-2 bg-white/20 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>

              {/* Animated Heat Transfer Process */}
              <div className="mb-8 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-vibrant-orange rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300">Heat Transfer Process</span>
                </div>
                <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-vibrant-yellow via-vibrant-orange to-accent-600"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <ul className="space-y-3">
                {vinylFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    {feature.available ? (
                      <Check className="text-green-400 flex-shrink-0" size={20} />
                    ) : (
                      <X className="text-red-400 flex-shrink-0" size={20} />
                    )}
                    <span className={feature.available ? "text-white" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm text-gray-400 mb-2">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Logos</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Text</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Simple Graphics</span>
                </div>
              </div>
            </div>
          </div>

          {/* DTF Printing Card */}
          <div
            ref={dtfCardRef}
            className="relative bg-white rounded-3xl p-8 text-black overflow-hidden border-4 border-black"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="w-full h-full"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center">
                  <Printer className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-black">DTF Printing</h3>
              </div>

              <p className="text-gray-700 mb-8 text-lg">
                Advanced direct-to-film technology for photo-realistic, full-color designs with unlimited detail.
              </p>

              {/* DTF Preparation */}
              <div className="mb-4 p-6 bg-gray-100 rounded-2xl border-2 border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-vibrant-blue rounded-full animate-pulse" />
                  <span className="text-sm text-gray-700 font-medium">DTF Preparation</span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-vibrant-blue to-vibrant-purple"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Animated Heat Transfer Process */}
              <div className="mb-8 p-6 bg-gray-100 rounded-2xl border-2 border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-vibrant-orange rounded-full animate-pulse" />
                  <span className="text-sm text-gray-700 font-medium">Heat Transfer Process</span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-vibrant-yellow via-vibrant-orange to-accent-600"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <ul className="space-y-3">
                {dtfFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="text-vibrant-green flex-shrink-0" size={20} />
                    <span className="text-black">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2 font-medium">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-vibrant-pink text-white rounded-full text-sm font-medium">Photos</span>
                  <span className="px-3 py-1 bg-vibrant-purple text-white rounded-full text-sm font-medium">Complex Art</span>
                  <span className="px-3 py-1 bg-vibrant-blue text-white rounded-full text-sm font-medium">Gradients</span>
                  <span className="px-3 py-1 bg-vibrant-orange text-white rounded-full text-sm font-medium">Full Color</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#quiz"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-all font-medium shadow-lg hover:shadow-xl"
          >
            <span>Not sure? Take our quiz</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
