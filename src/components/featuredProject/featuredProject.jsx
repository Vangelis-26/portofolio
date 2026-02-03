import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import TagIcon from '@/components/tagIcons/tagIcons';

export default function FeaturedProject({ project }) {
   return (
      <div className="relative group">
         <div className="absolute -top-3 left-8 z-10 bg-emerald-600 text-white px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-xl">
            Projet Majeur
         </div>

         <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 lg:p-12 transition-all hover:border-emerald-500/30">
            <div className="lg:col-span-7 relative h-[300px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/5 order-2 lg:order-1 bg-slate-950">
               <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-8 order-1 lg:order-2">
               <div>
                  <h3 className="text-4xl lg:text-6xl font-black text-white italic tracking-tighter mb-4">{project.title}</h3>
                  <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">{project.type}</p>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">{project.description}</p>
               </div>

               <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                     <span key={tag} className="flex items-center gap-2 text-[10px] bg-slate-800/40 px-3 py-2 rounded text-slate-300 border border-slate-700/50 uppercase font-bold">
                        <TagIcon tagName={tag} /> {tag}
                     </span>
                  ))}
               </div>

               <div className="flex flex-col gap-5 pt-4">
                  <Link href={`/projets/${project.slug}`} className="flex items-center justify-center gap-4 bg-white text-slate-900 py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all group/btn shadow-2xl shadow-emerald-500/10">
                     Analyse du projet & Architecture
                     <FiArrowRight className="transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                  <div className="flex justify-center lg:justify-start gap-10">
                     {project.links.live !== '#' && <a href={project.links.live} target="_blank" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"><FaExternalLinkAlt size={12} /> Live</a>}
                     {project.links.github !== '#' && <a href={project.links.github} target="_blank" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"><FaGithub size={14} /> Code</a>}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
