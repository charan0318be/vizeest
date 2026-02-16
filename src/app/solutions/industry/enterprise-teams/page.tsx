'use client';

export default function EnterpriseTeamsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Enterprise Teams
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Large organizations require estimation platforms that scale
            across teams, projects, and geographies—while maintaining
            consistency, governance, and control.
          </p>

        </div>
      </section>

      {/* SCALE ACROSS TEAMS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Built to Scale Across Teams
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: 'Standardized Workflows',
                desc: 'Every project follows the same estimation logic—no regional drift.',
              },
              {
                title: 'Multi-Team Collaboration',
                desc: 'Multiple teams work in parallel without conflicts or duplication.',
              },
              {
                title: 'Portfolio Visibility',
                desc: 'Leadership compares estimates across projects and regions.',
              },
              {
                title: 'Enterprise Consistency',
                desc: 'One source of truth across departments and stakeholders.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]
                           hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GOVERNANCE & CONTROL */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Governance & Control by Design
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: 'Role-Based Access',
                desc: 'Control who can detect, edit, review, and approve quantities.',
              },
              {
                title: 'Audit Trails',
                desc: 'Every action is logged with user, timestamp, and reason.',
              },
              {
                title: 'Revision Accountability',
                desc: 'Track what changed, when, and why—across all revisions.',
              },
              {
                title: 'Approval Workflows',
                desc: 'Formal review and approval stages before downstream use.',
              },
              {
                title: 'Compliance Readiness',
                desc: 'Outputs remain defensible for audits and contractual review.',
              },
              {
                title: 'Change Transparency',
                desc: 'No hidden edits or unexplained quantity movement.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]
                           hover:shadow-[0_18px_40px_rgba(0,0,0,0.65)]"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ENTERPRISE PERFORMANCE */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Enterprise-Grade Performance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

            {[
              {
                title: 'Consistency',
                desc: 'Unified estimation logic across all teams and projects.',
              },
              {
                title: 'Scalability',
                desc: 'Handles enterprise drawing volumes without slowdowns.',
              },
              {
                title: 'Reliability',
                desc: 'Defensible outputs trusted across departments.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]
                           hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
              >
                <p className="text-[#4EBABD] font-bold mb-2">
                  {item.title}
                </p>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Enterprise Estimation Without Compromise
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto  sm:text-base">
          Standardized workflows, enterprise governance, and
          scalable performance—built for organizations that
          operate at scale.
        </p>
      </section>

    </main>
  );
}
