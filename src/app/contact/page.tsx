'use client';

import { useState, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// API Base URL from environment variable
const getApiBaseUrl = () => {
  // Use environment variable if set
  if (process.env.NEXT_PUBLIC_API_URL) {
    // Remove trailing slash if present
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '');
  }
  // Fallback for development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000';
  }
  // Default to production
  return 'https://api.vizeest.com';
};

// Get or generate visitor ID for tracking
const getVisitorId = (): string => {
  if (typeof window === 'undefined') return '';

  let visitorId = localStorage.getItem('vizeest_visitor_id');
  if (!visitorId) {
    visitorId = `visitor-${crypto.randomUUID()}`;
    localStorage.setItem('vizeest_visitor_id', visitorId);
  }
  return visitorId;
};

// Track conversion event
const trackConversion = async (conversionType: string, email: string, name: string) => {
  try {
    const visitorId = getVisitorId();
    if (!visitorId) return;

    await fetch(`${getApiBaseUrl()}/api/v1/conversions/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor_id: visitorId,
        conversion_type: conversionType,
        email,
        name,
      }),
    });
  } catch {
    // Silently fail - don't block form submission for tracking errors
  }
};

// Security: Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length (longer for message field)
};

// Security: Rate limiting
const RATE_LIMIT_KEY = 'vizeest_contact_submissions';
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60000; // 1 minute

const checkRateLimit = (): boolean => {
  if (typeof window === 'undefined') return true;

  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]') as number[];
  const recentSubmissions = submissions.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recentSubmissions.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recentSubmissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  return true;
};

// Security: Generate request token
const generateRequestToken = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
};

const contactReasons = [
  { label: 'Request a Demo', value: 'request_demo' },
  { label: 'Pricing Inquiry', value: 'pricing_inquiry' },
  { label: 'Technical Support', value: 'technical_support' },
  { label: 'Partnership Opportunity', value: 'partnership_opportunity' },
  { label: 'Career Inquiry', value: 'career_inquiry' },
  { label: 'Other', value: 'other' },
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
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Security: Honeypot field (hidden from users, filled by bots)
  const [honeypot, setHoneypot] = useState('');

  // Security: Track form load time (bots submit too fast)
  const formLoadTime = useRef(Date.now());
  const MIN_SUBMIT_TIME = 3000; // 3 seconds minimum

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // First name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation (enterprise - block free email domains)
    const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'mail.com', 'protonmail.com'];
    if (!formData.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else {
      const emailDomain = formData.email.split('@')[1]?.toLowerCase();
      if (emailDomain && freeEmailDomains.includes(emailDomain)) {
        errors.email = 'Please use your work email address';
      }
    }

    // Company validation
    if (!formData.company.trim()) {
      errors.company = 'Company is required';
    } else if (formData.company.trim().length < 2) {
      errors.company = 'Company name must be at least 2 characters';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    } else if (formData.phone && formData.phone.replace(/[\s\-\(\)\+]/g, '').length < 7) {
      errors.phone = 'Phone number seems too short';
    }

    // Reason validation
    if (!formData.reason) {
      errors.reason = 'Please select a reason';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide more details (at least 10 characters)';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Security: Check honeypot field (bots fill hidden fields)
    if (honeypot) {
      // Silently reject - don't give bots feedback
      setIsSubmitted(true);
      return;
    }

    // Security: Check if form was submitted too quickly (bot behavior)
    const timeSinceLoad = Date.now() - formLoadTime.current;
    if (timeSinceLoad < MIN_SUBMIT_TIME) {
      setError('Please take a moment to review the form before submitting.');
      return;
    }

    // Security: Rate limiting
    if (!checkRateLimit()) {
      setError('Too many submission attempts. Please wait a minute and try again.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = `${getApiBaseUrl()}/api/v1/contacts/submit`;
      const requestToken = generateRequestToken();

      // Sanitize all user inputs
      const sanitizedData = {
        form_source: 'contact_page',
        form_name: 'Contact Us Form',
        first_name: sanitizeInput(formData.firstName),
        last_name: sanitizeInput(formData.lastName),
        work_email: sanitizeInput(formData.email).toLowerCase(),
        company: sanitizeInput(formData.company),
        phone_number: formData.phone ? sanitizeInput(formData.phone) : undefined,
        inquiry_type: formData.reason,
        message: sanitizeInput(formData.message),
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Request-Token': requestToken,
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.detail || 'Failed to submit. Please try again.');
      }

      // Track conversion (non-blocking)
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      trackConversion('demo_request', formData.email, fullName);

      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'Failed to fetch') {
          setError('Unable to connect to server. Please check your internet connection and try again.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
                    {/* Security: Honeypot field - hidden from users, filled by bots */}
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="contact_website">Website</label>
                      <input
                        type="text"
                        id="contact_website"
                        name="contact_website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

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
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            fieldErrors.firstName
                              ? 'border-[#dc2626]'
                              : theme === 'dark'
                                ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                                : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                          placeholder="John"
                        />
                        {fieldErrors.firstName && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.firstName}</p>}
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
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            fieldErrors.lastName
                              ? 'border-[#dc2626]'
                              : theme === 'dark'
                                ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                                : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                          placeholder="Doe"
                        />
                        {fieldErrors.lastName && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.lastName}</p>}
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
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                          fieldErrors.email
                            ? 'border-[#dc2626]'
                            : theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                        placeholder="john@company.com"
                      />
                      {fieldErrors.email && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.email}</p>}
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
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                            fieldErrors.company
                              ? 'border-[#dc2626]'
                              : theme === 'dark'
                                ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                                : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                          placeholder="Company Name"
                        />
                        {fieldErrors.company && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.company}</p>}
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
                            fieldErrors.phone
                              ? 'border-[#dc2626]'
                              : theme === 'dark'
                                ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                                : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                          } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                          placeholder="+1 (555) 000-0000"
                        />
                        {fieldErrors.phone && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.phone}</p>}
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
                        value={formData.reason}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                          fieldErrors.reason
                            ? 'border-[#dc2626]'
                            : theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                      >
                        <option value="">Select a reason</option>
                        {contactReasons.map((reason) => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.reason && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.reason}</p>}
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
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors resize-none ${
                          fieldErrors.message
                            ? 'border-[#dc2626]'
                            : theme === 'dark'
                              ? 'bg-[#1E1E1E] border-[#2D2D2D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                              : 'bg-white border-[#E5E7EB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        } ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-[#121212]'}`}
                        placeholder="Tell us about your project and estimation needs..."
                      />
                      {fieldErrors.message && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.message}</p>}
                    </div>

                    {error && (
                      <div className="p-3 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
                        <p className="text-[#dc2626] text-sm">{error}</p>
                      </div>
                    )}

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
                      { icon: 'phone', label: 'Sales', value: '+1 (784) 277-0721', href: 'tel:+17842770721' },
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
