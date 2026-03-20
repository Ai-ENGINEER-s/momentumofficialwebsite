"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle2, Instagram, Facebook, Linkedin,
  ChevronDown, Loader2, AlertCircle, RefreshCcw
} from 'lucide-react';

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

export default function ContactPage() {
  // "Head Office" est désormais le pôle par défaut
  const [activePole, setActivePole] = useState("Head Office");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const poles = [
    "Head Office", "Momentum Core", "Momentum Energy", "Momentum Academy", 
    "Momentum Health", "Momentum Earth", "Momentum Nexus", "Momentum MEvent"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      message: formData.get('message'),
      activePole: activePole,
      honeypot: formData.get('website'),
      startTime: startTime
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Une erreur est survenue");

      setIsSubmitted(true);
      if (formRef.current) formRef.current.reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FCFCFD] min-h-screen font-sans">
      
      {/* HEADER SECTION AVEC LOGO */}
      <section className="bg-white border-b border-slate-100 pt-28 pb-16 text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center mb-8">
      
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-momentum-red"></div>
              <span className="text-momentum-red font-black uppercase tracking-[0.3em] text-[10px]">Contact Institutionnel</span>
              <div className="w-12 h-[2px] bg-momentum-red"></div>
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-momentum-blue leading-tight mb-6 max-w-4xl mx-auto tracking-tighter">
            Bâtissons l'avenir <span className="text-momentum-red italic">ensemble.</span>
          </h1>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* GAUCHE : INFOS */}
            <div className="lg:w-1/3 space-y-12">
              <div className="space-y-8">
                <h3 className="text-xs font-black text-momentum-blue uppercase tracking-widest border-b border-slate-200 pb-2 inline-block">Siège Social</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-momentum-red h-fit"><MapPin size={20} /></div>
                    <div><p className="font-bold text-momentum-blue uppercase text-xs tracking-tighter">RD Congo</p><p className="text-sm text-slate-500">Kinshasa, Gombe</p></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-momentum-red h-fit"><Phone size={20} /></div>
                    <div><p className="font-bold text-momentum-blue uppercase text-xs tracking-tighter">Téléphone</p><p className="text-sm text-slate-500">+243 820 000 000</p></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-momentum-red h-fit"><Mail size={20} /></div>
                    <div><p className="font-bold text-momentum-blue uppercase text-xs tracking-tighter">Email</p><p className="text-sm text-slate-500">contact@mgh-drc.com</p></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                {[<XIcon />, <Linkedin />, <Facebook />, <Instagram />].map((icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-full text-slate-400 hover:text-momentum-red transition-all shadow-sm">{icon}</a>
                ))}
              </div>
            </div>

            {/* DROITE : FORMULAIRE */}
            <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative min-h-[600px] flex items-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form" 
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-8 w-full"
                  >
                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="space-y-4 relative" ref={dropdownRef}>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Direction concernée</label>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-sm font-bold text-momentum-blue transition-all focus:ring-1 focus:ring-momentum-blue outline-none"
                      >
                        {activePole}
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute z-50 top-full left-0 w-full mt-2 bg-white border border-slate-100 shadow-2xl rounded-xl overflow-hidden p-1">
                            {poles.map((pole) => (
                              <button key={pole} type="button" onClick={() => { setActivePole(pole); setIsDropdownOpen(false); }} className={`w-full text-left px-5 py-3 text-sm font-bold transition-all rounded-lg ${activePole === pole ? 'text-white bg-momentum-blue' : 'text-slate-600 hover:bg-slate-50'}`}>
                                {pole}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-momentum-blue uppercase tracking-widest">Nom complet</label>
                        <input name="fullName" required type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-momentum-red outline-none" placeholder="Ex: Jean Mukendi" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-momentum-blue uppercase tracking-widest">Email institutionnel</label>
                        <input name="email" required type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-momentum-red outline-none" placeholder="nom@entreprise.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-momentum-blue uppercase tracking-widest">Votre Message</label>
                      <textarea name="message" required rows={5} className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-momentum-red outline-none resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>

                    {error && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
                        <AlertCircle size={16} /> {error}
                      </motion.div>
                    )}

                    <motion.button 
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      type="submit" 
                      className="w-full bg-momentum-blue text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-momentum-red transition-all shadow-lg disabled:opacity-70"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : "Envoyer ma demande"} <Send size={18} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center w-full space-y-6 py-12"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100 shadow-sm shadow-green-100">
                      <CheckCircle2 size={56} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-4xl font-black text-momentum-blue italic uppercase tracking-tighter">Transmission réussie</h2>
                      <p className="text-slate-500 max-w-sm mx-auto leading-relaxed text-sm">
                        Votre demande a été envoyée à la direction <strong>{activePole}</strong>. Nos équipes reviendront vers vous sous peu.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 flex items-center justify-center gap-2 mx-auto text-[10px] font-black text-momentum-blue uppercase tracking-widest border-b-2 border-momentum-red pb-1 hover:text-momentum-red transition-colors"
                    >
                      <RefreshCcw size={14} /> Envoyer un nouveau message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}