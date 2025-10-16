"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Package } from "lucide-react";
import gsap from "gsap";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated background particles simulating printing film
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw liquid glass gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(250, 250, 250, 0.8)");
      gradient.addColorStop(0.5, "rgba(245, 245, 245, 0.6)");
      gradient.addColorStop(1, "rgba(238, 238, 238, 0.8)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle (monochrome)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 26, 26, ${particle.opacity * 0.2})`;
        ctx.fill();
      });

      // Draw connecting lines (subtle gray)
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(107, 114, 128, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    // GSAP animations for text
    if (containerRef.current) {
      gsap.fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-glass-50 via-glass-100 to-glass-200">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      
      {/* Liquid Glass Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/30 rounded-full blur-3xl animate-liquid"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-glass-200/40 rounded-full blur-3xl animate-liquid" style={{animationDelay: '2s'}}></div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-charcoal">
          {t('title')}
          <br />
          <span className="gradient-text">{t('titleHighlight')}</span>
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl text-glass-700 mb-12 max-w-3xl mx-auto">
          {t('subtitle')}
          <br />
          {t('subtitleSecond')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#configurator"
            className="hero-cta group px-8 py-4 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all duration-300 font-medium shadow-2xl hover:shadow-3xl flex items-center space-x-2"
          >
            <Palette size={20} />
            <span>{t('createDesign')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#pricing"
            className="hero-cta glass-card px-8 py-4 text-charcoal border border-white/30 rounded-full hover:bg-white/60 transition-all duration-300 font-medium shadow-xl hover:shadow-2xl flex items-center space-x-2"
          >
            <span>{t('getQuote')}</span>
          </a>

          <a
            href="#contact"
            className="hero-cta glass-card px-8 py-4 text-charcoal border border-white/30 rounded-full hover:bg-white/60 transition-all duration-300 font-medium shadow-xl hover:shadow-2xl flex items-center space-x-2"
          >
            <Package size={20} />
            <span>{t('orderSamples')}</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card rounded-3xl p-8 hover:bg-white/50 transition-all duration-300 group"
          >
            <div className="text-5xl font-bold text-charcoal mb-2">100+</div>
            <div className="text-glass-700">{t('stats.clients')}</div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass-card rounded-3xl p-8 hover:bg-white/50 transition-all duration-300 group"
          >
            <div className="text-5xl font-bold text-charcoal mb-2">5k+</div>
            <div className="text-glass-700">{t('stats.products')}</div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="glass-card rounded-3xl p-8 hover:bg-white/50 transition-all duration-300 group"
          >
            <div className="text-5xl font-bold text-charcoal mb-2">48h</div>
            <div className="text-glass-700">{t('stats.turnaround')}</div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-glass-500 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-charcoal rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
