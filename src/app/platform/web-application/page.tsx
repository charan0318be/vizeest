import Waves from "@/components/Waves";

export default function WebApplicationPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
          Web Application
        </h1>
        <p className="text-gray-400 max-w-7xl text-base sm:text-lg">
          A modern, browser-based estimation platform designed for speed,
          collaboration, and enterprise-scale workflows — without installs
          or local setup.
        </p>
      </section>

      {/* PRIMARY PRODUCT VIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6
                          grid grid-cols-1 lg:grid-cols-2 gap-16
                          items-center pb-20">

        {/* IMAGE */}
        <div
  className="relative overflow-hidden
             rounded-2xl bg-[#111] border border-[#2A2A2A]
             min-h-[260px] sm:min-h-[380px]
             transition-all duration-300
             hover:border-[#4EBABD]
             hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
>
  {/* WAVES AS MAIN VISUAL */}
  <Waves
    
    waveAmpX={10}
    waveAmpY={11}
    waveSpeedX={0.10}
    waveSpeedY={0.10}
    
  />

  {/* OPTIONAL LABEL / OVERLAY (can remove if not needed) */}
  <div className="relative z-10
                  h-full w-full
                  flex items-center justify-center
                  text-white/40 text-sm">
    Web Application Interface
  </div>
</div>


        {/* TEXT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Built for Everyday Estimation Work
          </h2>

          <p className="text-gray-400  sm:text-base leading-relaxed mb-4">
            The web application provides a single, consistent environment
            for uploading drawings, reviewing detections, validating
            quantities, and exporting results.
          </p>

          <p className="text-gray-400  leading-relaxed">
            Teams always work on the latest data, eliminating version
            conflicts and manual coordination.
          </p>
        </div>

      </section>

      {/* CORE CAPABILITIES (CARDS) */}
      <section className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Core Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: 'Instant Access',
                desc: 'Launch the platform directly from the browser without downloads or installations.',
              },
              {
                title: 'Responsive Interface',
                desc: 'Optimized layouts adapt seamlessly across desktops, laptops, and tablets.',
              },
              {
                title: 'Secure Sessions',
                desc: 'Encrypted sessions and enterprise-grade authentication protect user access.',
              },
              {
                title: 'Real-Time Updates',
                desc: 'Changes appear instantly across users, keeping everyone aligned.',
              },
              {
                title: 'High-Performance Rendering',
                desc: 'Handle large drawings and complex projects without performance degradation.',
              },
              {
                title: 'Always Up to Date',
                desc: 'Automatic updates ensure teams always use the latest features.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#111] border border-[#2A2A2A]
                           p-6 transition-all duration-300
                           hover:-translate-y-2 hover:border-[#4EBABD]
                           hover:shadow-[0_12px_35px_rgba(0,0,0,0.65)]"
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WORKFLOW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div>
            <h3 className="text-lg font-bold mb-3">Upload</h3>
            <p className="text-gray-400  leading-relaxed">
              Securely upload PDFs, CAD, and BIM files directly
              into your project workspace.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Review</h3>
            <p className="text-gray-400  leading-relaxed">
              Validate detected elements visually and apply
              estimator expertise where required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Deliver</h3>
            <p className="text-gray-400  leading-relaxed">
              Export quantities and reports with full traceability
              and audit readiness.
            </p>
          </div>

        </div>

      </section>

      {/* VALUE BANNER */}
      <section className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            One Platform. Every Estimator.
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto  sm:text-base">
            The web application removes setup friction and
            enables teams to focus on accurate, confident estimation.
          </p>
        </div>
      </section>

    </main>
  );
}
