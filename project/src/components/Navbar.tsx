import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, User, Search } from 'lucide-react';

const navLinks = [
  { 
    title: 'Shop', 
    dropdown: true,
    items: ['Men', 'Women', 'Kids', 'Accessories', 'New Arrivals']
  },
  { 
    title: 'Adventures', 
    dropdown: true,
    items: ['Hiking', 'Camping', 'Climbing', 'Skiing', 'Backpacking']
  },
  { title: 'About', dropdown: false },
  { title: 'Contact', dropdown: false },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl cursor-pointer">
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
              Mountain
            </span>
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-amber-700' : 'text-amber-400'}`}>
              Trek
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <button
                  className={`flex items-center font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-emerald-700' : 'text-white hover:text-amber-300'
                  }`}
                  onClick={() => link.dropdown && toggleDropdown(link.title)}
                >
                  {link.title}
                  {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                </button>
                
                {link.dropdown && activeDropdown === link.title && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    {link.items.map((item) => (
                      <a 
                        key={item} 
                        href="#" 
                        className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-amber-300'
            }`}>
              <Search size={20} />
            </button>
            <button className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-amber-300'
            }`}>
              <User size={20} />
            </button>
            <button className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-amber-300'
            }`}>
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className={`p-2 focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 p-4 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.title} className="py-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-800 font-medium"
                    onClick={() => link.dropdown && toggleDropdown(link.title)}
                  >
                    <span>{link.title}</span>
                    {link.dropdown && <ChevronDown size={16} />}
                  </button>
                  
                  {link.dropdown && activeDropdown === link.title && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.items.map((item) => (
                        <a key={item} href="#" className="block py-1 text-gray-600 hover:text-emerald-700">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
              <button className="p-2 text-gray-700">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-700">
                <User size={20} />
              </button>
              <button className="p-2 text-gray-700">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;