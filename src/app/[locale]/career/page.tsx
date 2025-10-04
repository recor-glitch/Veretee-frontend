import JobListing from "@/components/Career/JobListing";
import CTA from "@/components/Landing/CTA";
import { getTranslations } from "next-intl/server";

async function CareerPage() {
  const t = await getTranslations("career");
  return (
    <div className="min-h-screen bg-background grid grid-cols-3 container mx-auto px-4 py-16">
      <div className="col-span-full md:col-span-2 flex flex-col gap-8">
        <h1 className="text-5xl md:text-6xl font-normal">{t("title")}</h1>
        <p className=" text-xl md:text-2x text-[#64748B] font-normal">
          {t("description")}
        </p>
      </div>
      <JobListing />
      <CTA />
    </div>
  );
}

export default CareerPage;
