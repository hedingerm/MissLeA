import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { Button } from './Button';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem, 
  onUpdateQuantity,
  onCheckout 
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-sand shadow-2xl z-50 transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 md:p-8 border-b border-stone flex justify-between items-center">
          <h2 className="font-serif text-2xl flex items-center gap-3">
            <ShoppingBag size={24} className="text-terra" strokeWidth={1} />
            Warenkorb
          </h2>
          <button onClick={onClose} className="hover:text-terra transition-colors">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8">
          {items.length === 0 ? (
            <div className="text-center py-12 opacity-50">
              <p className="font-serif italic text-xl mb-4">Ihr Warenkorb ist leer</p>
              <Button variant="text" onClick={onClose}>Weiter einkaufen</Button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 animate-fade-in">
                <div className="w-24 h-32 bg-white flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-lg leading-none mb-1">{item.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500">{item.category}</p>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-terra transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-stone bg-white">
                      <button 
                        className="w-8 h-8 flex items-center justify-center hover:bg-stone/30 transition-colors"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                      >-</button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center hover:bg-stone/30 transition-colors"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >+</button>
                    </div>
                    <p className="font-sans text-sm font-medium">CHF {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 md:p-8 border-t border-stone bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-xs uppercase tracking-widest text-gray-500">Gesamtsumme</span>
              <span className="font-serif text-2xl">CHF {total.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={onCheckout}>Zur Kasse</Button>
          </div>
        )}
      </div>
    </>
  );
};