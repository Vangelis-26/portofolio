import Timeline from '@/components/timeline/timeline'; // On importe le composant réutilisable

const formationsData = [
    {
        date: "2006 – 2008",
        title: "Académie de l'entreprise", // On renomme 'school' en 'title'
        subtitle: "BTS Management des Unités Commerciales (MUC)", // On renomme 'degree' en 'subtitle'
        link: "https://www.formation-et-cours.com/academie-de-l-entreprise-valence-drome/",
    },
    {
        date: "2004 – 2006",
        title: "Présentation de Marie",
        subtitle: "Baccalauréat Professionnel Vente",
        link: "http://presentationdemarie.org/lieu/bourg-saint-andeol",
    },
    {
        date: "1987 – 2004",
        title: "Ensemble scolaire Chabrillan",
        subtitle: "Scolarité du premier et second degré",
        link: "https://www.chabrillan.com/",
    },
];

export default function Formations() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours de Formation</h2>
            <Timeline items={formationsData} />
        </div>
    );
}
