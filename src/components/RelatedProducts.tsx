
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { products } from '@/data/products';

type RelatedProductsProps = {
  currentProductId: string;
  categoryId: string;
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, categoryId }) => {
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  
  useEffect(() => {
    // Get products in the same category, excluding the current product
    const related = products
      .filter(p => p.categoryId === categoryId && p.id !== currentProductId)
      .slice(0, 4); // Limit to 4 products
      
    setRelatedProducts(related);
  }, [currentProductId, categoryId]);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-8 text-ksdm-navy">You May Also Like</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
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
    </div>
  );
};

export default RelatedProducts;
