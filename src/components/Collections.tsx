
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Collections = () => {
  const categories = [
    {
      name: "Clothing",
      description: "Garments that speak volumes about who you are.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      link: "/clothing"
    },
    {
      name: "Accessories",
      description: "The final touches that complete your identity.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      link: "/accessories"
    },
    {
      name: "Footwear",
      description: "Every step becomes a statement of distinction.",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      link: "/clothing?category=footwear"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ksdm-navy">
              Shop By <span className="text-ksdm-gold">Category</span>
            </h2>
            <p className="text-lg text-gray-700">
              Each KSDM collection tells a story of awareness, identity, and refined taste. 
              Discover pieces that amplify your presence in any room.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={`KSDM ${category.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/90 mb-6 max-w-xs">
                  {category.description}
                </p>
                <Button 
                  className="w-full md:w-auto bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400"
                  asChild
                >
                  <Link to={category.link}>Shop {category.name}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
