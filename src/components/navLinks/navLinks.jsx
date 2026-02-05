"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ className, onLinkClick, variant = 'header' }) {
   const links = [
      { href: "/", label: "Accueil" },
      { href: "/career", label: "Parcours" },
      { href: "/projets", label: "Projets" },
      { href: "/skills", label: "Compétences" },
      { href: "/contact", label: "Contact" },
   ];
   const pathname = usePathname();

   return (
      <ul className={`flex items-center gap-8 ${className || ''}`}>
         {links.map((link) => {
            const isActive = pathname === link.href;
            return (
               <li key={link.href} className="relative group">
                  <Link
                     href={link.href}
                     onClick={onLinkClick}
                     className={`
                        block py-2 text-sm font-semibold tracking-wide transition-all duration-300
                        ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                     `}
                  >
                     {link.label}

                     {/* Ligne laser émeraude pour l'état actif ou hover */}
                     <span className={`
                        absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-(--color-border) to-transparent
                        transition-all duration-500 ease-out
                        ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                     `}></span>

                     {/* Halo subtil sous le texte actif */}
                     {isActive && (
                        <span className="absolute inset-x-0 -bottom-2 h-4 bg-(--color-border)/10 blur-lg rounded-full"></span>
                     )}
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}
