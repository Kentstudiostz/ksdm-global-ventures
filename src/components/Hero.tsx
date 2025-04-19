import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ThreeBackground from './ThreeBackground';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-ksdm-navy to-blue-900 text-white min-h-screen flex items-center">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Overlay Pattern - keeping this for additional texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgMTBhNiA2IDAgMCAxIDEyIDBBNiA2IDAgMCAxIDYwIDEwQTYgNiAwIDAgMSA0OCAyMmE2IDYgMCAwIDEgLTEyIDBBNiA2IDAgMCAxIDI0IDEwQTYgNiAwIDAgMSAzNiAyMiIgZmlsbD0iIzAwMCI+PC9wYXRoPgo8L3N2Zz4=')]"></div>

      <div className="container mx-auto px-4 py-20 pt-32 md:py-24 md:pt-40 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="block">Define Your</span>
              <span className="text-ksdm-gold">Presence.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Not just clothing. KSDM crafts garments that amplify your awareness, 
              identity, and taste. Stand out even to the naked eye.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400 font-medium"
                asChild
              >
                <Link to="/clothing">Shop Collection</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/accessories">
                  Explore Accessories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative animate-fade-in">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="KSDM Fashion" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ksdm-navy/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-medium tracking-wider uppercase mb-2">New Collection</p>
                <h3 className="text-2xl font-bold">Identity Series</h3>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-ksdm-gold/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
