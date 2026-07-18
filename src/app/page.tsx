import Navbar from "@/components/layout/Navbar";
import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import TrustedBy from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
