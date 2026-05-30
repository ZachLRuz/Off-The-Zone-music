import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-neutral-950 py-12 border-t border-neutral-900 border-dashed text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} {t('footerRights')}
          </div>
          <div className="flex gap-6">
            <a href="https://soundcloud.com/user-446912465-606345751/albums" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-sm transition-colors uppercase tracking-widest">Soundcloud</a>
            <a href="https://www.instagram.com/offthezonebylruz/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-sm transition-colors uppercase tracking-widest">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
