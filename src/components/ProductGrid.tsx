
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShoppingBag, Heart } from 'lucide-react';
import { clothingProducts, accessoriesProducts } from '@/data/products';

type ProductGridProps = {
  filters: {
    category: string;
    priceRange: string;
    sortBy: string;
  };
  type: 'clothing' | 'accessories';
};

const ProductGrid: React.FC<ProductGridProps> = ({ filters, type }) => {
  const products = type === 'clothing' ? clothingProducts : accessoriesProducts;
  
  const filteredAndSortedProducts = useMemo(() => {
    // First, filter products
    let result = [...products];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => 
        product.category.toLowerCase() === filters.category
      );
    }
    
    // Filter by price range
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-50':
          result = result.filter(product => product.price < 50);
          break;
        case '50-100':
          result = result.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case '100-200':
          result = result.filter(product => product.price > 100 && product.price <= 200);
          break;
        case 'over-200':
          result = result.filter(product => product.price > 200);
          break;
      }
    }
    
    // Then, sort products
    switch (filters.sortBy) {
      case 'price-low':
        return result.sort((a, b) => a.price - b.price);
      case 'price-high':
        return result.sort((a, b) => b.price - a.price);
      case 'best-selling':
        return result.sort((a, b) => (b.sales || 0) - (a.sales || 0));
      case 'newest':
      default:
        // Assuming newest products have more recent dates
        return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }, [filters, products]);

  if (filteredAndSortedProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">{filteredAndSortedProducts.length} products</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="absolute bottom-4 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-2">
                  <Button className="bg-ksdm-navy hover:bg-blue-900">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                  <Button variant="outline" className="bg-white text-ksdm-navy">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {product.new && (
                <div className="absolute top-2 left-2 bg-ksdm-gold text-ksdm-navy px-2 py-1 text-xs font-bold">
                  NEW
                </div>
              )}
              {product.sale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                  SALE
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <Link to={`/product/${product.id}`} className="hover:text-ksdm-navy transition-colors">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              </Link>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                {product.sale ? (
                  <div className="flex items-center gap-2">
                    <p className="text-ksdm-navy font-medium">${product.salePrice?.toFixed(2)}</p>
                    <p className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</p>
                  </div>
                ) : (
                  <p className="text-ksdm-navy font-medium">${product.price.toFixed(2)}</p>
                )}
                
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                      key={star} 
                      className={`text-xs ${
                        star <= (product.rating || 0) ? 'text-ksdm-gold' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
