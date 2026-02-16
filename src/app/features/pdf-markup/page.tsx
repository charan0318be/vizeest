export default function PdfMarkupPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-6xl
                           font-bold leading-[1.05] tracking-tight mb-8">
              PDF Markup
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                & Editing
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50
                          leading-relaxed max-w-xl mb-10">
              Review, annotate, and refine detected elements directly on
              construction drawings. Make precise adjustments while
              preserving a complete audit trail.
            </p>

           


          </div>

          {/* RIGHT – WORKSPACE PREVIEW */}
<div className="relative rounded-3xl overflow-hidden
                border border-white/[0.08]
                min-h-[420px]
                bg-[#020617]">

  {/* Blueprint grid */}
  <div className="absolute inset-0 opacity-[0.06]"
       style={{
         backgroundImage: `
           linear-gradient(#4EBABD 1px, transparent 1px),
           linear-gradient(90deg, #4EBABD 1px, transparent 1px)
         `,
         backgroundSize: '40px 40px'
       }} />

  {/* Mock overlay boxes */}
  <div className="absolute top-16 left-16 w-40 h-24
                  border border-[#4EBABD]/40 rounded-md" />
  <div className="absolute bottom-20 right-20 w-56 h-32
                  border border-[#4EBABD]/30 rounded-md" />

  {/* Center content */}
  <div className="relative z-10 h-full flex flex-col
                  items-center justify-center text-center px-6">

    <p className="text-sm uppercase tracking-wider
                  text-[#4EBABD] mb-3">
      PDF Markup Workspace
    </p>

    <p className="text-white/60 max-w-sm leading-relaxed">
      Visual annotation and verification layer
      for construction drawings
    </p>

  </div>
</div>


        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              How Estimators Use PDF Markup
            </h2>
            <p className="text-lg text-white/40 max-w-2xl">
              A clear review and approval flow from drawings to submission
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Upload',
                desc: 'Load construction PDFs directly into the estimation workspace.',
              },
              {
                step: 'Review',
                desc: 'Inspect AI-detected elements visually on the drawing.',
              },
              {
                step: 'Edit',
                desc: 'Apply manual corrections and clarifications where required.',
              },
              {
                step: 'Approve',
                desc: 'Finalize marked-up drawings with reviewer sign-off.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="p-6 rounded-2xl
                           bg-white/[0.02]
                           border border-white/[0.05]
                           hover:border-[#4EBABD]
                           transition-all duration-300
                           hover:-translate-y-1
                          hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]"
              >
                <p className="text-[#4EBABD] font-bold mb-2">
                  {item.step}
                </p>
                <p className="text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VALUE */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl
                         font-bold mb-6">
            Built for Accuracy
            <br />
            & Accountability
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            PDF Markup & Editing ensures every adjustment is visible,
            traceable, and defensible—supporting confident estimates
            and smoother project handoffs.
          </p>

        </div>
      </section>

    </main>
  );
}
