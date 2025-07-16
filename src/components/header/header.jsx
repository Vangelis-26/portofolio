"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Cv from '../cv/cv';
import NavLinks from "../navLinks/navLinks";
import "../../app/globals.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative w-full h-64 md:h-80 text-white">
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
            <Link
              href="/"
              aria-label="Retour à l'accueil"
              // On définit une petite taille par défaut, et une plus grande pour les écrans md+
              className="relative block h-10 w-12 md:h-16 md:w-20 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.webp"
                alt="Logo Mourier Matthieu"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Link>

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
        ref={menuRef}
        className={`
          fixed top-0 left-0 right-0 z-50 p-6 shadow-lg
          bg-slate-950/95 backdrop-blur-sm 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Fermer le menu">
            <FiX size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">

          <NavLinks className="flex-col text-2xl gap-8" onLinkClick={handleLinkClick} />

          <div className="mt-8 border-t border-slate-700 w-full pt-6 flex justify-center">
            <Cv className="bg-(--color-border) text-white border-transparent hover:opacity-90" />
          </div>

        </div>
      </div>
    </>
  );
}
