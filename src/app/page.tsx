import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BeamDetection from '@/components/sections/BeamDetection';
import PDFMarkup from '@/components/sections/PDFMarkup';
import DualInterface from '@/components/sections/DualInterface';
import CollaborationInsights from '@/components/sections/CollaborationInsights';
import EnterpriseOutputs from '@/components/sections/EnterpriseOutputs';
import ForTeams from '@/components/sections/ForTeams';
import QualityControl from '@/components/sections/QualityControl';
import FeaturesGlimpse from '@/components/sections/FeaturesGlimpse';
import SolutionsGlimpse from '@/components/sections/SolutionsGlimpse';
import EnterpriseGlimpse from '@/components/sections/EnterpriseGlimpse';
import PricingGlimpse from '@/components/sections/PricingGlimpse';
import WhyChoose from '@/components/sections/WhyChoose';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeamDetection />
        <PDFMarkup />
        <DualInterface />
        <CollaborationInsights />
        <EnterpriseOutputs />
        <FeaturesGlimpse />
        <SolutionsGlimpse />
        <ForTeams />
        <EnterpriseGlimpse />
        <QualityControl />
        <WhyChoose />
        <PricingGlimpse />
      </main>
      <Footer />
    </>
  );
}
