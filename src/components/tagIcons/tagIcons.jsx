import {
   Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, ReactrouterOriginal, SassOriginal, VscodeOriginal, NodejsOriginal, MongodbOriginal, ExpressOriginal, FigmaOriginal, NextjsOriginal, TypescriptOriginal, TailwindcssOriginal, GitOriginal, VitejsOriginal
} from 'devicons-react';
import { FaBug, FaSearch, FaUniversalAccess, FaTasks, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import { FiZap, FiShare2, FiSmartphone, FiTool, FiBarChart2 } from 'react-icons/fi';
import { SiSupabase, SiFramer } from 'react-icons/si';

export default function TagIcon({ tagName }) {
   const iconSize = 18;
   // On nettoie la chaîne pour éviter les erreurs de frappe (espaces en trop)
   const tag = tagName ? tagName.toLowerCase().trim() : "";

   switch (tag) {
      // --- Front-End ---
      case 'html':
      case 'html5': return <Html5Original size={iconSize} />;
      case 'css':
      case 'css3': return <Css3Original size={iconSize} />;
      case 'javascript': return <JavascriptOriginal size={iconSize} />;
      case 'react':
      case 'react 18': return <ReactOriginal size={iconSize} />;
      case 'react router': return <ReactrouterOriginal size={iconSize} />;
      case 'next.js': return <NextjsOriginal size={iconSize} />;
      case 'typescript': return <TypescriptOriginal size={iconSize} />;
      case 'sass': return <SassOriginal size={iconSize} />;
      case 'tailwind css': return <TailwindcssOriginal size={iconSize} />;
      case 'framer motion': return <SiFramer size={iconSize} />;

      // --- Back-End & Data ---
      case 'node.js': return <NodejsOriginal size={iconSize} />;
      case 'mongodb': return <MongodbOriginal size={iconSize} />;
      case 'express': return <ExpressOriginal size={iconSize} />;
      case 'supabase': return <SiSupabase size={iconSize} />;
      case 'recharts': return <FiBarChart2 size={iconSize} />;
      case 'api':
      case 'api rest': return <FiShare2 size={iconSize} />;

      // --- Outils & Gestion ---
      case 'figma': return <FigmaOriginal size={iconSize} />;
      case 'git & github': return <GitOriginal size={iconSize} />;
      case 'vite': return <VitejsOriginal size={iconSize} />;
      case 'visual studio code': return <VscodeOriginal size={iconSize} />;
      case 'gestion de projet':
      case 'méthode agile': return <FaTasks size={iconSize} />;
      case 'spécifications': return <FaFileAlt size={iconSize} />;

      // --- Expertise ---
      case 'seo': return <FaSearch size={iconSize} />;
      case 'performance': return <FiZap size={iconSize} />;
      case 'accessibilité': return <FaUniversalAccess size={iconSize} />;
      case 'débugging': return <FaBug size={iconSize} />;
      case 'responsive': return <FiSmartphone size={iconSize} />;
      case 'sécurité':
      case 'rls':
      case 'architecture privacy-first':
      case 'sécurisation des données (rls)': return <FaShieldAlt size={iconSize} />;

      default: return <FiTool size={iconSize} />;
   }
}
