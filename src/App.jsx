import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import WhatsAppButton from './components/WhatsAppButton';
import { MapPin, Phone, User, X, Mail, MessageCircle } from 'lucide-react';
import logo from './assets/logo-removebg-preview.png';
import phone1 from './assets/phone1.png';
import phone2 from './assets/phone2.png';
import phone3 from './assets/phone3.png';
import phone4 from './assets/phone4.png';
import allMobilesImg from './assets/all_mobiles.png';
import mobileRepairingImg from './assets/mobile_repairing.png';
import electronicItemsImg from './assets/electronic_items.png';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const brands = ['iPhone', 'Samsung Galaxy', 'OnePlus', 'Vivo', 'Oppo', 'Xiaomi'];
const models = ['Pro Max', 'Ultra', 'Pro', 'Plus', 'Lite', '5G'];
const images = [
  phone1,
  phone2,
  phone3,
  phone4
];

const allProducts = [];
brands.forEach((brand, brandIndex) => {
  for (let i = 0; i < 100; i++) {
    const model = models[i % models.length];
    allProducts.push({
      id: `${brandIndex}-${i}`,
      name: `${brand} ${Math.floor(Math.random() * 10 + 10)} ${model}`,
      price: `₹${Math.floor(Math.random() * 80000 + 10000)}`,
      discount: 'SALE',
      reviews: Math.floor(Math.random() * 500 + 50),
      image: images[i % images.length],
      description: `Brand new ${brand} smartphone with all modern features, excellent camera, and long-lasting battery. Available now at Mahalaxmi Mobile Galexy.`
    });
  }
});

const repairServices = [
  { id: 'r1', name: 'Screen Replacement', price: '₹1500+', discount: 'FAST', reviews: 120, image: mobileRepairingImg, description: 'Expert screen replacement within 2 hours.' },
  { id: 'r2', name: 'Battery Replacement', price: '₹800+', discount: 'BEST', reviews: 95, image: mobileRepairingImg, description: 'Original battery replacement with warranty.' },
  { id: 'r3', name: 'Water Damage Repair', price: '₹1200+', discount: 'URGENT', reviews: 45, image: mobileRepairingImg, description: 'Professional water damage recovery.' },
  { id: 'r4', name: 'Software Update', price: '₹300', discount: 'QUICK', reviews: 210, image: mobileRepairingImg, description: 'OS upgrade and formatting.' }
];

const electronicsProducts = [
  { id: 'e1', name: 'Wireless Earbuds', price: '₹1200', discount: 'SALE', reviews: 340, image: electronicItemsImg, description: 'High bass wireless earbuds.' },
  { id: 'e2', name: 'Smartwatch Pro', price: '₹2500', discount: 'NEW', reviews: 180, image: electronicItemsImg, description: 'Fitness tracker with heart rate monitor.' },
  { id: 'e3', name: '20000mAh Powerbank', price: '₹1500', discount: 'SALE', reviews: 420, image: electronicItemsImg, description: 'Fast charging powerbank.' },
  { id: 'e4', name: 'Bluetooth Speaker', price: '₹900', discount: 'HOT', reviews: 150, image: electronicItemsImg, description: 'Portable mini bluetooth speaker.' }
];

const appliancesProducts = [
  { id: 'a1', name: 'Ceiling Fan', price: '₹1800', discount: '10% OFF', reviews: 80, image: electronicItemsImg, description: 'High speed decorative fan.' },
  { id: 'a2', name: 'Washing Machine', price: '₹15000', discount: 'SALE', reviews: 45, image: electronicItemsImg, description: 'Fully automatic washing machine.' },
  { id: 'a3', name: 'Air Cooler', price: '₹6500', discount: 'SUMMER', reviews: 120, image: electronicItemsImg, description: 'Desert cooler for large rooms.' },
  { id: 'a4', name: 'Refrigerator', price: '₹18000', discount: 'SALE', reviews: 65, image: electronicItemsImg, description: 'Double door modern fridge.' }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const closeDetails = () => setSelectedProduct(null);
  const displayedProducts = allProducts.slice(0, displayCount);

  return (
    <>
      {/* Splash Screen */}
      <div className={`fixed inset-0 z-[200] bg-gray-950 overflow-hidden flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none splash-screen`}>
        {/* Animated glowing orbs for 3D effect */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <img src={logo} alt="Mahalaxmi Logo" className="w-64 h-64 md:w-96 md:h-96 object-contain mb-8 animate-bounce drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)] filter brightness-0 invert" />
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-400 animate-pulse text-center leading-tight drop-shadow-xl">
            महालक्ष्मी मोबाईल शॉप
          </h1>
          <div className="mt-8 flex space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(96,165,250,0.8)]" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-[0_0_10px_rgba(79,70,229,0.8)]" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(192,132,252,0.8)]" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>

      <div className={`min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-primary/30 flex flex-col relative transition-opacity duration-500 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar allProducts={allProducts} onProductSelect={setSelectedProduct} />
        
        <main className="flex-1 pt-20 sm:pt-24 pb-10 w-full space-y-16">
          <HeroSection />
          
          <section id="smartphones" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl sm:text-3xl font-black flex items-center text-gray-900">
                <span className="bg-gradient-to-b from-primary to-purple-600 w-1.5 h-8 mr-4 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)]"></span>
                All Smartphones
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
              ))}
            </div>

            {displayCount < allProducts.length && (
              <div className="mt-12 flex justify-center animate-fade-in-up">
                <button 
                  onClick={() => setDisplayCount(prev => Math.min(prev + 12, allProducts.length))}
                  className="bg-white hover:bg-primary text-gray-900 hover:text-white border border-gray-200 hover:border-primary px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-primary/30 flex items-center group"
                >
                  Load More Products ({allProducts.length - displayCount} left)
                  <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
                </button>
              </div>
            )}
          </section>

          <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full mt-10 scroll-mt-24">
            <h2 className="text-3xl font-black text-gray-900 mb-8 border-l-4 border-primary pl-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div onClick={() => setSelectedCategory('mobiles')} className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(79,70,229,0.15)] bg-gradient-to-br from-blue-50 to-white flex flex-col group cursor-pointer border hover:-translate-y-2 transition-all duration-300 ${selectedCategory === 'mobiles' ? 'border-primary ring-2 ring-primary/30' : 'border-primary/20'}`}>
                <div className="h-48 overflow-hidden bg-white">
                  <img src={allMobilesImg} alt="All Mobiles" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">All Mobiles</h3>
                  <p className="text-sm font-semibold text-primary">All brands available here</p>
                </div>
              </div>

              <div onClick={() => setSelectedCategory('repair')} className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(79,70,229,0.15)] bg-gradient-to-br from-indigo-50 to-white flex flex-col group cursor-pointer border hover:-translate-y-2 transition-all duration-300 ${selectedCategory === 'repair' ? 'border-primary ring-2 ring-primary/30' : 'border-primary/20'}`}>
                <div className="h-48 overflow-hidden bg-white">
                  <img src={mobileRepairingImg} alt="Mobile Repairing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Mobile Repairing</h3>
                  <p className="text-sm font-semibold text-primary">Expert repair services</p>
                </div>
              </div>

              <div onClick={() => setSelectedCategory('electronics')} className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(79,70,229,0.15)] bg-gradient-to-br from-purple-50 to-white flex flex-col group cursor-pointer border hover:-translate-y-2 transition-all duration-300 ${selectedCategory === 'electronics' ? 'border-primary ring-2 ring-primary/30' : 'border-primary/20'}`}>
                <div className="h-48 overflow-hidden bg-white">
                  <img src={electronicItemsImg} alt="Electronic Items" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Electronic Items</h3>
                  <p className="text-sm font-semibold text-primary">All accessories available</p>
                </div>
              </div>

              <div onClick={() => setSelectedCategory('appliances')} className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(79,70,229,0.15)] bg-gradient-to-br from-green-50 to-white flex flex-col group cursor-pointer border hover:-translate-y-2 transition-all duration-300 ${selectedCategory === 'appliances' ? 'border-primary ring-2 ring-primary/30' : 'border-primary/20'}`}>
                <div className="h-48 overflow-hidden bg-white">
                  <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400" alt="Home Appliances" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Home Appliances</h3>
                  <p className="text-sm font-semibold text-primary">Fan, Fridge, Cooler, Washing Machine</p>
                </div>
              </div>

            </div>

            {/* Dynamic Category Products */}
            {selectedCategory && (
              <div className="mt-12 animate-fade-in-up bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-black mb-6 text-gray-900 flex items-center justify-between">
                  <span>
                    {selectedCategory === 'mobiles' && 'Latest Mobiles Collection'}
                    {selectedCategory === 'repair' && 'Our Repair Services'}
                    {selectedCategory === 'electronics' && 'Best Electronic Items'}
                    {selectedCategory === 'appliances' && 'Top Home Appliances'}
                  </span>
                  <button onClick={() => setSelectedCategory(null)} className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-600 transition-colors">
                    Close ✕
                  </button>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {selectedCategory === 'mobiles' && allProducts.slice(0, 4).map(product => (
                    <ProductCard key={`mob-${product.id}`} product={product} onViewDetails={setSelectedProduct} />
                  ))}
                  
                  {selectedCategory === 'repair' && repairServices.map(product => (
                    <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
                  ))}
                  
                  {selectedCategory === 'electronics' && electronicsProducts.map(product => (
                    <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
                  ))}
                  
                  {selectedCategory === 'appliances' && appliancesProducts.map(product => (
                    <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
                  ))}
                </div>
                
                {selectedCategory === 'mobiles' && (
                  <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm font-medium">Please check the "All Smartphones" section above for all {allProducts.length} mobiles.</p>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>

        <footer id="contact" className="mt-16 border-t-4 border-primary bg-gray-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-10 -mt-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Brand Info */}
              <div className="space-y-6">
                <div className="inline-block rounded-2xl">
                  <img src={logo} alt="Mahalaxmi Logo" className="w-36 h-36 md:w-40 md:h-40 object-contain drop-shadow-xl filter brightness-0 invert" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white mb-2 leading-tight">
                    MAHALAXMI MOBILE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">GALEXY MADGYAL 📍</span>
                  </h2>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest border-l-2 border-primary pl-3 mt-4">
                    All company mobile available
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-white border-b border-gray-800 pb-3">Contact Us</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-gray-900 p-2.5 rounded-lg border border-gray-800">
                      <User size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Owner</p>
                      <p className="font-bold text-gray-200">Rupesh Mulik (Baburao)</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-gray-900 p-2.5 rounded-lg border border-gray-800">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Call / WhatsApp</p>
                      <p className="font-bold text-gray-200">+91 9545025209 / 8329421312</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Location & Follow Us */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-white border-b border-gray-800 pb-3">Location</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mt-4">
                    Madgyal Umadi Jath Road
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Madghyal+Umadi+Jath+Road" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-all border border-gray-700 mt-2 shadow-md"
                  >
                    <MapPin size={18} className="mr-2 text-primary" />
                    <span className="font-bold text-sm">View on Maps</span>
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white border-b border-gray-800 pb-3">Follow Us</h3>
                  <div className="flex items-center space-x-4 mt-4">
                    {/* Instagram */}
                    <a href="https://instagram.com/mahalaxmimobileshopmadgyal" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(225,48,108,0.4)] transition-all">
                      <InstagramIcon size={24} className="text-white" />
                    </a>
                    
                    {/* WhatsApp */}
                    <a href="https://wa.me/919545025209" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.4)] transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-500 text-sm font-medium">© 2026 Mahalaxmi Mobile Galexy Madgyal. All rights reserved.</p>
              <p className="text-gray-600 text-xs mt-2 md:mt-0 font-bold tracking-widest uppercase">Premium Mobile E-commerce</p>
            </div>
          </div>
        </footer>
        
        <WhatsAppButton />

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white border border-gray-100 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row relative">
              <button 
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 p-2 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center min-h-[300px] border-r border-gray-100">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="max-w-full max-h-[400px] object-contain drop-shadow-xl" />
              </div>
              
              {/* Details Section */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                <h2 className="text-3xl font-black text-gray-900 mb-2">{selectedProduct.name}</h2>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-black text-primary">{selectedProduct.price}</span>
                  {selectedProduct.discount && (
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200">
                      {selectedProduct.discount}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  {selectedProduct.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-2">Contact Owner to Buy</h3>
                  
                  <a href="https://wa.me/919545025209" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-green-500/20">
                    <MessageCircle size={20} />
                    <span>WhatsApp Now</span>
                  </a>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a href="tel:+919545025209" className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl border border-gray-200 transition-colors font-bold">
                      <Phone size={18} className="text-primary" />
                      <span>Call Owner</span>
                    </a>
                    <a href="mailto:contact@mahalaxmimobile.com" className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl border border-gray-200 transition-colors font-bold">
                      <Mail size={18} className="text-blue-500" />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default App;
