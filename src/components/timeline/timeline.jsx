import { FaGlobe } from 'react-icons/fa';

export default function Timeline({ items }) {
    return (
        <div className="relative border-l-2 border-slate-700 ml-4">
            {items.map((item, index) => (
                <div key={index} className="mb-8 ml-8">
                    <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-(--color-border)"></div>
                    <div className="flex-1">
                        <time className="text-sm font-semibold text-slate-400">
                            {item.date}
                        </time>
                        <h3 className="text-xl font-bold mt-1">
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold md:hover:text-(--color-border) md:transition-colors group">
                                    <span>{item.title}</span>
                                    <FaGlobe className="text-slate-500 transition-colors md:group-hover:text-(--color-border)" size={16} />
                                </a>
                            ) : (
                                item.title
                            )}
                        </h3>

                        {item.subtitle && <p className="text-slate-300 mt-1">{item.subtitle}</p>}

                        {item.company && (
                            <p className="text-slate-300 mt-1">
                                {item.companyLink && item.companyLink !== '#' ? (
                                    <a href={item.companyLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold md:hover:text-(--color-border) md:transition-colors group">
                                        <span>{item.company}</span>
                                        <FaGlobe className="text-slate-500 group-hover:text-(--color-border)" size={14} />
                                    </a>
                                ) : (
                                    <span className="font-semibold">{item.company}</span>
                                )}
                                {item.location && <span className="text-slate-500"> ・ {item.location}</span>}
                            </p>
                        )}

                        {item.companies && (
                            <p className="text-slate-300 mt-1">
                                {item.companies.map((comp, compIndex) => (
                                    <span key={comp.name}>
                                        <a href={comp.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold md:hover:text-(--color-border) md:transition-colors group">
                                            <span>{comp.name}</span>
                                            <FaGlobe className="text-slate-500 group-hover:text-(--color-border)" size={14} />
                                        </a>
                                        {compIndex < item.companies.length - 1 && <span className="mx-1">/</span>}
                                    </span>
                                ))}
                                {item.location && <span className="text-slate-500"> ・ {item.location}</span>}
                            </p>
                        )}

                        {item.description && <p className="text-slate-400 mt-2">{item.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}
