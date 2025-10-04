import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Person from "../../../../../public/person.svg";

async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const t = await getTranslations("news.insights");

  // Get the article data
  const title = t(`${article}.title`);
  const content = t(`${article}.content`);
  const author = t(`${article}.author`);
  const date = t(`${article}.date`);
  const excerpt = t(`${article}.excerpt`);

  return (
    <div className="col-span-full flex flex-col gap-8 md:gap-8">
      <h1 className="text-5xl md:text-4xl text-primary font-bold">{title}</h1>
      <p className="text-xl md:text-2xl font-light">{excerpt}</p>
      <p className="text-sm text-gray-500 mb-8 flex items-center gap-4">
        <span className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            height={30}
            width={30}
            src={Person}
            alt="Person"
            className="w-full h-full object-cover"
          />
        </span>
        <span className="text-xl font-light">{author}</span>
        <span className="text-xl font-light">{date}</span>
      </p>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

export default ArticlePage;
