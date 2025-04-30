
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  ClipboardList, 
  BarChart3, 
  PackageOpen, 
  Settings,
  Store,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: ShoppingBag
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ClipboardList
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3
  },
  {
    title: "Inventory",
    href: "/dashboard/inventory",
    icon: PackageOpen
  },
  {
    title: "Storefront",
    href: "/dashboard/storefront",
    icon: Store
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
];

const DashboardSidebar = () => {
  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-ksdm-navy tracking-tight">
            KSDM<span className="text-xs align-top text-ksdm-gold">®</span>
          </h2>
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <nav className="space-y-1">
          {links.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive 
                  ? "bg-gray-100 text-ksdm-navy font-medium" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-ksdm-navy"
              )}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.title}</span>
            </NavLink>
          ))}
        </nav>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
              alt="Admin" 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">admin@ksdmllc.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
