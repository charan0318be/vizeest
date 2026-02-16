'use client';

export default function QualityControlWorkflowPage() {
  return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* FLOATING BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4EBABD]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#4EBABD]/5 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute bottom-24 left-1/4 w-40 h-40 bg-[#4EBABD]/10 rounded-full blur-2xl animate-bounce" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-14 sm:pb-20">
        <span className="text-[#4EBABD] text-sm tracking-wide font-medium">
          Quality Assurance
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5">
          Quality Control Workflow
        </h1>

        <p className="text-gray-400 max-w-3xl text-base sm:text-lg leading-relaxed">
          A structured quality control workflow ensures estimator oversight,
          accuracy, and accountability—before quantities move downstream
          into costing, procurement, or client delivery.
        </p>
      </section>

      {/* WORKFLOW STEPS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
          Review & Approval Flow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              step: '01',
              title: 'Review',
              desc: 'Inspect AI-generated detections and quantities visually on drawings.',
            },
            {
              step: '02',
              title: 'Adjust',
              desc: 'Apply manual corrections where estimator expertise is required.',
            },
            {
              step: '03',
              title: 'Validate',
              desc: 'Confirm quantities align with scope, standards, and assumptions.',
            },
            {
              step: '04',
              title: 'Approve',
              desc: 'Finalize results for export, reporting, and execution.',
            },
          ].map(item => (
            <div
              key={item.step}
              className="group relative rounded-2xl bg-[#111] border border-[#2A2A2A]
                         p-6 transition-all duration-300
                         hover:-translate-y-2 hover:border-[#4EBABD]
                         hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
            >
              <p className="text-[#4EBABD]  font-medium mb-2">
                Step {item.step}
              </p>

              <h3 className="font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400  leading-relaxed">
                {item.desc}
              </p>

              {/* CARD GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-[#4EBABD]/5
                              opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}

        </div>
      </section>

      {/* BUILT-IN QUALITY CONTROLS */}
      <section className="relative bg-[#0F0F0F] border-t border-[#2A2A2A] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Built-In Quality Controls
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              'Audit trail for every manual change',
              'User-level accountability and timestamps',
              'Conflict and anomaly detection',
              'Scope completeness verification',
              'Revision comparison across versions',
              'Approval checkpoints before export',
            ].map(item => (
              <div
                key={item}
                className="rounded-xl bg-[#111] border border-[#2A2A2A]
                           p-5 transition-all duration-300
                           hover:-translate-y-1 hover:border-[#4EBABD]
                           hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Accuracy You Can Defend
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Quality Control ensures every estimate is defensible,
          reviewable, and aligned with professional standards—
          reducing risk while increasing trust across teams and clients.
        </p>
      </section>

    </main>
  );
}
