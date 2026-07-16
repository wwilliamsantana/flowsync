import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
    </main>
  );
}
