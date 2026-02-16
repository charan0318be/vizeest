'use client';

import Image from 'next/image';

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <span className="text-[#4EBABD] text-sm font-semibold  tracking-wide">
            Enterprise Governance
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Audit Trails &
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Governance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Governance is not just about control—it’s about trust,
            traceability, and accountability across every estimation decision.
          </p>

        </div>
      </section>

      {/* INTRO VISUAL + CONTEXT */}
    {/* INTRO CONTEXT */}
<section className="relative py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Built for Enterprise Accountability
    </h2>

    <p className="text-white/40 leading-relaxed mb-8">
      Governance is enforced automatically across the estimation lifecycle—
      from AI detection to final export—without relying on manual discipline.
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      {[
        {
          title: 'Automatic Audit Trails',
          desc: 'Every action is logged with timestamp, user, and context.',
        },
        {
          title: 'Approval Enforcement',
          desc: 'Exports are blocked until required approvals are complete.',
        },
        {
          title: 'Change Attribution',
          desc: 'Manual overrides remain permanently attributable.',
        },
        {
          title: 'Historical Integrity',
          desc: 'Past revisions are preserved and never overwritten.',
        },
      ].map(item => (
        <div
          key={item.title}
          className="p-8 rounded-3xl bg-[#0b0b0b]
                     border border-white/[0.08]
                     hover:border-[#4EBABD]
                     hover:-translate-y-1
                     transition-all duration-300"
        >
          <h4 className="text-lg font-semibold mb-3">
            {item.title}
          </h4>
          <p className="text-white/40  leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


      {/* GOVERNANCE LAYERS */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* TRACEABILITY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#4EBABD]  font-semibold mb-3">
                Governance Layer 01
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Traceability
              </h3>
              <p className="text-white/40 leading-relaxed">
                Every modification, validation, and approval is logged
                with timestamps and user attribution—eliminating ambiguity
                around how quantities were produced.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3">
                Audit Log
              </h4>
              <p className="text-white/40 ">
                Immutable records capturing every action,
                revision, and approval.
              </p>
            </div>
          </div>

          {/* APPROVAL CONTROL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3">
                Approval Workflow
              </h4>
              <p className="text-white/40">
                Structured, role-based approvals that
                enforce standards without slowing delivery.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-[#4EBABD]  font-semibold mb-3">
                Governance Layer 02
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Review & Approval Controls
              </h3>
              <p className="text-white/40 leading-relaxed">
                Estimates pass through defined checkpoints
                before export—ensuring quality and compliance.
              </p>
            </div>
          </div>

          {/* OVERSIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#4EBABD]  font-semibold mb-3">
                Governance Layer 03
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise Oversight
              </h3>
              <p className="text-white/40 leading-relaxed">
                Leadership gains visibility across projects,
                teams, and regions—supporting consistency
                and risk reduction at scale.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-[#0b0b0b]
                            border border-white/[0.08]
                            hover:border-[#4EBABD]
                            hover:-translate-y-1
                            transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3">
                Governance Dashboard
              </h4>
              <p className="text-white/40">
                Cross-project oversight with
                full historical visibility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* RULES */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h3 className="text-4xl md:text-5xl font-bold mb-12">
            Governance Rules Enforced by Design
          </h3>

          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08] hover:border-[#4EBABD]">
            <ul className="space-y-4 text-white/50">
              {[
                'Quantities cannot be exported without required approvals',
                'Manual overrides are always logged and attributable',
                'Historical revisions are preserved permanently',
                'Compliance reviews require no manual reconstruction',
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

      {/* FINAL */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Control Without Slowing Teams Down
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-base">
          Governance is embedded directly into the workflow—
          ensuring accountability without introducing friction.
        </p>
      </section>

    </main>
  );
}
