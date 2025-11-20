
import React from 'react';
import { IMAGES } from '../constants';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { ChevronRight, Send } from 'lucide-react';
import { SERVICES } from '../constants';

interface HomeViewProps {
  onChangeView: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onChangeView }) => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content - Left/Overlap */}
            <div className="lg:col-span-5 z-10 order-2 lg:order-1">
              <h2 className="text-xs md:text-sm font-sans tracking-[0.3em] text-terra uppercase mb-4">
                Zollikofen
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] text-charcoal mb-8">
                Mass<br/>
                <span className="italic ml-8 md:ml-16">geschneiderte</span><br/>
                Eleganz
              </h1>
              <p className="text-charcoal/70 font-sans font-light leading-relaxed max-w-md mb-10">
                Kreatives, professionelles, zuverlässiges und kostengünstiges Atelier.
              </p>
              <div className="flex gap-6">
                <Button onClick={() => onChangeView('SERVICES')}>Meine Services</Button>
                <Button variant="text" onClick={() => onChangeView('SHOP')}>Zum Shop</Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-7 relative order-1 lg:order-2 h-[60vh] lg:h-[80vh]">
              <div className="absolute inset-0 bg-charcoal/5 z-10 mix-blend-multiply pointer-events-none"></div>
              <img 
                src={IMAGES.HERO} 
                alt="Atelier Work" 
                className="w-full h-full object-cover grayscale-[20%] contrast-[0.9]"
              />
              {/* Abstract Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sand border border-stone hidden lg:flex items-center justify-center z-20">
                <span className="font-serif italic text-2xl text-charcoal">Est. 2024</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About / Teaser Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative max-w-md mx-auto md:mx-0">
              <div className="absolute top-4 left-4 w-full h-full border border-charcoal/20 -z-10 transform -translate-x-4 -translate-y-4"></div>
              <img src={IMAGES.OWNER} alt="J. Nägeli" className="w-full h-auto aspect-[3/4] object-cover" />
            </div>
            
            {/* Text */}
            <div>
              <h3 className="font-serif text-4xl md:text-5xl mb-8">Die Kunst des <br/><span className="italic text-terra">perfekten Schnitts</span></h3>
              <p className="font-sans font-light text-gray-600 mb-6 leading-loose">
                Ich, Jennifer Nägeli, bin die Firmengründerin und -inhaberin von MissLeA Fashion. 
                In meiner über 20-jährigen Berufstätigkeit habe ich umfassende Kenntnisse als Designerin, Schneiderin, Modeberaterin und Modeverkäuferin erworben.
              </p>
              <p className="font-sans font-light text-gray-600 mb-6 leading-loose">
                 Meine Leidenschaft ist es, das Beste aus einem Stoff herauszuholen und damit individuelle Wünsche zu erfüllen und kreative Lösungen zu finden.
              </p>
              <ul className="space-y-4 mb-10 font-serif text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-terra"></span> Design & Produktion
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-terra"></span> Handwerkliche Präzision
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-terra"></span> Modeboutique
                </li>
              </ul>
              <Button variant="outline" onClick={() => onChangeView('ABOUT')} className="group">
                Mehr Über Mich <ChevronRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-sand border-t border-stone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-sans tracking-widest uppercase text-terra mb-4 block">Expertise</span>
            <h3 className="font-serif text-4xl md:text-5xl">Mein Handwerk</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col items-center text-center group cursor-pointer" onClick={() => onChangeView('SERVICES')}>
                <div className="w-full aspect-[3/4] md:aspect-square bg-stone/20 overflow-hidden mb-8 relative">
                   <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500 z-10"></div>
                   <img 
                     src={service.image} 
                     alt={service.title}
                     className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                <h4 className="font-serif text-2xl mb-4 group-hover:text-terra transition-colors">{service.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6 px-4">
                  {service.description.substring(0, 80)}...
                </p>
                <span className="text-xs uppercase tracking-widest border-b border-charcoal pb-1 group-hover:border-terra group-hover:text-terra transition-colors">Details</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Teaser - Split Screen */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-charcoal text-sand p-12 md:p-20 flex flex-col justify-center items-start">
           <span className="text-xs font-sans tracking-widest uppercase text-terra mb-6 block">Boutique</span>
           <h3 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
             Exklusive <br/><span className="italic text-white/50">Unikate</span> & <br/>Accessoires
           </h3>
           <p className="font-sans font-light text-gray-400 mb-10 leading-relaxed max-w-md">
             Entdecken Sie handgefertigte Einzelstücke und ausgewählte Accessoires in meinem Online Shop. 
             Jedes Stück erzählt seine eigene Geschichte.
           </p>
           <Button variant="white" onClick={() => onChangeView('SHOP')}>Zum Online Shop</Button>
        </div>
        <div className="h-[60vh] md:h-auto relative overflow-hidden">
          <img 
            src={IMAGES.SHOP_MOOD_1} 
            alt="Boutique Mood" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white border-t border-stone">
        <div className="container mx-auto px-6 max-w-2xl text-center">
           <h3 className="font-serif text-3xl md:text-4xl mb-4">Bleiben Sie Inspiriert</h3>
           <p className="text-gray-500 font-light mb-10">Melden Sie sich für meinen Newsletter an und erfahren Sie als Erste von neuen Kollektionen und Events.</p>
           
           <form className="flex flex-col md:flex-row gap-4">
             <input 
               type="email" 
               placeholder="Ihre E-Mail Adresse" 
               className="flex-grow bg-sand border border-stone p-4 focus:outline-none focus:border-terra transition-colors"
             />
             <Button className="flex items-center justify-center gap-2">
               Anmelden <Send size={14} />
             </Button>
           </form>
        </div>
      </section>
    </div>
  );
};
