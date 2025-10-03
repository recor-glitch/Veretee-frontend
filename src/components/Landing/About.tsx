import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AboutBackground from "../../../public/about-bg.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutSection = () => {
  const t = useTranslations("about");
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" id="about">
      <div className="mb-12">
        <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {t("badge")}
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <Tabs defaultValue="purpose" className="w-full">
          <TabsList className="bg-transparent p-0 h-auto flex justify-between border-b border-border w-full gap-8 mb-8">
            <TabsTrigger
              value="purpose"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-0 pb-3"
            >
              {t("purposeTab")}
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-0 pb-3"
            >
              {t("missionTab")}
            </TabsTrigger>
            <TabsTrigger
              value="vision"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-0 pb-3"
            >
              {t("visionTab")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="purpose" className="space-y-6 mt-8">
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("purpose")}
            </p>
            <Link href={"/about"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                {t("readMore")}
              </Button>
            </Link>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6 mt-8">
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("mission")}
            </p>
            <Link href={"/about"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                {t("readMore")}
              </Button>
            </Link>
          </TabsContent>

          <TabsContent value="vision" className="space-y-6 mt-8">
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("vision")}
            </p>
            <Link href={"/about"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                {t("readMore")}
              </Button>
            </Link>
          </TabsContent>
        </Tabs>

        {/* Illustration */}
        <div className="flex items-center justify-center">
          <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <Image
              src={AboutBackground}
              alt={t("imageAlt")}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
