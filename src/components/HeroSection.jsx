import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

const slides = [
  {
    src: slide1,
    title: "MAHALAXMI MOBILE",
    highlight: "GALEXY MADGYAL",
    desc: "All Company Mobile Available",
    badge: "Premium Store"
  },
  {
    src: slide2,
    title: "LATEST SMARTPHONES",
    highlight: "BEST OFFERS TODAY",
    desc: "Get huge discounts on new arrivals",
    badge: "Big Discount"
  },
  {
    src: slide3,
    title: "ALL ACCESSORIES",
    highlight: "AT ONE PLACE",
    desc: "Original mobile accessories available",
    badge: "Top Quality"
  },
  {
    src: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1200",
    title: "APPLE & PREMIUM",
    highlight: "DEVICES & MACS",
    desc: "Premium laptops and tablets now in stock",
    badge: "New Arrival"
  },
  {
    src: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=1200",
    title: "GAMING GEAR",
    highlight: "POWER & SPEED",
    desc: "Experience ultimate gaming performance",
    badge: "Gamers Choice"
  },
  {
    src: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=1200",
    title: "EXPERT REPAIR",
    highlight: "FAST & RELIABLE",
    desc: "Professional mobile repairing services",
    badge: "Service Center"
  },
  {
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1200",
    title: "SMART WATCHES",
    highlight: "LATEST TECH",
    desc: "Stay connected with premium smartwatches",
    badge: "Trending"
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200",
    title: "PREMIUM AUDIO",
    highlight: "HEAR THE MAGIC",
    desc: "Top quality headphones and wireless earbuds",
    badge: "Best Seller"
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=1200",
    title: "HOME APPLIANCES",
    highlight: "SMART LIVING",
    desc: "Upgrade your home with latest electronics",
    badge: "Exclusive"
  }
];

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full h-[500px] sm:h-[600px] group border-b border-gray-200 shadow-sm">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full absolute inset-0 z-0"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className="w-full h-full relative bg-black">
                <img src={slide.src} alt={slide.title} className={`w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full">
                  <div className={`flex items-center space-x-2 mb-4 transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#10B981]"></span>
                    <span className="text-green-300 text-xs font-bold uppercase tracking-widest drop-shadow-md">{slide.badge}</span>
                  </div>
                  
                  <h2 className={`text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tight text-white drop-shadow-2xl transition-all duration-700 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {slide.title} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                      {slide.highlight}
                    </span>
                  </h2>
                  
                  <p className={`text-gray-100 text-xl sm:text-2xl mb-8 leading-relaxed max-w-2xl font-black drop-shadow-lg uppercase tracking-wider transition-all duration-700 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {slide.desc}
                  </p>
                  
                  <div className={`flex space-x-4 transition-all duration-700 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <a href="https://wa.me/919545025209" target="_blank" rel="noreferrer" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-black hover:scale-105 shadow-[0_10px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.4)] transition-all duration-300 text-lg">
                      View Collection
                    </a>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[100px] -mr-20 -mt-20 z-10 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
