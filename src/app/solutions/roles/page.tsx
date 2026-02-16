'use client';

export default function IndustryRolesPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wide">
            Industry Roles
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Built for Every Role
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              in Estimation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            VizeEST adapts to the needs of every role involved in
            estimation—providing clarity, accountability, and
            control across the entire workflow.
          </p>

        </div>
      </section>

      {/* ROLES GRID */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: 'Estimators',
                desc: 'Generate fast, accurate take-offs with AI assistance while retaining full control.',
                points: [
                  'AI-assisted detection',
                  'Manual quantity adjustments',
                  'Revision-aware updates',
                ],
              },
              {
                title: 'Reviewers',
                desc: 'Validate quantities, flag conflicts, and enforce quality standards.',
                points: [
                  'Visual validation',
                  'Conflict identification',
                  'Approval workflows',
                ],
              },
              {
                title: 'Project Managers',
                desc: 'Maintain visibility into estimate progress, risks, and changes.',
                points: [
                  'Progress tracking',
                  'Audit visibility',
                  'Scope change awareness',
                ],
              },
              {
                title: 'Fabrication Teams',
                desc: 'Receive clean, fabrication-ready quantities aligned with shop standards.',
                points: [
                  'Material schedules',
                  'Profile consistency',
                  'Reduced rework',
                ],
              },
              {
                title: 'Procurement Teams',
                desc: 'Plan purchases and pricing using reliable, validated quantities.',
                points: [
                  'Export-ready data',
                  'Cost confidence',
                  'Reduced material waste',
                ],
              },
              {
                title: 'Leadership',
                desc: 'Ensure governance, scalability, and consistency across the organization.',
                points: [
                  'Audit trails',
                  'Standardized workflows',
                  'Enterprise visibility',
                ],
              },
            ].map(role => (
              <div
                key={role.title}
                className="group relative rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-8 transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]/40
                           hover:shadow-[0_20px_55px_rgba(0,0,0,0.75)]"
              >
                <h3 className="text-xl font-semibold mb-3
                               group-hover:text-[#4EBABD] transition">
                  {role.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {role.desc}
                </p>

                <ul className="space-y-3 text-white/50 text-sm">
                  {role.points.map(point => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-[#4EBABD] mt-[2px]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CARD GLOW */}
                <div className="absolute inset-0 rounded-3xl bg-[#4EBABD]/5
                                opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          One Platform. Every Role Aligned.
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
          By supporting every role in the estimation process,
          VizeEST eliminates handoffs, reduces miscommunication,
          and ensures everyone works from the same trusted data.
        </p>
      </section>

    </main>
  );
}
