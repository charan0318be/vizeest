'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function PricingGlimpse() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="pricing-glimpse"
      className={`py-20 transition-colors ${theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#F8FAFB]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`scroll-fade-up ${isVisible ? 'animate-in' : ''}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pricing
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              Simple, Transparent Pricing
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Founder Accelerator */}
            <div className="relative bg-gradient-to-br from-[#4EBABD] to-[#2C7181] p-[3px] rounded-2xl shadow-xl">
              <div className={`h-full rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    75% OFF
                  </span>
                </div>
                <div className="text-center mt-2">
                  <h3 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    Founder Accelerator Program
                  </h3>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    Limited time for early adopters
                  </p>
                  <div className="mb-4">
                    <span className={`text-xl line-through ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                      $1,999
                    </span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold gradient-text">$499</span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>/mo</span>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white hover:opacity-90 transition-all"
                  >
                    Register Here
                  </button>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className={`rounded-2xl p-6 ${
              theme === 'dark'
                ? 'bg-[#121212] border border-[#2D2D2D]'
                : 'bg-white border border-[#E5E7EB]'
            }`}>
              <div className="text-center">
                <h3 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                  Enterprise
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  Custom solutions for large teams
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                    Custom
                  </span>
                </div>
                <button
                  onClick={openModal}
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
                      : 'bg-[#121212] text-white hover:bg-[#2D2D2D]'
                  }`}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#4EBABD] font-medium hover:underline group"
            >
              View Full Pricing & Features
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
