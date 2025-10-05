import React from "react";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Story() {
  const t = useTranslations("about");
  const stories = [
    {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400",
      title: "How to use Veretee",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
      title: "How to use Veretee",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400",
      title: "How to use Veretee",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 300,
        }}
        className="w-full col-span-full"
      >
        <div className="col-span-full justify-between gap-4 mb-8 hidden md:flex md:mr-4">
          <h2 className="text-4xl font-bold mb-4">{t("ourStory")}</h2>
          <div>
            <CarouselNext className="relative rounded-full bg-[#D9EBED] p-2 translate-x-0 translate-y-0" />
            <CarouselPrevious className="relative rounded-full bg-primary p-2 text-white translate-x-0 translate-y-0" />
          </div>
        </div>
        <CarouselContent>
          {stories.map((item, index) => (
            <CarouselItem key={index}>
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer border-none shadow-none py-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    fill
                    src={item.image}
                    alt={item.title}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Story;
