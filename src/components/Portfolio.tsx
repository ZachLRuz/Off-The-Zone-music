import { useLanguage } from '../context/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-neutral-950 relative" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-4">{t('portTitle')}</h2>
            <p className="text-neutral-400 max-w-xl text-lg">{t('portSubtitle')}</p>
          </div>
        </div>

        <div className="w-full border-t border-neutral-900 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '8f3329fe-11e0-4d5a-b37c-15722f6ff76f',
              'off-the-road',
              'counting-nails',
              'c4rnage',
              'zone-effective',
              'echoes-of-the-curse'
            ].map((albumSetId, index) => (
              <iframe 
                key={index}
                width="100%" 
                height="450" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-446912465-606345751/sets/${albumSetId}&color=%23f59e0b&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
                className="rounded-md shadow-2xl"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

