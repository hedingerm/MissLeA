import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  cartCount: number;
  onCartClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView, cartCount, onCartClick }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'HOME' },
    { label: 'Über mich', view: 'ABOUT' },
    { label: 'Dienstleistungen', view: 'SERVICES' },
    { label: 'Online Shop', view: 'SHOP' },
    { label: 'Kontakt', view: 'CONTACT' },
  ];

  const handleLinkClick = (view: ViewState) => {
    onChangeView(view);
    setIsMobileOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isScrolled ? 'bg-sand/95 backdrop-blur-sm border-stone py-4' : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="font-serif text-2xl md:text-3xl tracking-tighter cursor-pointer"
            onClick={() => handleLinkClick('HOME')}
          >
            MissLeA <span className="italic font-light">Fashion</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.view)}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  currentView === link.view ? 'text-terra underline underline-offset-4' : 'text-charcoal hover:text-terra'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <div 
              className="relative cursor-pointer group"
              onClick={onCartClick}
            >
               <ShoppingBag size={20} className="text-charcoal group-hover:text-terra transition-colors" />
               {cartCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-terra text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                   {cartCount}
                 </span>
               )}
            </div>
            
            <button 
              className="md:hidden text-charcoal"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal z-50 transition-transform duration-500 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMobileOpen(false)} className="text-sand hover:text-terra transition-colors">
              <X size={32} />
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-8 mt-10">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.view)}
                className="font-serif text-3xl text-sand hover:text-terra italic transition-colors duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-auto text-center">
            <p className="text-stone/50 text-xs tracking-widest uppercase">Atelier Zollikofen</p>
          </div>
        </div>
      </div>
    </>
  );
};