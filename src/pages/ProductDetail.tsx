
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import RelatedProducts from "@/components/RelatedProducts";
import { ShoppingBag, Heart, ShirtIcon } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    // In a real app, you would fetch product data from an API
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <ShirtIcon className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="mt-4 text-2xl font-semibold">Product not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-square">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.gallery && (
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((img: string, idx: number) => (
                  <div key={idx} className="rounded-md overflow-hidden bg-gray-100 aspect-square">
                    <img src={img} alt={`${product.name} view ${idx+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-ksdm-navy mb-4">${product.price.toFixed(2)}</p>
            
            <div className="border-t border-b border-gray-200 py-4 my-6">
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Product Identity Statement */}
              <p className="italic text-ksdm-navy mb-6">"{product.statement}"</p>
            </div>
            
            {product.sizes && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded-md ${
                        selectedSize === size 
                          ? 'border-ksdm-navy text-ksdm-navy bg-opacity-10 bg-ksdm-navy' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.colors && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-ksdm-navy' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Color: ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-gray-500 hover:text-gray-700"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center border-0 focus:ring-0"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-3 py-1 text-gray-500 hover:text-gray-700"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button className="flex-1 bg-ksdm-navy hover:bg-blue-900">
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" className="px-4">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Product Details</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  {product.details && product.details.map((detail: string, idx: number) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <RelatedProducts currentProductId={product.id} categoryId={product.categoryId} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
