"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour le look pro
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const directions = [
    {
      category: "Innovation & Tech",
      items: [
        { title: "Momentum Core", desc: "Intelligence Artificielle & Ingénierie", href: "/directions/core" },
        { title: "Momentum Nexus", desc: "Incubateur de startups", href: "/directions/nexus" },
        { title: "Momentum Health", desc: "Solutions e-santé", href: "/directions/health" },
      ]
    },
    {
      category: "Ressources & Énergie",
      items: [
        { title: "Momentum Energy", desc: "Solutions durables", href: "/directions/energy" },
        { title: "Momentum Earth", desc: "Agriculture intelligente", href: "/directions/earth" },
      ]
    },
    {
      category: "Croissance & Formation",
      items: [
        { title: "Momentum Academy", desc: "Bootcamps IA & Data", href: "/directions/academy" },
        { title: "Momentum MEvent", desc: "Marketing stratégique", href: "/directions/mevent" },
      ]
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300 font-sans ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm h-16' : 'bg-white h-20 border-b border-gray-100'
    }`}>
      <nav className="max-w-[1400px] mx-auto px-4 lg:px-10 h-full flex items-center justify-between" aria-label="Menu principal">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center outline-none">
            <Image 
              src="/logo/momentum.png" 
              alt="Momentum Group"
              width={180}
              height={50}
              priority
              className={`object-contain transition-all duration-300 ${isScrolled ? 'w-36' : 'w-44 lg:w-48'}`}
            />
          </Link>
        </div>

        {/* NAVIGATION DESKTOP (Optimisée) */}
        <div className="hidden xl:flex flex-1 justify-center items-center space-x-8">
          {['À propos', 'Services'].map((item) => (
            <Link 
              key={item}
             href={`/${item
  .normalize("NFD")                // Décompose les caractères accentués
  .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
  .toLowerCase()
  .replace(/\s+/g, '-')            // Remplace les espaces par des tirets
}`}
              className="text-sm font-semibold text-gray-700 hover:text-momentum-blue transition-colors"
            >
              {item}
            </Link>
          ))}
          
          {/* MEGA MENU TRIGGER */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setOpenDropdown('directions')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              aria-expanded={openDropdown === 'directions'}
              className={`flex items-center text-sm font-semibold transition-colors ${openDropdown === 'directions' ? 'text-momentum-blue' : 'text-gray-700 hover:text-momentum-blue'}`}
            >
              Nos Directions
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === 'directions' ? 'rotate-180 text-momentum-red' : ''}`} />
            </button>

            {/* MEGA MENU CONTENT */}
            <div className={`
              absolute top-full left-1/2 -translate-x-1/2 w-[900px] transition-all duration-300
              ${openDropdown === 'directions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
            `}>
              <div className="bg-white shadow-2xl border border-gray-100 rounded-b-2xl p-8">
                <div className="grid grid-cols-3 gap-10">
                  {directions.map((col, idx) => (
                    <div key={idx}>
                      <h3 className="text-[11px] font-black text-momentum-red uppercase tracking-widest mb-6 border-b pb-2">{col.category}</h3>
                      <div className="space-y-6">
                        {col.items.map((item) => (
                          <Link key={item.title} href={item.href} className="group block">
                            <div className="text-sm text-momentum-blue group-hover:text-momentum-red font-bold transition-colors flex items-center">
                              {item.title}
                              <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/academy" className="text-sm font-semibold text-gray-700 hover:text-momentum-blue transition-colors">Academy</Link>
          <Link href="/impact" className="text-sm font-semibold text-gray-700 hover:text-momentum-blue transition-colors">Impact</Link>
        </div>

        {/* ACTIONS & MOBILE TOGGLE */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex bg-momentum-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md shadow-momentum-blue/20"
          >
            Contactez-nous
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="xl:hidden p-2 text-momentum-blue hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (Ton design original préservé) */}
      <div className={`
        fixed inset-0 top-20 bg-white z-[90] xl:hidden transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full overflow-y-auto p-6 pb-24">
          <div className="space-y-1">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-gray-50 text-lg font-bold text-momentum-blue">
              À propos <ArrowRight size={18} />
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-gray-50 text-lg font-bold text-momentum-blue">
              Services <ArrowRight size={18} />
            </Link>
            
            {/* Accordion Mobile original */}
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setActiveMobileSubmenu(!activeMobileSubmenu)}
                className="w-full flex items-center justify-between py-4 text-lg font-bold text-momentum-blue"
              >
                Nos Directions
                <ChevronDown className={`transition-transform ${activeMobileSubmenu ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`${activeMobileSubmenu ? 'block' : 'hidden'} pb-4 pl-4 space-y-4`}>
                {directions.map((cat) => (
                  <div key={cat.category} className="pt-2">
                    <p className="text-[10px] font-black text-momentum-red uppercase tracking-widest mb-3">{cat.category}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {cat.items.map(item => (
                        <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 font-medium py-1">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/academy" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 border-b border-gray-50 text-lg font-bold text-momentum-blue">
              Academy <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-auto pt-10">
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-momentum-blue text-white py-4 rounded-xl font-bold text-lg"
            >
              Parler à un conseiller
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;