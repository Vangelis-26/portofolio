import { FiDownload } from "react-icons/fi";

export default function Cv() {
    return (
        <a
            href="/CV-Matthieu-Mourier.pdf"
            download
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-center text-white bg-gradient-to-r from-[--color-border] to-purple-600 transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[--color-border]/40"
        >
            <FiDownload className="transition-transform duration-300 group-hover:-rotate-12" />
            <span>Télécharger mon CV</span>
        </a>
    );
}
