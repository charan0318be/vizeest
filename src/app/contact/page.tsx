'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const contactReasons = [
  'Request a Demo',
  'Pricing Inquiry',
  'Technical Support',
  'Partnership Opportunity',
  'Career Inquiry',
  'Other',
];

const offices = [
  {
    city: 'San Francisco',
    country: 'USA (Headquarters)',
    address: '100 Montgomery St, Suite 2000',
    phone: '+1 (415) 555-0123',
  },
  {
    city: 'New York',
    country: 'USA',
    address: '350 Fifth Avenue, Suite 4500',
    phone: '+1 (212) 555-0123',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '30 St Mary Axe',
    phone: '+44 20 7123 4567',
  },
];

export default function ContactPage() {
  const { theme } = useTheme();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-[#121212] overflow-hidden">
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
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Start a
              <br />
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              Ready to transform your estimation process? Our team is here to help you get started.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={`py-20 transition-colors ${
          theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div
                ref={formRef}
                className={`scroll-fade-left ${formVisible ? 'animate-in' : ''}`}
              >
                <h2 className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-[#121212]'
                }`}>Send us a Message</h2>
                <p className={`mb-8 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-[#10B981]/10 border border-[#10B981] rounded-xl p-8 text-center scroll-scale-up animate-in">
                    <div className="w-16 h-16 rounded-full bg-[#10B981] flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-[#121212]'
                    }`}>Thank You!</h3>
                    <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        <label htmlFor="firstName" className={`block text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-[#121212]'
                        }`}>
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          }`}
                          placeholder="John"
                        />
                      </div>
                      <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.15s' }}>
                        <label htmlFor="lastName" className={`block text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-[#121212]'
                        }`}>
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          }`}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-[#121212]'
                      }`}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                          theme === 'dark'
                            ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                            : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.25s' }}>
                        <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-[#121212]'
                        }`}>
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          }`}
                          placeholder="Company Name"
                        />
                      </div>
                      <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
                        <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-[#121212]'
                        }`}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          }`}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.35s' }}>
                      <label htmlFor="reason" className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-[#121212]'
                      }`}>
                        How can we help? *
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                          theme === 'dark'
                            ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                            : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        }`}
                      >
                        <option value="">Select a reason</option>
                        {contactReasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`scroll-fade-up ${formVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.4s' }}>
                      <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-[#121212]'
                      }`}>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none ${
                          theme === 'dark'
                            ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                            : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        }`}
                        placeholder="Tell us about your project and estimation needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed ripple-effect scroll-fade-up ${formVisible ? 'animate-in' : ''}`}
                      style={{ transitionDelay: '0.45s' }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div
                ref={infoRef}
                className={`scroll-fade-right ${infoVisible ? 'animate-in' : ''}`}
              >
                {/* Quick Contact */}
                <div className={`rounded-xl p-8 border mb-8 hover-lift ${
                  theme === 'dark'
                    ? 'bg-[#1E1E1E] border-[#2D2D2D]'
                    : 'bg-[#F8FAFB] border-[#E5E7EB]'
                }`}>
                  <h3 className={`text-xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>Quick Contact</h3>
                  <div className="space-y-6">
                    {[
                      { icon: 'email', label: 'Email', value: 'sales@vizeest.com', href: 'mailto:sales@vizeest.com' },
                      { icon: 'phone', label: 'Sales', value: '+1 (415) 555-0123', href: 'tel:+14155550123' },
                      { icon: 'support', label: 'Support', value: 'support@vizeest.com', href: 'mailto:support@vizeest.com' },
                    ].map((contact, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 scroll-fade-up ${infoVisible ? 'animate-in' : ''}`}
                        style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#4EBABD]/10 flex items-center justify-center text-[#4EBABD] flex-shrink-0 hover:scale-110 transition-transform">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {contact.icon === 'email' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                            {contact.icon === 'phone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                            {contact.icon === 'support' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />}
                          </svg>
                        </div>
                        <div>
                          <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{contact.label}</p>
                          <a href={contact.href} className="text-[#4EBABD] hover:underline">
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Locations */}
                <div>
                  <h3 className={`text-xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>Our Offices</h3>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className={`rounded-xl p-6 border transition-all hover-lift hover-glow scroll-flip-up ${infoVisible ? 'animate-in' : ''} ${
                          theme === 'dark'
                            ? 'bg-[#1E1E1E] border-[#2D2D2D] hover:border-[#4EBABD]'
                            : 'bg-[#F8FAFB] border-[#E5E7EB] hover:border-[#4EBABD]'
                        }`}
                        style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4EBABD] to-[#2C7181] flex items-center justify-center text-white flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>{office.city}</p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{office.country}</p>
                            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{office.address}</p>
                            <p className="text-sm text-[#4EBABD]">{office.phone}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-20 transition-colors ${
          theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'
        }`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={faqRef}
              className={`text-center mb-12 scroll-fade-up ${faqVisible ? 'animate-in' : ''}`}
            >
              <h2 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#121212]'
              }`}>Frequently Asked Questions</h2>
              <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>Quick answers to common questions</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'How long does it take to get started with VizeEST?',
                  a: 'Most teams are up and running within 1-2 weeks. Our dedicated onboarding team provides hands-on training and support to ensure a smooth transition.',
                },
                {
                  q: 'What file formats does VizeEST support?',
                  a: 'We support all major formats including PDF, DWG, DXF, RVT (Revit), and IFC. Our system can also process scanned documents with OCR technology.',
                },
                {
                  q: 'Is there a minimum contract length?',
                  a: 'We offer flexible monthly and annual plans. Enterprise clients typically choose annual agreements for better pricing, but we can accommodate various needs.',
                },
                {
                  q: 'How do you handle data security?',
                  a: 'Security is our top priority. We are SOC 2 Type II certified, use end-to-end encryption, and offer on-premise deployment options for organizations with strict requirements.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border transition-all hover-lift scroll-fade-up ${faqVisible ? 'animate-in' : ''} ${
                    theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D]'
                      : 'bg-white border-[#E5E7EB]'
                  }`}
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <h3 className={`font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#121212]'
                  }`}>{faq.q}</h3>
                  <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>{faq.a}</p>
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
