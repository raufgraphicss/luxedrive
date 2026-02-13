import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { brands, getAllModels, type CarModel } from '@/data/cars';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { ArrowRight, Gauge, Zap, Timer, Trophy } from 'lucide-react';

const Compare = () => {
  const allModels = useMemo(() => getAllModels(), []);
  const [carA, setCarA] = useState<string>('');
  const [carB, setCarB] = useState<string>('');

  const modelA = allModels.find(m => m.id === carA);
  const modelB = allModels.find(m => m.id === carB);

  const getRadarData = (model: typeof modelA) => {
    if (!model) return [];
    return [
      { subject: 'Comfort', A: model.scores.comfort },
      { subject: 'Speed', A: model.scores.speed },
      { subject: 'Sport', A: model.scores.sportiness },
      { subject: 'Travel', A: model.scores.travel },
      { subject: 'Budget', A: model.scores.budgetFriendly },
      { subject: 'Power', A: model.scores.power },
    ];
  };

  const CompareBar = ({ label, valueA, valueB, unit }: { label: string; valueA: number; valueB: number; unit: string }) => {
    const max = Math.max(valueA, valueB);
    return (
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className={valueA >= valueB ? 'text-primary font-bold' : 'text-muted-foreground'}>{valueA} {unit}</span>
          <span className="font-medium">{label}</span>
          <span className={valueB >= valueA ? 'text-primary font-bold' : 'text-muted-foreground'}>{valueB} {unit}</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden flex justify-end">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(valueA / max) * 100}%` }}
              className={`h-full rounded-full ${valueA >= valueB ? 'bg-primary' : 'bg-muted-foreground'}`}
            />
          </div>
          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(valueB / max) * 100}%` }}
              className={`h-full rounded-full ${valueB >= valueA ? 'bg-primary' : 'bg-muted-foreground'}`}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container-luxe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-headline mb-4">Compare Cars</h1>
            <p className="text-body-large max-w-2xl mx-auto">
              Select two vehicles to see a detailed side-by-side comparison.
            </p>
          </motion.div>

          {/* Selectors */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-6">
              <label className="block text-sm font-medium mb-3">Select Car A</label>
              <select
                value={carA}
                onChange={(e) => setCarA(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Choose a car...</option>
                {allModels.map(model => (
                  <option key={model.id} value={model.id}>{model.brand} {model.name}</option>
                ))}
              </select>
            </div>

            <div className="glass rounded-2xl p-6">
              <label className="block text-sm font-medium mb-3">Select Car B</label>
              <select
                value={carB}
                onChange={(e) => setCarB(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Choose a car...</option>
                {allModels.map(model => (
                  <option key={model.id} value={model.id}>{model.brand} {model.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Results */}
          {modelA && modelB && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Names Header */}
              <div className="glass rounded-2xl p-6">
                <div className="relative grid grid-cols-3 items-center text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">{modelA.brand}</p>
                    <h3 className="text-xl font-bold">{modelA.name}</h3>
                    <p className="text-lg font-semibold text-muted-foreground">{modelA.price}</p>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                      <span className="text-2xl font-bold text-white">VS</span>
                    </div>
                  </div>
                  <div className="col-start-3">
                    <p className="text-sm text-muted-foreground">{modelB.brand}</p>
                    <h3 className="text-xl font-bold">{modelB.name}</h3>
                    <p className="text-lg font-semibold text-muted-foreground">{modelB.price}</p>
                  </div>
                </div>
              </div>

              {/* Specs Comparison */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-6 text-center">Performance Specs</h4>
                <CompareBar label="Horsepower" valueA={modelA.specs.hp} valueB={modelB.specs.hp} unit="HP" />
                <CompareBar label="Torque" valueA={modelA.specs.torque} valueB={modelB.specs.torque} unit="Nm" />
                <CompareBar label="Top Speed" valueA={modelA.specs.topSpeed} valueB={modelB.specs.topSpeed} unit="km/h" />
                <CompareBar label="0-100 km/h" valueA={modelA.specs.acceleration} valueB={modelB.specs.acceleration} unit="s" />
              </div>

              {/* Radar Charts */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-center">{modelA.brand} {modelA.name}</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={getRadarData(modelA)}>
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                      <Radar name={modelA.name} dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-center">{modelB.brand} {modelB.name}</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={getRadarData(modelB)}>
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                      <Radar name={modelB.name} dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
