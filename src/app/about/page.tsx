'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import { useScrollAnimation, useScrollAnimationGroup, useCountUp } from '@/hooks/useScrollAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const teamMembers = [
  {
    name: 'David Richardson',
    role: 'CEO & Co-Founder',
    bio: '20+ years in structural steel fabrication. Former VP at Turner Construction.',
    image: null,
  },
  {
    name: 'Dr. Sarah Kim',
    role: 'CTO & Co-Founder',
    bio: 'PhD in Computer Vision from MIT. Led engineering teams at Google and Autodesk.',
    image: null,
  },
  {
    name: 'Michael Torres',
    role: 'VP of Engineering',
    bio: '15 years building enterprise software. Former engineering director at Procore.',
    image: null,
  },
  {
    name: 'Jennifer Walsh',
    role: 'VP of Customer Success',
    bio: 'Deep expertise in construction technology adoption. Former at Bluebeam.',
    image: null,
  },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Accuracy First',
    description: 'We believe estimation accuracy is non-negotiable. Every feature we build is tested against real-world complexity.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Customer Partnership',
    description: 'We succeed only when our customers succeed. Every decision is made with their outcomes in mind.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Continuous Innovation',
    description: 'The construction industry is evolving. We invest heavily in R&D to stay ahead of emerging challenges.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Security & Trust',
    description: 'We handle sensitive project data with the utmost care. Security is built into everything we do.',
  },
];

// Stat counter component
function StatCounter({ value, label }: { value: string; label: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const { ref, count } = useCountUp(numericValue, 2000);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-3xl font-bold gradient-text mb-1">{count}{suffix}</div>
      <div className="text-sm text-[#9CA3AF]">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible, getStaggerClass } = useScrollAnimationGroup(values.length);
  const { ref: teamRef, isVisible: teamVisible, getStaggerClass: getTeamStaggerClass } = useScrollAnimationGroup(teamMembers.length);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#121212] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(78, 186, 189, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(78, 186, 189, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div
            ref={heroRef}
            className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-zoom-blur ${heroVisible ? 'animate-in' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-6">
              About VizeEST
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Steel Estimation
              <br />
              <span className="gradient-text">One Drawing at a Time</span>
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              We&apos;re on a mission to revolutionize how the steel fabrication industry estimates, bids, and builds.
              Through intelligent automation, we&apos;re saving thousands of hours and helping teams win more projects.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className={`py-20 transition-colors ${
          theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={missionRef}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`scroll-fade-left ${missionVisible ? 'animate-in' : ''}`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-[#121212]'
                }`}>
                  Our Mission
                </h2>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  Steel estimation has remained largely unchanged for decades—manual, time-consuming, and prone to errors.
                  We founded VizeEST to change that.
                </p>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  Our platform combines cutting-edge technology with deep industry expertise to automate the most tedious parts
                  of estimation while keeping estimators in control. The result? 80% faster estimates with 98%+ accuracy.
                </p>
                <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  We believe that when estimators are freed from manual takeoffs, they can focus on what really matters:
                  value engineering, client relationships, and winning more profitable projects.
                </p>
              </div>
              <div className={`rounded-2xl p-8 border scroll-fade-right ${missionVisible ? 'animate-in' : ''} ${
                theme === 'dark'
                  ? 'bg-[#1E1E1E] border-[#2D2D2D]'
                  : 'bg-[#F8FAFB] border-[#E5E7EB]'
              }`}>
                <div className="grid grid-cols-2 gap-6">
                  <StatCounter value="500+" label="Enterprise Clients" />
                  <StatCounter value="10+" label="Million Beams Detected" />
                  <StatCounter value="30+" label="Countries Served" />
                  <StatCounter value="150+" label="Team Members" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={`py-20 transition-colors ${
          theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 scroll-fade-up ${valuesVisible ? 'animate-in' : ''}`}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>Our Values</h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
              }`}>
                These principles guide everything we do, from product development to customer support.
              </p>
            </div>
            <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className={`rounded-xl p-6 border text-center transition-all hover-lift hover-glow scroll-fade-up ${valuesVisible ? getStaggerClass(index) : ''} ${
                  theme === 'dark'
                    ? 'bg-[#121212] border-[#2D2D2D]'
                    : 'bg-white border-[#E5E7EB] shadow-sm'
                }`}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white mx-auto mb-4 float-slow">
                    {value.icon}
                  </div>
                  <h3 className={`font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>{value.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-20 transition-colors ${
          theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 scroll-fade-up ${teamVisible ? 'animate-in' : ''}`}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>Leadership Team</h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
              }`}>
                Industry veterans and technology experts united by a shared vision.
              </p>
            </div>
            <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className={`rounded-xl p-6 border text-center transition-all hover-lift hover-glow scroll-scale-up ${teamVisible ? getTeamStaggerClass(index) : ''} ${
                  theme === 'dark'
                    ? 'bg-[#1E1E1E] border-[#2D2D2D]'
                    : 'bg-[#F8FAFB] border-[#E5E7EB] shadow-sm'
                }`}>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 morph-shape">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className={`font-bold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>{member.name}</h3>
                  <p className="text-sm text-[#4EBABD] mb-2">{member.role}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#121212]">
          <div
            ref={ctaRef}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-fade-up ${ctaVisible ? 'animate-in' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us in Transforming the Industry
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-8">
              Whether you&apos;re looking to revolutionize your estimation process or join our team,
              we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={openModal} className="btn btn-primary ripple-effect">
                Request a Demo
              </button>
              <button onClick={openModal} className="btn bg-transparent border-2 border-[#4EBABD] text-[#4EBABD] hover:bg-[#4EBABD] hover:text-white">
                View Open Positions
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
