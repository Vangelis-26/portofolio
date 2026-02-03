import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import TagIcon from '@/components/tagIcons/tagIcons';

export default function FeaturedProject({ project }) {
   const hasLive = project.links.live && project.links.live !== '#';
   const hasGithub = project.links.github && project.links.github !== '#';

   return (
      <div className="relative group">
         <div className="absolute -top-3 left-6 z-10 bg-emerald-600 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-xl">
            Projet Majeur
         </div>

         <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 lg:p-10">
            <div className="lg:col-span-7 relative h-[300px] lg:h-[450px] rounded-xl overflow-hidden border border-white/5 order-2 lg:order-1 bg-slate-900">
               <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-1 lg:order-2">
               <div>
                  <h3 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter mb-2">{project.title}</h3>
                  <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{project.type}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.description}</p>
               </div>

               <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                     <span key={tag} className="flex items-center gap-1.5 text-[10px] bg-slate-800/50 px-3 py-1.5 rounded text-slate-300 border border-slate-700/50">
                        <TagIcon tagName={tag} /> {tag}
                     </span>
                  ))}
               </div>

               <div className="flex flex-col gap-4 pt-2">
                  <Link href={`/projets/${project.slug}`} className="flex items-center justify-center gap-3 bg-white text-slate-900 py-4 rounded font-black uppercase text-[10px] tracking-widest hover:bg-emerald-500 hover:text-white transition-all group/btn shadow-2xl">
                     Analyse du projet & Architecture
                     <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <div className="flex justify-center lg:justify-start gap-8">
                     {hasLive && (
                        <a href={project.links.live} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                           <FaExternalLinkAlt size={12} /> Live Demo
                        </a>
                     )}
                     {hasGithub && (
                        <a href={project.links.github} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                           <FaGithub size={14} /> Code Source
                        </a>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
