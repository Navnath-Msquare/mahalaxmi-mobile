import React from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(79,70,229,0.15)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.5)] flex flex-col h-full p-[2px]">
      
      {/* Running Border Animation */}
      <div className="absolute inset-[-100%] z-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,#4f46e5_360deg)] animate-[spin_3s_linear_infinite] group-hover:bg-[conic-gradient(from_0deg,transparent_0_180deg,#4f46e5_360deg)] transition-all duration-500"></div>
      
      {/* Inner Card Content */}
      <div className="relative z-10 flex flex-col h-full bg-gradient-to-b from-white to-indigo-50 rounded-[14px] overflow-hidden">
        <div className="relative h-56 overflow-hidden bg-transparent p-6 flex items-center justify-center border-b border-primary/10">
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 shadow-md shadow-red-500/20">
            {product.discount}
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain rounded-xl group-hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-md"
        />
        <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={() => onViewDetails(product)}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-primary/40 flex items-center space-x-2"
          >
            <span>👁️</span> <span>Quick View</span>
          </button>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight pr-2 group-hover:text-primary transition-colors text-gray-900">{product.name}</h3>
          <span className="font-black text-gray-900 bg-gray-100 px-2 py-1 rounded-lg border border-gray-200 whitespace-nowrap">{product.price}</span>
        </div>
        
        <div className="flex items-center text-xs text-gray-500 mb-5 flex-1">
          <span className="text-yellow-500 mr-1 text-sm">★★★★★</span>
          <span className="mt-0.5 font-medium">({product.reviews || '120'} Reviews)</span>
        </div>
        
        <button 
          onClick={() => onViewDetails(product)}
          className="w-full py-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 font-bold text-sm text-gray-700 mt-auto"
        >
          View Details
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
