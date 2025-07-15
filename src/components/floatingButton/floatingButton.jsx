"use client";

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Cv from '../cv/cv';

export default function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`
        transition-opacity duration-300 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
        >
            <div className="flex flex-col md:flex-row items-center gap-4">
                <Cv />
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center justify-center h-12 w-12 rounded-full p-3 shadow-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white transform transition-transform duration-300 hover:scale-110 hover:border-([)--color-border)"
                    aria-label="Retourner en haut de la page"
                >
                    <FiArrowUp size={24} />
                </button>
            </div>
        </div>
    );
}
