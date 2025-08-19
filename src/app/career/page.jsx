import Formations from "@/components/formations/formations";
import Experiences from "@/components/experiences/experiences";
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';

export default function CareerPage() {
   return (
      <div className="container mx-auto px-4 py-16 md:py-24">

         <FadeInScroll>
            <section className="text-center">
               <h1 className="text-4xl md:text-5xl font-bold">Mon Parcours</h1>
               <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                  De la gestion de projet à la programmation, découvrez le parcours qui a forgé ma double compétence, technique et commerciale.
               </p>
            </section>
         </FadeInScroll>

         <div className="mt-16 space-y-16">

            <FadeInScroll>
               <div className="w-full max-w-4xl mx-auto">
                  <Formations />
               </div>
            </FadeInScroll>
            <div className="w-full max-w-4xl mx-auto">
               <Experiences />
            </div>

         </div>

      </div>
   );
}
