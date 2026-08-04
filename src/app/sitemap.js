import { projectsData } from '@/data/data';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mourier-matthieu.vercel.app';

export default function sitemap() {
   // Génération dynamique des URLs pour chaque projet
   const projectUrls = projectsData.map((project) => ({
      url: `${baseUrl}/projets/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
   }));

   // URLs statiques de base
   const staticUrls = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
      },
      {
         url: `${baseUrl}/career`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${baseUrl}/skills`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${baseUrl}/contact`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.9,
      },
   ];

   return [...staticUrls, ...projectUrls];
}
