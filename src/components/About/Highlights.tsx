import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Layers } from "lucide-react";
import { useTranslations } from "next-intl";

function Highlights() {
  const t = useTranslations("about");
  const items = [
    { title: t("stats.countiesPresent") },
    { title: t("stats.partners") },
    { title: t("stats.warehouses") },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <Card
            key={idx}
            className="text-left animate-fade-in p-16"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={cn("text-5xl font-bold text-primary mb-2")}>
              <Layers className="w-10 h-10 text-primary" />
            </div>
            <div className="text-muted-foreground text-xl font-semibold">
              {item.title}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
