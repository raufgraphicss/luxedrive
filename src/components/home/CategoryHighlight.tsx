import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Crown, Leaf } from 'lucide-react';

const categories = [
  {
    id: 'super-sport',
    title: 'Süper Spor',
    subtitle: 'Pure Performance',
    description: 'Experience the pinnacle of automotive engineering with vehicles that push the boundaries of speed and precision.',
    icon: Zap,
    brands: ['Ferrari', 'Lamborghini', 'McLaren', 'Bugatti', 'Pagani'],
    gradient: 'from-red-500/20 via-orange-500/10 to-transparent',
    accent: 'text-red-400',
  },
  {
    id: 'luxury-suv',
    title: 'Lüks SUV',
    subtitle: 'Refined Power',
    description: 'Command the road with uncompromising luxury and capability in the most prestigious SUVs ever crafted.',
    icon: Crown,
    brands: ['Range Rover', 'Bentley Bentayga', 'Rolls-Royce Cullinan', 'Mercedes G-Class'],
    gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    accent: 'text-amber-400',
  },
  {
    id: 'electric',
    title: 'Elektrikli',
    subtitle: 'Silent Revolution',
    description: 'The future is now. Discover electric vehicles that deliver instant power with zero emissions.',
    icon: Leaf,
    brands: ['Tesla', 'Porsche Taycan', 'Rimac', 'Lucid', 'Rivian'],
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    accent: 'text-emerald-400',
  },
];

export const CategoryHighlight = () => {
  return (
    <section className="section-padding">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline mb-4">Explore Categories</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            From track-ready supercars to eco-conscious electric vehicles, 
            find your perfect match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={`/browse?category=${encodeURIComponent(category.title)}`}
                className="group block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-3xl glass hover:bg-white/10 transition-all duration-500">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl glass-subtle mb-6 ${category.accent} w-fit`}>
                      <category.icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${category.accent} mb-2`}>
                        {category.subtitle}
                      </p>
                      <h3 className="text-title mb-4">{category.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {category.description}
                      </p>
                    </div>

                    {/* Brands */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.brands.slice(0, 3).map((brand) => (
                        <span
                          key={brand}
                          className="text-xs px-3 py-1 rounded-full glass-subtle"
                        >
                          {brand}
                        </span>
                      ))}
                      {category.brands.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full glass-subtle">
                          +{category.brands.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-300">
                      <span>Explore {category.title}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
