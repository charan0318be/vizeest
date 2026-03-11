'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {

  const { theme } = useTheme();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.company ||
      !formData.role ||
      !formData.email ||
      !formData.message
    ) {
      setError('Please fill all fields');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);

    } catch {
      setError('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const progress =
    (Object.values(formData).filter(v => v !== '').length / 5) * 100;

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#030303] via-[#0b1a1b] to-[#030303]">

        {/* BACKGROUND GRID */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#4EBABD33_1px,transparent_1px),linear-gradient(90deg,#4EBABD33_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* HERO */}
        <section className="pt-32 pb-16 text-center relative z-10">

          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto px-4 scroll-zoom-blur ${
              heroVisible ? 'animate-in' : ''
            }`}
          >

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>

            <p className="text-[#9CA3AF] text-lg">
              Have questions about VizeEST? Send us a message and our team will respond shortly.
            </p>

          </div>

        </section>


        {/* CONTACT FORM */}
        <section className="py-20 relative z-10">

          <div className="max-w-3xl mx-auto px-4">

            <div
              ref={formRef}
              className={`rounded-2xl border p-10 backdrop-blur-md transition-all hover:shadow-2xl hover:shadow-[#4EBABD]/20 scroll-fade-up ${
                formVisible ? 'animate-in' : ''
              }
              ${
                theme === 'dark'
                  ? 'bg-white/[0.04] border-white/[0.08]'
                  : 'bg-white border-[#E5E7EB]'
              }`}
            >

              {/* PROGRESS BAR */}
              <div className="mb-8">

                <div className="h-1 w-full bg-white/10 rounded">

                  <div
                    className="h-1 bg-[#4EBABD] rounded transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />

                </div>

              </div>

              <h2 className="text-2xl font-bold mb-8 text-white">
                Send a Message
              </h2>


              {isSubmitted ? (

                <div className="text-center">

                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">

                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />

                    </svg>

                  </div>

                  <p className="text-lg text-green-400">
                    Thank you! Your message has been sent.
                  </p>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-6">

                  {[
                    { label: 'Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Company', name: 'company', type: 'text', placeholder: 'Company Name' },
                    { label: 'Role', name: 'role', type: 'text', placeholder: 'Estimator / Manager' },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'name@company.com' },
                  ].map((field) => (

                    <div key={field.name}>

                      <label className="block mb-2 text-sm text-gray-300">
                        {field.label}
                      </label>

                      <input
                        type={field.type}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-white outline-none focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/30 transition"
                      />

                    </div>

                  ))}


                  {/* MESSAGE */}
                  <div>

                    <label className="block mb-2 text-sm text-gray-300">
                      Message
                    </label>

                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your estimation workflow..."
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-white outline-none resize-none focus:border-[#4EBABD] focus:ring-2 focus:ring-[#4EBABD]/30 transition"
                    />

                    <p className="text-xs text-gray-400 mt-1 text-right">
                      {formData.message.length}/500
                    </p>

                  </div>


                  {error && (
                    <p className="text-red-500 text-sm">
                      {error}
                    </p>
                  )}


                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#4EBABD] to-[#2C7181] text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4EBABD]/30 transition flex items-center justify-center gap-2"
                  >

                    {isSubmitting && (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    )}

                    {isSubmitting ? 'Sending...' : 'Send Message'}

                  </button>

                </form>

              )}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}