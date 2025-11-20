import React, { useState } from 'react';
import { PRODUCTS, IMAGES } from '../constants';
import { Button } from '../components/Button';
import { Search } from 'lucide-react';
import { Product } from '../types';

interface ShopViewProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({ onAddToCart, onProductClick }) => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Unikate', 'Accessoires', 'Gutscheine'];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Shop Header / Mood */}
      <div className="h-[40vh] relative overflow-hidden mb-16">
        <div className="absolute inset-0 flex">
           <div className="w-1/2 h-full">
             <img src={IMAGES.SHOP_MOOD_1} className="w-full h-full object-cover opacity-90" alt="Mood" />
           </div>
           <div className="w-1/2 h-full">
             <img src={IMAGES.SHOP_MOOD_2} className="w-full h-full object-cover opacity-90" alt="Mood" />
           </div>
        </div>
        <div className="absolute inset-0 bg-sand/80 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6">
          <h2 className="font-serif text-5xl md:text-7xl mb-4 text-charcoal">Boutique</h2>
          <p className="font-sans text-xs tracking-widest uppercase text-terra">Curated Selection by MissLeA</p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 border-b border-stone pb-8">
          <div className="flex gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${
                  category === cat ? 'text-terra font-medium' : 'text-gray-400 hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Suchen..." 
              className="w-full bg-transparent border-b border-charcoal/20 py-2 pl-2 pr-8 focus:outline-none focus:border-terra text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="absolute right-2 top-2 text-gray-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => onProductClick(product)}>
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-stone/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                  <Button 
                    variant="white"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }} 
                    className="w-full"
                  >
                    In den Warenkorb
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-terra uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-serif text-xl leading-tight group-hover:underline decoration-terra decoration-1 underline-offset-4 transition-all">
                    {product.name}
                  </h3>
                </div>
                <span className="font-sans text-sm font-medium">CHF {product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-gray-400 italic">Keine Produkte gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
};