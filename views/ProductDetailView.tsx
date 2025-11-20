import React from 'react';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Product } from '../types';
import { Button } from '../components/Button';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-xs uppercase tracking-widest text-gray-500 hover:text-terra transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Zurück zum Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="bg-white p-4 border border-stone shadow-sm">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-terra text-xs uppercase tracking-widest font-medium">{product.category}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-charcoal">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-light mb-8">CHF {product.price.toFixed(2)}</p>
            
            <div className="border-t border-stone py-8 mb-8">
              <p className="font-sans font-light text-gray-600 leading-loose">
                {product.description || "Keine Beschreibung verfügbar."}
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <Button onClick={() => onAddToCart(product)} className="w-full md:w-auto">
                In den Warenkorb
              </Button>
            </div>

            <div className="flex gap-6 text-gray-400 text-sm">
               <button className="flex items-center gap-2 hover:text-terra transition-colors">
                 <Heart size={18} /> Auf die Wunschliste
               </button>
               <button className="flex items-center gap-2 hover:text-terra transition-colors">
                 <Share2 size={18} /> Teilen
               </button>
            </div>

            <div className="mt-12 bg-sand/50 p-6 border border-stone text-xs text-gray-500 space-y-2">
              <p>✓ Kostenloser Versand ab CHF 200.-</p>
              <p>✓ Handgefertigt im Atelier Zollikofen</p>
              <p>✓ 14 Tage Rückgaberecht</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};