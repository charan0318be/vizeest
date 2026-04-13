'use client';
import { Eye, Boxes, ShieldCheck } from 'lucide-react';

export default function GetStartedSection() {
  return (
    <section className="bg-[#060f17] text-white py-20">
      
      {/* HERO CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Tag */}
            <div className="inline-block border border-[#2c4a57] text-xs px-4 py-1 rounded-full mb-6 tracking-widest text-gray-300">
              GET STARTED FREE
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Start with the free platform.
            </h1>

            {/* Description */}
            <p className="text-gray-300 mb-4">
              VizeEst is no longer positioned as a trial-only experience. This page
              should take users directly into free platform signup, where they can
              enter the product, explore the workflow, and upgrade when they are ready.
            </p>

            <p className="text-gray-400 mb-6">
              Keep this page simple. The job here is to remove friction and send users into
              the actual product environment.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {[
                'Create a free VizeEst account',
                'Enter the platform instantly',
                'Explore the workflow at your own pace',
                'Upgrade only when you need more',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span>✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#e5e5e5] transition">
                Create Free Account
              </button>

              <button className="border border-[#2c4a57] px-6 py-3 rounded-full text-white hover:bg-[#0b2230] transition">
                Watch Product Tour
              </button>
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
        Estimator-first verification workflow
      </h3>

      {/* Description */}
      <p className="text-sm text-[#a3a8ad] mb-6 leading-relaxed">
        Show a 2D drawing, extracted steel members, and a 3D verification view side by side.
        The product should feel practical, trustworthy, and built for real estimators not generic automation demos.
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


{/* BOTTOM CARDS */}
<div className="mt-20 grid md:grid-cols-3 gap-6">
  
  {/* CARD 1 */}
  <div className="bg-[#172129] border border-[#1b3440] rounded-3xl p-6 hover:border-[#2c4a57] transition">
    <div className="w-12 h-12 rounded-2xl bg-[#132f3d] flex items-center justify-center mb-4 border border-[#2c4a57]/40">
      <Eye className="w-5 h-5 text-[#9adbea]" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">Free entry</h3>
    <p className="text-gray-400">
      Let users see the workflow before asking for commitment.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-[#172129] border border-[#1b3440] rounded-3xl p-6 hover:border-[#2c4a57] transition">
    <div className="w-12 h-12 rounded-2xl bg-[#132f3d] flex items-center justify-center mb-4 border border-[#2c4a57]/40">
      <Boxes className="w-5 h-5 text-[#9adbea]" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">Product-led upgrade</h3>
    <p className="text-gray-400">
      The value should become obvious inside the platform, not only on the website.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-[#172129] border border-[#1b3440] rounded-3xl p-6 hover:border-[#2c4a57] transition">
    <div className="w-12 h-12 rounded-2xl bg-[#132f3d] flex items-center justify-center mb-4 border border-[#2c4a57]/40">
      <ShieldCheck className="w-5 h-5 text-[#9adbea]" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">Upgrade when ready</h3>
    <p className="text-gray-400">
      Paywalls should appear when usage grows, not before trust does.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}