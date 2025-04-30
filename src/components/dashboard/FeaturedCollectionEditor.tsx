
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FeaturedCollectionEditor = () => {
  const { toast } = useToast();
  const [featuredData, setFeaturedData] = useState({
    title: "New Collection",
    subtitle: "Experience our latest pieces designed to amplify your presence and identity.",
    collections: [
      {
        title: "Men's Collection",
        description: "Garments that amplify presence without demanding attention.",
        image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd",
        link: "/clothing?category=men"
      },
      {
        title: "Women's Collection",
        description: "Distinction woven into every thread, designed for those who know their worth.",
        image: "https://images.unsplash.com/photo-1618721405821-80ebc4b63d26",
        link: "/clothing?category=women"
      }
    ]
  });

  const handleMainChange = (field, value) => {
    setFeaturedData({
      ...featuredData,
      [field]: value
    });
  };

  const handleCollectionChange = (index, field, value) => {
    const updatedCollections = [...featuredData.collections];
    updatedCollections[index] = {
      ...updatedCollections[index],
      [field]: value
    };
    
    setFeaturedData({
      ...featuredData,
      collections: updatedCollections
    });
  };

  const handleSave = () => {
    toast({
      title: "Featured Collections updated",
      description: "Your changes have been saved successfully."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Collections</CardTitle>
        <CardDescription>Customize the featured collections section on your homepage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Section Settings */}
        <div className="space-y-4 border-b pb-6">
          <h3 className="font-medium">Section Settings</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="section-title">Section Title</Label>
              <Input 
                id="section-title" 
                value={featuredData.title}
                onChange={(e) => handleMainChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="section-subtitle">Section Subtitle</Label>
              <Textarea 
                id="section-subtitle" 
                value={featuredData.subtitle}
                onChange={(e) => handleMainChange("subtitle", e.target.value)}
                className="min-h-16"
              />
            </div>
          </div>
        </div>
        
        {/* Collections */}
        {featuredData.collections.map((collection, index) => (
          <div key={index} className="space-y-4 border-b pb-6">
            <h3 className="font-medium">Collection {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`collection-${index}-title`}>Title</Label>
                <Input 
                  id={`collection-${index}-title`} 
                  value={collection.title}
                  onChange={(e) => handleCollectionChange(index, "title", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`collection-${index}-link`}>Link</Label>
                <Input 
                  id={`collection-${index}-link`} 
                  value={collection.link}
                  onChange={(e) => handleCollectionChange(index, "link", e.target.value)}
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor={`collection-${index}-description`}>Description</Label>
                <Textarea 
                  id={`collection-${index}-description`} 
                  value={collection.description}
                  onChange={(e) => handleCollectionChange(index, "description", e.target.value)}
                  className="min-h-16"
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor={`collection-${index}-image`}>Image</Label>
                <div className="flex items-start space-x-4">
                  <div className="h-40 w-40 overflow-hidden rounded-md border">
                    <img 
                      src={collection.image} 
                      alt={collection.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Button variant="outline">Change Image</Button>
                    <div>
                      <Label htmlFor={`collection-${index}-image-url`} className="text-xs text-muted-foreground">Image URL</Label>
                      <Input 
                        id={`collection-${index}-image-url`} 
                        value={collection.image}
                        onChange={(e) => handleCollectionChange(index, "image", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Featured Collections</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedCollectionEditor;
