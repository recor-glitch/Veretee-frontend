import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import Person from "../../../public/person.svg";
import Quote from "../../../public/quote.svg";

const TestimonialsSection = () => {
  const t = useTranslations("testimonials");
  const reviews = [
    {
      author: t("page.reviews.review1.author"),
      quote: t("page.reviews.review1.quote"),
    },
    {
      author: t("page.reviews.review1.author"),
      quote: t("page.reviews.review1.quote"),
    },
    {
      author: t("page.reviews.review1.author"),
      quote: t("page.reviews.review1.quote"),
    },
    {
      author: t("page.reviews.review1.author"),
      quote: t("page.reviews.review1.quote"),
    },
  ];
  return (
    <div className="col-span-full grid grid-cols-2 gap-32">
      <p className="col-span-full text-4xl font-medium">
        {t("page.reviews.title")}
      </p>
      {reviews.map((testimonial, index) => (
        <div
          key={testimonial.author + index}
          className="w-full gap-9 flex min-h-64 col-span-full md:col-span-1"
        >
          <div className="bg-primary relative p-4 flex items-center rounded-md">
            <Image
              src={Quote}
              alt={t("quoteIconAlt")}
              className="absolute text-accent mb-4 right-0 bottom-0 translate-x-1/2 translate-y-[70%]"
            />
            <p className="text-xl mb-6 font-medium text-white">
              "{testimonial.quote}"
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              height={64}
              width={64}
              src={Person}
              alt={testimonial.author}
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="flex items-center gap-1">
              <Star className="text-[#F8C43E]" fill="#F8C43E" />
              <Star className="text-[#F8C43E]" fill="#F8C43E" />
              <Star className="text-[#F8C43E]" fill="#F8C43E" />
              <Star className="text-[#F8C43E]" fill="#F8C43E" />
              <Star className="text-[#F8C43E]" fill="#F8C43E" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
