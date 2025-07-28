"use client";

import { Box } from "./components/ui/Box";
import { FAQ } from "./components/features/landing/FAQ";
import { CTA } from "./components/features/landing/CTA";
import { Hero } from "./components/features/landing/Hero";
import { Footer } from "./components/features/landing/Footer";
import { Header } from "./components/features/landing/Header";
import { Pricing } from "./components/features/landing/Pricing";
import { Features } from "./components/features/landing/Features";

export default function Home() {
  return (
    <Box>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </Box>
  );
}
