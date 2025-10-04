import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Products = () => {
  const t = useTranslations("products");
  const products = [
    {
      title: t("product1.title"),
      image: "/printer.svg",
      size: "large",
    },
    {
      title: t("product2.title"),
      image: "/product-2.svg",
      size: "large",
    },
    {
      title: t("product3.title"),
      image: "/product-3.svg",
      size: "small",
    },
    {
      title: t("product4.title"),
      image: "/material.svg",
      size: "small",
    },
    {
      title: t("product5.title"),
      image: "/product-2.svg",
      size: "small",
    },
  ];

  return (
    <section className="py-20" id="services">
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

        <Carousel
          opts={{
            align: "start",
            // loop: true,
            duration: 500,
          }}
          orientation="horizontal"
          className="w-full"
        >
          <CarouselContent className="mb-6 gap-6 h-full">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                // Make the first card span 2 columns, others 1
                className={`pt-1 transition-transform duration-300 ${
                  index === 0
                    ? "md:basis-2/3 basis-full h-full" // Large card on desktop, full width on mobile
                    : "md:basis-1/3 basis-2/3"
                }`}
                style={{ maxWidth: index === 0 ? 900 : 450 }}
              >
                <Card
                  key={index}
                  className={`group relative overflow-hidden h-full cursor-pointer animate-fade-in border-none p-0 ${
                    index === 0
                      ? "bg-primary text-white flex flex-col justify-between items-start p-8"
                      : ""
                  }`}
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  {index === 0 ? (
                    <div
                      className={cn(
                        "flex w-full",
                        "md:flex-row flex-col",
                        "gap-6"
                      )}
                    >
                      <div className="flex-1 flex flex-col justify-around items-start">
                        <h3 className="text-[40px] font-bold">
                          {product.title}
                        </h3>
                        <Button
                          variant="default"
                          size="lg"
                          className="bg-white cursor-pointer hover:bg-white text-primary font-semibold px-4 py-2 rounded-full flex items-center gap-2"
                        >
                          {t("learnMore")}
                          <div className="bg-primary rounded-full p-1 -rotate-45">
                            <ArrowRight className="h-4 w-4 text-white" />
                          </div>
                        </Button>
                      </div>
                      <Image
                        width={300}
                        height={300}
                        src={product.image}
                        alt={product.title}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover max-h-[430px] md:w-auto w-full min-w-1/2 rounded-2xl"
                      />
                    </div>
                  ) : (
                    <>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 bg-gradient-to-t from-primary-dark/90 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.slice(0, 3).map((product, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden h-80 cursor-pointer animate-fade-in border-none md:min-h-[450px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 bg-gradient-to-t from-primary-dark/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group rounded-full md:w-3xs md:h-24 text-xl md:text-4xl font-medium"
          >
            {t("viewAll")}
            {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
