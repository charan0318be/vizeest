'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const securityFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'SOC 2 Type II Certified',
    description: 'Annual third-party audits ensure our security controls meet the highest standards for data protection and privacy.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256) with customer-managed encryption keys available.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'SSO & SAML Support',
    description: 'Integrate with your existing identity provider—Okta, Azure AD, Google Workspace, OneLogin, and more.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'GDPR & CCPA Compliant',
    description: 'Full compliance with global data protection regulations including GDPR, CCPA, and HIPAA.',
  },
];

const integrations = [
  { name: 'SAP', category: 'ERP' },
  { name: 'Oracle', category: 'ERP' },
  { name: 'Microsoft Dynamics', category: 'ERP' },
  { name: 'Procore', category: 'Project Management' },
  { name: 'Autodesk', category: 'BIM' },
  { name: 'Tekla', category: 'Detailing' },
  { name: 'Revit', category: 'BIM' },
  { name: 'Bluebeam', category: 'Markup' },
];

const deploymentOptions = [
  {
    title: 'Cloud (SaaS)',
    description: 'Fully managed cloud deployment with 99.9% uptime SLA. Auto-scaling, automatic updates, and zero maintenance.',
    icon: '☁️',
    features: ['99.9% uptime SLA', 'Auto-scaling', 'Automatic updates', 'Zero maintenance'],
  },
  {
    title: 'On-Premise',
    description: 'Deploy in your own data center with full control over infrastructure and data residency.',
    icon: '🏢',
    features: ['Full data control', 'Air-gapped option', 'Custom security policies', 'Your infrastructure'],
  },
  {
    title: 'Hybrid',
    description: 'Combine cloud flexibility with on-premise security for sensitive data processing.',
    icon: '🔗',
    features: ['Best of both worlds', 'Flexible data routing', 'Compliance friendly', 'Cost optimized'],
  },
  {
    title: 'Private Cloud',
    description: 'Dedicated cloud instance with maximum isolation and customization options.',
    icon: '🔒',
    features: ['Dedicated resources', 'Custom configurations', 'Enhanced isolation', 'VPC peering'],
  },
];

const enterpriseFeatures = [
  {
    title: 'Dedicated Account Manager',
    description: 'A single point of contact who understands your business and ensures your success.',
  },
  {
    title: 'Custom Training & Onboarding',
    description: 'Tailored training programs for your team with hands-on workshops and documentation.',
  },
  {
    title: '24/7 Priority Support',
    description: 'Round-the-clock phone, email, and chat support with guaranteed response times.',
  },
  {
    title: 'Custom Integrations',
    description: 'Our engineering team builds custom integrations to connect with your existing systems.',
  },
  {
    title: 'SLA Guarantee',
    description: 'Enterprise-grade SLAs with financial commitments for uptime and support response.',
  },
  {
    title: 'Audit Logs & Compliance',
    description: 'Complete audit trail of all actions with exportable logs for compliance reporting.',
  },
];

const certifications = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'CCPA', 'HIPAA'];

export default function EnterprisePage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Enterprise
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Enterprise-Grade
                <br />
                <span className="gradient-text">Security & Scale</span>
              </h1>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Built from the ground up to meet the security, compliance, and integration requirements of the world&apos;s largest organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all shadow-lg"
                >
                  Contact Sales
                </button>
                <Link
                  href="/pricing"
                  className={`px-8 py-4 rounded-xl font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                      : 'bg-[#F3F4F6] text-[#121212] hover:bg-[#E5E7EB]'
                  }`}
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Security & Compliance
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Trust your sensitive data with enterprise-grade security controls
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#121212] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                      : 'bg-white border border-[#E5E7EB] hover:border-[#4EBABD]/50 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="text-center">
              <p className={`text-sm mb-6 uppercase tracking-wider ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Certifications & Compliance
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className={`px-6 py-3 rounded-lg border font-medium ${
                      theme === 'dark'
                        ? 'bg-[#1E1E1E] border-[#2D2D2D] text-[#9CA3AF]'
                        : 'bg-white border-[#E5E7EB] text-[#6B7280]'
                    }`}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className={`py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Flexible Deployment Options
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Choose the deployment model that fits your organization&apos;s requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deploymentOptions.map((option, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#1A1A1A] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                      : 'bg-[#F8FAFB] border border-[#E5E7EB] hover:border-[#4EBABD]/50'
                  }`}
                >
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {option.title}
                  </h3>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-xs ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Seamless Integrations
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Connect VizeEST with your existing tools and workflows
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center transition-all hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#121212] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                      : 'bg-white border border-[#E5E7EB] hover:border-[#4EBABD]/50 shadow-sm'
                  }`}
                >
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {integration.name}
                  </p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {integration.category}
                  </p>
                </div>
              ))}
            </div>

            <p className={`text-center text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Don&apos;t see your system? Our REST API enables custom integrations with any platform.
            </p>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className={`py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Enterprise Features
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Everything you need to scale across your organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature, index) => (
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
              Ready for Enterprise?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Talk to our enterprise team to learn how VizeEST can transform your organization&apos;s steel estimation workflow.
            </p>
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all shadow-lg"
            >
              Contact Enterprise Sales
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
