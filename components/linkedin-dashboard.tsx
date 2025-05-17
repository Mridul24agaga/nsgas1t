import Image from "next/image"
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
              opacity: 0.3,
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
              opacity: 0.3,
              boxShadow: "0 0 6px rgba(147, 51, 234, 0.2), 0 0 12px rgba(59, 130, 246, 0.2)",
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 w-full">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-transparent bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-purple-600 shadow-sm">
            <Zap className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              The #1 AI Tool For Viral LinkedIn Content
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Create viral <span className="text-blue-600">LinkedIn</span> content
            <br />
            <span className="text-purple-600">in minutes</span>
          </h1>

          {/* Feature points */}
          <div className="mb-10 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <Search className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">Search top viral posts for inspiration</span>
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

          {/* CTA Button */}
          <div className="mb-4">
            <button className="rounded-xl bg-gray-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-gray-800">
              Get started for <span className="text-cyan-400">FREE</span>
            </button>
          </div>

          {/* No credit card */}
          <p className="mb-10 text-sm text-gray-500">No credit card required</p>

          {/* Google Reviews */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <Image src="/google-logo.png" alt="Google" width={24} height={24} className="h-6 w-6" />
              <span className="text-sm text-gray-700">Google Reviews 4.9</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Profile pictures */}
          <div className="mb-4 flex justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src={`/professional-headshot.png?height=40&width=40&query=professional headshot ${i}`}
                    alt={`User ${i}`}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Trust text */}
          <p className="text-sm text-gray-600">
            <span className="text-red-500">❤</span> Trusted by founders, creators, marketers and working professionals
            from
          </p>
        </div>
      </div>
    </div>
  )
}
