"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Client {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

const PartnersStrip: React.FC = () => {
  const t = useTranslations("about");
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients: Client[] = [
    {
      id: 1,
      name: t("story.partner.dhl"),
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      bgColor: "bg-yellow-400",
    },
    {
      id: 2,
      name: t("story.partner.ups"),
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      bgColor: "bg-amber-900",
    },
    {
      id: 3,
      name: t("story.partner.schenker"),
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=300&fit=crop",
      bgColor: "bg-red-600",
    },
    {
      id: 4,
      name: t("story.partner.flexport"),
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
      bgColor: "bg-purple-600",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, clients.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleClients = clients.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="flex items-center justify-center w-full container mx-auto px-4 py-12">
      <div className="w-full">
        <div className="gap-8 grid grid-cols-4">
          {/* Left Content Section */}
          <div className="md:col-span-2 col-span-full p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("story.title")}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("story.description")}
            </p>
            <Link href={"/testimonial"}>
              <Button className="bg-primary w-fit cursor-pointer">
                {t("story.readMore")}
              </Button>
            </Link>

            {/* Navigation Controls */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center transition-all duration-200 ${
                  currentIndex === 0
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center transition-all duration-200 ${
                  currentIndex >= maxIndex
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Client Cards Section - Horizontally on Right */}
          <div className="gap-9 overflow-x-hidden md:col-span-2 col-span-full flex">
            {visibleClients.map((client, index) => (
              <div
                key={client.id}
                className="group relative overflow-hidden min-w-0"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full min-h-2/3 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-3xl font-medium text-gray-800">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-blue-500"
                  : "w-2 bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PartnersStrip;
