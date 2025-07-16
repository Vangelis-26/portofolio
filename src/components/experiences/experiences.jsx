import Timeline from '@/components/timeline/timeline';

const linkStyles = "font-semibold hover:text-(--color-border) transition-colors";

const experiencesData = [
    {
        date: "Depuis 2020",
        title: "Chargé de conventionnement et relation bailleur",
        company: "Axione",
        location: "Montélimar - France",
        companyLink: "https://www.axione.fr/",
        description: "En tant qu'interface clé du déploiement de la fibre, j'ai coordonné les relations entre les équipes techniques, les collectivités et les clients. J'ai développé une expertise dans la gestion de projet complexe et la résolution de problématiques techniques et contractuelles pour assurer la réussite des raccordements.",
    },
    {
        date: "2020",
        title: "Chargé d'affaires",
        company: "Domobat",
        location: "Montélimar - France",
        companyLink: "http://www.domobat-expertises.fr/",
        description: "J'ai géré l'intégralité du cycle de vie des projets clients, depuis l'analyse technique des besoins jusqu'à la coordination des démarches réglementaires (DICT, permissions de voirie). Ce rôle m'a permis d'aiguiser ma capacité à traduire des exigences complexes en plans d'action concrets.",
    },
    {
        date: "2018 – 2019",
        title: "Programmateur CPA",
        company: "Enedis",
        location: "Montélimar - France",
        companyLink: "https://www.enedis.fr/",
        description: "Responsable de l'optimisation logistique des tournées de techniciens via l'analyse de données opérationnelles. J'ai mis en place des plannings pour maximiser l'efficacité des interventions, tout en gérant la résolution de litiges et le suivi des paiements fournisseurs.",
    },
    {
        date: "2017",
        title: "Technicien Support Multimétrics",
        company: "C'Pro",
        location: "Valence - France",
        companyLink: "https://koesio.com/",
        description: "Spécialisé dans le diagnostic et la résolution de pannes informatiques à distance. Cette expérience a renforcé ma capacité à débugger des problèmes techniques sous pression et à communiquer des solutions claires à des utilisateurs non-techniques.",
    },
    {
        date: "2016",
        title: "Responsable de Magasin",
        company: "SIMAC",
        location: "Montélimar - France",
        description: "En tant que pilote du point de vente, j'ai assuré une gestion 360° : financière (caisse, trésorerie), logistique (commandes, stocks), et commerciale (devis, facturation, litiges). Une expérience clé dans la compréhension des enjeux globaux d'une entreprise.",
    },
    {
        date: "2013 – 2015",
        title: "Conseiller Client",
        company: "EDF",
        location: "Montélimar - France",
        companyLink: "https://www.edf.fr/",
        description: "Au sein d'une plateforme téléphonique, j'ai animé un pôle projet pour l'équipe tout en gérant la relation client. Ma mission était de vulgariser des informations complexes (facturation, taxes) et d'élaborer des solutions sur mesure comme des plans de paiement, tout en assurant la gestion sécurisée des données sensibles et des transactions.",
    },
    {
        date: "2008 – 2013",
        title: "Vendeur",
        location: "Montélimar - France",
        description: "Conseil technique et commercial en téléphonie mobile. Ma mission était de traduire les besoins des clients en solutions produits adaptées et de participer activement à la gestion des actions commerciales.",
        companies: [
            { name: "Orange", link: "https://www.orange.fr/" },
            { name: "SFR", link: "https://www.sfr.fr/" }
        ]
    },
];

export default function Experiences() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Expériences Professionnelles</h2>
            <Timeline items={experiencesData} />
        </div>
    );
}
