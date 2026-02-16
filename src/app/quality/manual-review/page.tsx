'use client';

export default function ManualReviewWorkflowPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute bottom-24 left-1/4 w-40 h-40 bg-[#4EBABD]/10 rounded-full blur-2xl animate-bounce" />

      {/* INTRO HEADER */}
      <section className="relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <span className="text-[#4EBABD] tracking-wide font-medium">
            Quality & Governance
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Manual Review Workflow
          </h1>

          <p className="text-white/40 max-w-7xl text-base sm:text-lg leading-relaxed">
            Automation accelerates estimation — but responsibility
            and final accountability remain with human experts.
            Manual review ensures precision, trust, and defensible
            outcomes at every stage.
          </p>
        </div>
      </section>

      {/* REVIEW STAGES */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          Review Stages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Visual Review',
              desc: 'Inspect detected elements directly on drawings with full contextual clarity.',
            },
            {
              step: '02',
              title: 'Expert Adjustment',
              desc: 'Apply estimator judgement where automation requires interpretation.',
            },
            {
              step: '03',
              title: 'Validation',
              desc: 'Confirm quantities align with scope, standards, and design intent.',
            },
            {
              step: '04',
              title: 'Final Approval',
              desc: 'Authorize quantities for reporting and downstream workflows.',
            },
          ].map(item => (
            <div
              key={item.step}
              className="group relative rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         p-6 transition-all duration-300
                         hover:-translate-y-2
                         hover:border-[#4EBABD]
                         hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
            >
              <span className="block text-[#4EBABD]  mb-1">
                Step {item.step}
              </span>

              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute inset-0 rounded-3xl bg-[#4EBABD]/5
                              opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEW CANVAS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="relative">
          
          <div className="absolute -top-6 -right-6 w-24 h-24
                          bg-[#4EBABD]/20 rounded-full blur-2xl animate-pulse" />
        </div>

        <p className="text-white/40  sm:text-base leading-relaxed max-w-5xl">
          Reviewers work directly inside the drawing context,
          ensuring corrections are informed, traceable,
          and professionally defensible.
        </p>
      </section>

      {/* WHY MANUAL REVIEW */}
      <section className="relative bg-[#0a0a0a]  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Why Manual Review Is Still Essential
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Design Ambiguity',
                desc: 'Drawings contain notes, assumptions, and edge cases that require human interpretation.',
              },
              {
                title: 'Project-Specific Logic',
                desc: 'Client standards, regional practices, and fabrication preferences vary by project.',
              },
              {
                title: 'Risk Ownership',
                desc: 'Final quantities must be owned by professionals — not algorithms.',
              },
              {
                title: 'Audit & Claims Defense',
                desc: 'Manual approvals create a clear chain of responsibility for audits and disputes.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-6 transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.65)]"
              >
                <h3 className="font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute inset-0 rounded-3xl bg-[#4EBABD]/5
                                opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          Benefits of a Structured Review Workflow
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
                       text-white/40 text-sm sm:text-base">
          <li>Reduced estimation risk</li>
          <li>Clear approval accountability</li>
          <li>Higher bid confidence</li>
          <li>Fewer downstream disputes</li>
          <li>Better estimator collaboration</li>
          <li>Consistent quality across projects</li>
        </ul>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative bg-[#0a0a0a]  py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          AI Speed. Human Responsibility.
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-sm sm:text-base">
          Automation accelerates estimation — but manual review ensures
          every result stands up to professional, contractual,
          and real-world scrutiny.
        </p>
      </section>

    </main>
  );
}
