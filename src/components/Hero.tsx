import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ThreeBackground from './ThreeBackground';

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
              Building Exceptional <span className="text-ksdm-gold">Global Ventures</span> 
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              KSDM LLC invests in and develops innovative businesses across real estate, tourism, technology, and beyond, with a commitment to sustainable growth and global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400 font-medium"
              >
                Explore Ventures
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative animate-fade-in">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl transform rotate-1 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-6">
                  <div className="h-8 bg-white/20 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded w-full"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                    <div className="h-4 bg-white/20 rounded w-4/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/20 rounded"></div>
                    <div className="h-24 bg-white/20 rounded"></div>
                  </div>
                  <div className="h-8 bg-ksdm-gold/40 rounded w-1/3"></div>
                </div>
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
