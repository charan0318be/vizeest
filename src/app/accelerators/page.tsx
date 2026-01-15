'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// API Base URL based on environment
const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000';
  }
  if (process.env.NEXT_PUBLIC_API_ENV === 'staging') {
    return 'https://stag-api.vizeest.com';
  }
  return 'https://api.vizeest.com';
};

// Security: Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 500); // Limit length
};

// Security: Rate limiting
const RATE_LIMIT_KEY = 'vizeest_form_submissions';
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

export default function AcceleratorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
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

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
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
      errors.company = 'Company name is required';
    } else if (formData.company.trim().length < 2) {
      errors.company = 'Company name must be at least 2 characters';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    } else if (formData.phone && formData.phone.replace(/[\s\-\(\)\+]/g, '').length < 7) {
      errors.phone = 'Phone number seems too short';
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
      const apiUrl = `${getApiBaseUrl()}/api/v1/campaign-leads/signup`;
      const requestToken = generateRequestToken();

      // Sanitize all user inputs
      const sanitizedData = {
        form_source: 'accelerators_landing',
        form_name: 'Accelerators Program Signup',
        full_name: sanitizeInput(formData.name),
        work_email: sanitizeInput(formData.email).toLowerCase(),
        company_name: sanitizeInput(formData.company),
        phone_number: formData.phone ? sanitizeInput(formData.phone) : undefined,
        team_size: formData.companySize || undefined,
        campaign_id: 'accelerators_2026',
        campaign_name: 'VizeEST Accelerators Program',
        source: 'landing_page',
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
      trackConversion('demo_request', formData.email, formData.name);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-5">
      <div className="w-full max-w-[520px]">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-[#e2e8f0]">
          {/* Header */}
          <div className="bg-[#2C7181] px-8 py-10 text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <Image
                src="/logo.png"
                alt="VizeEST"
                width={48}
                height={48}
                className="rounded-lg mb-3"
              />
              <Image
                src="/vizeest-name.svg"
                alt="VizeEST"
                width={64}
                height={16}
                className="h-4 w-auto brightness-0 invert"
              />
            </div>
            <h1 className="text-white text-2xl font-bold leading-tight mb-3">
              Stop Leaving Margin on the Table
            </h1>
            <p className="text-white text-sm leading-relaxed max-w-[380px] mx-auto">
              Structural steel estimation that reduces rework, improves bid accuracy, and saves estimator time.
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Value Proposition */}
              <div className="px-8 py-6 bg-[#f8fafc] border-b border-[#e2e8f0]">
                <p className="text-[#475569] text-sm leading-relaxed">
                  VizeEST auto-detects beams and columns from PDF/DXF drawings, calculates lengths and quantities with visual verification, and makes estimation assumptions explicit and auditable.
                </p>
              </div>

              {/* Metric Benefits */}
              <div className="px-8 py-6 border-b border-[#e2e8f0]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#2C7181] text-2xl font-bold">60-80%</p>
                    <p className="text-[#64748b] text-xs mt-1">Faster estimation time</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#2C7181] text-2xl font-bold">80%</p>
                    <p className="text-[#64748b] text-xs mt-1">Fewer rework cycles</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#2C7181] text-2xl font-bold">5-15%</p>
                    <p className="text-[#64748b] text-xs mt-1">Project cost savings</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#2C7181] text-2xl font-bold">+10-20pp</p>
                    <p className="text-[#64748b] text-xs mt-1">Higher win rate</p>
                  </div>
                </div>
              </div>

              {/* Program Details */}
              <div className="px-8 py-5 border-b border-[#e2e8f0] bg-[#fefce8]">
                <p className="text-[#713f12] text-sm text-center font-medium">
                  Accelerators Program: 1-month full-access trial for the next 25 steel fabricators
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                {/* Security: Honeypot field - hidden from users, filled by bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="block text-[#2C7181] text-sm font-medium mb-1.5">
                    Full Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3 border rounded-md text-sm outline-none transition-all focus:border-[#2C7181] focus:ring-2 focus:ring-[#2C7181]/10 ${fieldErrors.name ? 'border-[#dc2626]' : 'border-[#d1d5db]'}`}
                    style={{ backgroundColor: '#ffffff', color: '#2C7181' }}
                  />
                  {fieldErrors.name && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-[#2C7181] text-sm font-medium mb-1.5">
                    Work Email <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@steelcompany.com"
                    className={`w-full px-4 py-3 border rounded-md text-sm outline-none transition-all focus:border-[#2C7181] focus:ring-2 focus:ring-[#2C7181]/10 ${fieldErrors.email ? 'border-[#dc2626]' : 'border-[#d1d5db]'}`}
                    style={{ backgroundColor: '#ffffff', color: '#2C7181' }}
                  />
                  {fieldErrors.email && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-[#2C7181] text-sm font-medium mb-1.5">
                    Company Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ABC Steel Fabricators"
                    className={`w-full px-4 py-3 border rounded-md text-sm outline-none transition-all focus:border-[#2C7181] focus:ring-2 focus:ring-[#2C7181]/10 ${fieldErrors.company ? 'border-[#dc2626]' : 'border-[#d1d5db]'}`}
                    style={{ backgroundColor: '#ffffff', color: '#2C7181' }}
                  />
                  {fieldErrors.company && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.company}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2C7181] text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className={`w-full px-4 py-3 border rounded-md text-sm outline-none transition-all focus:border-[#2C7181] focus:ring-2 focus:ring-[#2C7181]/10 ${fieldErrors.phone ? 'border-[#dc2626]' : 'border-[#d1d5db]'}`}
                      style={{ backgroundColor: '#ffffff', color: '#2C7181' }}
                    />
                    {fieldErrors.phone && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[#2C7181] text-sm font-medium mb-1.5">
                      Team Size
                    </label>
                    <div className="relative">
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-md text-sm outline-none transition-all focus:border-[#2C7181] focus:ring-2 focus:ring-[#2C7181]/10 cursor-pointer appearance-none pr-10"
                        style={{ backgroundColor: '#ffffff', color: '#0f172a', colorScheme: 'light' }}
                      >
                        <option value="" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Select</option>
                        <option value="1-10" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>1-10</option>
                        <option value="11-50" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>11-50</option>
                        <option value="51-200" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>51-200</option>
                        <option value="200+" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>200+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-4 w-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-[#fef2f2] border border-[#fecaca] rounded-md">
                    <p className="text-[#dc2626] text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-4 bg-[#2C7181] text-white text-sm font-semibold rounded-md transition-all hover:bg-[#162d4a] active:bg-[#0f2035] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Request a Demo'
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="py-16 px-8 text-center">
              <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-[#2C7181] text-xl font-bold mb-3">Request Received</h2>
              <p className="text-[#64748b] text-sm leading-relaxed max-w-[300px] mx-auto">
                A member of our team will contact you within 24 hours to schedule your demo and discuss your estimation workflow.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="px-8 py-4 border-t border-[#e2e8f0] bg-[#f8fafc]">
            <p className="text-[#94a3b8] text-xs text-center">
              <Link href="https://vizeest.com" className="text-[#64748b] hover:text-[#2C7181]">VizeEST</Link> by Zenitude.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
