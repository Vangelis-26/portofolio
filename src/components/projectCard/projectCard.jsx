import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import TagIcon from '@/components/tagIcons/tagIcons';

export default function ProjectCard({ type, title, description, image, tags, duration, links }) {
    return (
        <div className="
            relative group flex flex-col bg-slate-900/50 border border-slate-800
            rounded-lg h-full transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:-translate-y-1 hover:border-transparent
            hover:ring-2 hover:ring-(--color-border)
        ">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                    src={image}
                    alt={`Image du projet ${title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                    <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-md">{type}</span>
                    {duration && <span className="flex items-center gap-1"><FiClock />{duration}</span>}
                </div>

                <h3 className="text-xl font-bold text-white">
                    <Link
                        href={(links.live && links.live !== '#') ? links.live : (links.github || '#')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="static after:absolute after:inset-0"
                        aria-label={`Voir le projet ${title}`}
                    >
                        <span className="relative z-20">{title}</span>
                    </Link>
                </h3>

                <p className="mt-2 text-slate-400 text-sm flex-grow">{description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="
                                flex items-center justify-center gap-2
                                text-xs font-medium px-3 py-1 rounded-full
                                bg-slate-800 border border-slate-700 text-slate-300
                            "
                        >
                            <TagIcon tagName={tag} />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 border-t border-slate-800 mt-4 p-4 flex justify-end gap-4 bg-slate-900/50 rounded-b-lg">
                {links.github && links.github !== '#' && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <FaGithub /><span>Code</span>
                    </a>
                )}
                {links.live && links.live !== '#' && (
                    <a href={links.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <FaGlobe /><span>Live</span>
                    </a>
                )}
            </div>
        </div>
    );
}
