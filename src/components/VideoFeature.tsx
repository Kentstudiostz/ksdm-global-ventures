
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoFeature = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ksdm-navy mb-4">
            Define Your <span className="text-ksdm-gold">Presence</span>
          </h2>
          <p className="text-lg text-gray-600">
            Experience the KSDM difference in motion. Our pieces don't just clothe—they transform how you move through the world.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="aspect-video bg-gray-900 relative">
            {!isPlaying ? (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f" 
                  alt="KSDM Fashion Video Preview" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ksdm-navy/60 to-black/30 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="bg-ksdm-gold rounded-full p-5 text-ksdm-navy"
                  >
                    <Play size={32} />
                  </motion.button>
                </div>
                <div className="absolute bottom-0 left-0 p-8 text-white max-w-md">
                  <h3 className="text-2xl font-bold mb-2">KSDM: The Identity Series</h3>
                  <p className="opacity-90">Garments that make a statement without saying a word.</p>
                </div>
              </>
            ) : (
              <div className="w-full h-full">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="KSDM Fashion Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-ksdm-navy hover:bg-blue-900"
            onClick={() => window.open('/collections', '_blank')}
          >
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoFeature;
