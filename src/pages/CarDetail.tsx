import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Gauge, Zap, Timer, ArrowUpRight, Star, 
  Play, ExternalLink, ChevronRight, User
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getBrandById, getModelById, type CarModel, type Brand } from '@/data/cars';

import { useI18n } from '@/lib/i18n';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer 
} from 'recharts';

// Simulated reviews
const reviews = [
  {
    id: 1,
    user: 'Michael S.',
    avatar: 'MS',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Absolutely stunning performance and handling. The attention to detail is remarkable.',
  },
  {
    id: 2,
    user: 'Sarah K.',
    avatar: 'SK',
    rating: 4,
    date: '1 month ago',
    comment: 'Great daily driver with enough power for the weekends. Very comfortable interior.',
  },
  {
    id: 3,
    user: 'David L.',
    avatar: 'DL',
    rating: 5,
    date: '2 months ago',
    comment: 'Best car I have ever owned. Worth every penny for the experience it delivers.',
  },
];

// Brand configurator URLs
const brandUrls: Record<string, string> = {
  'toyota': 'https://www.toyota.com/configurator/',
  'volkswagen': 'https://www.volkswagen.com/en/models.html',
  'mercedes-benz': 'https://www.mercedes-benz.com/en/vehicles/',
  'bmw': 'https://www.bmw.com/en/all-models.html',
  'audi': 'https://www.audi.com/en/models.html',
  'porsche': 'https://www.porsche.com/international/modelstart/',
  'ferrari': 'https://www.ferrari.com/en-EN/auto',
  'lamborghini': 'https://www.lamborghini.com/en-en/models',
  'tesla': 'https://www.tesla.com/',
  'ford': 'https://www.ford.com/cars/',
  'honda': 'https://www.honda.com/cars',
};

const CarDetail = () => {
  const { brandId, modelId } = useParams<{ brandId: string; modelId: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const [showVideo, setShowVideo] = useState(false);

  const brand = brandId ? getBrandById(brandId) : undefined;
  const model = brandId && modelId ? getModelById(brandId, modelId) : undefined;

  if (!brand || !model) {
    return (
      <div className="min-h-screen bg-background noise flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <p className="text-muted-foreground mb-8">The car you're looking for doesn't exist.</p>
          <Link to="/browse" className="btn-luxury">
            Browse All Cars
          </Link>
        </div>
      </div>
    );
  }

  const configuratorUrl = brandUrls[brandId!] || 'https://www.google.com/search?q=' + encodeURIComponent(`${brand.name} ${model.name} buy`);

  // Prepare radar chart data
  const radarData = [
    { subject: t('car.power'), value: model.scores.power, fullMark: 10 },
    { subject: t('car.speed'), value: model.scores.speed, fullMark: 10 },
    { subject: t('car.sportiness'), value: model.scores.sportiness, fullMark: 10 },
    { subject: t('car.travel'), value: model.scores.travel, fullMark: 10 },
    { subject: t('car.comfort'), value: model.scores.comfort, fullMark: 10 },
  ];

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-spotlight" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/70 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </motion.button>

          {/* Car Info Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
          >
            <div className="container-luxe">
              <p className="text-sm text-muted-foreground mb-2">{brand.name} · {brand.country}</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{model.name}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm">
                  {model.year}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm">
                  {model.specs.engineType}
                </span>
                <span className="text-2xl font-bold">{model.price}</span>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="container-luxe">
          {/* Quick Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-12 relative z-10 mb-16"
          >
            {[
              { icon: Gauge, label: t('car.hp'), value: model.specs.hp },
              { icon: Zap, label: t('car.torque'), value: `${model.specs.torque} Nm` },
              { icon: Timer, label: t('car.acceleration'), value: `${model.specs.acceleration}s` },
              { icon: ArrowUpRight, label: t('car.topSpeed'), value: `${model.specs.topSpeed} km/h` },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
                <p className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.section>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Radar Chart */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Performance Scores</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 10]} 
                      tick={{ fill: 'rgba(255,255,255,0.4)' }}
                    />
                    <Radar
                      name="Scores"
                      dataKey="value"
                      stroke="rgba(255,255,255,0.8)"
                      fill="rgba(255,255,255,0.2)"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.section>

            {/* Linear Progress Bars */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">{t('car.specs')}</h2>
              <div className="space-y-6">
                {[
                  { label: t('car.comfort'), value: model.scores.comfort },
                  { label: t('car.budget'), value: model.scores.budgetFriendly },
                  { label: t('car.power'), value: model.scores.power },
                  { label: t('car.overall'), value: model.scores.overall },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}/10</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value * 10}%` }}
                        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-white/60 to-white rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Table */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 text-muted-foreground">{t('car.engineType')}</td>
                      <td className="py-3 text-right font-medium">{model.specs.engineType}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Power</td>
                      <td className="py-3 text-right font-medium">{model.specs.hp} HP</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Torque</td>
                      <td className="py-3 text-right font-medium">{model.specs.torque} Nm</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">{t('car.acceleration')}</td>
                      <td className="py-3 text-right font-medium">{model.specs.acceleration}s</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">{t('car.topSpeed')}</td>
                      <td className="py-3 text-right font-medium">{model.specs.topSpeed} km/h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>
          </div>

          {/* Action Buttons */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href={configuratorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury flex-1 inline-flex items-center justify-center gap-2"
            >
              <span>{t('car.buyNow')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="btn-luxury-outline flex-1 inline-flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              <span>{t('car.watchVideo')}</span>
            </button>
          </motion.section>

          {/* Reviews Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">{t('car.reviews')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{review.user}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Related Cars */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">More from {brand.name}</h2>
              <Link 
                to={`/browse?brand=${brandId}`}
                className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brand.models
                .filter(m => m.id !== modelId)
                .slice(0, 4)
                .map((relatedModel, index) => (
                  <motion.div
                    key={relatedModel.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <Link
                      to={`/car/${brandId}/${relatedModel.id}`}
                      className="block card-luxe group"
                    >
                      <h3 className="font-semibold mb-1">{relatedModel.name}</h3>
                      <p className="text-sm text-muted-foreground">{relatedModel.price}</p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-8"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-4xl aspect-video bg-secondary rounded-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <Play className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Video coming soon...</p>
              <p className="text-sm text-muted-foreground mt-2">
                Search for "{brand.name} {model.name} review" on YouTube
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CarDetail;
