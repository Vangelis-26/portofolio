import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import TagIcon from '@/components/tagIcons/tagIcons';

export default function ProjectCard({ slug, type, title, description, image, tags, duration, links, onImageClick }) {
   const hasLive = links.live && links.live !== '#';
   const hasGithub = links.github && links.github !== '#';

   return (
      <div className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-lg h-full transition-all hover:border-emerald-500/50">
         <button onClick={onImageClick} className="relative h-48 w-full overflow-hidden rounded-t-lg bg-slate-900">
            <Image src={image} alt={title} fill className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
         </button>

         <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-500 mb-4">
               <span className="border border-slate-800 px-2 py-0.5 rounded">{type}</span>
               {duration && <span className="flex items-center gap-1"><FiClock />{duration}</span>}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
               <Link href={`/projets/${slug}`} className="hover:text-emerald-400 transition-colors">
                  {title}
               </Link>
            </h3>

            <p className="text-slate-400 text-xs leading-relaxed flex-grow line-clamp-3 mb-6">{description}</p>

            <Link href={`/projets/${slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-all group/link">
               Vue d'ensemble <FiArrowRight className="transition-transform group-hover/link:translate-x-1" />
            </Link>
         </div>

         <div className="border-t border-slate-800/50 p-4 flex justify-end gap-5 bg-slate-900/20">
            {hasGithub && (
               <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <FaGithub size={18} />
               </a>
            )}
            {hasLive && (
               <a href={links.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <FaGlobe size={18} />
               </a>
            )}
         </div>
      </div>
   );
}
