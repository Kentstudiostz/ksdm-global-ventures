
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
          <Link to="/" className="flex items-center">
            <span className="font-poppins font-bold text-2xl text-ksdm-navy">KSDM<span className="text-ksdm-gold">®</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Home</Link>
            <Link to="/clothing" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Clothing</Link>
            <Link to="/accessories" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Accessories</Link>
            <a href="#about" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">About</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors">Contact</a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Search" className="text-gray-700 hover:text-ksdm-navy">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="text-gray-700 hover:text-ksdm-navy">
              <User size={20} />
            </button>
            <Link to="/cart" className="relative text-gray-700 hover:text-ksdm-navy">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ksdm-gold text-ksdm-navy text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-ksdm-navy">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ksdm-gold text-ksdm-navy text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="text-gray-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/clothing" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clothing
            </Link>
            <Link 
              to="/accessories" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </Link>
            <a 
              href="#about" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="font-medium text-gray-700 hover:text-ksdm-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex gap-4 py-2">
              <button aria-label="Search" className="text-gray-700 hover:text-ksdm-navy">
                <Search size={20} />
              </button>
              <button aria-label="Account" className="text-gray-700 hover:text-ksdm-navy">
                <User size={20} />
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
