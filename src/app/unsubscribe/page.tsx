'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'invalid'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (!email) {
      setStatus('invalid');
      return;
    }

    const unsubscribe = async () => {
      try {
        const response = await fetch(
          `${getApiBaseUrl()}/api/v1/campaign-leads/unsubscribe?email=${encodeURIComponent(email)}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || 'Failed to unsubscribe');
        }

        setStatus('success');
      } catch (err) {
        setStatus('error');
        if (err instanceof Error) {
          // Handle network errors
          if (err.message === 'Failed to fetch') {
            setErrorMessage('Unable to connect to server. Please check your internet connection.');
          } else {
            setErrorMessage(err.message);
          }
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
      }
    };

    unsubscribe();
  }, [email]);

  return (
    <div className="py-12 px-8 text-center">
      {status === 'loading' && (
        <>
          <div className="w-12 h-12 border-4 border-[#2C7181] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-[#2C7181] text-xl font-bold mb-2">Processing...</h2>
          <p className="text-[#64748b] text-sm">Please wait while we update your preferences.</p>
        </>
      )}

      {status === 'success' && (
        <>
          <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[#2C7181] text-xl font-bold mb-3">Unsubscribed Successfully</h2>
          <p className="text-[#64748b] text-sm leading-relaxed mb-6">
            You have been removed from our mailing list and will no longer receive marketing emails from VizeEST.
          </p>
          <p className="text-[#94a3b8] text-xs">
            Changed your mind?{' '}
            <Link href="/contact" className="text-[#2C7181] hover:underline">
              Contact us
            </Link>
          </p>
        </>
      )}

      {status === 'error' && (
        <>
          <div className="w-16 h-16 bg-[#fef2f2] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-[#dc2626] text-xl font-bold mb-3">Something Went Wrong</h2>
          <p className="text-[#64748b] text-sm leading-relaxed mb-6">
            {errorMessage || 'We could not process your unsubscribe request. Please try again later.'}
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#2C7181] text-white text-sm font-semibold rounded-md hover:bg-[#1e5a66] transition-colors"
          >
            Contact Support
          </Link>
        </>
      )}

      {status === 'invalid' && (
        <>
          <div className="w-16 h-16 bg-[#fef3c7] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-[#d97706] text-xl font-bold mb-3">Invalid Request</h2>
          <p className="text-[#64748b] text-sm leading-relaxed mb-6">
            No email address was provided. Please use the unsubscribe link from your email.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#2C7181] text-white text-sm font-semibold rounded-md hover:bg-[#1e5a66] transition-colors"
          >
            Go to Homepage
          </Link>
        </>
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="py-12 px-8 text-center">
      <div className="w-12 h-12 border-4 border-[#2C7181] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
      <h2 className="text-[#2C7181] text-xl font-bold mb-2">Loading...</h2>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-5">
      <div className="w-full max-w-[480px]">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-[#e2e8f0]">
          {/* Header */}
          <div className="bg-[#2C7181] px-8 py-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/logo.png"
                alt="VizeEST"
                width={40}
                height={40}
                className="rounded-lg mb-2"
              />
              <Image
                src="/vizeest-name.svg"
                alt="VizeEST"
                width={56}
                height={14}
                className="h-3.5 w-auto brightness-0 invert"
              />
            </div>
          </div>

          {/* Content with Suspense */}
          <Suspense fallback={<LoadingState />}>
            <UnsubscribeContent />
          </Suspense>

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
