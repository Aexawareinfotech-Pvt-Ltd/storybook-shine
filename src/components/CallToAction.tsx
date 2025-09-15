import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Clock, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const CallToAction = () => {
  return (
    <section 
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`
      }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <Card className="bg-card/90 backdrop-blur-md shadow-elegant border-0 p-8 lg:p-12">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground px-4 py-2 text-sm font-semibold">
                Limited Time Offer
              </Badge>
              
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                Why You Should Read This Book <span className="text-primary">NOW</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">$10+ Trillion Industry</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Agriculture opportunities are bigger than ever
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Future-Proof Career</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Build wealth in a sustainable industry
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Act Early</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Don't wait until it's too late to invest
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <blockquote className="text-xl lg:text-2xl text-foreground font-medium italic mb-8">
                "Most people wait until it's too late to invest in the future. Be among the few who act early. 
                Start your journey today — from seed to scale."
              </blockquote>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  className="group text-lg px-12"
                  onClick={() => window.open('https://amazon.com', '_blank')}
                >
                  Get Your Copy Now on Amazon
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="accent" size="xl" className="text-lg px-8">
                  Download Free Chapter
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Join the movement of modern agripreneurs shaping the future
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;