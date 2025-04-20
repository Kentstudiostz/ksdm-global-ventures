
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Orders = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Orders" 
            description="Manage customer orders"
          />
          <div className="p-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>View and manage all customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Orders management functionality will be implemented here.
                </p>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Orders;
