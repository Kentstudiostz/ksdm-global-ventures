
import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Plus, Search } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsTable from "@/components/dashboard/ProductsTable";
import { clothingProducts, accessoriesProducts } from "@/data/products";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const allProducts = [...clothingProducts, ...accessoriesProducts];
  
  // Filter products based on search query
  const filteredProducts = searchQuery 
    ? allProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts;
    
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
      <Button>
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
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Products ({allProducts.length})</TabsTrigger>
                <TabsTrigger value="clothing">Clothing ({clothingProducts.length})</TabsTrigger>
                <TabsTrigger value="accessories">Accessories ({accessoriesProducts.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <ProductsTable products={filteredProducts} />
              </TabsContent>
              
              <TabsContent value="clothing">
                <ProductsTable 
                  products={
                    searchQuery 
                      ? clothingProducts.filter(p => 
                          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                      : clothingProducts
                  } 
                />
              </TabsContent>
              
              <TabsContent value="accessories">
                <ProductsTable 
                  products={
                    searchQuery 
                      ? accessoriesProducts.filter(p => 
                          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                      : accessoriesProducts
                  } 
                />
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Products;
