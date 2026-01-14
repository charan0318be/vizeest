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
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-5">
      <div className="w-full max-w-[520px]">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-[#e2e8f0]">
          {/* Header */}
          <div className="bg-[#1e3a5f] px-8 py-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="VizeEST"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <Image
                src="/vizeest-name.svg"
                alt="VizeEST"
                width={72}
                height={20}
                className="h-5 w-auto brightness-0 invert"
              />
            </div>
            <h1 className="text-white text-2xl font-bold leading-tight mb-3">
              Stop Leaving Margin on the Table
            </h1>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-[380px] mx-auto">
              AI-powered structural steel estimation that reduces rework, improves bid accuracy, and saves estimator time.
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
                    <p className="text-[#1e3a5f] text-2xl font-bold">60-80%</p>
                    <p className="text-[#64748b] text-xs mt-1">Faster estimation time</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#1e3a5f] text-2xl font-bold">80%</p>
                    <p className="text-[#64748b] text-xs mt-1">Fewer rework cycles</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#1e3a5f] text-2xl font-bold">5-15%</p>
                    <p className="text-[#64748b] text-xs mt-1">Project cost savings</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <p className="text-[#1e3a5f] text-2xl font-bold">+10-20pp</p>
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
                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-1.5">
                    Full Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-[#d1d5db] rounded-md text-sm outline-none transition-all focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                    style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
                  />
                </div>

                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-1.5">
                    Work Email <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@steelcompany.com"
                    className="w-full px-4 py-3 border border-[#d1d5db] rounded-md text-sm outline-none transition-all focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                    style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
                  />
                </div>

                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-1.5">
                    Company Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ABC Steel Fabricators"
                    className="w-full px-4 py-3 border border-[#d1d5db] rounded-md text-sm outline-none transition-all focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                    style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1e3a5f] text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-[#d1d5db] rounded-md text-sm outline-none transition-all focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10"
                      style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
                    />
                  </div>

                  <div>
                    <label className="block text-[#1e3a5f] text-sm font-medium mb-1.5">
                      Team Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#d1d5db] rounded-md text-sm outline-none transition-all focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 cursor-pointer appearance-none bg-no-repeat bg-[right_12px_center] pr-8"
                      style={{ backgroundColor: '#ffffff', color: '#1e3a5f', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")" }}
                    >
                      <option value="" style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}>Select</option>
                      <option value="1-10" style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}>1-10</option>
                      <option value="11-50" style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}>11-50</option>
                      <option value="51-200" style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}>51-200</option>
                      <option value="200+" style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}>200+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-4 bg-[#1e3a5f] text-white text-sm font-semibold rounded-md transition-all hover:bg-[#162d4a] active:bg-[#0f2035] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-[#1e3a5f] text-xl font-bold mb-3">Request Received</h2>
              <p className="text-[#64748b] text-sm leading-relaxed max-w-[300px] mx-auto">
                A member of our team will contact you within 24 hours to schedule your demo and discuss your estimation workflow.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="px-8 py-4 border-t border-[#e2e8f0] bg-[#f8fafc]">
            <p className="text-[#94a3b8] text-xs text-center">
              <Link href="https://vizeest.com" className="text-[#64748b] hover:text-[#1e3a5f]">VizeEST</Link> by Zenitude.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
