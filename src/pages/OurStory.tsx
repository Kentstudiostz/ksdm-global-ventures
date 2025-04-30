
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurStory = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };
  
  const staggeredFadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="relative bg-ksdm-navy text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b" 
              alt="KSDM story" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
              <p className="text-xl md:text-2xl font-light">
                More than clothing. KSDM crafts identity through garments and accessories 
                that make you visible even to the naked eye.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Origin story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                {...staggeredFadeIn(0)}
              >
                <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">From Vision to Reality</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    KSDM was born from a singular vision: to redefine what clothing means in the modern world. Founded in 2011 by designer Kwame Simmons, KSDM began as a small boutique in Lexington, Kentucky, with the aim of creating garments that spoke volumes about identity and awareness.
                  </p>
                  <p>
                    Frustrated by the homogeneity of mainstream fashion, Kwame sought to create pieces that celebrated individuality while maintaining an uncompromising standard of quality. The name KSDM—Knowledge, Self-Discovery, Manifestation—embodies the three pillars upon which our brand was built.
                  </p>
                  <p>
                    What started as a small collection of handcrafted shirts and accessories has evolved into a global brand, yet we've never lost sight of our founding vision: to make you visible even to the naked eye.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                {...staggeredFadeIn(0.3)}
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" 
                    alt="KSDM founder"
                    className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                  />
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-ksdm-gold/20 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Key milestones */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              {...staggeredFadeIn(0)}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Journey</h2>
              <p className="text-lg text-gray-700">
                The path of KSDM has been one of constant evolution, always guided by our 
                commitment to authentic expression through fashion.
              </p>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline events */}
              <div className="space-y-24">
                <motion.div
                  {...staggeredFadeIn(0.2)}
                  className="relative"
                >
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-4 border-ksdm-navy bg-white flex items-center justify-center">
                      <span className="font-bold">2011</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-0 md:w-[calc(50%-32px)] p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">The Beginning</h3>
                    <p className="text-gray-700">
                      Kwame Simmons opens the first KSDM boutique in Lexington, selling handcrafted 
                      shirts and accessories with a focus on unique identity.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  {...staggeredFadeIn(0.4)}
                  className="relative"
                >
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-4 border-ksdm-navy bg-white flex items-center justify-center">
                      <span className="font-bold">2015</span>
                    </div>
                  </div>
                  <div className="mr-auto ml-8 md:ml-0 md:ml-auto md:w-[calc(50%-32px)] p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">Global Expansion</h3>
                    <p className="text-gray-700">
                      After gaining recognition, KSDM opens its first international store in 
                      Dar es Salaam, Tanzania, bringing our vision to a global audience.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  {...staggeredFadeIn(0.6)}
                  className="relative"
                >
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-4 border-ksdm-navy bg-white flex items-center justify-center">
                      <span className="font-bold">2019</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-0 md:w-[calc(50%-32px)] p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">The Identity Collection</h3>
                    <p className="text-gray-700">
                      Launch of our signature Identity Collection, which receives critical acclaim 
                      and establishes KSDM as a pioneer in identity-focused fashion.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  {...staggeredFadeIn(0.8)}
                  className="relative"
                >
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-4 border-ksdm-navy bg-white flex items-center justify-center">
                      <span className="font-bold">2023</span>
                    </div>
                  </div>
                  <div className="mr-auto ml-8 md:ml-0 md:ml-auto md:w-[calc(50%-32px)] p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">Sustainable Future</h3>
                    <p className="text-gray-700">
                      KSDM commits to 100% sustainable materials by 2030, launching our first 
                      fully sustainable capsule collection to critical acclaim.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  {...staggeredFadeIn(1.0)}
                  className="relative"
                >
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-4 border-ksdm-gold bg-ksdm-navy text-white flex items-center justify-center">
                      <span className="font-bold">Now</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-8 md:mr-0 md:w-[calc(50%-32px)] p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-2">The Future Is Identity</h3>
                    <p className="text-gray-700">
                      Today, KSDM continues to push boundaries, creating garments and accessories 
                      that empower individuals to express their authentic selves.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              {...staggeredFadeIn(0)}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Core Values</h2>
              <p className="text-lg text-gray-700">
                At KSDM, we're guided by a set of principles that inform everything we create.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                {...staggeredFadeIn(0.2)}
                className="p-8 border rounded-lg shadow-sm bg-white hover-scale"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Identity</h3>
                <p className="text-gray-700">
                  We believe clothing should be an extension of your identity, not a mask that hides it. Every piece we create is designed to amplify who you truly are.
                </p>
              </motion.div>
              
              <motion.div
                {...staggeredFadeIn(0.4)}
                className="p-8 border rounded-lg shadow-sm bg-white hover-scale"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Community</h3>
                <p className="text-gray-700">
                  KSDM isn't just a brand; it's a community of individuals who understand that fashion is about communication, connection, and shared values.
                </p>
              </motion.div>
              
              <motion.div
                {...staggeredFadeIn(0.6)}
                className="p-8 border rounded-lg shadow-sm bg-white hover-scale"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Sustainability</h3>
                <p className="text-gray-700">
                  We're committed to minimizing our environmental impact while maximizing our social contribution, ensuring that our fashion choices don't compromise our future.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-ksdm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              {...staggeredFadeIn(0)}
            >
              <h2 className="text-3xl font-bold mb-6">Join the KSDM Movement</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                Be part of a brand that celebrates individuality, craftsmanship, and authentic expression.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-ksdm-gold text-ksdm-navy font-semibold rounded hover:bg-yellow-400 transition-colors">
                  Shop Collections
                </button>
                <button className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded hover:bg-white/10 transition-colors">
                  Follow Our Journey
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
