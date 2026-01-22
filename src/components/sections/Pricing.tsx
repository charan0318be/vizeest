'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    name: 'Founder Accelerator Program',
    description: 'Limited time offer for early adopters',
    price: 499,
    originalPrice: 1999,
    features: [
      'Unlimited drawings',
      'Unlimited storage',
      'PDF & CAD file support',
      'Intelligent beam detection',
      'Automated material take-offs',
      'Excel & CSV exports',
      'Real-time collaboration',
      '24/7 phone support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: null,
    features: [
      'Unlimited drawings',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantee',
      '24/7 phone support',
      'Training & onboarding',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section
      id="pricing"
      className={`py-24 transition-colors relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#F8FAFB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pricing
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-fade-up ${cardsVisible ? 'animate-in' : ''}`}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all hover-lift ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#4EBABD] to-[#2C7181] p-[3px] shadow-2xl scale-105 z-10'
                  : theme === 'dark'
                    ? 'border border-[#2D2D2D] bg-[#121212] p-8'
                    : 'border border-[#E5E7EB] bg-white p-8'
              }`}
            >
              {plan.popular ? (
                <div className={`relative h-full rounded-2xl p-8 ${
                  theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
                }`}>
                  {/* Limited Offer Badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white text-sm font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                      Limited Offer - 75% OFF
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <h4 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-[#121212]'
                    }`}>
                      {plan.name}
                    </h4>
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
                      <span className="text-4xl font-bold gradient-text">
                        ${plan.price?.toLocaleString()}
                      </span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                        /month per user
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
                    className="w-full py-3 px-6 rounded-xl font-medium transition-all bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 shadow-lg hover:shadow-xl"
                  >
                    Register Here
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h4 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-[#121212]'
                    }`}>
                      {plan.name}
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    {plan.price ? (
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-4xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-[#121212]'
                        }`}>
                          ${plan.price.toLocaleString()}
                        </span>
                        <span className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                          /month
                        </span>
                      </div>
                    ) : (
                      <div className={`text-4xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-[#121212]'
                      }`}>
                        Custom
                      </div>
                    )}
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
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all ${
                      theme === 'dark'
                        ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                        : 'bg-[#121212] text-white hover:bg-[#2D2D2D]'
                    }`}
                  >
                    {plan.price ? 'Start Free Trial' : 'Contact Sales'}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
            No credit card required for trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
