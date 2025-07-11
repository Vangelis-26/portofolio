import NavLinks from "../navLinks/navLinks";
import Image from "next/image";
import "../../app/globals.css";

export default function Header() {
  return (
    <header className="relative w-full h-64 md:h-80 text-white">
      <Image
        src="/banniere.webp"
        alt="Bannière de la page d'accueil"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col h-full p-4 md:p-6">
        <nav className="flex justify-end items-center">
          <NavLinks />
        </nav>

        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
              Mourier Matthieu
            </h1>
            <p
              className="mt-3 text-base uppercase tracking-widest text-slate-300 drop-shadow-sm"
              style={{ animationDelay: '200ms' }}
            >
              Développeur Web FullStack
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
