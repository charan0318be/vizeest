'use client';

import { useTheme } from '@/context/ThemeContext';

export default function TermsOfService() {
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
            Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and <strong>ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of VizeEST, our enterprise structural steel estimation platform, including any associated websites, applications, APIs, and services (collectively, the &quot;Service&quot;).
            </p>
            <p className={`mt-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              2. Service Description
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              VizeEST is a Software-as-a-Service (SaaS) platform that provides:
            </p>
            <ul className={`list-disc pl-6 mt-4 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>AI-powered structural steel beam detection and analysis</li>
              <li>Automated material take-offs and bill of materials generation</li>
              <li>PDF and CAD drawing processing and annotation</li>
              <li>Project estimation and cost calculation tools</li>
              <li>Real-time collaboration features for teams</li>
              <li>Export functionality for reports and documentation</li>
              <li>Enterprise administration and user management</li>
              <li>API access for system integrations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3. Account Registration and Security
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.1 Account Creation
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              To use the Service, you must create an account and provide accurate, complete, and current information. You agree to update your information to maintain its accuracy.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.2 Account Security
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must immediately notify us of any unauthorized access or security breach. We recommend enabling multi-factor authentication for enhanced security.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.3 Enterprise Accounts
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Enterprise customers may have administrative controls over user accounts within their organization. Administrators can manage access, permissions, and account settings in accordance with their subscription agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              4. Subscription and Payment
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              4.1 Subscription Plans
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              The Service is offered through various subscription plans with different features, limitations, and pricing. Current plans and pricing are available on our website. We reserve the right to modify pricing with 30 days&apos; notice for existing subscribers.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              4.2 Payment Terms
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>Subscription fees are billed in advance on a monthly or annual basis.</li>
              <li>All fees are non-refundable except as expressly stated or required by law.</li>
              <li>You authorize us to charge your payment method for all applicable fees.</li>
              <li>Late payments may result in service suspension and interest charges.</li>
              <li>Enterprise customers may have custom billing arrangements per their agreement.</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              4.3 Free Trial
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We may offer free trial periods. At the end of a trial, your subscription will automatically convert to a paid plan unless cancelled. Trial limitations and conditions are specified at signup.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              5. Acceptable Use Policy
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>Violate any applicable laws, regulations, or third-party rights.</li>
              <li>Use the Service for fraudulent, deceptive, or illegal activities.</li>
              <li>Attempt to gain unauthorized access to the Service or its systems.</li>
              <li>Interfere with or disrupt the Service&apos;s operation or security.</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
              <li>Copy, modify, or create derivative works of the Service.</li>
              <li>Resell, sublicense, or redistribute the Service without authorization.</li>
              <li>Upload malicious code, viruses, or harmful content.</li>
              <li>Use automated tools to access the Service beyond permitted API usage.</li>
              <li>Circumvent usage limits, security measures, or access controls.</li>
              <li>Harass, abuse, or harm other users or our personnel.</li>
              <li>Infringe upon intellectual property rights of any party.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6. Intellectual Property Rights
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.1 Our Intellectual Property
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              The Service, including its software, algorithms, user interface, documentation, and all related intellectual property, is owned by ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED and protected by copyright, trademark, and other intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.2 Your Content
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You retain ownership of all content you upload, create, or store using the Service (&quot;User Content&quot;). By using the Service, you grant us a limited license to process, store, and display your User Content solely to provide the Service. We will not use your User Content for any other purpose without your consent.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.3 Feedback
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              If you provide feedback, suggestions, or ideas about the Service, you grant us an unrestricted license to use such feedback for any purpose without compensation or attribution.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              7. Data Protection and Confidentiality
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              7.1 Data Processing
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We process your data in accordance with our Privacy Policy and applicable data protection laws. For enterprise customers, we offer Data Processing Agreements (DPAs) that comply with GDPR, CCPA, and other regulations.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              7.2 Confidentiality
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We treat your project data and business information as confidential. Our employees and contractors are bound by confidentiality obligations. We implement appropriate technical and organizational measures to protect your data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              8. Service Level and Availability
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              8.1 Service Availability
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We strive to maintain high availability of the Service. However, we do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              8.2 Service Level Agreement (SLA)
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Enterprise customers may have specific SLAs governing uptime, support response times, and remedies for service disruptions. SLA terms are specified in individual enterprise agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              9. Warranties and Disclaimers
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              9.1 Limited Warranty
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We warrant that the Service will perform substantially in accordance with its documentation under normal use. If the Service fails to meet this warranty, your exclusive remedy is for us to correct the non-conformity or, at our option, terminate your subscription and provide a pro-rata refund.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              9.2 Disclaimer
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              EXCEPT AS EXPRESSLY STATED, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              9.3 Professional Advice Disclaimer
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              The Service provides estimation tools and is not a substitute for professional engineering judgment. You are responsible for verifying all outputs and ensuring compliance with applicable codes, standards, and regulations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              10. Limitation of Liability
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill.</li>
              <li>Our total liability for any claims arising from these Terms or the Service shall not exceed the fees you paid in the twelve (12) months preceding the claim.</li>
              <li>These limitations apply regardless of the theory of liability (contract, tort, strict liability, or otherwise).</li>
            </ul>
            <p className={`mt-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Some jurisdictions do not allow certain liability limitations, so these limitations may not apply to you to the extent prohibited by applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              11. Indemnification
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              You agree to indemnify, defend, and hold harmless ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              12. Termination
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              12.1 Termination by You
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You may cancel your subscription at any time through your account settings or by contacting us. Cancellation takes effect at the end of your current billing period.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              12.2 Termination by Us
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              We may suspend or terminate your access if you breach these Terms, fail to pay fees, or engage in activities that harm the Service or other users. We will provide notice except in cases of severe violations.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              12.3 Effect of Termination
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Upon termination, your right to use the Service ceases immediately. You may export your data within 30 days of termination (unless prohibited by law). We will delete your data in accordance with our data retention policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              13. Changes to Terms
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We may modify these Terms at any time. We will provide notice of material changes via email or through the Service at least 30 days before the changes take effect. Your continued use of the Service after changes constitutes acceptance. If you disagree with changes, you may terminate your subscription.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14. General Provisions
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14.1 Governing Law
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes shall be resolved in the courts of competent jurisdiction in India.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14.2 Dispute Resolution
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Before initiating legal proceedings, parties agree to attempt good-faith negotiations to resolve disputes. Enterprise customers may have alternative dispute resolution provisions in their agreements.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14.3 Entire Agreement
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These Terms, together with our Privacy Policy and any applicable enterprise agreements, constitute the entire agreement between you and us regarding the Service.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14.4 Severability
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              If any provision is found unenforceable, the remaining provisions continue in effect, and the unenforceable provision is modified to the minimum extent necessary.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14.5 Assignment
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You may not assign these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              14.6 No Waiver
            </h3>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Our failure to enforce any right or provision does not constitute a waiver of that right or provision.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              15. Contact Us
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              For questions about these Terms, please contact us:
            </p>
            <div className={`p-6 rounded-xl border ${
              theme === 'dark' ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-[#F8FAFB] border-[#E5E7EB]'
            }`}>
              <p className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
                ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED
              </p>
              <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                Email: <a href="mailto:legal@vizeest.com" className="text-[#4EBABD] hover:underline">legal@vizeest.com</a>
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
