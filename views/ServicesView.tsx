
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceType } from '../types';
import { Button } from '../components/Button';
import { ServiceFunnel } from '../components/ServiceFunnel';
import { Scissors, Ruler, Heart } from 'lucide-react';

export const ServicesView: React.FC = () => {
  const [activeFunnel, setActiveFunnel] = useState<ServiceType | null>(null);

  const getIcon = (id: string) => {
    switch(id) {
      case 'TAILORING': return <Ruler size={24} strokeWidth={1} />;
      case 'ALTERATION': return <Scissors size={24} strokeWidth={1} />;
      case 'STYLING': return <Heart size={24} strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-xs font-sans tracking-widest uppercase text-terra mb-4 block">Expertise</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Mein Angebot</h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Von der ersten Skizze bis zum letzten Stich. Wählen Sie den gewünschten Service für eine unverbindliche Anfrage.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <section 
              key={service.id} 
              className={`flex flex-col gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Decorative border frame */}
                  <div className={`absolute top-4 ${index % 2 === 1 ? 'right-4' : 'left-4'} w-full h-full border border-charcoal/20 -z-10`}></div>
                  
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="mb-6 text-terra bg-sand p-4 rounded-full inline-flex">
                  {getIcon(service.id)}
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl mb-6">{service.title}</h3>
                
                <div className="w-12 h-[1px] bg-charcoal mb-8"></div>
                
                <p className="text-gray-600 font-light leading-loose mb-10 text-lg">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  onClick={() => setActiveFunnel(service.id)}
                  className="min-w-[200px]"
                >
                  Anfrage Starten
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Funnel Modal */}
      {activeFunnel && (
        <ServiceFunnel type={activeFunnel} onClose={() => setActiveFunnel(null)} />
      )}
    </div>
  );
};
