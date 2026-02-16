'use client';

export default function DocumentManagementPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <span className="text-[#4EBABD] text-sm font-semibold uppercase tracking-wide">
            Project Control
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-6xl
                         font-bold mt-4 mb-8 tracking-tight leading-[1.05]">
            Document
            <br />
            <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                             bg-clip-text text-transparent">
              Management
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Control drawings, revisions, and supporting documents
            from upload to final delivery—without losing context,
            accuracy, or traceability.
          </p>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Single Source of Truth
          </h2>

          <p className="text-white/40 leading-relaxed mb-12">
            Every drawing, revision, and reference file is stored
            within a structured project workspace—ensuring teams
            always work from the correct, approved documents.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Centralized Project Workspace',
                desc: 'All drawings and references live in one controlled location.',
              },
              {
                title: 'Revision Awareness',
                desc: 'Automatic version tracking prevents outdated take-offs.',
              },
              {
                title: 'Document Relationships',
                desc: 'Maintain clear links between drawings, quantities, and exports.',
              },
              {
                title: 'Audit-Ready Records',
                desc: 'Every document change remains traceable throughout the lifecycle.',
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

      {/* CORE CAPABILITIES */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Document Capabilities
            </h2>
            <p className="text-white/40">
              Built-in controls that keep documents accurate,
              secure, and aligned with estimation workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Version History',
                desc: 'Access and compare historical revisions at any time.',
              },
              {
                title: 'Secure Access Control',
                desc: 'Permissions define who can upload, modify, or approve.',
              },
              {
                title: 'Revision Lineage',
                desc: 'Understand how documents evolve across the project.',
              },
              {
                title: 'Approval Enforcement',
                desc: 'Only approved documents influence quantities.',
              },
              {
                title: 'Export Alignment',
                desc: 'Ensure exports always match the correct drawing version.',
              },
              {
                title: 'Compliance Readiness',
                desc: 'Document handling supports audit and governance needs.',
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

      {/* DOCUMENT LIFECYCLE */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Document Lifecycle
          </h2>

          <div className="p-10 rounded-3xl bg-[#0b0b0b]
                          border border-white/[0.08] hover:border-[#4EBABD]">
            <ul className="space-y-4 text-white/50">
              {[
                'Upload and organize drawings into structured project folders',
                'Automatically detect and track revisions',
                'Compare document versions with full lineage',
                'Apply permissions and approval checkpoints',
                'Ensure only approved documents drive quantities',
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
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Documents That Never Lose Context
        </h3>
        <p className="text-white/40 max-w-4xl mx-auto text-base">
          Strong document management ensures every estimate
          is built on the right information—every time.
        </p>
      </section>

    </main>
  );
}
