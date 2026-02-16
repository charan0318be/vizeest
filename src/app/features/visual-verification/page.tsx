export default function VisualVerificationPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
 {/* HERO */}
<section className="relative py-20">
  <div
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
               grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
  >

    {/* LEFT – TEXT */}
    <div>
      <h1
        className="text-4xl md:text-6xl lg:text-7xl xl:text-6xl
                   font-bold leading-[1.05] tracking-tight mb-8"
      >
        Visual
        <br />
        <span
          className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                     bg-clip-text text-transparent"
        >
          Verification
        </span>
      </h1>

      <p
        className="text-lg md:text-xl text-white/50
                   leading-relaxed max-w-xl mb-8"
      >
        Visually confirm every detected element directly on the drawing.
        Overlay AI results on source documents to ensure accuracy,
        transparency, and confidence before finalizing quantities.
      </p>

      <p  className="text-lg md:text-xl text-white/50
                   leading-relaxed max-w-xl mb-8">
        Visual verification ensures estimators never rely on automation
        blindly. Every beam, column, and connection remains visible,
        traceable, and reviewable against the original drawing—reducing
        risk and preventing costly estimation errors.
      </p>
    </div>

    {/* RIGHT – KEY CAPABILITIES */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {[
    {
      title: 'Drawing-Level Traceability',
      desc: 'Each detected quantity is linked to its exact position on the source drawing.',
    },
    {
      title: 'Human-in-the-Loop Review',
      desc: 'Estimators visually validate AI results before approval or export.',
    },
    {
      title: 'Conflict & Gap Detection',
      desc: 'Quickly identify missing, overlapping, or misclassified elements.',
    },
    {
      title: 'Overlay-Based Validation',
      desc: 'AI results are visually layered on drawings for instant verification.',
    },
  ].map(item => (
    <div
      key={item.title}
      className="
        p-6 rounded-2xl
        bg-white/[0.03]
        border border-white/[0.06]
        transition-all duration-300
        hover:border-[#4EBABD]
      "
    >
      {/* ICON */}
      <div
        className="
          w-10 h-10 rounded-xl
          flex items-center justify-center
          bg-[#4EBABD]/25
          text-[#4EBABD]
          mb-4
        "
      >
        {/* simple system-style icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 20h8" />
        </svg>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/45  leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>


  </div>
</section>



      {/* CORE FEATURES */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-5xl
                           font-bold mb-6">
              Built for Visual Confidence
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Clear overlays and traceability for human-in-the-loop validation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: 'Color-Coded Overlays',
      desc: 'Different structural elements are highlighted using distinct colors for instant visual identification.',
    },
    {
      title: 'Zoom-Level Accuracy',
      desc: 'Maintain precise alignment and detection accuracy even at high zoom levels.',
    },
    {
      title: 'Human-in-the-Loop Validation',
      desc: 'Allow estimators to visually review and approve AI detections before final acceptance.',
    },
    {
      title: 'Conflict Identification',
      desc: 'Quickly identify missing, overlapping, or incorrectly classified elements.',
    },
    {
      title: 'Drawing-to-Data Traceability',
      desc: 'Every quantity remains traceable to its exact location on the drawing.',
    },
    {
      title: 'Reviewer-Friendly Interface',
      desc: 'Enable reviewers to verify results visually without deep technical effort.',
    },
  ].map(item => (
    <div
      key={item.title}
      className="
        p-6 rounded-2xl
        bg-white/[0.03]
        border border-white/[0.06]
        hover:border-[#4EBABD]
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]
        transition-all duration-300
      "
    >
      {/* ICON */}
      <div
        className="
          w-10 h-10 rounded-xl
          flex items-center justify-center
          bg-[#4EBABD]/25
          text-[#4EBABD]
          mb-4
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 20h8" />
        </svg>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/45  leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* WORKFLOW */}
      <section className="relative py-20 bg-[#0a0a0a]  border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              How Visual Verification Works
            </h2>
            <p className="text-lg text-white/40 max-w-2xl">
              A clear step-by-step flow from detection to approval
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Detect',
                desc: 'AI detects beams, columns, and elements from drawings.',
              },
              {
                step: 'Overlay',
                desc: 'Detected elements are visually overlaid on the source drawing.',
              },
              {
                step: 'Review',
                desc: 'Estimators visually inspect accuracy and completeness.',
              },
              {
                step: 'Approve',
                desc: 'Verified results are approved for take-off and reporting.',
              },
            ].map(item => (
              <div
                key={item.step}
                className="p-6 rounded-2xl
                           bg-white/[0.02]
                           border border-white/[0.05]
                           hover:border-[#4EBABD]
                              hover:-translate-y-1
                              hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]
                              transition-all duration-300"
              >
                <p className="text-[#4EBABD] font-semibold mb-2">
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

      {/* VALUE / CONFIDENCE */}
      <section className="relative py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl
                         font-bold mb-6">
            Confidence
            <br />
            Through Visibility
          </h2>

          <p className="text-lg text-white/40 leading-relaxed">
            Visual verification ensures estimators never rely on black-box
            automation. Every decision is backed by clear visual evidence,
            reducing errors and rework.
          </p>

        </div>
      </section>

    </main>
  );
}
