'use client';

import { useState, useEffect, useRef } from 'react';
import { useDemoModal } from '@/context/DemoModalContext';
import { useTheme } from '@/context/ThemeContext';

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
    .slice(0, 1000); // Limit length
};

// Security: Rate limiting
const RATE_LIMIT_KEY = 'vizeest_demo_submissions';
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

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    message: '',
  });

  // Security: Honeypot field (hidden from users, filled by bots)
  const [honeypot, setHoneypot] = useState('');

  // Security: Track form load time (bots submit too fast)
  const formLoadTime = useRef(Date.now());
  const MIN_SUBMIT_TIME = 3000; // 3 seconds minimum

  // Reset form load time when modal opens
  useEffect(() => {
    if (isOpen) {
      formLoadTime.current = Date.now();
    }
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

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

    // Date validation
    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select a preferred date';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.preferredDate = 'Please select a future date';
      }
    }

    // Time validation
    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a preferred time';
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
      setIsSuccess(true);
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
        form_source: 'demo_modal',
        form_name: 'Demo Request Modal',
        first_name: sanitizeInput(formData.firstName),
        last_name: sanitizeInput(formData.lastName),
        work_email: sanitizeInput(formData.email).toLowerCase(),
        company: sanitizeInput(formData.company),
        job_title: formData.jobTitle ? sanitizeInput(formData.jobTitle) : undefined,
        phone_number: formData.phone ? sanitizeInput(formData.phone) : undefined,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        timezone: formData.timezone,
        inquiry_type: 'request_demo',
        message: formData.message ? sanitizeInput(formData.message) : undefined,
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

      setIsSuccess(true);

      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          jobTitle: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          message: '',
        });
        setFieldErrors({});
        setError(null);
        closeModal();
      }, 2000);
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
    setFormData(prev => ({
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-fade-in-up ${
        theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white'
      }`}>
        {/* Close Button */}
        <button
          onClick={closeModal}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
            theme === 'dark'
              ? 'hover:bg-[#2D2D2D] text-[#9CA3AF]'
              : 'hover:bg-[#F3F4F6] text-[#6B7280]'
          }`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4EBABD]/10 text-[#4EBABD] text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Demo
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            See VizeEST in Action
          </h2>
          <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
            Get a personalized demo and learn how VizeEST can transform your structural steel estimation process.
          </p>
        </div>

        {/* Form */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#10B981]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              Thank You!
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We&apos;ll be in touch within 24 hours to schedule your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 pt-6">
            {/* Security: Honeypot field - hidden from users, filled by bots */}
            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
              <label htmlFor="demo_website">Website</label>
              <input
                type="text"
                id="demo_website"
                name="demo_website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
                }`}>
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    fieldErrors.firstName
                      ? 'border-[#dc2626]'
                      : theme === 'dark'
                        ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                        : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  } ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'}`}
                  placeholder="John"
                />
                {fieldErrors.firstName && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.firstName}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
                }`}>
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    fieldErrors.lastName
                      ? 'border-[#dc2626]'
                      : theme === 'dark'
                        ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                        : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  } ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'}`}
                  placeholder="Smith"
                />
                {fieldErrors.lastName && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.lastName}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
              }`}>
                Work Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  fieldErrors.email
                    ? 'border-[#dc2626]'
                    : theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                } ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'}`}
                placeholder="john@company.com"
              />
              {fieldErrors.email && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.email}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
                }`}>
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    fieldErrors.company
                      ? 'border-[#dc2626]'
                      : theme === 'dark'
                        ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                        : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  } ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'}`}
                  placeholder="Acme Steel Fabricators"
                />
                {fieldErrors.company && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.company}</p>}
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
                }`}>
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  }`}
                  placeholder="Chief Estimator"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
              }`}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  fieldErrors.phone
                    ? 'border-[#dc2626]'
                    : theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                } ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-[#121212]'}`}
                placeholder="+1 (555) 123-4567"
              />
              {fieldErrors.phone && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.phone}</p>}
            </div>

            {/* Schedule Demo Section */}
            <div className={`mb-4 p-4 rounded-xl border ${
              theme === 'dark' ? 'bg-[#1a1a1a] border-[#2D2D2D]' : 'bg-[#F8FAFB] border-[#E5E7EB]'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#4EBABD]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4EBABD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                  Select Your Preferred Time
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Date Picker */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${
                    theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                  }`}>
                    Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-colors text-sm ${
                        fieldErrors.preferredDate
                          ? 'border-[#dc2626]'
                          : theme === 'dark'
                            ? 'bg-[#121212] border-[#3D3D3D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                            : 'bg-white border-[#D1D5DB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                      }`}
                      style={{ colorScheme: theme === 'dark' ? 'dark' : 'light' }}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  {fieldErrors.preferredDate && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.preferredDate}</p>}
                </div>

                {/* Time Picker */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${
                    theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                  }`}>
                    Time *
                  </label>
                  <div className="relative">
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-colors text-sm appearance-none ${
                        fieldErrors.preferredTime
                          ? 'border-[#dc2626]'
                          : theme === 'dark'
                            ? 'bg-[#121212] border-[#3D3D3D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                            : 'bg-white border-[#D1D5DB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                      }`}
                      style={{ colorScheme: theme === 'dark' ? 'dark' : 'light' }}
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="09:30">9:30 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="15:30">3:30 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="16:30">4:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {fieldErrors.preferredTime && <p className="text-[#dc2626] text-xs mt-1">{fieldErrors.preferredTime}</p>}
                </div>
              </div>

              {/* Timezone Selector */}
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${
                  theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                }`}>
                  Timezone
                </label>
                <div className="relative">
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border transition-colors text-sm appearance-none ${
                      theme === 'dark'
                        ? 'bg-[#121212] border-[#3D3D3D] text-white focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                        : 'bg-white border-[#D1D5DB] text-[#121212] focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/20'
                    }`}
                    style={{ colorScheme: theme === 'dark' ? 'dark' : 'light' }}
                  >
                    <optgroup label="Americas">
                      <option value="America/New_York">Eastern Time (ET) - New York</option>
                      <option value="America/Chicago">Central Time (CT) - Chicago</option>
                      <option value="America/Denver">Mountain Time (MT) - Denver</option>
                      <option value="America/Los_Angeles">Pacific Time (PT) - Los Angeles</option>
                      <option value="America/Phoenix">Arizona (MST) - Phoenix</option>
                      <option value="America/Anchorage">Alaska (AKT) - Anchorage</option>
                      <option value="Pacific/Honolulu">Hawaii (HST) - Honolulu</option>
                      <option value="America/Toronto">Eastern Time (ET) - Toronto</option>
                      <option value="America/Vancouver">Pacific Time (PT) - Vancouver</option>
                      <option value="America/Mexico_City">Central Time (CST) - Mexico City</option>
                      <option value="America/Sao_Paulo">Brasilia Time (BRT) - São Paulo</option>
                    </optgroup>
                    <optgroup label="Europe">
                      <option value="Europe/London">GMT/BST - London</option>
                      <option value="Europe/Paris">CET/CEST - Paris</option>
                      <option value="Europe/Berlin">CET/CEST - Berlin</option>
                      <option value="Europe/Amsterdam">CET/CEST - Amsterdam</option>
                      <option value="Europe/Madrid">CET/CEST - Madrid</option>
                      <option value="Europe/Rome">CET/CEST - Rome</option>
                      <option value="Europe/Zurich">CET/CEST - Zurich</option>
                      <option value="Europe/Stockholm">CET/CEST - Stockholm</option>
                      <option value="Europe/Warsaw">CET/CEST - Warsaw</option>
                      <option value="Europe/Moscow">MSK - Moscow</option>
                    </optgroup>
                    <optgroup label="Asia Pacific">
                      <option value="Asia/Dubai">GST - Dubai</option>
                      <option value="Asia/Kolkata">IST - Mumbai/Delhi</option>
                      <option value="Asia/Singapore">SGT - Singapore</option>
                      <option value="Asia/Hong_Kong">HKT - Hong Kong</option>
                      <option value="Asia/Shanghai">CST - Shanghai/Beijing</option>
                      <option value="Asia/Tokyo">JST - Tokyo</option>
                      <option value="Asia/Seoul">KST - Seoul</option>
                      <option value="Australia/Sydney">AEST/AEDT - Sydney</option>
                      <option value="Australia/Melbourne">AEST/AEDT - Melbourne</option>
                      <option value="Australia/Perth">AWST - Perth</option>
                      <option value="Pacific/Auckland">NZST/NZDT - Auckland</option>
                    </optgroup>
                    <optgroup label="Middle East & Africa">
                      <option value="Asia/Jerusalem">IST/IDT - Tel Aviv</option>
                      <option value="Africa/Cairo">EET - Cairo</option>
                      <option value="Africa/Johannesburg">SAST - Johannesburg</option>
                      <option value="Africa/Lagos">WAT - Lagos</option>
                    </optgroup>
                  </select>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-[#E5E7EB]' : 'text-[#374151]'
              }`}>
                What are you hoping to achieve with VizeEST?
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                  theme === 'dark'
                    ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                    : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                }`}
                placeholder="Tell us about your estimation challenges..."
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
                <p className="text-[#dc2626] text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Request Demo
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              )}
            </button>

            <p className={`text-xs text-center mt-4 ${
              theme === 'dark' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
            }`}>
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
