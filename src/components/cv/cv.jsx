import { FiDownload } from "react-icons/fi";

export default function Cv() {
    return (
        <a
            href="/Mourier Matthieu CV.pdf"
            download
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-center bg-gradient-to-r from-(--color-border) to-purple-600 transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--color-border)/40"
        >
            <FiDownload className="transition-transform duration-300 group-hover:-rotate-12" />
            <span>CV</span>
        </a>
    );
}
