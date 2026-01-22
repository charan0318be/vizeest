'use client';

import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const coreFeatures = [
  {
    title: 'Intelligent Beam Detection',
    description: 'Advanced algorithms automatically identify and classify structural steel members from engineering drawings with industry-leading accuracy.',
    details: [
      'Auto-detect beams, columns, braces, and connections',
      'Support for complex multi-story structures',
      'Handles overlapping and intersecting members',
      'Learning algorithms improve with usage',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const advancedFeatures = [
  {
    title: 'Visual Verification',
    description: 'Color-coded markup overlays on original drawings for easy verification and review.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Export Flexibility',
    description: 'Export to Excel, CSV, PDF reports, or integrate directly with your ERP systems.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    title: 'Collaboration Tools',
    description: 'Real-time collaboration with team members, comments, and approval workflows.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Audit Trail',
    description: 'Complete history of all changes with timestamps and user attribution.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'API Integration',
    description: 'RESTful APIs for integration with existing estimation and ERP systems.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Custom Templates',
    description: 'Create and save custom report templates for consistent deliverables.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  const { openModal } = useDemoModal();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#030303]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(rgba(78,186,189,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(78,186,189,0.5) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030303_70%)]" />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4EBABD]/20 to-transparent rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#2C7181]/25 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#4EBABD]/10 rounded-full blur-[80px]" />

          {/* Decorative Lines */}
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4EBABD]/10 to-[#2C7181]/10 border border-[#4EBABD]/20 text-[#4EBABD] text-sm font-medium mb-8">
                <div className="w-2 h-2 rounded-full bg-[#4EBABD] animate-pulse" />
                Platform Features
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                Powerful Features for
                <br />
                <span className="bg-gradient-to-r from-[#4EBABD] via-[#5CC8CB] to-[#2C7181] bg-clip-text text-transparent">
                  Modern Steel Estimation
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
                Everything you need to transform your estimation workflow, reduce errors, and win more bids with enterprise-grade tools.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4EBABD] to-[#2C7181]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5CC8CB] to-[#4EBABD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] bg-gradient-to-r from-[#4EBABD] to-[#2C7181] rounded-2xl" />
                  <span className="relative z-10">Start Free Trial</span>
                </button>
                <Link
                  href="/contact"
                  className="group px-8 py-4 rounded-2xl font-semibold text-white bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="relative py-32">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#030303]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4EBABD]/50" />
                <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wider">
                  Core Capabilities
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4EBABD]/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Built for Steel Professionals
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                Professional-grade tools that demand precision and efficiency
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#4EBABD]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  {/* Card */}
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#4EBABD]/30 transition-all duration-500">
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-5xl font-bold text-white/[0.03] group-hover:text-[#4EBABD]/10 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center mb-6 group-hover:shadow-[0_0_40px_rgba(78,186,189,0.3)] transition-all duration-500">
                      <span className="text-white">{feature.icon}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/40 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#4EBABD]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-white/50">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(#4EBABD 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          {/* Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4EBABD]/50" />
                <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wider">
                  Advanced Tools
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4EBABD]/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Enterprise-Grade Capabilities
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                Professional features for teams that need more
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#4EBABD]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD]/20 to-[#2C7181]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#4EBABD]/30 group-hover:to-[#2C7181]/20 transition-all duration-300">
                      <span className="text-[#4EBABD]">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05]">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#4EBABD]/5 via-transparent to-[#2C7181]/5" />

              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '90%', label: 'Faster Estimation' },
                  { value: '98%', label: 'Accuracy Rate' },
                  { value: '500+', label: 'Steel Fabricators' },
                  { value: '24/7', label: 'Phone Support' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EBABD]/[0.03] to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* CTA Card */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#4EBABD]/20 via-[#4EBABD]/5 to-[#2C7181]/20 blur-xl" />

              {/* Card */}
              <div className="relative p-12 md:p-16 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Ready to Transform
                  <br />
                  <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent">
                    Your Estimation?
                  </span>
                </h2>
                <p className="text-lg text-white/40 mb-10 max-w-xl mx-auto">
                  Join 500+ steel fabricators who have already revolutionized their workflow with VizeEST.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openModal}
                    className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4EBABD] to-[#2C7181]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5CC8CB] to-[#4EBABD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10">Start Your Free Trial</span>
                  </button>
                  <Link
                    href="/accelerators"
                    className="px-8 py-4 rounded-2xl font-semibold text-white bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-[#4EBABD]/30 transition-all duration-300"
                  >
                    Join Accelerator - 75% Off
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
