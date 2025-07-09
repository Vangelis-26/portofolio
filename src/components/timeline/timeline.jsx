export default function Timeline({ items }) {
    return (
        <div className="relative border-l-2 border-slate-700 ml-4">
            {items.map((item, index) => (
                <div key={index} className="mb-8 ml-8">
                    <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-[--color-border]"></div>
                    <div className="flex-1">
                        <time className="text-sm font-semibold text-slate-400">
                            {item.date}
                        </time>
                        <h3 className="text-xl font-bold mt-1">
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-[--color-border] transition-colors">
                                    {item.title}
                                </a>
                            ) : (
                                item.title
                            )}
                        </h3>

                        {item.subtitle && <p className="text-slate-300 mt-1">{item.subtitle}</p>}
                        {item.company && (
                            <p className="text-slate-300 mt-1">
                                {item.companyLink ? (
                                    <a href={item.companyLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-[--color-border] transition-colors">
                                        {item.company}
                                    </a>
                                ) : (
                                    <span className="font-semibold">{item.company}</span>
                                )}
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
