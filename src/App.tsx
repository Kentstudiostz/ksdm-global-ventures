
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import ClothingStore from "./pages/ClothingStore";
import AccessoriesStore from "./pages/AccessoriesStore";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardProducts from "./pages/dashboard/Products";
import DashboardOrders from "./pages/dashboard/Orders";
import DashboardCustomers from "./pages/dashboard/Customers";
import DashboardAnalytics from "./pages/dashboard/Analytics";
import DashboardSettings from "./pages/dashboard/Settings";
import DashboardInventory from "./pages/dashboard/Inventory";
import DashboardStorefront from "./pages/dashboard/Storefront";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import OurStory from "./pages/OurStory";
import BrandPhilosophy from "./pages/BrandPhilosophy";
import Sustainability from "./pages/Sustainability";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/clothing" element={<ClothingStore />} />
            <Route path="/accessories" element={<AccessoriesStore />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/brand-philosophy" element={<BrandPhilosophy />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/products" element={<DashboardProducts />} />
            <Route path="/dashboard/orders" element={<DashboardOrders />} />
            <Route path="/dashboard/customers" element={<DashboardCustomers />} />
            <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
            <Route path="/dashboard/inventory" element={<DashboardInventory />} />
            <Route path="/dashboard/settings" element={<DashboardSettings />} />
            <Route path="/dashboard/storefront" element={<DashboardStorefront />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
