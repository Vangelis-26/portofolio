export default function robots() {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         // disallow: '/private/',
      },
      sitemap: 'https://mourier-matthieu.tech/sitemap.xml',
   }
}
