import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useI18n, languageNames, languageFlags, type Language } from '@/lib/i18n';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ['en', 'tr', 'az', 'ru', 'es', 'de'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm">{languageFlags[language]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 py-2 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-200 ${
                    language === lang
                      ? 'bg-white/10 text-white'
                      : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{languageFlags[lang]}</span>
                  <span className="text-sm">{languageNames[lang]}</span>
                  {language === lang && (
                    <motion.div
                      layoutId="language-indicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
