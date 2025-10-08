import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
