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
   title: "Portfolio de Mourier Matthieu",
   description: "Portfolio de Mourier Matthieu, développeur web spécialisé dans la création de sites et d'applications web modernes.",
   authors: { name: "Mourier Matthieu" },
   creator: "Mourier Matthieu",
   openGraph: {
      title: "Portfolio de Mourier Matthieu",
      description: "Portfolio de Mourier Matthieu, développeur web spécialisé dans la création de sites et d'applications web modernes.",
      url: "https://mourier-matthieu.tech",
      siteName: "Portfolio de Mourier Matthieu",
      images: [
         {
            url: "/portfolio.webp",
            width: 1200,
            height: 630,
            alt: "Portfolio de Mourier Matthieu",
         },
      ],
      locale: "fr_FR",
      type: "website",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <body className={`${inter.className} bg-(--color-background) text-white min-h-screen flex flex-col`}>

            <Header />

            <main className="flex-grow">
               {children}
            </main>

            <div className="sticky bottom-8 z-40 w-full flex justify-end pr-8 pointer-events-none">
               <div className="hidden md:block md:pointer-events-auto">
                  <FloatingButtons />
               </div>
            </div>

            <Footer />

            <Analytics />

         </body>
      </html>
   );
}
