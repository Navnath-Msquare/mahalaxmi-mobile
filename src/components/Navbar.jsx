import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import logo from '../assets/logo-removebg-preview.png';

const navItems = [
  { name: 'Home', link: '#' },
  { name: 'Smartphones', link: '#smartphones' },
  { name: 'Accessories', link: '#' },
  { name: 'Offers', link: '#' },
  { name: 'Contact', link: '#contact' },
];

const Navbar = ({ allProducts = [], onProductSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5);

  return (
    <header className="glass-panel border-b border-blue-100 fixed top-0 w-full z-50 transition-all bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img src={logo} alt="Mahalaxmi Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-105 transition-transform drop-shadow-md" />
          <div className="flex flex-col justify-center">
            <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-purple-600 tracking-tight transition-all duration-1000 animate-pulse">
              Mahalaxmi
            </h1>
            <span className="text-[9px] sm:text-[10px] text-gray-500 tracking-[0.2em] uppercase font-semibold">Mobile Store</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.link}
              className="relative overflow-hidden text-sm font-bold text-gray-700 bg-gray-50 border border-gray-200 px-5 py-2 rounded-full shadow-sm group transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative group flex items-center">
            <img src={logo} alt="Search Logo" className="absolute left-2.5 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 object-contain z-10 pointer-events-none opacity-80" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mobiles..." 
              className="w-32 sm:w-48 lg:w-64 bg-gray-50 border border-gray-200 rounded-full pl-8 sm:pl-10 pr-4 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-gray-900 placeholder-gray-500 focus:w-40 sm:focus:w-56 lg:focus:w-72 shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-8 p-1 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={14} />
              </button>
            )}
            <button className="absolute right-2 sm:right-3 p-1 text-gray-500 hover:text-primary transition-colors cursor-pointer z-10 bg-white rounded-full shadow-sm border border-gray-100">
              <Search size={16} />
            </button>
            
            {/* Search Dropdown */}
            {filteredProducts.length > 0 && (
              <div className="absolute top-full mt-3 w-full sm:w-72 right-0 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50 flex flex-col animate-in fade-in slide-in-from-top-2">
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onProductSelect(product);
                      setSearchQuery('');
                    }}
                    className="flex items-center p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 text-left w-full group"
                  >
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-contain mr-3 bg-white rounded-md border border-gray-100 p-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary line-clamp-1 transition-colors">{product.name}</h4>
                      <span className="text-xs font-black text-primary">{product.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {searchQuery && filteredProducts.length === 0 && (
              <div className="absolute top-full mt-3 w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-4 text-center text-sm font-bold text-gray-500 z-50">
                No mobiles found for "{searchQuery}"
              </div>
            )}
          </div>

          <button className="relative p-2 text-gray-600 hover:text-primary transition-transform hover:scale-110 hidden sm:block">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full text-[10px] flex items-center justify-center font-bold shadow-sm text-white">
              3
            </span>
          </button>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-4 space-y-2 max-w-7xl mx-auto">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 font-bold hover:text-primary hover:bg-blue-50 px-4 py-3 rounded-xl transition-colors text-lg"
            >
              {item.name}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-2 mt-2">
            <button className="flex items-center w-full px-4 py-3 text-gray-700 font-bold hover:text-primary hover:bg-blue-50 rounded-xl transition-colors text-lg">
              <ShoppingCart size={20} className="mr-3" />
              Cart (3 Items)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
