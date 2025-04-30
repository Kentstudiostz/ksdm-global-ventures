
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Collections = () => {
  // Sample collections data
  const collections = [
    {
      id: 1,
      name: "Summer Essentials",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      description: "Light fabrics and vibrant colors for the summer days.",
      items: 24
    },
    {
      id: 2,
      name: "Winter Collection",
      image: "https://images.unsplash.com/photo-1577900232427-88e3f5b18013",
      description: "Warm and stylish pieces for the cold season.",
      items: 18
    },
    {
      id: 3,
      name: "Business Attire",
      image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051",
      description: "Professional looks for your workplace.",
      items: 15
    },
    {
      id: 4,
      name: "Casual Weekends",
      image: "https://images.unsplash.com/photo-1503342484812-ee33283508a5",
      description: "Comfortable yet stylish outfits for your days off.",
      items: 22
    },
    {
      id: 5,
      name: "Evening Elegance",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      description: "Sophisticated designs for special occasions.",
      items: 12
    },
    {
      id: 6,
      name: "Urban Streetwear",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8",
      description: "Bold and trendy pieces for the city life.",
      items: 20
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" 
              alt="Collections background" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">KSDM Collections</h1>
              <p className="text-lg md:text-xl mb-8">
                Explore our carefully curated collections, each telling a unique story 
                of identity, awareness, and refined taste.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <Filter size={18} className="mr-2" /> Filter Collections
                </Button>
                <Button className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400">
                  <Tag size={18} className="mr-2" /> New Arrivals
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Collections grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover-scale">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-ksdm-navy">{collection.name}</h3>
                        <span className="text-sm text-gray-500">{collection.items} items</span>
                      </div>
                      <p className="text-gray-600 mb-4">{collection.description}</p>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full mt-2 border-ksdm-navy text-ksdm-navy hover:bg-ksdm-navy hover:text-white"
                      >
                        <Link to={`/collections/${collection.id}`}>
                          Browse Collection
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured collection */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Featured Collection</h2>
                <h3 className="text-2xl font-medium mb-6 text-ksdm-gold">Identity Series</h3>
                <p className="text-gray-700 mb-6">
                  The Identity Series is our flagship collection that embodies the essence of KSDM. 
                  Each piece is carefully designed to highlight your unique identity and make a 
                  statement without saying a word.
                </p>
                <p className="text-gray-700 mb-8">
                  From meticulously tailored jackets to statement accessories, this collection 
                  offers versatile pieces that transition seamlessly from day to night, always 
                  ensuring you remain visible even to the naked eye.
                </p>
                <Button className="bg-ksdm-navy hover:bg-blue-900">
                  Explore Identity Series
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae" 
                  alt="Identity Collection 1"
                  className="rounded-lg object-cover w-full h-80"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517445312882-bc9910d016b7" 
                  alt="Identity Collection 2"
                  className="rounded-lg object-cover w-full h-80 mt-8"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
