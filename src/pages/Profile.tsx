
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, Heart, MapPin, Settings, User, Package, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  
  // Sample user data
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Avenue, New York, NY 10001",
    bio: "Fashion enthusiast with a passion for unique identity pieces and sustainable style."
  });

  // Sample orders data
  const orders = [
    {
      id: "ORD-4298",
      date: "2025-03-15",
      status: "Delivered",
      total: 245.99,
      items: 3
    },
    {
      id: "ORD-3956",
      date: "2025-02-28",
      status: "Shipped",
      total: 189.50,
      items: 2
    },
    {
      id: "ORD-3752",
      date: "2025-02-10",
      status: "Processing",
      total: 124.99,
      items: 1
    }
  ];

  // Sample favorites data
  const favorites = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 2,
      name: "Designer Leather Jacket",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
    },
    {
      id: 3,
      name: "Signature Gold Bracelet",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343c"
    }
  ];

  // Sample tracking data
  const trackingItems = [
    {
      id: "TRK-8754",
      orderId: "ORD-3956",
      carrier: "KSDM Express",
      status: "In Transit",
      estimatedDelivery: "2025-04-02",
      lastUpdate: "Package departed sorting facility"
    }
  ];

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully."
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out."
    });
    // In a real app, this would handle actual logout logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-24">
                <div className="flex flex-col items-center mb-6 p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{userData.name}</h2>
                  <p className="text-gray-500 text-sm">Member since 2023</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <Tabs defaultValue="profile" orientation="vertical" className="w-full">
                    <TabsList className="flex flex-col items-stretch h-auto bg-transparent space-y-1">
                      <TabsTrigger value="profile" className="justify-start data-[state=active]:bg-gray-100">
                        <User size={18} className="mr-2" /> Profile
                      </TabsTrigger>
                      <TabsTrigger value="orders" className="justify-start data-[state=active]:bg-gray-100">
                        <ShoppingBag size={18} className="mr-2" /> Orders
                      </TabsTrigger>
                      <TabsTrigger value="favorites" className="justify-start data-[state=active]:bg-gray-100">
                        <Heart size={18} className="mr-2" /> Favorites
                      </TabsTrigger>
                      <TabsTrigger value="tracking" className="justify-start data-[state=active]:bg-gray-100">
                        <MapPin size={18} className="mr-2" /> Tracking
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="justify-start data-[state=active]:bg-gray-100">
                        <Settings size={18} className="mr-2" /> Settings
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} className="mr-2" /> Log Out
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Main Content */}
            <div>
              <Tabs defaultValue="profile">
                <TabsContent value="profile" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                          Manage your personal information and preferences
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium block mb-1">Name</label>
                            {editing ? (
                              <Input 
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gray-700">{userData.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">Email</label>
                            {editing ? (
                              <Input 
                                name="email"
                                type="email"
                                value={userData.email}
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gray-700">{userData.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">Phone Number</label>
                            {editing ? (
                              <Input 
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gray-700">{userData.phone}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">Shipping Address</label>
                            {editing ? (
                              <Input 
                                name="address"
                                value={userData.address}
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gray-700">{userData.address}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium block mb-1">Bio</label>
                          {editing ? (
                            <Textarea 
                              name="bio"
                              value={userData.bio}
                              onChange={handleChange}
                              rows={3}
                            />
                          ) : (
                            <p className="text-gray-700">{userData.bio}</p>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        {editing ? (
                          <Button onClick={handleSave} className="bg-ksdm-navy hover:bg-blue-900">
                            Save Changes
                          </Button>
                        ) : (
                          <Button onClick={handleEdit} variant="outline">
                            Edit Profile
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="orders" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Order History</CardTitle>
                        <CardDescription>
                          View and track your previous orders
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {orders.map((order) => (
                            <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{order.id}</h4>
                                  <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                    ${order.status === "Delivered" ? "bg-green-100 text-green-800" : 
                                      order.status === "Shipped" ? "bg-blue-100 text-blue-800" : 
                                      "bg-yellow-100 text-yellow-800"}`
                                  }>
                                    {order.status}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-4 flex justify-between items-center">
                                <div>
                                  <p className="text-sm text-gray-700">Total: <span className="font-semibold">${order.total.toFixed(2)}</span></p>
                                  <p className="text-sm text-gray-700">{order.items} {order.items === 1 ? "item" : "items"}</p>
                                </div>
                                <Button variant="outline" size="sm">View Details</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="favorites" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Favorites</CardTitle>
                        <CardDescription>
                          Products you've saved for later
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {favorites.map((item) => (
                            <div key={item.id} className="group border rounded-lg overflow-hidden hover-scale">
                              <div className="aspect-square overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                              <div className="p-4">
                                <h4 className="font-medium truncate">{item.name}</h4>
                                <p className="text-sm text-gray-700 font-semibold">${item.price.toFixed(2)}</p>
                                <div className="mt-3 flex space-x-2">
                                  <Button size="sm" className="w-full bg-ksdm-navy hover:bg-blue-900">Add to Cart</Button>
                                  <Button size="sm" variant="outline" className="w-10 flex-none flex justify-center items-center">
                                    <Heart size={16} className="text-red-500" fill="currentColor" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="tracking" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Package Tracking</CardTitle>
                        <CardDescription>
                          Track your shipments in real-time
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {trackingItems.length > 0 ? (
                          <div className="space-y-6">
                            {trackingItems.map((item) => (
                              <div key={item.id} className="border rounded-lg p-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <h4 className="font-semibold">Tracking No: {item.id}</h4>
                                    <p className="text-sm text-gray-500">Order: {item.orderId} • {item.carrier}</p>
                                  </div>
                                  <div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                      {item.status}
                                    </span>
                                  </div>
                                </div>
                                
                                <div className="relative pb-12">
                                  <div className="absolute left-5 top-0 ml-px border-l-2 border-gray-200 h-full"></div>
                                  
                                  <div className="relative flex items-start">
                                    <div className="flex items-center justify-center w-10 h-10 bg-ksdm-navy rounded-full -ml-5">
                                      <Package className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="ml-4">
                                      <p className="font-medium">Package picked up</p>
                                      <p className="text-sm text-gray-500">April 1, 2025 • 10:23 AM</p>
                                    </div>
                                  </div>
                                  
                                  <div className="relative flex items-start mt-8">
                                    <div className="flex items-center justify-center w-10 h-10 bg-ksdm-gold rounded-full -ml-5">
                                      <Package className="w-5 h-5 text-ksdm-navy" />
                                    </div>
                                    <div className="ml-4">
                                      <p className="font-medium">Last Update</p>
                                      <p className="text-sm text-gray-500">April 1, 2025 • 4:45 PM</p>
                                      <p className="text-sm text-gray-700 mt-1">{item.lastUpdate}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="relative flex items-start mt-8">
                                    <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full -ml-5">
                                      <MapPin className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div className="ml-4">
                                      <p className="font-medium">Estimated Delivery</p>
                                      <p className="text-sm text-gray-500">
                                        {new Date(item.estimatedDelivery).toLocaleDateString('en-US', {
                                          weekday: 'long',
                                          month: 'long',
                                          day: 'numeric'
                                        })}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <Button variant="outline" className="bg-gray-50">
                                    View Detailed Tracking
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                              <Package className="h-8 w-8 text-gray-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium">No packages being tracked</h3>
                            <p className="mt-1 text-gray-500">
                              When you have shipments in transit, they will appear here
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="settings" className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>
                          Manage your account preferences and security
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Email Preferences</h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-sm text-gray-700">Order confirmations</label>
                              <input type="checkbox" defaultChecked className="toggle" />
                            </div>
                            <div className="flex items-center justify-between">
                              <label className="text-sm text-gray-700">Shipping updates</label>
                              <input type="checkbox" defaultChecked className="toggle" />
                            </div>
                            <div className="flex items-center justify-between">
                              <label className="text-sm text-gray-700">Promotional emails</label>
                              <input type="checkbox" className="toggle" />
                            </div>
                            <div className="flex items-center justify-between">
                              <label className="text-sm text-gray-700">New collection alerts</label>
                              <input type="checkbox" defaultChecked className="toggle" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Security</h3>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-700">Password</p>
                              <p className="text-sm text-gray-500">Last updated: 30 days ago</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Change Password
                              </Button>
                            </div>
                            <div>
                              <p className="text-sm text-gray-700">Two-Factor Authentication</p>
                              <p className="text-sm text-gray-500">Not enabled</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Enable 2FA
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Account Actions</h3>
                          <div className="space-y-2">
                            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 w-full justify-start">
                              Delete Account
                            </Button>
                            <p className="text-xs text-gray-500">
                              This will permanently remove all your data from our systems.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
