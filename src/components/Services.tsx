import { services } from '../data';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { language, t } = useLanguage();
  const currentServices = services[language];
  
  return (
    <section className="py-32 bg-neutral-900 relative" id="services">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20 text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">{t('servTitle')}</h2>
          <p className="text-neutral-400 text-lg">{t('servSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-800 pt-16">
          {currentServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-display mb-4 text-white">{service.title}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed flex-1">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-sm text-neutral-500 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
