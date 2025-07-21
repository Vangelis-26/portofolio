import { FaUsers, FaTasks, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import FadeinScroll from "@/components/fadeInScroll/fadeInScroll";
const strengths = [
   {
      icon: <FaUsers />,
      title: "Expérience Client & Commerciale",
      description:
         "Plus de quinze ans au cœur de secteurs dynamiques m'ont permis de cultiver un sens aigu de la relation client, de la gestion d'actions commerciales au déploiement de projets d'envergure.",
   },
   {
      icon: <FaTasks />,
      title: "Pilotage & Coordination",
      description:
         "Ma capacité à piloter des affaires complexes, optimiser des plannings et coordonner des équipes est un atout majeur pour garantir le succès et le respect des délais de chaque projet web.",
   },
   {
      icon: <FaHandshake />,
      title: "Pont entre Technique et Stratégie",
      description:
         "Je traduis avec finesse les besoins d'un client en spécifications fonctionnelles claires. Mon ambition est d'allier la rigueur du code à une compréhension profonde des enjeux humains et commerciaux.",
   },
];

export default function Intro() {
   return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center">
         <FadeinScroll>
            <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-5xl">
               <div className="flex justify-center mb-8">
                  <div className="relative">
                     <div className="absolute -inset-1.5 bg-(--color-border)/20 rounded-2xl blur-xl"></div>
                     <div className="relative w-32 md:w-40 aspect-[903/1368] overflow-hidden rounded-xl shadow-lg">
                        <Image
                           src="/photo.webp"
                           alt="Photo de Matthieu Mourier"
                           width={903}
                           height={1368}
                           priority
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>

               {/* Content Section */}
               <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                     <span className="block">Développeur Web</span>
                     <span className="block text-transparent bg-gradient-to-r from-(--color-border) to-slate-400 bg-clip-text">
                        avec une vision 360°
                     </span>
                  </h1>{" "}
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                     Fort de plus de 15 ans d'expérience en gestion de projet et
                     relation client, je conçois et développe des solutions web
                     innovantes qui transforment vos idées en succès concrets.
                  </p>
               </div>
            </section>
         </FadeinScroll>

         <FadeinScroll>
            <section className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
               {strengths.map((strength) => (
                  <div
                     key={strength.title}
                     className="select-none bg-slate-900/50 border border-slate-800 p-6 rounded-lg text-left md:transform md:transition-all md:duration-300 md:ease-in-out md:hover:scale-105 md:hover:-translate-y-1 md:hover:border-(--color-border)/50"
                  >
                     <div className="text-(--color-border) text-3xl mb-4">
                        {strength.icon}
                     </div>
                     <h3 className="text-xl font-bold">{strength.title}</h3>
                     <p className="mt-2 text-slate-400">{strength.description}</p>
                  </div>
               ))}
            </section>
         </FadeinScroll>

      </div>
   );
}
