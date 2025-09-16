import BookHero from "@/components/BookHero";
import BookFeatures from "@/components/BookFeatures";
import AuthorProfile from "@/components/AuthorProfile";
import ReviewsSection from "@/components/ReviewsSection";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="">
        <BookHero />
        <BookFeatures />
        <AuthorProfile />
        <ReviewsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
