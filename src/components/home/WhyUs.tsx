import { motion } from 'framer-motion';
import { Database, Brain, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Comprehensive Data',
    description: 'Access detailed specifications for 500+ models from 50 premium brands, updated in real-time.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations based on your preferences, budget, and driving style.',
  },
  {
    icon: Shield,
    title: 'Trusted Reviews',
    description: 'Objective 7-point scoring system covering comfort, speed, sportiness, and more.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant search, real-time comparisons, and seamless browsing experience.',
  },
];

export const WhyUs = () => {
  return (
    <section className="section-padding bg-gradient-radial">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline mb-4">Why LuxeDrive?</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            We've reimagined automotive research with cutting-edge technology and 
            unparalleled data accuracy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-luxe group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl glass-subtle group-hover:bg-white/10 transition-colors duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
