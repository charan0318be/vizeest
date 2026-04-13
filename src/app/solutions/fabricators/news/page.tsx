'use client';

export default function NewsSection() {
  return (
    <section className="bg-[#060f17] text-white py-20 space-y-20">

      {/* ================= NEWS ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="border border-[#2c4a57] bg-[#0d242e] text-xs px-4 py-1 rounded-full">
              COMPANY
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              News
            </h1>

            <p className="text-gray-300 mb-4">
              Latest announcements and updates from VizeEst.
            </p>

            <p className="text-gray-400 mb-6">
              This page is reserved for future company announcements, launches, and press updates.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#e5e5e5] transition">
                Get Started Free
              </button>
              <button className="border border-[#2c4a57] px-6 py-3 rounded-full hover:bg-[#0b2230] transition">
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
                  className="border border-[#2c4a57] bg-[#101921] px-4 py-2 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
                    <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>

  <div className="relative bg-[#0d1a26] border border-white/[0.08] rounded-3xl p-4 shadow-2xl">

    {/* Outer dashed border */}
    <div className="border border-dashed bg-[#172636] border-white/10 rounded-2xl p-6">

      {/* Top Label */}
      <p className="text-xs uppercase tracking-widest text-[#91bbc2] mb-4">
        Visual Placeholder
      </p>

      {/* Heading */}
      <h3 className="text-xl font-semibold text-white mb-3">
        Newsroom
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
            <button className="border bg-[#18232e] border-[#2c4a57] px-6 py-3 rounded-full hover:bg-[#0b2230] transition">
              Get Started Free
            </button>
            <button className="border bg-[#18232e] border-[#2c4a57] px-6 py-3 rounded-full hover:bg-[#0b2230] transition">
              Book Demo
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}