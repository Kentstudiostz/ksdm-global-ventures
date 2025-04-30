
import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Plus, Search, Trash2 } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsTable from "@/components/dashboard/ProductsTable";
import { clothingProducts, accessoriesProducts } from "@/data/products";
import AddEditProductModal from "@/components/dashboard/AddEditProductModal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([...clothingProducts, ...accessoriesProducts]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedTab, setSelectedTab] = useState("all");
  const { toast } = useToast();
  
  // Filter products based on search query and selected tab
  const getFilteredProducts = () => {
    let filteredProducts = products;
    
    // Filter by tab
    if (selectedTab === "clothing") {
      filteredProducts = filteredProducts.filter(p => 
        ["t-shirts", "shirts", "pants", "jeans", "sweaters", "hoodies", "jackets"].includes(p.category)
      );
    } else if (selectedTab === "accessories") {
      filteredProducts = filteredProducts.filter(p => 
        ["watches", "bags", "hats", "sunglasses", "jewelry", "scarves"].includes(p.category)
      );
    }
    
    // Filter by search
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filteredProducts;
  };
    
  const handleAddProduct = () => {
    setCurrentProduct(null);
    setIsAddProductModalOpen(true);
  };
  
  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsAddProductModalOpen(true);
  };
  
  const handleDeleteProduct = (product) => {
    setCurrentProduct(product);
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDeleteProduct = () => {
    if (currentProduct) {
      setProducts(products.filter(p => p.id !== currentProduct.id));
      
      toast({
        title: "Product deleted",
        description: `${currentProduct.name} has been deleted successfully.`,
      });
      
      setCurrentProduct(null);
      setIsDeleteDialogOpen(false);
    }
  };
  
  const saveProduct = (productData) => {
    if (currentProduct) {
      // Edit existing product
      setProducts(products.map(p => 
        p.id === currentProduct.id ? productData : p
      ));
    } else {
      // Add new product
      setProducts([productData, ...products]);
    }
  };
  
  const handleTabChange = (value) => {
    setSelectedTab(value);
  };
  
  const headerActions = (
    <>
      <div className="relative w-64">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search products..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8"
        />
      </div>
      <Button onClick={handleAddProduct}>
        <Plus className="h-4 w-4 mr-2" />
        Add Product
      </Button>
    </>
  );
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Products" 
            description="Manage your product catalog"
            actions={headerActions}
          />
          <div className="p-6">
            <Tabs defaultValue="all" className="w-full" value={selectedTab} onValueChange={handleTabChange}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Products ({products.length})</TabsTrigger>
                <TabsTrigger value="clothing">
                  Clothing ({products.filter(p => ["t-shirts", "shirts", "pants", "jeans", "sweaters", "hoodies", "jackets"].includes(p.category)).length})
                </TabsTrigger>
                <TabsTrigger value="accessories">
                  Accessories ({products.filter(p => ["watches", "bags", "hats", "sunglasses", "jewelry", "scarves"].includes(p.category)).length})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value={selectedTab}>
                <ProductsTable 
                  products={getFilteredProducts()} 
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                />
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
      
      {/* Add/Edit Product Modal */}
      <AddEditProductModal
        open={isAddProductModalOpen}
        onOpenChange={setIsAddProductModalOpen}
        product={currentProduct}
        onSave={saveProduct}
      />
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the product "{currentProduct?.name}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDeleteProduct}
              className="bg-red-600 hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
};

export default Products;
