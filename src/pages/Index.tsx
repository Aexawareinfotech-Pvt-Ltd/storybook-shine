import BookHero from "@/components/BookHero";
import BookFeatures from "@/components/BookFeatures";
import AuthorProfile from "@/components/AuthorProfile";
import ReviewsSection from "@/components/ReviewsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BookHero />
      <BookFeatures />
      <AuthorProfile />
      <ReviewsSection />
      <CallToAction />
    </div>
  );
};

export default Index;
