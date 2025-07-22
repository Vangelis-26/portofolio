import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FloatingButtons from "@/components/floatingButton/floatingButton";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";


const inter = Inter({
   subsets: ["latin"],
   weight: ['400', '500', '600', '800'],
});

export const metadata = {
   metadataBase: new URL('https://mourier-matthieu.tech'),

   title: {
      default: 'Matthieu Mourier | Développeur Web FullStack',
      template: '%s | Matthieu Mourier',
   },
   description: "Découvrez le portfolio de Matthieu Mourier, développeur web FullStack spécialisé dans la création d'applications modernes avec React, Next.js et Node.js à Montélimar.",

   keywords: ['Développeur Web', 'FullStack', 'React', 'Next.js', 'Portfolio', 'Freelance', 'Matthieu Mourier', 'Montélimar'],

   authors: [{ name: "Matthieu Mourier" }],
   creator: "Matthieu Mourier",

   openGraph: {
      title: "Matthieu Mourier | Développeur Web FullStack",
      description: "Découvrez le portfolio d'un développeur passionné, alliant expérience en gestion de projet et expertise technique.",
      url: "https://mourier-matthieu.tech",
      siteName: "Portfolio de Matthieu Mourier",
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
      description: "Découvrez le portfolio d'un développeur passionné, alliant expérience en gestion de projet et expertise technique.",
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
   return (
      <html lang="fr">
         <body className={`${inter.className} bg-(--color-background) text-white min-h-screen flex flex-col`}>

            <Header />

            <main className="flex-grow">
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
