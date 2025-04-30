
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrandPhilosophy = () => {
  const fadeIn = (delay: number) => ({
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
        <section className="relative bg-gradient-to-br from-ksdm-navy to-slate-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Brand Philosophy</h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                At KSDM, we don't merely create clothing; we craft identity. 
                Every thread, stitch, and design element is infused with meaning and purpose.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                {...fadeIn(0)}
              >
                <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">The KSDM Ethos</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    KSDM was founded on a radical premise: in a world of mass production and fleeting trends, 
                    we believe in creating garments that amplify your presence rather than define it.
                  </p>
                  <p>
                    Our philosophy is built around three core pillars: <span className="font-semibold">Knowledge</span> of 
                    self and craft, <span className="font-semibold">Self-Discovery</span> through authentic expression, 
                    and <span className="font-semibold">Manifestation</span> of one's unique identity.
                  </p>
                  <p>
                    We reject the notion that fashion should be disposable or that it should conform to 
                    rigid societal expectations. Instead, we embrace the power of clothing as a form of 
                    communication—a visual language that speaks volumes without saying a word.
                  </p>
                  <p>
                    When you wear KSDM, you're not just wearing clothes. You're wearing a statement about who 
                    you are and what you stand for. You're making yourself "visible even to the naked eye."
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.3)}
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739" 
                    alt="KSDM philosophy"
                    className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-ksdm-gold/20 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Principles section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn(0)}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Guiding Principles</h2>
              <p className="text-lg text-gray-700">
                These five principles inform every decision we make, from design and production 
                to how we engage with our community.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                {...fadeIn(0.2)}
                className="col-span-3 md:col-span-1 row-span-2 p-8 rounded-lg shadow-lg bg-ksdm-navy text-white"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-gold flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-ksdm-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-ksdm-gold">Authentic Expression</h3>
                <p className="text-gray-100 mb-4">
                  We believe that true style comes from within. Our designs serve as a canvas for 
                  your authentic self—not a costume to hide behind.
                </p>
                <p className="text-gray-100">
                  Every KSDM piece is created to amplify who you already are, not to transform you into 
                  someone else. We celebrate the individuals who wear our clothing, not the other way around.
                </p>
                <div className="absolute bottom-8 right-8 opacity-20">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.3)}
                className="p-8 rounded-lg shadow-lg bg-white"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Craftsmanship</h3>
                <p className="text-gray-700">
                  We honor the tradition of meticulous craftsmanship while embracing innovation. 
                  Every detail matters, from the quality of our materials to the precision of our techniques.
                </p>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.4)}
                className="p-8 rounded-lg shadow-lg bg-white"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Intentional Design</h3>
                <p className="text-gray-700">
                  Nothing in our designs is arbitrary. Each element serves a purpose, whether functional or 
                  symbolic, creating pieces that are timeless rather than trendy.
                </p>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.5)}
                className="p-8 rounded-lg shadow-lg bg-white"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Global Perspective</h3>
                <p className="text-gray-700">
                  With roots in both Kentucky and Tanzania, we draw inspiration from diverse cultures and 
                  traditions, creating a unique aesthetic that transcends borders.
                </p>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.6)}
                className="p-8 rounded-lg shadow-lg bg-white"
              >
                <div className="w-16 h-16 rounded-full bg-ksdm-navy flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ksdm-navy">Longevity</h3>
                <p className="text-gray-700">
                  We create clothes that are meant to last—both physically and stylistically. Our designs 
                  evolve with you, becoming more personal and meaningful over time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Design approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                {...fadeIn(0)}
                className="order-2 md:order-1"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b" 
                    alt="Design process"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176" 
                    alt="Design process"
                    className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1576566588028-4147f3842f27" 
                    alt="Design process"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e" 
                    alt="Design process"
                    className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
                  />
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.3)}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Design Approach</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    At KSDM, design is a dialogue between tradition and innovation, form and function, 
                    individual and community. We begin each collection with a question: How can we help 
                    people express who they truly are?
                  </p>
                  <p>
                    Our design process is deeply collaborative, bringing together diverse perspectives 
                    and expertise. From initial concept to final execution, we consider not just how a 
                    garment looks, but how it feels, how it moves, and how it will evolve over time.
                  </p>
                  <p>
                    We draw inspiration from architecture, nature, cultural traditions, and the stories 
                    of the individuals who wear our clothes. The result is clothing that feels both timely 
                    and timeless—rooted in the present moment while transcending fleeting trends.
                  </p>
                  <p>
                    Most importantly, we design with intention. Nothing is arbitrary. Every stitch, seam, 
                    and silhouette serves a purpose, whether functional or symbolic, creating pieces that 
                    become more meaningful the longer they're worn.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Quote section */}
        <section className="py-20 bg-ksdm-navy text-white">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn(0)}
              className="max-w-4xl mx-auto text-center"
            >
              <svg className="w-16 h-16 mx-auto mb-6 text-ksdm-gold opacity-75" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, 
                fashion has to do with ideas, the way we live, what is happening. Fashion is about identity."
              </h2>
              <p className="text-xl font-light">— Kwame Simmons, KSDM Founder</p>
            </motion.div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn(0)}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Experience the KSDM Difference</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our philosophy isn't just words—it's woven into every piece we create. 
                Discover clothing that speaks your truth without saying a word.
              </p>
              <button className="px-8 py-3 bg-ksdm-gold text-ksdm-navy font-semibold rounded hover:bg-yellow-400 transition-colors">
                Shop Our Collections
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrandPhilosophy;
