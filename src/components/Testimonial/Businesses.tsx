import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function BusinessesSection() {
  const t = useTranslations("testimonials");
  const businesses = [
    {
      title: t("page.businesses.ups.title"),
      description: t("page.businesses.ups.description"),
      image: "/ups-bg.svg",
    },
    {
      title: t("page.businesses.dhl.title"),
      description: t("page.businesses.dhl.description"),
      image: "/dhl-bg.svg",
    },
    {
      title: t("page.businesses.flexport.title"),
      description: t("page.businesses.flexport.description"),
      image: "/flexport-bg.svg",
    },
    {
      title: t("page.businesses.ups.title"),
      description: t("page.businesses.ups.description"),
      image: "/ups-bg.svg",
    },
    {
      title: t("page.businesses.dhl.title"),
      description: t("page.businesses.dhl.description"),
      image: "/dhl-bg.svg",
    },
    {
      title: t("page.businesses.flexport.title"),
      description: t("page.businesses.flexport.description"),
      image: "/flexport-bg.svg",
    },
  ];
  return (
    <div className="col-span-full grid grid-cols-3 gap-16">
      {businesses.map((item, index) => (
        <Card
          key={index}
          className="overflow-hidden group cursor-pointer border-none shadow-none py-0 col-span-full md:col-span-1 rounded-none"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative md:min-h-[400] h-64 overflow-hidden">
            <Image
              fill
              src={item.image}
              alt={item.title}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="text-left flex flex-col items-start gap-4">
            <h2 className="text-2xl font-medium">{item.title}</h2>
            <p className="text-[16px] font-normal mb-4 text-black line-clamp-3">
              {item.description}
            </p>
            <Link href={`/testimonial/${item.title}`}>
              <Button
                variant="link"
                className="p-0 h-auto group/btn underline underline-offset-4 cursor-pointer"
              >
                {t("page.readMore")}
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default BusinessesSection;
