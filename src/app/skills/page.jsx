// app/skills/page.jsx
import TagIcon from '@/components/tagIcons/tagIcons';
import { FiUsers, FiSettings, FiBarChart2, FiShield, FiClock } from 'react-icons/fi';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';

const proSkills = [
   {
      icon: <FiBarChart2 />,
      title: "Gestion de Projet & Sprint Intensif",
      description: "Pilotage complet du cycle de vie logiciel. Capacité à livrer un projet complexe (Meeple & Milestones) en un sprint de 110h, du backlog au déploiement."
   },
   {
      icon: <FiUsers />,
      title: "Communication & Relation Client",
      description: "Expertise en vulgarisation technique. Traduction des besoins business en spécifications fonctionnelles et techniques claires (User Stories, Kanban)."
   },
   {
      icon: <FiSettings />,
      title: "Optimisation & Data-Visualisation",
      description: "Analyse des performances (Lighthouse) et transformation de données complexes en tableaux de bord interactifs via Recharts."
   },
   {
      icon: <FiShield />,
      title: "Sécurité & Privacy-First",
      description: "Mise en œuvre de politiques Row Level Security (RLS) sur Supabase et respect des standards d'accessibilité WCAG."
   },
];

// ATTENTION : Les noms ici doivent correspondre exactement aux 'case' de ton TagIcon
const techSkills = [
   "React 18", "Next.js", "JavaScript", "Supabase", "Framer Motion", "Recharts",
   "Tailwind CSS", "Sass", "Node.js", "Express", "MongoDB",
   "Figma", "Vite", "Git & GitHub", "SEO", "Performance",
];

export default function CompetencesPage() {
   return (
      <div className="container mx-auto px-4 py-16">

         <FadeInScroll>
            <section className="text-center mb-16">
               <h1 className="text-4xl md:text-5xl font-bold">La Vision 360° au service du Code</h1>
               <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
                  Ancien Chef de Projet, j'aborde le développement avec une vision produit : chaque ligne de code doit servir l'expérience utilisateur et la sécurité des données.
               </p>

               {/* Badge de vélocité : Preuve de ton engagement sur Meeple & Milestones */}
               <div className="mt-8 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full text-emerald-400 text-sm font-medium">
                  <FiClock className="animate-pulse" />
                  <span>Sprint récent : +110 heures de développement intensif</span>
               </div>
            </section>
         </FadeInScroll>

         <div className="space-y-20">

            <FadeInScroll>
               <section className="select-none max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-500 uppercase tracking-widest mb-10 text-center">Atouts Stratégiques</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {proSkills.map(skill => (
                        <div key={skill.title} className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg flex items-start gap-4 h-full md:transform md:transition-all md:duration-300 md:ease-in-out md:hover:bg-slate-800 md:hover:-translate-y-1 md:hover:border-emerald-500/50">
                           <div className="text-3xl text-emerald-500 mt-1">{skill.icon}</div>
                           <div>
                              <h4 className="font-bold text-lg text-white">{skill.title}</h4>
                              <p className="text-slate-400 text-sm mt-1 leading-relaxed">{skill.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>
            </FadeInScroll>

            <FadeInScroll>
               <section className="select-none max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-500 uppercase tracking-widest mb-10 text-center">Ma Boîte à Outils Technique</h2>
                  <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                     {techSkills.map(skillName => (
                        <div
                           key={skillName}
                           className="w-36 h-36 flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700 md:transform md:transition-all md:duration-300 md:ease-in-out md:hover:bg-slate-800 md:hover:-translate-y-1 md:hover:border-emerald-500/50"
                        >
                           <div className="text-4xl text-slate-200">
                              <TagIcon tagName={skillName} />
                           </div>
                           <span className="text-xs font-semibold text-center text-slate-300">{skillName}</span>
                        </div>
                     ))}
                  </div>
               </section>
            </FadeInScroll>

         </div>
      </div>
   );
}
