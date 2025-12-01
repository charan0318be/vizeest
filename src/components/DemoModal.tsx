'use client';

import { useState, useEffect } from 'react';
import { useDemoModal } from '@/context/DemoModalContext';
import { useTheme } from '@/context/ThemeContext';

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
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
        message: '',
      });
      closeModal();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  }`}
                  placeholder="John"
                />
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
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  }`}
                  placeholder="Smith"
                />
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
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                    : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                }`}
                placeholder="john@company.com"
              />
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
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                      : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                  }`}
                  placeholder="Acme Steel Fabricators"
                />
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
                  theme === 'dark'
                    ? 'bg-[#121212] border-[#2D2D2D] text-white placeholder-[#6B7280] focus:border-[#4EBABD]'
                    : 'bg-white border-[#E5E7EB] text-[#121212] placeholder-[#9CA3AF] focus:border-[#4EBABD]'
                }`}
                placeholder="+1 (555) 123-4567"
              />
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
