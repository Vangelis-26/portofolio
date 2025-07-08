"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "@/app/globals.css";

export default function NavLinks() {

    const pathname = usePathname();

    return (
        <nav>
            <ul className="flex justify-end gap-4 px-2">
                <li>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/formations" className={pathname === "/formations" ? "active" : ""}>
                        Formations
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>
                        Projets
                    </Link>
                </li>
                <li>
                    <Link href="/skills" className={pathname === "/skills" ? "active" : ""}>
                        Compétences
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
