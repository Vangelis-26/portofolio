import ProjectGrid from '@/components/projectGrid/projectGrid';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';
import { projectsData } from '@/data/data';

export default function ProjectsPage() {
   return (
      <div className="container mx-auto px-4 py-16 md:py-24">
         <FadeInScroll>
            <section className="text-center mb-16">
               <h1 className="text-4xl md:text-5xl font-bold">Mes Projets</h1>
               <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                  Voici une sélection de projets qui démontrent mes compétences et mon savoir-faire.
               </p>
            </section>
         </FadeInScroll>

         <ProjectGrid projects={projectsData} />
      </div>
   );
}
