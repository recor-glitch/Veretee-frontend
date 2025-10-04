import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import DHLLogo from "../../../public/dhl.svg";
import Flexport from "../../../public/flexport.svg";
import Schenker from "../../../public/schenker.svg";
import UPS from "../../../public/ups.svg";
import { Button } from "../ui/button";

const Partners = () => {
  const t = useTranslations("partners");
  const partners = [
    { name: t("partner.dhl"), icon: DHLLogo },
    { name: t("partner.flexport"), icon: Flexport },
    { name: t("partner.schenker"), icon: Schenker },
    { name: t("partner.ups"), icon: UPS },
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

        <div className="grid grid-rows-2 md:grid-rows-2 gap-8">
          <div className="grid-rows-full flex md:flex-row flex-col gap-12 justify-between items-center md:gap-80 mb-16">
            <h3 className="text-2xl font-bold text-[40px] w-full">
              {t("more")}
            </h3>
            <div className="w-full flex-col">
              <p className="font-medium text-2xl">{t("brief")}</p>
              <Link href={"/testimonial"}>
                <Button className="mt-4 rounded-4xl cursor-pointer" size="lg">
                  {t("readMore")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            {partners.map((partner, index) => (
              <div
                key={partner.name + index}
                className="text-center aspect-square max-h-52 max-w-52 rounded-full bg-secondary flex justify-center items-center overflow-hidden p-4"
              >
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  className="mx-auto text-primary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
