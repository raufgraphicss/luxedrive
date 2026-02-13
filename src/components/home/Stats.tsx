import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { getTotalBrands, getTotalModels, getCountries } from '@/data/cars';
import { Building2, Car, Globe, Sparkles } from 'lucide-react';

const useCounter = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const brandCount = useCounter(getTotalBrands(), 2000, isInView);
  const modelCount = useCounter(getTotalModels(), 2500, isInView);
  const countryCount = useCounter(getCountries().length, 1500, isInView);

  const stats = [
    {
      icon: Building2,
      value: brandCount,
      suffix: '',
      label: 'Premium Brands',
    },
    {
      icon: Car,
      value: modelCount,
      suffix: '+',
      label: 'Car Models',
    },
    {
      icon: Globe,
      value: countryCount,
      suffix: '',
      label: 'Countries',
    },
    {
      icon: Sparkles,
      value: 1,
      suffix: '',
      label: 'AI Consultant',
    },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
