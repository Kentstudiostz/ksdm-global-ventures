
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Collections = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ksdm-navy">
            Our <span className="text-ksdm-gold">Collections</span>
          </h2>
          <p className="text-lg text-gray-700">
            Each KSDM collection tells a story of awareness, identity, and refined taste. 
            Discover pieces that amplify your presence in any room.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Clothing Collection */}
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="KSDM Clothing" 
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Clothing</h3>
              <p className="mb-6 max-w-md">
                Garments that speak volumes about who you are. Our clothing line is designed 
                to make you visible even to the naked eye.
              </p>
              <Button 
                className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400"
                asChild
              >
                <Link to="/clothing">Shop Clothing</Link>
              </Button>
            </div>
          </div>
          
          {/* Accessories Collection */}
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
              alt="KSDM Accessories" 
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Accessories</h3>
              <p className="mb-6 max-w-md">
                The final touches that complete your identity. Our accessories are statements 
                of refined taste and deliberate choice.
              </p>
              <Button 
                className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400"
                asChild
              >
                <Link to="/accessories">Shop Accessories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
