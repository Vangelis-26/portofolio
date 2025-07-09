import NavLinks from "../navLinks/navLinks";
import Image from "next/image";
import Banniere from "../../../public/banniere.webp";
import "../../app/globals.css";



export default function Header() {
  return (
    <header className="w-full bg-stone-800 p-4 text-sm">
      <div>
        <NavLinks />
        <Image
          src={Banniere}
          alt="Image d'acceuil"
          style={{ width: "100%", height: "auto", borderRadius: "2.5rem", padding: "1rem 0" }}
          priority
        />
      </div>
    </header>
  );
}
