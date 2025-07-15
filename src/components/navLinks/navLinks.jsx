// Fichier /components/navLinks/navLinks.jsx

import Link from 'next/link';

export default function NavLinks({ className, onLinkClick, isMenuOpen }) {
    const links = [
        { href: "/", label: "Accueil" },
        { href: "/career", label: "Parcours" },
        { href: "/projects", label: "Projets" },
        { href: "/competences", label: "Compétences" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <ul className={`flex ${className || ''}`}>
            {links.map((link, index) => (
                <li
                    key={link.href}
                    // On applique l'animation uniquement si isMenuOpen est true
                    className={isMenuOpen ? 'animate-fade-in-up' : ''}
                    // On applique un délai différent pour chaque lien
                    style={{ animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
                >
                    <Link
                        href={link.href}
                        onClick={onLinkClick}
                        className="
              relative inline-block px-3 py-2
              text-slate-200 drop-shadow-sm
              transform transition-all duration-300 ease-in-out
              hover:bg-[--color-border]/10 hover:text-white hover:-translate-y-0.5 rounded-md
            "
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
