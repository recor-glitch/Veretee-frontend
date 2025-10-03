import React from "react";
import { Leaf } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Businesses() {
  const t = useTranslations("about");
  const left = [
    "Machined Products",
    "Textile & Yarn",
    "Kitchen Products",
    "Wellness Products",
  ];
  const right = ["3 D Printing Products", "Toys", "Raw Materials"];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {t("story.businesses.ourBusinesses")}
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-16">
          {left.map((item) => (
            <Link key={item} href={"#"}>
              <div className="border-b pb-4 flex items-center gap-3">
                <Leaf className="text-primary" />
                <span className="text-2xl">{item}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-16">
          {right.map((item) => (
            <Link key={item} href={"#"}>
              <div className="border-b pb-4 flex items-center gap-3">
                <Leaf className="text-primary" />
                <span className="text-2xl">{item}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Businesses;
