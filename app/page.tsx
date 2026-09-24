import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
      <Process />
      <Pricing />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
