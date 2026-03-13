"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Youtube,
  Twitter,
  HelpCircle,
  Globe,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";

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
      ],
    },
    {
      title: "Nos Directions",
      links: [
        { name: "Momentum Core", href: "/directions/core" },
        { name: "Momentum Energy", href: "/directions/energy" },
        { name: "Momentum Academy", href: "/directions/academy" },
        { name: "Momentum Health", href: "/directions/health" },
        { name: "Momentum Nexus", href: "/directions/nexus" },
      ],
    },
    {
      title: "Académie & Impact",
      links: [
        { name: "Bootcamps IA", href: "/academy#ia" },
        { name: "Data Science", href: "/academy#data" },
        { name: "Nos Valeurs", href: "/impact" },
        { name: "Responsabilité Sociale", href: "/impact#rse" },
      ],
    },
    {
      title: "Autres solutions",
      links: [
        { name: "Partenariats", href: "/contact" },
        { name: "Carrières", href: "/careers" },
        { name: "Espace Presse", href: "/press" },
      ],
    },
  ];

  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 pt-10 pb-8 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* SOCIAL + HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-gray-200 gap-6">

          <div className="flex items-center gap-6">

            <span className="text-sm text-momentum-blue font-bold uppercase tracking-wider">
              Suivez Momentum
            </span>

            <div className="flex items-center gap-3">

              <Link
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 shadow-sm"
              >
                <Twitter size={18} strokeWidth={1.8} />
              </Link>

              <Link
                href="#"
                aria-label="Youtube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 shadow-sm"
              >
                <Youtube size={18} strokeWidth={1.8} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm"
              >
                <Facebook size={18} strokeWidth={1.8} />
              </Link>

            </div>
          </div>

          <div className="hidden md:block">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.25em]">
              République Démocratique du Congo
            </p>
          </div>
        </div>

        {/* GRID LINKS */}
        <nav className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-12 py-4 md:py-14">

          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-gray-100 md:border-none">

              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-6 md:py-0 md:mb-6"
              >
                <h3 className="text-sm font-bold text-momentum-blue uppercase tracking-wider">
                  {section.title}
                </h3>

                <span className="md:hidden">
                  {openSection === section.title ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              <ul
                className={`${
                  openSection === section.title ? "block pb-6" : "hidden"
                } md:block space-y-4`}
              >
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] md:text-[13px] text-gray-600 hover:text-momentum-red transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-gray-200 flex flex-col xl:flex-row justify-between items-center gap-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <Link href="/">
              <Image
                src="/logo/momentum.png"
                alt="Momentum Logo"
                width={120}
                height={40}
                className="opacity-90 hover:opacity-100 transition"
              />
            </Link>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[12px] text-gray-500 font-medium">

              <Link href="/about" className="hover:text-momentum-blue">
                À propos
              </Link>

              <Link href="/privacy" className="hover:text-momentum-blue">
                Confidentialité
              </Link>

              <Link href="/terms" className="hover:text-momentum-blue">
                Conditions
              </Link>

              <Link href="/cookies" className="hover:text-momentum-blue">
                Cookies
              </Link>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">

            <Link
              href="/help"
              className="flex items-center text-[13px] text-gray-600 hover:text-momentum-blue gap-2 font-semibold"
            >
              <HelpCircle size={18} />
              Centre d'aide
            </Link>

            <button className="flex items-center text-[12px] text-momentum-blue font-bold border border-momentum-blue/20 rounded-lg px-5 py-2 hover:bg-white hover:border-momentum-blue transition-all shadow-sm">

              <Globe size={16} className="mr-2" />

              <span className="uppercase tracking-wide">
                RD Congo - FR
              </span>

              <ChevronDown size={14} className="ml-2" />

            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-center xl:text-left">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            © {new Date().getFullYear()} Momentum Group Holdings. Plateforme
            officielle agréée par les services de régulation numérique.
            <br className="hidden md:block" />
            Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;