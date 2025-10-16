"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Heart,
  Award,
  Target,
} from "lucide-react";
import { useTranslations } from 'next-intl';

const benefitIcons = [
  { id: 1, icon: Sparkles, gradient: "from-pink-500 to-rose-500", key: "brandRecognition" },
  { id: 2, icon: Users, gradient: "from-purple-500 to-indigo-500", key: "teamUnity" },
  { id: 3, icon: TrendingUp, gradient: "from-blue-500 to-cyan-500", key: "marketingPower" },
  { id: 4, icon: Heart, gradient: "from-red-500 to-pink-500", key: "customerLoyalty" },
  { id: 5, icon: Zap, gradient: "from-yellow-500 to-orange-500", key: "eventImpact" },
  { id: 6, icon: Shield, gradient: "from-green-500 to-emerald-500", key: "professionalImage" },
  { id: 7, icon: Award, gradient: "from-indigo-500 to-purple-500", key: "qualityGuarantee" },
  { id: 8, icon: Target, gradient: "from-orange-500 to-red-500", key: "revenueStream" },
];

export function BenefitsSection() {
  const t = useTranslations('benefits');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-glass-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-liquid"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-liquid"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            {t('title')}
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitIcons.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full glass-card rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-glass-700 transition-all duration-300">
                    {t(`${benefit.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-glass-600 text-sm leading-relaxed">
                    {t(`${benefit.key}.description`)}
                  </p>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-glass-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
