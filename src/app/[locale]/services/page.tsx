import CTA from "@/components/Landing/CTA";
import ServiceCatalog from "@/components/ServiceCatalog";
import { getTranslations } from "next-intl/server";

async function ServicePage() {
  const t = await getTranslations("service");
  return (
    <div className="min-h-screen bg-background grid grid-cols-3">
      <section className="relative col-span-full min-h-[820px] md:min-h-[960px] flex items-center overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: "url(/service-bg.svg)",
          }}
        >
          <div className="container mx-auto px-4 absolute top-1/4 left-7 md:left-28 z-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white animate-fade-in">
                <h1 className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
                  {t("headline")}
                </h1>
                <p className="text-2xl p-5 font-medium md:text-4xl mb-8 bg-[#1E3A8A]/50 text-white">
                  {t("description")}
                </p>
              </div>
              {/* <TrackingForm /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-full flex flex-col gap-8 container mx-auto px-4 py-16">
        <ServiceCatalog />
      </section>
      <CTA />
    </div>
  );
}

export default ServicePage;
