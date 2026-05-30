import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-neutral-950 relative" id="about">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Aesthetic Info / Badges Panel */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start relative">
            <div className="relative">
              <div className="w-[300px] h-[400px] border border-neutral-800 relative z-10 p-8 flex flex-col justify-between bg-neutral-900/50 backdrop-blur-sm">
                <div>
                  <h3 className="text-amber-500 tracking-[0.3em] text-xs uppercase font-semibold mb-2">
                    {t('abtArchitect')}
                  </h3>
                  <div className="h-px w-12 bg-amber-500/50 mb-8" />
                </div>
                
                <div>
                  <p className="text-4xl font-display text-white mb-2">{t('abtBadge1')}</p>
                </div>

                <div className="mt-12 space-y-4">
                  <div className="flex items-start gap-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                     <div>
                       <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{t('abtStat1')}</p>
                       <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">{t('abtStat1School')}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                     <div>
                       <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{t('abtStat2')}</p>
                       <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">{t('abtStat2School')}</p>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Offset decorative border */}
              <div className="absolute -inset-4 border border-amber-500/20 pointer-events-none z-0" />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-10 leading-tight">
              {t('abtTitle1')}
              <span className="text-amber-500">{t('abtTitle2')}</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-neutral-400 text-lg lg:text-xl font-light leading-relaxed">
                {t('abtP1')}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
