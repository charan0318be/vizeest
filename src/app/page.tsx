import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BeamDetection from '@/components/sections/BeamDetection';
import PDFMarkup from '@/components/sections/PDFMarkup';
import DualInterface from '@/components/sections/DualInterface';
import CollaborationInsights from '@/components/sections/CollaborationInsights';
import EnterpriseOutputs from '@/components/sections/EnterpriseOutputs';
import ForTeams from '@/components/sections/ForTeams';
import EnterpriseReadiness from '@/components/sections/EnterpriseReadiness';
import QualityControl from '@/components/sections/QualityControl';
import WhyChoose from '@/components/sections/WhyChoose';
import Pricing from '@/components/sections/Pricing';

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
        <ForTeams />
        <EnterpriseReadiness />
        <QualityControl />
        <WhyChoose />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
