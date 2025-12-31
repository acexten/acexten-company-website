import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Acexten</h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Empowering businesses with intelligent AI solutions. From chatbots to analytics, 
              we deliver the technology you need to lead in the digital age.
            </p>
            <div className="text-sm text-primary-foreground/60">
              <p>Peterborough Business Park</p>
              <p>Lynch Wood, Peterborough PE2 6GB</p>
              <p>United Kingdom</p>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {[
                "AI Chatbots",
                "Automation Tools",
                "Analytics Platform",
                "Development API",
              ].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", action: () => scrollToSection("services") },
                { label: "Why Acexten", action: () => scrollToSection("services") },
                { label: "Contact", action: () => scrollToSection("contact") },
                { label: "Privacy Policy", action: () => {} },
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={item.action}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Acexten. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary-foreground transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
