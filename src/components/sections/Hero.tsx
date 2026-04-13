'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';

export default function Hero() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060f17]">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_#0c2d3a_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,_#0a1f2e_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,_#071a24_0%,_transparent_50%)]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(78, 186, 189, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 186, 189, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#4EBABD]/[0.03] rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2C7181]/[0.04] rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#4EBABD]/[0.02] rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 lg:py-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 item-start min-h-screen lg:min-h-0 lg:py-24">

          {/* Left - Text Content */}
         <div className="text-center lg:text-left">
            {/* Badge */}
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d242e] border border-white/[0.08] mb-6 hover:bg-white/[0.05] hover:border-[#4EBABD]/30 transition-all group animate-fade-in"
            >
              {/* <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EBABD] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EBABD]"></span>
              </span> */}
              <span className="text-xs text-[#cffbff]   font-medium uppercase tracking-widest tracking-[0.15em] [word-spacing:3px]">Built for steel fabricators who want faster takeoffs with stronger estimator confidence</span>
              {/* <span className="px-2 py-0.5 text-[10px] bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white rounded-full font-bold">75% OFF</span> */}
              {/* <svg className="w-3 h-3 text-white/40 group-hover:text-[#4EBABD] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg> */}
            </Link>

            {/* Heading */}
            <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-6xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-white bg-clip-text text-transparent">
               Faster takeoffs aren’t enough. You need accuracy you can trust — with the estimator still in charge.
              </span>
              
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             VizeEst is an estimator sidekick built to help fabricators move faster
              <br />
              <span className="text-white/70">with better accuracy. It gives estimators a clearer way to verify what they are seeing, reduce manual errors, and work with more confidence at every stage. Whether it is a new estimator or a senior one, the platform is there to support judgment, not take it away.
</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-medium rounded-4xl hover:shadow-[0_0_30px_rgba(78,186,189,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Started Free
                {/* <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg> */}
              </button>
              <button
               
                className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.03] border border-white/10 text-white font-medium rounded-4xl hover:bg-white/[0.06] hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                
                Book Demo
              </button>
              <button
               
                className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.03] border border-white/10 text-white font-medium rounded-4xl hover:bg-white/[0.06] hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Product Tour
              </button>
            </div>
           
            {/* Stats Row */}
            {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '90%', label: 'Faster' },
                { value: '98%', label: 'Accuracy' },
                { value: '500+', label: 'Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right - Dashboard Mockup */}
         {/* Right - Split Screen Visual */}
{/* Right - Visual Placeholder Style */}
<div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>

  <div className="relative bg-[#0e171f] border border-white/[0.08] rounded-3xl p-4 shadow-2xl">

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
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-6">

              {[
                "Estimator-first workflow",
                "Visual verification before pricing",
                "Estimator empowered",
                "Faster error spotting",
                "Stronger internal trust",
                "Built for steel fabricators",
              ].map((item, index) => (
                
                <div
                  key={index}
                  className="px-7 py-5 rounded-2xl border border-white/10 
                            bg-[#131c24] 
                            text-[#d2d3d4] text--sm
                            hover:border-[#4EBABD]/40 hover:shadow-lg 
                            transition-all duration-300"
                >
                  {item}
                </div>

              ))}

            </div>
</div>

          
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-white/40 rounded-full animate-scroll-indicator" />
        </div>
      </div>

      {/* Trust Badges - Mobile */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-6 text-white/30 text-[10px] sm:hidden">
        <span>SOC 2</span>
        <span>•</span>
        <span>ISO 27001</span>
        <span>•</span>
        <span>GDPR</span>
      </div>
    </section>
  );
}
