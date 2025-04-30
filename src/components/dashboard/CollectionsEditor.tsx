
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash } from "lucide-react";

const CollectionsEditor = () => {
  const { toast } = useToast();
  const [collectionsData, setCollectionsData] = useState({
    title: "Shop By Category",
    subtitle: "Each KSDM collection tells a story of awareness, identity, and refined taste. Discover pieces that amplify your presence in any room.",
    categories: [
      {
        name: "Clothing",
        description: "Garments that speak volumes about who you are.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
        link: "/clothing"
      },
      {
        name: "Accessories",
        description: "The final touches that complete your identity.",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
        link: "/accessories"
      },
      {
        name: "Footwear",
        description: "Every step becomes a statement of distinction.",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        link: "/clothing?category=footwear"
      }
    ]
  });

  const handleMainChange = (field, value) => {
    setCollectionsData({
      ...collectionsData,
      [field]: value
    });
  };

  const handleCategoryChange = (index, field, value) => {
    const updatedCategories = [...collectionsData.categories];
    updatedCategories[index] = {
      ...updatedCategories[index],
      [field]: value
    };
    
    setCollectionsData({
      ...collectionsData,
      categories: updatedCategories
    });
  };

  const addCategory = () => {
    setCollectionsData({
      ...collectionsData,
      categories: [
        ...collectionsData.categories,
        {
          name: "New Category",
          description: "Add a description for this category.",
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
          link: "/collections"
        }
      ]
    });
  };

  const removeCategory = (index) => {
    const updatedCategories = [...collectionsData.categories];
    updatedCategories.splice(index, 1);
    
    setCollectionsData({
      ...collectionsData,
      categories: updatedCategories
    });
  };

  const handleSave = () => {
    toast({
      title: "Collections updated",
      description: "Your changes have been saved successfully."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shop by Category</CardTitle>
        <CardDescription>Customize the categories section on your homepage</CardDescription>
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
                value={collectionsData.title}
                onChange={(e) => handleMainChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="section-subtitle">Section Subtitle</Label>
              <Textarea 
                id="section-subtitle" 
                value={collectionsData.subtitle}
                onChange={(e) => handleMainChange("subtitle", e.target.value)}
                className="min-h-20"
              />
            </div>
          </div>
        </div>
        
        {/* Categories */}
        {collectionsData.categories.map((category, index) => (
          <div key={index} className="space-y-4 border-b pb-6">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Category {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeCategory(index)} 
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                disabled={collectionsData.categories.length <= 1}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`category-${index}-name`}>Name</Label>
                <Input 
                  id={`category-${index}-name`} 
                  value={category.name}
                  onChange={(e) => handleCategoryChange(index, "name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`category-${index}-link`}>Link</Label>
                <Input 
                  id={`category-${index}-link`} 
                  value={category.link}
                  onChange={(e) => handleCategoryChange(index, "link", e.target.value)}
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor={`category-${index}-description`}>Description</Label>
                <Textarea 
                  id={`category-${index}-description`} 
                  value={category.description}
                  onChange={(e) => handleCategoryChange(index, "description", e.target.value)}
                  className="min-h-16"
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor={`category-${index}-image`}>Image</Label>
                <div className="flex items-start space-x-4">
                  <div className="h-40 w-40 overflow-hidden rounded-md border">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Button variant="outline">Change Image</Button>
                    <div>
                      <Label htmlFor={`category-${index}-image-url`} className="text-xs text-muted-foreground">Image URL</Label>
                      <Input 
                        id={`category-${index}-image-url`} 
                        value={category.image}
                        onChange={(e) => handleCategoryChange(index, "image", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-2" 
            onClick={addCategory}
          >
            <Plus className="h-4 w-4" /> Add Category
          </Button>
          
          <Button onClick={handleSave}>Save Categories</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollectionsEditor;
