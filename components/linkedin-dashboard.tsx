import { Search, Zap, Sparkles } from "lucide-react"
import { Poppins } from "next/font/google"

// Initialize the Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export function LinkedInContentLanding() {
  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center ${poppins.className} relative overflow-hidden`}
    >
      {/* Grid background with gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-white">
        {/* Horizontal grid lines */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-[1px] left-0"
            style={{
              top: `${i * 20}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.5) 25%, rgba(59, 130, 246, 0.5) 50%, rgba(147, 51, 234, 0.5) 75%, transparent 100%)",
              opacity: 0.15, // Reduced from 0.3 to 0.15 to make it lighter
              boxShadow: "0 0 6px rgba(147, 51, 234, 0.2), 0 0 12px rgba(59, 130, 246, 0.2)",
            }}
          />
        ))}

        {/* Vertical grid lines */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-[1px] top-0"
            style={{
              left: `${i * 20}%`,
              background:
                "linear-gradient(180deg, transparent 0%, rgba(147, 51, 234, 0.5) 25%, rgba(59, 130, 246, 0.5) 50%, rgba(147, 51, 234, 0.5) 75%, transparent 100%)",
              opacity: 0.15, // Reduced from 0.3 to 0.15 to make it lighter
              boxShadow: "0 0 6px rgba(147, 51, 234, 0.2), 0 0 12px rgba(59, 130, 246, 0.2)",
            }}
          />
        ))}
      </div>

      {/* Content container - adjusted for equal vertical spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 w-full my-auto">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-transparent bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-purple-600 shadow-sm">
            <Zap className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Backed by Top Creators, built for career impact
            </span>
          </div>

          {/* Updated Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Your <span className="text-blue-600">AI Co-Pilot</span> for
            <br />
            <span className="text-purple-600">LinkedIn Growth</span>
          </h1>

          {/* Updated Subheadline */}
          <p className="mb-10 text-xl text-gray-700">
            Build your personal brand, boost engagement, and grow your opportunities—on autopilot.
          </p>

          {/* Feature points */}
          <div className="mb-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <Search className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">Search viral posts for inspiration</span>
            </div>

            <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <svg
                className="mr-2 h-4 w-4 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <span className="text-sm text-gray-700">Pick from 200+ templates that work</span>
            </div>

            <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">Let AI turn your raw ideas into viral posts</span>
            </div>
          </div>

          {/* Updated CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA Button */}
            <button className="rounded-xl bg-gray-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-gray-800 w-full sm:w-auto">
              → Get Free Profile Analysis
            </button>

            {/* Secondary CTA Button */}
            <button className="rounded-xl bg-white border border-gray-200 px-8 py-4 text-lg font-medium text-gray-800 shadow-sm transition-all hover:bg-gray-50 w-full sm:w-auto">
              Explore Features ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
