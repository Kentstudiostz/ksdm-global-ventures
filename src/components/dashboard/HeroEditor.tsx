
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HeroEditor = () => {
  const { toast } = useToast();
  const [heroData, setHeroData] = useState({
    title: {
      line1: "Distinction.",
      line2: "Identity.",
      line3: "Awareness."
    },
    description: "KSDM crafts experiences that make you visible. Not just clothing—but a statement of identity.",
    primaryButton: {
      text: "Shop Now",
      link: "/clothing"
    },
    secondaryButton: {
      text: "Explore",
      link: "/accessories"
    },
    image: {
      desktop: "https://images.unsplash.com/photo-1588701177361-c42359b29f68",
      mobile: "https://images.unsplash.com/photo-1523139188738-65073d2917c1"
    }
  });
  
  const handleChange = (section, field, value) => {
    setHeroData({
      ...heroData,
      [section]: section === "title" ? { ...heroData.title, [field]: value } : 
                 typeof heroData[section] === "object" && field ? 
                 { ...heroData[section], [field]: value } : value
    });
  };
  
  const handleSave = () => {
    toast({
      title: "Hero section updated",
      description: "Your changes have been saved successfully."
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Section</CardTitle>
        <CardDescription>Customize the main hero section on your homepage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content">
            <div className="space-y-4">
              <div className="space-y-1">
                <Label>Title</Label>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="title-line1" className="text-xs text-muted-foreground">Line 1</Label>
                    <Input 
                      id="title-line1" 
                      value={heroData.title.line1} 
                      onChange={(e) => handleChange("title", "line1", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title-line2" className="text-xs text-muted-foreground">Line 2</Label>
                    <Input 
                      id="title-line2" 
                      value={heroData.title.line2} 
                      onChange={(e) => handleChange("title", "line2", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title-line3" className="text-xs text-muted-foreground">Line 3</Label>
                    <Input 
                      id="title-line3" 
                      value={heroData.title.line3} 
                      onChange={(e) => handleChange("title", "line3", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={heroData.description}
                  onChange={(e) => handleChange("description", null, e.target.value)}
                  className="min-h-20"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="images">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="desktop-image">Desktop Hero Image</Label>
                <div className="flex items-start space-x-4">
                  <div className="relative w-48 h-32 overflow-hidden rounded-md border">
                    <img 
                      src={heroData.image.desktop} 
                      alt="Desktop hero" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline">Change Image</Button>
                    <div>
                      <Label htmlFor="desktop-image-url" className="text-xs text-muted-foreground">Image URL</Label>
                      <Input 
                        id="desktop-image-url" 
                        value={heroData.image.desktop}
                        onChange={(e) => handleChange("image", "desktop", e.target.value)}
                        className="w-72"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="mobile-image">Mobile Hero Image</Label>
                <div className="flex items-start space-x-4">
                  <div className="relative w-24 h-40 overflow-hidden rounded-md border">
                    <img 
                      src={heroData.image.mobile} 
                      alt="Mobile hero" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline">Change Image</Button>
                    <div>
                      <Label htmlFor="mobile-image-url" className="text-xs text-muted-foreground">Image URL</Label>
                      <Input 
                        id="mobile-image-url" 
                        value={heroData.image.mobile}
                        onChange={(e) => handleChange("image", "mobile", e.target.value)}
                        className="w-72"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="buttons">
            <div className="space-y-6">
              <div className="space-y-4 pb-4 border-b">
                <h4 className="font-medium">Primary Button</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-button-text">Button Text</Label>
                    <Input 
                      id="primary-button-text" 
                      value={heroData.primaryButton.text}
                      onChange={(e) => handleChange("primaryButton", "text", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primary-button-link">Button Link</Label>
                    <Input 
                      id="primary-button-link" 
                      value={heroData.primaryButton.link}
                      onChange={(e) => handleChange("primaryButton", "link", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Secondary Button</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="secondary-button-text">Button Text</Label>
                    <Input 
                      id="secondary-button-text" 
                      value={heroData.secondaryButton.text}
                      onChange={(e) => handleChange("secondaryButton", "text", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-button-link">Button Link</Label>
                    <Input 
                      id="secondary-button-link" 
                      value={heroData.secondaryButton.link}
                      onChange={(e) => handleChange("secondaryButton", "link", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="border rounded-md p-4 bg-gray-50">
              <div className="aspect-[16/9] bg-ksdm-navy relative overflow-hidden rounded-md">
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white">
                      <span className="block">{heroData.title.line1}</span>
                      <span className="block text-ksdm-gold">{heroData.title.line2}</span>
                      <span className="block">{heroData.title.line3}</span>
                    </h2>
                    <p className="text-white/80 max-w-md my-4">
                      {heroData.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-ksdm-gold text-ksdm-navy">
                        {heroData.primaryButton.text}
                      </Button>
                      <Button variant="outline" className="text-white border-white">
                        {heroData.secondaryButton.text}
                      </Button>
                    </div>
                  </div>
                </div>
                <img 
                  src={heroData.image.desktop}
                  alt="Hero preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Preview (simplified version)
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Hero Section</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroEditor;
