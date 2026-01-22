'use client';

import { useTheme } from '@/context/ThemeContext';
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
  },
];

const useCases = [
  {
    title: 'Commercial Buildings',
    description: 'Multi-story office buildings, retail centers, and mixed-use developments.',
  },
  {
    title: 'Industrial Facilities',
    description: 'Warehouses, manufacturing plants, and distribution centers.',
  },
  {
    title: 'Infrastructure Projects',
    description: 'Bridges, platforms, and heavy industrial structures.',
  },
  {
    title: 'Institutional Buildings',
    description: 'Schools, hospitals, and government facilities.',
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Solutions
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Solutions for Every
                <br />
                <span className="gradient-text">Steel Professional</span>
              </h1>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Whether you&apos;re a fabricator, contractor, or engineering firm, VizeEST adapts to your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all shadow-lg"
                >
                  Get Started
                </button>
                <Link
                  href="/contact"
                  className={`px-8 py-4 rounded-xl font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                      : 'bg-[#F3F4F6] text-[#121212] hover:bg-[#E5E7EB]'
                  }`}
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions by Role */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Tailored for Your Role
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Specialized workflows and features for different professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#121212] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                      : 'bg-white border border-[#E5E7EB] hover:border-[#4EBABD]/50 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                        {solution.title}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`${theme === 'dark' ? 'text-[#D1D5DB]' : 'text-[#4B5563]'}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className={`py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Project Types We Support
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                From simple frames to complex multi-building campuses
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center ${
                    theme === 'dark' ? 'bg-[#1A1A1A] border border-[#2D2D2D]' : 'bg-[#F8FAFB] border border-[#E5E7EB]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {useCase.title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Enterprise Ready
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Security, compliance, and support for large organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-[#121212] border border-[#2D2D2D]'
                      : 'bg-white border border-[#E5E7EB] shadow-sm'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#4EBABD]/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
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
        <section className={`py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              Find the Right Solution for You
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Talk to our team to discover how VizeEST can transform your estimation workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all shadow-lg"
              >
                Schedule a Demo
              </button>
              <Link
                href="/accelerators"
                className={`px-8 py-4 rounded-xl font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                    : 'bg-[#F3F4F6] text-[#121212] hover:bg-[#E5E7EB]'
                }`}
              >
                Join Accelerator Program
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
