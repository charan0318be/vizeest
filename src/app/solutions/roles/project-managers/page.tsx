'use client';

export default function ProjectManagersPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl scroll-fade-up animate-in">

          
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Project Managers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Project managers rely on accurate quantities to control
            scope, cost, and timelines. Clear visibility into what
            changed—and why—keeps projects predictable and on track.
          </p>

        </div>
      </section>

      {/* CORE VALUE CARDS */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 scroll-fade-up animate-in">
            Visibility Across the Project Lifecycle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: 'Early Planning Clarity',
                desc: 'Reliable quantities support budgeting, procurement planning, and realistic project baselines.',
              },
              {
                title: 'Change Awareness',
                desc: 'As drawings evolve, quantity deltas are immediately visible—no manual rework required.',
              },
              {
                title: 'Delivery Confidence',
                desc: 'Traceable quantities and audit trails simplify reporting, close-out, and handover.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className="
                  group relative rounded-3xl bg-[#0b0b0b]
                  border border-white/[0.08]
                  p-8 scroll-scale-up animate-in
                  hover-lift hover-glow
                "
              >
                <h3 className="text-xl font-semibold mb-3
                               group-hover:text-[#4EBABD] transition">
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

      {/* LIFECYCLE FLOW – NEW STRUCTURE */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-14 scroll-fade-up animate-in">
            Managing the Project End-to-End
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                step: '01',
                title: 'Pre-Construction',
                desc: 'Accurate take-offs establish budgets, timelines, and procurement strategies.',
              },
              {
                step: '02',
                title: 'Execution & Changes',
                desc: 'Revision-aware quantities reveal scope and cost impacts instantly.',
              },
              {
                step: '03',
                title: 'Delivery & Handover',
                desc: 'Audit-ready quantities support approvals and smooth close-out.',
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{ transitionDelay: `${i * 150}ms` }}
                className="
                  relative p-8 rounded-3xl bg-[#0b0b0b]
                  border border-white/[0.08]
                  scroll-scale-up animate-in
                  hover-lift
                "
              >
                <span className="text-[#4EBABD]  font-semibold">
                  Step {item.step}
                </span>

                <h3 className="text-lg font-semibold mt-2 mb-3">
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

      {/* RISK REDUCTION + ANIMATED PREVIEW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div className="scroll-fade-left animate-in">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Reduce Risk Through Clarity
            </h2>

            <p className="text-white/40  sm:text-base leading-relaxed mb-6">
              Unclear quantities and late scope changes introduce risk.
              Revision-aware quantities give early visibility into
              cost and schedule impacts.
            </p>

            <ul className="space-y-3 text-white/50 ">
              <li>Faster identification of scope changes</li>
              <li>Improved cost and schedule control</li>
              <li>Fewer disputes during execution</li>
            </ul>
          </div>

          {/* 🔥 ANIMATED PREVIEW PANEL */}
          <div className="scroll-fade-right animate-in">
            <AnimatedPreview title="Scope Change Impact View" />
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 scroll-fade-up animate-in">
            Benefits for Project Managers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {[
              {
                title: 'Better Control',
                desc: 'Maintain visibility across scope, cost, and schedule.',
              },
              {
                title: 'Faster Decisions',
                desc: 'Understand impacts immediately when designs change.',
              },
              {
                title: 'Reduced Risk',
                desc: 'Minimize surprises and disputes during execution.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className="scroll-scale-up animate-in hover-lift"
              >
                <p className="text-[#4EBABD] font-bold mb-2">
                  {item.title}
                </p>
                <p className="text-white/40 ">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative py-16 bg-[#0a0a0a] border-t border-white/[0.06] text-center scroll-fade-up animate-in">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Clarity That Keeps Projects on Track
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto  sm:text-base">
          With accurate, traceable quantities at every stage,
          project managers can plan better, respond faster,
          and deliver with confidence.
        </p>
      </section>

    </main>
  );
}

/* =====================================
   ANIMATED PREVIEW PANEL
   ===================================== */
function AnimatedPreview({ title }: { title: string }) {
  return (
    <div
      className="
        relative rounded-3xl overflow-hidden
        min-h-[260px]
        bg-[#0b0b0b]
        border border-white/[0.08]
        grid-pattern
        hover-lift hover-glow
      "
    >
      {/* Scan Line */}
      <div className="absolute inset-0 animate-scan-line opacity-20" />

      {/* Data Streams */}
      <div className="absolute top-1/3 left-0 w-full h-[2px]
                      bg-[#4EBABD]/30 animate-data-stream" />
      <div className="absolute top-2/3 left-0 w-full h-[2px]
                      bg-[#4EBABD]/20 animate-data-stream-reverse" />

      {/* Pulse Layer */}
      <div className="absolute inset-0 animate-structure-pulse opacity-10" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center
                      justify-center h-full text-center px-6">
        <span className="text-[#4EBABD] text-sm font-semibold mb-2 animate-pulse-slow">
          Live Preview
        </span>
        <p className="text-white/40 text-sm">
          {title}
        </p>
      </div>
    </div>
  );
}
