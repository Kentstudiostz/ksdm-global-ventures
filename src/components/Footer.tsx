
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ksdm-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl mb-4">KSDM<span className="text-ksdm-gold">®</span></h3>
            <p className="text-gray-300 mb-4">
              More than clothing. KSDM crafts identity through garments and accessories 
              that make you visible even to the naked eye.
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
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/clothing" className="text-gray-300 hover:text-white">Clothing</Link></li>
              <li><Link to="/accessories" className="text-gray-300 hover:text-white">Accessories</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Brand Philosophy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Sustainability</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">inquiry@ksdmllc.com</li>
              <li className="text-gray-300">+255 764 738 005</li>
              <li className="text-gray-300">+255 762 771 000</li>
              <li className="text-gray-300">US: 271 W. Short St Ste 410 #1598, Lexington, Kentucky 40507</li>
              <li className="text-gray-300">TZ: 12 Kids Joy Mivumoni 14130, Dar es Salaam, Tanzania</li>
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
