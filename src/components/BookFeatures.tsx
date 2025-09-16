import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Real Stories, Real Leaders",
    description:
      "10+ powerful experiences from top agripreneurs and industry professionals who have built successful ventures.",
    badge: "Inspirational",
  },
  {
    icon: TrendingUp,
    title: "Growth Frameworks",
    description:
      "Step-by-step lessons on how to transform ideas into scalable, profitable agricultural ventures.",
    badge: "Practical",
  },
  {
    icon: Lightbulb,
    title: "Mindset Shifts",
    description:
      "Overcome limiting beliefs and embrace agriculture as a modern, thriving industry with unlimited potential.",
    badge: "Transformative",
  },
  {
    icon: Target,
    title: "Future of Farming & Business",
    description:
      "Where the industry is heading, and how you can position yourself at the forefront of innovation.",
    badge: "Strategic",
  },
  {
    icon: BookOpen,
    title: "Actionable Tools & Mentorship",
    description:
      "Insights you can apply immediately in your business or career, backed by proven methodologies.",
    badge: "Implementable",
  },
  {
    icon: Award,
    title: "Engineering Trust",
    description:
      "Learn how to create value and build businesses that last through authentic leadership and innovation.",
    badge: "Sustainable",
  },
];

const BookFeatures = () => {
  return (
    <section
      id="book-features"
      className="py-12 sm:py-16 md:py-20 px-4 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            What You'll Discover Inside
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This book doesn't just teach you about agriculture. It teaches you
            how to engineer trust, create value, and build businesses that last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent-foreground text-xs sm:text-sm"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookFeatures;
