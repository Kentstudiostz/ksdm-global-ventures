
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InventoryPage = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Inventory" 
            description="Manage your product inventory"
          />
          <div className="p-6">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>Track stock levels and manage product inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inventory management functionality will be implemented here.
                </p>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default InventoryPage;
