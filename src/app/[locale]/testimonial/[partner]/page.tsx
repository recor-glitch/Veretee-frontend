import CTA from "@/components/Landing/CTA";
import { useTranslations } from "next-intl";

interface params {
  partner: string;
}

const TestimonialDetailPage = ({ partner: _partner }: params) => {
  const t = useTranslations("testimonial-detail");
  return (
    <div className="min-h-screen bg-background grid grid-cols-3 gap-24 container mx-auto px-4 py-16">
      <div className="col-span-full flex flex-col gap-8 md:gap-16">
        <h1 className="text-5xl md:text-[96px] text-primary font-bold">
          {t("title")}
        </h1>
        <p className=" text-xl md:text-2xl font-light">{t("content")}</p>
      </div>
      <CTA />
    </div>
  );
};

export default TestimonialDetailPage;
