import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'fr';

export interface Translations {
  // Navbar
  nav_home: string;
  nav_projects: string;
  nav_education: string;
  nav_about: string;
  nav_activities: string;
  nav_contact: string;
  nav_hire: string;

  // Hero
  hero_badge: string;
  hero_tagline: string;
  hero_sub: string;
  hero_desc: string;
  hero_portfolio: string;
  hero_download_cv: string;
  hero_scroll: string;

  // About
  about_role: string;
  about_heading: string;
  about_p1: string;
  about_p2: string;
  about_download_cv: string;
  about_hire: string;
  about_skills_eyebrow: string;
  about_skills_heading: string;
  about_skills_sub: string;
  about_exp_eyebrow: string;
  about_exp_heading: string;

  // Education
  edu_eyebrow: string;
  edu_heading: string;
  edu_accent: string;
  edu_desc: string;
  edu_deg1_title: string;
  edu_deg1_sub: string;
  edu_deg1_inst: string;
  edu_deg2_title: string;
  edu_deg2_sub: string;
  edu_deg2_inst: string;

  // Contact
  contact_heading: string;
  contact_desc: string;
  contact_label_email: string;
  contact_label_phone: string;
  contact_label_location: string;
  contact_value_location: string;
  contact_label_linkedin: string;
  contact_form_name: string;
  contact_form_email: string;
  contact_form_subject: string;
  contact_form_message: string;
  contact_form_send: string;
  contact_form_sending: string;
  contact_form_sent: string;
  contact_form_sent_sub: string;
  contact_form_error_name: string;
  contact_form_error_email: string;
  contact_form_error_subject: string;
  contact_form_error_message: string;

  // Footer / CTA
  footer_cta_italic: string;
  footer_cta_heading: string;
  footer_cta_sub: string;
  footer_cta_btn: string;
  footer_contact: string;

  // Projects
  projects_eyebrow: string;
  projects_heading: string;
  projects_accent: string;
  projects_view_gh: string;
  projects_all_repos: string;
  projects_contact_me: string;

  // CV path
  cv_path: string;

  // About — additional
  about_img_alt: string;
  about_msc_badge_title: string;
  about_msc_badge_sub: string;
  about_mobile_name: string;
  about_mobile_role: string;
  about_mobile_location: string;
  about_skill_label_1: string;
  about_skill_content_1: string;
  about_skill_label_2: string;
  about_skill_content_2: string;
  about_skill_label_3: string;
  about_skill_content_3: string;
  about_skill_label_4: string;
  about_skill_content_4: string;
  about_skill_label_5: string;
  about_skill_content_5: string;
  about_skill_label_6: string;
  about_skill_content_6: string;
  about_skill_label_7: string;
  about_skill_content_7: string;
  about_skill_label_8: string;
  about_skill_content_8: string;

  // Experience
  exp_1_title: string;
  exp_1_company: string;
  exp_1_period: string;
  exp_1_desc: string;
  exp_1_check_1: string;
  exp_1_check_2: string;
  exp_1_check_3: string;
  exp_1_check_4: string;
  exp_2_title: string;
  exp_2_company: string;
  exp_2_period: string;
  exp_2_desc: string;
  exp_2_check_1: string;
  exp_2_check_2: string;
  exp_2_check_3: string;
  exp_2_check_4: string;
  exp_3_title: string;
  exp_3_company: string;
  exp_3_period: string;
  exp_3_desc: string;
  exp_3_check_1: string;
  exp_3_check_2: string;
  exp_3_check_3: string;

  // Projects — additional
  projects_subtitle: string;
  projects_filter_all: string;
  projects_filter_fullstack: string;
  projects_filter_mobile: string;
  projects_filter_ai: string;
  projects_filter_iot: string;
  projects_cta_accent: string;
  projects_cta_heading: string;
  projects_cta_desc: string;
  projects_card_on_gh: string;
  proj_1_title: string;
  proj_1_category: string;
  proj_1_desc: string;
  proj_2_title: string;
  proj_2_category: string;
  proj_2_desc: string;
  proj_3_title: string;
  proj_3_category: string;
  proj_3_desc: string;
  proj_4_title: string;
  proj_4_category: string;
  proj_4_desc: string;
  proj_5_title: string;
  proj_5_category: string;
  proj_5_desc: string;

  // Associative
  assoc_eyebrow: string;
  assoc_heading: string;
  assoc_accent: string;
  assoc_desc: string;
  assoc_card_title: string;
  assoc_card_badge: string;
  assoc_card_date: string;
  assoc_card_org: string;
  assoc_card_location: string;
  assoc_card_desc: string;
  assoc_card_skills_label: string;
  assoc_right_heading: string;
  assoc_right_sub: string;
  assoc_highlights_heading: string;
  assoc_highlights_sub: string;
  assoc_highlights_meta: string;
  assoc_overlay_label: string;
  assoc_achievement_1_label: string;
  assoc_achievement_1_sub: string;
  assoc_achievement_2_label: string;
  assoc_achievement_2_sub: string;
  assoc_achievement_3_label: string;
  assoc_achievement_3_sub: string;
  assoc_skill_1: string;
  assoc_skill_2: string;
  assoc_skill_3: string;
  assoc_skill_4: string;
  assoc_skill_5: string;
  assoc_skill_6: string;
  assoc_highlight_1_title: string;
  assoc_highlight_1_desc: string;
  assoc_highlight_2_title: string;
  assoc_highlight_2_desc: string;
  assoc_highlight_3_title: string;
  assoc_highlight_3_desc: string;

  // Contact — additional
  contact_placeholder_name: string;
  contact_placeholder_email: string;
  contact_placeholder_subject: string;
  contact_placeholder_message: string;
  contact_fallback_link: string;
  contact_security: string;
  contact_error_fallback: string;

  // Footer
  footer_brand: string;
  footer_copyright: string;
  footer_location: string;
  footer_social_github: string;
  footer_social_linkedin: string;

  // Navbar
  navbar_logo: string;
  navbar_aria_lang_en: string;
  navbar_aria_lang_fr: string;
  navbar_aria_theme: string;

  // SEO
  seo_title: string;
  seo_desc: string;
}

const EN: Translations = {
  nav_home: 'Home',
  nav_projects: 'Projects',
  nav_education: 'Education',
  nav_about: 'About',
  nav_activities: 'Activities',
  nav_contact: 'Contact',
  nav_hire: 'Hire Me',

  hero_badge: 'Available for work · Junior Software Engineer',
  hero_tagline: 'Designing the future, one commit at a time',
  hero_sub: 'Full-Stack Developer · DevOps Enthusiast',
  hero_desc: "Motivated to join an innovative team to design high-performance applications. Master's degree in Software Engineering from Sfax, Tunisia.",
  hero_portfolio: 'View Portfolio',
  hero_download_cv: 'Download CV',
  hero_scroll: 'Scroll',

  about_role: 'Junior Full-Stack Developer',
  about_heading: 'Architecting High-Performance Solutions.',
  about_p1: "I am a Junior Full-Stack Developer with a Master's degree in Information Systems and Network Development. I am deeply passionate about software engineering and DevOps practices.",
  about_p2: 'Motivated to join innovative teams, I focus on designing high-performance applications that are curious, rigorous, and adaptable to evolving technological landscapes.',
  about_download_cv: 'Download CV',
  about_hire: 'Hire Me',
  about_skills_eyebrow: 'my toolkit',
  about_skills_heading: 'Technical Skills',
  about_skills_sub: 'A robust foundation in modern engineering.',
  about_exp_eyebrow: 'Professional Experience',
  about_exp_heading: 'Academic & Professional Path',

  edu_eyebrow: 'knowledge foundation',
  edu_heading: 'Academic',
  edu_accent: 'Architecture',
  edu_desc: 'Building a foundation through rigorous study, hands-on labs, and a relentless pursuit of technical excellence.',
  edu_deg1_title: "Professional Master's in Information Systems Development and Networks",
  edu_deg1_sub: 'Software Engineering and Emerging Technologies',
  edu_deg1_inst: 'Higher Institute of Technological Studies of Sfax (ISET Sfax)',
  edu_deg2_title: "National Bachelor's Degree in Computer Science",
  edu_deg2_sub: 'Software Engineering',
  edu_deg2_inst: 'Faculty of Sciences of Gafsa',

  contact_heading: "Let's connect & collaborate.",
  contact_desc: 'Full-Stack Developer based in Sfax, Tunisia. Passionate about software engineering, DevOps, and building high-performance applications.',
  contact_label_email: 'Direct Email',
  contact_label_phone: 'Phone',
  contact_label_location: 'Location',
  contact_value_location: 'Sfax, Tunisia',
  contact_label_linkedin: 'LinkedIn',
  contact_form_name: 'FULL NAME',
  contact_form_email: 'EMAIL ADDRESS',
  contact_form_subject: 'SUBJECT',
  contact_form_message: 'MESSAGE',
  contact_form_send: 'Send Message',
  contact_form_sending: 'Sending…',
  contact_form_sent: 'Message sent!',
  contact_form_sent_sub: "Thank you, I'll get back to you shortly.",
  contact_form_error_name: 'Name is required.',
  contact_form_error_email: 'A valid email is required.',
  contact_form_error_subject: 'Subject is required.',
  contact_form_error_message: 'Message must be at least 10 characters.',

  footer_cta_italic: 'the next chapter begins here',
  footer_cta_heading: 'Ready for the next challenge.',
  footer_cta_sub: 'Open to full-stack roles, innovative collaborations, and learning opportunities.',
  footer_cta_btn: 'Get in Touch',
  footer_contact: 'Contact',

  projects_eyebrow: 'Selected work',
  projects_heading: 'GitHub',
  projects_accent: 'Projects & Code',
  projects_view_gh: 'View on GitHub',
  projects_all_repos: 'View All Repositories',
  projects_contact_me: 'Contact Me',

  cv_path: 'assets/cv/Wassim_Hamdi_CV_EN.pdf',

  about_img_alt: 'Wassim Hamdi',
  about_msc_badge_title: 'MSc',
  about_msc_badge_sub: "Master's Degree",
  about_mobile_name: 'Wassim Hamdi',
  about_mobile_role: 'MSc · Full-Stack Developer',
  about_mobile_location: 'Sfax, Tunisia',
  about_skill_label_1: 'Languages',
  about_skill_content_1: 'Java · PHP · JavaScript',
  about_skill_label_2: 'Frontend',
  about_skill_content_2: 'Angular · HTML5 · CSS3 · Bootstrap · Tailwind CSS · .NET',
  about_skill_label_3: 'Backend',
  about_skill_content_3: 'Spring Boot · Symfony · NodeJS · REST APIs',
  about_skill_label_4: 'Mobile',
  about_skill_content_4: 'Flutter · Dart · Android Native · Firebase',
  about_skill_label_5: 'Databases',
  about_skill_content_5: 'MySQL · PostgreSQL · SQLServer · MongoDB',
  about_skill_label_6: 'DevOps',
  about_skill_content_6: 'Docker · Jenkins · Maven · Nexus · SonarQube · Git',
  about_skill_label_7: 'Cloud',
  about_skill_content_7: 'Microsoft Azure · Azure Kubernetes Service (AKS)',
  about_skill_label_8: 'Practices',
  about_skill_content_8: 'Agile / Scrum · UML · CI/CD · Clean Code',
  exp_1_title: 'Final Year Internship | Full Stack Developer',
  exp_1_company: 'MOMSOFT — Manouba, Tunisia',
  exp_1_period: 'JAN 2025 — JUN 2025',
  exp_1_desc: 'Design and development of a maintenance dashboard for Industry 4.0 — clear visualization of interventions, stoppages, incidents and KPIs (MTTR, MTBF, availability). Multi-level filtering and dynamic charts. CI/CD pipeline with Jenkins, SonarQube, Nexus and Docker on Azure Kubernetes Service.',
  exp_1_check_1: 'Angular + Spring Boot + Java',
  exp_1_check_2: 'MySQL · MongoDB · Tailwind CSS',
  exp_1_check_3: 'CI/CD: Jenkins · SonarQube · Nexus · GitLab',
  exp_1_check_4: 'Docker · Azure Kubernetes Service (AKS)',
  exp_2_title: 'Final Year Internship | Mobile Developer',
  exp_2_company: 'Faculty of Sciences — Gafsa, Tunisia',
  exp_2_period: 'FEB 2023 — MAY 2023',
  exp_2_desc: 'Development of a cross-platform educational mobile application for students and teachers — course sharing, quizzes, events, and instant messaging. Modular Flutter & Firebase architecture with secure authentication, real-time Firestore, and push notifications.',
  exp_2_check_1: 'Flutter · Dart · Firebase',
  exp_2_check_2: 'Firestore real-time database',
  exp_2_check_3: 'Push notifications & secure auth',
  exp_2_check_4: 'Agile / Scrum methodology',
  exp_3_title: 'Internship | Frontend Web Developer',
  exp_3_company: 'STAR Assurances',
  exp_3_period: 'JUN 2021 — JUL 2021',
  exp_3_desc: 'Development of a modern and responsive landing page for STAR Assurances. Applied best practices in web performance and SEO to maximize online visibility.',
  exp_3_check_1: 'HTML · CSS · Bootstrap · JavaScript',
  exp_3_check_2: 'SEO best practices',
  exp_3_check_3: 'Web performance optimization',
  projects_subtitle: 'Real repositories from my GitHub. Click any card to view the source code.',
  projects_filter_all: 'All',
  projects_filter_fullstack: 'Full-Stack',
  projects_filter_mobile: 'Mobile',
  projects_filter_ai: 'AI',
  projects_filter_iot: 'IoT',
  projects_cta_accent: 'see more',
  projects_cta_heading: 'More on <span class="text-indigo-600 dark:text-secondary">GitHub</span>',
  projects_cta_desc: 'Browse all my repositories for more full-stack, mobile, DevOps and IoT work.',
  projects_card_on_gh: 'on GitHub',
  proj_1_title: 'Industry 4.0 Maintenance Dashboard',
  proj_1_category: 'Full-Stack / DevOps',
  proj_1_desc: 'Maintenance dashboard for Industry 4.0 — interactive visualization of interventions, stoppages, incidents and KPIs (MTTR, MTBF, availability). Multi-level filtering and dynamic charts. Full CI/CD pipeline with Jenkins, SonarQube, Nexus and Docker on Azure Kubernetes Service.',
  proj_2_title: 'Learn Master',
  proj_2_category: 'Mobile / Full-Stack',
  proj_2_desc: "Cross-platform educational app for students and teachers — course sharing, quizzes, events, and instant messaging. Modular Flutter & Firebase architecture with secure auth, real-time Firestore and push notifications.",
  proj_3_title: 'Chatify — Hkeya',
  proj_3_category: 'Full-Stack / Real-Time',
  proj_3_desc: 'Real-time private and group messaging application. Clean chat interface with Laravel backend, Pusher/WebSockets for live updates, and Angular frontend.',
  proj_4_title: 'Chatbot AI',
  proj_4_category: 'Full-Stack / AI',
  proj_4_desc: 'Full-stack AI chatbot — Angular frontend with a Flask backend powered by Groq API (LLaMA 3.1) for real-time intelligent responses. Secure API key management and CORS handling.',
  proj_5_title: 'Irrigation App',
  proj_5_category: 'IoT / Mobile',
  proj_5_desc: 'Smart irrigation system with IoT sensor integration. Monitors soil conditions and automates watering schedules through a mobile dashboard, reducing water waste in agriculture.',
  assoc_eyebrow: 'Beyond Code',
  assoc_heading: 'Associative',
  assoc_accent: 'Experience',
  assoc_desc: 'Competitive achievements and real-world teamwork outside the classroom.',
  assoc_card_title: 'Robotics Competition Winner',
  assoc_card_badge: 'First Place',
  assoc_card_date: 'Hackathon 2.0 · Feb 2022',
  assoc_card_org: 'JCI Gafsa',
  assoc_card_location: 'Gafsa, Tunisia',
  assoc_card_desc: 'Participated in a competitive robotics competition where I collaborated with a multidisciplinary team to design and program robots for challenging tasks. Our team successfully secured <strong class="text-slate-900 dark:text-on-surface font-medium">first place</strong> and won the monetary prize through innovative solutions, strategic thinking, and excellent execution.',
  assoc_card_skills_label: 'Technologies & Skills Applied',
  assoc_right_heading: 'First Place',
  assoc_right_sub: 'Monetary Prize Winner',
  assoc_highlights_heading: 'Event Highlights',
  assoc_highlights_sub: 'Key moments from the robotics competition',
  assoc_highlights_meta: 'Hackathon 2.0',
  assoc_overlay_label: 'JCI Gafsa · Hackathon 2.0',
  assoc_achievement_1_label: 'First Place',
  assoc_achievement_1_sub: 'Monetary Prize Winner',
  assoc_achievement_2_label: 'Team Work',
  assoc_achievement_2_sub: 'Multidisciplinary Team',
  assoc_achievement_3_label: 'Robotics',
  assoc_achievement_3_sub: 'Programming & Design',
  assoc_skill_1: 'Robot Programming',
  assoc_skill_2: 'Strategic Competition',
  assoc_skill_3: 'Team Coordination',
  assoc_skill_4: 'Technical Innovation',
  assoc_skill_5: 'Problem Solving',
  assoc_skill_6: 'Agile Thinking',
  assoc_highlight_1_title: 'Team Collaboration',
  assoc_highlight_1_desc: 'Working together with team members during the competition',
  assoc_highlight_2_title: 'Robot in Action',
  assoc_highlight_2_desc: 'Programming and controlling the robot during competition rounds',
  assoc_highlight_3_title: 'Prize Ceremony',
  assoc_highlight_3_desc: 'Receiving the first place prize and monetary award',
  contact_placeholder_name: 'Wassim Hamdi',
  contact_placeholder_email: 'your@email.com',
  contact_placeholder_subject: 'Project Collaboration',
  contact_placeholder_message: 'Describe your vision or inquiry...',
  contact_fallback_link: 'Email me directly instead →',
  contact_security: 'End-to-end encrypted communication',
  contact_error_fallback: 'Something went wrong. Please try again or email me directly.',
  footer_brand: 'Wassim Hamdi',
  footer_copyright: '\u00a9 {year} \u00b7 Design. Code. Deploy.',
  footer_location: 'Sfax, Tunisia',
  footer_social_github: 'GitHub',
  footer_social_linkedin: 'LinkedIn',
  navbar_logo: 'Wassim\u00a0Hamdi',
  navbar_aria_lang_en: 'Switch to French',
  navbar_aria_lang_fr: 'Passer en anglais',
  navbar_aria_theme: 'Toggle theme',
  seo_title: 'WASSIM HAMDI | Full-Stack Developer',
  seo_desc: 'Wassim Hamdi — Junior Full-Stack Developer. Spring Boot, Angular, Docker, DevOps.',
};

const FR: Translations = {
  nav_home: 'Accueil',
  nav_projects: 'Projets',
  nav_education: 'Formation',
  nav_about: 'À propos',
  nav_activities: 'Activités',
  nav_contact: 'Contact',
  nav_hire: 'M\'embaucher',

  hero_badge: 'Disponible · Ingénieur Logiciel Junior',
  hero_tagline: 'Concevoir l\'avenir, un commit à la fois',
  hero_sub: 'Développeur Full-Stack · Passionné DevOps',
  hero_desc: "Motivé à rejoindre une équipe innovante pour concevoir des applications haute performance. Master en Génie Logiciel à Sfax, Tunisie.",
  hero_portfolio: 'Voir le Portfolio',
  hero_download_cv: 'Télécharger CV',
  hero_scroll: 'Défiler',

  about_role: 'Développeur Full-Stack Junior',
  about_heading: 'Concevoir des Solutions Haute Performance.',
  about_p1: "Je suis Développeur Full-Stack Junior titulaire d'un Master en Développement des Systèmes d'Information et des Réseaux. Je suis passionné par le génie logiciel et les pratiques DevOps.",
  about_p2: 'Motivé à rejoindre des équipes innovantes, je me concentre sur la conception d\'applications performantes, rigoureuses et adaptables aux paysages technologiques en évolution.',
  about_download_cv: 'Télécharger CV',
  about_hire: 'M\'embaucher',
  about_skills_eyebrow: 'mes outils',
  about_skills_heading: 'Compétences Techniques',
  about_skills_sub: 'Une base solide en ingénierie moderne.',
  about_exp_eyebrow: 'Expérience Professionnelle',
  about_exp_heading: 'Parcours Académique & Professionnel',

  edu_eyebrow: 'socle de connaissances',
  edu_heading: 'Architecture',
  edu_accent: 'Académique',
  edu_desc: 'Construire une base solide grâce à des études rigoureuses, des travaux pratiques et une quête constante d\'excellence technique.',
  edu_deg1_title: "Master Professionnel en Développement des Systèmes d'Information et des Réseaux",
  edu_deg1_sub: 'Génie Logiciel et Technologies Émergentes',
  edu_deg1_inst: 'Institut Supérieur des Études Technologiques de Sfax (ISET Sfax)',
  edu_deg2_title: 'Licence Nationale en Informatique',
  edu_deg2_sub: 'Génie Logiciel',
  edu_deg2_inst: 'Faculté des Sciences de Gafsa',

  contact_heading: 'Connectons-nous & collaborons.',
  contact_desc: 'Développeur Full-Stack basé à Sfax, Tunisie. Passionné par le génie logiciel, le DevOps et la création d\'applications haute performance.',
  contact_label_email: 'Email Direct',
  contact_label_phone: 'Téléphone',
  contact_label_location: 'Localisation',
  contact_value_location: 'Sfax, Tunisie',
  contact_label_linkedin: 'LinkedIn',
  contact_form_name: 'NOM COMPLET',
  contact_form_email: 'ADRESSE EMAIL',
  contact_form_subject: 'SUJET',
  contact_form_message: 'MESSAGE',
  contact_form_send: 'Envoyer le Message',
  contact_form_sending: 'Envoi en cours…',
  contact_form_sent: 'Message envoyé !',
  contact_form_sent_sub: 'Merci, je vous répondrai dans les plus brefs délais.',
  contact_form_error_name: 'Le nom est requis.',
  contact_form_error_email: 'Un email valide est requis.',
  contact_form_error_subject: 'Le sujet est requis.',
  contact_form_error_message: 'Le message doit contenir au moins 10 caractères.',

  footer_cta_italic: 'le prochain chapitre commence ici',
  footer_cta_heading: 'Prêt pour le prochain défi.',
  footer_cta_sub: 'Ouvert aux postes full-stack, aux collaborations innovantes et aux opportunités d\'apprentissage.',
  footer_cta_btn: 'Me Contacter',
  footer_contact: 'Contact',

  projects_eyebrow: 'Travaux sélectionnés',
  projects_heading: 'Projets',
  projects_accent: 'GitHub & Code',
  projects_view_gh: 'Voir sur GitHub',
  projects_all_repos: 'Tous les Dépôts',
  projects_contact_me: 'Me Contacter',

  cv_path: 'assets/cv/Wassim_Hamdi_CV_FR.pdf',

  about_img_alt: 'Wassim Hamdi',
  about_msc_badge_title: 'MSc',
  about_msc_badge_sub: 'Master en Génie Logiciel',
  about_mobile_name: 'Wassim Hamdi',
  about_mobile_role: 'MSc · Développeur Full-Stack',
  about_mobile_location: 'Sfax, Tunisie',
  about_skill_label_1: 'Langages',
  about_skill_content_1: 'Java · PHP · JavaScript',
  about_skill_label_2: 'Frontend',
  about_skill_content_2: 'Angular · HTML5 · CSS3 · Bootstrap · Tailwind CSS · .NET',
  about_skill_label_3: 'Backend',
  about_skill_content_3: 'Spring Boot · Symfony · NodeJS · REST APIs',
  about_skill_label_4: 'Mobile',
  about_skill_content_4: 'Flutter · Dart · Android Native · Firebase',
  about_skill_label_5: 'Bases de données',
  about_skill_content_5: 'MySQL · PostgreSQL · SQLServer · MongoDB',
  about_skill_label_6: 'DevOps',
  about_skill_content_6: 'Docker · Jenkins · Maven · Nexus · SonarQube · Git',
  about_skill_label_7: 'Cloud',
  about_skill_content_7: 'Microsoft Azure · Azure Kubernetes Service (AKS)',
  about_skill_label_8: 'Pratiques',
  about_skill_content_8: 'Agile / Scrum · UML · CI/CD · Clean Code',
  exp_1_title: 'Stage de Fin d\'Études | Développeur Full Stack',
  exp_1_company: 'MOMSOFT — Manouba, Tunisie',
  exp_1_period: 'JAN 2025 — JUN 2025',
  exp_1_desc: 'Conception et développement d\'un tableau de bord de maintenance pour l\'Industrie 4.0 — visualisation claire des interventions, arrêts, incidents et KPI (MTTR, MTBF, disponibilité). Filtrage multi-niveaux et graphiques dynamiques. Pipeline CI/CD avec Jenkins, SonarQube, Nexus et Docker sur Azure Kubernetes Service.',
  exp_1_check_1: 'Angular + Spring Boot + Java',
  exp_1_check_2: 'MySQL · MongoDB · Tailwind CSS',
  exp_1_check_3: 'CI/CD : Jenkins · SonarQube · Nexus · GitLab',
  exp_1_check_4: 'Docker · Azure Kubernetes Service (AKS)',
  exp_2_title: 'Stage de Fin d\'Études | Développeur Mobile',
  exp_2_company: 'Faculté des Sciences — Gafsa, Tunisie',
  exp_2_period: 'FÉV 2023 — MAI 2023',
  exp_2_desc: 'Développement d\'une application mobile éducative multiplateforme pour étudiants et enseignants — partage de cours, quiz, événements et messagerie instantanée. Architecture modulaire Flutter & Firebase avec authentification sécurisée, Firestore en temps réel et notifications push.',
  exp_2_check_1: 'Flutter · Dart · Firebase',
  exp_2_check_2: 'Base de données Firestore temps réel',
  exp_2_check_3: 'Notifications push & auth sécurisée',
  exp_2_check_4: 'Méthodologie Agile / Scrum',
  exp_3_title: 'Stage | Développeur Web Frontend',
  exp_3_company: 'STAR Assurances',
  exp_3_period: 'JUIN 2021 — JUIL 2021',
  exp_3_desc: 'Développement d\'une landing page moderne et responsive pour STAR Assurances. Application des meilleures pratiques en performance web et SEO pour maximiser la visibilité en ligne.',
  exp_3_check_1: 'HTML · CSS · Bootstrap · JavaScript',
  exp_3_check_2: 'Bonnes pratiques SEO',
  exp_3_check_3: 'Optimisation des performances web',
  projects_subtitle: 'Dépôts réels de mon GitHub. Cliquez sur une carte pour voir le code source.',
  projects_filter_all: 'Tous',
  projects_filter_fullstack: 'Full-Stack',
  projects_filter_mobile: 'Mobile',
  projects_filter_ai: 'IA',
  projects_filter_iot: 'IoT',
  projects_cta_accent: 'voir plus',
  projects_cta_heading: 'Plus sur <span class="text-indigo-600 dark:text-secondary">GitHub</span>',
  projects_cta_desc: 'Parcourez tous mes dépôts pour plus de projets full-stack, mobile, DevOps et IoT.',
  projects_card_on_gh: 'sur GitHub',
  proj_1_title: 'Tableau de Bord Maintenance Industrie 4.0',
  proj_1_category: 'Full-Stack / DevOps',
  proj_1_desc: 'Tableau de bord de maintenance pour l\'Industrie 4.0 — visualisation interactive des interventions, arrêts, incidents et KPI (MTTR, MTBF, disponibilité). Filtrage multi-niveaux et graphiques dynamiques. Pipeline CI/CD complet avec Jenkins, SonarQube, Nexus et Docker sur Azure Kubernetes Service.',
  proj_2_title: 'Learn Master',
  proj_2_category: 'Mobile / Full-Stack',
  proj_2_desc: 'Application éducative multiplateforme pour étudiants et enseignants — partage de cours, quiz, événements et messagerie instantanée. Architecture modulaire Flutter & Firebase avec auth sécurisée, Firestore temps réel et notifications push.',
  proj_3_title: 'Chatify — Hkeya',
  proj_3_category: 'Full-Stack / Temps Réel',
  proj_3_desc: 'Application de messagerie privée et de groupe en temps réel. Interface de chat épurée avec backend Laravel, Pusher/WebSockets pour les mises à jour en direct et frontend Angular.',
  proj_4_title: 'Chatbot IA',
  proj_4_category: 'Full-Stack / IA',
  proj_4_desc: 'Chatbot IA full-stack — frontend Angular avec backend Flask propulsé par l\'API Groq (LLaMA 3.1) pour des réponses intelligentes en temps réel. Gestion sécurisée des clés API et gestion CORS.',
  proj_5_title: 'Application d\'Irrigation',
  proj_5_category: 'IoT / Mobile',
  proj_5_desc: 'Système d\'irrigation intelligent avec intégration de capteurs IoT. Surveille les conditions du sol et automatise les calendriers d\'arrosage via un tableau de bord mobile, réduisant le gaspillage d\'eau dans l\'agriculture.',
  assoc_eyebrow: 'Au-delà du Code',
  assoc_heading: 'Expérience',
  assoc_accent: 'Associative',
  assoc_desc: 'Réalisations compétitives et travail d\'équipe concret en dehors de la salle de classe.',
  assoc_card_title: 'Gagnant du Concours de Robotique',
  assoc_card_badge: 'Première Place',
  assoc_card_date: 'Hackathon 2.0 · Fév 2022',
  assoc_card_org: 'JCI Gafsa',
  assoc_card_location: 'Gafsa, Tunisie',
  assoc_card_desc: 'Participation à un concours de robotique compétitif où j\'ai collaboré avec une équipe pluridisciplinaire pour concevoir et programmer des robots pour des tâches complexes. Notre équipe a obtenu <strong class="text-slate-900 dark:text-on-surface font-medium">la première place</strong> et remporté le prix en argent grâce à des solutions innovantes, une réflexion stratégique et une exécution excellente.',
  assoc_card_skills_label: 'Technologies & Compétences Appliquées',
  assoc_right_heading: 'Première Place',
  assoc_right_sub: 'Gagnant du Prix en Argent',
  assoc_highlights_heading: 'Temps Forts',
  assoc_highlights_sub: 'Moments clés du concours de robotique',
  assoc_highlights_meta: 'Hackathon 2.0',
  assoc_overlay_label: 'JCI Gafsa · Hackathon 2.0',
  assoc_achievement_1_label: 'Première Place',
  assoc_achievement_1_sub: 'Gagnant du Prix en Argent',
  assoc_achievement_2_label: 'Travail d\'Équipe',
  assoc_achievement_2_sub: 'Équipe Pluridisciplinaire',
  assoc_achievement_3_label: 'Robotique',
  assoc_achievement_3_sub: 'Programmation & Conception',
  assoc_skill_1: 'Programmation Robotique',
  assoc_skill_2: 'Compétition Stratégique',
  assoc_skill_3: 'Coordination d\'Équipe',
  assoc_skill_4: 'Innovation Technique',
  assoc_skill_5: 'Résolution de Problèmes',
  assoc_skill_6: 'Pensée Agile',
  assoc_highlight_1_title: 'Collaboration d\'Équipe',
  assoc_highlight_1_desc: 'Travail en équipe avec les membres durant la compétition',
  assoc_highlight_2_title: 'Robot en Action',
  assoc_highlight_2_desc: 'Programmation et contrôle du robot pendant les tours de compétition',
  assoc_highlight_3_title: 'Cérémonie de Remise',
  assoc_highlight_3_desc: 'Réception du prix de première place et de la récompense en argent',
  contact_placeholder_name: 'Wassim Hamdi',
  contact_placeholder_email: 'votre@email.com',
  contact_placeholder_subject: 'Collaboration Projet',
  contact_placeholder_message: 'Décrivez votre vision ou votre demande...',
  contact_fallback_link: 'Envoyez-moi un email directement →',
  contact_security: 'Communication chiffrée de bout en bout',
  contact_error_fallback: 'Une erreur est survenue. Veuillez réessayer ou m\'envoyer un email directement.',
  footer_brand: 'Wassim Hamdi',
  footer_copyright: '\u00a9 {year} \u00b7 Design. Code. D\u00e9ploiement.',
  footer_location: 'Sfax, Tunisie',
  footer_social_github: 'GitHub',
  footer_social_linkedin: 'LinkedIn',
  navbar_logo: 'Wassim\u00a0Hamdi',
  navbar_aria_lang_en: 'Switch to French',
  navbar_aria_lang_fr: 'Passer en anglais',
  navbar_aria_theme: 'Toggle theme',
  seo_title: 'WASSIM HAMDI | Développeur Full-Stack',
  seo_desc: 'Wassim Hamdi — Développeur Full-Stack Junior. Spring Boot, Angular, Docker, DevOps.',
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  public lang = signal<Lang>('en');

  private get t(): Translations {
    return this.lang() === 'fr' ? FR : EN;
  }

  public get(key: keyof Translations | string): string {
    return this.t[key as keyof Translations] ?? key;
  }

  public toggle(): void {
    const next: Lang = this.lang() === 'en' ? 'fr' : 'en';
    this.lang.set(next);
    localStorage.setItem('lang', next);
  }

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'fr') this.lang.set(saved);
  }
}
