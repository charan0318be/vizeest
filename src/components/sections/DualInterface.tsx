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

const automationFeatures = [
  'REST API integration',
  'Batch processing',
  'Webhook notifications',
  'Custom workflows',
  'Headless operation',
  'CI/CD pipeline support',
];

export default function DualInterface() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: webCardRef, isVisible: webCardVisible } = useScrollAnimation();
  const { ref: automationCardRef, isVisible: automationCardVisible } = useScrollAnimation();

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
            Dual Interface:
            <br />
            <span className="gradient-text">Web App + Automation Engine</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Whether you prefer an intuitive web interface or need programmatic access for automation, VizeEST delivers both with enterprise-grade reliability.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Web Application */}
          <div
            ref={webCardRef}
            className={`rounded-xl p-8 border transition-all hover:border-[#4EBABD] hover-lift scroll-fade-left ${webCardVisible ? 'animate-in' : ''} ${
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

            <div className="grid grid-cols-2 gap-3 mb-8">
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

          {/* Automation Engine */}
          <div
            ref={automationCardRef}
            className={`rounded-xl p-8 border transition-all hover:border-[#4EBABD] hover-lift scroll-fade-right ${automationCardVisible ? 'animate-in' : ''} ${
              theme === 'dark'
                ? 'bg-[#121212] border-[#2D2D2D]'
                : 'bg-white border-[#E5E7EB] shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C7181] to-[#4EBABD] flex items-center justify-center text-white float-medium">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-[#121212]'
                }`}>Automation Engine</h3>
                <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>For developers & IT teams</p>
              </div>
            </div>

            <p className={`mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Full API access for seamless integration with your existing systems. Automate estimation workflows, process drawings in batch, and build custom applications.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {automationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 scroll-fade-up ${automationCardVisible ? 'animate-in' : ''}`}
                  style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
                >
                  <svg className="w-5 h-5 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Code Preview */}
            <div className={`rounded-xl overflow-hidden border ${
              theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
            } bg-[#0F172A]`}>
              <div className="p-2 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-[#94A3B8]">api_example.py</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-[#94A3B8]"># Process drawings via API</div>
                <div className="mt-2">
                  <span className="text-[#F472B6]">from</span>
                  <span className="text-white"> vizeest </span>
                  <span className="text-[#F472B6]">import</span>
                  <span className="text-white"> Client</span>
                </div>
                <div className="mt-2">
                  <span className="text-white">client = Client(api_key=</span>
                  <span className="text-[#4EBABD]">&quot;...&quot;</span>
                  <span className="text-white">)</span>
                </div>
                <div className="mt-2">
                  <span className="text-white">result = client.detect(</span>
                </div>
                <div className="pl-4">
                  <span className="text-white">file=</span>
                  <span className="text-[#4EBABD]">&quot;drawing.pdf&quot;</span>
                </div>
                <div className="text-white">)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
