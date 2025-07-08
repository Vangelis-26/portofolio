export default function Intro() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-stone-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Mourier Matthieu - Développeur Web</h1>
            <section className="mb-8 px-100 text-justify">
                <p className="m-8 ">Avec plus de quinze ans d'expérience au cœur de secteurs dynamiques, mon orientation vers le développement web est une suite logique, motivée par le désir de construire les solutions de demain. Mon parcours m'a permis de cultiver un sens aigu de la relation client et du commerce, que ce soit en conseillant des clients, en gérant des actions commerciales ou en assurant le déploiement de projets d'envergure.
                </p>
                <p className="m-8">
                    Ce qui me distingue d'un profil purement technique, c'est ma capacité éprouvée à piloter des affaires complexes et à interagir avec un large éventail d'interlocuteurs, des particuliers aux professionnels et aux collectivités. En tant que chargé d'affaires et programmateur, j'ai excellé dans la gestion simultanée de nombreux dossiers, l'optimisation des plannings et la coordination d'équipes, garantissant ainsi le succès des opérations.
                </p>
                <p className="m-8">
                    Cette vision globale et cette aisance relationnelle sont des atouts précieux dans le développement web. Elles me permettent de traduire avec finesse les besoins d'un client en spécifications fonctionnelles claires, d'assurer une communication fluide tout au long du projet et de concevoir des applications qui ne sont pas seulement performantes, mais qui répondent véritablement à une stratégie et à des objectifs utilisateurs. Mon ambition est d'allier la rigueur du code à une compréhension profonde des enjeux humains et commerciaux.
                </p>
            </section>

            <a href="/about" className="bg-stone-700 text-white px-6 py-2 rounded hover:bg-stone-600 transition-colors">
                Télécharger mon CV
            </a>
        </section>
    )
}
