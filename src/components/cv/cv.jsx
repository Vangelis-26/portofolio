import { FiDownload } from "react-icons/fi";

export default function Cv() {
   return (
      <a
         href="/Matthieu Mourier CV.pdf"
         download
         className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-center bg-(--color-border) transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--color-border)/40"
      >
         <FiDownload className="transition-transform duration-300" />
         <span>CV</span>
      </a>
   );
}
