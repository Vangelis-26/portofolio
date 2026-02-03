export const projectsData = [
   {
      slug: "meeple-milestones",
      isFeatured: true,
      type: "Projet Phare - Application Web Fullstack",
      title: "Meeple & Milestones",
      description: "L'application 'Premium' indispensable pour les collectionneurs de jeux de société. Une plateforme immersive conçue pour transformer vos parties en une épopée visuelle et statistique.",
      image: "/meeple-milestones.png",
      tags: ["React 18", "Supabase", "Tailwind CSS", "Recharts", "Framer Motion"],
      duration: "110 heures (Développement intensif)",
      links: {
         github: "https://github.com/Vangelis-26/meeple-milestones",
         live: "https://meeple-milestones-gg9c.vercel.app/"
      },
      challenge: "Déployer une architecture 'Privacy-First' robuste. Le défi : orchestrer la synchronisation en temps réel avec Supabase tout en gérant un système de cache complexe pour l'API BoardGameGeek, afin d'offrir une fluidité parfaite sans saturation de données.",
      solution: "Implémentation d'une sécurité granulaire (RLS) pour isoler les données utilisateurs. Côté Front, j'ai développé un Design System 'Grimoire' tokenisé sous Tailwind et des graphiques interactifs via Recharts, le tout porté par les performances de React 18 et des animations fluides avec Framer Motion.",
      acquiredSkills: [
         "Architecture Cloud (Supabase & RLS)",
         "Gestion de cache & Performance API",
         "Data-Visualisation interactive",
         "UI/UX Design 'Premium' & Mobile-First",
         "Vision 360° : De la conception à la mise en production"
      ]
   },
   {
      slug: "mon-portfolio",
      type: "Projet Personnel",
      title: "Mon Portfolio",
      description: "Le site sur lequel vous naviguez actuellement. Développé avec Next.js et Tailwind CSS pour une expérience moderne, responsive et optimisée.",
      image: "/portfolio.webp",
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive"],
      duration: "170 heures",
      links: {
         github: "https://github.com/Vangelis-26/Portfolio_Matthieu_Mourier",
         live: "https://mourier-matthieu.tech"
      },
      challenge: "L'objectif était de créer une vitrine professionnelle pour présenter mes compétences. Le défi principal était de concevoir un site à la fois esthétique, performant, optimisé pour le SEO et entièrement responsive, en utilisant les meilleures pratiques de Next.js.",
      solution: "J'ai choisi Next.js pour ses performances et son SEO intégré. L'interface a été construite avec des composants React réutilisables et stylisée avec Tailwind CSS pour un développement rapide et cohérent. Le déploiement continu est assuré par Vercel.",
      acquiredSkills: ["Développement Next.js", "Composants React réutilisables", "Styling avec Tailwind CSS", "Déploiement continu (Vercel)", "Optimisation SEO (métadonnées)"]
   },
   {
      slug: "kasa-location-immobiliere",
      type: "Projet de Formation",
      title: "Kasa - Location Immobilière",
      description: "Création de l'application front-end pour une plateforme de location d'appartements avec React, React Router et des animations en Sass.",
      image: "/kasa.webp",
      tags: ["React", "React Router", "Sass", "Vite"],
      duration: "90 heures",
      links: {
         github: "https://github.com/Vangelis-26/P5-Kasa",
         live: "https://vangelis-26.github.io/P5-Kasa/"
      },
      challenge: "Dans le cadre d'une refonte, ma mission était de développer l'intégralité du front-end d'une application de location immobilière en utilisant React, en l'absence d'une API back-end.",
      solution: "J'ai construit une Single-Page Application (SPA) avec Vite, en utilisant React Router pour une navigation fluide sans rechargement de page. Les données des logements sont chargées depuis un fichier JSON local. J'ai également développé des composants réutilisables (cartes, carrousel, menus déroulants) et implémenté des animations en Sass.",
      acquiredSkills: ["Single-Page Application (SPA)", "Routing avec React Router", "Gestion d'état (useState, useEffect)", "Styling avancé avec Sass"]
   },
   {
      slug: "mon-vieux-grimoire",
      type: "Projet de Formation (Back-End)",
      title: "Mon Vieux Grimoire",
      description: "Développement de l'API REST et de la base de données pour un site de notation de livres avec Node.js, Express et MongoDB.",
      image: "/mon_vieux_grimoire.webp",
      tags: ["Node.js", "Express", "MongoDB", "API REST"],
      duration: "70 heures",
      links: {
         github: "https://github.com/Vangelis-26/P6-Mon-Vieux-Grimoire",
         live: "#"
      },
      challenge: "Développer l'API REST complète et sécurisée pour un site de notation de livres, en partant d'un front-end déjà existant. Le back-end devait gérer les utilisateurs, les livres et les notations, y compris l'upload d'images.",
      solution: "J'ai mis en place un serveur Node.js avec le framework Express, connecté à une base de données MongoDB via Mongoose. J'ai développé des routes d'API pour toutes les opérations CRUD, implémenté un système d'authentification par token (JWT), et un middleware pour l'optimisation des images uploadées.",
      acquiredSkills: ["Création d'API REST", "Serveur avec Node.js & Express", "Base de données NoSQL (MongoDB)", "Sécurisation (Authentification JWT)", "Gestion de fichiers (Middleware)"]
   },
   {
      slug: "sophie-bluel-architecte",
      type: "Projet de Formation",
      title: "Portfolio d'Architecte d'Intérieur",
      description: "Développement de la partie front-end dynamique du site, récupération des projets via une API et création d'une modale d'upload.",
      image: "/sophie_bluel.webp",
      tags: ["JavaScript", "API"],
      duration: "70 heures",
      links: {
         github: "https://github.com/Vangelis-26/P3-Sophie_Bluel",
         live: "#"
      },
      challenge: "Rendre dynamique le portfolio d'une architecte d'intérieur à partir d'un code HTML statique. Il fallait récupérer les projets depuis une API et créer de nouvelles fonctionnalités interactives de zéro.",
      solution: "En utilisant JavaScript pur, j'ai développé la logique pour appeler l'API et afficher dynamiquement les projets dans la galerie. J'ai également créé une page de connexion fonctionnelle et une modale interactive pour permettre à l'administrateur d'ajouter ou de supprimer des projets sans toucher au code.",
      acquiredSkills: ["JavaScript \"Vanilla\"", "Manipulation dynamique du DOM", "Communication avec une API (Fetch)", "Logique d'authentification front-end"]
   },
   {
      slug: "nina-carducci-photographe",
      type: "Projet de Formation",
      title: "Optimisation SEO - Nina Carducci",
      description: "Audit et optimisation complète du site d'une photographe (Performances, Accessibilité, SEO local avec Schema.org).",
      image: "/nina_carducci.webp",
      tags: ["SEO", "Performance", "Accessibilité", "Débugging"],
      duration: "80 heures",
      links: {
         github: "https://github.com/Vangelis-26/P4-Nina_Carducci",
         live: "https://vangelis-26.github.io/P4-Nina_Carducci/"
      },
      challenge: "Auditer un site de photographe existant présentant des problèmes de performance, d'accessibilité et de SEO, puis implémenter des solutions concrètes pour corriger ces points.",
      solution: "Après un audit complet avec Lighthouse et Wave, j'ai optimisé la taille et le format des images, restructuré le code HTML pour une meilleure sémantique et accessibilité, et ajouté des métadonnées enrichies (Schema.org) pour le SEO local. J'ai également débuggé des fonctionnalités JavaScript défaillantes dans la galerie.",
      acquiredSkills: ["Audit de performance (Lighthouse)", "Optimisation SEO On-Page", "Accessibilité (Normes WCAG)", "Débugging de code existant", "Référencement local (Schema.org)"]
   },
   {
      slug: "booki",
      type: "Projet de Formation",
      title: "Booki",
      description: "Intégration de la maquette responsive pour la page d'accueil d'une agence de voyage en HTML & CSS purs.",
      image: "/booki.webp",
      tags: ["HTML", "CSS", "Responsive", "Figma"],
      duration: "80 heures",
      links: {
         github: "https://github.com/Vangelis-26/P2-Booki",
         live: "https://vangelis-26.github.io/P2-Booki/"
      },
      challenge: "Intégrer une maquette Figma pour la page d'accueil d'une agence de voyage en respectant un design 'pixel-perfect' et en assurant une parfaite responsivité sur mobile, tablette et desktop.",
      solution: "J'ai structuré la page en utilisant les balises sémantiques HTML5 et stylisé l'ensemble avec CSS3, en utilisant Flexbox pour les alignements principaux. Des media queries ont été mises en place pour adapter le design à chaque point de rupture défini dans les maquettes.",
      acquiredSkills: ["Intégration \"Pixel-Perfect\"", "Responsive Design (Mobile-First)", "Mise en page avec Flexbox", "Utilisation de maquettes Figma"]
   },
   {
      slug: "planification-menu-maker-qwenta",
      type: "Projet de Formation (Gestion de Projet)",
      title: "Planification du 'Menu Maker' - Qwenta",
      description: "Planification complète du développement d'un site, incluant veille technologique, spécifications techniques et création du Kanban.",
      image: "/kanban.webp",
      tags: ["Gestion de Projet", "Méthode Agile", "Spécifications"],
      duration: "60 heures",
      links: {
         github: "#",
         live: "#"
      },
      challenge: "Assurer la planification complète d'un nouveau projet web sans écrire une seule ligne de code. Il s'agissait de définir la feuille de route technique et organisationnelle pour l'équipe de développement.",
      solution: "J'ai mené une veille technologique pour choisir la stack la plus adaptée. J'ai ensuite rédigé les spécifications techniques détaillées à partir des besoins fonctionnels et découpé le projet en tâches sur un tableau Kanban (Notion), en estimant la complexité de chaque User Story.",
      acquiredSkills: ["Gestion de projet Agile", "Rédaction de spécifications", "Veille technologique", "Kanban & Notion"]
   }
];

export const experiencesData = [
   {
      date: "2020 – 2025",
      title: "Chargé de Négociation & Conventionnement (Fibre Optique)",
      company: "Axione",
      location: "Montélimar - France",
      companyLink: "https://www.axione.fr/",
      description: [
         "Négociation Stratégique : Pilotage d'un portefeuille de bailleurs et syndics pour l'obtention des accords de déploiement (Conventionnement).",
         "Gestion de Projet : Coordination transversale entre les équipes travaux, les collectivités et les propriétaires.",
         "Résultat : Sécurisation de 8 000 conventions par an, permettant le raccordement de 14 000 logements. Résolution de litiges complexes réduisant les délais de blocage de 80%."
      ],
   },
   {
      date: "2020",
      title: "Chargé d'Affaires Technique",
      company: "Domobat",
      location: "Montélimar - France",
      companyLink: "http://www.domobat-expertises.fr/",
      description: [
         "Pilotage d'Affaires : Gestion du cycle complet, de la détection du besoin client jusqu'à la livraison du chantier.",
         "Coordination Réglementaire : Supervision des DICT et permissions de voirie, garantissant la conformité juridique des interventions.",
         "Performance : Transformation des exigences clients en plans d'action techniques, assurant un taux de satisfaction client de 90%."
      ],
   },
   {
      date: "2018 – 2019",
      title: "Coordinateur d'Activités & Planification",
      company: "Enedis",
      location: "Montélimar - France",
      companyLink: "https://www.enedis.fr/",
      description: [
         "Optimisation des Ressources : Gestion des plannings d'interventions pour une flotte d'une trentaines de techniciens.",
         "Rentabilité : Maximisation du taux de charge des techniciens via l'analyse de données, réduisant les temps de trajet improductifs.",
         "Gestion de Conflits : Résolution des litiges fournisseurs et suivi de la facturation."
      ],
   },
   {
      date: "2017",
      title: "Chargé de Support & Relation Client Technique",
      company: "C'Pro",
      location: "Valence - France",
      companyLink: "https://koesio.com/",
      description: [
         "Gestion de Crise : Résolution d'incidents techniques sous pression avec une approche pédagogique pour des clients non-techniques.",
         "Qualité de Service : Maintien d'un haut niveau de satisfaction client grâce à une communication claire et orientée solution."
      ],
   },
   {
      date: "2016",
      title: "Responsable de Magasin",
      company: "SIMAC",
      location: "Montélimar - France",
      description: [
         "Gestion Administrative & Financière : Devis, facturation, bons de commande et gestion des flux d'argent (entrées/sorties).",
         "Logistique : Réception, contrôle marchandises et gestion des litiges fournisseurs.",
         "Management : Responsabilité des ouvertures/fermetures et de la tenue du point de vente."
      ],
   },
   {
      date: "2013 – 2015",
      title: "Conseiller Client & Référent Projet",
      company: "EDF",
      location: "Montélimar - France",
      companyLink: "https://www.edf.fr/",
      description: [
         "Vente & Conseil (Upselling) : Analyse des besoins clients pour proposer des solutions adaptées (mensualisation, services annexes).",
         "Pédagogie : Vulgarisation d'informations complexes (facturation, taxes) pour faciliter l'adhésion du client."
      ],
   },
   {
      date: "2008 – 2012",
      title: "Commercial Itinérant & Vendeur Conseil",
      location: "Montélimar - France",
      description: [
         "Vente & Conseil : Commercialisation de solutions mobiles/internet, gestion intégrale du point de vente (stocks, merchandising) et atteinte systématique des objectifs commerciaux."
      ],
      companies: [
         { name: "Orange", link: "https://www.orange.fr/" },
         { name: "SFR", link: "https://www.sfr.fr/" }
      ]
   },
];

export const formationsData = [
   {
      date: "2025",
      title: "OpenClassrooms",
      subtitle: "Développeur Web - RNCP Niveau 5 (Bac+2)",
      link: "https://openclassrooms.com/fr/paths/556-developpeur-web",
   },
   {
      date: "2006 – 2008",
      title: "Académie de l'entreprise",
      subtitle: "BTS Management des Unités Commerciales (MUC)",
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
