'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';

export default function Hero() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030303]">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:py-24">

          {/* Left - Text Content */}
          <div className="text-center lg:text-left pt-20 lg:pt-0">
            {/* Badge */}
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 hover:bg-white/[0.05] hover:border-[#4EBABD]/30 transition-all group animate-fade-in"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EBABD] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EBABD]"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Founder Accelerator Program</span>
              <span className="px-2 py-0.5 text-[10px] bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white rounded-full font-bold">75% OFF</span>
              <svg className="w-3 h-3 text-white/40 group-hover:text-[#4EBABD] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-[#4EBABD] via-[#5CC8CB] to-[#2C7181] bg-clip-text text-transparent">
                90% Faster
              </span>
              <br />
              Steel Estimation Starts Here
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Upload your PDFs. Get accurate material take-offs in minutes.
              <br />
              <span className="text-white/70">Win more bids with AI-powered steel estimation.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(78,186,189,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={openModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.03] border border-white/10 text-white font-medium rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: '0.3s' }}>
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4EBABD]/10 to-[#2C7181]/10 blur-[60px] rounded-3xl" />

            {/* Main Dashboard Card */}
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28ca41]"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/[0.05] rounded-lg px-3 py-1.5 text-[10px] text-white/30 font-mono text-center">
                    app.vizeest.com/project/steel-takeoff
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 space-y-4">
                {/* Top Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Beams Detected', value: '147', change: '+12', color: '#4EBABD' },
                    { label: 'Total Weight', value: '28.4t', change: '', color: '#2C7181' },
                    { label: 'Accuracy', value: '98.7%', change: '', color: '#10B981' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/[0.02] rounded-xl p-3 border border-white/[0.05]">
                      <div className="text-[10px] text-white/40 mb-1">{stat.label}</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-white">{stat.value}</span>
                        {stat.change && (
                          <span className="text-[10px] text-[#10B981]">{stat.change}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* PDF Preview Area */}
                <div className="relative bg-[#0d0d0d] rounded-xl border border-white/[0.05] p-3 h-[200px] overflow-hidden">
                  {/* Blueprint Background */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="heroGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(78, 186, 189, 0.15)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#heroGrid)" />
                    </svg>
                  </div>

                  {/* Animated Beam Detection */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    {/* Structural frame */}
                    <g className="animate-fade-in" style={{ animationDelay: '1s' }}>
                      {/* Columns */}
                      <rect x="50" y="40" width="8" height="140" fill="none" stroke="#4EBABD" strokeWidth="1.5" opacity="0.8" />
                      <rect x="150" y="40" width="8" height="140" fill="none" stroke="#4EBABD" strokeWidth="1.5" opacity="0.8" />
                      <rect x="250" y="40" width="8" height="140" fill="none" stroke="#4EBABD" strokeWidth="1.5" opacity="0.8" />
                      <rect x="342" y="40" width="8" height="140" fill="none" stroke="#4EBABD" strokeWidth="1.5" opacity="0.8" />

                      {/* Beams */}
                      <rect x="50" y="40" width="300" height="6" fill="none" stroke="#2C7181" strokeWidth="1.5" opacity="0.8" />
                      <rect x="50" y="90" width="300" height="6" fill="none" stroke="#2C7181" strokeWidth="1.5" opacity="0.8" />
                      <rect x="50" y="140" width="300" height="6" fill="none" stroke="#2C7181" strokeWidth="1.5" opacity="0.8" />
                    </g>

                    {/* Detection highlights */}
                    <g className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
                      <rect x="48" y="38" width="12" height="10" fill="none" stroke="#4EBABD" strokeWidth="2" className="animate-node-pulse" />
                      <rect x="148" y="88" width="12" height="10" fill="none" stroke="#4EBABD" strokeWidth="2" className="animate-node-pulse" style={{ animationDelay: '0.2s' }} />
                      <rect x="248" y="138" width="12" height="10" fill="none" stroke="#4EBABD" strokeWidth="2" className="animate-node-pulse" style={{ animationDelay: '0.4s' }} />
                    </g>

                    {/* Scanning line */}
                    <line x1="0" y1="100" x2="400" y2="100" stroke="url(#scanLine)" strokeWidth="2" className="animate-scan-horizontal" />

                    <defs>
                      <linearGradient id="scanLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#4EBABD" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></span>
                    <span className="text-[9px] text-[#10B981] font-medium">AI Detecting</span>
                  </div>
                </div>

                {/* Bottom Panel - Material List */}
                <div className="bg-white/[0.02] rounded-xl border border-white/[0.05] overflow-hidden">
                  <div className="px-3 py-2 border-b border-white/[0.05] flex items-center justify-between">
                    <span className="text-[10px] text-white/50 font-medium">Material Take-Off</span>
                    <span className="text-[9px] text-[#4EBABD]">Auto-generated</span>
                  </div>
                  <div className="divide-y divide-white/[0.03]">
                    {[
                      { type: 'W12×26', qty: '24', length: '294\'-0"', weight: '7,644 lbs' },
                      { type: 'W10×22', qty: '18', length: '216\'-0"', weight: '4,752 lbs' },
                      { type: 'W8×18', qty: '32', length: '384\'-0"', weight: '6,912 lbs' },
                    ].map((item, i) => (
                      <div key={i} className="px-3 py-2 flex items-center text-[10px]">
                        <span className="text-white/70 w-16">{item.type}</span>
                        <span className="text-white/40 w-10">{item.qty}</span>
                        <span className="text-white/40 flex-1">{item.length}</span>
                        <span className="text-[#4EBABD] font-medium">{item.weight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#0a0a0a]/90 backdrop-blur border border-white/[0.08] rounded-xl p-3 shadow-xl animate-float-slow">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-white/40">Completed</div>
                  <div className="text-xs text-white font-medium">24 pages processed</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a]/90 backdrop-blur border border-white/[0.08] rounded-xl p-3 shadow-xl animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-white/40">Time Saved</div>
                  <div className="text-xs text-[#10B981] font-medium">4.5 hours</div>
                </div>
              </div>
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
