'use client';

const steps = [
  {
    step: "Core principle",
    title: "A fusion approach built for estimating confidence.",
    desc1:
      "AIIR Fusion Power does not rely on one single process. It brings together drawing interpretation, structural understanding, layer detection, and workflow support so the estimator gets a clearer and more useful working environment.",
    
  },
  {
    step: "How it works",
    title: "How does AIIR Fusion Power improve estimating?",
    desc1:
      "It helps teams verify structure visually, review scope more clearly, and reduce manual mistakes that often happen when drawings are interpreted only in a flat format.",
    desc2:
      "That means the platform is not just extracting information. It is helping present it in a way that reduces manual errors and improves confidence.",
  },
  {
    step: "Why it matters",
    title: "Why is AIIR Fusion Power important?",
    desc1:
      "AIIR Fusion Power addresses the core challenges in the estimating process by providing a more intuitive and accurate way to interpret drawings and understand structural elements. This leads to better decision-making and reduced errors.",
   
  },
  
];

export default function HowItWorks() {
  return (
    <section className="bg-[#060f17] text-white py-16 space-y-24">

      {/* ================= HERO ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div>
            <span className="border border-[#2c4a57] px-4 py-1 text-xs rounded-full">
              PLATFORM
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              AIIR Fusion Power
            </h1>

            <p className="text-gray-300 mb-4">
             Technology should support estimator performance, not become the story itself.


            </p>

            <p className="text-gray-400 mb-6">
              AIIR Fusion Power is the technology layer behind VizeEst. It is designed to combine interpretation, intelligence, and visual structure understanding in a way that supports real estimating work.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
                Get Started Free
              </button>
              <button className="border border-[#2c4a57] px-6 py-3 rounded-full">
                Book Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Reduced manual errors",
                "Seeing is believing",
                "Builds confidence before pricing",
              ].map((tag, i) => (
                <span key={i} className="border border-[#2c4a57] px-4 py-2 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT HERO CARD (UNCHANGED) */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-[#102130] border border-white/[0.08] rounded-3xl p-4 shadow-2xl">
              <div className="border border-dashed bg-[#172636] border-white/10 rounded-2xl p-6">
                <p className="text-xs uppercase tracking-widest text-[#91bbc2] mb-4">
                  Visual Placeholder
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                AIIR Fusion Power overview
                </h3>
                <p className="text-sm text-[#a3a8ad] mb-6 leading-relaxed">
                  Use a real product-led visual here. Keep it strong, simple, and easy to trust.

                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-[180px] rounded-2xl bg-white/[0.03] border border-white/10" />
                  <div className="h-[180px] rounded-2xl bg-white/[0.03] border border-white/10" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= STEPS ================= */}
      {steps.map((item, index) => (
        <div key={index} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* LEFT */}
            <div>
              <span className="border border-[#2c4a57] px-4 py-1 text-xs rounded-full uppercase">
                {item.step}
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4">
                {item.title}
              </h2>

              <p className="text-gray-300 mb-4">{item.desc1}</p>
              <p className="text-gray-400">{item.desc2}</p>
            </div>

            {/* RIGHT (UPDATED DIFFERENT CARDS) */}
            <div>

              {index === 0 && (
               <div className="rounded-3xl bg-[#102130] p-6 sm:p-4 shadow-[0_0_40px_rgba(20,60,80,0.25)]">
    
    {/* INNER DASHED CONTAINER */}
    <div className="rounded-2xl border border-dashed bg-[#172636] border-[#2a4a58] p-6 sm:p-4">

      {/* LABEL */}
      <p className="text-xs tracking-[0.25em] text-[#7fa3b3] mb-3">
        VISUAL PLACEHOLDER
      </p>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-3">
      Technology architecture
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#8aa6b2] mb-8 leading-relaxed">
     Show interpretation, detection, and visual understanding working together.
      </p>

      {/* PLACEHOLDER BOXES */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="h-32 sm:h-20 rounded-2xl bg-[#1d2833] border border-[#2a4a58]/40 shadow-inner" />
        
        <div className="h-32 sm:h-20 rounded-2xl bg-[#1b2a38] border border-[#2a4a58]/40 shadow-inner" />
      
      </div>

    </div>
  </div>
              )}

              {index === 1 && (
                <div className="rounded-3xl bg-[#102130] p-6 sm:p-4 shadow-[0_0_40px_rgba(20,60,80,0.25)]">
    
    {/* INNER DASHED CONTAINER */}
    <div className="rounded-2xl border border-dashed bg-[#172636] border-[#2a4a58] p-6 sm:p-4">

      {/* LABEL */}
      <p className="text-xs tracking-[0.25em] text-[#7fa3b3] mb-3">
        VISUAL PLACEHOLDER
      </p>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-3">
     AIIR processing flow
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#8aa6b2] mb-8 leading-relaxed">
    Show how visual clarity improves validation and takeoff quality.
      </p>

      {/* PLACEHOLDER BOXES */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="h-32 sm:h-20 rounded-2xl bg-[#1d2833] border border-[#2a4a58]/40 shadow-inner" />
        
        <div className="h-32 sm:h-20 rounded-2xl bg-[#1b2a38] border border-[#2a4a58]/40 shadow-inner" />
      
      </div>

    </div>
  </div>
              )}

              {index === 2 && (
                <div className="rounded-3xl bg-[#102130] p-6 sm:p-4 shadow-[0_0_40px_rgba(20,60,80,0.25)]">
    
    {/* INNER DASHED CONTAINER */}
    <div className="rounded-2xl border border-dashed bg-[#172636] border-[#2a4a58] p-6 sm:p-4">

      {/* LABEL */}
      <p className="text-xs tracking-[0.25em] text-[#7fa3b3] mb-3">
        VISUAL PLACEHOLDER
      </p>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-3">
     Estimator support layer
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#8aa6b2] mb-8 leading-relaxed">
      Show the three key stakeholder groups supported by the platform.
      </p>

      {/* PLACEHOLDER BOXES */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="h-32 sm:h-20 rounded-2xl bg-[#1d2833] border border-[#2a4a58]/40 shadow-inner" />
        
        <div className="h-32 sm:h-20 rounded-2xl bg-[#1b2a38] border border-[#2a4a58]/40 shadow-inner" />
      
      </div>

    </div>
  </div>
              )}

             

            </div>

          </div>
        </div>
      ))}

      {/* ================= CTA ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b2230] border border-[#1b3440] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="border border-[#2c4a57] px-4 py-1 text-xs rounded-full">
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