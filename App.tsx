import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import NoiseOverlay from './components/NoiseOverlay';
import { CartSidebar } from './components/CartSidebar';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ShopView } from './views/ShopView';
import { ContactView } from './views/ContactView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { AboutView } from './views/AboutView';
import { ViewState, CartItem, Product } from './types';
import { IMAGES, CONTACT_INFO } from './constants';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      }
      return [...prev, {...product, quantity: 1}];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? {...item, quantity: newQuantity} : item;
      }
      return item;
    }));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('PRODUCT_DETAILS');
    window.scrollTo(0,0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('CART');
    window.scrollTo(0,0);
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderView = () => {
    switch (view) {
      case 'HOME': return <HomeView onChangeView={setView} />;
      case 'SERVICES': return <ServicesView />;
      case 'SHOP': return <ShopView onAddToCart={handleAddToCart} onProductClick={handleProductClick} />;
      case 'CONTACT': return <ContactView />;
      case 'PRODUCT_DETAILS': 
        return selectedProduct 
          ? <ProductDetailView product={selectedProduct} onBack={() => setView('SHOP')} onAddToCart={handleAddToCart} /> 
          : <ShopView onAddToCart={handleAddToCart} onProductClick={handleProductClick} />;
      case 'CART': return (
        <CartView 
          items={cart} 
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
          onBackToShop={() => setView('SHOP')}
          onClearCart={() => setCart([])}
        />
      );
      case 'ABOUT': return <AboutView />;
      default: return <HomeView onChangeView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NoiseOverlay />
      <Navigation 
        currentView={view} 
        onChangeView={setView} 
        cartCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      <main className="flex-grow">
        {renderView()}
      </main>

      <footer className="bg-charcoal text-sand py-16 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-serif text-2xl mb-6">MissLeA Fashion</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Atelier für Massanfertigungen & Änderungen.<br/>
                Wo Handwerk auf Eleganz trifft.
              </p>
            </div>
            
            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-terra mb-6">Kontakt</h5>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Atelier Zollikofen</p>
                  <p className="text-gray-400 font-light text-sm flex items-start gap-2">
                    <MapPin size={14} className="mt-1 shrink-0 text-terra/70" />
                    {CONTACT_INFO.address}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Filiale Laupen</p>
                  <p className="text-gray-400 font-light text-sm flex items-start gap-2">
                    <MapPin size={14} className="mt-1 shrink-0 text-terra/70" />
                    {CONTACT_INFO.filiale}
                  </p>
                </div>
                <div className="pt-2 space-y-2">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 font-light text-sm flex items-center gap-2 hover:text-terra transition-colors">
                     <Phone size={14} className="text-terra/70" />
                     {CONTACT_INFO.phone}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 font-light text-sm flex items-center gap-2 hover:text-terra transition-colors">
                     <Mail size={14} className="text-terra/70" />
                     {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-sans text-xs uppercase tracking-widest text-terra mb-6">Links</h5>
              <div className="flex flex-col gap-2">
                <button onClick={() => setView('SERVICES')} className="text-left text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
                  <ChevronRight size={12} className="mr-2 text-terra opacity-0 group-hover:opacity-100 transition-opacity"/> Dienstleistungen
                </button>
                <button onClick={() => setView('SHOP')} className="text-left text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
                   <ChevronRight size={12} className="mr-2 text-terra opacity-0 group-hover:opacity-100 transition-opacity"/> Online Shop
                </button>
                <button onClick={() => setView('CONTACT')} className="text-left text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
                   <ChevronRight size={12} className="mr-2 text-terra opacity-0 group-hover:opacity-100 transition-opacity"/> Termin vereinbaren
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} MissLeA Fashion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;