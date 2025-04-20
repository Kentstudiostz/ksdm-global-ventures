
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Dashboard Sidebar */}
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Dashboard Overview" 
            description="Welcome to the KSDM admin dashboard."
          />
          <div className="p-6">
            <DashboardOverview />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
