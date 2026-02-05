"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import NavLinks from '../navLinks/navLinks.jsx';
import { FiMenu, FiX } from "react-icons/fi";
import Cv from '../cv/cv';
import "../../app/globals.css";

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isNavScrolled, setIsNavScrolled] = useState(false);
   const menuRef = useRef(null);

   // Fermeture du menu mobile lors d'un clic extérieur
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

   // Gestion du scroll pour la fluidité de la barre de navigation
   useEffect(() => {
      const handleScroll = () => {
         setIsNavScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleLinkClick = () => {
      setIsMenuOpen(false);
   };

   return (
      <>
         {/* BARRE DE NAVIGATION : Design Fixed & Discret */}
         <nav className={`
            fixed top-0 w-full z-50 transition-all duration-500
            ${isNavScrolled
               ? 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl'
               : 'py-8 bg-transparent border-b border-transparent'}
         `}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

               {/* Logo adaptatif */}
               <Link href="/" className={`relative transition-all duration-500 ${isNavScrolled ? 'h-8 w-20' : 'h-10 w-24'}`}>
                  <Image
                     src="/logo.webp"
                     alt="Logo Matthieu Mourier"
                     fill
                     style={{ objectFit: 'contain' }}
                     priority
                  />
               </Link>

               {/* Navigation Desktop épurée */}
               <div className="hidden md:block">
                  <NavLinks />
               </div>

               {/* Toggle Mobile */}
               <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
                  <FiMenu size={28} />
               </button>
            </div>
         </nav>

         <header className="relative w-full h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950">
            <Image
               src="/banniere.webp"
               alt="Bannière"
               fill
               style={{ objectFit: 'cover' }}
               priority
               className="opacity-40"
            />

            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 hidden md:block"></div>

            <div className="relative z-10 w-full max-w-7xl px-6">
               <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center">

                  {/* GAUCHE : Prénom + Projet */}
                  <div className="flex-1 flex flex-col items-center md:items-end justify-center py-6 md:pr-12 text-center md:text-right">
                     <h1 className="text-5xl md:text-8xl font-light text-slate-300 uppercase tracking-tight animate-fade-in-left">
                        Matthieu
                     </h1>
                     <div className="mt-10 w-full md:w-auto animate-fade-in-up">
                        <Link
                           href="/projets"
                           className="inline-block w-full md:w-auto px-10 py-4 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-2xl"
                        >
                           Explorer mes projets
                        </Link>
                     </div>
                  </div>

                  {/* DROITE : Nom + Contact */}
                  <div className="flex-1 flex flex-col items-center md:items-start justify-center py-6 md:pl-12 text-center md:text-left">
                     <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter animate-fade-in-right">
                        Mourier
                     </h1>
                     <div className="mt-10 w-full md:w-auto animate-fade-in-up">
                        <Link
                           href="/contact"
                           className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                           Me contacter
                        </Link>
                     </div>
                  </div>
               </div>

               {/* SOUS-TITRE : Centré sous la coupure */}
               <div className="mt-16 text-center animate-fade-in">
                  <p className="text-[10px] md:text-xs font-black text-emerald-500 uppercase tracking-[0.5em] opacity-80">
                     Vision 360° ・ Développeur FullStack
                  </p>
               </div>
            </div>

            {/* Fusion avec le reste de la page */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
         </header>

         {/* MENU MOBILE OVERLAY */}
         <div
            ref={menuRef}
            className={`
               fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-2xl transition-all duration-500
               ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
         >
            <div className="flex justify-end p-8">
               <button onClick={() => setIsMenuOpen(false)} aria-label="Fermer le menu">
                  <FiX size={32} className="text-white" />
               </button>
            </div>
            <div className="h-full flex flex-col items-center justify-center -mt-20 gap-12">
               <NavLinks className="flex-col text-3xl font-black italic" onLinkClick={handleLinkClick} />
               <div className="mt-4">
                  <Cv className="bg-emerald-500 text-slate-900 border-none px-12 py-4 font-black uppercase tracking-widest text-xs" />
               </div>
            </div>
         </div>
      </>
   );
}
