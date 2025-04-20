
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Analytics = () => {
  // Sample data for demonstration
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 2780 },
    { month: "May", sales: 1890 },
    { month: "Jun", sales: 2390 },
    { month: "Jul", sales: 3490 },
    { month: "Aug", sales: 4200 },
    { month: "Sep", sales: 5100 },
    { month: "Oct", sales: 4500 },
    { month: "Nov", sales: 6000 },
    { month: "Dec", sales: 7000 },
  ];
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Analytics" 
            description="View store performance and metrics"
          />
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performance for the current year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={salesData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#1E3A8A" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Categories</CardTitle>
                    <CardDescription>Best performing product categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Category performance metrics will be shown here.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Insights</CardTitle>
                    <CardDescription>Demographics and behavior</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Customer analytics will be displayed here.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Conversion Rate</CardTitle>
                    <CardDescription>Store conversion performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Conversion analytics will be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
