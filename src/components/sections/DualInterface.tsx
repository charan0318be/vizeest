'use client';

import { useTheme } from '@/context/ThemeContext';

export default function WhoItHelps() {
  const { theme } = useTheme();

  return (
    <section className={`py-28 ${theme === 'dark' ? 'bg-[#060f17]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* LEFT */}
          <div>
            <div className="mb-6">
              <span className="px-5 py-2 rounded-full text-xs tracking-widest font-medium border border-[#2c4a57] text-[#9adbea]">
                WHO IT HELPS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Three stakeholders. One shared need.
              <br />
              <span className="text-[#9aa4ab]">
                A takeoff process built around confidence.
              </span>
            </h2>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-8">

            {/* CARD 1 */}
            <div className="p-8 rounded-3xl border border-[#1b3440] bg-[#101921] hover:shadow-[0_0_25px_rgba(0,150,200,0.06)]">
              <h3 className="text-xl font-semibold text-white mb-4">
                For Steel Fabricators
              </h3>
              <p className="text-[#9fb0b9] text-[15px] leading-7 mb-6">
                Give your business a takeoff workflow that improves speed, accuracy,
                and internal confidence without removing the estimator from the center
                of the process.
              </p>
              <div className="text-[#9adbea] text-sm font-medium cursor-pointer">
                Explore solution →
              </div>
            </div>

            {/* CARD 2 */}
            <div className="p-8 rounded-3xl border border-[#1b3440] bg-[#101921] hover:shadow-[0_0_25px_rgba(0,150,200,0.06)]">
              <h3 className="text-xl font-semibold text-white mb-4">
                For Detailers
              </h3>
              <p className="text-[#9fb0b9] text-[15px] leading-7 mb-6">
                Support detailers with clearer visual understanding, fewer misses,
                and better coordination with estimators.
              </p>
              <div className="text-[#9adbea] text-sm font-medium cursor-pointer">
                Explore solution →
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-[#1b3440] bg-[#101921] hover:shadow-[0_0_25px_rgba(0,150,200,0.06)]">
              <h3 className="text-xl font-semibold text-white mb-4">
                For Estimators
              </h3>
              <p className="text-[#9fb0b9] text-[15px] leading-7 mb-6">
                Less guessing.More Visual Confidence.Estimators can work faster and more accurately without giving up control.
              </p>
              <div className="text-[#9adbea] text-sm font-medium cursor-pointer">
                Explore solution →
              </div>
            </div>


          </div>
        </div>

        {/* ================= CTA / PRICING BLOCK ================= */}
        <div className="rounded-[32px] border border-[#1b3440] bg-[#0d1926] p-10 md:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <div className="mb-6">
              <span className="px-5 py-2 rounded-full text-xs tracking-widest font-medium border border-[#2c4a57] text-[#9adbea]">
                PRICING
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-sm text-white leading-tight mb-8">
              Start with adoption. Scale with usage.
            </h2>

            {/* BUTTONS */}
            <div className="flex gap-4">

              <button className="px-6 py-3 rounded-full bg-white text-black font-medium">
                View Pricing
              </button>

              <button className="px-6 py-3 rounded-full border border-[#2c4a57] text-white font-medium">
                Get Started Free
              </button>

            </div>
          </div>

          {/* RIGHT PILLS */}
          <div className="flex flex-col sm:flex-row gap-4">

            <div className="px-6 py-4 rounded-full border border-[#1f3a46] bg-[#18232e] text-[#9fb0b9] text-sm">
              Pro for teams getting started.
            </div>

            <div className="px-6 py-4 rounded-full border border-[#1f3a46] bg-[#18232e] text-[#9fb0b9] text-sm">
              Enterprise for larger rollout.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}