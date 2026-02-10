const qualityFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Accuracy Validation',
    description: 'Multi-stage verification ensures every detected member is validated against drawing specifications.',
    stats: '98.5%',
    statsLabel: 'Accuracy Rate',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Full Audit Trail',
    description: 'Complete history of all changes, approvals, and exports for compliance and accountability.',
    stats: '100%',
    statsLabel: 'Traceability',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Conflict Detection',
    description: 'Automatic identification of overlapping members, dimension conflicts, and  mismatches.',
    stats: 'Real-time',
    statsLabel: 'Detection',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Manual Override',
    description: 'Full control to adjust, add, or remove detected members with intuitive editing tools.',
    stats: 'Full',
    statsLabel: 'Control',
  },
];

const workflowSteps = [
  { step: 1, title: 'Upload', description: 'Submit drawings for processing' },
  { step: 2, title: 'Detect', description: 'System identifies all steel members' },
  { step: 3, title: 'Review', description: 'Human verification & adjustments' },
  { step: 4, title: 'Validate', description: 'Cross-reference with standards' },
  { step: 5, title: 'Approve', description: 'Manager sign-off workflow' },
  { step: 6, title: 'Export', description: 'Generate deliverables' },
];

export default function QualityControl() {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Quality Assurance
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quality, Control
            <br />
            <span className="text-[#06B6D4]">& Transparency</span>
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Trust but verify. VizeEST combines intelligent automation with human oversight to deliver results you can stand behind.
          </p>
        </div>

        {/* Quality Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#06B6D4]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#94A3B8] mb-4">{feature.description}</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-2xl font-bold text-[#06B6D4]">{feature.stats}</div>
                <div className="text-xs text-[#94A3B8]">{feature.statsLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white text-center mb-8">Quality Control Workflow</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-0">
            {workflowSteps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center text-white font-bold mb-2 mx-auto">
                    {item.step}
                  </div>
                  <div className="font-medium text-white text-sm">{item.title}</div>
                  <div className="text-xs text-[#94A3B8] max-w-[100px]">{item.description}</div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <svg className="w-8 h-8 text-[#94A3B8] hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10M+', label: 'Beams Processed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 2min', label: 'Avg. Processing Time' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
