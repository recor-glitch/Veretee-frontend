"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export default function ServiceCatalog() {
  const t = useTranslations("service");
  const services = t.raw("services") as Service[];
  const categories = t.raw("categories") as { id: string; label: string }[];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => {
          switch (activeCategory) {
            case "cnc":
              return service.category === "CNC Product";
            case "fabricated":
              return service.category === "Fabricated Product";
            case "cad":
              return service.category === "CAD Software";
            case "3d":
              return service.category === "3D Modelling";
            default:
              return true;
          }
        });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          {t("title")}
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 bg-gray-100 rounded-full">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredServices.map((service) => (
          <div key={service.id} className=" overflow-hidden">
            {/* Service Image */}
            <div className="relative h-48 bg-gray-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = "/placeholder-service.jpg";
                }}
              />
            </div>

            {/* Service Content */}
            <div className="p-4 flex flex-col gap-4">
              <span className="w-fit bg-[#FDDF91] text-primary text-xs px-2 py-1 rounded-full">
                {service.category}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="w-fit text-[#F8C43E] border border-[#F8C43E] text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={"/services/[service]"}
                    as={`/services/${service.id}`}
                  >
                    <button className="flex items-center cursor-pointer gap-2 px-3 py-2 border border-primary rounded-full text-sm text-primary ">
                      <Globe className="w-4 h-4" />
                      {t("viewDetails")}
                    </button>
                  </Link>
                  <button className="px-3 py-2 bg-primary text-white rounded-full text-sm hover:bg-blue-700 transition-colors">
                    {t("requestSample")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
