import Timeline from '@/components/timeline/timeline';

const linkStyles = "font-semibold hover:text-[--color-border] transition-colors";

const experiencesData = [
    {
        date: "Depuis 2020",
        title: "Chargé de conventionnement et relation bailleur",
        company: "Axione",
        location: "Montélimar - France",
        companyLink: "https://www.axione.fr/",
        description: "Pilotage du déploiement de la fibre optique sur le secteur Drôme-Ardèche. J'ai agi comme interface clé entre les équipes techniques, les collectivités (Mairies, communautés de communes) et les clients finaux (particuliers, professionnels). Mes missions incluaient la gestion complète du processus de conventionnement et la résolution des problématiques liées au raccordement.",
    },
    {
        date: "2020",
        title: "Chargé d'affaires",
        company: "Domobat",
        location: "Montélimar - France",
        companyLink: "http://www.domobat-expertises.fr/",
        description: "Gestion du cycle de vie des projets clients, de la réception de la demande à la validation technique. J'étais responsable de l'analyse des besoins, de l'élaboration des devis pour les travaux de carottage (y compris l'analyse Amiante/HAP) et de la coordination des démarches administratives réglementaires (DICT, permissions de voirie).",

    },
    {
        date: "2018 – 2019",
        title: "Programmateur CPA",
        company: "Enedis",
        location: "Montélimar - France",
        companyLink: "https://www.enedis.fr/",
        description: "Optimisation et planification logistique des tournées des techniciens sur la région Drôme/Ardèche Sud. En m'appuyant sur les bases de données opérationnelles, j'ai coordonné les interventions pour maximiser l'efficacité. J'ai également assuré le suivi des impayés fournisseurs et la résolution des litiges."
    },
    {
        date: "2017",
        title: "Technicien Support Multimétrics",
        company: "C'Pro",
        location: "Valence - France",
        companyLink: "https://koesio.com/",
        description: "Diagnostic et résolution de pannes informatiques pour des clients professionnels. J'assurais un support technique complet par prise de main à distance, garantissant une restauration rapide du service",
    },
    {
        date: "2016",
        title: "Responsable de Magasin",
        company: "SIMAC",
        location: "Montélimar - France",
        description: "En tant que responsable de point de vente, j'ai piloté l'ensemble des opérations financières, commerciales et logistiques. Mes missions allaient du suivi des commandes fournisseurs à la facturation et la résolution des litiges clients, en passant par la gestion de la caisse et la responsabilité complète des ouvertures et fermetures du magasin.",
    },
    {
        date: "2013 – 2015",
        title: "Conseiller Client",
        company: "EDF",
        location: "Montélimar - France",
        companyLink: "https://www.edf.fr/",
        description: "J'étais en charge de la gestion complète du magasin : caisse, commandes fournisseurs, litiges clients, réception de marchandises, et établissement des devis et factures.",
    },
    {
        date: "2008 – 2013",
        title: "Vendeur",
        company: (
            <>
                <a href="https://www.orange.fr/" target="_blank" rel="noreferrer" className={linkStyles}>
                    Orange
                </a>
                <span className="text-slate-300"> / </span>
                <a href="https://www.sfr.fr/" target="_blank" rel="noreferrer" className={linkStyles}>
                    SFR
                </a>
            </>
        ),
        location: "Montélimar - France",
        description: "Mes missions incluaient le conseil client en téléphonie mobile, la mise en place d'actions commerciales et la gestion de la surface de vente et de la caisse.",
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
