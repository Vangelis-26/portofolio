
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="m-auto">
            <nav>
                <ul className="flex row gap-4 p-4 bg">
                    <li>
                        <Link href="">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/about">À propos</Link>
                    </li>
                    <li>
                        <Link href="/formations">Formations</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projets</Link>
                    </li>
                    <li>
                        <Link href="/skills">Compétences</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <p className="text-center">
                    Copyright © 2025 Mourier Matthieu. Tous droits réservés.
                </p>
            </nav>
        </footer>
    );
}
