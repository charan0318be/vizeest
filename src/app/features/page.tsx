'use client';

import { useDemoModal } from '@/context/DemoModalContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const gaps = [
  "Drawings require interpretation",
  "Complex geometry increases risk",
  "Visual assumptions often go unchecked",
  "Review time is limited",
];



const benefits = [
  "Faster understanding of drawings",
  "Easier internal discussions",
  "Improved review confidence",
  "Better preparation for execution"
];
export default function FeaturesPage() {
  const { openModal } = useDemoModal();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#030303]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(rgba(78,186,189,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(78,186,189,0.5) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030303_70%)]" />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4EBABD]/20 to-transparent rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#2C7181]/25 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#4EBABD]/10 rounded-full blur-[80px]" />

          {/* Decorative Lines */}
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4EBABD]/10 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4EBABD]/10 to-[#2C7181]/10 border border-[#4EBABD]/20 text-[#4EBABD] text-sm font-medium mb-8">
                <div className="w-2 h-2 rounded-full bg-[#4EBABD] animate-pulse" />
                Platform Features
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
               What is Visual-

                <br />
                <span className="bg-gradient-to-r from-[#4EBABD] via-[#5CC8CB] to-[#2C7181] bg-clip-text text-transparent">
                Centric Estimation?
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
               Traditional estimation tools focus mainly on quantities and calculations.
                Visual estimation focuses on helping estimators clearly understand the structure they are reviewing before finalizing scope and pricing.

              </p>

          
              
            </div>
          </div>
        </section>

   <section
  className={`py-24 transition-colors ${
    theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
  }`}
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div
      ref={ref}
      className={`text-center max-w-3xl mx-auto mb-20 scroll-fade-up ${
        isVisible ? 'animate-in' : ''
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-[#121212]'
        }`}
      >
        The Gap in
        <br />
        <span className="gradient-text">
          Traditional Estimation
        </span>
      </h2>
    </div>


    {/* Layout */}
    <div className="relative grid lg:grid-cols-2 items-center">


      {/* LEFT SIDE */}
      <div className="relative flex justify-center">

        {/* Big Circle */}
        <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex flex-col items-center justify-center text-white text-center shadow-2xl">

          <p className="text-6xl font-bold">{gaps.length}</p>

          <p className="mt-4 px-8 text-lg">
            Challenges in
            <br />
            Traditional Estimation
          </p>

        </div>


        {/* Curved SVG Line */}
        <svg
          className="absolute right-[-80px] top-[20px]"
          width="260"
          height="360"
          viewBox="0 0 260 360"
        >

          {/* Main curve */}
          {/* <path
            d="M20 20 C 220 80, 220 280, 20 340"
            stroke="#9CA3AF"
            strokeWidth="2"
            fill="none"
          /> */}

          {/* Dots on curve */}
          {/* <circle cx="120" cy="70" r="4" fill="#9CA3AF"/>
          <circle cx="160" cy="150" r="4" fill="#9CA3AF"/>
          <circle cx="160" cy="230" r="4" fill="#9CA3AF"/>
          <circle cx="120" cy="300" r="4" fill="#9CA3AF"/> */}

        </svg>

      </div>



      {/* RIGHT SIDE BENEFITS */}
      <div className="space-y-12">

        {gaps.map((item, index) => (

          <div
            key={index}
            className={`
            flex items-center gap-6
            opacity-0 translate-y-6
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : ''}
            `}
            style={{ transitionDelay: `${index * 200}ms` }}
          >

            {/* Number Circle */}
            <div className="relative">

              {/* Dotted ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dotted border-[#4EBABD] scale-125"></div>

              <div className="w-12 h-12 rounded-full bg-[#4EBABD] flex items-center justify-center text-white font-semibold shadow-lg">

                {`0${index + 1}`}

              </div>

            </div>


            {/* Dotted connector line */}
            <div className="w-12 border-t border-dotted border-gray-400"></div>


            {/* Text */}
            <p
              className={`text-lg ${
                theme === 'dark'
                  ? 'text-[#E5E7EB]'
                  : 'text-[#374151]'
              }`}
            >
              {item}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>
</section>

  <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#020202] via-[#071416] to-[#020202]">

  {/* Background Grid */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  {/* Glow Effect */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4EBABD]/10 blur-[120px] rounded-full pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        The Visual Validation
        <br />
        <span className="bg-gradient-to-r from-[#4EBABD] to-[#5CC8CB] bg-clip-text text-transparent">
          Approach
        </span>
      </h2>

      <p className="text-lg text-white/50">
        Estimators can review structural drawings while simultaneously
        validating the generated 3D structure. This side-by-side workflow
        allows teams to verify scope and detect potential issues before
        completing the estimate.
      </p>

    </div>

    {/* Two Screen Visualization */}
    <div className="grid lg:grid-cols-2 gap-8 items-center">

      {/* Left Screen */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md hover:border-[#4EBABD]/40 transition">

        <div className="px-4 py-2 text-sm text-white/40 border-b border-white/10">
          Drawings
        </div>

        <img
          src="/2dimage.jpeg"
          alt="Structural drawing"
          className="w-full h-[320px] object-cover"
        />

      </div>

      {/* Right Screen */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md hover:border-[#4EBABD]/40 transition">

        <div className="px-4 py-2 text-sm text-white/40 border-b border-white/10">
          Structural Visualization
        </div>

        <img
          src="/3dimage.jpeg"
          alt="3D structural model"
          className="w-full h-[320px] object-cover"
        />

      </div>

    </div>

  </div>

</section>

<section className="relative py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Key Benefits
      </h2>
      <p className="text-white/40 max-w-2xl mx-auto">
        Visual estimation helps teams understand structures faster
        and make better estimation decisions.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#4EBABD]/90 hover:bg-white/[0.06] transition-all"
        >
          <div className="flex items-start gap-4">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4EBABD]/20 to-[#2C7181]/10 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#4EBABD] rounded-full"></div>
            </div>

            <p className="text-white font-medium leading-relaxed">
              {benefit}
            </p>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      </main>
      <Footer />
    </>
  );
}
