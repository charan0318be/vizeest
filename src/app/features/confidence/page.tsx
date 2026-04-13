'use client';

export default function ScopeConfidenceSection() {
  return (
    <section className="bg-[#061a24] text-white py-16 space-y-24">

      {/* ================= HERO ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              CAPABILITY
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              Scope Confidence
            </h1>

            <p className="text-gray-300 mb-4">
              Catch scope doubts early before they become bid risk.
            </p>

            <p className="text-gray-400 mb-6">
              Validation becomes easier when estimators can compare what the drawing suggests
              against what the structure actually looks like in context.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
                Get Started Free
              </button>
              <button className="border border-[#2c4a57] px-6 py-3 rounded-full">
                Book Demo
              </button>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3">
              {[
                "Reduced manual errors",
                "Seeing is believing",
                "Builds confidence before pricing",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="border border-[#2c4a57] px-4 py-2 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
                    <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>

  <div className="relative bg-[#102130] border border-white/[0.08] rounded-3xl p-4 shadow-2xl">

    {/* Outer dashed border */}
    <div className="border border-dashed bg-[#172636] border-white/10 rounded-2xl p-6">

      {/* Top Label */}
      <p className="text-xs uppercase tracking-widest text-[#91bbc2] mb-4">
        Visual Placeholder
      </p>

      {/* Heading */}
      <h3 className="text-xl font-semibold text-white mb-3">
       Scope confidence workflow
      </h3>

      {/* Description */}
      <p className="text-sm text-[#a3a8ad] mb-6 leading-relaxed">
        Use a real product-led visual here. Keep it strong, simple, and easy to trust.

      </p>

      {/* Two Boxes */}
      <div className="grid grid-cols-2 gap-6">

        <div className="h-[180px] rounded-2xl bg-white/[0.03] border border-white/10" />

        <div className="h-[180px] rounded-2xl bg-white/[0.03] border border-white/10" />

      </div>

    </div>
  </div>
</div>

        </div>
      </div>

      {/* ================= WHY IT MATTERS ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              WHY IT MATTERS
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              Spot issues before they leave the desk.
            </h2>

            <p className="text-gray-300 mb-6">
              Better validation means stronger confidence before the number goes out.
            </p>

            {/* LIST */}
            <ul className="space-y-3">
              {[
                "Earlier issue detection",
                "Cleaner internal review",
                "Better cross-team trust",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  ✔ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT VISUAL */}
                   <div className="relative rounded-3xl bg-[#081c27] p-[1px]">
  
  {/* OUTER GLOW BORDER */}
  <div className="rounded-3xl bg-gradient-to-b from-[#1f3a46] to-[#0b2230] p-6 sm:p-5">
    
    {/* INNER DASHED CONTAINER */}
    <div className="rounded-2xl border border-dashed border-[#2a4a58] p-6 sm:p-5">
      
      {/* LABEL */}
      <p className="text-xs tracking-[0.2em] text-[#7fa3b3] mb-3">
        VISUAL PLACEHOLDER
      </p>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-3">
        Validation review state
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#8aa6b2] mb-8 max-w-xl leading-relaxed">
        Highlight checkpoints, callouts, and confidence cues.
      </p>

      {/* BOXES */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="h-24 rounded-2xl bg-gradient-to-br from-[#1a2e39] to-[#233f4d] border border-[#2a4a58]/40 shadow-inner" />
        
        <div className="h-24 rounded-2xl bg-gradient-to-br from-[#1a2e39] to-[#233f4d] border border-[#2a4a58]/40 shadow-inner" />
      
      </div>

    </div>
  </div>
</div>

        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0b2230] border border-[#1b3440] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              NEXT STEP
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              See it for yourself.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="border border-[#2c4a57] px-6 py-3 rounded-full">
              Get Started Free
            </button>
            <button className="border border-[#2c4a57] px-6 py-3 rounded-full">
              Book Demo
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}