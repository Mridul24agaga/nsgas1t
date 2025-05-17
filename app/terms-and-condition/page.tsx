import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Effective Date: TBD
              <br />
              Last Updated: 16 May 2025
            </p>
          </div>

          <p className="text-gray-700">
            Welcome to Yuktara.com — an AI-powered LinkedIn growth platform designed to help professionals enhance their
            personal brand. These Terms of Service ("Terms") govern your use of our website, browser extension, APIs,
            and associated services (collectively, the "Platform" or "Yuktara"). By accessing or using Yuktara, you
            agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Eligibility</h2>
          <p className="text-gray-700">To use Yuktara, you must:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Be at least 18 years old or of legal working age in your jurisdiction.</li>
            <li>Have a valid LinkedIn account.</li>
            <li>Provide accurate account and billing information.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            If you are using the platform on behalf of a company or organization, you confirm that you are authorized to
            bind that entity to these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use of the Platform</h2>
          <p className="text-gray-700">You may use Yuktara to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Analyze and improve your LinkedIn profile</li>
            <li>Generate AI-powered content</li>
            <li>Schedule and publish posts</li>
            <li>Track engagement and analytics</li>
            <li>Receive personalized growth recommendations</li>
            <li>Use our browser extension to interact with LinkedIn more effectively</li>
          </ul>

          <p className="text-gray-700 mt-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use Yuktara for spam, automation abuse, or violating LinkedIn's Terms of Use</li>
            <li>Share offensive, unlawful, or misleading content</li>
            <li>Reverse-engineer, scrape, or tamper with our systems or AI models</li>
            <li>Impersonate others or misrepresent your identity</li>
          </ul>

          <p className="text-gray-700 mt-4">
            We reserve the right to suspend or terminate your access for violating these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. AI-Generated Content</h2>
          <p className="text-gray-700">Yuktara uses AI to generate post drafts, comments, and suggestions based on:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Your inputs</li>
            <li>Your previous posts</li>
            <li>Publicly available patterns</li>
          </ul>

          <p className="text-gray-700 mt-4">While we strive to maintain accuracy and relevance:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You are responsible for reviewing and editing AI-generated content before publishing.</li>
            <li>
              We are not liable for reputational, professional, or legal consequences arising from AI-generated content
              used without review.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment and Subscriptions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access to core features requires a paid subscription.</li>
            <li>All fees are displayed at the time of purchase and are non-refundable unless stated otherwise.</li>
            <li>Subscriptions auto-renew unless canceled at least 24 hours before the billing date.</li>
            <li>Payment is securely processed via Stripe, Razorpay, or other integrated providers.</li>
            <li>Failure to pay or renew may result in suspension or downgrade of your account.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Account Security</h2>
          <p className="text-gray-700">You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Maintaining the confidentiality of your account login</li>
            <li>Ensuring no unauthorized access occurs through your credentials</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Notify us immediately at support@yuktara.com if you suspect unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Termination</h2>
          <p className="text-gray-700">
            You may cancel your subscription or delete your account at any time from your dashboard or by contacting
            support.
          </p>
          <p className="text-gray-700 mt-4">We may terminate or suspend your access if:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You violate these Terms or applicable laws</li>
            <li>You misuse the platform in ways that impact other users or system integrity</li>
          </ul>

          <p className="text-gray-700 mt-4">Upon termination:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Your access to premium features will cease</li>
            <li>Your stored data may be deleted within 30 days, subject to our Privacy Policy</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              All content, design, software, and code on Yuktara are owned by Markupx Brands Technologies Pvt Ltd.
            </li>
            <li>You retain ownership of your LinkedIn content and uploaded media.</li>
            <li>
              Generated drafts and AI suggestions are licensed to you for personal or professional use under your
              account only.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Disclaimers</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Yuktara is not affiliated with or endorsed by LinkedIn or Microsoft.</li>
            <li>We do not guarantee engagement, job offers, or specific business results.</li>
            <li>The platform is provided "as-is" without warranties of any kind, express or implied.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-700">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Yuktara will not be liable for any indirect, incidental, or consequential damages.</li>
            <li>
              Our total liability in any matter arising out of or related to the service is limited to the amount paid
              by you in the past 6 months.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and interpreted under the laws of India. Any disputes shall be resolved in
            the jurisdiction of New Delhi, unless otherwise required by law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms to reflect changes in law, features, or operations. We'll notify you of material
            changes at least 7 days in advance via email or in-app notifications. Continued use of the platform
            constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
          <p className="text-gray-700">
            Markupx Brands Technologies Pvt Ltd
            <br />
            Email: Founder@markupxbrands.com
            <br />
            Support: support@yuktara.com
            <br />
            Address: Delhi, India
          </p>
        </div>
      </div>
    </div>
  )
}
