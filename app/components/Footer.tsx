"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Youtube, Twitter, HelpCircle, Globe, ChevronDown, Plus, Minus } from 'lucide-react';

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Digitalisation", href: "/services#digitalisation" },
        { name: "Transformation digitale", href: "/services#transformation" },
        { name: "Solutions sur mesure", href: "/services#solutions" },
        { name: "Formation professionnelle", href: "/services#formation" },
        { name: "Accompagnement", href: "/services#accompagnement" },
      ]
    },
    {
      title: "Nos Directions",
      links: [
        { name: "Momentum Core", href: "/directions/core" },
        { name: "Momentum Energy", href: "/directions/energy" },
        { name: "Momentum Academy", href: "/directions/academy" },
        { name: "Momentum Health", href: "/directions/health" },
        { name: "Momentum Nexus", href: "/directions/nexus" },
      ]
    },
    {
      title: "Académie & Impact",
      links: [
        { name: "Bootcamps IA", href: "/academy#ia" },
        { name: "Data Science", href: "/academy#data" },
        { name: "Nos Valeurs", href: "/impact" },
        { name: "Responsabilité Sociale", href: "/impact#rse" },
      ]
    },
    {
      title: "Autres solutions",
      links: [
        { name: "Partenariats", href: "/contact" },
        { name: "Carrières", href: "/careers" },
        { name: "Espace Presse", href: "/press" },
      ]
    }
  ];

  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 pt-8 pb-6 font-sans" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* SECTION 1 : RÉSEAUX SOCIAUX & LOGO MOBILE */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-gray-200 gap-6">
          <div className="flex items-center space-x-6">
            <span className="text-sm text-momentum-blue font-bold uppercase tracking-tight">Suivez Momentum</span>
            <div className="flex space-x-6">
              <Link href="#" aria-label="Twitter" className="text-gray-500 hover:text-momentum-red transition-all p-2">
                <Twitter size={22} fill="currentColor" stroke="none" />
              </Link>
              <Link href="#" aria-label="Youtube" className="text-gray-500 hover:text-momentum-red transition-all p-2">
                <Youtube size={22} fill="currentColor" stroke="none" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-momentum-red transition-all p-2">
                <Facebook size={22} fill="currentColor" stroke="none" />
              </Link>
            </div>
          </div>
          
          {/* Badge Institutionnel (Optionnel mais recommandé pour le Gov) */}
          <div className="hidden md:block">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em]">République Démocratique du Congo</p>
          </div>
        </div>

        {/* SECTION 2 : GRILLE DE LIENS (Responsive Accordion) */}
        <nav className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-10 py-4 md:py-12">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-gray-100 md:border-none">
              {/* Header section : bouton sur mobile, texte sur desktop */}
              <button 
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-6 md:py-0 md:mb-6 group"
              >
                <h3 className="text-sm font-bold text-momentum-blue uppercase tracking-wider">
                  {section.title}
                </h3>
                <span className="md:hidden">
                  {openSection === section.title ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {/* Liste de liens : collapsible sur mobile */}
              <ul className={`
                ${openSection === section.title ? 'block pb-6' : 'hidden'} 
                md:block space-y-4
              `}>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[14px] md:text-[13px] text-gray-600 hover:text-momentum-red transition-colors block py-1 md:py-0"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* SECTION 3 : BARRE FINALE */}
        <div className="pt-8 border-t border-gray-200 flex flex-col xl:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full xl:w-auto">
            <Link href="/" className="shrink-0">
              <Image 
                src="/logo/momentum.png" 
                alt="Logo Momentum" 
                width={120} 
                height={40} 
                className="opacity-90 grayscale hover:grayscale-0 transition-all"
              />
            </Link>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[12px] text-gray-500 font-medium">
              <Link href="/about" className="hover:text-momentum-blue">À propos</Link>
              <Link href="/privacy" className="hover:text-momentum-blue">Confidentialité</Link>
              <Link href="/terms" className="hover:text-momentum-blue">Conditions d'utilisation</Link>
              <Link href="/cookies" className="hover:text-momentum-blue">Cookies</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link href="/help" className="flex items-center text-[13px] text-gray-600 hover:text-momentum-blue gap-2 font-semibold">
              <HelpCircle size={18} />
              Centre d'aide
            </Link>
            
            <button className="flex items-center text-[12px] text-momentum-blue font-bold border-2 border-momentum-blue/10 rounded-lg px-5 py-2 hover:bg-white hover:border-momentum-blue transition-all shadow-sm w-full sm:w-auto justify-center">
              <Globe size={16} className="mr-2" />
              <span className="uppercase tracking-wide">RD Congo - FR</span>
              <ChevronDown size={14} className="ml-2" />
            </button>
          </div>
        </div>
        
        <div className="mt-10 text-center xl:text-left border-t border-gray-100 pt-6">
           <p className="text-[11px] text-gray-400 leading-relaxed">
             &copy; {new Date().getFullYear()} Momentum Group Holdings. Plateforme officielle agréée par les services de régulation numérique. 
             <br className="hidden md:block" /> Tous droits réservés.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;