import { Shield, Zap, Users, Globe, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and GDPR compliance built into every solution.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Go live in days, not months. Our pre-built modules accelerate implementation.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Expert team based in the UK, providing personalised guidance at every step.",
  },
  {
    icon: Globe,
    title: "Scalable Infrastructure",
    description: "Cloud-native architecture that grows with your business needs.",
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "99.9% uptime guarantee with real-time monitoring and instant failover.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Trusted by businesses across industries to deliver measurable ROI.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Acexten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Built for Business, Designed for Success
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge AI technology with enterprise-grade reliability 
            to deliver solutions you can trust.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group text-center p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
