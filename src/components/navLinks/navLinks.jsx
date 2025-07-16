"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // On importe le hook

export default function NavLinks({ className, onLinkClick, isMenuOpen }) {
    const links = [
        { href: "/", label: "Accueil" },
        { href: "/career", label: "Parcours" },
        { href: "/projects", label: "Projets" },
        { href: "/skills", label: "Compétences" },
        { href: "/contact", label: "Contact" },
    ];

    const pathname = usePathname();

    return (
        <ul className={`flex items-center gap-4 text-sm font-bold ${className || ''}`}>
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
                                relative inline-block px-4 py-2
                                transition-all duration-300 ease-in-out
                                rounded-full
                                ${isActive
                                    ? 'bg-(--color-border)/80 text-white'
                                    : 'text-slate-300 hover:text-white'
                                }
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
