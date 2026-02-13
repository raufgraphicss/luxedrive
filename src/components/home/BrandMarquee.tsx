import { motion } from 'framer-motion';
import { brands } from '@/data/cars';

export const BrandMarquee = () => {
  // Split brands into two rows
  const firstRow = brands.slice(0, 25);
  const secondRow = brands.slice(25, 50);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-luxe mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-title mb-4">50 Premium Brands</h2>
          <p className="text-muted-foreground">
            From everyday excellence to hypercar perfection
          </p>
        </motion.div>
      </div>

      {/* First Row */}
      <div className="relative mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className="flex gap-12 pr-12"
          >
            {[...firstRow, ...firstRow].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex items-center gap-3 glass-subtle rounded-full px-6 py-3 whitespace-nowrap hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-2xl">{getBrandEmoji(brand.country)}</span>
                <span className="font-medium">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row (Reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
            className="flex gap-12 pr-12"
          >
            {[...secondRow, ...secondRow].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex items-center gap-3 glass-subtle rounded-full px-6 py-3 whitespace-nowrap hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-2xl">{getBrandEmoji(brand.country)}</span>
                <span className="font-medium">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function getBrandEmoji(country: string): string {
  const countryEmojis: Record<string, string> = {
    'Japonya': '🇯🇵',
    'Almanya': '🇩🇪',
    'ABD': '🇺🇸',
    'İtalya': '🇮🇹',
    'İngiltere': '🇬🇧',
    'Güney Kore': '🇰🇷',
    'İsveç': '🇸🇪',
    'Fransa': '🇫🇷',
    'Çekya': '🇨🇿',
    'İspanya': '🇪🇸',
    'Romanya': '🇷🇴',
    'Çin': '🇨🇳',
  };
  return countryEmojis[country] || '🚗';
}
