'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation, useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

const integrations = [
  { name: 'SAP', category: 'ERP' },
  { name: 'Oracle', category: 'ERP' },
  { name: 'Microsoft Dynamics', category: 'ERP' },
  { name: 'Procore', category: 'Project Mgmt' },
  { name: 'Autodesk BIM 360', category: 'BIM' },
  { name: 'Tekla', category: 'Detailing' },
  { name: 'Revit', category: 'BIM' },
  { name: 'Bluebeam', category: 'Markup' },
];

const securityFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'SOC 2 Type II Certified',
    description: 'Annual third-party audits ensure our security controls meet the highest standards.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256).',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'SSO & SAML Support',
    description: 'Integrate with your existing identity provider—Okta, Azure AD, and more.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'GDPR Compliant',
    description: 'Full compliance with global data protection regulations.',
  },
];

const deploymentOptions = [
  {
    title: 'Cloud (SaaS)',
    description: 'Fully managed cloud deployment with 99.9% uptime SLA',
    icon: '☁️',
  },
  {
    title: 'On-Premise',
    description: 'Deploy in your own data center with full control',
    icon: '🏢',
  },
  {
    title: 'Hybrid',
    description: 'Combine cloud flexibility with on-premise security',
    icon: '🔗',
  },
  {
    title: 'Private Cloud',
    description: 'Dedicated cloud instance for maximum isolation',
    icon: '🔒',
  },
];

export default function EnterpriseReadiness() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: securityRef, isVisible: securityVisible, getStaggerClass } = useScrollAnimationGroup(securityFeatures.length);
  const { ref: integrationRef, isVisible: integrationVisible } = useScrollAnimation();
  const { ref: deploymentRef, isVisible: deploymentVisible } = useScrollAnimation();
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation();

  return (
    <section
      id="enterprise"
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Enterprise Ready
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Enterprise Readiness
            <br />
            <span className="gradient-text">& Integration</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Built from the ground up to meet the security, compliance, and integration requirements of large organizations.
          </p>
        </div>

        {/* Security Features */}
        <div ref={securityRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border transition-all hover-lift hover-glow scroll-fade-up ${securityVisible ? getStaggerClass(index) : ''} ${
                theme === 'dark'
                  ? 'bg-[#1E1E1E] border-[#2D2D2D] hover:border-[#4EBABD]'
                  : 'bg-[#F8FAFB] border-[#E5E7EB] hover:border-[#4EBABD]'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className={`font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>{feature.title}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Integrations */}
          <div
            ref={integrationRef}
            className={`enterprise-card hover-lift scroll-fade-left ${integrationVisible ? 'animate-in' : ''}`}
          >
            <h3 className={`text-xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}>Seamless Integrations</h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Connect VizeEST with your existing tools and workflows. Pre-built connectors for industry-leading platforms.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all hover:scale-105 scroll-scale-up ${integrationVisible ? 'animate-in' : ''} ${
                    theme === 'dark'
                      ? 'bg-[#2D2D2D] border-[#3D3D3D] hover:border-[#4EBABD]'
                      : 'bg-[#F8FAFB] border-[#E5E7EB] hover:border-[#4EBABD]'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.05}s` }}
                >
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>{integration.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    theme === 'dark'
                      ? 'text-[#9CA3AF] bg-[#1E1E1E]'
                      : 'text-[#6B7280] bg-white'
                  }`}>{integration.category}</span>
                </div>
              ))}
            </div>
            <div className={`mt-6 pt-6 border-t ${
              theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
            }`}>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Don&apos;t see your system? Our REST API enables custom integrations with any platform.
              </p>
            </div>
          </div>

          {/* Deployment Options */}
          <div
            ref={deploymentRef}
            className={`enterprise-card hover-lift scroll-fade-right ${deploymentVisible ? 'animate-in' : ''}`}
          >
            <h3 className={`text-xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-[#121212]'
            }`}>Flexible Deployment</h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Choose the deployment model that fits your organization&apos;s requirements and security policies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {deploymentOptions.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all hover:scale-105 hover-glow scroll-flip-up ${deploymentVisible ? 'animate-in' : ''} ${
                    theme === 'dark'
                      ? 'bg-[#2D2D2D] border-[#3D3D3D] hover:border-[#4EBABD]'
                      : 'bg-[#F8FAFB] border-[#E5E7EB] hover:border-[#4EBABD]'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <h4 className={`font-medium mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>{option.title}</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          ref={badgesRef}
          className={`mt-16 text-center scroll-fade-up ${badgesVisible ? 'animate-in' : ''}`}
        >
          <p className={`text-sm mb-6 uppercase tracking-wider ${
            theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
          }`}>Compliance & Certifications</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['SOC 2', 'ISO 27001', 'GDPR', 'CCPA', 'HIPAA'].map((badge, index) => (
              <div
                key={badge}
                className={`px-6 py-3 rounded-lg border font-medium transition-all hover:scale-110 hover-glow scroll-scale-up ${badgesVisible ? 'animate-in' : ''} ${
                  theme === 'dark'
                    ? 'bg-[#1E1E1E] border-[#2D2D2D] text-[#9CA3AF] hover:text-[#4EBABD] hover:border-[#4EBABD]'
                    : 'bg-[#F8FAFB] border-[#E5E7EB] text-[#6B7280] hover:text-[#4EBABD] hover:border-[#4EBABD]'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
