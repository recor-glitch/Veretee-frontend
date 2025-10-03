import Hero from "@/components/About/Hero";
import TabsSection from "@/components/About/TabsSection";
import Highlights from "@/components/About/Highlights";
import Story from "@/components/About/Story";
import PartnersStrip from "@/components/About/PartnersStrip";
import Businesses from "@/components/About/Businesses";
import React from "react";
import CTA from "@/components/Landing/CTA";

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TabsSection />
      <Highlights />
      <Story />
      <PartnersStrip />
      <Businesses />
      <CTA />
    </div>
  );
}

export default AboutPage;
