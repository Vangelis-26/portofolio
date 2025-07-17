import ProjectCard from '@/components/projectCard/projectCard.jsx';
import FadeInScroll from '@/components/fadeInScroll/fadeInScroll';

const projectsData = [
    {
        type: "Projet Personnel",
        title: "Mon Portfolio",
        description: "Le site sur lequel vous naviguez actuellement. Développé avec Next.js et Tailwind CSS pour une expérience moderne, responsive et optimisée.",
        image: "/portfolio.webp",
        tags: ["Next.js", "React", "Tailwind CSS", "Responsive"],
        duration: "50 heures",
        links: {
            github: "#",
            live: "#"
        }
    },
    {
        type: "Projet de Formation",
        title: "Kasa - Location Immobilière",
        description: "Création de l'application front-end pour une plateforme de location d'appartements avec React, React Router et des animations en Sass.",
        image: "/kasa.webp",
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
        description: "Développement de l'API REST et de la base de données pour un site de notation de livres avec Node.js, Express et MongoDB.",
        image: "/mon_vieux_grimoire.webp",
        tags: ["Node.js", "Express", "MongoDB", "API REST"],
        duration: "60 heures",
        links: {
            github: "https://github.com/Vangelis-26/P6-Mon-Vieux-Grimoire",
            live: "#"
        }
    },
    {
        type: "Projet de Formation",
        title: "Portfolio d'Architecte d'Intérieur",
        description: "Développement de la partie front-end dynamique du site, récupération des projets via une API et création d'une modale d'upload.",
        image: "/sophie_bluel.webp",
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
        description: "Audit et optimisation complète du site d'une photographe (Performances, Accessibilité, SEO local avec Schema.org).",
        image: "/nina_carducci.webp",
        tags: ["SEO", "Performance", "Accessibilité", "Débugging"],
        duration: "50 heures",
        links: {
            github: "https://github.com/Vangelis-26/P4-Nina_Carducci",
            live: "https://vangelis-26.github.io/P4-Nina_Carducci/"
        }
    },
    {
        type: "Projet de Formation",
        title: "Booki",
        description: "Intégration de la maquette responsive pour la page d'accueil d'une agence de voyage en HTML & CSS purs.",
        image: "/booki.webp",
        tags: ["HTML", "CSS", "Responsive", "Figma"],
        duration: "80 heures",
        links: {
            github: "https://github.com/Vangelis-26/P2-Booki",
            live: "https://vangelis-26.github.io/P2-Booki/"
        }
    },
    {
        type: "Projet de Formation (Gestion de Projet)",
        title: "Planification du 'Menu Maker' - Qwenta",
        description: "Planification complète du développement d'un site, incluant veille technologique, spécifications techniques et création du Kanban.",
        image: "/kanban.webp",
        tags: ["Gestion de Projet", "Méthode Agile", "Spécifications"],
        duration: "40 heures",
        links: {
            github: "#",
            live: "#"
        }
    }
];


export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">

            <FadeInScroll>
                <section className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold">Mes Projets</h1>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Voici une sélection de projets qui démontrent mes compétences et mon savoir-faire.
                    </p>
                </section>

                <section
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32 animate-fade-in-up"
                    style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                >
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
            </FadeInScroll>
        </div>
    );
}
