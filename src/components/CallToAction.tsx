import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Clock, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const CallToAction = () => {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
      }}
    >
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <Card className="bg-card/90 backdrop-blur-md shadow-elegant border-0 p-6 md:p-8 lg:p-12">
          <CardContent className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <Badge
                variant="secondary"
                className="bg-accent/20 text-accent-foreground px-3 py-1 md:px-4 md:py-2 text-xs sm:text-sm font-semibold"
              >
                Limited Time Offer
              </Badge>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Why You Should Read This Book{" "}
                <span className="text-primary">NOW</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-left">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:font-semibold">
                      $10+ Trillion Industry
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Agriculture opportunities are bigger than ever
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:font-semibold">
                      Future-Proof Career
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Build wealth in a sustainable industry
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:font-semibold">Act Early</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Don't wait until it's too late to invest
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 md:pt-8">
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-medium italic mb-6 md:mb-8">
                "Most people wait until it's too late to invest in the future.
                Be among the few who act early. Start your journey today — from
                seed to scale."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="group text-sm sm:text-base px-4 sm:px-6 md:px-8 lg:px-12"
                  onClick={() => window.open("https://amazon.com", "_blank")}
                >
                  <span className="hidden sm:inline">
                    Get Your Copy Now on Amazon
                  </span>
                  <span className="sm:hidden">Get on Amazon</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
                <Button
                  variant="accent"
                  size="lg"
                  className="text-sm sm:text-base px-4 sm:px-6 md:px-8"
                >
                  <span className="hidden sm:inline">
                    Download Free Chapter
                  </span>
                  <span className="sm:hidden">Free Chapter</span>
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mt-4 md:mt-6">
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
