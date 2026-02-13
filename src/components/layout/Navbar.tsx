import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Zap } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useI18n } from '@/lib/i18n';

const useNavItems = () => {
  const { t } = useI18n();
  return [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.browse'), path: '/browse' },
    { name: t('nav.compare'), path: '/compare' },
    { name: t('nav.aiConsultant'), path: '/ai' },
  ];
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = useNavItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-4' 
            : 'bg-black/30 backdrop-blur-sm py-6'
        }`}
        style={{ position: 'sticky' }}
      >
        <div className="container-luxe">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 blur-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Luxe<span className="text-muted-foreground">Drive</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Search, Language & Menu */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link
                to="/browse"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-luxe">
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-bold transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
