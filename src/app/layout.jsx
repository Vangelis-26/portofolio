import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FloatingButtons from "@/components/floatingButton/floatingButton";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mourier-matthieu.vercel.app";

const inter = Inter({
   subsets: ["latin"],
   weight: ['400', '500', '600', '800'],
});

export const metadata = {
   metadataBase: new URL(siteUrl),

   title: {
      default: 'Matthieu Mourier | Développeur Web FullStack & Vision 360°',
      template: '%s | Matthieu Mourier',
   },

   description: "Expertise hybride : 15 ans de gestion de projet alliés au développement FullStack (Next.js, React, Node.js). Conception d'applications web performantes et sécurisées à Montélimar.",

   keywords: [
      'Développeur Web FullStack', 'Next.js', 'React', 'Node.js',
      'Gestion de projet digital', 'Vision 360°', 'Supabase',
      'Montélimar', 'Drôme', 'Auvergne-Rhône-Alpes', 'Matthieu Mourier'
   ],

   authors: [{ name: "Matthieu Mourier" }],
   creator: "Matthieu Mourier",

   // Favicons et icônes d'appareils
   icons: {
      icon: [
         { url: '/favicon.ico' },
         { url: '/icon.png', type: 'image/png' },
      ],
      apple: [
         { url: '/apple-icon.png' },
      ],
   },

   openGraph: {
      title: "Matthieu Mourier | Développeur Web FullStack & Vision 360°",
      description: "Découvrez le portfolio d'un profil hybride alliant rigueur de gestion de projet et expertise technique moderne.",
      url: siteUrl,
      siteName: "Matthieu Mourier Portfolio",
      images: [
         {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: "Portfolio de Matthieu Mourier, Développeur Web FullStack",
         },
      ],
      locale: 'fr_FR',
      type: 'website',
   },

   twitter: {
      card: "summary_large_image",
      title: "Matthieu Mourier - Développeur Web FullStack",
      description: "Vision 360° pour vos solutions web : de la stratégie au déploiement.",
      images: ['/og-image.png'],
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

export default function RootLayout({ children }) {
   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Matthieu Mourier",
      "jobTitle": "Développeur Web FullStack",
      "url": siteUrl,
      "address": {
         "@type": "PostalAddress",
         "addressLocality": "Montélimar",
         "addressRegion": "Auvergne-Rhône-Alpes",
         "addressCountry": "FR"
      },
      "description": "Développeur FullStack spécialisé en Next.js et React, avec 15 ans d'expérience en gestion de projet.",
      "knowsAbout": ["Next.js", "React", "Node.js", "Supabase", "Tailwind CSS", "Gestion de projet"],
      "sameAs": [
         "https://www.linkedin.com/in/matthieu-mourier-77a5ba182/",
         "https://github.com/Vangelis-26"
      ]
   };

   return (
      <html lang="fr">
         <head>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
         </head>
         <body className={`${inter.className} bg-(--color-background) text-white min-h-screen flex flex-col relative overflow-x-hidden`}>

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
               <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-(--color-border)/10 rounded-full blur-[120px]"></div>
               <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <Header />

            <main className="grow relative z-10">
               {children}
               <Analytics />
            </main>

            <div className="sticky bottom-8 z-40 w-full flex justify-end pr-8 pointer-events-none">
               <div className="hidden md:block md:pointer-events-auto">
                  <FloatingButtons />
               </div>
            </div>

            <Footer />
         </body>
      </html>
   );
}
