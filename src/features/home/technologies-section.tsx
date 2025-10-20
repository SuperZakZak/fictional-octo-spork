"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Printer, Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TechnologiesSection() {
  const t = useTranslations('technologies');
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
      className="section-padding bg-gradient-to-b from-glass-50 to-glass-100 relative overflow-hidden"
    >
      {/* Background Glass Orbs */}
      <div className="absolute top-0 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-liquid"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-glass-200/30 rounded-full blur-3xl animate-liquid" style={{animationDelay: '2s'}}></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t('title').split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-glass-700 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
            <br className="hidden md:block" />
            {t('subtitleSecond')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vinyl Printing Card */}
          <div
            ref={vinylCardRef}
            className="relative glass-card rounded-3xl p-8 text-charcoal overflow-hidden shadow-2xl border border-white/30"
          >
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center">
                  <Scissors className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-charcoal">{t('vinyl.title')}</h3>
              </div>

              <p className="text-glass-700 mb-8 text-lg leading-relaxed">
                {t('vinyl.description')}
              </p>

              {/* Animated Cutting Process */}
              <div className="mb-4 p-6 glass-card rounded-2xl border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-charcoal rounded-full animate-pulse" />
                  <span className="text-sm text-charcoal font-medium">{t('vinyl.cuttingProcess')}</span>
                </div>
                <motion.div
                  className="h-2 bg-glass-200 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-charcoal to-charcoal-light"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>

              {/* Animated Heat Transfer Process */}
              <div className="mb-8 p-6 glass-card rounded-2xl border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-charcoal rounded-full animate-pulse" />
                  <span className="text-sm text-charcoal font-medium">Heat Transfer Process</span>
                </div>
                <div className="relative h-2 bg-glass-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal-light to-glass-700"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <ul className="space-y-3">
                {(t.raw('vinyl.features') as string[]).map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    {index < 5 ? (
                      <Check className="text-charcoal flex-shrink-0" size={20} />
                    ) : (
                      <X className="text-glass-500 flex-shrink-0" size={20} />
                    )}
                    <span className={index < 5 ? "text-charcoal" : "text-glass-500"}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-glass-300">
                <div className="text-sm text-glass-700 mb-2 font-medium">{t('vinyl.bestFor')}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-charcoal text-white rounded-full text-sm font-medium">{t('vinyl.logos')}</span>
                  <span className="px-3 py-1 bg-charcoal-light text-white rounded-full text-sm font-medium">{t('vinyl.text')}</span>
                  <span className="px-3 py-1 bg-charcoal text-white rounded-full text-sm font-medium">{t('vinyl.simpleGraphics')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* DTF Printing Card */}
          <div
            ref={dtfCardRef}
            className="relative glass-card rounded-3xl p-8 text-charcoal overflow-hidden shadow-2xl border border-white/30"
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF5828] to-[#ff7a52] rounded-full flex items-center justify-center shadow-lg">
                  <Printer className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-charcoal">{t('dtf.title')}</h3>
              </div>

              <p className="text-glass-700 mb-8 text-lg">
                {t('dtf.description')}
              </p>

              {/* DTF Preparation */}
              <div className="mb-4 p-6 glass-card rounded-2xl border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-vibrant-blue rounded-full animate-pulse" />
                  <span className="text-sm text-charcoal font-medium">{t('dtf.preparation')}</span>
                </div>
                <div className="relative h-2 bg-glass-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-charcoal to-charcoal-light"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Animated Heat Transfer Process */}
              <div className="mb-8 p-6 glass-card rounded-2xl border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-charcoal rounded-full animate-pulse" />
                  <span className="text-sm text-charcoal font-medium">{t('dtf.heatTransfer')}</span>
                </div>
                <div className="relative h-2 bg-glass-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal-light to-glass-700"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <ul className="space-y-3">
                {(t.raw('dtf.features') as string[]).map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="text-charcoal flex-shrink-0" size={20} />
                    <span className="text-charcoal">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-glass-300">
                <div className="text-sm text-glass-700 mb-2 font-medium">{t('dtf.bestFor')}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-charcoal text-white rounded-full text-sm font-medium">{t('dtf.photos')}</span>
                  <span className="px-3 py-1 bg-charcoal-light text-white rounded-full text-sm font-medium">{t('dtf.complexArt')}</span>
                  <span className="px-3 py-1 bg-charcoal text-white rounded-full text-sm font-medium">{t('dtf.gradients')}</span>
                  <span className="px-3 py-1 bg-charcoal-light text-white rounded-full text-sm font-medium">{t('dtf.fullColor')}</span>
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
            className="inline-flex items-center space-x-2 px-8 py-4 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all duration-300 font-medium shadow-xl hover:shadow-2xl"
          >
            <span>{t('cta')}</span>
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
