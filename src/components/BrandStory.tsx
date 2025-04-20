
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import ThreeBackground from "./ThreeBackground";

const BrandStory = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-50">
        <ThreeBackground 
          color1="#FCBF49" 
          color2="#0A2342" 
          particleCount={800} 
          particleSize={0.04}
          density="low"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              More Than <span className="text-ksdm-gold">Fashion</span>
            </h2>
            
            <div className="space-y-6 text-gray-200">
              <p className="text-lg">
                KSDM isn't just a clothing brand. We're architects of identity, 
                crafting garments and accessories that transcend the ordinary.
              </p>
              
              <p className="text-lg">
                Every thread, every stitch, every design choice is made with one 
                purpose: to amplify your essence and make you visible, even to the 
                naked eye.
              </p>
              
              <p className="text-lg">
                We don't simply create clothing—we create presence. Wearing KSDM 
                means standing out in a world of conformity, embracing your unique 
                identity, and showcasing your refined taste.
              </p>
            </div>
            
            <div className="mt-10">
              <Button className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400">
                Our Philosophy <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602810316693-3667c854239a" 
                alt="KSDM Fashion Essence" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-ksdm-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-ksdm-navy/40 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
