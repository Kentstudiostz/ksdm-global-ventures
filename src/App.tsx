
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClothingStore from "./pages/ClothingStore";
import AccessoriesStore from "./pages/AccessoriesStore";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardProducts from "./pages/dashboard/Products";
import DashboardOrders from "./pages/dashboard/Orders";
import DashboardCustomers from "./pages/dashboard/Customers";
import DashboardAnalytics from "./pages/dashboard/Analytics";
import DashboardSettings from "./pages/dashboard/Settings";
import DashboardInventory from "./pages/dashboard/Inventory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clothing" element={<ClothingStore />} />
          <Route path="/accessories" element={<AccessoriesStore />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/orders" element={<DashboardOrders />} />
          <Route path="/dashboard/customers" element={<DashboardCustomers />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard/inventory" element={<DashboardInventory />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
