
import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import { ServiceType } from '../types';
import { Button } from './Button';

interface ServiceFunnelProps {
  type: ServiceType;
  onClose: () => void;
}

export const ServiceFunnel: React.FC<ServiceFunnelProps> = ({ type, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Simulating form state
  const [formData, setFormData] = useState({
    category: '',
    date: '',
    description: '',
    budget: '',
    style: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
    }, 800);
  };

  const renderContent = () => {
    if (isSuccess) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <CheckCircle size={64} className="text-sage mb-6" strokeWidth={1} />
          <h3 className="font-serif text-2xl mb-2">Vielen Dank</h3>
          <p className="font-sans text-sm text-gray-500 max-w-xs mx-auto">
            Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich in Kürze bei Ihnen.
          </p>
          <Button onClick={onClose} className="mt-8">Zurück zur Übersicht</Button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="animate-slide-up">
        <div className="mb-8 text-center">
          <h3 className="font-serif text-3xl italic mb-2">
            {type === 'TAILORING' && 'Massanfertigung'}
            {type === 'ALTERATION' && 'Änderung & Reparatur'}
            {type === 'STYLING' && 'Modeberatung'}
          </h3>
          <p className="text-xs tracking-widest uppercase text-gray-400">Schritt {step} von 2</p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            {type === 'TAILORING' && (
              <>
                <div>
                  <label className="block text-xs uppercase tracking-wide mb-2">Art des Kleidungsstücks</label>
                  <select 
                    className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none focus:border-terra transition-colors"
                    required
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="dress">Abendkleid</option>
                    <option value="suit">Anzug/Hosenanzug</option>
                    <option value="blouse">Bluse/Hemd</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide mb-2">Gewünschter Termin</label>
                  <input 
                    type="date" 
                    className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none focus:border-terra"
                    required
                  />
                </div>
              </>
            )}

            {type === 'ALTERATION' && (
              <>
                 <div>
                  <label className="block text-xs uppercase tracking-wide mb-2">Was ist defekt / zu ändern?</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none focus:border-terra"
                    placeholder="z.B. Reissverschluss defekt, Hose kürzen..."
                    required
                  ></textarea>
                </div>
                <div className="border border-dashed border-charcoal/30 p-6 text-center cursor-pointer hover:bg-white transition-colors">
                  <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                  <span className="text-xs uppercase text-gray-500">Foto hochladen (Optional)</span>
                </div>
              </>
            )}

            {type === 'STYLING' && (
              <>
                 <div>
                  <label className="block text-xs uppercase tracking-wide mb-2">Anlass</label>
                  <input 
                    type="text" 
                    className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none focus:border-terra"
                    placeholder="z.B. Hochzeit, Business, Gala..."
                    required
                  />
                </div>
                 <div>
                  <label className="block text-xs uppercase tracking-wide mb-2">Bevorzugte Stilrichtung</label>
                  <select className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none focus:border-terra">
                    <option value="">Bitte wählen...</option>
                    <option value="classic">Klassisch & Elegant</option>
                    <option value="modern">Modern & Avantgarde</option>
                    <option value="boho">Boho & Romantisch</option>
                  </select>
                </div>
              </>
            )}

            <div className="pt-4">
              <Button type="button" onClick={() => setStep(2)} className="w-full">Weiter</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wide mb-2">Ihre Kontaktdaten</label>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input placeholder="Vorname" className="bg-sand border-b border-charcoal p-3 focus:outline-none" required />
                <input placeholder="Nachname" className="bg-sand border-b border-charcoal p-3 focus:outline-none" required />
              </div>
              <input type="email" placeholder="E-Mail Adresse" className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none mb-4" required />
              <input type="tel" placeholder="Telefonnummer" className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none" required />
            </div>

            {type === 'TAILORING' && (
               <div>
                 <label className="block text-xs uppercase tracking-wide mb-2">Stoffvorstellungen</label>
                 <textarea 
                   className="w-full bg-sand border-b border-charcoal p-3 focus:outline-none"
                   placeholder="Haben Sie bereits Stoffe oder Wünsche?"
                 ></textarea>
               </div>
            )}

            <div className="pt-4 flex gap-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3">Zurück</Button>
              <Button type="submit" className="w-2/3">Anfrage senden</Button>
            </div>
          </div>
        )}
      </form>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-sand w-full max-w-md p-8 md:p-12 shadow-2xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal hover:text-terra transition-colors"
        >
          <X size={24} strokeWidth={1} />
        </button>
        {renderContent()}
      </div>
    </div>
  );
};
