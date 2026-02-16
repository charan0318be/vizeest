'use client';

export default function WebApplicationPlatformPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wide">
            Platform
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Web
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Application
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            A modern, browser-based estimation platform designed
            for performance, collaboration, and enterprise scale—
            without local installations or IT overhead.
          </p>

        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Modern Estimation Teams
          </h2>

          <p className="text-white/40 leading-relaxed mb-12">
            The web application serves as the central workspace
            where detection, validation, collaboration, and
            governance come together in a single, secure interface.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Browser-Based Access',
                desc: 'Access the platform securely from anywhere without installing software.',
              },
              {
                title: 'Always Up to Date',
                desc: 'New capabilities and improvements are delivered automatically.',
              },
              {
                title: 'Centralized Workspace',
                desc: 'All estimation workflows live in one consistent environment.',
              },
              {
                title: 'Enterprise-Ready',
                desc: 'Designed to meet performance, security, and compliance needs.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:border-[#4EBABD]/40
                           hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE PLATFORM CAPABILITIES */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Platform Capabilities
            </h2>
            <p className="text-white/40">
              Everything required to manage estimation workflows
              end-to-end—inside a single web application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Powered Detection',
                desc: 'Detect structural elements directly from drawings using AI.',
              },
              {
                title: 'Real-Time Collaboration',
                desc: 'Multiple users work simultaneously with full visibility.',
              },
              {
                title: 'Validation & Review',
                desc: 'Built-in tools ensure quantities are verified before export.',
              },
              {
                title: 'Governance & Audit Trails',
                desc: 'Every action is logged for traceability and compliance.',
              },
              {
                title: 'Secure Role-Based Access',
                desc: 'Permissions ensure users only see what they are authorized to.',
              },
              {
                title: 'Seamless Integrations',
                desc: 'Outputs flow reliably into downstream enterprise systems.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:border-[#4EBABD]/40
                           hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW TEAMS USE IT */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            How Teams Use the Web Application
          </h2>

          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]">
            <ul className="space-y-4 text-white/50 text-sm">
              {[
                'Upload drawings and manage documents centrally',
                'Run AI detection and validate results collaboratively',
                'Apply approvals and governance controls',
                'Export verified quantities to downstream systems',
                'Track activity, revisions, and performance metrics',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 mt-1 text-[#4EBABD]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* FINAL VALUE */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          One Platform. One Workflow.
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto text-base">
          The web application unifies estimation, collaboration,
          and governance—so teams work faster without losing control.
        </p>
      </section>

    </main>
  );
}
