'use client';

import { useTheme } from '@/context/ThemeContext';

export default function PrivacyPolicy() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen pt-32 pb-20 transition-colors ${
      theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-[#121212]'
          }`}>
            Privacy Policy
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none ${
          theme === 'dark' ? 'prose-invert' : ''
        }`}>
          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              1. Introduction
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              VizeEST is a product of <strong>ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our enterprise structural steel estimation platform (&quot;Service&quot;).
            </p>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              By accessing or using VizeEST, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              2. Information We Collect
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              2.1 Information You Provide
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Account Information:</strong> Name, email address, company name, job title, phone number, and billing information when you create an account or subscribe to our Service.</li>
              <li><strong>Profile Information:</strong> Professional details, preferences, and settings you provide in your account profile.</li>
              <li><strong>Project Data:</strong> Structural drawings, CAD files, PDF documents, estimation data, material take-offs, and other project-related content you upload or create using the Service.</li>
              <li><strong>Communications:</strong> Information you provide when contacting us for support, requesting demos, or participating in surveys.</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address, and transaction history processed through our secure payment providers.</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              2.2 Information Collected Automatically
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Usage Data:</strong> Features accessed, actions taken, time spent on the platform, and interaction patterns.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and hardware specifications.</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and performance metrics.</li>
              <li><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies (see our Cookie Policy).</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              2.3 Information from Third Parties
            </h3>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>Information from business partners, resellers, or integration providers.</li>
              <li>Publicly available business information from professional networking sites.</li>
              <li>Data from analytics and advertising partners.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3. How We Use Your Information
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We use the collected information for the following purposes:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve the VizeEST platform and its features.</li>
              <li><strong>Account Management:</strong> To create and manage your account, process subscriptions, and handle billing.</li>
              <li><strong>Customer Support:</strong> To respond to inquiries, provide technical support, and resolve issues.</li>
              <li><strong>Product Development:</strong> To analyze usage patterns, identify trends, and develop new features.</li>
              <li><strong>Communications:</strong> To send service updates, security alerts, administrative messages, and marketing communications (with your consent).</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, unauthorized access, and other security issues.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              <li><strong>Business Operations:</strong> To manage our business, including analytics, auditing, and corporate transactions.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              4. Data Sharing and Disclosure
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our Service (hosting, payment processing, analytics, customer support).</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales, with appropriate confidentiality protections.</li>
              <li><strong>Legal Requirements:</strong> When required by law, legal process, or government requests.</li>
              <li><strong>Protection of Rights:</strong> To protect the rights, property, and safety of VizeEST, our users, and the public.</li>
              <li><strong>With Your Consent:</strong> When you have given explicit permission to share information.</li>
              <li><strong>Enterprise Customers:</strong> If your employer or organization has subscribed to VizeEST, they may have administrative access to your account data.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              5. Data Security
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We implement enterprise-grade security measures to protect your data:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
              <li><strong>Access Controls:</strong> Role-based access controls, multi-factor authentication, and audit logging.</li>
              <li><strong>Infrastructure Security:</strong> SOC 2 Type II compliant data centers with 24/7 monitoring.</li>
              <li><strong>Regular Audits:</strong> Penetration testing, vulnerability assessments, and security reviews.</li>
              <li><strong>Incident Response:</strong> Documented incident response procedures and breach notification protocols.</li>
              <li><strong>Employee Training:</strong> Regular security awareness training for all employees.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6. Data Retention
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We retain your information for as long as your account is active or as needed to provide services. After account termination, we retain certain data as required by law or for legitimate business purposes (e.g., dispute resolution, legal compliance). Project data may be retained for a specified period per your subscription agreement. You can request deletion of your data, subject to legal and contractual obligations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              7. Your Rights and Choices
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Access:</strong> Request a copy of your personal information.</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong>Objection:</strong> Object to certain processing activities.</li>
              <li><strong>Restriction:</strong> Request limitation of processing.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent.</li>
              <li><strong>Marketing Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
            </ul>
            <p className={`mt-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              To exercise these rights, contact us at <a href="mailto:privacy@vizeest.com" className="text-[#4EBABD] hover:underline">privacy@vizeest.com</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              8. International Data Transfers
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              VizeEST operates globally. Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses and other approved mechanisms. For enterprise customers, we offer data residency options and can execute Data Processing Agreements (DPAs) as required.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              9. Children&apos;s Privacy
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              VizeEST is designed for business use and is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              10. Third-Party Links and Services
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Our Service may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              11. Changes to This Policy
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page, updating the &quot;Last updated&quot; date, and sending email notifications to enterprise customers. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              12. Contact Us
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className={`p-6 rounded-xl border ${
              theme === 'dark' ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-[#F8FAFB] border-[#E5E7EB]'
            }`}>
              <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED
              </p>
              <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                Email: <a href="mailto:privacy@vizeest.com" className="text-[#4EBABD] hover:underline">privacy@vizeest.com</a>
              </p>
              <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                Phone: <a href="tel:+17842770721" className="text-[#4EBABD] hover:underline">+1 (784) 277-0721</a>
              </p>
              <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                Website: <a href="https://vizeest.com" className="text-[#4EBABD] hover:underline">vizeest.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
