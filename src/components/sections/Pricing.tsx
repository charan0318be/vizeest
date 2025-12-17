'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    name: 'Professional',
    description: 'Everything you need per user',
    monthlyPrice: 599,
    annualPrice: 350,
    features: [
      'Unlimited drawings',
      'Unlimited storage',
      'PDF & CAD file support',
      'Intelligent beam detection',
      'Automated material take-offs',
      'Excel & CSV exports',
      'Real-time collaboration',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: null,
    annualPrice: null,
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
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className={`py-24 transition-colors relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#F8FAFB]'
      }`}
    >
      {/* Christmas Decorations Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Snowflakes */}
        <div className="absolute top-10 left-[10%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>❄️</div>
        <div className="absolute top-20 right-[15%] text-3xl opacity-15 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>❄️</div>
        <div className="absolute top-40 left-[25%] text-2xl opacity-10 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>❄️</div>
        <div className="absolute top-32 right-[30%] text-3xl opacity-15 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>❄️</div>
        <div className="absolute bottom-40 left-[5%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>❄️</div>
        <div className="absolute bottom-20 right-[8%] text-2xl opacity-15 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2.5s' }}>❄️</div>
        
        {/* Decorative lights */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Holiday Banner */}
        <div
          ref={headerRef}
          className={`mb-16 scroll-fade-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#c41e3a] via-[#dc143c] to-[#228b22] p-8 md:p-12 text-center">
            {/* Banner decorations */}
            <div className="absolute top-4 left-4 text-4xl">🎄</div>
            <div className="absolute top-4 right-4 text-4xl">🎄</div>
            <div className="absolute bottom-4 left-8 text-3xl">🎁</div>
            <div className="absolute bottom-4 right-8 text-3xl">🎅</div>
            
            {/* Sparkle effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
                <span>✨</span>
                Limited Time Offer
                <span>✨</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                🎅 Holiday Special Sale 🎄
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Get <span className="font-bold text-yellow-300">25% OFF</span> on all annual plans!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                  <p className="text-white/80 text-sm">Offer ends</p>
                  <p className="text-xl font-bold text-white">Dec 31, 2025</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                🔔 Hurry! This festive offer won&apos;t last forever!
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h3>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-gradient-to-r from-[#c41e3a]/10 to-[#228b22]/10 border border-[#c41e3a]/20">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-gradient-to-r from-[#c41e3a] to-[#228b22] text-white shadow-lg'
                  : theme === 'dark'
                    ? 'text-[#9CA3AF] hover:text-white'
                    : 'text-[#6B7280] hover:text-[#121212]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-gradient-to-r from-[#c41e3a] to-[#228b22] text-white shadow-lg'
                  : theme === 'dark'
                    ? 'text-[#9CA3AF] hover:text-white'
                    : 'text-[#6B7280] hover:text-[#121212]'
              }`}
            >
              Annual
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isAnnual
                  ? 'bg-white/20 text-white'
                  : 'bg-[#c41e3a] text-white'
              }`}>
                Save 25%
              </span>
            </button>
          </div>
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
                  ? 'bg-gradient-to-br from-[#c41e3a] via-[#dc143c] to-[#228b22] p-[3px] shadow-2xl scale-105 z-10'
                  : theme === 'dark'
                    ? 'border border-[#2D2D2D] bg-[#121212] p-8'
                    : 'border border-[#E5E7EB] bg-white p-8'
              }`}
            >
              {plan.popular ? (
                <div className={`relative h-full rounded-2xl p-8 ${
                  theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
                }`}>
                  {/* Popular Badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#c41e3a] to-[#228b22] text-white text-sm font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                      <span>🎁</span>
                      <span>Most Popular</span>
                      <span>✨</span>
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
                    {isAnnual && (
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className={`text-lg line-through ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                          ${plan.monthlyPrice}
                        </span>
                        <span className="bg-[#c41e3a] text-white text-xs font-bold px-2 py-0.5 rounded">
                          25% OFF
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl font-bold bg-gradient-to-r from-[#c41e3a] to-[#228b22] bg-clip-text text-transparent`}>
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                        /month per user
                      </span>
                    </div>
                    {isAnnual && (
                      <p className={`text-xs mt-2 font-medium ${theme === 'dark' ? 'text-[#4EBABD]' : 'text-[#2C7181]'}`}>
                        💳 Billed annually at ${(plan.annualPrice * 12).toLocaleString()}
                      </p>
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
                    className="w-full py-3 px-6 rounded-xl font-medium transition-all bg-gradient-to-r from-[#c41e3a] to-[#228b22] text-white hover:opacity-90 shadow-lg hover:shadow-xl"
                  >
                    Start Free Trial
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
                    {plan.monthlyPrice ? (
                      <>
                        {isAnnual && (
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <span className={`text-lg line-through ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                              ${plan.monthlyPrice}
                            </span>
                            <span className="bg-[#c41e3a] text-white text-xs font-bold px-2 py-0.5 rounded">
                              25% OFF
                            </span>
                          </div>
                        )}
                        <div className="flex items-baseline justify-center gap-1">
                          <span className={`text-4xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-[#121212]'
                          }`}>
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                            /month
                          </span>
                        </div>
                        {isAnnual && (
                          <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                            Billed annually at ${(plan.annualPrice * 12).toLocaleString()}
                          </p>
                        )}
                      </>
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
                    {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
            🎄 Holiday discount applied automatically at checkout • No credit card required for trial
          </p>
        </div>
      </div>
    </section>
  );
}

