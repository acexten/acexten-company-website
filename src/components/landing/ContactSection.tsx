import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how Acexten can help you harness the power of AI.
            Fill out the form and our team will get back to you promptly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <Card className="lg:col-span-3 border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <form
                action="https://formspree.io/f/xqeannok"
                method="POST"
                className="space-y-6"
                onSubmit={() =>
                  toast({
                    title: "Message sent successfully!",
                    description:
                      "Thank you for your interest. Our team will be in touch shortly.",
                  })
                }
              >
                {/* Email subject */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission – Acexten"
                />

                {/* Spam protection */}
                <input type="text" name="_gotcha" className="hidden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company Ltd"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project and goals..."
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-accent text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Address</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Peterborough Business Park
                      <br />
                      Lynch Wood, Peterborough
                      <br />
                      PE2 6GB, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      pk@acexten.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      +44 (0) 7810117131
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Quick Response Guarantee:
                </span>{" "}
                Our team typically responds within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
