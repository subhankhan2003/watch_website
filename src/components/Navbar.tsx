import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/images/shafi logo.JPG"
              alt="SHAFI WATCHES"
              className="h-16 w-16 object-contain rounded-full ring-2 ring-amber-500/50 shadow-xl shadow-amber-500/30"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                SHAFI WATCHES
              </h1>
              <p className="text-xs text-amber-300/70">Timeless Elegance</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 font-semibold"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-amber-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-amber-500/20 animate-fadeIn">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
