'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

const features = [
  {
    title: 'Intelligent Detection',
    description: 'Intelligent beam and column detection from PDF and CAD drawings.',
  },
  {
    title: 'Automated Take-Off',
    description: 'Generate material quantities, weights, and costs in seconds.',
  },
  {
    title: 'Visual Verification',
    description: 'Color-coded markup overlays for easy review and validation.',
  },
  {
    title: 'Enterprise Exports',
    description: 'Excel, CSV, and PDF reports with custom templates.',
  },
];

export default function FeaturesGlimpse() {
  const { theme } = useTheme();
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="features-glimpse"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Features
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                Powerful Estimation Tools
              </h2>
              <p className={`text-lg max-w-2xl ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                Everything you need to streamline your structural steel estimation workflow.
              </p>
            </div>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[#4EBABD] font-medium hover:underline group"
            >
              View All Features
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-[#1A1A1A] border border-[#2D2D2D] hover:border-[#4EBABD]/50'
                    : 'bg-[#F8FAFB] border border-[#E5E7EB] hover:border-[#4EBABD]/50'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
      </div>
    </section>
  );
}
