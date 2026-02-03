"use client";

import ProjectCard from '@/components/projectCard/projectCard.jsx';
import FeaturedProject from '@/components/featuredProject/featuredProject.jsx';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll.jsx';

export default function ProjectGrid({ projects }) {
   const featuredProjects = projects.filter(p => p.isFeatured);
   const standardProjects = projects.filter(p => !p.isFeatured);

   return (
      <div id="projets" className="container mx-auto px-4">
         <div className="space-y-24 mb-32">
            {featuredProjects.map((project) => (
               <FadeInScroll key={project.title}>
                  <FeaturedProject project={project} />
               </FadeInScroll>
            ))}
         </div>

         <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 whitespace-nowrap">Projets de Formation</h2>
            <div className="h-[1px] w-full bg-slate-800/50"></div>
         </div>

         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
            {standardProjects.map((project) => (
               <FadeInScroll key={project.title}>
                  <ProjectCard {...project} />
               </FadeInScroll>
            ))}
         </section>
      </div>
   );
}
