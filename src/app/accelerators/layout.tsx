import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join VizeEST Accelerators Program | Steel Estimation Platform',
  description: 'Join the next 25 steel fabricators in the VizeEST Accelerators Program. Get 1-month full-access trial, exclusive pricing, and priority support.',
  openGraph: {
    title: 'Join VizeEST Accelerators Program',
    description: 'Strengthen estimation discipline. Gain margin visibility. Limited to 25 companies.',
    type: 'website',
  },
};

export default function AcceleratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
