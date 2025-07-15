import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

export default function ProjectCard({ type, title, description, image, tags, duration, links }) {
    return (
        <div className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-lg transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-[--color-border]/20">

            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <a href={links.live || links.github || '#'} target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet ${title}`}>
                    <Image
                        src={image}
                        alt={`Image du projet ${title}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </a>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                    <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-md">{type}</span>
                    {duration && <span className="flex items-center gap-1"><FiClock />{duration}</span>}
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-slate-400 text-sm flex-grow">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-800 border border-slate-700 text-[--color-border] font-medium px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="border-t border-slate-800 mt-4 p-4 flex justify-end gap-4">
                {links.github && links.github !== '#' && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <FaGithub /><span>Code</span>
                    </a>
                )}
                {links.live && links.live !== '#' && (
                    <a href={links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <FaGlobe /><span>Live</span>
                    </a>
                )}
            </div>
        </div>
    );
}
