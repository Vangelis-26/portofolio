"use client";

import { useState } from 'react';
import NavLinks from "../navLinks/navLinks";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import "../../app/globals.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative w-full h-64 md:h-80">
        <Image
          src="/banniere.webp"
          alt="Bannière de la page d'accueil"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-20 p-4 md:p-6">
          <nav className="flex justify-between items-center">
            <div>
              <Link
                href="/"
                aria-label="Retour à l'accueil"
                className="fixed top-8 left-8 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 font-bold text-lg hover:border-(--color-border) transition-colors duration-300"
              >
                MM
              </Link>
            </div>

            <div className="hidden md:block">
              <NavLinks className="flex" />
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <FiMenu size={28} />
            </button>
          </nav>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 pointer-events-none">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
              Mourier Matthieu
            </h1>
            <p className="mt-3 text-base uppercase tracking-widest text-slate-300 drop-shadow-sm" style={{ animationDelay: '200ms' }}>
              Développeur Web FullStack
            </p>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-50 p-6
          bg-slate-950/95 backdrop-blur-sm
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Fermer le menu">
            <FiX size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-20">
          <NavLinks className="flex-col text-3xl gap-8" />
        </div>
      </div>
    </>
  );
}
