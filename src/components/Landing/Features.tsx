import { Shield, Clock, Globe2, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "ISO certified operations with comprehensive insurance coverage and risk management",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service and real-time tracking for peace of mind",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description:
        "Extensive worldwide presence with local expertise in major trade routes",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Rigorous quality control standards and industry-leading certifications",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] text-center hover-scale"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
