import { Button } from "@/components/ui/button";
import { Ship, Container, Anchor, Boxes } from "lucide-react";

const ProductSolution = () => {
  const solutions = [
    {
      icon: Ship,
      title: "Maritime Services",
      description: "Comprehensive shipping and vessel management solutions",
      image: "maritime",
    },
    {
      icon: Container,
      title: "Logistics Solutions",
      description: "End-to-end supply chain and freight management",
      image: "logistics",
    },
    {
      icon: Anchor,
      title: "Port Operations",
      description: "Efficient port handling and cargo services",
      image: "port",
    },
    {
      icon: Boxes,
      title: "Industrial Supply",
      description: "Quality equipment and material procurement",
      image: "industrial",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/20 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Product Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide integrated solutions across multiple sectors to meet all
            your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all hover-scale group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <solution.icon className="w-16 h-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                >
                  View Details →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 py-3">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSolution;
