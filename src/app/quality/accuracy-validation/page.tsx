'use client';

export default function AccuracyValidationPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />

      {/* HERO */}
      <section className="relative pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          
          

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-[1.05]">
            Validation You Can
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Trust at Scale
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Accuracy isn’t assumed—it’s enforced continuously across
            detection, review, and approval before estimates move forward.
          </p>

        </div>
      </section>

      {/* VALIDATION PILLARS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            What Validation Enforces
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              'Cross-drawing verification',
              'Dimensional tolerance checks',
              'Revision-aware quantity comparison',
              'Pre-export validation gates',
            ].map(item => (
              <div
                key={item}
                className="p-6 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <p className="text-white/40  leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW VALIDATION WORKS */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            How Validation Works in Practice
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                step: '01',
                title: 'Compare',
                desc: 'Elements are checked across drawings, sheets, and revisions.',
              },
              {
                step: '02',
                title: 'Verify',
                desc: 'Dimensions and quantities are validated against tolerances.',
              },
              {
                step: '03',
                title: 'Flag',
                desc: 'Conflicts, gaps, and duplicates are surfaced instantly.',
              },
              {
                step: '04',
                title: 'Guide',
                desc: 'Confidence indicators focus review where it matters most.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="group p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-2
                           transition-all duration-300"
              >
                <p className="text-[#4EBABD]  font-semibold mb-3">
                  Step {item.step}
                </p>

                <h3 className="font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="relative py-28 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prevent Risk Before It Escalates
            </h2>

            <p className="text-white/40 mb-10 max-w-lg">
              Even small quantity errors can cascade into major cost,
              procurement, and scheduling issues. Validation stops
              problems before they reach bids or contracts.
            </p>

            <ul className="space-y-4 text-white/50">
              {[
                'Catch errors before submission',
                'Reduce downstream rework',
                'Increase confidence in AI results',
                'Support audit and compliance needs',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PROOF CARD */}
          <div
            className="p-12 rounded-3xl bg-[#0b0b0b]
                       border border-white/[0.08]
                       hover:border-[#4EBABD]
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <h4 className="text-lg font-semibold mb-4">
              Validation Impact
            </h4>

            <p className="text-white/40 leading-relaxed">
              Verified quantities, fewer disputes, and
              defensible estimates—across every project.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative py-24 bg-[#0a0a0a]
                          border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Verified Quantities. Confident Decisions.
        </h3>

        <p className="text-white/40 max-w-2xl mx-auto">
          Accuracy validation ensures every estimate is built
          on verified data—trusted by teams and leadership alike.
        </p>
      </section>

    </main>
  );
}

/* ICON */
function Check() {
  return (
    <svg
      className="w-4 h-4 mt-1 text-[#4EBABD]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
