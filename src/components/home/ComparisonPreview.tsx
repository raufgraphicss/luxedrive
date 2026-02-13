import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Zap, Timer } from 'lucide-react';

const previewCars = [
  {
    name: 'Porsche 911 Turbo S',
    brand: 'Porsche',
    hp: 650,
    torque: 800,
    acceleration: 2.7,
    topSpeed: 330,
  },
  {
    name: 'Ferrari F8 Tributo',
    brand: 'Ferrari',
    hp: 720,
    torque: 770,
    acceleration: 2.9,
    topSpeed: 340,
  },
];

export const ComparisonPreview = () => {
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
          <h2 className="text-headline mb-4">Compare Side by Side</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Make informed decisions with our detailed comparison tool. 
            Analyze specs, performance, and more.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
          {/* VS Badge - Centered between cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex"
          >
            <div className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center animate-pulse-glow shadow-[0_0_60px_rgba(255,255,255,0.15)]">
              <span className="text-2xl font-bold text-white">VS</span>
            </div>
          </motion.div>
            {previewCars.map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-3xl overflow-hidden group"
              >
                {/* Car Info */}
                <div className="p-6 pb-0">
                  <p className="text-sm text-muted-foreground mb-1">{car.brand}</p>
                  <h3 className="text-xl font-bold">{car.name}</h3>
                </div>

                {/* Stats */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Gauge className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold">{car.hp}</p>
                    <p className="text-xs text-muted-foreground">HP</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold">{car.torque}</p>
                    <p className="text-xs text-muted-foreground">Nm Torque</p>
                  </div>
                  <div className="text-center">
                    <Timer className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold">{car.acceleration}s</p>
                    <p className="text-xs text-muted-foreground">0-100 km/h</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/compare" className="btn-luxury inline-flex items-center gap-2">
            <span>Start Comparing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
