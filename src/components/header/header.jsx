"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from "react-icons/fi";
import Cv from '../cv/cv';
import "../../app/globals.css";

function NavLinks({ className, onLinkClick, isMenuOpen }) {
   const links = [
      { href: "/", label: "Accueil" },
      { href: "/career", label: "Parcours" },
      { href: "/projects", label: "Projets" },
      { href: "/skills", label: "Compétences" },
      { href: "/contact", label: "Contact" },
   ];
   const pathname = usePathname();

   return (
      <ul className={`flex items-center gap-6 text-base font-medium ${className || ''}`}>
         {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
               <li
                  key={link.href}
                  className={isMenuOpen ? 'animate-fade-in-up' : ''}
                  style={{ animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
               >
                  <Link
                     href={link.href}
                     onClick={onLinkClick}
                     className={`
                                relative py-2 transition-colors duration-300
                                ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                                after:bg-(--color-border) after:origin-center after:transition-transform after:duration-300
                                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
                                hover:after:scale-x-100
                            `}
                  >
                     {link.label}
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}


export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isNavScrolled, setIsNavScrolled] = useState(false);
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

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 10) {
            setIsNavScrolled(true);
         } else {
            setIsNavScrolled(false);
         }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);


   const handleLinkClick = () => {
      setIsMenuOpen(false);
   };

   return (
      <>
         <div className={`
        w-full sticky top-0 z-30 transition-all duration-300
        ${isNavScrolled ? 'bg-(--color-background)/80 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent border-b border-transparent'}
      `}>
            <div className="px-4 md:px-10">
               <nav className="flex justify-end md:justify-between items-center py-4">
                  <Link
                     href="/"
                     aria-label="Retour à l'accueil"
                     className="hidden md:block relative h-12 w-28 transition-transform duration-300 hover:scale-105"
                  >
                     <Image
                        src="/logo.webp"
                        alt="Logo Mourier Matthieu"
                        fill
                        sizes="112px"
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
         </div>

         <header className="relative w-full text-white overflow-hidden -mt-[96px]">
            <div className="relative w-full h-[45vh] min-h-[400px]">
               <Image
                  src="/banniere.webp"
                  alt="Bannière de la page d'accueil"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  priority
                  className="blur-[3px] scale-105"
               />
               <div className="absolute inset-0 bg-black/60"></div>

               <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-0">
                  <div className="animate-fade-in-up">
                     <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
                        Matthieu Mourier
                     </h1>
                     <p className="mt-4 text-lg md:text-xl font-semibold text-slate-300 drop-shadow-md" style={{ animationDelay: '200ms' }}>
                        Développeur Web FullStack
                     </p>

                     <div
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up"
                        style={{ animationDelay: '400ms' }}
                     >
                        <Link
                           href="/projects"
                           className="w-full sm:w-auto px-6 py-2.5 rounded-md font-semibold bg-(--color-border) text-white md:transform md:transition-transform md:hover:scale-105"
                        >
                           Mes projets
                        </Link>
                        <Link
                           href="/contact"
                           className="w-full sm:w-auto px-6 py-2.5 rounded-md font-semibold bg-white/10 border border-white/20 backdrop-blur-sm md:transform md:transition-transform md:hover:scale-105"
                        >
                           Me contacter
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <div
            ref={menuRef}
            className={`
          fixed top-0 left-0 right-0 z-50 p-6 shadow-lg
          bg-slate-950/95 backdrop-blur-sm 
          md:transform md:transition-transform md:duration-300 md:ease-in-out
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
                  <Cv className="bg-(--color-border) text-white border-transparent md:hover:opacity-90" />
               </div>
            </div>
         </div>
      </>
   );
}
