
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ksdm-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl mb-4">KSDM<span className="text-ksdm-gold">LLC</span></h3>
            <p className="text-gray-300 mb-4">
              Building exceptional global ventures across real estate, tourism, technology, and strategic investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ksdm-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-ksdm-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-ksdm-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-ksdm-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Verticals</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Real Estate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Tourism</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Global Investments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#global" className="text-gray-300 hover:text-white">Global Presence</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investment Disclaimer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Regulatory Information</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} KSDM LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
