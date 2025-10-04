import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";

const News = () => {
  const t = useTranslations("news");
  const newsItems = [
    {
      id: "news1",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400",
      title: t("insights.news1.title"),
      date: t("insights.news1.date"),
      excerpt: t("insights.news1.excerpt"),
    },
    {
      id: "news2",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
      title: t("insights.news2.title"),
      date: t("insights.news2.date"),
      excerpt: t("insights.news2.excerpt"),
    },
    {
      id: "news3",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400",
      title: t("insights.news3.title"),
      date: t("insights.news3.date"),
      excerpt: t("insights.news3.excerpt"),
    },
    {
      id: "news4",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
      title: t("insights.news4.title"),
      date: t("insights.news4.date"),
      excerpt: t("insights.news4.excerpt"),
    },
    {
      id: "news5",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
      title: t("insights.news5.title"),
      date: t("insights.news5.date"),
      excerpt: t("insights.news5.excerpt"),
    },
  ];

  return (
    <section className="py-20 bg-background col-span-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold mb-4">{t("headline")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("liveUpdate")}
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-12 overflow-x-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 300,
            }}
            className="w-full col-span-full"
          >
            <div className="col-span-full justify-end gap-4 mb-8 hidden md:flex">
              <CarouselNext className="relative rounded-full bg-[#D9EBED] p-2 translate-x-0 translate-y-0" />
              <CarouselPrevious className="relative rounded-full bg-primary p-2 text-white translate-x-0 translate-y-0" />
            </div>
            <CarouselContent>
              {newsItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/4 basis-1/2">
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
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[16px] font-medium mb-4 text-black line-clamp-3">
                        {item.excerpt}
                      </p>
                      <Link href={`/insight/${item.id}`}>
                        <Button
                          variant="link"
                          className="p-0 h-auto group/btn underline underline-offset-4 cursor-pointer"
                        >
                          {t("readMore")}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default News;
