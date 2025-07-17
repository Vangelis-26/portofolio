"use client";

import { FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Lightbox({ src, onClose }) {
   if (!src) return null;

   return (
      <div
         className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
         onClick={onClose}
      >
         <button
            className="absolute top-4 right-4 text-white hover:text-(--color-border) transition-colors"
            onClick={onClose}
            aria-label="Fermer la visionneuse"
         >
            <FiX size={32} />
         </button>

         <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
         >
            <Image
               src={src}
               alt="Image du projet en plein écran"
               fill
               sizes="90vw"
               style={{ objectFit: 'contain' }}
            />
         </div>
      </div>
   );
}
