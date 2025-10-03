import AboutSection from "@/components/Landing/About";
import CTA from "@/components/Landing/CTA";
import Hero from "@/components/Landing/Hero";
import News from "@/components/Landing/News";
import Partners from "@/components/Landing/Partner";
import Products from "@/components/Landing/Products";
import Testimonials from "@/components/Landing/Testimonials";
import WhyChooseUs from "@/components/Landing/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Products />
      <Partners />
      <Testimonials />
      <News />
      <CTA />
    </div>
  );
}
