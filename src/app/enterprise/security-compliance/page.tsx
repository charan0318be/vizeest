'use client';

export default function SecurityCompliancePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">


          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Security &
           
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Compliance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Enterprise-grade security is foundational. The platform
            protects sensitive estimation data while supporting
            compliance, auditability, and trust at scale.
          </p>

        </div>
      </section>

      {/* TRUST + ARCHITECTURE */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designed for Enterprise Trust
            </h2>

            <p className="text-white/40 leading-relaxed mb-6">
              Estimation workflows involve sensitive commercial data.
              Security controls protect information across storage,
              transmission, and access layers—without slowing teams down.
            </p>

            <p className="text-white/40 leading-relaxed">
              Controls are embedded by design, not bolted on later.
            </p>
          </div>

          {/* VISUAL CARD */}
          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08]
                          hover:border-[#4EBABD]
                          hover:-translate-y-1
                          transition-all duration-300">
            <h4 className="text-lg font-semibold mb-3">
              Security Architecture
            </h4>
            <p className="text-white/40 ">
              Layered protection across infrastructure,
              application logic, and access boundaries.
            </p>
          </div>

        </div>
      </section>

      {/* SECURITY PILLARS */}
      <section className="relative py-32 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Security Pillars
            </h2>
            <p className="text-white/40">
              Built-in controls that protect data and
              support enterprise compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Data Encryption',
                desc: 'All data is encrypted at rest and in transit.',
              },
              {
                title: 'Access Control',
                desc: 'Role-based permissions restrict access by responsibility.',
              },
              {
                title: 'Isolation & Segmentation',
                desc: 'Tenant and project isolation prevent data leakage.',
              },
              {
                title: 'Compliance Readiness',
                desc: 'Architecture supports audits and regulatory reviews.',
              },
              {
                title: 'Secure Exports',
                desc: 'Controlled workflows govern external data sharing.',
              },
              {
                title: 'Operational Monitoring',
                desc: 'Continuous monitoring detects anomalies and policy drift.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0b0b0b]
                           border border-white/[0.08]
                           transition-all duration-300
                           hover:border-[#4EBABD]
                           hover:-translate-y-1"
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

      {/* COMPLIANCE */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Compliance Without Complexity
          </h2>

          <p className="text-white/40 leading-relaxed mb-6">
            Security controls support compliance initiatives
            without introducing operational friction or
            additional tooling.
          </p>

          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08] hover:border-[#4EBABD]">
            <ul className="space-y-4 text-white/50 ">
              {[
                'Audit-ready logs generated automatically',
                'Policy enforcement without manual oversight',
                'Export controls aligned with approvals',
                'No separate compliance documentation required',
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
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Security Built In, Not Added On
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-base">
          Protect sensitive data, satisfy compliance requirements,
          and maintain enterprise trust—without slowing delivery.
        </p>
      </section>

    </main>
  );
}
