import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function Story() {
  const t = useTranslations("about.ourStory");
  const stories = t.raw("stories") as { image: string; content: string }[];

  return (
    <section className="container mx-auto px-4 py-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 300,
        }}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
          <div className="col-span-full justify-end items-center gap-4 hidden md:flex">
            <CarouselNext className="relative rounded-full bg-[#D9EBED] p-2 translate-x-0 translate-y-0" />
            <CarouselPrevious className="relative rounded-full bg-primary p-2 text-white translate-x-0 translate-y-0" />
          </div>
        </div>
        <CarouselContent>
          {stories.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-[80%] h-2 bg-primary" />
                <div className="items-center grid grid-cols-3">
                  <div className="flex-1 pt-5 md:p-5 col-span-full md:col-span-2">
                    <div className="md:text-2xl font-normal text-gray-900">
                      {item.content}
                    </div>
                  </div>
                  <div className="col-span-full md:col-span-1 h-40 md:h-80 py-5 md:p-5">
                    <div className="relative h-full rounded-lg overflow-hidden border-4 border-accent">
                      <Image
                        fill
                        src={item.image}
                        alt="Our story"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-[90%] h-2 bg-accent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Story;
