import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { BrandMarquee } from '@/components/home/BrandMarquee';
import { CategoryHighlight } from '@/components/home/CategoryHighlight';
import { ComparisonPreview } from '@/components/home/ComparisonPreview';
import { Stats } from '@/components/home/Stats';
import { WhyUs } from '@/components/home/WhyUs';
import { Testimonials } from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <CategoryHighlight />
        <ComparisonPreview />
        <Stats />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
