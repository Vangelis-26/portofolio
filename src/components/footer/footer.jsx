import NavLinks from "../navLinks/navLinks";
import "../../app/globals.css";

export default function Footer() {
    return (
        <footer className="w-full bg-stone-800 p-3 text-xs">
            <div className="flex flex-col items-center">
                <NavLinks />
                <p className="p-2">Copyright © 2025 Mourier Matthieu. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
