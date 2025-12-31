import { Card, CardContent } from "@/components/ui/card";
import { Bot, Cog, BarChart3, Code2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description: "Deploy intelligent conversational agents that understand context, learn from interactions, and provide 24/7 customer support with human-like responses.",
  },
  {
    icon: Cog,
    title: "AI Automation Tools",
    description: "Streamline your workflows with smart automation that handles repetitive tasks, reduces errors, and frees your team to focus on high-value activities.",
  },
  {
    icon: BarChart3,
    title: "AI Analytics & Insights",
    description: "Unlock hidden patterns in your data with advanced analytics. Get actionable insights and predictive intelligence to drive informed decisions.",
  },
  {
    icon: Code2,
    title: "AI Development Platform",
    description: "Build, train, and deploy custom AI models with our comprehensive development platform. APIs, SDKs, and tools designed for rapid innovation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            AI Solutions That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground">
            From intelligent chatbots to powerful analytics, we provide the AI tools 
            your business needs to thrive in the digital age.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden border-border/50 bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
