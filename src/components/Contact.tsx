import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-neutral-950 border-t border-neutral-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block text-amber-500 tracking-[0.2em] text-sm uppercase font-semibold mb-6">
            {t('contactBadge')}
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-center mb-16">
            {t('contactTitle1')} <br className="hidden md:block"/>{t('contactTitle2')}
          </h2>

          <form className="w-full max-w-2xl space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-neutral-800 py-4 px-0 text-white placeholder-transparent focus:border-amber-500 focus:outline-none peer"
                  placeholder={t('contactName')}
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-neutral-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500"
                >
                  {t('contactNameLabel')}
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-neutral-800 py-4 px-0 text-white placeholder-transparent focus:border-amber-500 focus:outline-none peer"
                  placeholder={t('contactEmail')}
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-neutral-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500"
                >
                  {t('contactEmailLabel')}
                </label>
              </div>
            </div>

            <div className="relative group">
              <select 
                id="projectType"
                className="w-full bg-transparent border-b border-neutral-800 py-4 px-0 text-white focus:border-amber-500 focus:outline-none appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="bg-neutral-900">{t('contactProject')}</option>
                <option value="film" className="bg-neutral-900">{t('contactProjectType1')}</option>
                <option value="game" className="bg-neutral-900">{t('contactProjectType2')}</option>
                <option value="trailer" className="bg-neutral-900">{t('contactProjectType3')}</option>
                <option value="other" className="bg-neutral-900">{t('contactProjectType4')}</option>
              </select>
            </div>

            <div className="relative group">
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-neutral-800 py-4 px-0 text-white placeholder-transparent focus:border-amber-500 focus:outline-none peer resize-none"
                placeholder={t('contactMsg')}
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-neutral-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500"
              >
                {t('contactMsgLabel')}
              </label>
            </div>

            <div className="pt-4 flex justify-center">
              <button className="px-12 py-5 bg-white text-neutral-950 hover:bg-amber-500 transition-colors rounded-none font-medium text-lg tracking-wide w-full md:w-auto">
                {t('contactBtn')}
              </button>
            </div>
          </form>

          <div className="mt-16 text-center space-y-4">
            <h3 className="text-xl text-white font-medium mb-6 uppercase tracking-widest">Contact</h3>
            <p className="text-neutral-500 text-lg">
              <a href="mailto:offthezonemusic@gmail.com" className="text-white border-b border-transparent hover:text-amber-500 hover:border-amber-500 transition-colors pb-1">offthezonemusic@gmail.com</a>
            </p>
            <p className="text-neutral-500 text-lg">
              <a href="tel:18732009805" className="text-white border-b border-transparent hover:text-amber-500 hover:border-amber-500 transition-colors pb-1">(873)-200-9805</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
