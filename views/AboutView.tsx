import React from 'react';
import { IMAGES } from '../constants';

export const AboutView: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-sans tracking-widest uppercase text-terra mb-4 block">Die Gründerin</span>
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-8">
            Jennifer <span className="italic text-terra/80">Nägeli</span>
          </h1>
          <div className="w-24 h-[1px] bg-charcoal mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image with Offset Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-6 -left-6 w-full h-full border border-terra/30 -z-10 hidden md:block"></div>
            <div className="relative aspect-[3/4] bg-stone/20 overflow-hidden shadow-lg">
               <img 
                src={IMAGES.OWNER} 
                alt="Jennifer Nägeli" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
               <div className="font-serif italic text-2xl text-charcoal">Est. 2024</div>
               <div className="text-xs font-sans uppercase tracking-widest text-gray-400">Atelier Zollikofen</div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-12 lg:pl-12 pt-8">
            
            {/* Intro */}
            <div className="prose prose-lg">
              <h3 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight mb-6">
                Modedesignerin & Damenschneiderin aus Leidenschaft.
              </h3>
              <p className="font-sans font-light text-gray-600 leading-loose text-lg">
                Ich, Jennifer Nägeli, bin die Firmengründerin und -inhaberin von MissLeA Fashion. 
                In meiner über 20-jährigen Berufstätigkeit habe ich umfassende Kenntnisse als Designerin, Schneiderin, Modeberaterin und Modeverkäuferin erworben.
              </p>
            </div>

            {/* Quote Block */}
            <div className="bg-white border-l-4 border-terra p-8 shadow-sm my-8">
              <p className="font-serif italic text-2xl md:text-3xl text-charcoal leading-relaxed">
                "Meine Leidenschaft ist es, das Beste aus einem Stoff herauszuholen und damit individuelle Wünsche zu erfüllen."
              </p>
            </div>

            {/* Detailed Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans font-light text-gray-600 leading-relaxed text-sm md:text-base">
              <div>
                <h4 className="font-serif text-xl text-charcoal mb-4">Philosophie</h4>
                <p className="mb-4">
                  Ich orientiere mich an den aktuellen Modetrends und schaffe Mehrwerte durch eigene hochwertige Kreationen mit natürlichen Stoffen. 
                  Dies geschieht durch ausgesprochen kundinnenspezifische und exklusive Modelle.
                </p>
              </div>
              <div>
                 <h4 className="font-serif text-xl text-charcoal mb-4">Perfektion</h4>
                 <p>
                   Egal ob Sie ein Unikat wünschen, das exklusiv für Sie entworfen wurde, oder ob ein geliebtes Kleidungsstück geändert werden muss – 
                   Perfektion steht für mich an erster Stelle. Die Klientin wird explizit und aktiv in die Kreation mit einbezogen.
                 </p>
              </div>
            </div>
            
            {/* Sign-off */}
            <div className="pt-8 border-t border-stone">
              <p className="font-serif text-xl italic text-charcoal">Herzlichst,</p>
              <p className="font-serif text-4xl mt-4 text-terra">Jennifer Nägeli</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};