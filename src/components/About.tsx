
import { ArrowUpRight, Globe, TrendingUp, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ksdm-navy">
            Global Investment Approach
          </h2>
          <p className="text-lg text-gray-700">
            KSDM LLC is a global investment firm with a diverse portfolio spanning multiple sectors and continents. 
            We identify exceptional opportunities, deploy strategic capital, and actively support ventures for sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Investment Philosophy */}
          <div className="bg-gray-50 p-8 rounded-lg hover-scale">
            <Globe className="h-10 w-10 text-ksdm-navy mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Global Perspective</h3>
            <p className="text-gray-700 mb-4">
              Our investment strategy spans across continents, identifying unique opportunities in developed and emerging markets.
            </p>
            <a href="#" className="inline-flex items-center text-ksdm-navy font-medium">
              Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Value Creation */}
          <div className="bg-gray-50 p-8 rounded-lg hover-scale">
            <TrendingUp className="h-10 w-10 text-ksdm-navy mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Value Creation</h3>
            <p className="text-gray-700 mb-4">
              Beyond capital, we provide strategic guidance, operational expertise, and access to our global network.
            </p>
            <a href="#" className="inline-flex items-center text-ksdm-navy font-medium">
              Our approach <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Long-term Vision */}
          <div className="bg-gray-50 p-8 rounded-lg hover-scale">
            <Building className="h-10 w-10 text-ksdm-navy mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Long-term Vision</h3>
            <p className="text-gray-700 mb-4">
              We build lasting businesses through patient capital deployment and sustainable growth strategies.
            </p>
            <a href="#" className="inline-flex items-center text-ksdm-navy font-medium">
              Our vision <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Investment Stats */}
        <div className="py-10 px-6 md:p-12 bg-ksdm-navy rounded-lg text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ksdm-gold">$50M+</p>
              <p className="text-lg mt-2">Assets Under Management</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ksdm-gold">15+</p>
              <p className="text-lg mt-2">Portfolio Companies</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ksdm-gold">4</p>
              <p className="text-lg mt-2">Countries</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-ksdm-gold">12+</p>
              <p className="text-lg mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
