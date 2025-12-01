'use client';

import { useTheme } from '@/context/ThemeContext';
import { useDemoModal } from '@/context/DemoModalContext';
import { useScrollAnimation, useScrollAnimationGroup } from '@/hooks/useScrollAnimation';

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '80% Faster Estimation',
    description: 'Reduce estimation time from days to hours. Process complex multi-story buildings in minutes, not weeks.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '98%+ Accuracy',
    description: 'AI-powered detection combined with human verification delivers industry-leading precision on every project.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Proven ROI',
    description: 'Our clients report 3-5x ROI within the first year through improved efficiency and bid accuracy.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Enterprise Scale',
    description: 'Handle projects of any size—from simple frames to complex multi-building campuses.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Security First',
    description: 'SOC 2 Type II certified with end-to-end encryption. Your sensitive project data is always protected.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Dedicated Support',
    description: '24/7 enterprise support with dedicated account managers and custom onboarding programs.',
  },
];

const testimonials = [
  {
    quote: "VizeEST has transformed our estimation department. What used to take 3 days now takes 4 hours with better accuracy.",
    author: 'Michael Chen',
    title: 'VP of Estimating',
    company: 'Pacific Steel Fabricators',
  },
  {
    quote: "The ROI was clear within the first month. We're now bidding on 40% more projects with the same team size.",
    author: 'Sarah Martinez',
    title: 'Director of Operations',
    company: 'Midwest Structural Steel',
  },
  {
    quote: "Finally, a tool that understands the complexity of structural steel estimation. The accuracy is remarkable.",
    author: 'James Wilson',
    title: 'Chief Estimator',
    company: 'Atlantic Heavy Industries',
  },
];

export default function WhyChoose() {
  const { theme } = useTheme();
  const { openModal } = useDemoModal();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: reasonsRef, isVisible: reasonsVisible, getStaggerClass } = useScrollAnimationGroup(reasons.length);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className={`py-24 transition-colors ${
      theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${headerVisible ? 'animate-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            The VizeEST Advantage
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Why Enterprises
            <br />
            <span className="gradient-text">Choose VizeEST</span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Join hundreds of leading steel fabricators, engineering firms, and general contractors who trust VizeEST for their most critical estimation workflows.
          </p>
        </div>

        {/* Reasons Grid */}
        <div ref={reasonsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex gap-4 group scroll-fade-up hover-bounce ${reasonsVisible ? getStaggerClass(index) : ''}`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4EBABD]/10 to-[#2C7181]/10 flex items-center justify-center text-[#4EBABD] flex-shrink-0 group-hover:from-[#4EBABD]/20 group-hover:to-[#2C7181]/20 transition-all group-hover:scale-110">
                {reason.icon}
              </div>
              <div>
                <h3 className={`font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-[#121212]'
                }`}>{reason.title}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialsRef}
          className={`rounded-2xl p-8 md:p-12 border scroll-scale-up ${testimonialsVisible ? 'animate-in' : ''} ${
            theme === 'dark'
              ? 'bg-[#1E1E1E] border-[#2D2D2D]'
              : 'bg-[#F8FAFB] border-[#E5E7EB]'
          }`}
        >
          <h3 className={`text-2xl font-bold text-center mb-10 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Trusted by Industry Leaders
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border transition-all hover-lift hover-glow scroll-flip-up ${testimonialsVisible ? 'animate-in' : ''} ${
                  theme === 'dark'
                    ? 'bg-[#121212] border-[#2D2D2D]'
                    : 'bg-white border-[#E5E7EB] shadow-sm'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#F59E0B]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-6 italic ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{testimonial.author}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{testimonial.title}</p>
                  <p className="text-sm text-[#4EBABD]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          ref={ctaRef}
          className={`mt-16 text-center scroll-fade-up ${ctaVisible ? 'animate-in' : ''}`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Ready to Transform Your Estimation Process?
          </h3>
          <p className={`mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Join 500+ enterprise teams who have already made the switch. Get a personalized demo and see how VizeEST can work for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={openModal} className="btn btn-primary text-lg px-8 ripple-effect">
              Schedule Demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={openModal} className={`btn text-lg px-8 ${
              theme === 'dark'
                ? 'bg-transparent border-2 border-[#4EBABD] text-[#4EBABD] hover:bg-[#4EBABD] hover:text-white'
                : 'btn-outline'
            }`}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
