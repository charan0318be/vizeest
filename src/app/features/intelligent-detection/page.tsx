
'use client';

import BeamDetection from '@/components/sections/BeamDetection';
import Galaxy from '@/components/Galaxy';

export default function IntelligentDetectionPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">

      {/* HERO */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* <div className="inline-flex items-center gap-2 mb-6
                            text-sm font-semibold uppercase tracking-wider
                            text-[#4EBABD]">
              <span className="w-2 h-2 rounded-full bg-[#4EBABD]" />
              AI-Powered Feature
            </div> */}

            <h1 className="text-4xl md:text-4xl lg:text-7xl xl:text-7xl
                           font-bold leading-[1.05] tracking-tight mb-8">
              Intelligent
              <br />
              <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB]
                               bg-clip-text text-transparent">
                Detection
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50
                          leading-relaxed max-w-xl mb-10">
              Automatically detect and classify beams, columns, and
              structural connections from PDFs, CAD, and BIM drawings
              with industry-leading accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-2xl font-semibold
                                 text-white bg-gradient-to-r
                                 from-[#4EBABD] to-[#2C7181]
                                 hover:opacity-90 transition">
                Start Free Trial
              </button>

              <button className="px-8 py-4 rounded-2xl font-semibold
                                 text-white bg-white/[0.03]
                                 border border-white/10
                                 hover:bg-white/[0.08]
                                 hover:border-[#4EBABD]/30
                                 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT – VISUAL */}
          <div className="relative p-8 rounded-3xl
                          bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                          border border-white/[0.06]
                          hover:border-[#4EBABD]/30
                          transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-[#4EBABD]">
                AI Detecting
              </span>
              <span className="text-xs font-semibold text-green-400
                               bg-green-400/10 px-3 py-1 rounded-full animate-pulse">
                Live
              </span>
            </div>

            <div
  className="relative h-56 md:h-64 rounded-2xl
             border border-white/[0.08]
             overflow-hidden">

  {/* Background Animation */}
  <div className="absolute inset-0 pointer-events-none">
            <Galaxy
          density={0.8}
          glowIntensity={1.5}
          speed={0.28}
          rotationSpeed={0.04}
          twinkleIntensity={0.15}
          mouseInteraction={true}
          
        />

  </div>

  {/* Overlay Content */}
  <div
    className="relative z-10 w-full h-full
               flex items-center justify-center
               bg-black/40 backdrop-blur-sm
               text-white/70 text-sm font-medium">
    Structural Drawing Visualization
  </div>
</div>

          </div>

        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl
                           font-bold mb-6">
              Built for Accuracy
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Detection technology designed for real-world engineering workflows
            </p>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: 'Beam & Column Recognition',
      desc: 'Automatically identify steel beams, columns, plates, and custom profiles from engineering drawings.',
      icon: '🖥️',
    },
    {
      title: 'Multi-Format Support',
      desc: 'Works seamlessly with PDF plans, AutoCAD DWG files, Revit models, and scanned documents.',
      icon: '📄',
    },
    {
      title: 'Accuracy You Can Trust',
      desc: 'Reduces human error through AI-driven validation and continuous learning models.',
      icon: '🎯',
    },
  ].map(card => (
    <div
      key={card.title}
      className="
        relative p-8 rounded-3xl
        bg-gradient-to-b from-white/[0.04] to-white/[0.01]
        border border-white/[0.08]
        hover:border-[#4EBABD]
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,20,20,0.8)]
        transition-all duration-300
      "
    >
      {/* ICON */}
      <div
        className="
         w-12 h-12 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
      >
        {card.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-3">
        {card.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#6B7280] leading-relaxed ">
        {card.desc}
      </p>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* REUSED SECTIONS – normalized wrapper */}
      <section className="relative py-20">
        <BeamDetection />
        {/* <DualInterface /> */}
      </section>

      {/* OUTPUT */}
      {/* <section className="relative py-32">
        <EnterpriseOutputs
          title="From Detection to Delivery"
          description="Turn detected elements into accurate material take-offs and client-ready reports within minutes."
        />
      </section> */}

    </main>
  );
}
