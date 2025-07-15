import ProjectCard from '@/components/projectCard/projectCard.jsx';

const projectsData = [
    {
        type: "Projet de Formation",
        title: "Booki",
        description: "Intégration de la maquette pour la page d'accueil d'une agence de voyage en HTML & CSS purs et responsive.",
        image: "/Booki.webp",
        tags: ["HTML", "CSS", "Responsive", "Figma"],
        duration: "80 heures",
        links: {
            github: "https://github.com/Vangelis-26/P2-Booki",
            live: "https://vangelis-26.github.io/P2-Booki/"
        }
    },
    {
        type: "Projet de Formation",
        title: "Portfolio d'Architecte d'Intérieur",
        description: "Développement de la partie front-end dynamique du site. Mes missions incluaient la récupération des projets via une API, et la création de la page de connexion ainsi que d'une modale d'upload.",
        image: "/Sophie_bluel.webp",
        tags: ["JavaScript", "API"],
        duration: "60 heures",
        links: {
            github: "https://github.com/Vangelis-26/P3-Sophie_Bluel",
            live: "#"
        }
    },
    {
        type: "Projet de Formation",
        title: "Optimisation SEO - Nina Carducci",
        description: "Audit et optimisation complète du site d'une photographe. Mission incluant l'amélioration des performances (Lighthouse), de l'accessibilité (Wave), le débugging de fonctionnalités et l'implémentation du SEO local (Schema.org).",
        image: "/Nina_Carducci.webp",
        tags: ["SEO", "Performance", "Accessibilité", "Débugging", "Schema.org"],
        duration: "50 heures",
        links: {
            github: "https://github.com/Vangelis-26/P4-Nina_Carducci",
            live: "https://vangelis-26.github.io/P4-Nina_Carducci/"
        }
    },
    {
        type: "Projet de Formation",
        title: "Kasa - Location Immobilière",
        description: "Création de l'application front-end pour une plateforme de location d'appartements. Développement d'une single-page application avec React, gestion des routes avec React Router et animations en Sass.",
        image: "/Kasa.webp",
        tags: ["React", "React Router", "Sass", "Vite"],
        duration: "60 heures",
        links: {
            github: "https://github.com/Vangelis-26/P5-Kasa",
            live: "https://vangelis-26.github.io/P5-Kasa/"
        }
    },
    {
        type: "Projet de Formation (Back-End)",
        title: "Mon Vieux Grimoire",
        description: "Développement de l'API REST et de la base de données pour un site de notation de livres. Implémentation d'opérations CRUD sécurisées, authentification utilisateur, et optimisation d'images avec Node.js et Express.",
        image: "/Mon_Vieux_Grimoire.webp",
        tags: ["Node.js", "Express", "MongoDB", "API REST"],
        duration: "60 heures",
        links: {
            github: "https://github.com/Vangelis-26/P6-Mon-Vieux-Grimoire",
            live: "#"
        }
    },
    {
        type: "Projet de Formation (Gestion de Projet)",
        title: "Planification du 'Menu Maker' - Qwenta",
        description: "Planification complète du développement d'un site 'Menu Maker'. Mes missions comprenaient la veille technologique, la rédaction des spécifications techniques, et la création du Kanban projet sur Notion.",
        image: "/Kanban.webp",
        tags: ["Gestion de Projet", "Méthode Agile", "Spécifications Techniques", "Veille Technologique"],
        duration: "40 heures",
        links: {
            github: "#",
            live: "#"
        }
    }
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <section className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold">Mes Projets</h1>
                <p className="mt-4 text-lg text-slate-400">
                    Voici une sélection de projets qui démontrent mes compétences et mon savoir-faire.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.title}
                        type={project.type}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tags={project.tags}
                        duration={project.duration}
                        links={project.links}
                    />
                ))}
            </section>
        </div>
    );
}
