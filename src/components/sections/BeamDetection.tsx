'use client';

import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation, useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Intelligent Detection',
    description: 'Advanced machine learning algorithms automatically identify and classify structural steel members from engineering drawings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'PDF & CAD Support',
    description: 'Process structural drawings from any source - PDF plans, AutoCAD DWG, Revit models, and scanned documents.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Complete Steel Library',
    description: 'Comprehensive database of AISC, European, and international steel sections with full material properties.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Automated Take-Off',
    description: 'Generate detailed material take-offs with quantities, weights, lengths, and pricing in seconds.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Manual Override',
    description: 'Full editing capabilities to add, modify, or remove detected members with intuitive markup tools.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Real-Time Processing',
    description: 'Process multi-page documents in minutes, not hours. Handle projects of any size with parallel processing.',
  },
];

export default function BeamDetection() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getStaggerClass } = useScrollAnimationGroup(features.length);
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();

  return (
    <section
      id="features"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Core Technology
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            End-to-End Beam Detection
            <br />
            <span className="gradient-text">& Material Take-Off</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            From drawing upload to complete bill of materials in minutes. Our intelligent engine handles the complexity so your team can focus on winning bids.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`enterprise-card group hover-lift hover-glow scroll-fade-up ${gridVisible ? getStaggerClass(index) : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>{feature.title}</h3>
              <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Visual */}
        <div
          ref={bottomRef}
          className={`mt-16 relative scroll-scale-up ${bottomVisible ? 'animate-in' : ''}`}
        >
          <div className={`rounded-2xl p-8 md:p-12 border ${
            theme === 'dark'
              ? 'bg-[#1E1E1E] border-[#2D2D2D]'
              : 'bg-[#F8FAFB] border-[#E5E7EB]'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-[#121212]'
                }`}>
                  See VizeEST in Action
                </h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  Watch how our platform automatically detects steel members, extracts dimensions, and generates complete material schedules from your structural drawings.
                </p>
                <div className="space-y-3">
                  {[
                    'Upload PDF or CAD drawings',
                    'AI detects all steel members automatically',
                    'Review and adjust with intuitive tools',
                    'Export to Excel, CSV, or ERP systems',
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 scroll-fade-left stagger-${index + 1} ${bottomVisible ? 'animate-in' : ''}`}
                      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={theme === 'dark' ? 'text-white' : 'text-[#121212]'}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                {/* Placeholder for demo video/screenshot */}
                <div className="aspect-video bg-gradient-to-br from-[#121212] to-[#1E1E1E] rounded-xl flex items-center justify-center border border-[#2D2D2D] overflow-hidden group cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#4EBABD]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4EBABD]/40 group-hover:scale-110 transition-all">
                      <svg className="w-8 h-8 text-[#4EBABD] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-[#9CA3AF] text-sm group-hover:text-[#4EBABD] transition-colors">Watch Demo Video</p>
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
