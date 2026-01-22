'use client';

import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const solutions = [
  {
    title: 'For Steel Fabricators',
    description: 'Streamline your estimation process and win more bids with accurate, fast takeoffs.',
    benefits: [
      'Reduce estimation time by 80%',
      'Improve bid accuracy to 98%+',
      'Handle more projects with same team',
      'Standardize estimation across projects',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-[#4EBABD] to-[#2C7181]',
  },
  {
    title: 'For General Contractors',
    description: 'Get accurate structural steel estimates quickly to improve project planning and budgeting.',
    benefits: [
      'Faster project cost validation',
      'Better subcontractor management',
      'Reduced change order risks',
      'Improved project margins',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    gradient: 'from-[#2C7181] to-[#4EBABD]',
  },
  {
    title: 'For Engineering Firms',
    description: 'Provide value-added estimation services to clients with professional-grade tools.',
    benefits: [
      'Expand service offerings',
      'Deliver faster turnarounds',
      'Maintain engineering accuracy',
      'Improve client satisfaction',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-[#5CC8CB] to-[#2C7181]',
  },
  {
    title: 'For Enterprise Teams',
    description: 'Scale your estimation capabilities across multiple offices and large project portfolios.',
    benefits: [
      'Centralized estimation standards',
      'Multi-location collaboration',
      'Enterprise security compliance',
      'Custom integrations & APIs',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'from-[#4EBABD] via-[#5CC8CB] to-[#2C7181]',
  },
];

const useCases = [
  {
    title: 'Commercial Buildings',
    description: 'Multi-story office buildings, retail centers, and mixed-use developments.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Industrial Facilities',
    description: 'Warehouses, manufacturing plants, and distribution centers.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure Projects',
    description: 'Bridges, platforms, and heavy industrial structures.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Institutional Buildings',
    description: 'Schools, hospitals, and government facilities.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
];

const enterpriseFeatures = [
  {
    title: 'SOC 2 Type II Certified',
    description: 'Enterprise-grade security with regular third-party audits.',
  },
  {
    title: 'SSO & SAML Integration',
    description: 'Integrate with your existing identity provider.',
  },
  {
    title: 'Custom Deployment',
    description: 'On-premise or private cloud deployment options.',
  },
  {
    title: 'Dedicated Support',
    description: '24/7 support with dedicated account management.',
  },
  {
    title: 'SLA Guarantee',
    description: '99.9% uptime guarantee with enterprise SLAs.',
  },
  {
    title: 'Training & Onboarding',
    description: 'Custom training programs for your team.',
  },
];

export default function SolutionsPage() {
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
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4EBABD]/20 to-transparent rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#2C7181]/25 to-transparent rounded-full blur-[100px]" />

          {/* Decorative Lines */}
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4EBABD]/10 to-[#2C7181]/10 border border-[#4EBABD]/20 text-[#4EBABD] text-sm font-medium mb-8">
                <div className="w-2 h-2 rounded-full bg-[#4EBABD] animate-pulse" />
                Industry Solutions
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                Solutions for Every
                <br />
                <span className="bg-gradient-to-r from-[#4EBABD] via-[#5CC8CB] to-[#2C7181] bg-clip-text text-transparent">
                  Steel Professional
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
                Whether you&apos;re a fabricator, contractor, or engineering firm, VizeEST adapts to your workflow with precision and efficiency.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4EBABD] to-[#2C7181]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5CC8CB] to-[#4EBABD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Get Started</span>
                </button>
                <Link
                  href="/contact"
                  className="group px-8 py-4 rounded-2xl font-semibold text-white bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions by Role */}
        <section className="relative py-32">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#030303]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4EBABD]/50" />
                <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wider">
                  Tailored Solutions
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4EBABD]/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Built for Your Role
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                Specialized workflows and features for different professionals
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card Glow */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#4EBABD]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                  {/* Card */}
                  <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] hover:border-[#4EBABD]/30 transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-start gap-5 mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:shadow-[0_0_40px_rgba(78,186,189,0.3)] transition-all duration-500`}>
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-white/40">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white/60 font-medium">
                            {benefit}
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

        {/* Use Cases */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(#4EBABD 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          {/* Gradient Accents */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4EBABD]/50" />
                <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wider">
                  Project Types
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4EBABD]/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                From simple frames to complex multi-building campuses
              </p>
            </div>

            {/* Use Cases Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group relative text-center"
                >
                  {/* Card */}
                  <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.05] hover:border-[#4EBABD]/20 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4EBABD]/20 to-[#2C7181]/10 flex items-center justify-center text-[#4EBABD] mx-auto mb-5 group-hover:from-[#4EBABD]/30 group-hover:to-[#2C7181]/20 group-hover:shadow-[0_0_30px_rgba(78,186,189,0.2)] transition-all duration-300">
                      {useCase.icon}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="relative py-32">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EBABD]/[0.03] to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4EBABD]/50" />
                <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wider">
                  Enterprise Ready
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4EBABD]/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Built for Scale
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                Security, compliance, and support for large organizations
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#4EBABD]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4EBABD]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4EBABD]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
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

        {/* CTA Section */}
        <section className="relative py-32">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* CTA Card */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#4EBABD]/20 via-[#4EBABD]/5 to-[#2C7181]/20 blur-xl" />

              {/* Card */}
              <div className="relative p-12 md:p-16 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Find the Right
                  <br />
                  <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent">
                    Solution for You
                  </span>
                </h2>
                <p className="text-lg text-white/40 mb-10 max-w-xl mx-auto">
                  Talk to our team to discover how VizeEST can transform your estimation workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openModal}
                    className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4EBABD] to-[#2C7181]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5CC8CB] to-[#4EBABD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10">Schedule a Demo</span>
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
