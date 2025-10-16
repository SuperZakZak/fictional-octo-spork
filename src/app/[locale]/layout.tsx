import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CookieConsentManager } from "@/components/cookie-consent-manager";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blooma - Custom Printed Clothing & Accessories | DTF & Vinyl Printing",
  description: "Professional DTF and Vinyl printing services for custom apparel and accessories. High-quality t-shirts, hoodies, and tote bags with your designs.",
  keywords: "DTF printing, vinyl printing, custom apparel, custom t-shirts, printed clothing, Portugal, Stanley/Stella, WATC",
  openGraph: {
    title: "Blooma - We print your vision. Beautifully.",
    description: "Professional DTF and Vinyl printing services for custom apparel",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Fetch messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsentManager />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
