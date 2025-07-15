"use client";

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Cv from "@/components/cv/cv";

export default function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
        fixed bottom-8 right-8 z-50 
        transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
        >
            <div className="flex items-center gap-4">

                <Cv className="bg-(--color-border)border-transparent hover:opacity-90" />

                <button
                    onClick={scrollToTop}
                    className="
            flex items-center justify-center h-12 w-12 rounded-full shadow-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 transform transition-all duration-300 hover:scale-110 hover:border-(--color-border)"
                    aria-label="Retourner en haut de la page"
                >
                    <FiArrowUp size={24} />
                </button>

            </div>
        </div>
    );
}
