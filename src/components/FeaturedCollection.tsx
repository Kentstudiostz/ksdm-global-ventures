
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const FeaturedCollection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ksdm-navy">
            New <span className="text-ksdm-gold">Collection</span>
          </h2>
          <p className="text-lg text-gray-600 md:max-w-md mt-4 md:mt-0">
            Experience our latest pieces designed to amplify your presence and identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd" 
                alt="KSDM Men's Collection" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Men's Collection</h3>
              <p className="text-white/90 mb-6 max-w-xs">
                Garments that amplify presence without demanding attention.
              </p>
              <Button 
                className="w-full md:w-auto bg-white text-ksdm-navy hover:bg-gray-100"
                asChild
              >
                <Link to="/clothing?category=men">Shop Men</Link>
              </Button>
            </div>
          </motion.div>

          {/* Featured Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618721405821-80ebc4b63d26" 
                alt="KSDM Women's Collection" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Women's Collection</h3>
              <p className="text-white/90 mb-6 max-w-xs">
                Distinction woven into every thread, designed for those who know their worth.
              </p>
              <Button 
                className="w-full md:w-auto bg-white text-ksdm-navy hover:bg-gray-100"
                asChild
              >
                <Link to="/clothing?category=women">Shop Women</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
