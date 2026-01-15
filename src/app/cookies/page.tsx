'use client';

import { useTheme } from '@/context/ThemeContext';

export default function CookiePolicy() {
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
            Cookie Policy
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
              This Cookie Policy explains how <strong>ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies on the VizeEST platform (&quot;Service&quot;). This policy should be read alongside our Privacy Policy, which explains how we collect, use, and protect your personal information.
            </p>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              By using VizeEST, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or not use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              2. What Are Cookies?
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
            </p>
            <p className={`mt-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Persistent cookies</strong> remain on your device after you close your browser until they expire or you delete them.</li>
              <li><strong>Session cookies</strong> are temporary and are deleted when you close your browser.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3. Types of Cookies We Use
            </h2>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.1 Strictly Necessary Cookies
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These cookies are essential for the operation of VizeEST. They enable core functionality such as security, authentication, and session management. Without these cookies, the Service cannot function properly.
            </p>
            <div className={`p-4 rounded-lg mb-6 ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={theme === 'dark' ? 'text-white' : 'text-[#121212]'}>
                    <th className="text-left pb-2">Cookie Name</th>
                    <th className="text-left pb-2">Purpose</th>
                    <th className="text-left pb-2">Duration</th>
                  </tr>
                </thead>
                <tbody className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                  <tr>
                    <td className="py-2">session_id</td>
                    <td>User authentication and session management</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td className="py-2">csrf_token</td>
                    <td>Cross-site request forgery protection</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td className="py-2">auth_token</td>
                    <td>Secure authentication token</td>
                    <td>30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.2 Functional Cookies
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These cookies enable enhanced functionality and personalization. They remember your preferences and settings to provide a more personalized experience.
            </p>
            <div className={`p-4 rounded-lg mb-6 ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={theme === 'dark' ? 'text-white' : 'text-[#121212]'}>
                    <th className="text-left pb-2">Cookie Name</th>
                    <th className="text-left pb-2">Purpose</th>
                    <th className="text-left pb-2">Duration</th>
                  </tr>
                </thead>
                <tbody className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                  <tr>
                    <td className="py-2">theme_preference</td>
                    <td>Stores light/dark mode preference</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2">language</td>
                    <td>Stores language preference</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2">user_settings</td>
                    <td>Stores application preferences</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2">timezone</td>
                    <td>Stores timezone preference</td>
                    <td>1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.3 Analytics Cookies
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These cookies help us understand how visitors interact with VizeEST by collecting and reporting information anonymously. This helps us improve our Service.
            </p>
            <div className={`p-4 rounded-lg mb-6 ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={theme === 'dark' ? 'text-white' : 'text-[#121212]'}>
                    <th className="text-left pb-2">Cookie Name</th>
                    <th className="text-left pb-2">Purpose</th>
                    <th className="text-left pb-2">Duration</th>
                  </tr>
                </thead>
                <tbody className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                  <tr>
                    <td className="py-2">_ga</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td className="py-2">_ga_*</td>
                    <td>Google Analytics - maintains session state</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td className="py-2">_gid</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>24 hours</td>
                  </tr>
                  <tr>
                    <td className="py-2">analytics_session</td>
                    <td>Internal analytics tracking</td>
                    <td>30 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              3.4 Marketing Cookies
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These cookies are used to track visitors across websites and display relevant advertisements. They help us measure the effectiveness of our marketing campaigns.
            </p>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#F8FAFB]'}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={theme === 'dark' ? 'text-white' : 'text-[#121212]'}>
                    <th className="text-left pb-2">Cookie Name</th>
                    <th className="text-left pb-2">Purpose</th>
                    <th className="text-left pb-2">Duration</th>
                  </tr>
                </thead>
                <tbody className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
                  <tr>
                    <td className="py-2">_fbp</td>
                    <td>Facebook Pixel - advertising optimization</td>
                    <td>3 months</td>
                  </tr>
                  <tr>
                    <td className="py-2">li_sugr</td>
                    <td>LinkedIn - browser identifier</td>
                    <td>3 months</td>
                  </tr>
                  <tr>
                    <td className="py-2">utm_*</td>
                    <td>Campaign tracking parameters</td>
                    <td>Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              4. Similar Technologies
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              In addition to cookies, we may use other similar technologies:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Local Storage:</strong> Used to store data locally on your browser that persists even after you close your browser window.</li>
              <li><strong>Session Storage:</strong> Similar to local storage but cleared when you close your browser.</li>
              <li><strong>Web Beacons:</strong> Small graphic images (also known as pixel tags) used to track user activity and collect data.</li>
              <li><strong>Browser Fingerprinting:</strong> Collecting device and browser attributes to identify unique users for security purposes.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              5. Third-Party Cookies
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Some cookies on VizeEST are placed by third-party services. We use the following third-party services that may set cookies:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Google Analytics:</strong> Web analytics service to understand how visitors use our platform.</li>
              <li><strong>Stripe:</strong> Payment processing service for secure transactions.</li>
              <li><strong>Intercom:</strong> Customer communication platform for support chat.</li>
              <li><strong>HubSpot:</strong> Marketing automation and CRM platform.</li>
              <li><strong>LinkedIn Insights:</strong> Business analytics for marketing campaigns.</li>
              <li><strong>Facebook Pixel:</strong> Advertising and conversion tracking.</li>
            </ul>
            <p className={`mt-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              These third parties have their own privacy policies, and we encourage you to read them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6. Managing Cookies
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You have several options for managing cookies:
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.1 Cookie Consent Banner
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              When you first visit VizeEST, you will see a cookie consent banner that allows you to accept or customize your cookie preferences. You can change your preferences at any time through your account settings.
            </p>

            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.2 Browser Settings
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className={`mt-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Please note that blocking or deleting cookies may impact your ability to use VizeEST and may result in certain features not functioning properly.
            </p>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.3 Browser-Specific Instructions
            </h3>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 mt-6 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              6.4 Opt-Out Links
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              You can opt out of certain third-party cookies using these tools:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li>Google Analytics Opt-out Browser Add-on</li>
              <li>Network Advertising Initiative Opt-out Page</li>
              <li>Digital Advertising Alliance Opt-out Page</li>
              <li>Your Online Choices (EU)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              7. Enterprise Cookie Controls
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              For enterprise customers, VizeEST offers additional cookie management capabilities:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Organization-Wide Settings:</strong> Administrators can configure cookie preferences for all users in their organization.</li>
              <li><strong>Custom Cookie Policies:</strong> Enterprise plans can customize which non-essential cookies are enabled by default.</li>
              <li><strong>Audit Logs:</strong> Track cookie consent changes across your organization.</li>
              <li><strong>Compliance Reporting:</strong> Generate reports for regulatory compliance requirements.</li>
              <li><strong>SSO Integration:</strong> Cookie preferences sync with your identity provider.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              8. Legal Basis for Cookies (GDPR)
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              Under the General Data Protection Regulation (GDPR), we rely on the following legal bases for using cookies:
            </p>
            <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              <li><strong>Strictly Necessary Cookies:</strong> Legitimate interest - these are essential for the Service to function.</li>
              <li><strong>Functional Cookies:</strong> Consent - you can choose whether to accept these.</li>
              <li><strong>Analytics Cookies:</strong> Consent - you can opt in or out of analytics tracking.</li>
              <li><strong>Marketing Cookies:</strong> Consent - you must explicitly opt in to marketing cookies.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              9. Data Retention
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              Cookie data is retained for the duration specified in the cookie tables above. Analytics data collected through cookies is aggregated and anonymized after 26 months. You can request deletion of cookie-related data by contacting us at <a href="mailto:privacy@vizeest.com" className="text-[#4EBABD] hover:underline">privacy@vizeest.com</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              10. Updates to This Policy
            </h2>
            <p className={theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. For enterprise customers, we will also send email notifications of significant changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#121212]'}`}>
              11. Contact Us
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
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
