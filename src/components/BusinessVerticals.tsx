
import { Building, Compass, Globe, Laptop } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const BusinessVerticals = () => {
  const [expandedVertical, setExpandedVertical] = useState<number | null>(null);

  const toggleVertical = (index: number) => {
    setExpandedVertical(expandedVertical === index ? null : index);
  };

  const verticals = [
    {
      title: "Real Estate",
      icon: Building,
      description: "Development and investment in premium real estate properties across the USA, Canada, Tanzania, and beyond.",
      features: ["Commercial Properties", "Residential Developments", "Hospitality Venues", "Property Management"],
      color: "from-blue-900 to-blue-700",
      detailedContent: (
        <div className="space-y-4">
          <p>
            KSDM LLC's real estate division identifies and develops high-potential properties in strategic locations across multiple continents. Our portfolio includes luxury residential complexes, commercial centers, and hospitality properties designed with sustainability and community enhancement in mind.
          </p>
          <h4 className="font-semibold text-lg">Our Approach</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Market Analysis</span>: We conduct thorough market research to identify emerging neighborhood trends and investment opportunities before they become mainstream.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Value Creation</span>: Our developments enhance communities through thoughtful design, sustainable practices, and amenities that improve quality of life.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Investor Returns</span>: We structure investments to provide both steady cash flow and long-term appreciation, with target annual returns exceeding 12%.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Global Portfolio</span>: Our diversified holdings across North America, East Africa, and beyond provide resilience against regional market fluctuations.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Tourism",
      icon: Compass,
      description: "KSDM Tours connects global travelers with Tanzania's breathtaking landscapes, from Serengeti safaris to Zanzibar beaches.",
      features: ["Safari Expeditions", "Beach Getaways", "Cultural Experiences", "Luxury Accommodations"],
      color: "from-green-800 to-green-600",
      detailedContent: (
        <div className="space-y-4">
          <p>
            KSDM Tours offers unparalleled access to Tanzania's natural wonders and cultural treasures. Our experienced guides, luxury accommodations, and customized itineraries ensure unforgettable journeys for travelers seeking authentic African experiences.
          </p>
          <h4 className="font-semibold text-lg">Signature Experiences</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Serengeti Migration Safaris</span>: Witness nature's greatest spectacle as millions of wildebeest and zebra traverse the plains in search of fresh grazing.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Zanzibar Luxury Retreats</span>: Experience the perfect blend of pristine beaches, spice-infused cuisine, and Stone Town's rich history.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Kilimanjaro Expeditions</span>: Conquer Africa's highest peak with our expert guides and premium support services that ensure safety and comfort.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Cultural Immersion</span>: Connect with local communities through ethical cultural exchanges that benefit both travelers and host communities.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Technology",
      icon: Laptop,
      description: "Kentstudio delivers custom SaaS solutions, marketing automation, website development, and mobile applications.",
      features: ["Custom SaaS Solutions", "Marketing Automation", "Web Development", "Mobile Applications"],
      color: "from-purple-900 to-purple-700",
      detailedContent: (
        <div className="space-y-4">
          <p>
            Kentstudio leverages cutting-edge technologies to create intuitive digital solutions that drive business growth. Our team of developers, designers, and marketing specialists collaborate to deliver products that exceed expectations and provide measurable ROI.
          </p>
          <h4 className="font-semibold text-lg">Our Technology Stack</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Modern Web Development</span>: React, Vue, and Angular frameworks for responsive, high-performance web applications that scale with your business.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Mobile Excellence</span>: Native and cross-platform mobile app development using Swift, Kotlin, and React Native for seamless user experiences.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Marketing Automation</span>: AI-driven tools that streamline client acquisition, nurture leads, and optimize conversion rates for maximum ROI.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Data Analytics</span>: Comprehensive business intelligence solutions that transform raw data into actionable insights for informed decision-making.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Global Investments",
      icon: Globe,
      description: "Strategic investments and fund hedging to grow capital across diverse sectors and markets worldwide.",
      features: ["Venture Capital", "Fund Hedging", "Strategic Investments", "Portfolio Management"],
      color: "from-amber-800 to-amber-600",
      detailedContent: (
        <div className="space-y-4">
          <p>
            KSDM's investment division leverages deep market knowledge and strategic relationships to identify opportunities with exceptional growth potential. We manage diversified portfolios that balance risk and reward across multiple asset classes and geographies.
          </p>
          <h4 className="font-semibold text-lg">Investment Philosophy</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Sector Diversification</span>: We invest across technology, healthcare, renewable energy, and consumer goods sectors to maximize returns while mitigating risk.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Global Perspective</span>: Our investments span emerging and established markets, allowing us to capture growth opportunities worldwide.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Advanced Hedging Strategies</span>: We employ sophisticated hedging techniques to protect capital during market downturns while maintaining exposure to upside potential.</span>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2 mt-2"></div>
              <span><span className="font-medium">Sustainable Returns</span>: Our managed fund has consistently delivered annual returns exceeding market benchmarks while investing in socially responsible opportunities.</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="verticals" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ksdm-navy">Our Business Verticals</h2>
          <p className="text-lg text-gray-700">
            KSDM LLC operates across multiple verticals, each with a focused approach to creating value and sustainable growth through innovative strategies and exceptional execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {verticals.map((vertical, index) => (
            <Collapsible 
              key={index} 
              open={expandedVertical === index}
              onOpenChange={() => toggleVertical(index)}
              className="rounded-lg overflow-hidden shadow-md bg-white hover-scale transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${vertical.color} p-6 text-white`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <vertical.icon className="h-10 w-10" />
                    <h3 className="text-2xl font-semibold">{vertical.title}</h3>
                  </div>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8 rounded-full">
                      <span className="sr-only">Toggle details</span>
                      <span className={`transition-transform duration-300 block ${expandedVertical === index ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <p className="opacity-90 mt-2">{vertical.description}</p>
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
                
                <CollapsibleContent className="pt-4 border-t border-gray-200">
                  <div className="mt-4">
                    {vertical.detailedContent}
                  </div>
                </CollapsibleContent>
                
                <div className="flex justify-between items-center mt-6">
                  <Button 
                    variant="outline" 
                    className="border-ksdm-navy text-ksdm-navy hover:bg-ksdm-navy hover:text-white"
                  >
                    Learn More
                  </Button>
                  
                  <CollapsibleTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-ksdm-navy font-medium">
                      {expandedVertical === index ? 'Show Less' : 'Show More Details'}
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
