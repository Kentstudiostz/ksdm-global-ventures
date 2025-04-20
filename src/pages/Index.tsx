
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import TrendingProducts from "@/components/TrendingProducts";
import BrandStory from "@/components/BrandStory";
import VideoFeature from "@/components/VideoFeature";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <VideoFeature />
      <TrendingProducts />
      <BrandStory />
      <Collections />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
