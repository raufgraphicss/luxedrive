import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ArrowUpRight, Gauge, Zap, Timer } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { brands, getCountries, getAllModels, type Brand } from '@/data/cars';
import { useI18n } from '@/lib/i18n';

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const { t } = useI18n();

  const countries = useMemo(() => getCountries(), []);
  
  const filteredBrands = useMemo(() => {
    return selectedCountry 
      ? brands.filter(b => b.country === selectedCountry)
      : brands;
  }, [selectedCountry]);

  const allModels = useMemo(() => {
    let models = getAllModels();
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      models = models.filter(m => 
        m.name.toLowerCase().includes(query) || 
        m.brand.toLowerCase().includes(query)
      );
    }
    
    if (selectedCountry) {
      models = models.filter(m => {
        const brand = brands.find(b => b.id === m.brandId);
        return brand?.country === selectedCountry;
      });
    }
    
    if (selectedBrand) {
      models = models.filter(m => m.brandId === selectedBrand);
    }
    
    return models;
  }, [searchQuery, selectedCountry, selectedBrand]);

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container-luxe">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-headline mb-4">{t('browse.title')}</h1>
            <p className="text-body-large max-w-2xl mx-auto">
              {t('browse.subtitle')} - {allModels.length} models from {brands.length} brands.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-12"
          >
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('browse.searchPlaceholder')}
                  className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Country Filter */}
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedBrand('');
                }}
                className="px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">{t('browse.allCountries')}</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              {/* Brand Filter */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">{t('browse.allBrands')}</option>
                {filteredBrands.map(brand => (
                  <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Results Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.3) }}
              >
                <Link
                  to={`/car/${model.brandId}/${model.id}`}
                  className="block card-luxe group h-full"
                >

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">{model.brand}</p>
                      <h3 className="font-semibold">{model.name}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-secondary/50">
                      <Gauge className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-bold">{model.specs.hp}</p>
                      <p className="text-[10px] text-muted-foreground">{t('car.hp')}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-secondary/50">
                      <Timer className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-bold">{model.specs.acceleration}s</p>
                      <p className="text-[10px] text-muted-foreground">0-100</p>
                    </div>
                    <div className="p-2 rounded-lg bg-secondary/50">
                      <Zap className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-bold">{model.specs.topSpeed}</p>
                      <p className="text-[10px] text-muted-foreground">km/h</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary">{model.specs.engineType}</span>
                    <span className="font-semibold">{model.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {allModels.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">{t('browse.noResults')}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
