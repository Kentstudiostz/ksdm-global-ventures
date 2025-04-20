
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ShoppingCart, Users, ArrowUp, ArrowDown, DollarSign, Package, Tag, AlertCircle } from "lucide-react";
import { clothingProducts, accessoriesProducts } from "@/data/products";

// Stats cards component
const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  trend,
  trendValue
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
  trendValue: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <div className="rounded-full p-2 bg-gray-100">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center text-xs">
        {trend === "up" ? (
          <div className="text-emerald-500 flex items-center">
            <ArrowUp className="mr-1" size={12} />
            {trendValue}
          </div>
        ) : trend === "down" ? (
          <div className="text-rose-500 flex items-center">
            <ArrowDown className="mr-1" size={12} />
            {trendValue}
          </div>
        ) : (
          <div className="text-gray-500">{trendValue}</div>
        )}
        <span className="ml-1 text-muted-foreground">{description}</span>
      </div>
    </CardContent>
  </Card>
);

const DashboardOverview = () => {
  // In a real application, these would be fetched from an API
  const totalProducts = clothingProducts.length + accessoriesProducts.length;
  const totalOrders = 347;
  const totalCustomers = 842;
  const totalRevenue = "₱98,562.00";

  // Fetch total sales and calculate on sale products
  const onSaleProducts = [...clothingProducts, ...accessoriesProducts].filter(p => p.salePrice).length;
  const lowStockProducts = 5; // This would be calculated from inventory in a real app

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Revenue" 
          value={totalRevenue} 
          description="vs previous month" 
          icon={<DollarSign size={18} className="text-ksdm-navy" />}
          trend="up"
          trendValue="12.5%"
        />
        <StatsCard 
          title="Orders" 
          value={totalOrders.toString()} 
          description="vs previous month" 
          icon={<ShoppingCart size={18} className="text-ksdm-navy" />}
          trend="up"
          trendValue="8.2%"
        />
        <StatsCard 
          title="Customers" 
          value={totalCustomers.toString()} 
          description="vs previous month" 
          icon={<Users size={18} className="text-ksdm-navy" />}
          trend="up"
          trendValue="5.7%"
        />
        <StatsCard 
          title="Products" 
          value={totalProducts.toString()} 
          description="total products" 
          icon={<Package size={18} className="text-ksdm-navy" />}
          trend="neutral"
          trendValue="0%"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest orders and customer activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">Customer {i}</p>
                      <p className="text-xs text-muted-foreground">Purchased {i % 2 === 0 ? "Presence Bomber Jacket" : "Identity Tote"}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{i} hour{i !== 1 ? "s" : ""} ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
            <CardDescription>Product stock and availability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Total Products</p>
                    <p className="text-2xl font-bold">{totalProducts}</p>
                  </div>
                  <Package size={24} className="text-ksdm-navy" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">On Sale</p>
                      <p className="text-xl font-bold">{onSaleProducts}</p>
                    </div>
                    <div className="text-amber-500">
                      <Tag size={20} />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-rose-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Low Stock</p>
                      <p className="text-xl font-bold">{lowStockProducts}</p>
                    </div>
                    <div className="text-rose-500">
                      <AlertCircle size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
