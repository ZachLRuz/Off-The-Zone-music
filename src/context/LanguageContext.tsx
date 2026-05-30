import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

const translations = {
  en: {
    heroBadge: 'Original Music & Sound Design',
    heroTitle1: 'Scoring the emotional ',
    heroTitle2: 'core of your story.',
    heroDesc: 'Elevating narrative through cinematic sound. I craft bespoke, emotionally resonant soundtracks for film, games, and premium visual media.',
    heroListen: 'Listen to the Reel',
    heroDiscuss: 'Discuss Your Project',
    heroScroll: 'Discover',

    navWorks: 'Selected Works',
    navServices: 'Services',
    navAbout: 'About',
    navInquire: 'Inquire',

    portTitle: 'Selected Works',
    portSubtitle: 'A highly curated selection of compositions spanning multiple genres and emotional landscapes.',

    servTitle: 'Auditory Architecture',
    servSubtitle: 'Specialized sonic services designed to anchor your narrative and plunge audiences into the world you built.',
    servBtn: 'Inquire \u2192',

    abtBadge1: 'Education',
    abtArchitect: 'Zach LRuz',
    abtTitle1: 'About ',
    abtTitle2: 'Me.',
    abtP1: 'His artistic approach places the emotional core of the visual work at the center of the creative process. His style navigates between cinematic atmospheres, modern electronic textures, and organic orchestral arrangements. He holds a College Diploma (DEC) in Sound Technology from Cégep de Drummondville, as well as a Bachelor\'s Degree in Composition and Music for Screen from Université de Sherbrooke. This dual background allows him to merge technical precision with deep musical storytelling.',
    abtStat1: 'DEC Sound Technology',
    abtStat1School: 'Cégep de Drummondville',
    abtStat2: 'BAC Composition & Music for Screen',
    abtStat2School: 'Université de Sherbrooke',

    contactBadge: 'Collaborate',
    contactTitle1: 'Tell me about the world ',
    contactTitle2: 'you are building.',
    contactDesc: 'Currently accepting inquiries for Q3/Q4 2026. Reach out to request a private reel tailored to your project\'s aesthetic.',
    contactName: 'Name',
    contactNameLabel: 'Your Name',
    contactEmail: 'Email',
    contactEmailLabel: 'Email Address',
    contactProject: 'Select Project Type...',
    contactProjectType1: 'Feature Film / Short',
    contactProjectType2: 'Video Game',
    contactProjectType3: 'Trailer / Promo',
    contactProjectType4: 'Other',
    contactMsg: 'Message',
    contactMsgLabel: 'Project Details & Timeline',
    contactBtn: 'Request Private Reel',
    contactEmailText: 'Or email directly at',

    gamesBadge: 'Game Projects',
    gamesTitle: 'Featured Games',
    gamesDescription: 'Explore the interactive worlds where my music comes alive.',
    
    footerRights: 'Off The Zone by LRuz. All rights reserved.',
    
    playerPlaying: 'Playing',
    playerPaused: 'Paused',
  },
  fr: {
    heroBadge: 'Composition à l\'image & Design Sonore',
    heroTitle1: 'Mettre en musique le cœur ',
    heroTitle2: 'émotionnel de votre histoire.',
    heroDesc: 'Sublimer la narration à travers un son cinématographique. Je crée des bandes sonores sur mesure et chargées d\'émotion pour des films, des jeux et des médias visuels premium.',
    heroListen: 'Écouter la Démo',
    heroDiscuss: 'Discuter de Votre Projet',
    heroScroll: 'Découvrir',

    navWorks: 'Œuvres',
    navServices: 'Services',
    navAbout: 'À propos',
    navInquire: 'Se renseigner',

    portTitle: 'Œuvres Sélectionnées',
    portSubtitle: 'Une sélection pointue de compositions couvrant de multiples genres et paysages émotionnels.',

    servTitle: 'Architecture Sonore',
    servSubtitle: 'Des services sonores spécialisés conçus pour ancrer votre narration et plonger le public dans le monde que vous avez bâti.',
    servBtn: 'Se Renseigner \u2192',

    abtBadge1: 'Formation',
    abtArchitect: 'Zach LRuz',
    abtTitle1: 'À ',
    abtTitle2: 'propos.',
    abtP1: 'Son approche artistique place le cœur émotionnel de l\'œuvre visuelle au centre du processus créatif. Son style navigue entre des ambiances cinématiques, des textures électroniques modernes et des arrangements orchestraux organiques. Il est titulaire d\'un diplôme d\'études collégiales (DEC) en technologie sonore du Cégep de Drummondville, ainsi que d\'un baccalauréat en composition et musique à l\'image de l\'Université de Sherbrooke. Cette double formation lui permet de fusionner précision technique et narration musicale.',
    abtStat1: 'DEC Technologie sonore',
    abtStat1School: 'Cégep de Drummondville',
    abtStat2: 'BAC Composition & Musique à l\'image',
    abtStat2School: 'Université de Sherbrooke',

    contactBadge: 'Collaborer',
    contactTitle1: 'Parlez-moi du monde ',
    contactTitle2: 'que vous construisez.',
    contactDesc: 'J\'accepte actuellement les demandes pour le T3/T4 2026. Contactez-moi pour demander une démo privée adaptée à l\'esthétique de votre projet.',
    contactName: 'Nom',
    contactNameLabel: 'Votre Nom',
    contactEmail: 'E-mail',
    contactEmailLabel: 'Adresse E-mail',
    contactProject: 'Sélectionner un Type de Projet...',
    contactProjectType1: 'Long Métrage / Court Métrage',
    contactProjectType2: 'Jeu Vidéo',
    contactProjectType3: 'Bande-annonce / Promo',
    contactProjectType4: 'Autre',
    contactMsg: 'Message',
    contactMsgLabel: 'Détails du Projet & Calendrier',
    contactBtn: 'Demander une Démo Privée',
    contactEmailText: 'Ou envoyez un e-mail directement à',

    gamesBadge: 'Projets de Jeux',
    gamesTitle: 'Jeux Présentés',
    gamesDescription: 'Explorez les mondes interactifs où ma musique prend vie.',

    footerRights: 'Off The Zone by LRuz. Tous droits réservés.',

    playerPlaying: 'En lecture',
    playerPaused: 'En pause',
  }
};

type Translations = typeof translations.en;
type TranslationKey = keyof Translations;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
