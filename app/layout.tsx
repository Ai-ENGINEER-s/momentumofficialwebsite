import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Améliore le LCP pour le SEO
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Configuration du Viewport pour le responsive
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Important pour l'accessibilité
  themeColor: "#003366", // Couleur de votre marque (Momentum Blue)
};

// Métadonnées SEO avancées
export const metadata: Metadata = {
  title: {
    default: "Momentum Group Holdings | Innovation & Transformation Digitale en RDC",
    template: "%s | Momentum Group"
  },
  description: "Partenaire technologique de référence en RD Congo. Expertise en IA, digitalisation gouvernementale, énergie durable et formation professionnelle de haut niveau.",
  keywords: ["Momentum Group", "RDC", "Digitalisation", "IA", "Technologie", "Gouvernement Digital", "Formation IA Kinshasa"],
  authors: [{ name: "Momentum Group" }],
  creator: "Momentum Tech Team",
  publisher: "Momentum Group Holdings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // OpenGraph pour le partage sur les réseaux sociaux (LinkedIn, FB)
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://momentum-group.cd", // À remplacer par votre vrai domaine
    siteName: "Momentum Group Holdings",
    title: "Momentum Group | Bâtir l'avenir numérique de la RDC",
    description: "Solutions technologiques stratégiques pour les secteurs public et privé.",
    images: [
      {
        url: "/og-image.jpg", // Créez une image de 1200x630px
        width: 1200,
        height: 630,
        alt: "Momentum Group Holdings",
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Momentum Group Holdings",
    description: "Innovation et impact technologique en République Démocratique du Congo.",
    images: ["/og-image.jpg"],
  },
  // Icônes et Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-[#4a0404] selection:text-white"
      >
        <div className="relative min-h-screen flex flex-col bg-gray-50">
          {/* Navbar visible sur toutes les pages */}
          <Navbar />

          {/* Contenu de chaque page */}
          <main className="flex-grow pt-9">
            {children}
          </main>

          {/* Footer visible sur toutes les pages */}
          <Footer />
        </div>
      </body>
    </html>
  );
}