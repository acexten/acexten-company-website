import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Pioneering AI Solutions in the UK
            </span>
          </div>

          {/* Main headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transform Your Business with{" "}
            <span className="relative">
              <span className="relative z-10">Intelligent AI</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0" />
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Acexten delivers cutting-edge AI chatbots, automation tools, analytics, 
            and development platforms designed to accelerate your digital transformation.
          </p>

          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="gradient-accent text-accent-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold shadow-glow"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-sm text-primary-foreground/60 mb-4">Trusted by innovative companies</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Enterprise Ready", "GDPR Compliant", "UK Based", "24/7 Support"].map((item) => (
                <span 
                  key={item} 
                  className="text-primary-foreground/70 font-medium text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
