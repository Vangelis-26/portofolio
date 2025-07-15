import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, SassOriginal, NodejsOriginal, MongodbOriginal, ExpressOriginal, FigmaOriginal, } from 'devicons-react';
import { FaBug, FaSearch, FaUniversalAccess, FaTasks } from 'react-icons/fa';
import { FiZap, FiShare2, FiSmartphone, FiTool } from 'react-icons/fi';

export default function TagIcon({ tagName }) {
    const iconSize = 18;
    const tag = tagName.toLowerCase();

    switch (tag) {
        case 'html':
        case 'html5':
            return <Html5Original size={iconSize} />;
        case 'css':
        case 'css3':
            return <Css3Original size={iconSize} />;
        case 'javascript':
            return <JavascriptOriginal size={iconSize} />;
        case 'react':
            return <ReactOriginal size={iconSize} />;
        case 'sass':
            return <SassOriginal size={iconSize} />;
        case 'node.js':
            return <NodejsOriginal size={iconSize} />;
        case 'mongodb':
            return <MongodbOriginal size={iconSize} />;
        case 'express':
            return <ExpressOriginal size={iconSize} />;
        case 'figma':
            return <FigmaOriginal size={iconSize} />;
        case 'api':
        case 'api rest':
            return <FiShare2 size={iconSize} />;
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
