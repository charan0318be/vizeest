'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';

export default function Hero() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated Structural Analysis Background */}
      <div className="absolute inset-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A]" />

        {/* Animated Engineering Grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(78, 186, 189, 0.2)" strokeWidth="0.5"/>
              </pattern>
              <pattern id="gridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(78, 186, 189, 0.05)" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridSmall)" />
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Structural Beams - Layer 1 */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          {/* Horizontal Beam 1 */}
          <div className="absolute top-[20%] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent animate-beam-scan" />
          {/* Horizontal Beam 2 */}
          <div className="absolute top-[45%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2C7181]/15 to-transparent animate-beam-scan-reverse" style={{ animationDelay: '2s' }} />
          {/* Horizontal Beam 3 */}
          <div className="absolute top-[70%] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4EBABD]/20 to-transparent animate-beam-scan" style={{ animationDelay: '4s' }} />

          {/* Vertical Beam 1 */}
          <div className="absolute left-[15%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#4EBABD]/15 to-transparent animate-beam-scan-vertical" style={{ animationDelay: '1s' }} />
          {/* Vertical Beam 2 */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#2C7181]/20 to-transparent animate-beam-scan-vertical" style={{ animationDelay: '3s' }} />
          {/* Vertical Beam 3 */}
          <div className="absolute left-[85%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#4EBABD]/15 to-transparent animate-beam-scan-vertical" style={{ animationDelay: '5s' }} />
        </div>

        {/* 3D Structural Framework Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-[140%] h-[140%] opacity-15" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            {/* Main structural frame */}
            <g className="animate-structure-pulse">
              {/* Foundation */}
              <line x1="100" y1="700" x2="900" y2="700" stroke="#4EBABD" strokeWidth="3" className="animate-draw-line" />

              {/* Left Column */}
              <line x1="150" y1="700" x2="150" y2="200" stroke="#4EBABD" strokeWidth="2.5" className="animate-draw-line-up" style={{ animationDelay: '0.2s' }} />
              <line x1="250" y1="700" x2="250" y2="250" stroke="#2C7181" strokeWidth="2" className="animate-draw-line-up" style={{ animationDelay: '0.4s' }} />

              {/* Right Column */}
              <line x1="850" y1="700" x2="850" y2="200" stroke="#4EBABD" strokeWidth="2.5" className="animate-draw-line-up" style={{ animationDelay: '0.3s' }} />
              <line x1="750" y1="700" x2="750" y2="250" stroke="#2C7181" strokeWidth="2" className="animate-draw-line-up" style={{ animationDelay: '0.5s' }} />

              {/* Center Columns */}
              <line x1="400" y1="700" x2="400" y2="300" stroke="#2C7181" strokeWidth="2" className="animate-draw-line-up" style={{ animationDelay: '0.6s' }} />
              <line x1="500" y1="700" x2="500" y2="280" stroke="#4EBABD" strokeWidth="2.5" className="animate-draw-line-up" style={{ animationDelay: '0.7s' }} />
              <line x1="600" y1="700" x2="600" y2="300" stroke="#2C7181" strokeWidth="2" className="animate-draw-line-up" style={{ animationDelay: '0.8s' }} />

              {/* Top Beams */}
              <line x1="150" y1="200" x2="850" y2="200" stroke="#4EBABD" strokeWidth="2.5" className="animate-draw-line" style={{ animationDelay: '1s' }} />
              <line x1="250" y1="250" x2="750" y2="250" stroke="#2C7181" strokeWidth="2" className="animate-draw-line" style={{ animationDelay: '1.2s' }} />
              <line x1="400" y1="300" x2="600" y2="300" stroke="#4EBABD" strokeWidth="2" className="animate-draw-line" style={{ animationDelay: '1.4s' }} />

              {/* Cross Bracing */}
              <line x1="150" y1="200" x2="250" y2="450" stroke="#4EBABD" strokeWidth="1" opacity="0.6" className="animate-draw-line-diagonal" style={{ animationDelay: '1.6s' }} />
              <line x1="250" y1="250" x2="150" y2="450" stroke="#2C7181" strokeWidth="1" opacity="0.6" className="animate-draw-line-diagonal" style={{ animationDelay: '1.8s' }} />
              <line x1="850" y1="200" x2="750" y2="450" stroke="#4EBABD" strokeWidth="1" opacity="0.6" className="animate-draw-line-diagonal" style={{ animationDelay: '1.7s' }} />
              <line x1="750" y1="250" x2="850" y2="450" stroke="#2C7181" strokeWidth="1" opacity="0.6" className="animate-draw-line-diagonal" style={{ animationDelay: '1.9s' }} />

              {/* Floor Beams */}
              <line x1="150" y1="450" x2="850" y2="450" stroke="#2C7181" strokeWidth="1.5" className="animate-draw-line" style={{ animationDelay: '2s' }} />
              <line x1="150" y1="550" x2="850" y2="550" stroke="#4EBABD" strokeWidth="1.5" className="animate-draw-line" style={{ animationDelay: '2.2s' }} />
            </g>

            {/* Detection Points with Pulsing Effect */}
            <g className="animate-fade-in" style={{ animationDelay: '2.5s' }}>
              {/* Node Points */}
              <circle cx="150" cy="200" r="6" fill="#4EBABD" className="animate-node-pulse" />
              <circle cx="850" cy="200" r="6" fill="#4EBABD" className="animate-node-pulse" style={{ animationDelay: '0.2s' }} />
              <circle cx="500" cy="280" r="8" fill="#4EBABD" className="animate-node-pulse" style={{ animationDelay: '0.4s' }} />
              <circle cx="250" cy="250" r="5" fill="#2C7181" className="animate-node-pulse" style={{ animationDelay: '0.6s' }} />
              <circle cx="750" cy="250" r="5" fill="#2C7181" className="animate-node-pulse" style={{ animationDelay: '0.8s' }} />
              <circle cx="400" cy="300" r="5" fill="#4EBABD" className="animate-node-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="600" cy="300" r="5" fill="#4EBABD" className="animate-node-pulse" style={{ animationDelay: '1.2s' }} />

              {/* Outer glow rings */}
              <circle cx="500" cy="280" r="16" fill="none" stroke="#4EBABD" strokeWidth="1" opacity="0.3" className="animate-ring-expand" />
              <circle cx="150" cy="200" r="12" fill="none" stroke="#4EBABD" strokeWidth="1" opacity="0.3" className="animate-ring-expand" style={{ animationDelay: '0.5s' }} />
              <circle cx="850" cy="200" r="12" fill="none" stroke="#4EBABD" strokeWidth="1" opacity="0.3" className="animate-ring-expand" style={{ animationDelay: '1s' }} />
            </g>

            {/* Dimension Lines */}
            <g opacity="0.4" className="animate-fade-in" style={{ animationDelay: '3s' }}>
              <line x1="150" y1="180" x2="850" y2="180" stroke="#4EBABD" strokeWidth="0.5" strokeDasharray="5,5" />
              <line x1="130" y1="200" x2="130" y2="700" stroke="#4EBABD" strokeWidth="0.5" strokeDasharray="5,5" />
            </g>
          </svg>
        </div>

        {/* Floating Data Particles - Deterministic positions for SSR */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          {[
            { left: 15, top: 25, delay: 0, duration: 9 },
            { left: 78, top: 42, delay: 1.2, duration: 11 },
            { left: 32, top: 68, delay: 2.5, duration: 8 },
            { left: 65, top: 15, delay: 0.8, duration: 10 },
            { left: 88, top: 55, delay: 3.1, duration: 9 },
            { left: 8, top: 82, delay: 1.5, duration: 11 },
            { left: 45, top: 38, delay: 4.2, duration: 8 },
            { left: 92, top: 22, delay: 0.3, duration: 10 },
            { left: 22, top: 90, delay: 2.8, duration: 9 },
            { left: 55, top: 72, delay: 1.8, duration: 11 },
            { left: 72, top: 8, delay: 3.5, duration: 8 },
            { left: 38, top: 48, delay: 0.6, duration: 10 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#4EBABD] rounded-full animate-float-particle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4EBABD] to-transparent animate-scan-line" />
        </div>

        {/* Data Stream Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4EBABD] to-transparent animate-data-stream" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2C7181] to-transparent animate-data-stream-reverse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Corner Brackets - Engineering Style */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#4EBABD]/15 animate-fade-in" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-[#4EBABD]/15 animate-fade-in" style={{ animationDelay: '0.7s' }} />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-[#4EBABD]/15 animate-fade-in" style={{ animationDelay: '0.9s' }} />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#4EBABD]/15 animate-fade-in" style={{ animationDelay: '1.1s' }} />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4EBABD]/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2C7181]/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4EBABD]/3 rounded-full blur-[200px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-[#4EBABD]/30 mb-8 animate-fade-in backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EBABD] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4EBABD]"></span>
          </span>
          <span className="text-sm text-[#9CA3AF] font-medium">Enterprise-Ready Steel Estimation Platform</span>
          <span className="px-2 py-0.5 text-xs bg-[#4EBABD]/20 text-[#4EBABD] rounded-full">v2.0</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Transform Structural Steel
          <br />
          <span className="gradient-text">Estimation Forever</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          VizeEST delivers intelligent beam detection, automated material take-offs, and enterprise-grade reporting.
          <br className="hidden sm:block" />
          Reduce estimation time by <span className="text-[#4EBABD] font-semibold">80%</span> while improving accuracy to <span className="text-[#4EBABD] font-semibold">98%+</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button onClick={openModal} className="group btn btn-primary text-lg px-8 py-4 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Request Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <Link href="/#features" className="btn btn-secondary text-lg px-8 py-4 backdrop-blur-sm">
            Explore Features
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '80%', label: 'Time Saved', icon: '⚡' },
            { value: '98%+', label: 'Accuracy Rate', icon: '🎯' },
            { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
            { value: '10M+', label: 'Beams Detected', icon: '📊' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#4EBABD] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-[#9CA3AF] flex items-center justify-center gap-1">
                <span>{stat.icon}</span>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t ${
        theme === 'dark' ? 'from-[#121212]' : 'from-white'
      } to-transparent pointer-events-none`} />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#4EBABD]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#4EBABD] rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
