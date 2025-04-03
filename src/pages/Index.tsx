
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BusinessVerticals from "@/components/BusinessVerticals";
import Portfolio from "@/components/Portfolio";
import GlobalPresence from "@/components/GlobalPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <BusinessVerticals />
      <Portfolio />
      <GlobalPresence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
