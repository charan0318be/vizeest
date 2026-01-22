'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

const enterpriseHighlights = [
  {
    title: 'SOC 2 Type II Certified',
    description: 'Enterprise-grade security with annual third-party audits.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Deployment',
    description: 'Cloud, on-premise, hybrid, or private cloud options.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'SSO & SAML Support',
    description: 'Integrate with Okta, Azure AD, and more.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect with SAP, Oracle, Procore, and Tekla.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function EnterpriseGlimpse() {
  const { theme } = useTheme();
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="enterprise-glimpse"
      className={`py-20 transition-colors ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`scroll-fade-up ${isVisible ? 'animate-in' : ''}`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Enterprise
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Enterprise-Ready Platform
              </h2>
              <p className={`text-lg max-w-2xl ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Security, compliance, and integration capabilities for large organizations.
              </p>
            </div>
            <Link
              href="/enterprise"
              className="inline-flex items-center gap-2 text-[#4EBABD] font-medium hover:underline group"
            >
              Learn More
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Enterprise Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseHighlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-[#1A1A1A] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                    : 'bg-[#F8FAFB] border border-[#E5E7EB] hover:border-[#4EBABD]/50'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {['SOC 2', 'ISO 27001', 'GDPR', 'CCPA', 'HIPAA'].map((cert) => (
              <span
                key={cert}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-[#2D2D2D] text-[#9CA3AF]'
                    : 'bg-[#F3F4F6] text-[#6B7280]'
                }`}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
