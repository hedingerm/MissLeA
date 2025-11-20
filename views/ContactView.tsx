
import React, { useState } from 'react';
import { MapPin, Mail, Send, Phone } from 'lucide-react';
import { Button } from '../components/Button';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Vielen Dank. Ihre Nachricht wurde gesendet.');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
           <span className="text-xs font-sans tracking-widest uppercase text-terra mb-4 block">Get in Touch</span>
           <h2 className="font-serif text-5xl md:text-6xl text-charcoal">Kontakt</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Locations & Info */}
          <div className="space-y-10 order-2 lg:order-1">
            
            {/* Hauptadresse */}
            <div className="bg-white p-8 md:p-10 border border-stone shadow-sm relative group hover:border-terra/30 transition-colors duration-500">
               <div className="absolute top-0 left-0 w-full h-1 bg-terra/20 group-hover:bg-terra/50 transition-colors duration-500"></div>
               <h3 className="font-serif text-2xl md:text-3xl mb-8 text-charcoal">Hauptadresse</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                 <div className="flex flex-col justify-between">
                   <div className="mb-6">
                     <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-2">Anschrift</p>
                     <p className="text-charcoal font-medium text-lg mb-1">MissLeA Fashion</p>
                     <p className="text-charcoal font-light leading-relaxed">Bernstrasse 81<br/>3052 Zollikofen</p>
                   </div>
                   
                   <div className="space-y-3">
                     <a href="tel:+41762283881" className="flex items-center gap-3 text-charcoal hover:text-terra transition-colors group/link">
                       <Phone size={16} className="text-terra/70 group-hover/link:text-terra"/>
                       <span className="font-light">+41 76 228 38 81</span>
                     </a>
                     <a href="mailto:missleafashion@gmail.com" className="flex items-center gap-3 text-charcoal hover:text-terra transition-colors group/link">
                       <Mail size={16} className="text-terra/70 group-hover/link:text-terra"/>
                       <span className="font-light text-sm">missleafashion@gmail.com</span>
                     </a>
                   </div>
                 </div>

                 <div>
                   <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-gray-400 border-b border-stone pb-2">Öffnungszeiten</h4>
                   <div className="text-sm text-charcoal font-light space-y-2">
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Montag</span>
                        <span>13.30 - 17.00</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Dienstag</span>
                        <span>09.00 - 12.00 /<br/>13.30 - 17.00</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Mittwoch</span>
                        <span className="italic text-gray-400">geschlossen</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Donnerstag</span>
                        <span>09.00 - 12.00 /<br/>13.30 - 17.00</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Freitag</span>
                        <span>09.00 - 12.00 /<br/>13.30 - 17.00</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Samstag</span>
                        <span>10.00 - 13.00</span>
                      </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Filiale */}
            <div className="bg-white p-8 md:p-10 border border-stone shadow-sm relative group hover:border-terra/30 transition-colors duration-500">
               <h3 className="font-serif text-2xl md:text-3xl mb-8 text-charcoal">Filiale</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                 <div className="flex flex-col justify-between">
                   <div className="mb-6">
                     <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-2">Anschrift</p>
                     <p className="text-charcoal font-medium text-lg mb-1">MissLeA Fashion</p>
                     <p className="text-charcoal font-light leading-relaxed">Neuengasse 14<br/>3177 Laupen</p>
                   </div>
                   
                   <div className="space-y-3">
                     <a href="tel:+41762283881" className="flex items-center gap-3 text-charcoal hover:text-terra transition-colors group/link">
                       <Phone size={16} className="text-terra/70 group-hover/link:text-terra"/>
                       <span className="font-light">+41 76 228 38 81</span>
                     </a>
                   </div>
                 </div>

                 <div>
                   <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-gray-400 border-b border-stone pb-2">Öffnungszeiten</h4>
                   <div className="text-sm text-charcoal font-light space-y-2">
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Montag</span>
                        <span>09.00 - 12.00 /<br/>13.30 - 17.00</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Dienstag</span>
                        <span className="italic text-gray-400">geschlossen</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Mittwoch</span>
                        <span>09.00 - 12.00 /<br/>13.30 - 17.00</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Do - Fr</span>
                        <span className="italic text-gray-400">geschlossen</span>
                      </div>
                      <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="font-medium">Samstag</span>
                        <span>14.00 - 17.00</span>
                      </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Depotstellen & Map */}
            <div className="grid grid-cols-1 gap-10">
              <div className="bg-sand/50 p-8 border border-stone">
                <h3 className="font-serif text-xl mb-6 text-charcoal border-b border-charcoal/10 pb-4 inline-block pr-8">Depotstellen</h3>
                <ul className="space-y-4 text-charcoal font-light text-sm">
                   <li className="flex items-start gap-3">
                     <MapPin size={16} className="mt-0.5 text-terra shrink-0"/> 
                     <span>Jegenstorfstrasse 1, 3305 Iffwil</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <MapPin size={16} className="mt-0.5 text-terra shrink-0"/> 
                     <span>Freiburgstrasse 13, 3178 Bösingen</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <MapPin size={16} className="mt-0.5 text-terra shrink-0"/> 
                     <span>Bärenplatz 7, 3177 Laupen</span>
                   </li>
                </ul>
              </div>

              <div className="h-[300px] w-full bg-stone/20 border border-stone relative overflow-hidden group shadow-inner">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.8592367806157!2d7.456244976663084!3d46.99879937120239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e37911e206879%3A0xe33f051872279474!2sBernstrasse%2081%2C%203052%20Zollikofen!5e0!3m2!1sde!2sch!4v1709647839432!5m2!1sde!2sch" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out mix-blend-multiply"
                 ></iframe>
                 <div className="absolute inset-0 pointer-events-none border-[12px] border-sand/50"></div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="order-1 lg:order-2">
             <div className="sticky top-32">
               <h3 className="font-serif text-4xl mb-8">Nachricht senden</h3>
               <p className="font-sans font-light text-gray-600 mb-12 leading-relaxed max-w-md">
                 Haben Sie Fragen zu meinen Dienstleistungen oder möchten Sie einen Termin vereinbaren? 
                 Nutzen Sie gerne mein Kontaktformular.
               </p>

               <form onSubmit={handleSubmit} className="space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="group relative">
                     <input 
                       type="text" 
                       required
                       className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal focus:border-terra focus:outline-none transition-colors placeholder-transparent peer"
                       id="name"
                       placeholder="Name"
                       value={formState.name}
                       onChange={e => setFormState({...formState, name: e.target.value})}
                     />
                     <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs uppercase tracking-widest">Name</label>
                   </div>
                   <div className="group relative">
                     <input 
                       type="email" 
                       required
                       className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal focus:border-terra focus:outline-none transition-colors placeholder-transparent peer"
                       id="email"
                       placeholder="Email"
                       value={formState.email}
                       onChange={e => setFormState({...formState, email: e.target.value})}
                     />
                     <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs uppercase tracking-widest">Email</label>
                   </div>
                 </div>

                 <div className="group relative">
                    <input 
                       type="tel" 
                       className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal focus:border-terra focus:outline-none transition-colors placeholder-transparent peer"
                       id="phone"
                       placeholder="Telefon (Optional)"
                       value={formState.phone}
                       onChange={e => setFormState({...formState, phone: e.target.value})}
                     />
                     <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs uppercase tracking-widest">Telefon (Optional)</label>
                 </div>

                 <div className="group relative">
                   <textarea 
                     rows={5}
                     required
                     className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal focus:border-terra focus:outline-none transition-colors placeholder-transparent peer resize-none"
                     id="message"
                     placeholder="Ihre Nachricht"
                     value={formState.message}
                     onChange={e => setFormState({...formState, message: e.target.value})}
                   ></textarea>
                   <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-xs uppercase tracking-widest">Ihre Nachricht</label>
                 </div>

                 <div className="pt-6">
                   <Button type="submit" className="w-full md:w-auto flex justify-between items-center gap-8 group pl-10 pr-10">
                     Nachricht Senden 
                     <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </div>
               </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
