'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const coreFeatures = [
  {
    title: 'Intelligent Beam Detection',
    description: 'Advanced AI algorithms automatically identify and classify structural steel members from engineering drawings with industry-leading accuracy.',
    details: [
      'Auto-detect beams, columns, braces, and connections',
      'Support for complex multi-story structures',
      'Handles overlapping and intersecting members',
      'Learning algorithms improve with usage',
    ],
  },
  {
    title: 'PDF & CAD Support',
    description: 'Process structural drawings from any source with universal file format compatibility.',
    details: [
      'PDF plans and scanned documents',
      'AutoCAD DWG/DXF files',
      'Revit models and IFC exports',
      'Multi-page document processing',
    ],
  },
  {
    title: 'Complete Steel Library',
    description: 'Comprehensive database of steel sections with full material properties for accurate estimation.',
    details: [
      'AISC steel shapes database',
      'European and international sections',
      'Custom section definitions',
      'Material grade specifications',
    ],
  },
  {
    title: 'Automated Take-Off',
    description: 'Generate detailed material take-offs with quantities, weights, and pricing in seconds.',
    details: [
      'Automatic quantity calculations',
      'Weight and length summaries',
      'Cost estimation with pricing',
      'Waste factor calculations',
    ],
  },
  {
    title: 'Manual Override & Editing',
    description: 'Full editing capabilities to refine automated results with intuitive markup tools.',
    details: [
      'Add, modify, or remove members',
      'Adjust dimensions and properties',
      'Annotate drawings with notes',
      'Version control for changes',
    ],
  },
  {
    title: 'Real-Time Processing',
    description: 'Process multi-page documents in minutes with parallel processing architecture.',
    details: [
      'Cloud-based processing power',
      'Handle projects of any size',
      'Progress tracking and notifications',
      'Batch processing capabilities',
    ],
  },
];

const advancedFeatures = [
  {
    title: 'Visual Verification',
    description: 'Color-coded markup overlays on original drawings for easy verification and review.',
  },
  {
    title: 'Export Flexibility',
    description: 'Export to Excel, CSV, PDF reports, or integrate directly with your ERP systems.',
  },
  {
    title: 'Collaboration Tools',
    description: 'Real-time collaboration with team members, comments, and approval workflows.',
  },
  {
    title: 'Audit Trail',
    description: 'Complete history of all changes with timestamps and user attribution.',
  },
  {
    title: 'API Integration',
    description: 'RESTful APIs for integration with existing estimation and ERP systems.',
  },
  {
    title: 'Custom Templates',
    description: 'Create and save custom report templates for consistent deliverables.',
  },
];

export default function FeaturesPage() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();

  return (
    <>
      <Header />
      <main className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#F8FAFB]'}`}>

        {/* Hero Section */}
        <section className={`pt-32 pb-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Features
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Powerful Features for
                <br />
                <span className="gradient-text">Modern Steel Estimation</span>
              </h1>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Everything you need to transform your estimation workflow, reduce errors, and win more bids.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all shadow-lg"
                >
                  Start Free Trial
                </button>
                <Link
                  href="/contact"
                  className={`px-8 py-4 rounded-xl font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                      : 'bg-[#F3F4F6] text-[#121212] hover:bg-[#E5E7EB]'
                  }`}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Core Features
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Built for structural steel professionals who demand precision and efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#121212] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                      : 'bg-white border border-[#E5E7EB] hover:border-[#4EBABD]/50 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {feature.title}
                  </h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#4EBABD] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className={`py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Advanced Capabilities
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Enterprise-grade features for teams that need more
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    theme === 'dark' ? 'bg-[#1A1A1A] border border-[#2D2D2D]' : 'bg-[#F8FAFB] border border-[#E5E7EB]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              Ready to Transform Your Estimation?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Join 500+ steel fabricators who have already revolutionized their workflow with VizeEST.
            </p>
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all shadow-lg"
            >
              Start Your Free Trial
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
