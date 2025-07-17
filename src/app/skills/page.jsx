// Les imports sont conservés tels que vous les utilisez
import TagIcon from '@/components/tagIcons/tagIcons';
import { FiUsers, FiSettings, FiBarChart2, FiShield } from 'react-icons/fi';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';

const proSkills = [
    { icon: <FiBarChart2 />, title: "Gestion de Projet & Méthode Agile", description: "Planification, découpage des fonctionnalités en tâches, et suivi de l'avancement via des outils comme Notion." },
    { icon: <FiUsers />, title: "Communication & Relation Client", description: "Capacité à vulgariser des concepts techniques et à traduire les besoins business en spécifications fonctionnelles claires." },
    { icon: <FiSettings />, title: "Optimisation & Résolution de problèmes", description: "Analyse des performances (Lighthouse), débugging d'applications existantes et recherche de solutions pragmatiques." },
    { icon: <FiShield />, title: "Sécurité & Accessibilité", description: "Connaissance des bonnes pratiques pour la sécurisation des données et l'accessibilité web." },
];

const techSkills = [
    "React", "Next.js", "JavaScript", "Visual Studio Code", "HTML5", "CSS3",
    "Sass", "Tailwind CSS", "Node.js", "Express", "MongoDB",
    "Git & GitHub", "Vite", "Figma", "SEO", "Performance",
];

export default function CompetencesPage() {
    return (
        <div className="container mx-auto px-4 py-16">

            <FadeInScroll>
                <section className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold">Ma Double Compétence</h1>
                    <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
                        Je ne me contente pas d'écrire du code. Je conçois des solutions digitales robustes en m'appuyant sur une solide expérience de la gestion de projet et de la relation client.
                    </p>
                </section>
            </FadeInScroll>

            <div className="space-y-16">

                <FadeInScroll>
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Mes Atouts Stratégiques</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {proSkills.map(skill => (
                                <div key={skill.title} className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg flex items-start gap-4 h-full md:transform md:transition-all md:duration-300 md:ease-in-out md:hover:bg-slate-800 md:hover:-translate-y-1 md:hover:border-(--color-border)/50">
                                    <div className="text-3xl text-(--color-border) mt-1">{skill.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">{skill.title}</h4>
                                        <p className="text-slate-400 text-sm mt-1">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInScroll>

                <FadeInScroll>
                    <section className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Ma Boîte à Outils Technique</h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                            {techSkills.map(skillName => (
                                <div
                                    key={skillName}
                                    className="w-36 h-36 flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700 md:transform md:transition-all md:duration-300 md:ease-in-out md:hover:bg-slate-800 md:hover:-translate-y-1 md:hover:border-(--color-border)/50"
                                >
                                    <div className="text-4xl text-slate-200">
                                        <TagIcon tagName={skillName} />
                                    </div>
                                    <span className="text-sm font-semibold text-center text-slate-300">{skillName}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInScroll>

            </div>
        </div>
    );
}
