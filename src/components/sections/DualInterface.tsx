'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const webFeatures = [
  'Interactive web dashboard',
  'Real-time collaboration',
  'Visual markup tools',
  'Instant previews',
  'Cloud-based storage',
  'Role-based access control',
];

export default function DualInterface() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: webCardRef, isVisible: webCardVisible } = useScrollAnimation();

  return (
    <section
      id="solutions"
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Flexible Deployment
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Powerful
            <br />
            <span className="gradient-text">Web Application</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            An intuitive web interface designed for estimators and project managers, delivering enterprise-grade reliability.
          </p>
        </div>

        {/* Web Application Card */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={webCardRef}
            className={`rounded-xl p-8 border transition-all hover:border-[#4EBABD] hover-lift scroll-fade-up ${webCardVisible ? 'animate-in' : ''} ${
              theme === 'dark'
                ? 'bg-[#121212] border-[#2D2D2D]'
                : 'bg-white border-[#E5E7EB] shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white float-slow">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-[#121212]'
                }`}>Web Application</h3>
                <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>For estimators & project managers</p>
              </div>
            </div>

            <p className={`mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              A powerful yet intuitive web interface designed for daily use. Upload drawings, review detections, make adjustments, and generate reports—all from your browser.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {webFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 scroll-fade-up ${webCardVisible ? 'animate-in' : ''}`}
                  style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
                >
                  <svg className="w-5 h-5 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Web App Preview */}
            <div className={`rounded-xl overflow-hidden border ${
              theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
            }`}>
              <div className={`p-2 flex items-center gap-2 border-b ${
                theme === 'dark' ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-[#F8FAFB] border-[#E5E7EB]'
              }`}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className={`text-xs ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>app.vizeest.com</span>
                </div>
              </div>
              <div className={`p-6 ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
                <div className="grid grid-cols-3 gap-4">
                  <div className={`col-span-2 rounded-lg h-32 flex items-center justify-center ${
                    theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#F8FAFB]'
                  }`}>
                    <span className={`text-sm ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#94A3B8]'}`}>Drawing Preview</span>
                  </div>
                  <div className="space-y-2">
                    <div className={`rounded-lg h-10 shimmer ${theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#F8FAFB]'}`} />
                    <div className={`rounded-lg h-10 shimmer ${theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#F8FAFB]'}`} style={{ animationDelay: '0.1s' }} />
                    <div className={`rounded-lg h-10 shimmer ${theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#F8FAFB]'}`} style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
