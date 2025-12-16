'use client';

import { useTheme } from '@/context/ThemeContext';

const personas = [
  {
    title: 'Steel Estimators',
    description: 'Reduce estimation time by 80% while improving accuracy. Focus on strategy and value engineering instead of manual takeoffs.',
    features: [
      'Automated material quantity extraction',
      'Historical pricing integration',
      'Bid comparison tools',
      'Change order tracking',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Structural Engineers',
    description: 'Validate designs against material specifications. Cross-reference drawings with engineering calculations instantly.',
    features: [
      'Section property verification',
      'Load capacity checking',
      'Design validation tools',
      'Connection detail extraction',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Project Managers',
    description: 'Track project progress, manage budgets, and coordinate between teams with real-time visibility into estimation status.',
    features: [
      'Multi-project dashboards',
      'Budget tracking & alerts',
      'Team collaboration tools',
      'Progress reporting',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Fabrication Teams',
    description: 'Seamlessly transition from estimation to fabrication with detailed shop drawings and cutting lists.',
    features: [
      'Shop drawing generation',
      'Cutting optimization',
      'Material nesting reports',
      'Production scheduling',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ForTeams() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 transition-colors ${
        theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            For Every Role
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Built for Engineering Teams
            <br />
            <span className="gradient-text">& Estimators</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Whether you&apos;re a solo estimator or part of a large enterprise team, VizeEST adapts to your workflow and amplifies your capabilities.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="enterprise-card flex flex-col"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark'
                    ? 'bg-[#4EBABD]/20 text-[#4EBABD]'
                    : 'bg-gradient-to-br from-[#4EBABD]/10 to-[#2C7181]/10 text-[#4EBABD]'
                }`}>
                  {persona.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>{persona.title}</h3>
                  <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                    {persona.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className={`border-t pt-6 ${
                  theme === 'dark' ? 'border-[#2D2D2D]' : 'border-[#E5E7EB]'
                }`}>
                  <p className={`text-sm font-medium mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>Key Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {persona.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                        }`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
