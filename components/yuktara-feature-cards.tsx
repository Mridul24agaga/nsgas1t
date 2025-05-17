"use client"

import Image from "next/image"
import { CheckCircle, PenLine, Calendar, Users, BarChart3 } from "lucide-react"

export function YuktaraFeatureCards() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Analyze and optimize your LinkedIn profile",
      description: "Get personalized recommendations to make your profile stand out and attract the right audience.",
      color: "#10b981", // green
      bulletPoints: ["Profile strength analysis", "Keyword optimization", "Competitor benchmarking"],
    },
    {
      icon: <PenLine className="w-8 h-8 text-purple-600" />,
      title: "Generate high-performing posts in your voice",
      description:
        "AI-powered content creation that sounds like you, resonates with your audience, and drives engagement.",
      color: "#8b5cf6", // purple
      bulletPoints: ["AI content generation", "Voice matching technology", "Engagement optimization"],
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Auto-schedule content for peak engagement",
      description: "Post at the perfect time when your audience is most active to maximize reach and interaction.",
      color: "#3b82f6", // blue
      bulletPoints: ["Optimal time detection", "Automated scheduling", "Cross-platform posting"],
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Engage meaningfully with your network",
      description: "Build genuine relationships with smart engagement suggestions and automated follow-ups.",
      color: "#ec4899", // pink
      bulletPoints: ["Smart engagement suggestions", "Automated follow-ups", "Relationship tracking"],
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Track performance with deep analytics",
      description: "Measure your growth, understand what works, and continuously improve your LinkedIn strategy.",
      color: "#f59e0b", // amber
      bulletPoints: ["Comprehensive performance metrics", "Content effectiveness analysis", "Growth trend reporting"],
    },
  ]

  return (
    <section className="py-20 bg-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }

        .feature-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (min-width: 768px) {
          .feature-card {
            flex-direction: row;
            height: 400px;
          }
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .feature-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .feature-visual img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }

        .bullet-point {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          color: #000000;
        }

        .bullet-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .cta-button {
          display: inline-block;
          background-color: #1e293b;
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          text-align: center;
          transition: background-color 0.2s ease;
          text-decoration: none;
          margin-top: 1.5rem;
          width: fit-content;
          white-space: nowrap;
        }

        .cta-button:hover {
          background-color: #0f172a;
        }

        .visual-element {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-content {
          position: relative;
          z-index: 10;
          width: 80%;
          max-width: 400px;
        }

        .decoration {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .decoration-1 {
          width: 200px;
          height: 200px;
          top: -50px;
          right: -50px;
        }

        .decoration-2 {
          width: 150px;
          height: 150px;
          bottom: 20px;
          left: 20px;
        }

        .decoration-3 {
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .badge {
          background-color: #f3e8ff;
          color: #9333ea;
          font-weight: 500;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="badge">Meet Yuktara</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Your End-to-End
            <br />
            LinkedIn Growth Platform
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Built for job seekers, creators, and business developers, YUKTARA helps you:
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content md:w-1/2">
                <div className="mb-2">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-black mb-8">{feature.description}</p>

                <div className="mt-auto space-y-2 mb-8">
                  {feature.bulletPoints.map((point, i) => (
                    <div key={i} className="bullet-point">
                      <div className="bullet-dot" style={{ backgroundColor: feature.color }}></div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

               
              </div>

              <div className="feature-visual md:w-1/2" style={{ backgroundColor: feature.color }}>
                <div className="visual-element">
                  <div className="decoration decoration-1"></div>
                  <div className="decoration decoration-2"></div>
                  <div className="decoration decoration-3"></div>

                  <div className="visual-content">
                    {index === 0 && (
                      <Image
                        src="/linkedin1.png"
                        alt="LinkedIn profile optimization"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    )}

                    {index === 1 && (
                      <Image
                        src="/linkedin2.png"
                        alt="AI content generation"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    )}

                    {index === 2 && (
                      <Image
                        src="/linkedin3.png"
                        alt="Content scheduling calendar"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    )}

                    {index === 3 && (
                      <Image
                        src="/linkedin4.png"
                        alt="Network engagement"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    )}

                    {index === 4 && (
                      <Image
                        src="/linkedin5.png"
                        alt="Analytics dashboard"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
