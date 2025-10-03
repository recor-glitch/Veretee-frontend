import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import TrackingForm from "./TrackingForm";

// Use public path directly for background images
const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative md:min-h-[960px] flex items-center overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url(/hero-port.svg)",
        }}
      >
        <div className="absolute inset-0 bg-primary-light/40 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <div className="inline-block bg-primary-dark/80 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium">{t("welcome")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t("headline")}
            </h1>
            <p className="text-lg mb-8 text-white/90">{t("desc")}</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary-dark hover:bg-primary-dark/90"
              >
                {t("exploreButtonText")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary"
              >
                {t("quoteButtonText")}
              </Button>
            </div>
          </div>
          {/* <TrackingForm /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
