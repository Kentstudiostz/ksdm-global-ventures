
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

// Using placeholder products, in a real app these would come from an API or database
const trendingProducts = [
  {
    id: '1',
    name: 'Identity Oversized Tee',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
    category: 'clothing',
    isNew: true
  },
  {
    id: '2',
    name: 'Presence Bomber Jacket',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    category: 'clothing',
    isSale: true
  },
  {
    id: '3',
    name: 'Distinction Watch',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    category: 'accessories'
  },
  {
    id: '4',
    name: 'Awareness Silk Scarf',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
    category: 'accessories',
    isSale: true
  }
];

const TrendingProducts = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ksdm-navy mb-2">
              Trending <span className="text-ksdm-gold">Now</span>
            </h2>
            <p className="text-lg text-gray-600 md:max-w-md">
              Our most coveted pieces, selected for those who understand that identity is a choice.
            </p>
          </div>
          <Link 
            to="/clothing" 
            className="mt-4 md:mt-0 text-ksdm-navy font-medium hover:text-ksdm-gold transition-colors underline underline-offset-4"
          >
            View All Products
          </Link>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {trendingProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Sale or New Tag */}
                  {(product.isSale || product.isNew) && (
                    <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-medium ${product.isSale ? 'bg-red-500' : 'bg-ksdm-blue'} text-white rounded-full`}>
                      {product.isSale ? 'Sale' : 'New'}
                    </div>
                  )}
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full bg-ksdm-navy hover:bg-blue-900 text-sm">
                      <ShoppingBag className="mr-2 h-4 w-4" /> Quick Add
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <Link to={`/product/${product.id}`} className="hover:text-ksdm-gold transition-colors">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    {product.originalPrice ? (
                      <>
                        <p className="text-ksdm-navy font-medium">${product.price.toFixed(2)}</p>
                        <p className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</p>
                      </>
                    ) : (
                      <p className="text-ksdm-navy font-medium">${product.price.toFixed(2)}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingProducts;
