import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Modules from "@/components/sections/Modules";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import PricingFaq from "@/components/sections/PricingFaq";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Modules />
        <HowItWorks />
        <About />
        <Testimonials />
        <PricingFaq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
