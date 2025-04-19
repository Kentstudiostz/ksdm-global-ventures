
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ksdm-navy">
              More Than <span className="text-ksdm-gold">Fashion</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              KSDM isn't just a clothing brand. We're architects of identity, 
              crafting garments and accessories that transcend the ordinary.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Every thread, every stitch, every design choice is made with one 
              purpose: to amplify your essence and make you visible, even to the 
              naked eye.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              We don't simply create clothing—we create presence. Wearing KSDM 
              means standing out in a world of conformity, embracing your unique 
              identity, and showcasing your refined taste.
            </p>
            
            <Button className="bg-ksdm-navy hover:bg-blue-900">
              Our Philosophy <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
                alt="KSDM Fashion Essence" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 border-2 border-ksdm-gold rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-ksdm-gold/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
