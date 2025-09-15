import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, ExternalLink, Award, Users, TrendingUp } from "lucide-react";
import image from "@/assets/image.png";

const AuthorProfile = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Author Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Card className="p-4 sm:p-6 md:p-8 bg-card shadow-elegant">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary mx-auto flex items-center justify-center text-primary-foreground text-4xl sm:text-5xl md:text-6xl font-bold">
                <img
                  src={image}
                  alt="Author"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </Card>
          </div>

          {/* Author Info */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary text-xs sm:text-sm"
                >
                  Author
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary text-xs sm:text-sm"
                >
                  Sr. Vice President
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary text-xs sm:text-sm"
                >
                  Co-Founder
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Rajan Ramesh
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground font-medium">
                Sr. Vice President – Strategic Partnerships | Co-Founder |
                Engineering Trust.me
              </p>
            </div>

            <div className="prose prose-sm sm:prose-base md:prose-lg text-muted-foreground space-y-3 md:space-y-4">
              <p>
                A dynamic and results-driven executive with{" "}
                <strong>18+ years of global leadership</strong>, Rajan Ramesh
                has built a reputation for creating growth in the agriculture
                and technology sectors.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Proven Sales Leadership
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Forged multi-million-dollar partnerships and expanded global
                    markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Trusted Mentor & Strategist
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Known for guiding professionals with clarity, adaptability,
                    and practical wisdom.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Industry Authority
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Deeply connected in agriculture, with insights bridging
                    traditional roots and modern innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rajan-r-351480140/",
                    "_blank"
                  )
                }
                className="group text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              {/* <Button variant="outline" size="lg">
                Read More About Rajan
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorProfile;
