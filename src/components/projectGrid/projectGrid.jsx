"use client";

import { useState } from 'react';
import ProjectCard from '@/components/projectCard/projectCard.jsx';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll.jsx';
import Lightbox from '@/components/lightbox/lightbox.jsx';

export default function ProjectGrid({ projects }) {
   const [selectedImage, setSelectedImage] = useState(null);

   return (
      <>
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {projects.map((project) => (
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
