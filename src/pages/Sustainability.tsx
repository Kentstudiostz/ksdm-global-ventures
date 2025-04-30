
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sustainability = () => {
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
        <section className="relative bg-green-800 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd59a93e8232" 
              alt="Sustainability" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Sustainability Commitment</h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                KSDM believes that fashion should not come at the expense of our planet 
                or its people. Our commitment to sustainability is at the core of everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                {...fadeIn(0)}
              >
                <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Vision for Sustainable Fashion</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    At KSDM, sustainability isn't a marketing strategy—it's a fundamental aspect of our 
                    business model and design philosophy. We envision a fashion industry where 
                    environmental responsibility and social justice are woven into the fabric of every garment.
                  </p>
                  <p>
                    We understand that true sustainability requires a holistic approach that considers 
                    the entire lifecycle of a product: from the sourcing of raw materials to production 
                    processes, distribution, use, and eventual recycling or biodegradation.
                  </p>
                  <p>
                    By 2030, we aim to achieve complete circularity in our production model—creating 
                    clothes that can be fully recycled or biodegraded at the end of their life, 
                    contributing to a zero-waste fashion ecosystem.
                  </p>
                  <p>
                    This journey isn't simple, but it's necessary. We're committed to transparency, 
                    continuous improvement, and collaboration with others who share our vision for a 
                    more sustainable fashion future.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.3)}
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7" 
                    alt="Sustainable fashion"
                    className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-green-200/60 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Sustainable practices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn(0)}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Sustainable Practices</h2>
              <p className="text-lg text-gray-700">
                These are the key initiatives that define our approach to sustainable fashion, 
                guiding every decision we make across our supply chain.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                {...fadeIn(0.2)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581922814484-0b48460b7010" 
                    alt="Sustainable materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Sustainable Materials</h3>
                  <p className="text-gray-700">
                    We carefully select materials with minimal environmental impact, including organic 
                    cotton, recycled polyester, and innovative fabrics made from sustainable sources like 
                    hemp, bamboo, and reclaimed fibers.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Organic Cotton</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Hemp</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Recycled Materials</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.3)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" 
                    alt="Ethical production"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Ethical Production</h3>
                  <p className="text-gray-700">
                    We work exclusively with factories and artisans who uphold fair labor practices, 
                    ensuring safe working conditions, fair wages, and dignified employment throughout 
                    our supply chain.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Fair Wages</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Safe Conditions</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Worker Rights</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.4)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b" 
                    alt="Waste reduction"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Waste Reduction</h3>
                  <p className="text-gray-700">
                    Our zero-waste design approach minimizes fabric waste during production. Any leftover 
                    materials are repurposed into accessories or recycled for other applications, keeping 
                    textiles out of landfills.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Zero-Waste Design</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Upcycling</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Circular Economy</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.5)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd" 
                    alt="Carbon footprint"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Carbon Footprint Reduction</h3>
                  <p className="text-gray-700">
                    We're actively working to reduce our carbon emissions through local production, 
                    renewable energy in our facilities, and optimization of our shipping and distribution 
                    networks.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Local Production</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Renewable Energy</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Carbon Offsetting</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.6)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1585435421671-0c16737a6f80" 
                    alt="Community impact"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Positive Community Impact</h3>
                  <p className="text-gray-700">
                    We invest in the communities where our products are made through skill development 
                    programs, educational initiatives, and partnerships with local organizations focused 
                    on environmental conservation.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Education</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Community Support</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Local Partnerships</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.7)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526489550178-7bd5d9944e4f" 
                    alt="Transparency"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-ksdm-navy">Radical Transparency</h3>
                  <p className="text-gray-700">
                    We believe customers have a right to know how their clothes are made. We provide 
                    detailed information about our supply chain, production processes, and the environmental 
                    impact of our products.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Supply Chain Visibility</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Impact Reports</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Open Documentation</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Goals section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn(0)}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Sustainability Goals</h2>
              <p className="text-lg text-gray-700">
                We've set ambitious targets to guide our sustainability journey, with measurable milestones 
                that keep us accountable and focused on continuous improvement.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                {...fadeIn(0.2)}
                className="bg-white border border-green-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-6">
                  <span className="inline-block bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    2025
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-ksdm-navy">Near-Term Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">80% sustainable materials across all collections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">50% reduction in water usage in production</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">100% renewable energy in owned facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Eliminate 90% of virgin plastic from packaging</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.4)}
                className="bg-green-800 text-white rounded-lg p-6 shadow-md transform md:-translate-y-6"
              >
                <div className="text-center mb-6">
                  <span className="inline-block bg-white text-green-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    2030
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Mid-Term Vision</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ksdm-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>100% sustainable materials in all products</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ksdm-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Carbon-neutral operations across entire supply chain</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ksdm-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Zero waste from all production facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ksdm-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full circularity model implemented for all products</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ksdm-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Industry-leading transparency in supply chain reporting</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.6)}
                className="bg-white border border-green-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-6">
                  <span className="inline-block bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                    2040
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-ksdm-navy">Long-Term Aspiration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Regenerative impact across all operations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Net positive environmental contribution</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Fully closed-loop product systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Industry transformation through open innovation</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Progress section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                {...fadeIn(0)}
              >
                <h2 className="text-3xl font-bold mb-6 text-ksdm-navy">Our Progress So Far</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Sustainable Materials</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-gray-500">
                      <span>Current: 65%</span>
                      <span>Goal: 80% by 2025</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Water Usage Reduction</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-gray-500">
                      <span>Current: 42%</span>
                      <span>Goal: 50% by 2025</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Renewable Energy</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-gray-500">
                      <span>Current: 78%</span>
                      <span>Goal: 100% by 2025</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Plastic Elimination</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-gray-500">
                      <span>Current: 85%</span>
                      <span>Goal: 90% by 2025</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
                    Download Full Impact Report
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeIn(0.3)}
              >
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg">Certified B Corp Since 2019</h3>
                    </div>
                    <p className="text-gray-700">
                      We've met the highest standards of verified social and environmental performance, 
                      public transparency, and legal accountability.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg">1% For The Planet Member</h3>
                    </div>
                    <p className="text-gray-700">
                      We donate 1% of annual sales to environmental nonprofits dedicated to creating a 
                      healthier planet.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg">Fashion Industry Charter for Climate Action</h3>
                    </div>
                    <p className="text-gray-700">
                      We're a signatory to the UN's initiative, committing to 30% GHG emission reductions 
                      by 2030 and climate neutrality by 2050.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg">Sustainable Apparel Coalition</h3>
                    </div>
                    <p className="text-gray-700">
                      We use the Higg Index to measure and score our sustainability performance annually.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              {...fadeIn(0)}
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Sustainability Journey</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8">
                True sustainability requires collective action. Discover how you can be part of the solution
                through mindful consumption and care for your KSDM pieces.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-ksdm-gold text-ksdm-navy font-semibold rounded hover:bg-yellow-400 transition-colors">
                  Shop Sustainable Collection
                </button>
                <button className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded hover:bg-white/10 transition-colors">
                  Learn About Garment Care
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

export default Sustainability;
