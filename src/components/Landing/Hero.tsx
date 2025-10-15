import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import RequestQuoteButton from "./RequestQuoteButton";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[600px] md:py-12 flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 col-span-full">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                {t("headline")}
              </h1>
            </div>

            <div className="flex flex-row gap-4">
              <Button size="lg" className="bg-primary">
                <Home className="text-white" />
                {t("exploreButtonText")}
                <ArrowRight className="text-white" />
              </Button>
              <RequestQuoteButton />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative col-span-full">
            <div className="relative rounded-none md:rounded-xl overflow-hidden">
              <Image
                width={300}
                height={300}
                src="/hero-port.svg"
                alt="Shipping port with cranes and containers"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
