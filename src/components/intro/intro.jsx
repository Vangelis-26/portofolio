import Cv from "@/components/cv/cv";
import { FaUsers, FaTasks, FaHandshake } from "react-icons/fa";

const strengths = [
    {
        icon: <FaUsers />,
        title: "Expérience Client & Commerciale",
        description: "Plus de quinze ans au cœur de secteurs dynamiques m'ont permis de cultiver un sens aigu de la relation client, de la gestion d'actions commerciales au déploiement de projets d'envergure.",
    },
    {
        icon: <FaTasks />,
        title: "Pilotage & Coordination",
        description: "Ma capacité à piloter des affaires complexes, optimiser des plannings et coordonner des équipes est un atout majeur pour garantir le succès et le respect des délais de chaque projet web.",
    },
    {
        icon: <FaHandshake />,
        title: "Pont entre Technique et Stratégie",
        description: "Je traduis avec finesse les besoins d'un client en spécifications fonctionnelles claires. Mon ambition est d'allier la rigueur du code à une compréhension profonde des enjeux humains et commerciaux.",
    }
];

export default function Intro() {
    return (
        <main className="container mx-auto flex flex-col items-center px-4 py-20">

            <section className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Développeur Web avec une vision 360°
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                    J'allie une solide expérience en gestion de projet et relation client à une expertise technique pour créer des applications web qui ont un réel impact commercial.
                </p>
            </section>

            <section className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {strengths.map((strength) => (
                    <div
                        key={strength.title}
                        className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg text-left transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:border-[--color-border]/50"
                    >
                        <div className="text-[--color-border] text-3xl mb-4">
                            {strength.icon}
                        </div>
                        <h3 className="text-xl font-bold">{strength.title}</h3>
                        <p className="mt-2 text-slate-400">{strength.description}</p>
                    </div>
                ))}
            </section>

            <div className="mt-20">
                <Cv />
            </div>

        </main>
    );
}
