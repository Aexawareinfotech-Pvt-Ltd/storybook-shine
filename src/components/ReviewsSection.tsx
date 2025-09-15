import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    rating: 5,
    title: "A Game-Changer for Agriculture",
    review:
      "Easy to read, yet packed with intelligent insights. This book compels you to take action — not just dream.",
    author: "Axit P.",
    role: "Agricultural Consultant",
    verified: true,
  },
  {
    rating: 5,
    title: "Practical Wisdom That Works",
    review:
      "Blends professional strategy with mentorship wisdom. Written with authenticity, humility, and leadership.",
    author: "Jainil P.",
    role: "Farm Owner & Entrepreneur",
    verified: true,
  },
  {
    rating: 5,
    title: "The Future of Farming",
    review:
      "Finally, a book that shows agriculture as the modern, innovative industry it truly is. Highly recommended!",
    author: "Aesha K.",
    role: "AgTech Investor",
    verified: true,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Why Readers Love It
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-accent text-accent"
              />
            ))}
            <span className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground ml-2">
              5.0 Average Rating
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Join thousands of professionals who have transformed their
            agricultural careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      Verified Purchase
                    </Badge>
                  )}
                </div>

                <h4 className="font-semibold text-foreground text-base sm:text-lg">
                  {review.title}
                </h4>

                <div className="relative">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/30 absolute -top-1 sm:-top-2 -left-1" />
                  <p className="text-muted-foreground italic pl-4 sm:pl-6 leading-relaxed text-sm sm:text-base">
                    {review.review}
                  </p>
                </div>

                <div className="pt-3 md:pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {review.author}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-6 md:p-8 max-w-2xl mx-auto space-y-4 md:space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Join the Conversation
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              After reading, share your thoughts and feedback on Amazon. Your
              review will help inspire others to join this journey — and it
              ensures you stay connected for Rajan's upcoming books and courses.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://amazon.com", "_blank")}
              className="group text-sm sm:text-base"
            >
              Leave a Review on Amazon
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
