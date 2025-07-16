import {
    Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, ReactrouterOriginal, SassOriginal, VscodeOriginal, NodejsOriginal, MongodbOriginal, ExpressOriginal, FigmaOriginal, NextjsOriginal, TypescriptOriginal, TailwindcssOriginal, GitOriginal, VitejsOriginal
} from 'devicons-react';
import { FaBug, FaSearch, FaUniversalAccess, FaTasks } from 'react-icons/fa';
import { FiZap, FiShare2, FiSmartphone, FiTool } from 'react-icons/fi';

export default function TagIcon({ tagName }) {
    const iconSize = 18;
    const tag = tagName.toLowerCase();

    switch (tag) {
        // --- Front-End ---
        case 'html5':
        case 'html':
            return <Html5Original size={iconSize} />;
        case 'css':
        case 'css3':
            return <Css3Original size={iconSize} />;
        case 'javascript':
            return <JavascriptOriginal size={iconSize} />;
        case 'react':
            return <ReactOriginal size={iconSize} />;
        case 'react router':
            return <ReactrouterOriginal size={iconSize} />;
        case 'next.js':
            return <NextjsOriginal size={iconSize} />;
        case 'typescript':
            return <TypescriptOriginal size={iconSize} />;
        case 'sass':
            return <SassOriginal size={iconSize} />;
        case 'tailwind css':
            return <TailwindcssOriginal size={iconSize} />;

        // --- Back-End ---
        case 'node.js':
            return <NodejsOriginal size={iconSize} />;
        case 'mongodb':
            return <MongodbOriginal size={iconSize} />;
        case 'express':
            return <ExpressOriginal size={iconSize} />;
        case 'api':
        case 'api rest':
            return <FiShare2 size={iconSize} />;

        // --- Outils & Concepts ---
        case 'visual studio code':
            return <VscodeOriginal size={iconSize} />;
        case 'figma':
            return <FigmaOriginal size={iconSize} />;
        case 'git & github':
            return <GitOriginal size={iconSize} />;
        case 'vite':
            return <VitejsOriginal size={iconSize} />;
        case 'seo':
            return <FaSearch size={iconSize} />;
        case 'performance':
            return <FiZap size={iconSize} />;
        case 'accessibilité':
            return <FaUniversalAccess size={iconSize} />;
        case 'débugging':
            return <FaBug size={iconSize} />;
        case 'responsive':
            return <FiSmartphone size={iconSize} />;
        case 'gestion de projet':
            return <FaTasks size={iconSize} />;

        default:
            return <FiTool size={iconSize} />;
    }
}
