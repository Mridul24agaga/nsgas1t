"use client"
import { LightbulbIcon, BarChart2, Users, Zap, MessageSquare, Layers } from "lucide-react"

export function FeatureHighlights() {
  const features = [
    {
      icon: <LightbulbIcon className="h-6 w-6 text-purple-600" />,
      title: "AI-Powered Content",
      description: "Generate high-quality LinkedIn posts that sound like you with our advanced AI technology.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-purple-600" />,
      title: "Smart Analytics",
      description: "Track your LinkedIn performance with detailed analytics and actionable insights.",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Network Growth",
      description: "Automatically grow your LinkedIn network with targeted connection requests and follow-ups.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Automated Scheduling",
      description: "Schedule your content at optimal times for maximum engagement and reach.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      title: "Smart Responses",
      description: "Get AI-powered response suggestions to engage with your network more effectively.",
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      title: "Multi-Platform Integration",
      description: "Seamlessly integrate with your existing tools and platforms for a streamlined workflow.",
    },
  ]

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 mb-4 border border-purple-200">
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Everything you need to succeed on LinkedIn
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Yuktara combines AI-powered tools with smart automation to help you grow your LinkedIn presence and generate
            real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border-b md:border-r md:last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(2n)]:border-r border-gray-200 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
