import { projectsData } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import TagIcon from "@/components/tagIcons/tagIcons";
import { FaGithub, FaGlobe, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export async function generateStaticParams() {
   return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
   // Correction cruciale pour Next.js 15 : params doit être attendu
   const { slug } = await params;
   const project = projectsData.find((p) => p.slug === slug);

   if (!project) notFound();

   const hasLive = project.links.live && project.links.live !== '#';
   const hasGithub = project.links.github && project.links.github !== '#';

   return (
      <div className="container mx-auto px-4 py-12 max-w-5xl">
         <Link href="/#projets" className="flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-all mb-8 group">
            <FaChevronLeft className="group-hover:-translate-x-1" /> Retour aux projets
         </Link>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                  <Image src={project.image} alt={project.title} fill className="object-cover" priority />
               </div>

               <section>
                  <h2 className="text-2xl font-bold border-l-4 border-emerald-500 pl-4 mb-4 text-white uppercase tracking-wider">Le Challenge</h2>
                  <p className="text-slate-300 text-lg leading-relaxed">{project.challenge}</p>
               </section>

               <section>
                  <h2 className="text-2xl font-bold border-l-4 border-emerald-500 pl-4 mb-4 text-white uppercase tracking-wider">Solution Technique</h2>
                  <p className="text-slate-300 text-lg leading-relaxed">{project.solution}</p>
               </section>
            </div>

            <aside className="space-y-8">
               <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sticky top-24">
                  <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-[0.2em] text-slate-500">Stack & Expertise</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                     {project.tags.map(tag => (
                        <div key={tag} className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg text-sm border border-slate-700 text-slate-300">
                           <TagIcon tagName={tag} /> {tag}
                        </div>
                     ))}
                  </div>

                  <div className="space-y-4">
                     {hasLive && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                           <FaGlobe /> Voir le site live
                        </a>
                     )}
                     {hasGithub && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700 transition-all">
                           <FaGithub /> Code source
                        </a>
                     )}
                  </div>

                  {project.duration && (
                     <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest text-center">Sprint : {project.duration}</p>
                  )}
               </div>
            </aside>
         </div>
      </div>
   );
}
