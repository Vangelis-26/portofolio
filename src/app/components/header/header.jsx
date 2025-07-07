import Link from "next/link";
import Image from "next/image";
import Banniere from "../../../../public/banniere.webp";
import "../../globals.css";



export default function Header() {
  return (
    <header className="w-full">
      <nav>
        <ul className="flex justify-end gap-4 p-2 bg-stone-700">
          <li>
            <Link href="/">Accueil</Link>
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
      </nav>
      <div className="">
        <Image
          src={Banniere}
          alt="Image d'acceuil"
          style={{ width: "100%", height: "auto", borderRadius: "2.5rem", padding: "1.5rem" }}
        />
      </div>
    </header>
  );
}
