'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Accelerator Lead:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] flex items-center justify-center p-5">
      <div className="w-full max-w-[480px]">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#4EBABD] to-[#2C7181] px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="VizeEST"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <Image
                src="/vizeest-name.png"
                alt="VizeEST"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Accelerators Program
            </span>
            <h1 className="text-white text-xl font-bold leading-tight">
              Join the Next 25 Steel Fabricators
            </h1>
            <p className="text-white/90 text-sm mt-2">
              Strengthen estimation discipline. Gain margin visibility.
            </p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Benefits */}
              <div className="px-6 py-5 border-b border-[#e2e8f0]">
                <p className="text-[#0f172a] text-xs font-bold uppercase tracking-wide mb-3">
                  What you&apos;ll receive:
                </p>
                <div className="space-y-2">
                  {[
                    '1-month full-access trial (cancel anytime)',
                    'Accelerator-only entry pricing',
                    'Priority support & complimentary add-ons',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-[#475569] text-sm">
                      <span className="text-[#4EBABD] font-bold text-base flex-shrink-0">&#10003;</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-[#0f172a] text-sm font-semibold mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-3.5 py-3 border border-[#e2e8f0] rounded-md text-[#0f172a] text-base outline-none transition-all focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/10 placeholder:text-[#94a3b8] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[#0f172a] text-sm font-semibold mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-3.5 py-3 border border-[#e2e8f0] rounded-md text-[#0f172a] text-base outline-none transition-all focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/10 placeholder:text-[#94a3b8] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[#0f172a] text-sm font-semibold mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Steel Company"
                    className="w-full px-3.5 py-3 border border-[#e2e8f0] rounded-md text-[#0f172a] text-base outline-none transition-all focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/10 placeholder:text-[#94a3b8] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[#0f172a] text-sm font-semibold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-3.5 py-3 border border-[#e2e8f0] rounded-md text-[#0f172a] text-base outline-none transition-all focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/10 placeholder:text-[#94a3b8] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[#0f172a] text-sm font-semibold mb-1.5">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 border border-[#e2e8f0] rounded-md text-[#0f172a] text-base outline-none transition-all focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/10 cursor-pointer appearance-none bg-no-repeat bg-[right_14px_center] pr-9"
                    style={{ backgroundColor: '#ffffff', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")" }}
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 bg-gradient-to-br from-[#4EBABD] to-[#2C7181] text-white text-base font-bold rounded-md transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-[#4EBABD]/30 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    'Request to Join'
                  )}
                </button>

                {/* Highlighted Note */}
                <div className="mt-5 p-3.5 bg-gradient-to-br from-[#fef3c7] to-[#fde68a] border border-[#fcd34d] rounded-md text-center">
                  <p className="text-[#92400e] text-sm font-semibold">
                    <strong className="text-[#78350f]">Limited to 25 companies.</strong> We&apos;ll reach out within 24 hours.
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="py-12 px-8 text-center">
              <div className="w-[72px] h-[72px] bg-gradient-to-br from-[#d1fae5] to-[#a7f3d0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#10b981] text-4xl">&#10003;</span>
              </div>
              <h2 className="text-[#0f172a] text-xl font-bold mb-3">Thank You!</h2>
              <p className="text-[#64748b] text-sm leading-relaxed max-w-[320px] mx-auto">
                Your interest in the Accelerators Program has been received. Our team will contact you within 24 hours to discuss next steps.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-5 border-t border-[#e2e8f0] bg-[#f8fafc] text-center">
            <p className="text-[#64748b] text-xs">
              <Link href="/" className="text-[#4EBABD] hover:underline">VizeEST</Link> by Zenitude.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
