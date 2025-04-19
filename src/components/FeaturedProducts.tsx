
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';

// This would come from a database in a real app
const featuredProducts = [
  {
    id: '1',
    name: 'Identity Oversized Tee',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    category: 'clothing'
  },
  {
    id: '2',
    name: 'Awareness Silk Scarf',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1521319894908-a27537e2e4f1',
    category: 'accessories'
  },
  {
    id: '3',
    name: 'Presence Bomber Jacket',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    category: 'clothing'
  },
  {
    id: '4',
    name: 'Distinction Watch',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    category: 'accessories'
  }
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ksdm-navy">
            Featured <span className="text-ksdm-gold">Products</span>
          </h2>
          <p className="text-lg text-gray-700">
            Discover our most iconic pieces, each designed to amplify your presence 
            and reflect your identity.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === 'all'
                    ? 'border-ksdm-gold text-ksdm-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('clothing')}
                className={`py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === 'clothing'
                    ? 'border-ksdm-gold text-ksdm-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Clothing
              </button>
              <button
                onClick={() => setActiveTab('accessories')}
                className={`py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === 'accessories'
                    ? 'border-ksdm-gold text-ksdm-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Accessories
              </button>
            </nav>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                  <div className="absolute bottom-4 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                    <Button className="bg-ksdm-navy hover:bg-blue-900">
                      <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`} className="hover:text-ksdm-navy transition-colors">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                </Link>
                <p className="text-ksdm-navy font-medium">${product.price.toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-ksdm-navy hover:bg-blue-900">
            <Link to={activeTab === 'accessories' ? '/accessories' : '/clothing'}>
              View All {activeTab === 'all' ? 'Products' : activeTab === 'clothing' ? 'Clothing' : 'Accessories'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
