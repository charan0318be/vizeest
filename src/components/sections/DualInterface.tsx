'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

const steps = [
  {
    title: "Upload drawings",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l1.41-1.41L11 16.17V4h2v12.17l5.59-5.58L20 12" />
      </svg>
    )
  },
  {
    title: "Generate structural visualization",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    )
  },
  {
    title: "Validate scope visually",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Complete estimation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  const { theme } = useTheme();
  const { ref, isVisible, getStaggerClass } = useScrollAnimationGroup(steps.length);

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            How It Works
          </h2>

          <p className={`${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            From drawings to complete estimation in four simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`enterprise-card text-center scroll-fade-up ${
                isVisible ? getStaggerClass(index) : ''
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white">
                {step.icon}
              </div>

              <p className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>
                {step.title}
              </p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(78,186,189,0.3)] transition-all">
            See Full Workflow
          </button>
        </div>

      </div>
    </section>
  );
}