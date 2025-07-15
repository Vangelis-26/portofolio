import Link from 'next/link';

export default function NavLinks({ className }) {
    const links = [
        { href: "/", label: "Accueil" },
        { href: "/career", label: "Parcours" },
        { href: "/projects", label: "Projets" },
        { href: "/competences", label: "Compétences" },
        { href: "/contact", label: "Contact" },
    ];

    const finalClasses = `items-center gap-4 text-sm font-bold ${className || ''}`;

    return (
        <ul className={finalClasses}>
            {links.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className="relative inline-block px-3 py-2 text-slate-200 drop-shadow-sm transform transition-all duration-300 ease-in-out hover:bg-(--color-border)/10 hover:text-white hover:-translate-y-0.5 rounded-md"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
