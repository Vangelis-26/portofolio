import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Mourier Matthieu - Développeur Web",
  description:
    "Portfolio de Mourier Matthieu, développeur web spécialisé dans la création de sites et d'applications web modernes.",
  authors: { name: "Mourier Matthieu" },
  creator: "Mourier Matthieu",
  openGraph: {
    title: "Mourier Matthieu - Développeur Web",
    description:
      "Portfolio de Mourier Matthieu, développeur web spécialisé dans la création de sites et d'applications web modernes.",
    url: "https://mouriermatthieu.fr",
    siteName: "Mourier Matthieu",
    images: [
      {
        url: "https://mouriermatthieu.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mourier Matthieu - Développeur Web",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-(--color-background) text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
