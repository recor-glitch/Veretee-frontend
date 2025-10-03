import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import AboutBackground from "../../../public/about-bg.svg";
import { useTranslations } from "next-intl";

function TabsSection() {
  const t = useTranslations("about");
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <Tabs defaultValue="purpose" className="w-full col-span-2">
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

          <TabsContent
            value="purpose"
            className="space-y-6 mt-8 grid grid-cols-2 gap-8"
          >
            <div className="md:col-span-1 col-span-full">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("purpose")}
              </p>
            </div>
            <Image
              src={AboutBackground}
              alt={t("imageAlt")}
              className="w-full h-auto md:col-span-1 col-span-full"
            />
          </TabsContent>

          <TabsContent
            value="mission"
            className="space-y-6 mt-8 grid grid-cols-2 gap-8"
          >
            <div className="md:col-span-1 col-span-full">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("mission")}
              </p>
            </div>
            <Image
              src={AboutBackground}
              alt={t("imageAlt")}
              className="w-full h-auto md:col-span-1 col-span-full"
            />
          </TabsContent>

          <TabsContent
            value="vision"
            className="space-y-6 mt-8 grid grid-cols-2 gap-8 "
          >
            <div className="md:col-span-1 col-span-full">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("vision")}
              </p>
            </div>
            <Image
              src={AboutBackground}
              alt={t("imageAlt")}
              className="w-full h-auto md:col-span-1 col-span-full"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default TabsSection;
