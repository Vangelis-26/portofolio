"use client";

import { useState } from 'react';
import ProjectCard from '@/components/projectCard/projectCard.jsx';
import FeaturedProject from '@/components/featuredProject/featuredProject.jsx';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll.jsx';
import Lightbox from '@/components/lightbox/lightbox.jsx';

export default function ProjectGrid({ projects }) {
   const [selectedImage, setSelectedImage] = useState(null);

   const featuredProjects = projects.filter(p => p.isFeatured);
   const standardProjects = projects.filter(p => !p.isFeatured);

   return (
      <>
         {/* Section Projets Majeurs */}
         <div className="space-y-16 mb-24">
            {featuredProjects.map((project) => (
               <FadeInScroll key={project.title}>
                  <FeaturedProject project={project} />
               </FadeInScroll>
            ))}
         </div>

         <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">Parcours de Formation</h2>
            <div className="h-[1px] w-full bg-slate-800"></div>
         </div>

         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {standardProjects.map((project) => (
               <FadeInScroll key={project.title}>
                  <ProjectCard
                     onImageClick={() => setSelectedImage(project.image)}
                     {...project}
                  />
               </FadeInScroll>
            ))}
         </section>

         <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
      </>
   );
}
