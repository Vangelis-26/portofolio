// projectGrid.jsx
"use client";

import { useState } from 'react';
import ProjectCard from '@/components/projectCard/projectCard.jsx';
import FeaturedProject from '@/components/featureProject/featureProject.jsx';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll.jsx';
import Lightbox from '@/components/lightbox/lightbox.jsx';

export default function ProjectGrid({ projects }) {
   const [selectedImage, setSelectedImage] = useState(null);

   // On sépare les données
   const featuredProject = projects.find(p => p.isFeatured);
   const standardProjects = projects.filter(p => !p.isFeatured);

   return (
      <>
         {/* Section Projet Phare */}
         {featuredProject && (
            <FadeInScroll>
               <FeaturedProject project={featuredProject} />
            </FadeInScroll>
         )}

         {/* Séparateur visuel discret */}
         <div className="flex items-center gap-4 mb-12">
            <h2 className="font-bold text-slate-500 whitespace-nowrap uppercase tracking-widest text-sm">Autres Réalisations</h2>
            <div className="h-[1px] w-full bg-slate-800"></div>
         </div>

         {/* Grille classique */}
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
