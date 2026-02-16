'use client';

import Image from 'next/image';

export default function AuditTrailPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute bottom-24 left-1/4 w-40 h-40 bg-[#4EBABD]/10 rounded-full blur-2xl animate-bounce" />

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-4xl">

          

          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Audit
           
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Trail
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Complete transparency across every estimation decision.
            The audit trail records who did what, when, and why—ensuring
            accountability, compliance, and defensible outcomes.
          </p>

        </div>
      </section>

      {/* WHAT GETS LOGGED */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Gets Logged
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              Every meaningful estimation action is captured
              automatically—creating a complete, immutable
              history without slowing teams down.
            </p>
          </div>

          {/* RIGHT – LOG CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'AI detection runs & reprocessing events',
              'Manual quantity overrides',
              'Reviewer approvals & rejections',
              'Exports & report generation',
              'Drawing revisions & updates',
              'Workflow status changes',
            ].map(item => (
              <div
                key={item}
                className="p-8 rounded-3xl bg-[#0b0b0b]
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

      {/* AUDIT TIMELINE */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Example Audit Timeline
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                step: '01',
                title: 'AI Detection Completed',
                desc: 'Structural elements detected across 12 drawings.',
              },
              {
                step: '02',
                title: 'Manual Override Applied',
                desc: 'Estimator adjusted beam quantities based on design notes.',
              },
              {
                step: '03',
                title: 'Quality Review Approved',
                desc: 'Reviewer validated quantities and approved results.',
              },
              {
                step: '04',
                title: 'Estimate Exported',
                desc: 'Final quantities exported for procurement and reporting.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           hover:border-[#4EBABD]
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                                      <h3 className="font-semibold  sm:text-base">
                        <span className="block text-[#4EBABD] mb-4">
                          Step {item.step}
                        </span >
                        {item.title}  
                      </h3>


                <p className="text-white/40 text-sm leading-relaxed mb-1">
                  {item.desc}
                </p>

                
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative py-20 bg-[#0a0a0a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Audit Trails Matter
            </h2>

            <p className="text-white/40 mb-8">
              Enterprise estimates must be defensible.
              Audit trails ensure every quantity can be
              traced back to a decision—supporting governance,
              audits, and dispute resolution.
            </p>

            <ul className="space-y-4 text-white/50 text-sm">
              <li>Compliance & governance readiness</li>
              <li>Reduced bid and execution risk</li>
              <li>Clear ownership & accountability</li>
              <li>Preserved historical decision context</li>
            </ul>
          </div>

          {/* VISUAL */}
          <div className="relative">
            <div
              className="relative overflow-hidden
                         rounded-3xl bg-[#0b0b0b]
                         border border-white/[0.08]
                         min-h-[220px] sm:min-h-[320px]
                         transition-all duration-300
                         hover:border-[#4EBABD]
                         hover:shadow-[0_20px_55px_rgba(0,0,0,0.75)]"
            >
              <Image
                src=""
                alt="Audit log viewer with timestamped actions"
                fill
                className="object-cover rounded-3xl
                           transition-transform duration-500
                           hover:scale-105"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20
                            bg-[#4EBABD]/20 rounded-full blur-xl animate-pulse" />
          </div>

        </div>
      </section>

      {/* FINAL */}
      <section className="relative py-20 text-center bg-[#0a0a0a] ">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Built for Enterprise Accountability
        </h3>

        <p className="text-white/40 max-w-4xl mx-auto">
          With a complete audit trail, organizations gain confidence
          that estimates are accurate, reviewable, and compliant—
          without slowing delivery.
        </p>
      </section>

    </main>
  );
}
