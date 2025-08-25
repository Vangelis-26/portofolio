export const projectsData = [
   {
      slug: "mon-portfolio",
      type: "Projet Personnel",
      title: "Mon Portfolio",
      description: "Le site sur lequel vous naviguez actuellement. Développé avec Next.js et Tailwind CSS pour une expérience moderne, responsive et optimisée.",
      image: "/portfolio.webp",
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive"],
      duration: "50 heures",
      links: {
         github: "https://github.com/Vangelis-26/Portfolio_Matthieu_Mourier",
         live: "https://mouriermatthieu.tech"
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
      duration: "60 heures",
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
      duration: "60 heures",
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
      duration: "60 heures",
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
      duration: "50 heures",
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
      duration: "40 heures",
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

export const formationsData = [
   {
      date: "2023 – 2024",
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
