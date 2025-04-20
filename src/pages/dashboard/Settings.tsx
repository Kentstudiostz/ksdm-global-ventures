
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Settings" 
            description="Configure your store settings"
          />
          <div className="p-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="store">Store</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Basic store configuration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="store-name">Store Name</Label>
                      <Input id="store-name" defaultValue="KSDM Fashion" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="store-email">Contact Email</Label>
                      <Input id="store-email" defaultValue="contact@ksdm.com" type="email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="store-phone">Contact Phone</Label>
                      <Input id="store-phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="store-address">Store Address</Label>
                      <Input id="store-address" defaultValue="123 Fashion Ave, New York, NY 10001" />
                    </div>
                    
                    <Button className="mt-4">Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="store">
                <Card>
                  <CardHeader>
                    <CardTitle>Store Settings</CardTitle>
                    <CardDescription>Configure your store preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Store settings will be implemented here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Configure your notification preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Notification settings will be implemented here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage admin users and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      User management settings will be implemented here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default SettingsPage;
