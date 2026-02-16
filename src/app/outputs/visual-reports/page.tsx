'use client';

export default function VisualReportsPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* HERO */}
      <section className=" border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

          

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Visual Reports
          </h1>

          <p className="text-white/40 max-w-7xl text-base sm:text-lg leading-relaxed">
            Turn complex estimation data into clear, visual narratives.
            Visual reports combine drawings, quantities, and validation
            context—making results easy to review, approve, and defend.
          </p>

        </div>
      </section>

      {/* CORE VALUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          Reports That Tell the Full Story
        </h2>

        <p className="text-white/40 max-w-4xl  sm:text-base leading-relaxed mb-10">
          Instead of static tables, visual reports place quantities
          back into drawing context—helping stakeholders understand
          what was detected, validated, and approved.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'Overlay quantities directly on drawings',
            'Visual confidence and validation indicators',
            'Reviewer-friendly layouts',
            'Easy comparison across revisions',
          ].map(item => (
            <div
              key={item}
              className="rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         p-6 transition-all duration-300
                         hover:-translate-y-1
                         hover:border-[#4EBABD]"
            >
              <div className="flex items-start gap-3">
                <GreenTick />
                <p className="text-white/40  sm:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* REPORT TYPES */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Types of Visual Reports
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: 'Quantity Overlay Reports',
                desc: 'Detected members and quantities mapped visually onto drawings.',
              },
              {
                title: 'Validation Confidence Views',
                desc: 'Color-coded indicators highlight confidence levels and review needs.',
              },
              {
                title: 'Revision Comparison Reports',
                desc: 'Visual comparison of quantity changes across drawing revisions.',
              },
              {
                title: 'Approval Summary Reports',
                desc: 'Clear visibility into who reviewed and approved estimates.',
              },
              {
                title: 'Client Presentation Reports',
                desc: 'Clean, professional visuals suitable for client delivery.',
              },
              {
                title: 'Audit-Ready Visual Logs',
                desc: 'Visual traceability supporting compliance and audits.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           p-6 transition-all duration-300
                           hover:-translate-y-2
                           hover:border-[#4EBABD]
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Why Visual Reporting Matters
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              Tables alone don’t build trust. Visual reports reduce
              misunderstandings by showing exactly how quantities
              were derived—supporting faster reviews and confident decisions.
            </p>
          </div>

          <ul className="space-y-3 text-white/40 text-sm sm:text-base">
            {[
              'Faster review and approval cycles',
              'Reduced clarification back-and-forth',
              'Improved stakeholder confidence',
              'Stronger audit and claim support',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <GreenTick />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0a0a0a]  border-white/[0.06] py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Make Estimation Results Instantly Understandable
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto  sm:text-base">
          Visual reports transform complex data into
          clear, review-ready outputs—helping teams
          align, approve, and deliver with confidence.
        </p>
      </section>

    </main>
  );
}

/* GREEN TICK ICON */
function GreenTick() {
  return (
    <svg
      className="w-4 h-4 mt-1 text-[#4EBABD] flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
