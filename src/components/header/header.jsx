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

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="p-4">
          <NavLinks />
        </div>

        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Mourier Matthieu</h1>
          <p className="mt-2 text-lg">Développeur Web FullStack</p>
        </div>
      </div>

    </header>
  );
}
