
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart, 
  Settings, 
  Package as Inventory,
} from "lucide-react";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-ksdm-navy">KSDM</span>
          <span className="text-xs bg-ksdm-gold text-white px-2 py-1 rounded">Admin</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentPath === "/dashboard"}
                  onClick={() => navigate("/dashboard")}
                >
                  <Home size={18} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentPath === "/dashboard/products"}
                  onClick={() => navigate("/dashboard/products")}
                >
                  <Package size={18} />
                  <span>Products</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentPath === "/dashboard/orders"}
                  onClick={() => navigate("/dashboard/orders")}
                >
                  <ShoppingCart size={18} />
                  <span>Orders</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentPath === "/dashboard/customers"}
                  onClick={() => navigate("/dashboard/customers")}
                >
                  <Users size={18} />
                  <span>Customers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentPath === "/dashboard/inventory"}
                  onClick={() => navigate("/dashboard/inventory")}
                >
                  <Inventory size={18} />
                  <span>Inventory</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentPath === "/dashboard/analytics"}
                  onClick={() => navigate("/dashboard/analytics")}
                >
                  <BarChart size={18} />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentPath === "/dashboard/settings"}
                  onClick={() => navigate("/dashboard/settings")}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-ksdm-navy flex items-center justify-center text-white">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@ksdm.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
