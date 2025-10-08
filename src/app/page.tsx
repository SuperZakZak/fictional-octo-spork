"use client";

import { HeroSection } from "@/features/home/hero-section";
import { TechnologiesSection } from "@/features/home/technologies-section";
import { ProductsSection } from "@/features/home/products-section";
import { PricingSection } from "@/features/home/pricing-section";
import { UseCasesSection } from "@/features/home/use-cases-section";
import { ConfiguratorSection } from "@/features/home/configurator-section";
import { QuizSection } from "@/features/home/quiz-section";
import { ContactSection } from "@/features/home/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechnologiesSection />
      <ProductsSection />
      <PricingSection />
      <UseCasesSection />
      <ConfiguratorSection />
      <QuizSection />
      <ContactSection />
    </>
  );
}
