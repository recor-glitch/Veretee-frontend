import { Button } from "@/components/ui/button";

const Introduction = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-block bg-accent/20 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
          INTRODUCTION
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built on Trust, Driven by Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With decades of combined experience in maritime, logistics, and
              industrial sectors, Veretee stands as your reliable partner for
              comprehensive B2B solutions. We connect businesses globally with
              precision, efficiency, and unwavering commitment to quality.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)]">
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Global Partners</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)]">
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)]">
              <div className="text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)]">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
