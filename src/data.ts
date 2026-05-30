export type Language = 'en' | 'fr';

export type Track = {
  id: string;
  title: string;
  description: string;
  category: string;
  mood: string[];
  duration: string;
  coverImage: string;
};

export const portfolioTracks: Record<Language, Track[]> = {
  en: [
    {
      id: '1',
      title: 'Echoes of the Void',
      description: 'A tense, slow-burn orchestral piece designed for deep-space exploration sequences.',
      category: 'Film',
      mood: ['Tense', 'Atmospheric', 'Dark'],
      duration: '03:42',
      coverImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Neon Bloodline',
      description: 'Aggressive cyberpunk synthwave blending analog synths with heavy industrial percussion.',
      category: 'Game',
      mood: ['Aggressive', 'Energetic', 'Gritty'],
      duration: '02:15',
      coverImage: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'The Last Stand',
      description: 'Epic brass and sweeping strings leading to a massive, trailer-ready climax.',
      category: 'Trailer',
      mood: ['Epic', 'Triumphant', 'Massive'],
      duration: '01:58',
      coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: 'Whispers in the Ash',
      description: 'Minimalist piano and cello duet focusing on loss and quiet reflection.',
      category: 'Ambient',
      mood: ['Melancholy', 'Intimate', 'Quiet'],
      duration: '04:10',
      coverImage: 'https://images.unsplash.com/photo-1478147424096-d98c36af0568?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '5',
      title: 'Rogue Protocol',
      description: 'Fast-paced adaptive combat music with dynamic stems for stealth vs. action.',
      category: 'Game',
      mood: ['Action', 'Suspense', 'Pulsing'],
      duration: '03:30',
      coverImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '6',
      title: 'Arrival of the Monarch',
      description: 'Regal, imposing choral arrangements mixed with modern hybrid sound design.',
      category: 'Film',
      mood: ['Majestic', 'Imposing', 'Dark'],
      duration: '02:45',
      coverImage: 'https://images.unsplash.com/photo-1507676184212-d0330a15233c?auto=format&fit=crop&q=80&w=800'
    }
  ],
  fr: [
    {
      id: '1',
      title: 'Échos du Néant',
      description: 'Une pièce orchestrale tendue et progressive conçue pour des séquences d\'exploration dans l\'espace lointain.',
      category: 'Film',
      mood: ['Tendu', 'Atmosphérique', 'Sombre'],
      duration: '03:42',
      coverImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Lignée Néon',
      description: 'Synthwave cyberpunk agressive mêlant synthétiseurs analogiques et percussions industrielles lourdes.',
      category: 'Jeu vidéo',
      mood: ['Agressif', 'Énergique', 'Brut'],
      duration: '02:15',
      coverImage: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'L\'Ultime Rempart',
      description: 'Cuivres épiques et cordes amples menant à une apothéose massive prête pour le cinéma.',
      category: 'Bande-annonce',
      mood: ['Épique', 'Triomphant', 'Massif'],
      duration: '01:58',
      coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: 'Murmures dans la Cendre',
      description: 'Duo violoncelle et piano minimaliste axé sur la perte et l\'introspection silencieuse.',
      category: 'Ambiant',
      mood: ['Mélancolique', 'Intime', 'Calme'],
      duration: '04:10',
      coverImage: 'https://images.unsplash.com/photo-1478147424096-d98c36af0568?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '5',
      title: 'Protocole Rebelle',
      description: 'Musique de combat adaptative rapide avec des pistes dynamiques pour la furtivité ou l\'action.',
      category: 'Jeu vidéo',
      mood: ['Action', 'Suspense', 'Palpitant'],
      duration: '03:30',
      coverImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '6',
      title: 'Arrivée du Monarque',
      description: 'Arrangements choraux royaux et imposants mixés avec un design sonore hybride moderne.',
      category: 'Film',
      mood: ['Majestueux', 'Imposant', 'Sombre'],
      duration: '02:45',
      coverImage: 'https://images.unsplash.com/photo-1507676184212-d0330a15233c?auto=format&fit=crop&q=80&w=800'
    }
  ]
};

export const clientLogos = [
  { name: 'A24', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/A24_logo.svg' },
  { name: 'Naughty Dog', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Naughty_Dog_Logo.svg' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Annapurna', url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Annapurna_Pictures_logo.svg' }
];

export const services = {
  en: [
    {
      title: 'Film Scoring',
      description: 'Bespoke original scores tailored to the emotional narrative of your film. From intimate indie dramas to sweeping orchestral epics.',
      features: ['Thematic Development', 'Spotting Sessions', 'Live Orchestration Prep']
    },
    {
      title: 'Game Music & Audio',
      description: 'Adaptive and interactive music systems that react to player choices and environmental changes.',
      features: ['Wwise Integration', 'Stems & Layering', 'Combat & Exploration Loops']
    },
    {
      title: 'Trailer & Promo',
      description: 'High-impact, licensed or custom composition designed to grab attention in the first 3 seconds.',
      features: ['Sound Design', 'Hits & Risers', 'Rapid Turnaround']
    }
  ],
  fr: [
    {
      title: 'Musique de Film',
      description: 'Des partitions originales sur mesure adaptées au récit émotionnel de votre film. Des drames indépendants intimes aux épopées orchestrales grandioses.',
      features: ['Développement Thématique', 'Séances de Repérage', 'Préparation Orchestrations Live']
    },
    {
      title: 'Musique & Audio pour Jeux Vidéo',
      description: 'Systèmes musicaux adaptatifs et interactifs qui réagissent aux choix du joueur et aux changements environnementaux.',
      features: ['Intégration Wwise', 'Stems & Superposition', 'Boucles de Combat & Exploration']
    },
    {
      title: 'Bande-annonce & Promo',
      description: 'Composition originale ou sous licence à fort impact, conçue pour capter l\'attention dans les 3 premières secondes.',
      features: ['Design Sonore', 'Impacts & Montées', 'Délais Rapides']
    }
  ]
};

export const portfolioCategories = {
  en: ['All', 'Film', 'Game', 'Ambient', 'Trailer'],
  fr: ['Tout', 'Film', 'Jeu vidéo', 'Ambiant', 'Bande-annonce']
};
