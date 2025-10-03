import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Award, Check } from "lucide-react";
import featuresImage from "../../public/hero-port.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("whyChooseUs");

  const stats = [
    { value: "150+", label: t("stats.globalPartner") },
    { value: "10+", label: t("stats.yearsExperience") },
    { value: "85%", label: t("stats.clientPartner"), accent: true },
  ];

  const features = [
    {
      title: t("features.card1.title"),
      description: t("features.card1.description"),
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: t("features.card2.title"),
      description: t("features.card2.description"),
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: t("features.card3.title"),
      description: t("features.card3.description"),
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: t("features.card4.title"),
      description: t("features.card4.description"),
      icon: <Award className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold mb-4">{t("headline")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <section className="py-12 md:px-52">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={cn(
                      "text-5xl font-bold text-primary mb-2",
                      stat.accent && "text-accent"
                    )}
                  >
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xl font-semibold">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
