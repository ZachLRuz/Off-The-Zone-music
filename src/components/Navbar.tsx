import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-medium text-xl tracking-tight text-white flex items-center gap-2">
          Off The Zone by LRuz<span className="text-amber-500 font-bold block w-2 h-2 rounded-full bg-amber-500 mb-0.5"></span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium items-center">
          <a href="#portfolio" className="text-neutral-400 hover:text-white transition-colors">{t('navWorks')}</a>
          <a href="#services" className="text-neutral-400 hover:text-white transition-colors">{t('navServices')}</a>
          <a href="#about" className="text-neutral-400 hover:text-white transition-colors">{t('navAbout')}</a>
          
          <div className="flex items-center gap-2 border-l border-neutral-800 pl-8 ml-2">
            <button 
              onClick={() => setLanguage('fr')} 
              className={`transition-colors ${language === 'fr' ? 'text-amber-500' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              FR
            </button>
            <span className="text-neutral-700">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`transition-colors ${language === 'en' ? 'text-amber-500' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              EN
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex md:hidden items-center gap-2 mr-2">
            <button 
              onClick={() => setLanguage('fr')} 
              className={`text-sm tracking-widest font-medium transition-colors ${language === 'fr' ? 'text-amber-500' : 'text-neutral-500'}`}
            >
              FR
            </button>
            <span className="text-neutral-700">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`text-sm tracking-widest font-medium transition-colors ${language === 'en' ? 'text-amber-500' : 'text-neutral-500'}`}
            >
              EN
            </button>
          </div>
          <a href="#contact" className="text-xs uppercase tracking-widest font-semibold px-5 py-2.5 bg-white/10 hover:bg-white hover:text-neutral-950 text-white transition-colors border border-white/20 hover:border-white">
            {t('navInquire')}
          </a>
        </div>
      </div>
    </nav>
  );
}
