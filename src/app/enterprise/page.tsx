'use client';

import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const securityFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'SOC 2 Type II Certified',
    description: 'Annual third-party audits ensure our security controls meet the highest standards for data protection and privacy.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256) with customer-managed encryption keys available.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'SSO & SAML Support',
    description: 'Integrate with your existing identity provider—Okta, Azure AD, Google Workspace, OneLogin, and more.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: ['99.9% uptime SLA', 'Auto-scaling', 'Automatic updates', 'Zero maintenance'],
  },
  {
    title: 'On-Premise',
    description: 'Deploy in your own data center with full control over infrastructure and data residency.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Full data control', 'Air-gapped option', 'Custom security policies', 'Your infrastructure'],
  },
  {
    title: 'Hybrid',
    description: 'Combine cloud flexibility with on-premise security for sensitive data processing.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    features: ['Best of both worlds', 'Flexible data routing', 'Compliance friendly', 'Cost optimized'],
  },
  {
    title: 'Private Cloud',
    description: 'Dedicated cloud instance with maximum isolation and customization options.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    features: ['Dedicated resources', 'Custom configurations', 'Enhanced isolation', 'VPC peering'],
  },
];

const enterpriseFeatures = [
  {
    title: 'Dedicated Account Manager',
    description: 'A single point of contact who understands your business and ensures your success.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Custom Training & Onboarding',
    description: 'Tailored training programs for your team with hands-on workshops and documentation.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: '24/7 Priority Support',
    description: 'Round-the-clock phone, email, and chat support with guaranteed response times.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Integrations',
    description: 'Our engineering team builds custom integrations to connect with your existing systems.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'SLA Guarantee',
    description: 'Enterprise-grade SLAs with financial commitments for uptime and support response.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Audit Logs & Compliance',
    description: 'Complete audit trail of all actions with exportable logs for compliance reporting.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const certifications = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'CCPA', 'HIPAA'];

export default function EnterprisePage() {
  const { openModal } = useDemoModal();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero Section with Grid Pattern */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#4EBABD 1px, transparent 1px), linear-gradient(90deg, #4EBABD 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#4EBABD]/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#2C7181]/20 rounded-full blur-[128px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#4EBABD] text-sm font-medium mb-8 animate-fade-in-up">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Enterprise Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up">
                Enterprise-Grade
                <br />
                <span className="bg-gradient-to-r from-[#4EBABD] via-[#5CC8CB] to-[#2C7181] bg-clip-text text-transparent">
                  Security & Scale
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
                Built from the ground up to meet the security, compliance, and integration requirements of the world&apos;s largest organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <button
                  onClick={openModal}
                  className="group relative px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:shadow-[0_0_40px_rgba(78,186,189,0.3)] transition-all duration-300"
                >
                  <span className="relative z-10">Contact Sales</span>
                </button>
                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-xl font-medium bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
                Security First
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Enterprise Security & Compliance
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Trust your sensitive data with enterprise-grade security controls
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.05] hover:border-[#4EBABD]/30 transition-all duration-500"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4EBABD]/0 to-[#2C7181]/0 group-hover:from-[#4EBABD]/5 group-hover:to-[#2C7181]/5 transition-all duration-500" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mb-5 group-hover:shadow-[0_0_30px_rgba(78,186,189,0.3)] transition-all duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="text-center">
              <p className="text-sm text-white/40 uppercase tracking-wider mb-6">
                Certifications & Compliance
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="px-5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/70 font-medium text-sm"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="relative py-24 bg-[#0D0D0D]">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(#4EBABD 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
                Flexible Options
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Deployment Your Way
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Choose the deployment model that fits your organization&apos;s requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {deploymentOptions.map((option, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.05] hover:border-[#4EBABD]/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#4EBABD]/10 flex items-center justify-center text-[#4EBABD] mb-5 group-hover:bg-[#4EBABD]/20 group-hover:shadow-[0_0_20px_rgba(78,186,189,0.2)] transition-all duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-5 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#4EBABD] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-white/60">
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
        <section className="relative py-24">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4EBABD]/5 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
                Connections
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Connect VizeEST with your existing tools and workflows
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.05] hover:border-[#4EBABD]/20 transition-all duration-300 text-center"
                >
                  <p className="font-semibold text-white mb-1">
                    {integration.name}
                  </p>
                  <p className="text-xs text-white/40">
                    {integration.category}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-white/40">
              Don&apos;t see your system? Our REST API enables custom integrations with any platform.
            </p>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="relative py-24 bg-[#0D0D0D]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
                Premium Support
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Enterprise-Grade Support
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Everything you need to scale across your organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] hover:bg-white/[0.05] hover:border-[#4EBABD]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4EBABD]/10 flex items-center justify-center flex-shrink-0 text-[#4EBABD] group-hover:bg-[#4EBABD]/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
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
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '500+', label: 'Enterprise Clients' },
                { value: '24/7', label: 'Priority Support' },
                { value: '<1hr', label: 'Response Time' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4EBABD] to-[#2C7181] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready for Enterprise?
              </h2>
              <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
                Talk to our enterprise team to learn how VizeEST can transform your organization&apos;s steel estimation workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:shadow-[0_0_40px_rgba(78,186,189,0.3)] transition-all duration-300"
                >
                  Contact Enterprise Sales
                </button>
                <Link
                  href="/accelerators"
                  className="px-8 py-4 rounded-xl font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Join Accelerator - 75% Off
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
