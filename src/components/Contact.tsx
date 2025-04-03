
import { useState } from 'react';
import { Building, Mail, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ksdm-navy">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Reach out to discuss investment opportunities, partnerships, or to learn more about our ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mx-auto w-12 h-12 bg-ksdm-navy rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-700">info@ksdmllc.com</p>
            <p className="text-gray-700">investments@ksdmllc.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mx-auto w-12 h-12 bg-ksdm-navy rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
            <p className="text-gray-700">+255 (0) 123-456-789</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mx-auto w-12 h-12 bg-ksdm-navy rounded-full flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-700">New York, USA</p>
            <p className="text-gray-700">Dar es Salaam, Tanzania</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-10">
              <h3 className="text-2xl font-semibold mb-6 text-ksdm-navy">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-ksdm-navy hover:bg-blue-800 w-full"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="gradient-bg p-6 md:p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Investment Inquiries</h3>
              
              <div className="space-y-6">
                <p>
                  Looking to invest or partner with KSDM LLC? Our team is ready to discuss opportunities across our portfolio.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Investment Minimums:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2"></div>
                      <span>Real Estate Projects: $50,000</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2"></div>
                      <span>Tourism Ventures: $25,000</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2"></div>
                      <span>Technology Startups: $15,000</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-ksdm-gold mr-2"></div>
                      <span>Managed Fund: $100,000</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  className="bg-ksdm-gold text-ksdm-navy hover:bg-yellow-400"
                >
                  Schedule Investment Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
