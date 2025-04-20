import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { itemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-bold text-ksdm-navy">
            KSDM
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/clothing" className="text-gray-700 hover:text-ksdm-gold transition-colors">
              Clothing
            </Link>
            <Link to="/accessories" className="text-gray-700 hover:text-ksdm-gold transition-colors">
              Accessories
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-ksdm-gold transition-colors">
              Collections
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-700 hover:text-ksdm-gold transition-colors relative">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-ksdm-gold text-ksdm-navy text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="sm:hidden">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Explore KSDM
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link to="/clothing" className="text-gray-700 hover:text-ksdm-gold transition-colors block py-2">
                    Clothing
                  </Link>
                  <Link to="/accessories" className="text-gray-700 hover:text-ksdm-gold transition-colors block py-2">
                    Accessories
                  </Link>
                  <Link to="/collections" className="text-gray-700 hover:text-ksdm-gold transition-colors block py-2">
                    Collections
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
          
          <div className="ml-2 relative group">
            <button className="text-ksdm-navy hover:text-ksdm-gold transition-colors">
              <User size={20} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ksdm-gold">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ksdm-gold">
                Settings
              </a>
              <div className="border-t border-gray-100 my-1"></div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ksdm-gold">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
