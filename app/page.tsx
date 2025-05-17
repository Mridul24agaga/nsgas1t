import { Header } from "@/components/header"
import { LinkedInContentLanding } from "@/components/linkedin-dashboard"
import { SimpleTrustedBy } from "@/components/simple-trusted-by"
import { YuktaraFeatureCards } from "@/components/yuktara-feature-cards"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeatureHighlights } from "@/components/feature-highlight"
import { UserTypesSection } from "@/components/user-types-section"
import { TestimonialsSection } from "@/components/testimonial-section"
import PricingSection from "@/components/pricing-section"
import { CtaBanner } from "@/components/cta-banner"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import SocialComparison from "@/components/howitworksa"
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section - Centered LinkedIn Content Landing */}
      <div className="container mx-auto px-4 py-12 md:py-20 flex justify-center">
        <div className="w-full max-w-3xl">
          <LinkedInContentLanding />
        </div>
      </div>

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
      <SocialComparison/>

      {/* Pricing Section */}
      <PricingSection />

      <FAQSection />

      {/* CTA Banner */}
      <CtaBanner />

      <Footer />
      <div className="relative w-full py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[180px] font-bold text-black opacity-10 select-none">YUKTARA</p>
        </div>
      </div>
    </div>
  )
}
