import { projectsData } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import TagIcon from '@/components/tagIcons/tagIcons';

export async function generateStaticParams() {
   return projectsData.map((project) => ({
      slug: project.slug,
   }));
}

export default function ProjectDetailPage({ params }) {
   const project = projectsData.find((p) => p.slug === params.slug);

   if (!project) {
      return <div>Projet non trouvé</div>;
   }

   return (
      <div className="container mx-auto px-4 py-16">
         {/* Bouton de retour */}
         <Link href="/projets" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            <FiArrowLeft />
            Retour aux projets
         </Link>

         {/* Bannière du projet */}
         <section className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
            <Image src={project.image} alt={`Bannière du projet ${project.title}`} fill style={{ objectFit: 'cover' }} className="blur-sm" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
               <h1 className="text-4xl md:text-5xl font-bold text-white text-center">{project.title}</h1>
            </div>
         </section>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

               {/* Section "Le Défi" */}
               <section>
                  <h2 className="text-3xl font-bold mb-4">Le Défi</h2>
                  <p className="text-slate-400 leading-relaxed">{project.challenge}</p>
               </section>

               {/* Section "Compétences mises en pratique" */}
               <section>
                  <h2 className="text-3xl font-bold mb-4">Compétences mises en pratique</h2>
                  <div className="flex flex-wrap gap-3">
                     {project.acquiredSkills.map(skill => (
                        <div key={skill} className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 font-medium px-4 py-2 rounded-lg">
                           <div className="h-5 w-5 text-(--color-border)"><TagIcon tagName={skill} /></div>
                           <span className="text-sm text-slate-300">{skill}</span>
                        </div>
                     ))}
                  </div>
               </section>

               {/* Section "Ma Solution" */}
               <section>
                  <h2 className="text-3xl font-bold mb-4">Ma Solution</h2>
                  <p className="text-slate-400 leading-relaxed">{project.solution}</p>
               </section>

               {/* Section "Galerie" */}
               {project.gallery && project.gallery.length > 0 && (
                  <section>
                     <h2 className="text-3xl font-bold mb-4">Galerie du Projet</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.gallery.map((img, index) => (
                           <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                              <Image src={img} alt={`Capture d'écran ${index + 1} du projet ${project.title}`} fill style={{ objectFit: 'cover' }} />
                           </div>
                        ))}
                     </div>
                  </section>
               )}

            </div>

            {/* Colonne latérale (Sidebar) */}
            <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                        <span key={tag} className="flex items-center justify-center gap-2 bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-md">
                           <TagIcon tagName={tag} />
                           {tag}</span>
                     ))}
                  </div>
               </div>
               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Liens</h3>
                  <div className="flex flex-col gap-4">
                     <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-(--color-border) transition-colors">
                        <FaGithub /> Dépôt GitHub
                     </a>
                     <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-(--color-border) transition-colors">
                        <FaGlobe /> Voir le site
                     </a>
                  </div>
               </div>
            </aside>
         </div>
      </div>
   );
}
