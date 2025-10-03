import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("cta");
  return (
    <section className="py-20 col-span-full" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("headline")}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              <Phone className="mr-2 h-5 w-5" />
              {t("contact")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              {t("knowAboutUs")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
