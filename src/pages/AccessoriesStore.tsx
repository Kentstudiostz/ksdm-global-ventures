
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreBanner from "@/components/StoreBanner";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";
import { useState } from "react";

const AccessoriesStore = () => {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    sortBy: "newest"
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <StoreBanner 
        title="KSDM Accessories" 
        subtitle="Accents that amplify your essence. Define your identity through the details."
        image="/accessories-banner.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <ProductFilters currentFilters={filters} setFilters={setFilters} type="accessories" />
          </div>
          
          <div className="w-full md:w-3/4">
            <ProductGrid type="accessories" filters={filters} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AccessoriesStore;
