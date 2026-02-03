import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TagIcon from '@/components/tagIcons/tagIcons';

export default function FeaturedProject({ project }) {
   return (
      <div className="relative group mb-20">
         {/* Badge Projet Phare */}
         <div className="absolute -top-4 left-4 z-10 bg-(--color-border) text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Projet Phare
         </div>

         <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 lg:p-10 overflow-hidden">
            {/* Décoration de fond (Glow effect) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-(--color-border)/10 rounded-full blur-3xl group-hover:bg-(--color-border)/20 transition-colors duration-500"></div>

            {/* Côté Image */}
            <div className="lg:col-span-7 relative h-[300px] lg:h-[450px] w-full rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
               <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>

            {/* Côté Contenu (Storytelling) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-1 lg:order-2">
               <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">
                     {project.title}
                  </h3>
                  <p className="text-(--color-border) font-medium italic mb-4">{project.type}</p>
                  <p className="text-slate-300 leading-relaxed">
                     {project.description}
                  </p>
               </div>

               {/* Points Forts - La vision PM */}
               <div className="space-y-4 border-l-2 border-slate-800 pl-4 py-2">
                  <div>
                     <span className="text-xs font-bold text-slate-500 uppercase">Le Défi :</span>
                     <p className="text-sm text-slate-400">{project.challenge}</p>
                  </div>
                  <div>
                     <span className="text-xs font-bold text-slate-500 uppercase">Expertise technique :</span>
                     <p className="text-sm text-slate-400">{project.solution}</p>
                  </div>
               </div>

               <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                     <span key={tag} className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-3 py-1.5 rounded-md text-slate-300 border border-slate-700">
                        <TagIcon tagName={tag} /> {tag}
                     </span>
                  ))}
               </div>

               <div className="flex gap-6 pt-4">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-(--color-border) hover:text-white transition-all duration-300 shadow-xl">
                     <FaExternalLinkAlt /> Voir le Live
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-3 font-medium">
                     <FaGithub size={20} /> Code source
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
