import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../assets/images/Background Zach-1.png';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-950/50 z-10" />
        <img 
          src={heroImage} 
          alt="Musician playing guitar" 
          className="w-full h-full object-cover object-center scale-110 brightness-125 animate-[pulse_30s_ease-in-out_infinite_alternate]"
        />
        {/* Strong shadow on the left to hide the can */}
        <div className="absolute inset-y-0 left-0 w-2/3 md:w-1/2 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent z-20 pointer-events-none" />
        {/* Subtle gradient treatment */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50 z-20 pointer-events-none" />
      </div>

      <div className="relative z-30 container mx-auto px-6 pt-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex flex-col items-center gap-3">
            <h1 className="text-3xl md:text-5xl font-display text-white font-bold tracking-widest uppercase">
              Zachary LRuz Lamoureux
            </h1>
            <span className="inline-block text-amber-500 tracking-[0.2em] text-sm md:text-base uppercase font-semibold">
              {t('heroBadge')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
