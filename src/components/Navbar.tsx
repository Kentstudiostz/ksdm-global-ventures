
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="font-poppins font-bold text-2xl text-ksdm-navy">KSDM<span className="text-ksdm-gold">LLC</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#about" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">About</a>
            <a href="#verticals" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Ventures</a>
            <a href="#portfolio" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Portfolio</a>
            <a href="#global" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Global Presence</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Contact</a>
            <Button className="bg-ksdm-navy hover:bg-blue-900 text-white">Invest Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#verticals" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ventures
            </a>
            <a 
              href="#portfolio" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#global" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Global Presence
            </a>
            <a 
              href="#contact" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-ksdm-navy hover:bg-blue-900 text-white mt-2 w-full">
              Invest Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
