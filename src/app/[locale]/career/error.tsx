"use client";

import Image from "next/image";
import React from "react";
import NoCareer from "../../../../public/no-career.svg";
import CTA from "@/components/Landing/CTA";
import { useTranslations } from "next-intl";

function CareerErrorPage() {
  const t = useTranslations("career.error");
  return (
    <div className="min-h-screen bg-background text-center grid grid-cols-3 container mx-auto px-4 py-16">
      <h1 className="text-6xl col-span-full text-primary flex justify-center items-center">
        {t("title")}
      </h1>
      <div className="col-span-full m-auto">
        <Image
          src={NoCareer}
          alt={t("alt")}
          height={400}
          width={400}
          className="max-h-[846px]"
        />
      </div>
      <CTA />
    </div>
  );
}

export default CareerErrorPage;
