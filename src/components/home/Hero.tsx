import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-spotlight" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Animated circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-white/10 to-transparent blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 container-luxe text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">AI-Powered Automotive Intelligence</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-display mb-6">
            <span className="block">The Future of</span>
            <span className="gradient-text">Driving</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-large max-w-2xl mx-auto mb-12">
            Discover 50 premium brands, compare 500+ models, and get personalized 
            recommendations from our AI consultant. Your journey to the perfect car starts here.
          </p>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/10 to-white/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center glass rounded-full overflow-hidden">
                <Search className="w-5 h-5 ml-6 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by brand, model, or category..."
                  className="flex-1 px-4 py-5 bg-transparent text-primary placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-luxury m-2 flex items-center gap-2"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.form>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/browse" className="btn-luxury flex items-center gap-2">
              <span>Explore All Cars</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/ai" className="btn-luxury-outline flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Ask AI Consultant</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ['20%', '60%', '20%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 bg-muted-foreground rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
