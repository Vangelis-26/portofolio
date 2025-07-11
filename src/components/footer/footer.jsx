import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NavLinks from "../navLinks/navLinks";
import "../../app/globals.css";

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-800 text-slate-400 mt-20">
            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">

                    <div className="md:flex-1">
                        <h3 className="font-bold text-lg text-white">Mourier Matthieu</h3>
                        <p className="text-sm mt-1">Développeur web passionné par les solutions modernes.</p>
                    </div>

                    <div className="md:flex-1 flex justify-center">
                        <NavLinks />
                    </div>

                    <div className="md:flex-1 flex justify-center md:justify-end">
                        <div className="flex gap-4">
                            <a href="https://github.com/votre-profil" target="https://github.com/Vangelis-26" rel="noreferrer" aria-label="GitHub" className="hover:text-[--color-border] transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/votre-profil" target="https://www.linkedin.com/in/matthieu-mourier-77a5ba182/" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[--color-border] transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs">
                    <p>© {new Date().getFullYear()} Mourier Matthieu. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
