
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash } from "lucide-react";

const defaultProduct = {
  id: "",
  name: "",
  description: "",
  price: "",
  salePrice: "",
  category: "",
  image: "",
  date: new Date().toISOString(),
  new: false,
  sale: false,
  colors: [],
  sizes: []
};

const categories = [
  { value: "t-shirts", label: "T-Shirts" },
  { value: "shirts", label: "Shirts" },
  { value: "sweaters", label: "Sweaters" },
  { value: "hoodies", label: "Hoodies" },
  { value: "jeans", label: "Jeans" },
  { value: "pants", label: "Pants" },
  { value: "shorts", label: "Shorts" },
  { value: "jackets", label: "Jackets" },
  { value: "coats", label: "Coats" },
  { value: "watches", label: "Watches" },
  { value: "bags", label: "Bags" },
  { value: "hats", label: "Hats" },
  { value: "jewelry", label: "Jewelry" },
  { value: "sunglasses", label: "Sunglasses" },
  { value: "scarves", label: "Scarves" }
];

const AddEditProductModal = ({
  open,
  onOpenChange,
  product = null,
  onSave
}) => {
  const { toast } = useToast();
  const [productData, setProductData] = useState(defaultProduct);
  const [newColor, setNewColor] = useState("");
  const [newSize, setNewSize] = useState("");
  const isEditing = !!product?.id;

  useEffect(() => {
    if (product) {
      setProductData({
        ...defaultProduct,
        ...product
      });
    } else {
      setProductData(defaultProduct);
    }
  }, [product]);

  const handleInputChange = (field, value) => {
    setProductData({
      ...productData,
      [field]: value
    });
  };

  const handleAddColor = () => {
    if (newColor && !productData.colors.includes(newColor)) {
      setProductData({
        ...productData,
        colors: [...productData.colors, newColor]
      });
      setNewColor("");
    }
  };

  const handleRemoveColor = (color) => {
    setProductData({
      ...productData,
      colors: productData.colors.filter(c => c !== color)
    });
  };

  const handleAddSize = () => {
    if (newSize && !productData.sizes.includes(newSize)) {
      setProductData({
        ...productData,
        sizes: [...productData.sizes, newSize]
      });
      setNewSize("");
    }
  };

  const handleRemoveSize = (size) => {
    setProductData({
      ...productData,
      sizes: productData.sizes.filter(s => s !== size)
    });
  };

  const handleSave = () => {
    if (!productData.name || !productData.price || !productData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Generate ID if new product
    const completeProduct = {
      ...productData,
      id: productData.id || `product-${Date.now()}`,
      price: parseFloat(productData.price),
      salePrice: productData.salePrice ? parseFloat(productData.salePrice) : undefined,
    };

    onSave(completeProduct);
    onOpenChange(false);
    
    toast({
      title: isEditing ? "Product updated" : "Product created",
      description: `${productData.name} has been ${isEditing ? 'updated' : 'added'} successfully.`
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Product' : 'Add New Product'}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? 'Make changes to this product and save when you\'re done.' 
              : 'Fill in the details for your new product.'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product-name" className="required">Name</Label>
              <Input 
                id="product-name" 
                value={productData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-category" className="required">Category</Label>
              <Select 
                value={productData.category} 
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-description">Description</Label>
            <Textarea 
              id="product-description" 
              value={productData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="min-h-32"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product-price" className="required">Price</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input 
                  id="product-price" 
                  type="number" 
                  className="pl-8"
                  value={productData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-sale-price">Sale Price</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input 
                  id="product-sale-price" 
                  type="number" 
                  className="pl-8"
                  value={productData.salePrice}
                  onChange={(e) => handleInputChange("salePrice", e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product-image">Image URL</Label>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input 
                  id="product-image" 
                  value={productData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                />
              </div>
              {productData.image && (
                <div className="h-16 w-16 overflow-hidden rounded-md border">
                  <img 
                    src={productData.image} 
                    alt={productData.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="product-new"
                checked={productData.new}
                onCheckedChange={(checked) => handleInputChange("new", checked)}
              />
              <Label htmlFor="product-new">Mark as New</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                id="product-sale"
                checked={productData.sale}
                onCheckedChange={(checked) => handleInputChange("sale", checked)}
              />
              <Label htmlFor="product-sale">Mark as On Sale</Label>
            </div>
          </div>

          {/* Colors */}
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-medium">Available Colors</h3>
            <div className="flex flex-wrap gap-2">
              {productData.colors.map((color) => (
                <div 
                  key={color} 
                  className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {color}
                  <button 
                    onClick={() => handleRemoveColor(color)}
                    className="ml-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                placeholder="Add a color"
                className="flex-1"
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleAddColor}
              >
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-medium">Available Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((size) => (
                <div 
                  key={size} 
                  className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {size}
                  <button 
                    onClick={() => handleRemoveSize(size)}
                    className="ml-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
                placeholder="Add a size"
                className="flex-1"
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleAddSize}
              >
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {isEditing ? 'Update Product' : 'Create Product'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditProductModal;
