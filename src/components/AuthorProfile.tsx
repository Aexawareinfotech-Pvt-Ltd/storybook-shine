import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, ExternalLink, Award, Users, TrendingUp } from "lucide-react";

const AuthorProfile = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <div className="flex justify-center lg:justify-start">
            <Card className="p-8 bg-card shadow-elegant">
              <div className="w-80 h-80 rounded-full bg-gradient-primary mx-auto flex items-center justify-center text-primary-foreground text-6xl font-bold">
                RR
              </div>
            </Card>
          </div>

          {/* Author Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">Author</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Sr. Vice President</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Co-Founder</Badge>
              </div>
              
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                Rajan Ramesh
              </h2>
              
              <p className="text-xl text-muted-foreground font-medium">
                Sr. Vice President – Strategic Partnerships | Co-Founder | Engineering Trust.me
              </p>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                A dynamic and results-driven executive with <strong>18+ years of global leadership</strong>, 
                Rajan Ramesh has built a reputation for creating growth in the agriculture and technology sectors.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Proven Sales Leadership</h4>
                  <p className="text-muted-foreground">Forged multi-million-dollar partnerships and expanded global markets.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Trusted Mentor & Strategist</h4>
                  <p className="text-muted-foreground">Known for guiding professionals with clarity, adaptability, and practical wisdom.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Industry Authority</h4>
                  <p className="text-muted-foreground">Deeply connected in agriculture, with insights bridging traditional roots and modern innovation.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Read More About Rajan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorProfile;