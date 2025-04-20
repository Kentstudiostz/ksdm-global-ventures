
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-ksdm-navy to-black">
      {/* Mobile image - shown on smaller screens */}
      <div className="block md:hidden">
        <div className="h-[70vh] relative">
          <img 
            src="https://images.unsplash.com/photo-1523139188738-65073d2917c1" 
            alt="KSDM Fashion" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Desktop hero layout */}
      <div className="hidden md:block relative h-screen max-h-[900px]">
        <div className="absolute inset-0 z-10">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-6 flex items-center p-12 xl:p-24">
              <div className="max-w-xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl xl:text-7xl font-bold text-white leading-tight mb-6"
                >
                  <span className="block">Distinction.</span>
                  <span className="block text-ksdm-gold">Identity.</span>
                  <span className="block">Awareness.</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-200 mb-10 max-w-md"
                >
                  KSDM crafts experiences that make you visible. Not just clothing—but a statement of identity.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    size="lg" 
                    className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400 font-medium text-lg px-8 py-6"
                    asChild
                  >
                    <Link to="/clothing">Shop Now</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6"
                    asChild
                  >
                    <Link to="/accessories">Explore</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="col-span-6 relative h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588701177361-c42359b29f68" 
                alt="KSDM Fashion" 
                className="w-full h-full object-cover object-center scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ksdm-navy/90 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Background shape elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-ksdm-gold/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-ksdm-gold/5 blur-3xl"></div>
      </div>

      {/* Mobile content */}
      <div className="md:hidden px-6 py-12 bg-ksdm-navy">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="block">Distinction.</span>
          <span className="block text-ksdm-gold">Identity.</span>
          <span className="block">Awareness.</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          KSDM crafts experiences that make you visible. Not just clothing—but a statement of identity.
        </p>
        <div className="flex flex-col gap-3">
          <Button 
            className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400 w-full py-6 text-lg"
            asChild
          >
            <Link to="/clothing">Shop Now</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 w-full py-6 text-lg"
            asChild
          >
            <Link to="/accessories">Explore</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
