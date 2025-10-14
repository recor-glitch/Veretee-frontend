import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

        <div className="product-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="product-card-hover h-80 cursor-pointer animate-fade-in border-none md:min-h-[450px] rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="card-image rounded-2xl"
              />
              
              {/* Original title overlay (visible by default) */}
              <div className="original-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{product.title}</h3>
              </div>

              {/* Hover overlay with new layout */}
              <div className="card-overlay">
                <div className="card-text-content">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    {product.title}
                  </h2>
                  <button className="learn-more-btn">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="card-image-content">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
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
