import { useLanguage } from '../context/LanguageContext';

export function Games() {
  const { t } = useLanguage();
  
  const games = [
    {
      title: "Oceanborne",
      developer: "javyfrogs",
      url: "https://javyfrogs.itch.io/oceanborne",
      image: "https://img.itch.zone/aW1nLzI0NzY4MzAxLnBuZw==/original/7fKRgT.png",
      description: "Survive sharks and solitude while drifting on a raft in a world flooded by the ocean.",
      tags: ["Survival", "Open World"]
    },
    {
      title: "C4RNAGE: Deadly Mycelium Robots",
      developer: "playCARNAGE",
      url: "https://playcarnage.itch.io/c4rnage",
      image: "https://img.itch.zone/aW1nLzIxMjIxMzUwLnBuZw==/original/GYKn52.png",
      description: "Face a lethal threat in a fast-paced universe dominated by rogue mycelium robots.",
      tags: ["Action", "Sci-Fi"]
    },
    {
      title: "Echoes of the Curse",
      developer: "flippintable",
      url: "https://flippintable.itch.io/echoes-of-the-curse",
      image: "https://img.itch.zone/aW1nLzI3Mjg4OTIxLnBuZw==/original/YaGUVt.png",
      description: "Unravel an ancient curse in this dark, atmospheric adventure.",
      tags: ["Adventure", "Horror"]
    },
    {
      title: "Coded Kingdom",
      developer: "xnubbeh",
      url: "https://xnubbeh.itch.io/coded-kingdom",
      image: "https://img.itch.zone/aW1nLzE4NDYxMzQzLnBuZw==/original/bt4c%2FD.png",
      description: "An educational video game where players learn programming by writing code to progress through a magical adventure.",
      tags: ["Educational", "Adventure"]
    }
  ];

  return (
    <section className="py-32 bg-neutral-900 relative" id="games">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="inline-block text-amber-500 tracking-[0.2em] text-sm uppercase font-semibold mb-4">
            {t('gamesBadge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">{t('gamesTitle')}</h2>
          <p className="text-neutral-400 text-lg">{t('gamesDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <a 
              key={index} 
              href={game.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-900 transition-all duration-300 relative overflow-hidden h-full rounded-sm"
            >
              {/* Cover Art */}
              <div className="w-full aspect-video bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-display text-white mb-2 group-hover:text-amber-500 transition-colors">{game.title}</h3>
                  <p className="text-sm text-neutral-500 font-mono">by {game.developer}</p>
                </div>
                
                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                  {game.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-amber-500/80 bg-amber-500/10 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-amber-500 text-sm font-medium uppercase tracking-wider group-hover:gap-3 transition-all duration-300 gap-2 mt-auto">
                  itch.io
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
