import React, { useState } from 'react';
import { CartItem } from '../types';
import { Button } from '../components/Button';
import { Trash2, ArrowLeft } from 'lucide-react';

interface CartViewProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onBackToShop: () => void;
  onClearCart: () => void;
}

export const CartView: React.FC<CartViewProps> = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onBackToShop,
  onClearCart
}) => {
  const [step, setStep] = useState<'CART' | 'CHECKOUT' | 'SUCCESS'>('CART');
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('SUCCESS');
      onClearCart();
    }, 1000);
  };

  if (step === 'SUCCESS') {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-4xl mb-6">Vielen Dank!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ihre Bestellung wurde erfolgreich entgegengenommen. Sie erhalten in Kürze eine Bestätigung per E-Mail.
          </p>
          <Button onClick={onBackToShop}>Zurück zur Boutique</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <button onClick={onBackToShop} className="hover:text-terra transition-colors">
            <ArrowLeft size={24} strokeWidth={1} />
          </button>
          <h2 className="font-serif text-4xl md:text-5xl">
            {step === 'CART' ? 'Warenkorb' : 'Kasse'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-7">
            {step === 'CART' ? (
              items.length === 0 ? (
                <div className="text-center py-12 bg-sand/30 border border-stone">
                   <p className="mb-6 text-gray-500">Ihr Warenkorb ist leer.</p>
                   <Button onClick={onBackToShop}>Jetzt einkaufen</Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-6 border-b border-stone pb-8">
                      <div className="w-24 h-32 bg-white flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-serif text-xl">{item.name}</h3>
                          <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-terra">
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-xs uppercase text-gray-500 mb-4">{item.category}</p>
                        <div className="flex justify-between items-end">
                           <div className="flex items-center border border-stone bg-white">
                              <button 
                                className="w-8 h-8 hover:bg-stone/30 transition-colors"
                                onClick={() => onUpdateQuantity(item.id, -1)}
                              >-</button>
                              <span className="w-10 text-center text-sm">{item.quantity}</span>
                              <button 
                                className="w-8 h-8 hover:bg-stone/30 transition-colors"
                                onClick={() => onUpdateQuantity(item.id, 1)}
                              >+</button>
                           </div>
                           <p className="font-medium">CHF {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl mb-6">Rechnungsadresse</h3>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <input placeholder="Vorname" required className="bg-sand border-b border-charcoal p-3 focus:outline-none w-full" />
                    <input placeholder="Nachname" required className="bg-sand border-b border-charcoal p-3 focus:outline-none w-full" />
                  </div>
                  <input placeholder="Strasse & Hausnummer" required className="bg-sand border-b border-charcoal p-3 focus:outline-none w-full mb-6" />
                  <div className="grid grid-cols-[1fr_2fr] gap-6 mb-6">
                    <input placeholder="PLZ" required className="bg-sand border-b border-charcoal p-3 focus:outline-none w-full" />
                    <input placeholder="Ort" required className="bg-sand border-b border-charcoal p-3 focus:outline-none w-full" />
                  </div>
                  <input type="email" placeholder="E-Mail Adresse" required className="bg-sand border-b border-charcoal p-3 focus:outline-none w-full" />
                </div>
                <div>
                   <h3 className="font-serif text-2xl mb-6">Zahlungsmethode</h3>
                   <div className="space-y-4">
                      <label className="flex items-center gap-4 border border-stone p-4 cursor-pointer hover:border-terra/50 transition-colors">
                        <input type="radio" name="payment" className="accent-terra" defaultChecked />
                        <span>Rechnung</span>
                      </label>
                      <label className="flex items-center gap-4 border border-stone p-4 cursor-pointer hover:border-terra/50 transition-colors">
                        <input type="radio" name="payment" className="accent-terra" />
                        <span>TWINT</span>
                      </label>
                   </div>
                </div>
              </form>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 border border-stone sticky top-32">
              <h3 className="font-serif text-2xl mb-6">Zusammenfassung</h3>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Zwischensumme</span>
                  <span>CHF {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Versand</span>
                  <span>{total > 200 ? 'Kostenlos' : 'CHF 9.00'}</span>
                </div>
                <div className="flex justify-between text-xl font-medium pt-4 border-t border-stone">
                  <span>Gesamtsumme</span>
                  <span>CHF {(total + (total > 200 ? 0 : 9)).toFixed(2)}</span>
                </div>
              </div>

              {step === 'CART' ? (
                <Button 
                  className="w-full" 
                  onClick={() => setStep('CHECKOUT')}
                  disabled={items.length === 0}
                >
                  Zur Kasse
                </Button>
              ) : (
                <div className="space-y-4">
                   <Button type="submit" form="checkout-form" className="w-full">
                     Kostenpflichtig bestellen
                   </Button>
                   <Button variant="text" onClick={() => setStep('CART')} className="w-full text-center">
                     Zurück zum Warenkorb
                   </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};