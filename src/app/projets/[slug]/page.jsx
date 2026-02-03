import { projectsData } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import TagIcon from "@/components/tagIcons/tagIcons";
import { FaGithub, FaGlobe, FaChevronLeft, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import Link from "next/link";

export async function generateStaticParams() {
   return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
   const { slug } = await params;
   const project = projectsData.find((p) => p.slug === slug);

   if (!project) notFound();

   return (
      <div className="container mx-auto px-4 py-16 max-w-6xl">
         <Link href="/#projets" className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-all mb-12 group text-xs font-bold uppercase tracking-widest">
            <FaChevronLeft className="group-hover:-translate-x-1" /> Retour au portfolio
         </Link>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Colonne Principale (Technique) */}
            <div className="lg:col-span-8 space-y-16">
               <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-3xl bg-slate-900">
                  <Image src={project.image} alt={project.title} fill className="object-cover" priority />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section>
                     <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-6">Le Challenge</h2>
                     <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
                  </section>
                  <section>
                     <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-6">La Réalisation</h2>
                     <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                  </section>
               </div>

               {project.features && (
                  <section className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl">
                     <h2 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                        <FaLightbulb className="text-emerald-500" /> Spécifications Techniques
                     </h2>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                           <li key={index} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                              <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                              {feature}
                           </li>
                        ))}
                     </ul>
                  </section>
               )}
            </div>

            {/* Barre Latérale (Métadonnées & Liens) */}
            <aside className="lg:col-span-4 space-y-8">
               <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Architecture & Stack</h3>
                  <div className="flex flex-wrap gap-2 mb-10">
                     {project.tags.map(tag => (
                        <div key={tag} className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg text-xs border border-slate-700 text-slate-300">
                           <TagIcon tagName={tag} /> {tag}
                        </div>
                     ))}
                  </div>

                  {project.methodology && (
                     <div className="mb-10 pb-10 border-b border-slate-800">
                        <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-4">Méthodologie PM</h4>
                        <p className="text-xs text-slate-400 leading-relaxed italic">{project.methodology}</p>
                     </div>
                  )}

                  <div className="space-y-4">
                     {project.links.live !== '#' && (
                        <a href={project.links.live} target="_blank" className="flex items-center justify-center gap-3 w-full bg-white text-slate-900 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                           <FaGlobe /> Accéder au Live
                        </a>
                     )}
                     {project.links.github !== '#' && (
                        <a href={project.links.github} target="_blank" className="flex items-center justify-center gap-3 w-full bg-slate-800 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-700 transition-all">
                           <FaGithub /> Consulter le Code
                        </a>
                     )}
                  </div>

                  <p className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest text-center font-bold">Investissement : {project.duration}</p>
               </div>
            </aside>
         </div>
      </div>
   );
}
