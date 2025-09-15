import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import bookCover from "@/assets/book-cover.jpg";
import { ExternalLink, Star, Users, TrendingUp } from "lucide-react";

const BookHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Seed to <span className="bg-gradient-primary bg-clip-text text-transparent">Scale</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                How Modern Agripreneurs Are Growing Million-Dollar Businesses While Feeding the Future
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Agriculture is no longer just about farming — it's about vision, innovation, and building sustainable businesses that feed the world while generating real wealth.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">$10T+ Industry</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="font-semibold">10+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Future-Proof Career</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => window.open('https://amazon.com', '_blank')}
              >
                Get Your Copy on Amazon
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Read Sample Chapter
              </Button>
            </div>
          </div>

          {/* Right Column - Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-elegant border-0">
              <div className="relative">
                <img 
                  src={bookCover} 
                  alt="Seed to Scale Book Cover" 
                  className="w-80 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                  Available Now!
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookHero;