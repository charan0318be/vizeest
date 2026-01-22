'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const plans = [
  {
    name: 'Founder Accelerator Program',
    description: 'Limited time offer for early adopters',
    price: 499,
    originalPrice: 1999,
    period: '/month per user',
    features: [
      'Unlimited drawings',
      'Unlimited storage',
      'PDF & CAD file support',
      'Intelligent beam detection',
      'Automated material take-offs',
      'Excel & CSV exports',
      'Real-time collaboration',
      'Priority email support',
      'Custom report templates',
      'API access',
    ],
    popular: true,
    cta: 'Register Here',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: null,
    period: 'Custom pricing',
    features: [
      'Everything in Founder Accelerator',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom integrations',
      'On-premise deployment option',
      'SLA guarantee (99.9% uptime)',
      '24/7 phone support',
      'Training & onboarding',
      'SSO/SAML authentication',
      'Audit logs & compliance',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

const faqs = [
  {
    question: 'What happens after my trial ends?',
    answer: 'After your 14-day trial, you can choose to continue with any of our plans. Your data and projects will be preserved, and you can pick up right where you left off.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! Annual billing comes with a 20% discount compared to monthly billing. Contact our sales team for details.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'We support PDF plans, AutoCAD DWG/DXF files, Revit models, IFC exports, and scanned documents. More formats are added regularly.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are SOC 2 Type II certified with end-to-end encryption, and comply with GDPR, CCPA, and HIPAA regulations.',
  },
  {
    question: 'Can I get a demo before purchasing?',
    answer: 'Of course! Request a demo and our team will walk you through the platform and answer any questions you have.',
  },
];

const comparisonFeatures = [
  { name: 'Drawings per month', founder: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Storage', founder: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Team members', founder: 'Up to 10', enterprise: 'Unlimited' },
  { name: 'PDF & CAD support', founder: true, enterprise: true },
  { name: 'Intelligent beam detection', founder: true, enterprise: true },
  { name: 'Automated take-offs', founder: true, enterprise: true },
  { name: 'Excel & CSV exports', founder: true, enterprise: true },
  { name: 'Real-time collaboration', founder: true, enterprise: true },
  { name: 'API access', founder: true, enterprise: true },
  { name: 'Custom integrations', founder: false, enterprise: true },
  { name: 'On-premise deployment', founder: false, enterprise: true },
  { name: 'SSO/SAML', founder: false, enterprise: true },
  { name: 'Dedicated account manager', founder: false, enterprise: true },
  { name: 'SLA guarantee', founder: false, enterprise: true },
  { name: '24/7 phone support', founder: false, enterprise: true },
  { name: 'Custom training', founder: false, enterprise: true },
];

export default function PricingPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Simple, Transparent
                <br />
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Choose the plan that fits your team. All plans include a 14-day free trial with no credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 -mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-br from-[#4EBABD] to-[#2C7181] p-[3px] shadow-2xl scale-105 z-10'
                      : theme === 'dark'
                        ? 'border border-[#2D2D2D] bg-[#121212]'
                        : 'border border-[#E5E7EB] bg-white'
                  }`}
                >
                  {plan.popular ? (
                    <div className={`relative h-full rounded-2xl p-8 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
                      {/* Limited Offer Badge */}
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white text-sm font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                          Limited Offer - 75% OFF
                        </div>
                      </div>

                      <div className="text-center mb-6 mt-4">
                        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                          {plan.name}
                        </h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-center mb-6">
                        {plan.originalPrice && (
                          <div className={`text-2xl line-through mb-1 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                            ${plan.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-bold gradient-text">
                            ${plan.price?.toLocaleString()}
                          </span>
                          <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={openModal}
                        className="w-full py-4 px-6 rounded-xl font-medium transition-all bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 shadow-lg hover:shadow-xl"
                      >
                        {plan.cta}
                      </button>
                    </div>
                  ) : (
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                          {plan.name}
                        </h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                          {plan.description}
                        </p>
                      </div>

                      <div className="text-center mb-6">
                        <div className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                          Custom
                        </div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                          {plan.period}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={openModal}
                        className={`w-full py-4 px-6 rounded-xl font-medium transition-all ${
                          theme === 'dark'
                            ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                            : 'bg-[#121212] text-white hover:bg-[#2D2D2D]'
                        }`}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className={`text-center text-sm mt-8 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
              No credit card required for trial • Cancel anytime • 20% discount on annual billing
            </p>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className={`py-20 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Compare Plans
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                See what&apos;s included in each plan
              </p>
            </div>

            <div className={`rounded-xl overflow-hidden border ${theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'}`}>
              {/* Header */}
              <div className={`grid grid-cols-3 ${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-[#F8FAFB]'}`}>
                <div className={`p-4 font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                  Feature
                </div>
                <div className={`p-4 font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                  Founder Accelerator
                </div>
                <div className={`p-4 font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                  Enterprise
                </div>
              </div>

              {/* Rows */}
              {comparisonFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 border-t ${
                    theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
                  }`}
                >
                  <div className={`p-4 text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {feature.name}
                  </div>
                  <div className="p-4 text-center">
                    {typeof feature.founder === 'boolean' ? (
                      feature.founder ? (
                        <svg className="w-5 h-5 text-[#10B981] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[#6B7280] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                        {feature.founder}
                      </span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <svg className="w-5 h-5 text-[#10B981] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[#6B7280] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                        {feature.enterprise}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-[#121212] border border-[#2D2D2D]'
                      : 'bg-white border border-[#E5E7EB]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    {faq.question}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {faq.answer}
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
              Ready to Transform Your Estimation?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Start your 14-day free trial today. No credit card required.
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
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
