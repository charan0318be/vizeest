export default function TechnologyOverviewPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Core Technology
        </h1>
        <p className="text-gray-400 max-w-3xl text-base sm:text-lg">
          Our platform is powered by a purpose-built AI engine designed
          specifically for structural estimation, accuracy, and scale.
        </p>
      </section>

      {/* TECH AREAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'End-to-End Beam Detection',
            'AI Material Take-Off Engine',
            'CAD & BIM Processing',
            'Accuracy & Validation Framework',
            'Quality Control Workflow',
          ].map(item => (
            <div
              key={item}
              className="rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A]
                         p-6 transition-all duration-300
                         hover:-translate-y-2 hover:border-[#4EBABD]
                         hover:shadow-[0_10px_35px_rgba(0,0,0,0.65)]"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
