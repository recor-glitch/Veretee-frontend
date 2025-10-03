import { useTranslations } from "next-intl";
import Image from "next/image";
import Person from "../../../public/person.svg";
import Quote from "../../../public/quote.svg";

const Testimonials = () => {
  const t = useTranslations("testimonials");
  const testimonials = [
    {
      quote: t("author1.quote"),
      author: t("author1.author"),
      role: t("author1.role"),
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      quote: t("author2.quote"),
      author: t("author2.author"),
      role: t("author2.role"),
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author + index}
              className="w-full gap-9 flex min-h-64"
            >
              <div className="border relative border-accent p-4 flex items-center rounded-md">
                <Image
                  src={Quote}
                  alt={t("quoteIconAlt")}
                  className="absolute text-accent mb-4 right-0 bottom-0 translate-x-1/2 translate-y-[70%]"
                />
                <p className="text-2xl mb-6 font-bold text-[#64748B]">
                  "{testimonial.quote}"
                </p>
              </div>
              <Image
                height={64}
                width={64}
                src={Person}
                alt={testimonial.author}
                className="w-32 h-32 rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
