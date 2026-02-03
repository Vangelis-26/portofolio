import { FaUsers, FaTasks, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import FadeinScroll from "@/components/fadeInScroll/fadeInScroll";

const strengths = [
   {
      icon: <FaUsers />,
      title: "Vision Business & Client",
      description:
         "15 ans d'expertise en relation client me permettent de comprendre vos enjeux métiers avant même de taper la première ligne de code.",
   },
   {
      icon: <FaTasks />,
      title: "Rigueur Opérationnelle",
      description:
         "Ancien Chef de Projet, je maîtrise le cycle de vie logiciel, de la planification Agile au respect strict des deadlines.",
   },
   {
      icon: <FaHandshake />,
      title: "Traducteur Technique",
      description:
         "Je fais le pont entre vos besoins stratégiques et la réalité technique, garantissant des solutions web pérennes et évolutives.",
   },
];

export default function Intro() {
   return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center">
         <FadeinScroll>
            <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-5xl">
               <div className="flex justify-center mb-8">
                  <div className="relative group">
                     {/* Cercle décoratif animé derrière la photo */}
                     <div className="absolute -inset-4 bg-(--color-border)/20 rounded-full blur-2xl group-hover:bg-(--color-border)/40 transition-all duration-500"></div>

                     <div className="relative w-32 md:w-44 aspect-[903/1368] overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10 group-hover:border-(--color-border)/50 transition-colors">
                        <Image
                           src="/photo.webp"
                           alt="Photo de Matthieu Mourier"
                           width={903}
                           height={1368}
                           priority
                           className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                     </div>
                  </div>
               </div>

               <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                     <span className="block">Matthieu Mourier</span>
                     <span className="block text-transparent bg-gradient-to-r from-(--color-border) to-emerald-200 bg-clip-text">
                        Vision 360° & Code
                     </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-medium">
                     Je fusionne la rigueur du <span className="text-white font-bold">Chef de Projet</span> et la créativité du <span className="text-(--color-border) font-bold">Développeur FullStack</span> pour bâtir des applications web à haute valeur ajoutée.
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
