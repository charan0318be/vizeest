'use client';

export default function AboutSection() {
  return (
    <section className="bg-[#061a24] text-white py-16 space-y-24">

      {/* ================= ABOUT ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              COMPANY
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              About VizeEst
            </h1>

            <p className="text-gray-300 mb-4">
              Built around a simple belief: better takeoffs start with better estimator confidence.
            </p>

            <p className="text-gray-400 mb-6">
              VizeEst was developed under Zenitude with a clear goal in mind: to bring
              more peace of mind into estimation. In a workflow where speed matters but
              mistakes cost heavily, estimators need better support, not more pressure.
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
        Brand story
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

      {/* ================= WHO WE ARE ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              WHO WE ARE
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              VizeEst is built by Zenitude.
            </h2>

            <p className="text-gray-300 mb-4">
              Zenitude stands for peace of mind. That idea sits at the heart of VizeEst.
              The platform was created to help estimators and estimation support teams
              work with greater clarity, stronger confidence, and fewer manual errors.
            </p>

            <p className="text-gray-400">
              We believe the future of estimating is not about pushing humans out of the process.
              It is about giving them better tools, better visibility, and better support.
            </p>
          </div>

          <div className="relative rounded-3xl bg-[#081c27] p-[1px]">

  {/* OUTER GRADIENT BORDER */}
  <div className="rounded-3xl bg-[#102130] p-6 sm:p-4 shadow-[0_0_40px_rgba(20,60,80,0.25)]">
    
    {/* INNER DASHED CONTAINER */}
    <div className="rounded-2xl border border-dashed bg-[#172636] border-[#2a4a58] p-6 sm:p-4">

      {/* LABEL */}
      <p className="text-xs tracking-[0.25em] text-[#7fa3b3] mb-3">
        VISUAL PLACEHOLDER
      </p>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-3">
        Zenitude origin story
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#8aa6b2] mb-8 leading-relaxed">
       Show a startup-style brand story visual with confidence, calm, and control.
      </p>

      {/* PLACEHOLDER BOXES */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="h-32 sm:h-25 rounded-2xl bg-[#1d2833] border border-[#2a4a58]/40 shadow-inner" />
        
        <div className="h-32 sm:h-25 rounded-2xl bg-[#1b2a38] border border-[#2a4a58]/40 shadow-inner" />
      
      </div>

    </div>
  </div>
</div>
        </div>
      </div>

      {/* ================= WHY WE BUILT IT ================= */}
      <div className="bg-[#0e171f] py-20">

  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

      {/* LEFT */}
      <div>
        <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
          WHY WE BUILT IT
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6 text-white">
          A startup focused on real estimating pain.
        </h2>

        <p className="text-gray-300 mb-4">
          VizeEst was developed because estimation remains one of the most important
          and stressful parts of the steel workflow. Manual interpretation, repeated checking,
          and lack of clarity slow teams down and increase risk.
        </p>

        <p className="text-gray-400">
          We wanted to build something that feels like an estimator sidekick.
          A platform that makes the work easier to trust, easier to review, and easier to scale.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="relative rounded-3xl bg-[#081c27] p-[1px]">

        {/* OUTER */}
        <div className="rounded-3xl bg-[#102130] p-6 sm:p-4 shadow-[0_0_40px_rgba(20,60,80,0.25)]">
          
          {/* INNER */}
          <div className="rounded-2xl border border-dashed bg-[#172636] border-[#2a4a58] p-6 sm:p-4">

            <p className="text-xs tracking-[0.25em] text-[#7fa3b3] mb-3">
              VISUAL PLACEHOLDER
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Why VizeEst exists
            </h3>

            <p className="text-[#8aa6b2] mb-8 leading-relaxed">
              Show the journey from takeoff pressure to peace-of-mind estimation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="h-32 rounded-2xl bg-[#1d2833] border border-[#2a4a58]/40 shadow-inner" />
              <div className="h-32 rounded-2xl bg-[#1b2a38] border border-[#2a4a58]/40 shadow-inner" />
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>

</div>

      {/* ================= WHAT WE BELIEVE ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              WHAT WE BELIEVE
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              Empower the estimator. Improve the outcome.
            </h2>

            <p className="text-gray-300 mb-4">
              That belief drives how VizeEst is designed, how it is positioned,
              and how it should be adopted.
            </p>

            <p className="text-gray-400">
              Whether the user is a new estimator, a senior estimator, a fabricator,
              or a detailer, the platform exists to strengthen judgment — not replace it.
              That is how better speed and better accuracy can exist together.
            </p>
          </div>

          <div className="relative rounded-3xl bg-[#081c27] p-[1px]">

  {/* OUTER GRADIENT BORDER */}
  <div className="rounded-3xl bg-[#102130] p-6 sm:p-4 shadow-[0_0_40px_rgba(20,60,80,0.25)]">
    
    {/* INNER DASHED CONTAINER */}
    <div className="rounded-2xl border border-dashed bg-[#172636] border-[#2a4a58] p-6 sm:p-4">

      {/* LABEL */}
      <p className="text-xs tracking-[0.25em] text-[#7fa3b3] mb-3">
        VISUAL PLACEHOLDER
      </p>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-3">
       Estimator-first philosophy
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#8aa6b2] mb-8 leading-relaxed">
       Use a premium visual showing trust, control, and modern workflow support.
      </p>

      {/* PLACEHOLDER BOXES */}
      <div className="grid sm:grid-cols-2 gap-6">
        
        <div className="h-32 sm:h-25 rounded-2xl bg-[#1d2833] border border-[#2a4a58]/40 shadow-inner" />
        
        <div className="h-32 sm:h-25 rounded-2xl bg-[#1b2a38] border border-[#2a4a58]/40 shadow-inner" />
      
      </div>

    </div>
  </div>
</div>

        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0e1a26] border border-[#1b3440] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <span className="border border-[#2c4a57] text-xs px-4 py-1 rounded-full">
              NEXT STEP
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              See it for yourself.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="border bg-[#18242e] border-[#2c4a57] px-6 py-3 rounded-full">
              Get Started Free
            </button>
            <button className="border bg-[#18242e] border-[#2c4a57] px-6 py-3 rounded-full">
              Book Demo
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}


/* ================= REUSABLE RIGHT CARD ================= */
function RightCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#0b2230] border border-[#1b3440] rounded-3xl p-6 sm:p-8 shadow-lg">
      <p className="text-xs tracking-widest text-gray-400 mb-3">
        VISUAL PLACEHOLDER
      </p>

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 mb-6">
        {desc}
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="h-32 rounded-2xl bg-gradient-to-br from-[#1c2f3a] to-[#243c4a]" />
        <div className="h-32 rounded-2xl bg-gradient-to-br from-[#1c2f3a] to-[#243c4a]" />
      </div>
    </div>
  );
}