import CTA from "@/components/Landing/CTA";
import Businesses from "@/components/Testimonial/Businesses";
import TestimonialsSection from "@/components/Testimonial/Testimonials";
import { useTranslations } from "next-intl";
function TestimonialPage() {
  const t = useTranslations("testimonials");

  return (
    <div className="min-h-screen bg-background grid grid-cols-3 gap-24 container mx-auto px-4 py-16">
      <div className="col-span-full md:col-span-2 flex flex-col gap-7">
        <h1 className="text-4xl font-bold">{t("page.title")}</h1>
        <p className="text-xl">{t("page.description")}</p>
      </div>
      <Businesses />
      <TestimonialsSection />
      <CTA />
    </div>
  );
}

export default TestimonialPage;
