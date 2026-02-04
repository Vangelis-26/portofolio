import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart, FaCode, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
   const currentYear = new Date().getFullYear();

   const navLinks = [
      { name: 'Accueil', href: '/#intro' },
      { name: 'Parcours', href: '/career' },
      { name: 'Projets', href: '/projets' },
      { name: 'Compétences', href: '/skills' },
      { name: 'Contact', href: '/contact' },
   ];

   const socialLinks = [
      { name: 'GitHub', href: 'https://github.com/Vangelis-26', icon: <FaGithub /> },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/matthieu-mourier-77a5ba182/', icon: <FaLinkedinIn /> },
      { name: 'Email', href: 'mailto:mourier.matthieu@gmail.com', icon: <FaEnvelope /> },
   ];

   return (
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800/50 relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

               {/* Colonne 1 : Identité */}
               <div className="md:col-span-5 space-y-6">
                  <Link href="/" className="text-2xl font-extrabold tracking-tight group inline-block">
                     <span className="text-white">Matthieu</span>
                     <span className="text-emerald-500"> Mourier</span>
                  </Link>
                  <p className="text-slate-400 leading-relaxed max-w-md">
                     Dév FullStack avec une vision Chef de Projet 360°. Je conçois des applications web robustes, sécurisées et orientées utilisateur.
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium pt-2">
                     <FaMapMarkerAlt className="text-emerald-500/70" />
                     <span>Basé en Drôme/Ardèche, disponible en remote.</span>
                  </div>
               </div>

               {/* Colonne 2 : Navigation */}
               <div className="md:col-span-3 md:pl-8">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Navigation</h3>
                  <ul className="space-y-3">
                     {navLinks.map((link) => (
                        <li key={link.name}>
                           <Link href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium inline-flex items-center gap-2 group">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></span>
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Colonne 3 : Réseaux & Contact */}
               <div className="md:col-span-4">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Connexion</h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                     {socialLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={link.name}
                           className="w-12 h-12 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        >
                           <span className="text-xl">{link.icon}</span>
                        </a>
                     ))}
                  </div>
                  <p className="text-sm text-slate-500">
                     Ouvert aux opportunités et aux collaborations techniques. N'hésitez pas à me contacter.
                  </p>
               </div>
            </div>

            {/* Barre de bas de page (Copyright) */}
            <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
               <div className="flex items-center gap-2">
                  <FaCode className="text-emerald-500/70" />
                  <p>Propulsé par <span className="text-slate-300">Next.js 15</span> & <span className="text-slate-300">Tailwind CSS</span></p>
               </div>
               <div className="flex items-center gap-1.5">
                  <p>© {currentYear} Matthieu Mourier. Codé avec</p>
                  <FaHeart className="text-red-500/80 animate-pulse mx-0.5" size={10} />
                  <p>et passion.</p>
               </div>
            </div>
         </div>
      </footer>
   );
}
