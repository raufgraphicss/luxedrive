import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Schmidt',
    role: 'Porsche Enthusiast',
    avatar: 'AS',
    content: 'LuxeDrive helped me choose between the 911 Turbo S and the GT3. The comparison tool is incredibly detailed and the AI consultant understood exactly what I was looking for.',
    rating: 5,
  },
  {
    name: 'Sophia Chen',
    role: 'EV Advocate',
    avatar: 'SC',
    content: 'Finally, a platform that takes electric vehicles seriously. The range and charging data for each model is spot-on. Made my Tesla vs Taycan decision so much easier.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Car Collector',
    avatar: 'MW',
    content: 'As someone who collects hypercars, the depth of information on Pagani, Bugatti, and McLaren models is unmatched. This is my go-to resource now.',
    rating: 5,
  },
];

export const Testimonials = () => {
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
          <h2 className="text-headline mb-4">Trusted by Enthusiasts</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            Join thousands of automotive enthusiasts who rely on LuxeDrive for 
            their research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-3xl p-8 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted-foreground/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-subtle flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
