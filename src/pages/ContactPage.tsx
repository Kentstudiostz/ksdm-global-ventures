
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Check, Send, Loader2 } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    topic: "",
    message: ""
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      topic: "",
      message: ""
    });
    setStep(1);
    setIsComplete(false);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };

  // Arrays of possible topics
  const topics = [
    "Product Information",
    "Order Status",
    "Returns & Exchanges",
    "Styling Advice",
    "Partnership Inquiry",
    "Press & Media",
    "Careers",
    "Other"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero section */}
        <section className="bg-ksdm-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl"
              >
                We're here to answer your questions and help you discover your unique 
                identity through KSDM.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {/* Progress indicator */}
              {!isComplete && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">Step {step} of 4</div>
                    <div className="text-sm text-gray-500">
                      {step === 1 ? "About you" : 
                       step === 2 ? "Topic" : 
                       step === 3 ? "Details" : "Review"}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div 
                      className="bg-ksdm-navy h-2.5 rounded-full" 
                      initial={{ width: `${(step - 1) * 25}%` }}
                      animate={{ width: `${step * 25}%` }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              )}

              {/* Form Steps */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                {isComplete ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-ksdm-navy">Message Sent!</h3>
                    <p className="text-gray-700 mb-8">
                      Thank you for reaching out to us. A member of our team will get back to you within 24-48 hours.
                    </p>
                    <Button 
                      onClick={resetForm}
                      className="bg-ksdm-navy hover:bg-blue-800"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={step === 4 ? handleSubmit : e => e.preventDefault()}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          variants={formVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h2 className="text-2xl font-semibold mb-6 text-ksdm-navy">Let's start with your information</h2>
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                              </label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => updateField("name", e.target.value)}
                                placeholder="Enter your full name"
                                required
                                className="w-full"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                              </label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateField("email", e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full"
                              />
                            </div>
                            
                            <div className="pt-4">
                              <Button
                                type="button"
                                onClick={nextStep}
                                disabled={!formData.name || !formData.email}
                                className="w-full bg-ksdm-navy hover:bg-blue-800 mt-4"
                              >
                                Continue <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          variants={formVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h2 className="text-2xl font-semibold mb-6 text-ksdm-navy">What would you like to discuss?</h2>
                          <div className="grid grid-cols-2 gap-3">
                            {topics.map((topic) => (
                              <motion.div
                                key={topic}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <button
                                  type="button"
                                  onClick={() => {
                                    updateField("topic", topic);
                                    nextStep();
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                                    formData.topic === topic
                                      ? "border-ksdm-navy bg-ksdm-navy text-white"
                                      : "border-gray-200 hover:border-ksdm-navy/50"
                                  }`}
                                >
                                  {topic}
                                </button>
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="mt-6 flex justify-between">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                            >
                              Back
                            </Button>
                          </div>
                        </motion.div>
                      )}
                      
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          variants={formVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h2 className="text-2xl font-semibold mb-6 text-ksdm-navy">Tell us more about your inquiry</h2>
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                              </label>
                              <Input
                                id="subject"
                                value={formData.subject}
                                onChange={(e) => updateField("subject", e.target.value)}
                                placeholder="Brief subject of your message"
                                required
                                className="w-full"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                              </label>
                              <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => updateField("message", e.target.value)}
                                placeholder="Please provide as much detail as possible..."
                                required
                                rows={6}
                                className="w-full"
                              />
                            </div>
                            
                            <div className="pt-4 flex justify-between">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                              >
                                Back
                              </Button>
                              
                              <Button
                                type="button"
                                onClick={nextStep}
                                disabled={!formData.subject || !formData.message}
                                className="bg-ksdm-navy hover:bg-blue-800"
                              >
                                Review <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      {step === 4 && (
                        <motion.div
                          key="step4"
                          variants={formVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h2 className="text-2xl font-semibold mb-6 text-ksdm-navy">Review your message</h2>
                          <div className="space-y-4">
                            <div className="border rounded-md p-4 bg-gray-50">
                              <div className="grid grid-cols-3 gap-4 mb-3">
                                <div>
                                  <p className="text-sm font-medium text-gray-500">Name</p>
                                  <p className="text-gray-900">{formData.name}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-sm font-medium text-gray-500">Email</p>
                                  <p className="text-gray-900">{formData.email}</p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-4 mb-3">
                                <div>
                                  <p className="text-sm font-medium text-gray-500">Topic</p>
                                  <p className="text-gray-900">{formData.topic}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-sm font-medium text-gray-500">Subject</p>
                                  <p className="text-gray-900">{formData.subject}</p>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-sm font-medium text-gray-500">Message</p>
                                <p className="text-gray-900 whitespace-pre-line">{formData.message}</p>
                              </div>
                            </div>
                            
                            <div className="pt-4 flex justify-between">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                              >
                                Back
                              </Button>
                              
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-ksdm-navy hover:bg-blue-800"
                              >
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                  </>
                                ) : (
                                  <>
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional contact info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg text-center shadow-sm"
                >
                  <div className="mx-auto w-12 h-12 bg-ksdm-navy rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Email</h3>
                  <p className="text-gray-700">inquiry@ksdmllc.com</p>
                  <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg text-center shadow-sm"
                >
                  <div className="mx-auto w-12 h-12 bg-ksdm-navy rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Phone</h3>
                  <p className="text-gray-700">+255 764 738 005</p>
                  <p className="text-gray-700">+255 762 771 000</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg text-center shadow-sm"
                >
                  <div className="mx-auto w-12 h-12 bg-ksdm-navy rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-ksdm-navy">Locations</h3>
                  <p className="text-gray-700 text-sm">US: 271 W. Short St Ste 410 #1598, Lexington, Kentucky 40507</p>
                  <p className="text-gray-700 text-sm mt-2">TZ: 12 Kids Joy Mivumoni 14130, Dar es Salaam, Tanzania</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
