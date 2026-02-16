'use client';

export default function GeneralContractorsPage() {
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
              General Contractors
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            General contractors need fast, trustworthy quantities to
            evaluate bids, control scope, and make confident cost
            decisions throughout the project lifecycle.
          </p>

        </div>
      </section>

      {/* EARLY DECISION MAKING */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for Early Decision-Making
          </h2>

          <p className="text-white/40  sm:text-base leading-relaxed mb-6">
            During bid evaluation, speed matters—but accuracy matters more.
            VizeEST delivers clear, reviewable take-offs so teams understand
            scope before committing capital.
          </p>

          <ul className="space-y-4 text-white/50  sm:text-base">
            {[
              'Compare subcontractor bids using the same quantity baseline',
              'Identify scope gaps before award',
              'Reduce assumptions during tender evaluation',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <GreenTick />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* SCOPE & CHANGE CONTROL */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Control Scope as Projects Evolve
            </h2>

            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
              Design changes are inevitable. What matters is how fast
              you understand their impact.
            </p>

            <ul className="space-y-4 text-white/50  sm:text-base">
              {[
                'Automatic quantity updates on revised drawings',
                'Clear before/after quantity deltas',
                'Immediate visibility into cost and scope impact',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <GreenTick />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VALUE CARDS (replaces empty visual) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {[
              { title: 'Fewer Change Disputes', desc: 'Clear quantity deltas reduce ambiguity and claims.' },
              { title: 'Faster Approvals', desc: 'Stakeholders see exactly what changed and why.' },
              { title: 'Better Cost Control', desc: 'No surprises caused by hidden scope growth.' },
              { title: 'Stronger Owner Confidence', desc: 'Defensible quantities backed by traceability.' },
            ].map(card => (
              <div
                key={card.title}
                className="p-6 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
                  {card.title}
                </p>
                <p className="text-white/40  leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECT LIFECYCLE */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Support Across the Project Lifecycle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

            {[
              {
                title: 'Pre-Construction',
                desc: 'Bid with confidence using verified, review-ready quantities.',
              },
              {
                title: 'Procurement',
                desc: 'Plan materials and pricing from validated scope.',
              },
              {
                title: 'Execution',
                desc: 'Track scope changes without disputes or delays.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:-translate-y-1
                           hover:border-[#4EBABD]"
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

      {/* FINAL VALUE */}
      <section className="relative py-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Clarity That Drives Better Decisions
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto  sm:text-base">
          Transparent quantities, clear scope visibility, and
          revision-aware take-offs—so general contractors
          stay in control from bid to build.
        </p>
      </section>

    </main>
  );
}

/* GREEN TICK */
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
