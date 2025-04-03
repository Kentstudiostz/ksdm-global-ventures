
import { Button } from './ui/button';

const Portfolio = () => {
  const portfolioItems = [
    {
      name: "KSDM Tours",
      category: "Tourism",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&auto=format&fit=crop",
      description: "Leading safari and travel experiences across Tanzania's national parks and Zanzibar beaches."
    },
    {
      name: "Kentstudio",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
      description: "Delivering customized SaaS, marketing automation, and web/mobile applications."
    },
    {
      name: "Serengeti Heights",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop",
      description: "Luxury residential and commercial properties in prime Tanzanian locations."
    },
    {
      name: "KSDM Connect",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
      description: "Suite of mobile applications providing dating, handyman services, and more."
    },
    {
      name: "Coastal Villas",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&auto=format&fit=crop",
      description: "Premium waterfront properties across multiple countries."
    },
    {
      name: "KSDM Capital",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop",
      description: "Fund management and strategic investment portfolio."
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ksdm-navy">Portfolio Highlights</h2>
          <p className="text-lg text-gray-700">
            A selection of our diverse and successful ventures across multiple sectors and regions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
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
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Button variant="link" className="p-0 h-auto text-ksdm-navy font-medium">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-ksdm-navy hover:bg-blue-800">
            View All Portfolio Companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
