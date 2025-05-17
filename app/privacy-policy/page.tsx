import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Effective Date: TBD
              <br />
              Last Updated: 16 May 2025
            </p>
          </div>

          <p className="text-gray-700">
            Thank you for using Yuktara.com. Your privacy is critically important to us. This Privacy Policy explains
            how we collect, use, and protect your personal data when you use our platform, browser extension, APIs, and
            related services (collectively, "Yuktara" or "the Service").
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. What Information We Collect</h2>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.1. Account Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Name, email address, profile picture</li>
            <li>LinkedIn profile data via OAuth (summary, headline, experience, posts)</li>
            <li>Subscription plan and billing data</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.2. User-Provided Content</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Drafts, posts, media, and comments you create or upload</li>
            <li>Personal experiences, stories, and custom inputs for content generation</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.3. Usage Data</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Pages visited, features used, post engagement analytics</li>
            <li>Device info, IP address, browser type, operating system</li>
            <li>Interaction logs with our AI tools (for improving model performance)</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.4. Third-Party Integrations</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Data from LinkedIn (read-only)</li>
            <li>Payment data via Stripe/Razorpay (we never store card numbers)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Data</h2>
          <p className="text-gray-700">We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide AI-powered content suggestions, profile analysis, and engagement tips</li>
            <li>Automate and schedule LinkedIn posts</li>
            <li>Improve content quality using AI models trained on your preferences</li>
            <li>Send notifications and performance summaries</li>
            <li>Offer personalized growth roadmaps and analytics</li>
            <li>Ensure compliance with LinkedIn's API and community standards</li>
          </ul>
          <p className="text-gray-700 mt-4">We do not sell your data to any third parties.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. AI Model Usage</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AI-generated content is based on your data but not stored or reused in public models.</li>
            <li>
              Personalized AI models are trained only on your private database (posts, likes, stories) to maintain your
              tone and brand voice.
            </li>
            <li>We may analyze anonymized trends in aggregate (e.g. "Top 5 hooks this month") to improve features.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Sharing and Third Parties</h2>
          <p className="text-gray-700">We only share data when necessary to operate the platform:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>LinkedIn API: For posting content, analyzing your profile</li>
            <li>Stripe / Razorpay / Dodo payments: For secure billing and subscriptions</li>
            <li>AWS / Firebase / Cloudflare: For hosting, storage, and CDN services</li>
            <li>OpenAI or other LLM providers: For generating content based on your inputs (processed, not stored)</li>
          </ul>
          <p className="text-gray-700 mt-4">All vendors are GDPR-compliant and vetted for security.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We use 256-bit encryption for all user data in transit and at rest.</li>
            <li>OAuth tokens (for LinkedIn) are stored securely using industry-standard hashing and encryption.</li>
            <li>Access to production data is limited to authorized personnel only.</li>
            <li>Daily backups and automated disaster recovery protocols are in place.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. User Rights</h2>
          <p className="text-gray-700">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Access and download all your stored data</li>
            <li>Correct or update your account information</li>
            <li>Request data deletion or account termination</li>
            <li>Opt out of analytics or marketing communications</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can contact us anytime at support@yuktara.com to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
          <p className="text-gray-700">We use essential cookies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Keep you logged in securely</li>
            <li>Track in-app behavior (e.g., which features you use most)</li>
            <li>Analyze usage patterns via tools like Google Analytics and Mixpanel</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can disable cookies in your browser settings, but this may impact functionality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We retain user data only as long as your account is active.</li>
            <li>Upon account deletion, your data is fully erased within 30 days from all active systems.</li>
            <li>We may retain anonymized logs for usage analysis and system optimization.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. International Transfers</h2>
          <p className="text-gray-700">
            Our servers are hosted in the U.S. and India. If you access Yuktara from outside these regions, you consent
            to transferring your data to our servers for processing in compliance with applicable laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy to reflect product improvements, legal compliance, or security upgrades.
            You will be notified via email and in-app banners at least 7 days before any material changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, concerns, or complaints, reach out to:
            <br />
            Markupx Brands Technologies Pvt Ltd
            <br />
            Email: Founder@markupxbrands.com
            <br />
            Address: Delhi, India
          </p>
        </div>
      </div>
    </div>
  )
}
