
import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import HeroEditor from "@/components/dashboard/HeroEditor";
import FeaturedCollectionEditor from "@/components/dashboard/FeaturedCollectionEditor";
import CollectionsEditor from "@/components/dashboard/CollectionsEditor";

const StorefrontPage = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your storefront changes have been saved successfully.",
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        {/* Main Content */}
        <SidebarInset className="bg-gray-50">
          <DashboardHeader 
            title="Storefront Management" 
            description="Customize your store's front page content"
            actions={
              <Button onClick={handleSave}>Save All Changes</Button>
            }
          />
          <div className="p-6">
            <Tabs defaultValue="hero" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="hero">Hero Section</TabsTrigger>
                <TabsTrigger value="featured">Featured Collection</TabsTrigger>
                <TabsTrigger value="collections">Collections</TabsTrigger>
                <TabsTrigger value="video">Video Feature</TabsTrigger>
                <TabsTrigger value="trending">Trending Products</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hero">
                <HeroEditor />
              </TabsContent>
              
              <TabsContent value="featured">
                <FeaturedCollectionEditor />
              </TabsContent>
              
              <TabsContent value="collections">
                <CollectionsEditor />
              </TabsContent>
              
              <TabsContent value="video">
                <Card>
                  <CardHeader>
                    <CardTitle>Video Feature</CardTitle>
                    <CardDescription>Update the video showcase on your homepage</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="video-title">Title</Label>
                      <Input 
                        id="video-title" 
                        defaultValue="Define Your Presence" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="video-description">Description</Label>
                      <Textarea 
                        id="video-description" 
                        defaultValue="Experience the KSDM difference in motion. Our pieces don't just clothe—they transform how you move through the world." 
                        className="min-h-20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="video-link">YouTube Video ID</Label>
                      <Input 
                        id="video-link" 
                        defaultValue="dQw4w9WgXcQ" 
                        placeholder="e.g. dQw4w9WgXcQ"
                      />
                      <p className="text-sm text-muted-foreground">Enter the YouTube video ID (the part after v= in the URL)</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="video-thumbnail">Video Thumbnail</Label>
                      <div className="flex items-start space-x-4">
                        <div className="relative w-36 h-24 overflow-hidden rounded-md border">
                          <img 
                            src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f" 
                            alt="Video thumbnail" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Button variant="outline">Change Image</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trending">
                <Card>
                  <CardHeader>
                    <CardTitle>Trending Products</CardTitle>
                    <CardDescription>Select which products to feature in the trending section</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Select up to 4 products to feature in the trending section of your homepage. 
                      Products with high engagement or sales are recommended.
                    </p>
                    
                    {/* Product selection would go here */}
                    <div className="border rounded-md p-4">
                      <p className="text-center text-muted-foreground">
                        Product selection interface will be implemented here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="testimonials">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Testimonials</CardTitle>
                    <CardDescription>Add and manage customer reviews to display on your homepage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Add testimonials from satisfied customers to build trust with new visitors.
                    </p>
                    
                    {/* Testimonials management interface would go here */}
                    <div className="border rounded-md p-4">
                      <p className="text-center text-muted-foreground">
                        Testimonials management interface will be implemented here
                      </p>
                    </div>
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

export default StorefrontPage;
