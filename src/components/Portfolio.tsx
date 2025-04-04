
import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    "All",
    "Tourism",
    "Technology",
    "Real Estate",
    "Investment"
  ];
  
  const portfolioItems = [
    {
      name: "KSDM Tours",
      category: "Tourism",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&auto=format&fit=crop",
      description: "Leading safari and travel experiences across Tanzania's national parks and Zanzibar beaches.",
      detailedDescription: "KSDM Tours offers premier safari experiences that connect travelers with Tanzania's extraordinary wildlife and landscapes. Our expert guides, luxury accommodations, and customized itineraries ensure unforgettable journeys through the Serengeti, Ngorongoro Crater, Kilimanjaro, and the pristine beaches of Zanzibar. With a focus on sustainable tourism and authentic cultural exchange, we create life-changing experiences that benefit local communities while providing travelers with memories that last a lifetime."
    },
    {
      name: "Kentstudio",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
      description: "Delivering customized SaaS, marketing automation, and web/mobile applications.",
      detailedDescription: "Kentstudio is our technology powerhouse, developing cutting-edge digital solutions for businesses across industries. Our team of skilled developers and designers creates custom SaaS platforms, sophisticated marketing automation systems, and intuitive mobile applications that drive business growth. Each solution is tailored to address specific client challenges, with scalable architecture that evolves with their needs. Our iterative development process and ongoing support ensure technology that consistently delivers value long after initial deployment."
    },
    {
      name: "Serengeti Heights",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop",
      description: "Luxury residential and commercial properties in prime Tanzanian locations.",
      detailedDescription: "Serengeti Heights represents our flagship real estate development in Tanzania, featuring premium residential complexes and commercial spaces that blend modern luxury with authentic African design elements. Located in strategic growth areas with spectacular views of natural landscapes, these properties offer exceptional investment value with strong appreciation potential. The development includes sustainable features such as solar power integration, water recycling systems, and locally sourced materials, creating living and working spaces that honor Tanzania's natural beauty while providing world-class amenities."
    },
    {
      name: "KSDM Connect",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
      description: "Suite of mobile applications providing dating, handyman services, and more.",
      detailedDescription: "KSDM Connect comprises our portfolio of lifestyle applications designed to solve everyday challenges and enrich users' lives. This includes our popular dating platform that uses advanced algorithms to create meaningful connections, our on-demand handyman service connecting skilled professionals with homeowners, and several other utility apps serving diverse needs. Each application is built with intuitive user interfaces, robust backend systems, and engagement-focused features that create loyal user communities and recurring revenue streams."
    },
    {
      name: "Coastal Villas",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop",
      description: "Premium waterfront properties across multiple countries.",
      detailedDescription: "Coastal Villas is our collection of exceptional waterfront properties spanning the United States, Canada, and Tanzania. These carefully selected and developed residences offer unparalleled ocean and lake views, private beach access, and architectural designs that maximize indoor-outdoor living. Each property incorporates hurricane-resistant construction, smart home technology, and eco-friendly features. Investors benefit from strong rental yields during peak seasons and significant long-term appreciation, while residents enjoy resort-style amenities and pristine natural surroundings."
    },
    {
      name: "KSDM Capital",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop",
      description: "Fund management and strategic investment portfolio.",
      detailedDescription: "KSDM Capital manages our diversified investment fund, employing sophisticated strategies to preserve and grow wealth across market cycles. We identify emerging opportunities in both established and developing markets, with particular focus on technology startups, sustainable energy projects, healthcare innovations, and strategic real estate acquisitions. Our fund has consistently outperformed market benchmarks through disciplined risk management, in-depth research, and our unique global perspective that identifies value overlooked by traditional investment firms."
    }
  ];

  const filteredItems = activeCategory && activeCategory !== "All"
    ? portfolioItems.filter(item => item.category === activeCategory)
    : portfolioItems;

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ksdm-navy">Portfolio Highlights</h2>
          <p className="text-lg text-gray-700">
            Explore our diverse and successful ventures across multiple sectors and regions, each demonstrating our commitment to excellence and sustainable growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-ksdm-navy hover:bg-blue-800" 
                : "border-ksdm-navy text-ksdm-navy hover:bg-ksdm-navy hover:text-white"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="group rounded-lg overflow-hidden shadow-md bg-white hover-scale">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="bg-ksdm-gold text-ksdm-navy px-2 py-1 text-sm font-medium rounded mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{item.detailedDescription}</p>
                <div className="flex justify-between items-center">
                  <Button variant="link" className="p-0 h-auto text-ksdm-navy font-medium">
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full border border-ksdm-navy text-ksdm-navy hover:bg-ksdm-navy hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">External link</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-ksdm-navy hover:bg-blue-800">
            View All Portfolio Companies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
