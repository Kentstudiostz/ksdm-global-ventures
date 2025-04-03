
import { Building, Compass, Globe, Laptop } from 'lucide-react';
import { Button } from './ui/button';

const BusinessVerticals = () => {
  const verticals = [
    {
      title: "Real Estate",
      icon: Building,
      description: "Development and investment in premium real estate properties across the USA, Canada, Tanzania, and beyond.",
      features: ["Commercial Properties", "Residential Developments", "Hospitality Venues", "Property Management"],
      color: "from-blue-900 to-blue-700"
    },
    {
      title: "Tourism",
      icon: Compass,
      description: "KSDM Tours connects global travelers with Tanzania's breathtaking landscapes, from Serengeti safaris to Zanzibar beaches.",
      features: ["Safari Expeditions", "Beach Getaways", "Cultural Experiences", "Luxury Accommodations"],
      color: "from-green-800 to-green-600"
    },
    {
      title: "Technology",
      icon: Laptop,
      description: "Kentstudio delivers custom SaaS solutions, marketing automation, website development, and mobile applications.",
      features: ["Custom SaaS Solutions", "Marketing Automation", "Web Development", "Mobile Applications"],
      color: "from-purple-900 to-purple-700"
    },
    {
      title: "Global Investments",
      icon: Globe,
      description: "Strategic investments and fund hedging to grow capital across diverse sectors and markets worldwide.",
      features: ["Venture Capital", "Fund Hedging", "Strategic Investments", "Portfolio Management"],
      color: "from-amber-800 to-amber-600"
    }
  ];

  return (
    <section id="verticals" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ksdm-navy">Our Business Verticals</h2>
          <p className="text-lg text-gray-700">
            KSDM LLC operates across multiple verticals, each with a focused approach to creating value and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {verticals.map((vertical, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-md bg-white hover-scale"
            >
              <div className={`bg-gradient-to-r ${vertical.color} p-6 text-white`}>
                <vertical.icon className="h-10 w-10 mb-3" />
                <h3 className="text-2xl font-semibold mb-2">{vertical.title}</h3>
                <p className="opacity-90">{vertical.description}</p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-2">
                  {vertical.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-ksdm-navy text-ksdm-navy hover:bg-ksdm-navy hover:text-white w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
