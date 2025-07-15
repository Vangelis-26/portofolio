"use client";

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Cv from '../cv/cv';

export default function FloatingButtons() {
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsScrollButtonVisible(true);
            } else {
                setIsScrollButtonVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center gap-4">

            <div className="hidden md:block">
                <Cv />
            </div>

            <button
                onClick={scrollToTop}
                className={`
          flex items-center justify-center h-12 w-12 rounded-full p-3 shadow-lg 
          bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white
          transform transition-all duration-300
          hover:scale-110 hover:border-(--color-border)
          ${isScrollButtonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
        `}
                aria-label="Retourner en haut de la page"
            >
                <FiArrowUp size={24} />
            </button>

        </div>
    );
}
