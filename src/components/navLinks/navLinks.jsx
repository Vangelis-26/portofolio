"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ className, onLinkClick, isMenuOpen, variant = 'header' }) {
   const links = [
      { href: "/", label: "Accueil" },
      { href: "/career", label: "Parcours" },
      { href: "/projets", label: "Projets" },
      { href: "/skills", label: "Compétences" },
      { href: "/contact", label: "Contact" },
   ];
   const pathname = usePathname();

   const baseLinkStyle = "py-2 transition-colors duration-300";

   const headerLinkStyle = `
        relative after:absolute after:left-0 after:bottom-0 after:h-[2px] 
        after:w-full after:bg-(--color-border) after:origin-center 
        md:after:transition-transform after:duration-300
    `;

   return (
      <ul className={`flex items-center gap-6 text-base font-medium ${className || ''}`}>
         {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
               <li
                  key={link.href}
                  className={isMenuOpen ? 'md:animate-fade-in-up' : ''}
                  style={{ animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
               >
                  <Link
                     href={link.href}
                     onClick={onLinkClick}
                     className={`
                                ${baseLinkStyle}
                                ${variant === 'header' ? headerLinkStyle : ''}
                                ${isActive ? 'text-white' : 'text-slate-400 md:hover:text-white'}
                                ${variant === 'header' && !isActive ? 'after:scale-x-0' : ''}
                                ${variant === 'header' && isActive ? 'after:scale-x-100' : ''}
                                ${variant === 'header' ? 'md:hover:after:scale-x-100' : ''}
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
