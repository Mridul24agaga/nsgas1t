import Header from "@/components/header"
import { LinkedInContentLanding } from "@/components/linkedin-dashboard"
import { SimpleTrustedBy } from "@/components/simple-trusted-by"
import { YuktaraFeatureCards } from "@/components/yuktara-feature-cards"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeatureHighlights } from "@/components/feature-highlight"
import { PricingSection } from "@/components/pricing-section"
import { CtaBanner } from "@/components/cta-banner"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import StickyBannerDemo from "@/components/stickybanner"
import SocialComparison from "@/components/howitworksa"
import { YuktaraTextEffect } from "@/components/yuktara"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Sticky Banner */}

      {/* Gap between banner and header */}
      <div className="h-16"></div>

      {/* Header */}
      <Header />

      {/* Hero Section - Centered LinkedIn Content Landing */}
      <LinkedInContentLanding />

      {/* Trusted By Section */}
      <SimpleTrustedBy />

      {/* Problems Section with Physics Animation */}

      {/* YUKTARA Feature Cards Section */}
      <YuktaraFeatureCards />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Feature Highlights Section */}
      <FeatureHighlights />

      {/* Testimonials Section */}
      <SocialComparison />

      {/* Pricing Section */}
      <PricingSection />

      <FAQSection />

      <Footer />
      {/* YUKTARA Text Effect */}
      <div className="relative w-full py-8 md:py-12 lg:py-16 overflow-hidden">
        <YuktaraTextEffect />
      </div>
     
    </div>
  )
}
